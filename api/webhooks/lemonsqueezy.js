const crypto = require('crypto');
const { generateLicense } = require('../_license.cjs');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return res.status(503).json({ error: 'LEMONSQUEEZY_WEBHOOK_SECRET is not configured' });
  }

  try {
    const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    const signature = req.headers['x-signature'];

    if (!signature) {
      return res.status(400).json({ error: 'Missing X-Signature header' });
    }

    // Verify HMAC-SHA256 signature
    const hmac = crypto.createHmac('sha256', webhookSecret).update(rawBody).digest('hex');
    const isAuthentic = crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(signature));

    if (!isAuthentic) {
      console.warn('Lemon Squeezy webhook signature verification failed.');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const eventName = payload.meta ? payload.meta.event_name : '';

    if (eventName === 'order_created') {
      const orderAttributes = payload.data ? payload.data.attributes : {};
      const status = orderAttributes.status;

      if (status === 'paid') {
        const userEmail = orderAttributes.user_email;
        const firstItem = orderAttributes.first_order_item || {};
        const productName = (firstItem.product_name || '').toLowerCase();
        const variantName = (firstItem.variant_name || '').toLowerCase();

        const isLifetime = !productName.includes('year') && !variantName.includes('year');

        const { key } = generateLicense({
          email: userEmail,
          type: isLifetime ? 'LIFETIME' : 'YEARLY',
          expiresInDays: isLifetime ? 0 : 365
        });

        console.log(`Lemon Squeezy: Order paid by ${userEmail}. Generated license: ${key.slice(0, 16)}...`);

        // If email service (Resend) is configured, send the key via email
        if (process.env.RESEND_API_KEY && userEmail) {
          try {
            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from: 'Key Launcher <license@keylauncher.app>',
                to: [userEmail],
                subject: 'Your Key Launcher Pro License Key',
                html: `
                  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #000; color: #fff; border-radius: 12px;">
                    <h1 style="color: #F8D066; margin-bottom: 8px;">Thank you for getting Key Launcher Pro!</h1>
                    <p style="color: #aaa; font-size: 16px;">Your order has been confirmed.</p>
                    
                    <div style="background: #111; border: 1px solid #333; border-radius: 8px; padding: 16px; margin: 24px 0;">
                      <p style="font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Your 100% Offline License Key:</p>
                      <code style="display: block; font-size: 13px; color: #F8D066; word-break: break-all; background: #1a1a1a; padding: 12px; border-radius: 6px;">${key}</code>
                    </div>

                    <a href="https://www.keylauncher.app/activate?key=${encodeURIComponent(key)}" style="display: inline-block; background: #F8D066; color: #000; font-weight: bold; text-decoration: none; padding: 14px 28px; border-radius: 9999px; margin-bottom: 24px;">Activate on Key Launcher (1-Tap)</a>

                    <p style="color: #888; font-size: 13px; line-height: 1.6;">
                      Or open Key Launcher on your device &rarr; Settings &rarr; Activate with License Key &rarr; Paste your key.
                    </p>
                  </div>
                `
              })
            });
          } catch (emailErr) {
            console.error('Failed to send license email via Resend:', emailErr);
          }
        }

        return res.status(200).json({ success: true, keyGenerated: true });
      }
    }

    return res.status(200).json({ success: true, received: true });
  } catch (err) {
    console.error('Lemon Squeezy webhook error:', err);
    return res.status(500).json({ error: 'WEBHOOK_FAILED', message: err.message });
  }
};
