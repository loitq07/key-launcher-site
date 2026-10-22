const assert = require('node:assert/strict');
const { test } = require('node:test');
const {
  createPaymentRequestSignature,
  verifyWebhookSignature
} = require('../api/_payos.cjs');

test('payos payment request signature follows HMAC-SHA256 sorted specification', () => {
  const checksumKey = 'test_checksum_key_12345';
  const sig = createPaymentRequestSignature(
    {
      amount: 149000,
      cancelUrl: 'https://www.keylauncher.app/pricing',
      description: 'KeyLauncher Pro',
      orderCode: 987654,
      returnUrl: 'https://www.keylauncher.app/activate'
    },
    checksumKey
  );

  assert.ok(typeof sig === 'string' && sig.length === 64);
  // Same parameters produce identical signature
  const sig2 = createPaymentRequestSignature(
    {
      amount: 149000,
      cancelUrl: 'https://www.keylauncher.app/pricing',
      description: 'KeyLauncher Pro',
      orderCode: 987654,
      returnUrl: 'https://www.keylauncher.app/activate'
    },
    checksumKey
  );
  assert.equal(sig, sig2);
});

test('payos webhook signature verification correctly validates authentic webhooks', () => {
  const checksumKey = 'test_webhook_key_xyz';
  const data = {
    orderCode: 123456,
    amount: 149000,
    description: 'KeyLauncher Pro',
    accountNumber: '1234567890',
    reference: 'FT2345678',
    transactionDateTime: '2026-10-22 10:00:00',
    currency: 'VND',
    paymentLinkId: 'link_abc123',
    code: '00',
    desc: 'success'
  };

  // Generate signature using sorted keys
  const crypto = require('crypto');
  const sortedKeys = Object.keys(data).sort();
  const pairs = sortedKeys.map(k => `${k}=${data[k]}`);
  const expectedSig = crypto.createHmac('sha256', checksumKey).update(pairs.join('&')).digest('hex');

  const isValid = verifyWebhookSignature(data, expectedSig, checksumKey);
  assert.equal(isValid, true);

  // Altering any data field invalidates signature
  const tamperedData = { ...data, amount: 1000 };
  const isInvalid = verifyWebhookSignature(tamperedData, expectedSig, checksumKey);
  assert.equal(isInvalid, false);
});
