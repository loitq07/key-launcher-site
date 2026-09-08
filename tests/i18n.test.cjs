const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const configSource = fs.readFileSync(path.join(root, 'config.js'), 'utf8');
const i18nSource = fs.readFileSync(path.join(root, 'i18n.js'), 'utf8');
const reviewTranslationsSource = fs.existsSync(path.join(root, 'review-translations.js'))
    ? fs.readFileSync(path.join(root, 'review-translations.js'), 'utf8')
    : '';
const mediaTranslationsSource = fs.existsSync(path.join(root, 'media-translations.js'))
    ? fs.readFileSync(path.join(root, 'media-translations.js'), 'utf8')
    : '';

function loadLocale(locale, browserLocale = 'en-US') {
    const context = {
        URLSearchParams,
        window: { location: { search: locale ? `?lang=${locale}` : '' } },
        navigator: { languages: [browserLocale], language: browserLocale },
        localStorage: { getItem: () => null, setItem: () => {} },
        document: {
            documentElement: {},
            title: '',
            querySelector: () => ({ setAttribute: () => {} })
        }
    };
    vm.createContext(context);
    vm.runInContext(`${configSource}; globalThis.KEY_LAUNCHER_CONTENT = KEY_LAUNCHER_CONTENT;`, context);
    if (reviewTranslationsSource) vm.runInContext(reviewTranslationsSource, context);
    if (mediaTranslationsSource) vm.runInContext(mediaTranslationsSource, context);
    vm.runInContext(i18nSource, context);
    return context;
}

test('every language offered by the selector has a complete core translation', () => {
    const locales = ['en', 'vi', 'es', 'pt-BR', 'id', 'fr', 'de'];
    for (const locale of locales) {
        const context = loadLocale(locale);
        const content = context.KEY_LAUNCHER_CONTENT;
        assert.equal(context.window.KEY_LAUNCHER_I18N.locale, locale);
        assert.ok(content.navigation.features);
        assert.equal(content.features.items.length, 8);
        assert.equal(content.focusMode.bullets.length, 6);
        assert.equal(content.faq.items.length, 6);
        if (locale === 'en') {
            assert.equal(content.translationNote, undefined);
        } else {
            const expectedNotes = { vi: 'Đã dịch', es: 'Traducido', 'pt-BR': 'Traduzido', id: 'Diterjemahkan', fr: 'Traduit', de: 'Übersetzt' };
            assert.equal(content.translationNote, expectedNotes[locale]);
            assert.equal(content.media.articles.length, 6);
            assert.equal(content.testimonials.items.length, 22);
            assert.doesNotMatch(content.media.articles[0].quote, /one of the slickest Android launchers/);
            assert.doesNotMatch(content.testimonials.items[0].quote, /Great experience/);
            assert.ok(content.media.articles.every(item => typeof item.quote === 'string' && item.quote.length > 0));
            assert.ok(content.testimonials.items.every(item => typeof item.quote === 'string' && item.quote.length > 0));
            assert.ok(content.testimonials.items[0].quote.length > 300, `${locale} first review must retain its full detail`);
        }
    }
});

test('browser locale is used on the first visit and unsupported locales fall back to English', () => {
    assert.equal(loadLocale(null, 'vi-VN').window.KEY_LAUNCHER_I18N.locale, 'vi');
    assert.equal(loadLocale('xx').window.KEY_LAUNCHER_I18N.locale, 'en');
});

test('Vietnamese pricing includes localized plans, comparison table, and regional notes', () => {
    const content = loadLocale('vi').KEY_LAUNCHER_CONTENT;
    assert.equal(content.pricing.plans[0].features[0].name, 'Tìm kiếm T9 siêu nhanh (hỗ trợ dấu tiếng Việt)');
    assert.equal(content.pricing.plans[1].features[0].name, 'Không giới hạn mục ghim và widget');
    assert.equal(content.pricing.comparison.categories[0].nameEn, 'Cốt lõi');
    assert.equal(content.pricing.comparison.categories[0].features[1].free, '8 mục');
    assert.equal(content.pricing.showAllLabel, 'Hiển thị tất cả tính năng');
    assert.match(content.pricing.regional.policyNote, /Không bao giờ giảm giá/);
});

test('localized reviews preserve the full source detail instead of summaries', () => {
    const englishReviews = loadLocale('en').KEY_LAUNCHER_CONTENT.testimonials.items;
    for (const locale of ['vi', 'es', 'pt-BR', 'id', 'fr', 'de']) {
        const localizedReviews = loadLocale(locale).KEY_LAUNCHER_CONTENT.testimonials.items;
        localizedReviews.forEach((item, index) => {
            assert.ok(
                item.quote.length >= englishReviews[index].quote.length * 0.6,
                `${locale} review ${index + 1} appears truncated`
            );
        });
        assert.match(localizedReviews[0].quote, /T9/);
        assert.match(localizedReviews[10].quote, /5/);
        assert.match(localizedReviews[10].quote, /10/);
    }
});

test('localized media coverage preserves complete headlines and quotations', () => {
    const englishArticles = loadLocale('en').KEY_LAUNCHER_CONTENT.media.articles;
    for (const locale of ['vi', 'es', 'pt-BR', 'id', 'fr', 'de']) {
        const localizedArticles = loadLocale(locale).KEY_LAUNCHER_CONTENT.media.articles;
        assert.equal(localizedArticles.length, englishArticles.length);
        localizedArticles.forEach((article, index) => {
            assert.notEqual(article.title, englishArticles[index].title);
            assert.ok(article.title.length >= englishArticles[index].title.length * 0.55, `${locale} article ${index + 1} headline appears truncated`);
            assert.ok(article.quote.length >= englishArticles[index].quote.length * 0.6, `${locale} article ${index + 1} quote appears truncated`);
        });
    }
});

test('pricing has concrete global values before regional pricing resolves', () => {
    const pricing = loadLocale('en').KEY_LAUNCHER_CONTENT.pricing;
    assert.equal(pricing.fallback.currency, 'USD');
    assert.equal(pricing.fallback.annual.amount, 9.99);
    assert.equal(pricing.fallback.lifetime.amount, 29.99);
    assert.equal(pricing.fallback.resolved, false);
});

test('desktop and mobile feature headings have localized supporting labels', () => {
    const content = loadLocale('vi').KEY_LAUNCHER_CONTENT;
    assert.equal(content.features.title, 'Thiết kế cho tốc độ. Tối ưu cho tập trung.');
    assert.equal(content.ui.featuresBenefits, 'Tính năng & Lợi ích');
    assert.equal(content.ui.scrollToExplore, 'Cuộn để khám phá');
    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    for (const id of ['features-title-d', 'features-subtitle-d', 'features-label-d', 'features-label', 'features-scroll-hint']) {
        assert.match(html, new RegExp(`id="${id}"`));
    }
});
