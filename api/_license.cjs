const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const EMBEDDED_PUBLIC_KEY_BASE64 =
  'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEe6UNy03koF12VdpDxWGszG9XmKnO+tB6mfbKUL6i4Cu7serl18pimSXivmSPFV5nqpyrrbOfrGIXd50103x8JQ==';

function getPrivateKeyPem() {
  if (process.env.LICENSE_PRIVATE_KEY_PEM) {
    let key = process.env.LICENSE_PRIVATE_KEY_PEM.trim();
    // Handle escaped newlines in env variables
    if (key.includes('\\n')) {
      key = key.replace(/\\n/g, '\n');
    }
    return key;
  }

  const localPath = path.join(__dirname, '..', 'secrets', 'license_private_key.pem');
  if (fs.existsSync(localPath)) {
    return fs.readFileSync(localPath, 'utf8');
  }

  throw new Error('License private key not configured. Set LICENSE_PRIVATE_KEY_PEM environment variable.');
}

function getPublicKeyPem() {
  if (process.env.LICENSE_PUBLIC_KEY_PEM) {
    let key = process.env.LICENSE_PUBLIC_KEY_PEM.trim();
    if (key.includes('\\n')) {
      key = key.replace(/\\n/g, '\n');
    }
    return key;
  }

  const localPath = path.join(__dirname, '..', 'secrets', 'license_public_key.pem');
  if (fs.existsSync(localPath)) {
    return fs.readFileSync(localPath, 'utf8');
  }

  // Construct PEM from embedded base64 public key
  const chunks = EMBEDDED_PUBLIC_KEY_BASE64.match(/.{1,64}/g).join('\n');
  return `-----BEGIN PUBLIC KEY-----\n${chunks}\n-----END PUBLIC KEY-----\n`;
}

function base64UrlEncode(buffer) {
  return Buffer.from(buffer)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return Buffer.from(base64, 'base64');
}

/**
 * Generates an ECDSA P-256 signed license key.
 *
 * @param {Object} options
 * @param {string} options.email - Customer email
 * @param {string} [options.type='LIFETIME'] - License type (e.g. LIFETIME, YEARLY)
 * @param {number} [options.expiresInDays=0] - Days until expiration (0 = never)
 * @param {number} [options.expiresAtSec] - Exact unix timestamp in seconds for expiry
 * @returns {{ key: string, payload: Object }}
 */
function generateLicense({ email, type = 'LIFETIME', expiresInDays = 0, expiresAtSec }) {
  const privateKey = getPrivateKeyPem();

  const nowSec = Math.floor(Date.now() / 1000);
  let expSec = 0;
  if (expiresAtSec !== undefined) {
    expSec = expiresAtSec;
  } else if (expiresInDays !== 0) {
    expSec = nowSec + expiresInDays * 86400;
  }

  const payload = {
    app: 'com.loitran.minimalt9launcher',
    v: 1,
    type: (type || 'LIFETIME').toUpperCase(),
    email: (email || 'anonymous').trim().toLowerCase(),
    iat: nowSec,
    exp: expSec
  };

  const payloadJson = JSON.stringify(payload);
  const signer = crypto.createSign('SHA256');
  signer.update(payloadJson);
  const signature = signer.sign(privateKey); // DER format

  const payloadB64 = base64UrlEncode(payloadJson);
  const sigB64 = base64UrlEncode(signature);

  const key = `KL1.${payloadB64}.${sigB64}`;
  return { key, payload };
}

/**
 * Verifies an ECDSA P-256 license key.
 *
 * @param {string} rawKey
 * @returns {{ valid: boolean, payload?: Object, error?: string, expired?: boolean }}
 */
function verifyLicense(rawKey) {
  if (!rawKey || typeof rawKey !== 'string') {
    return { valid: false, error: 'License key is empty' };
  }

  const trimmed = rawKey.trim();
  const parts = trimmed.split('.');
  if (parts.length !== 3 || parts[0] !== 'KL1') {
    return { valid: false, error: 'Invalid license format. Must start with KL1.' };
  }

  try {
    const publicKey = getPublicKeyPem();
    const payloadBuffer = base64UrlDecode(parts[1]);
    const sigBuffer = base64UrlDecode(parts[2]);
    const payloadJson = payloadBuffer.toString('utf8');
    const payload = JSON.parse(payloadJson);

    // Verify cryptographic signature
    const verifier = crypto.createVerify('SHA256');
    verifier.update(payloadJson);
    const isValidSig = verifier.verify(publicKey, sigBuffer);

    if (!isValidSig) {
      return { valid: false, error: 'Cryptographic signature is invalid or forged.' };
    }

    if (payload.app !== 'com.loitran.minimalt9launcher') {
      return { valid: false, error: `Invalid application ID: ${payload.app}` };
    }

    const nowSec = Math.floor(Date.now() / 1000);
    if (payload.exp > 0 && nowSec > payload.exp) {
      return {
        valid: false,
        expired: true,
        error: `License expired on ${new Date(payload.exp * 1000).toISOString()}`,
        payload
      };
    }

    return { valid: true, payload };
  } catch (err) {
    return { valid: false, error: `Verification error: ${err.message}` };
  }
}

module.exports = {
  generateLicense,
  verifyLicense,
  getPrivateKeyPem,
  getPublicKeyPem,
  EMBEDDED_PUBLIC_KEY_BASE64
};
