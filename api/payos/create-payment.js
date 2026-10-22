const { createPaymentLink, getPayOSConfig } = require('../_payos.cjs');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, plan = 'lifetime', returnUrl, cancelUrl } = req.body || {};

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email address is required.' });
    }

    const isLifetime = plan.toLowerCase() === 'lifetime';
    const amount = isLifetime ? 149000 : 49000;
    const planName = isLifetime ? 'Lifetime' : '1 Year';

    // PayOS requires orderCode to be an integer
    const orderCode = Math.floor(Date.now() / 1000) * 100 + Math.floor(Math.random() * 100);

    const host = req.headers.host || 'www.keylauncher.app';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const defaultReturnUrl = `${protocol}://${host}/activate?provider=payos&orderCode=${orderCode}&email=${encodeURIComponent(email)}&plan=${plan}`;
    const defaultCancelUrl = `${protocol}://${host}/#pricing`;

    const { clientId } = getPayOSConfig();
    if (!clientId) {
      // Configuration notice if user hasn't set env vars yet
      return res.status(503).json({
        error: 'PAYOS_NOT_CONFIGURED',
        message: 'PayOS gateway is being configured. Please set PAYOS_CLIENT_ID, PAYOS_API_KEY, and PAYOS_CHECKSUM_KEY in Vercel environment variables.'
      });
    }

    const paymentData = await createPaymentLink({
      orderCode,
      amount,
      description: `KeyLauncher ${planName}`,
      buyerEmail: email.trim(),
      cancelUrl: cancelUrl || defaultCancelUrl,
      returnUrl: returnUrl || defaultReturnUrl
    });

    return res.status(200).json({
      success: true,
      orderCode,
      amount,
      currency: 'VND',
      checkoutUrl: paymentData.checkoutUrl,
      qrCode: paymentData.qrCode,
      paymentLinkId: paymentData.paymentLinkId
    });
  } catch (err) {
    console.error('PayOS create-payment error:', err);
    return res.status(500).json({
      error: 'PAYMENT_CREATION_FAILED',
      message: err.message || 'Failed to initialize payment'
    });
  }
};
