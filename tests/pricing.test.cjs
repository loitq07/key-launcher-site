const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const source = readFileSync(require.resolve('../api/pricing.js'), 'utf8');
const handlerPromise = import('data:text/javascript;base64,' + Buffer.from(source).toString('base64')).then(module => module.default);

async function requestPricing({ method = 'GET', headers = {}, query = '' } = {}) {
    const handler = await handlerPromise;
    return handler(new Request('https://example.test/api/pricing' + query, { method, headers }));
}

test('returns only the current region prices with the new lifetime amount', async () => {
    for (const [country, currency, annual, lifetime] of [
        ['VN', 'VND', 49000, 149000],
        ['US', 'USD', 9.99, 29.99],
        ['DE', 'EUR', 8.99, 26.99],
        ['JP', 'JPY', 1190, 3500],
        ['IN', 'INR', 169, 490]
    ]) {
        const response = await requestPricing({ headers: { 'x-vercel-ip-country': country } });
        assert.equal(response.status, 200);
        const body = await response.json();
        assert.deepEqual(Object.keys(body).sort(), ['annual', 'country', 'currency', 'discountPct', 'lifetime', 'resolved']);
        assert.equal(body.country, country);
        assert.equal(body.currency, currency);
        assert.equal(body.annual.amount, annual);
        assert.equal(body.lifetime.amount, lifetime);
        assert.equal(body.resolved, true);
    }
});

test('client region overrides cannot select another country', async () => {
    const response = await requestPricing({
        query: '?country=IN&region=IN&currency=INR',
        headers: {
            'x-vercel-ip-country': 'US',
            'x-country': 'IN',
            'cf-ipcountry': 'IN',
            cookie: 'country=IN',
            'accept-language': 'hi-IN'
        }
    });
    const body = await response.json();
    assert.equal(body.country, 'US');
    assert.equal(body.currency, 'USD');
    assert.equal(body.lifetime.amount, 29.99);
});

test('missing, unknown, and malformed geolocation do not expose fallback prices', async () => {
    for (const country of [undefined, '', 'XX', 'US,IN', 'us', '__proto__']) {
        const headers = { 'accept-language': 'hi-IN' };
        if (country !== undefined) headers['x-vercel-ip-country'] = country;
        const response = await requestPricing({ query: '?country=IN', headers });
        assert.equal(response.status, 200);
        assert.equal(await response.json(), null);
    }
});

test('regional responses cannot be cached by browsers or a shared CDN', async () => {
    for (const headers of [{ 'x-vercel-ip-country': 'VN' }, {}]) {
        const response = await requestPricing({ headers });
        assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
        assert.equal(response.headers.get('CDN-Cache-Control'), 'no-store');
        assert.equal(response.headers.get('Vercel-CDN-Cache-Control'), 'no-store');
    }
});

test('rejects writes and sends no prices in HEAD responses', async () => {
    const post = await requestPricing({ method: 'POST', headers: { 'x-vercel-ip-country': 'VN' } });
    assert.equal(post.status, 405);
    assert.equal(post.headers.get('Allow'), 'GET, HEAD');
    assert.deepEqual(await post.json(), { error: 'Method not allowed' });
    const head = await requestPricing({ method: 'HEAD', headers: { 'x-vercel-ip-country': 'VN' } });
    assert.equal(head.status, 200);
    assert.equal(await head.text(), '');
});
