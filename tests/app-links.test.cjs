const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const relative = '.well-known/assetlinks.json';
const source = fs.readFileSync(path.join(root, relative), 'utf8');
const statements = JSON.parse(source);
const play = 'CB:0E:3A:2E:08:41:66:60:16:69:EF:0E:24:CE:2B:FC:0F:DA:89:83:92:97:EC:23:C9:58:51:86:6C:64:17:2D';
const direct = '9C:94:CB:4C:26:25:90:85:9A:F2:F4:9C:18:DF:8E:0F:67:8E:39:85:E9:AE:4A:19:20:BC:8C:97:36:70:13:CC';

test('associations authorize Play Free and signed direct Free/Pro packages', () => {
    assert.equal(statements.length, 2);
    for (const [flavor, expected] of [['free', [play, direct]], ['pro', [direct]]]) {
        const statement = statements.find(item => item.target.package_name ===
            `com.loitran.minimalt9launcher.${flavor}`);
        assert.ok(statement, `missing ${flavor}`);
        assert.deepEqual(statement.relation, ['delegate_permission/common.handle_all_urls']);
        assert.equal(statement.target.namespace, 'android_app');
        assert.deepEqual(statement.target.sha256_cert_fingerprints, expected);
    }
});

test('public build retains the exact association file without exposing server files', () => {
    execFileSync(process.execPath, [path.join(root, 'scripts/build.cjs')], { cwd: root });
    assert.equal(fs.readFileSync(path.join(root, 'dist', relative), 'utf8'), source);
    for (const privatePath of ['api', 'secrets', '.git', '.env', '.env.local']) {
        assert.equal(fs.existsSync(path.join(root, 'dist', privatePath)), false);
    }
});

test('built association is served directly as JSON with GET and HEAD', async () => {
    const server = require('../scripts/preview.cjs');
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    try {
        const url = `http://127.0.0.1:${server.address().port}/${relative}`;
        for (const method of ['GET', 'HEAD']) {
            const response = await fetch(url, { method, redirect: 'manual' });
            assert.equal(response.status, 200);
            assert.equal(response.headers.get('content-type'), 'application/json');
            assert.equal(response.headers.get('location'), null);
            assert.equal(await response.text(), method === 'GET' ? source : '');
        }
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});
