const { verifyLicense } = require('../_license.cjs');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let key = '';
  if (req.method === 'POST') {
    const body = req.body || {};
    key = body.key || '';
  } else if (req.method === 'GET') {
    key = req.query.key || '';
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!key) {
    return res.status(400).json({ valid: false, error: 'Missing license key' });
  }

  const result = verifyLicense(key);
  if (!result.valid) {
    return res.status(400).json(result);
  }

  return res.status(200).json(result);
};
