const fs = require('node:fs');
const https = require('node:https');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(root, 'config.js'), 'utf8')}; globalThis.content = KEY_LAUNCHER_CONTENT;`, context);

const reviews = context.content.testimonials.items.map(item => item.quote);
const locales = ['vi', 'es', 'pt', 'id', 'fr', 'de'];
const outputKeys = { vi: 'vi', es: 'es', pt: 'pt-BR', id: 'id', fr: 'fr', de: 'de' };

function requestTranslation(text, target, attempt = 1) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            let body = '';
            response.setEncoding('utf8');
            response.on('data', chunk => body += chunk);
            response.on('end', async () => {
                try {
                    if (response.statusCode !== 200) throw new Error(`HTTP ${response.statusCode}`);
                    const payload = JSON.parse(body);
                    resolve(payload[0].map(segment => segment[0]).join(''));
                } catch (error) {
                    if (attempt < 7) {
                        const delay = response.statusCode === 429 ? 5000 * attempt : 750 * attempt;
                        await new Promise(done => setTimeout(done, delay));
                        resolve(requestTranslation(text, target, attempt + 1));
                    } else reject(error);
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    const results = Object.fromEntries(locales.map(locale => [outputKeys[locale], new Array(reviews.length)]));
    const batchSize = 4;
    let translatedCount = 0;

    for (const locale of locales) {
        for (let start = 0; start < reviews.length; start += batchSize) {
            const batch = reviews.slice(start, start + batchSize);
            const separator = index => `\n__KL_REVIEW_${index}__\n`;
            const joined = batch.map((text, index) => index === 0 ? text : separator(index) + text).join('');
            const translated = await requestTranslation(joined, locale);
            const parts = translated.split(/\s*__KL_REVIEW_\d+__\s*/);
            if (parts.length !== batch.length) throw new Error(`Could not split ${locale} batch at ${start}`);
            parts.forEach((text, index) => results[outputKeys[locale]][start + index] = text.trim());
            translatedCount += batch.length;
            console.log(`${outputKeys[locale]}: ${Math.min(start + batchSize, reviews.length)}/${reviews.length}`);
            await new Promise(done => setTimeout(done, 750));
        }
    }

    const source = `// Generated from the complete English reviews by tools/generate_review_translations.cjs.\nwindow.KEY_LAUNCHER_REVIEW_TRANSLATIONS = ${JSON.stringify(results, null, 2)};\n`;
    fs.writeFileSync(path.join(root, 'review-translations.js'), source, 'utf8');
    console.log(`Generated ${translatedCount} complete review translations.`);
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
