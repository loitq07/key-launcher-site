const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');

// Only these files are public. In particular, api/ and its regional table stay server-side.
const publicFiles = ['index.html', 'privacy-policy.html', 'tos.html', 'app.js', 'config.js', 'css', 'assets'];

if (fs.existsSync(output) && fs.lstatSync(output).isSymbolicLink()) {
    throw new Error('Refusing to replace a linked output directory');
}
if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
    throw new Error('Build output must stay within this project');
}
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
for (const file of publicFiles) {
    fs.cpSync(path.join(root, file), path.join(output, file), { recursive: true });
}
console.log('Built public site in dist/; server pricing is excluded.');
