const { generateLicense } = require('../_license.cjs');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const adminSecret = process.env.ADMIN_API_KEY;
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();

  // If ADMIN_API_KEY is configured, enforce authentication
  if (adminSecret && token !== adminSecret) {
    return res.status(401).json({ error: 'Unauthorized: Invalid Admin API key' });
  }

  // If ADMIN_API_KEY is not configured in production, disable public generation
  if (!adminSecret && process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Endpoint locked. ADMIN_API_KEY is not configured.' });
  }

  try {
    const { email, type = 'LIFETIME', expiresInDays = 0 } = req.body || {};

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    const { key, payload } = generateLicense({
      email,
      type,
      expiresInDays: Number(expiresInDays) || 0
    });

    return res.status(200).json({
      success: true,
      key,
      deeplink: `keylauncher://activate?key=${encodeURIComponent(key)}`,
      webActivationUrl: `https://www.keylauncher.app/activate?key=${encodeURIComponent(key)}`,
      payload
    });
  } catch (err) {
    console.error('License issuance error:', err);
    return res.status(500).json({ error: 'GENERATION_FAILED', message: err.message });
  }
};
