const assert = require('node:assert/strict');
const { test } = require('node:test');
const { generateLicense, verifyLicense, EMBEDDED_PUBLIC_KEY_BASE64 } = require('../api/_license.cjs');

test('license generator produces valid cryptographically verifiable ECDSA P-256 license', () => {
  const email = 'user@example.com';
  const { key, payload } = generateLicense({ email, type: 'LIFETIME' });

  assert.ok(key.startsWith('KL1.'));
  assert.equal(payload.email, 'user@example.com');
  assert.equal(payload.type, 'LIFETIME');
  assert.equal(payload.exp, 0);

  const verification = verifyLicense(key);
  assert.equal(verification.valid, true);
  assert.equal(verification.payload.email, 'user@example.com');
  assert.equal(verification.payload.type, 'LIFETIME');
  assert.equal(verification.payload.app, 'com.loitran.minimalt9launcher');
});

test('license validator rejects tampered payload or signature', () => {
  const { key } = generateLicense({ email: 'genuine@example.com', type: 'LIFETIME' });
  const parts = key.split('.');

  // Tamper with payload
  const tamperedKey = `${parts[0]}.eyJuYW1lIjoiZmFrZSJ9.${parts[2]}`;
  const check1 = verifyLicense(tamperedKey);
  assert.equal(check1.valid, false);

  // Tamper with signature
  const tamperedSig = `${parts[0]}.${parts[1]}.${parts[2].slice(0, -4)}XXXX`;
  const check2 = verifyLicense(tamperedSig);
  assert.equal(check2.valid, false);
});

test('license validator detects expired license', () => {
  // Expired license: expiresInDays = -1
  const { key } = generateLicense({ email: 'expired@example.com', type: 'YEARLY', expiresInDays: -1 });
  const result = verifyLicense(key);
  assert.equal(result.valid, false);
  assert.equal(result.expired, true);
  assert.ok(result.error.includes('expired'));
});
