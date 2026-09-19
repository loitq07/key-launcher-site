const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const policy = fs.readFileSync(path.join(root, 'privacy-policy.html'), 'utf8');

test('privacy policy names the production data processors and mediated Meta ads', () => {
    for (const disclosure of [
        'Firebase (Google)',
        'Remote Config',
        'RevenueCat',
        'AppsFlyer',
        'Google AdMob &amp; User Messaging Platform',
        'Meta (Facebook SDK &amp; Audience Network)'
    ]) {
        assert.match(policy, new RegExp(disclosure.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }
});

test('privacy policy does not retain obsolete local-only or no-sharing claims', () => {
    assert.doesNotMatch(policy, /99% of all logic/);
    assert.doesNotMatch(policy, /Your data never leaves your phone/);
    assert.doesNotMatch(policy, /This data is not stored or shared/);
    assert.match(policy, /sends your current coordinates to your selected weather provider/);
});

test('app-ads.txt publishes the verified AdMob seller and is copied by the build', () => {
    const appAds = fs.readFileSync(path.join(root, 'app-ads.txt'), 'utf8').trim();
    // Do not derive a Meta seller record from FACEBOOK_APP_ID. Audience Network requires the
    // Business/Property ID issued by Monetization Manager, which is not stored in this repo.
    assert.equal(appAds, 'google.com, pub-7438347568455329, DIRECT, f08c47fec0942fa0');

    const buildScript = fs.readFileSync(path.join(root, 'scripts', 'build.cjs'), 'utf8');
    assert.match(buildScript, /['"]app-ads\.txt['"]/);
});

test('privacy policy keeps bilingual content and table-of-contents anchors in sync', () => {
    const englishBlocks = policy.match(/lang-content="en"/g) ?? [];
    const vietnameseBlocks = policy.match(/lang-content="vi"/g) ?? [];
    assert.equal(englishBlocks.length, vietnameseBlocks.length);

    const sectionIds = new Set([...policy.matchAll(/<section id="([^"]+)"/g)].map(match => match[1]));
    for (const match of policy.matchAll(/class="toc-link[^"]*"[^>]*href="#([^"]+)"/g)) {
        assert.ok(sectionIds.has(match[1]), `missing section for #${match[1]}`);
    }
});
