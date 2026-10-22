const { verifyWebhookSignature, getPayOSConfig } = require('../_payos.cjs');
const { generateLicense } = require('../_license.cjs');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { checksumKey } = getPayOSConfig();
  if (!checksumKey) {
    return res.status(503).json({ error: 'PAYOS_CHECKSUM_KEY is not configured' });
  }

  try {
    const body = req.body || {};
    const { code, desc, data, signature } = body;

    // Verify cryptographic signature from PayOS
    const isAuthentic = verifyWebhookSignature(data, signature, checksumKey);
    if (!isAuthentic) {
      console.warn('PayOS webhook signature verification failed.');
      return res.status(400).json({ error: 'Invalid PayOS webhook signature' });
    }

    if (code === '00' && (desc || '').toLowerCase() === 'success') {
      const { orderCode, amount, description } = data;
      console.log(`PayOS Payment Confirmed for orderCode=${orderCode}, amount=${amount}`);

      // Determine plan from amount or description
      const isLifetime = amount >= 100000;
      const customerEmail = data.buyerEmail || `order_${orderCode}@payos.keylauncher.app`;

      const { key, payload } = generateLicense({
        email: customerEmail,
        type: isLifetime ? 'LIFETIME' : 'YEARLY',
        expiresInDays: isLifetime ? 0 : 365
      });

      console.log(`Generated Key Launcher license for order ${orderCode}: ${key.take ? key.take(16) : key.slice(0, 16)}...`);

      // If email service (Resend) is configured, send the key via email
      if (process.env.RESEND_API_KEY && data.buyerEmail) {
        try {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'Key Launcher <license@keylauncher.app>',
              to: [data.buyerEmail],
              subject: 'Mã bản quyền Key Launcher Pro của bạn',
              html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #000; color: #fff; border-radius: 12px;">
                  <h1 style="color: #F8D066; margin-bottom: 8px;">Cảm ơn bạn đã nâng cấp Key Launcher Pro!</h1>
                  <p style="color: #aaa; font-size: 16px;">Giao dịch thanh toán VietQR qua PayOS (#${orderCode}) đã thành công.</p>
                  
                  <div style="background: #111; border: 1px solid #333; border-radius: 8px; padding: 16px; margin: 24px 0;">
                    <p style="font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Mã bản quyền của bạn (100% Ngoại tuyến):</p>
                    <code style="display: block; font-size: 13px; color: #F8D066; word-break: break-all; background: #1a1a1a; padding: 12px; border-radius: 6px;">${key}</code>
                  </div>

                  <a href="https://www.keylauncher.app/activate?key=${encodeURIComponent(key)}" style="display: inline-block; background: #F8D066; color: #000; font-weight: bold; text-decoration: none; padding: 14px 28px; border-radius: 9999px; margin-bottom: 24px;">Kích hoạt 1 chạm trên điện thoại</a>

                  <p style="color: #888; font-size: 13px; line-height: 1.6;">
                    Hoặc mở Key Launcher trên điện thoại &rarr; Cài đặt &rarr; Kích hoạt bằng mã bản quyền &rarr; Dán mã trên.
                  </p>
                </div>
              `
            })
          });
        } catch (emailErr) {
          console.error('Failed to send license email via Resend:', emailErr);
        }
      }

      return res.status(200).json({ success: true, keyGenerated: true, orderCode });
    }

    return res.status(200).json({ success: true, note: 'Event acknowledged' });
  } catch (err) {
    console.error('PayOS webhook handler error:', err);
    return res.status(500).json({ error: 'WEBHOOK_PROCESSING_FAILED', message: err.message });
  }
};
