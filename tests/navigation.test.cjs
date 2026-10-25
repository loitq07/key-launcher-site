const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const { pages, renderNavigation } = require('../scripts/generate-navigation.cjs');
const root = path.resolve(__dirname, '..');

test('all public HTML pages use the shared navigation template', () => {
    assert.equal(pages().length, 14);
    for (const file of pages()) {
        const source = fs.readFileSync(path.join(root, file), 'utf8');
        const header = source.match(/<!-- SITE_NAVIGATION_START -->\n([\s\S]*?)\n<!-- SITE_NAVIGATION_END -->/);
        assert.ok(header, file);
        assert.equal(header[1], renderNavigation(file), file);
        assert.equal((source.match(/id="site-navigation"/g) || []).length, 1, file);
        assert.equal((source.match(/src="\/navigation\.js[^\"]*"/g) || []).length, 1, file);
        for (const id of ['features', 'compare', 'pricing', 'blog', 'press', 'testimonials', 'faq', 'activate']) {
            assert.equal((header[1].match(new RegExp(`data-nav-link="${id}"`, 'g')) || []).length, 2, `${file}: ${id} desktop/mobile`);
        }
    }
});

test('page scripts still parse after removing duplicate navigation handlers', () => {
    for (const file of pages()) {
        const source = fs.readFileSync(path.join(root, file), 'utf8');
        for (const [, attrs, script] of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
            if (/src=|application\/ld\+json/.test(attrs)) continue;
            assert.doesNotThrow(() => new vm.Script(script), file);
        }
    }
});

test('every article uses Loi Tran and the supplied avatar in both author locations', () => {
    for (const file of pages().filter(file => file.startsWith('blog/') && !['blog/index.html', 'blog/vi/index.html'].includes(file))) {
        const source = fs.readFileSync(path.join(root, file), 'utf8');
        assert.doesNotMatch(source, /Key Launcher Engineering|Key Launcher Team|Đội ngũ Kỹ thuật Key Launcher/);
        assert.equal((source.match(/<img src="\/assets\/loi-tran\.jpg"/g) || []).length, 2, file);
        assert.match(source, /"@type": "Person",\s*"name": "Loi Tran"/);
    }
});
