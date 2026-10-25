const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../dist');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.webm': 'video/webm', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = http.createServer((req, res) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
    let pathname;
    try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
    catch { res.writeHead(400); res.end(); return; }
    if (pathname === '/api/pricing') { res.setHeader('Content-Type', 'application/json'); res.end(req.method === 'HEAD' ? undefined : 'null'); return; }
    if (pathname.includes('\\') || pathname.includes('\0') || pathname.split('/').includes('..')) { res.writeHead(403); res.end(); return; }
    const base = path.resolve(root, '.' + pathname);
    if (base !== root && !base.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    const file = [base, base + '.html', path.join(base, 'index.html')].find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
    if (!file) { res.writeHead(404); res.end('Not found'); return; }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    if (req.method === 'HEAD') { res.end(); return; }
    fs.createReadStream(file).pipe(res);
});
if (require.main === module) server.listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173 (cache disabled)'));
module.exports = server;
