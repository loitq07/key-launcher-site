const { getPaymentStatus, getPayOSConfig } = require('../_payos.cjs');
const { generateLicense } = require('../_license.cjs');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { orderCode, email, plan = 'lifetime' } = req.query || {};

  if (!orderCode) {
    return res.status(400).json({ error: 'Missing orderCode parameter' });
  }

  const { clientId } = getPayOSConfig();
  if (!clientId) {
    return res.status(503).json({
      error: 'PAYOS_NOT_CONFIGURED',
      message: 'PayOS gateway is not configured.'
    });
  }

  try {
    const orderData = await getPaymentStatus(orderCode);
    const status = (orderData.status || '').toUpperCase();

    if (status === 'PAID') {
      const customerEmail = email || 'customer@payos.vn';
      const isLifetime = plan.toLowerCase() === 'lifetime';
      const { key, payload } = generateLicense({
        email: customerEmail,
        type: isLifetime ? 'LIFETIME' : 'YEARLY',
        expiresInDays: isLifetime ? 0 : 365
      });

      return res.status(200).json({
        status: 'PAID',
        orderCode,
        amount: orderData.amount,
        amountPaid: orderData.amountPaid,
        key,
        deeplink: `keylauncher://activate?key=${encodeURIComponent(key)}`,
        webActivationUrl: `https://www.keylauncher.app/activate?key=${encodeURIComponent(key)}`,
        payload
      });
    }

    return res.status(200).json({
      status, // PENDING, CANCELLED, PROCESSING, etc.
      orderCode,
      amount: orderData.amount,
      amountPaid: orderData.amountPaid
    });
  } catch (err) {
    console.error('PayOS check-status error:', err);
    return res.status(500).json({
      error: 'CHECK_STATUS_FAILED',
      message: err.message
    });
  }
};
