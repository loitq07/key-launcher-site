const assert = require('node:assert/strict');
const { test } = require('node:test');
const handler = require('../api/pricing.js');

function requestPricing(overrides = {}) {
    const response = {
        headers: {},
        setHeader(name, value) { this.headers[name] = value; },
        end(body) { this.body = body; }
    };
    handler({ method: 'GET', headers: {}, ...overrides }, response);
    return response;
}

test('returns only the current region prices with the new lifetime amount', () => {
    for (const [country, expected] of [
        ['VN', { currency: 'VND', annual: 49000, lifetime: 149000 }],
        ['US', { currency: 'USD', annual: 9.99, lifetime: 29.99 }],
        ['DE', { currency: 'EUR', annual: 8.99, lifetime: 26.99 }],
        ['JP', { currency: 'JPY', annual: 1190, lifetime: 3500 }],
        ['IN', { currency: 'INR', annual: 169, lifetime: 490 }]
    ]) {
        const response = requestPricing({ headers: { 'x-vercel-ip-country': country } });
        assert.equal(response.statusCode, 200);
        assert.deepEqual(JSON.parse(response.body), expected);
    }
});

test('client region overrides cannot select another country', () => {
    const response = requestPricing({
        url: '/api/pricing?country=IN&region=IN&currency=INR',
        query: { country: 'IN', region: 'IN', currency: 'INR' },
        cookies: { country: 'IN' },
        body: { country: 'IN' },
        headers: {
            'x-vercel-ip-country': 'US',
            'x-country': 'IN',
            'cf-ipcountry': 'IN',
            'accept-language': 'hi-IN'
        }
    });
    assert.deepEqual(JSON.parse(response.body), { currency: 'USD', annual: 9.99, lifetime: 29.99 });
});

test('missing, unknown, and malformed geolocation do not expose fallback prices', () => {
    for (const country of [undefined, '', 'XX', 'US,IN', 'us', ['US', 'IN'], '__proto__']) {
        const response = requestPricing({
            query: { country: 'IN' },
            headers: { 'x-vercel-ip-country': country, 'accept-language': 'hi-IN' }
        });
        assert.equal(response.statusCode, 200);
        assert.equal(JSON.parse(response.body), null);
    }
});

test('regional responses cannot be cached by browsers or a shared CDN', () => {
    for (const country of ['VN', undefined]) {
        const response = requestPricing({ headers: { 'x-vercel-ip-country': country } });
        assert.equal(response.headers['Cache-Control'], 'private, no-store');
        assert.equal(response.headers['CDN-Cache-Control'], 'no-store');
        assert.equal(response.headers['Vercel-CDN-Cache-Control'], 'no-store');
    }
});

test('rejects writes and sends no prices in HEAD responses', () => {
    const post = requestPricing({ method: 'POST', headers: { 'x-vercel-ip-country': 'VN' } });
    assert.equal(post.statusCode, 405);
    assert.equal(post.headers.Allow, 'GET, HEAD');
    assert.deepEqual(JSON.parse(post.body), { error: 'Method not allowed' });

    const head = requestPricing({ method: 'HEAD', headers: { 'x-vercel-ip-country': 'VN' } });
    assert.equal(head.statusCode, 200);
    assert.equal(head.body, undefined);
});
