const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const slugs = ['best-minimalist-phone-alternative', 'key-launcher-vs-niagara-launcher', 'turn-android-into-dumb-phone', 'best-android-launcher-for-adhd'];
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

// Check the authored hierarchy before a browser silently repairs invalid HTML.
function readPage(locale, slug = '') {
    const file = path.join(__dirname, '..', 'blog', locale === 'vi' ? 'vi' : '', slug, 'index.html');
    const source = readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->|<script\b[\s\S]*?<\/script>/gi, '');
    const root = { tag: '#document', children: [] };
    const stack = [root];
    const nodes = [];
    for (const token of source.matchAll(/<(\/?)([a-z][\w:-]*)\b([^>]*?)>/gi)) {
        const [, close, tag, attributes] = token;
        if (close) {
            assert.equal(stack.at(-1).tag, tag, `${file}: unexpected closing ${tag}`);
            stack.pop();
            continue;
        }
        const attrs = Object.fromEntries([...attributes.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
        const node = { tag, attrs, parent: stack.at(-1), children: [] };
        node.parent.children.push(node);
        nodes.push(node);
        if (!voidTags.has(tag) && !/\/\s*$/.test(attributes)) stack.push(node);
    }
    assert.equal(stack.length, 1, `${file}: unclosed HTML elements`);
    return { nodes, body: nodes.find(n => n.tag === 'body'), main: nodes.find(n => n.tag === 'main') };
}

function signature(node) {
    return [node.tag, node.attrs?.class || '', node.children.map(signature)];
}

test('EN and VI blog indexes use the same layout, navigation and footer', () => {
    assert.deepEqual(signature(readPage('en').body), signature(readPage('vi').body));
});

test('every article keeps its content and sidebar inside the main two-column grid', () => {
    for (const locale of ['en', 'vi']) for (const slug of slugs) {
        const { nodes, body, main } = readPage(locale, slug);
        assert.equal(main.parent, body);
        assert.deepEqual(body.children.map(n => n.tag), ['header', 'main', 'footer']);
        const grid = main.children.find(n => n.attrs?.class?.includes('lg:grid-cols-12'));
        assert.ok(grid, `${locale}/${slug}: missing article grid`);
        assert.deepEqual(grid.children.map(n => n.tag), ['div', 'aside']);
        const [column, sidebar] = grid.children;
        assert.ok(column.attrs.class.includes('lg:col-span-8'));
        assert.ok(sidebar.attrs.class.includes('lg:col-span-4'));
        assert.equal(column.children.filter(n => n.tag === 'header').length, 1);
        assert.equal(column.children.filter(n => n.tag === 'article').length, 1);
        assert.equal(column.children.filter(n => n.tag === 'figure').length, 1);
        assert.equal(nodes.filter(n => n.tag === 'h1').length, 1);
        const ids = nodes.map(n => n.attrs.id).filter(Boolean);
        assert.equal(new Set(ids).size, ids.length, `${locale}/${slug}: duplicate IDs`);
        for (const a of nodes.filter(n => n.tag === 'a' && n.attrs.href?.startsWith('#'))) {
            assert.ok(ids.includes(a.attrs.href.slice(1)), `${locale}/${slug}: missing TOC target ${a.attrs.href}`);
        }
    }
});

test('each blog page offers the same two language options', () => {
    for (const locale of ['en', 'vi']) for (const slug of ['', ...slugs]) {
        const { nodes } = readPage(locale, slug);
        const switcher = nodes.find(n => n.tag === 'select' && n.attrs.id === 'language-select');
        assert.ok(switcher);
        assert.deepEqual(switcher.children.map(option => option.attrs.value), ['en', 'vi']);
    }
});
