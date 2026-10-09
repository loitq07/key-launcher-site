const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const policy = fs.readFileSync(path.join(root, 'privacy-policy.html'), 'utf8');

test('privacy policy names the current production data processors', () => {
    for (const disclosure of [
        'Firebase (Google)',
        'RevenueCat',
        'AppsFlyer',
        'Meta (Facebook SDK)'
    ]) {
        assert.match(policy, new RegExp(disclosure.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }
});

test('privacy policy states that build 117 removed advertising modules', () => {
    assert.match(policy, /Build 117 \(1\.6\.4-free\) and later remove these modules/);
    assert.match(policy, /current release does not display third-party ads/i);
    assert.doesNotMatch(policy, /impression-level ad revenue/);
    assert.doesNotMatch(policy, /Ad privacy choices/);
    assert.doesNotMatch(policy, /Remote Config to control ad placements/);
});

test('privacy policy does not retain obsolete local-only or no-sharing claims', () => {
    assert.doesNotMatch(policy, /99% of all logic/);
    assert.doesNotMatch(policy, /Your data never leaves your phone/);
    assert.doesNotMatch(policy, /This data is not stored or shared/);
    assert.match(policy, /sends your current coordinates to your selected weather provider/);
});

test('the site no longer publishes an AdMob seller file', () => {
    assert.equal(fs.existsSync(path.join(root, 'app-ads.txt')), false);
    const buildScript = fs.readFileSync(path.join(root, 'scripts', 'build.cjs'), 'utf8');
    assert.doesNotMatch(buildScript, /['"]app-ads\.txt['"]/);
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
