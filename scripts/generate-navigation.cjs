const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const copy = {
    en: { features: 'Features', compare: 'Compare', pricing: 'Pricing', blog: 'Blog', more: 'More', press: 'Press', testimonials: 'Reviews', faq: 'FAQ', activate: 'Activate license', help: 'Help', downloadText: 'Download Free', languageLabel: 'Language', themeLabel: 'Toggle Theme', menuLabel: 'Toggle Menu', primaryLabel: 'Main navigation', mobileLabel: 'Mobile navigation' },
    vi: { features: 'Tính năng', compare: 'So sánh', pricing: 'Bảng giá', blog: 'Blog', more: 'Thêm', press: 'Báo chí', testimonials: 'Đánh giá', faq: 'FAQ', activate: 'Kích hoạt bản quyền', help: 'Trợ giúp', downloadText: 'Tải Miễn Phí', languageLabel: 'Ngôn ngữ', themeLabel: 'Đổi giao diện', menuLabel: 'Mở menu', primaryLabel: 'Điều hướng chính', mobileLabel: 'Điều hướng di động' }
};
const locales = { en: 'English', vi: 'Tiếng Việt', es: 'Español', 'pt-BR': 'Português (BR)', id: 'Bahasa Indonesia', fr: 'Français', de: 'Deutsch' };
function pages() {
    const files = ['index.html', 'activate.html', 'privacy-policy.html', 'tos.html'];
    function walk(dir) {
        for (const item of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
            const name = path.join(dir, item.name);
            if (item.isDirectory()) walk(name);
            else if (item.name === 'index.html') files.push(name.replaceAll('\\', '/'));
        }
    }
    walk('blog');
    return files;
}
function renderNavigation(file) {
    const kind = file.startsWith('blog/') ? 'blog' : file === 'index.html' ? 'home' : 'document';
    const locale = file.startsWith('blog/vi/') || file === 'activate.html' ? 'vi' : 'en';
    const labels = copy[locale];
    const home = '/?lang=' + locale;
    const blog = locale === 'vi' ? '/blog/vi' : '/blog';
    const href = key => key === 'blog' ? blog : key === 'activate' ? '/activate?lang=' + locale : home + '#' + key;
    function link(key, classes) {
        const active = key === 'blog' && kind === 'blog';
        return `<a href="${href(key)}" data-nav-link="${key}"${active ? ' aria-current="page"' : ''} class="${classes}${active ? ' text-brand-600 dark:text-brand-400' : ''}"><span data-nav-label="${key}">${labels[key]}</span></a>`;
    }
    const primary = ['features', 'compare', 'pricing', 'blog'];
    const secondary = ['press', 'testimonials', 'faq', 'activate'];
    const data = {
        ...labels, home, locale, kind,
        desktopLinks: primary.map(key => link(key, 'hover:text-zinc-900 dark:hover:text-white transition-colors')).join('\n'),
        moreLinks: secondary.map(key => link(key, 'block px-4 py-2 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800')).join('\n'),
        mobileLinks: primary.map(key => link(key, 'px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900')).join('\n'),
        mobileMoreLinks: secondary.map(key => link(key, 'px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900')).join('\n'),
        languageOptions: Object.entries(kind === 'home' ? locales : { en: locales.en, vi: locales.vi }).map(([value, name]) => `<option value="${value}"${value === locale ? ' selected' : ''}>${name}</option>`).join('')
    };
    return fs.readFileSync(path.join(root, 'partials/navigation.html'), 'utf8').replace(/\{\{(\w+)\}\}/g, (_, key) => {
        if (!(key in data)) throw new Error('Unknown navigation field: ' + key);
        return data[key];
    });
}
function generateNavigation() {
    for (const file of pages()) {
        const filename = path.join(root, file);
        let source = fs.readFileSync(filename, 'utf8');
        const header = '<!-- SITE_NAVIGATION_START -->\n' + renderNavigation(file) + '\n<!-- SITE_NAVIGATION_END -->';
        source = source.includes('<!-- SITE_NAVIGATION_START -->')
            ? source.replace(/<!-- SITE_NAVIGATION_START -->[\s\S]*?<!-- SITE_NAVIGATION_END -->/, header)
            : source.replace(/<header\b[\s\S]*?<\/header>/, header);
        source = source.replace(/<script src="\/navigation\.js[^\"]*" defer><\/script>\s*/g, '');
        source = source.replace('</body>', '<script src="/navigation.js?v=20261025-shared-nav" defer></script>\n</body>');
        source = source.replace(/style\.css(?:\?v=[^"\s]+)?"/g, 'style.css?v=20261025-shared-nav"');
        source = source.replace(/src="app\.js(?:\?[^\"]*)?"/g, 'src="app.js?v=20261025-shared-nav"');
        source = source.split('\n').map(line => line.trimEnd()).join('\n');
        fs.writeFileSync(filename, source, 'utf8');
    }
    console.log('Generated shared navigation for ' + pages().length + ' pages.');
}
if (require.main === module) generateNavigation();
module.exports = { pages, renderNavigation, generateNavigation, copy };
