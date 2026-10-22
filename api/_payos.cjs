const crypto = require('crypto');

const PAYOS_API_URL = 'https://api-merchant.payos.vn/v2/payment-requests';

function getPayOSConfig() {
  return {
    clientId: process.env.PAYOS_CLIENT_ID || '',
    apiKey: process.env.PAYOS_API_KEY || '',
    checksumKey: process.env.PAYOS_CHECKSUM_KEY || ''
  };
}

/**
 * Creates HMAC-SHA256 signature for PayOS createPaymentLink.
 * PayOS requires: amount=${amount}&cancelUrl=${cancelUrl}&description=${description}&orderCode=${orderCode}&returnUrl=${returnUrl}
 */
function createPaymentRequestSignature({ amount, cancelUrl, description, orderCode, returnUrl }, checksumKey) {
  const dataStr = `amount=${amount}&cancelUrl=${cancelUrl}&description=${description}&orderCode=${orderCode}&returnUrl=${returnUrl}`;
  return crypto.createHmac('sha256', checksumKey).update(dataStr).digest('hex');
}

/**
 * Verifies PayOS webhook data signature.
 * PayOS sorts all keys of `data` alphabetically and calculates HMAC-SHA256 with checksumKey.
 */
function verifyWebhookSignature(data, signature, checksumKey) {
  if (!data || !signature || !checksumKey) return false;

  const sortedKeys = Object.keys(data).sort();
  const pairs = [];
  for (const key of sortedKeys) {
    const val = data[key];
    const valStr = val === null || val === undefined ? '' : String(val);
    pairs.push(`${key}=${valStr}`);
  }
  const dataStr = pairs.join('&');
  const expectedSig = crypto.createHmac('sha256', checksumKey).update(dataStr).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(signature));
}

/**
 * Creates a payment link via PayOS API.
 *
 * @param {Object} params
 * @param {number} params.orderCode - Unique integer identifier
 * @param {number} params.amount - Amount in VND (e.g. 149000)
 * @param {string} params.description - Max 25 chars, alphanumeric/spaces only
 * @param {string} params.buyerEmail - Customer email address
 * @param {string} params.cancelUrl - Cancel redirect URL
 * @param {string} params.returnUrl - Success return URL
 * @returns {Promise<{ checkoutUrl: string, qrCode: string, orderCode: number }>}
 */
async function createPaymentLink({ orderCode, amount, description, buyerEmail, cancelUrl, returnUrl }) {
  const { clientId, apiKey, checksumKey } = getPayOSConfig();

  if (!clientId || !apiKey || !checksumKey) {
    throw new Error('PayOS credentials missing. Set PAYOS_CLIENT_ID, PAYOS_API_KEY, PAYOS_CHECKSUM_KEY.');
  }

  // Sanitize description for PayOS (max 25 chars, ASCII only)
  const cleanDesc = description
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .trim()
    .slice(0, 25);

  const signature = createPaymentRequestSignature(
    { amount, cancelUrl, description: cleanDesc, orderCode, returnUrl },
    checksumKey
  );

  const payload = {
    orderCode,
    amount,
    description: cleanDesc,
    buyerEmail: buyerEmail || undefined,
    cancelUrl,
    returnUrl,
    signature
  };

  const response = await fetch(PAYOS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': clientId,
      'x-api-key': apiKey
    },
    body: JSON.stringify(payload)
  });

  const resJson = await response.json();
  if (resJson.code !== '00' || !resJson.data) {
    throw new Error(`PayOS Error [${resJson.code}]: ${resJson.desc || 'Failed to create payment link'}`);
  }

  return resJson.data; // contains checkoutUrl, qrCode, paymentLinkId, etc.
}

/**
 * Queries payment status for an orderCode from PayOS.
 *
 * @param {number|string} orderCode
 * @returns {Promise<{ status: string, amount: number, amountPaid: number }>}
 */
async function getPaymentStatus(orderCode) {
  const { clientId, apiKey } = getPayOSConfig();

  if (!clientId || !apiKey) {
    throw new Error('PayOS credentials missing. Set PAYOS_CLIENT_ID, PAYOS_API_KEY.');
  }

  const response = await fetch(`${PAYOS_API_URL}/${orderCode}`, {
    method: 'GET',
    headers: {
      'x-client-id': clientId,
      'x-api-key': apiKey
    }
  });

  const resJson = await response.json();
  if (resJson.code !== '00' || !resJson.data) {
    throw new Error(`PayOS Error [${resJson.code}]: ${resJson.desc || 'Order not found'}`);
  }

  return resJson.data; // data.status can be "PAID", "PENDING", "CANCELLED", etc.
}

module.exports = {
  createPaymentRequestSignature,
  verifyWebhookSignature,
  createPaymentLink,
  getPaymentStatus,
  getPayOSConfig
};
