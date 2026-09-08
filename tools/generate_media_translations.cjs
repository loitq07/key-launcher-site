const fs = require('node:fs');
const https = require('node:https');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(root, 'config.js'), 'utf8')}; globalThis.content = KEY_LAUNCHER_CONTENT;`, context);

const articles = context.content.media.articles.map(({ title, quote }) => ({ title, quote }));
const locales = ['vi', 'es', 'pt', 'id', 'fr', 'de'];
const outputKeys = { vi: 'vi', es: 'es', pt: 'pt-BR', id: 'id', fr: 'fr', de: 'de' };

function translate(text, target, attempt = 1) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            let body = '';
            response.setEncoding('utf8');
            response.on('data', chunk => body += chunk);
            response.on('end', async () => {
                try {
                    if (response.statusCode !== 200) throw new Error(`HTTP ${response.statusCode}`);
                    resolve(JSON.parse(body)[0].map(segment => segment[0]).join(''));
                } catch (error) {
                    if (attempt >= 7) return reject(error);
                    await new Promise(done => setTimeout(done, response.statusCode === 429 ? 5000 * attempt : 750 * attempt));
                    resolve(translate(text, target, attempt + 1));
                }
            });
        }).on('error', reject);
    });
}

async function translateFields(fields, locale) {
    const separator = index => `\n__KL_MEDIA_${index}__\n`;
    const joined = fields.map((text, index) => index === 0 ? text : separator(index) + text).join('');
    const result = await translate(joined, locale);
    const parts = result.split(/\s*__KL_MEDIA_\d+__\s*/).map(text => text.trim());
    if (parts.length !== fields.length) throw new Error(`Could not split ${locale} media batch`);
    return parts;
}

async function main() {
    const output = {};
    for (const locale of locales) {
        const fields = articles.flatMap(article => [article.title, article.quote]);
        const translated = [];
        for (let start = 0; start < fields.length; start += 4) {
            translated.push(...await translateFields(fields.slice(start, start + 4), locale));
            await new Promise(done => setTimeout(done, 750));
        }
        output[outputKeys[locale]] = articles.map((_, index) => ({
            title: translated[index * 2],
            quote: translated[index * 2 + 1]
        }));
        console.log(`${outputKeys[locale]}: ${articles.length}/${articles.length}`);
    }
    const source = `// Generated from the complete English media coverage by tools/generate_media_translations.cjs.\nwindow.KEY_LAUNCHER_MEDIA_TRANSLATIONS = ${JSON.stringify(output, null, 2)};\n`;
    fs.writeFileSync(path.join(root, 'media-translations.js'), source, 'utf8');
    console.log(`Generated ${locales.length * articles.length} complete media translations.`);
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
