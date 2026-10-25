(() => {
    const header = document.getElementById('site-navigation');
    if (!header) return;
    const selector = document.getElementById('language-select');
    const menu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-btn');
    const more = document.getElementById('nav-more');
    const kind = header.dataset.pageKind;
    // Old local preview responses may already be in the browser cache. Give
    // internal page visits a fresh cache key; production URLs stay unchanged.
    const localPreview = ['127.0.0.1', 'localhost'].includes(location.hostname);
    function pageUrl(value) {
        if (!localPreview) return value;
        const url = new URL(value, location.origin);
        url.searchParams.set('preview', '20261025-shared-navigation');
        return url.toString();
    }
    function refreshPreviewLinks() {
        if (!localPreview) return;
        document.querySelectorAll('a[href]').forEach(a => {
            const value = a.getAttribute('href');
            if (!value || value.startsWith('#')) return;
            const url = new URL(value, location.href);
            if (url.origin === location.origin && !/^\/(?:assets|api|css)\//.test(url.pathname)) a.href = pageUrl(url.toString());
        });
    }
    const vietnamese = { features: 'Tính năng', compare: 'So sánh', pricing: 'Bảng giá', blog: 'Blog', more: 'Thêm', press: 'Báo chí', testimonials: 'Đánh giá', faq: 'FAQ', activate: 'Kích hoạt bản quyền', help: 'Trợ giúp', downloadText: 'Tải Miễn Phí', languageLabel: 'Ngôn ngữ' };
    const english = { features: 'Features', compare: 'Compare', pricing: 'Pricing', blog: 'Blog', more: 'More', press: 'Press', testimonials: 'Reviews', faq: 'FAQ', activate: 'Activate license', help: 'Help', downloadText: 'Download Free', languageLabel: 'Language' };
    const queryLocale = new URLSearchParams(location.search).get('lang');
    let locale = kind === 'blog' ? header.dataset.locale : window.KEY_LAUNCHER_I18N?.locale || queryLocale || localStorage.getItem('key-launcher-language') || header.dataset.locale;
    if (![...selector.options].some(option => option.value === locale)) locale = 'en';

    function render() {
        selector.value = locale;
        header.dataset.locale = locale;
        const content = typeof KEY_LAUNCHER_CONTENT !== 'undefined' ? KEY_LAUNCHER_CONTENT : null;
        const labels = kind === 'home' && content
            ? { ...english, ...content.navigation, languageLabel: content.ui?.changeLanguage || english.languageLabel }
            : locale === 'vi' ? vietnamese : english;
        header.querySelectorAll('[data-nav-label]').forEach(node => {
            const label = labels[node.dataset.navLabel];
            if (typeof label === 'string') node.textContent = label;
        });
        const home = '/?lang=' + encodeURIComponent(locale);
        header.querySelector('[data-nav-home]').href = home;
        header.querySelectorAll('[data-nav-link]').forEach(a => {
            const key = a.dataset.navLink;
            a.href = key === 'blog' ? (locale === 'vi' ? '/blog/vi' : '/blog')
                : key === 'activate' ? '/activate?lang=' + encodeURIComponent(locale) : home + '#' + key;
        });
        selector.setAttribute('aria-label', labels.languageLabel);
        document.getElementById('theme-toggle').setAttribute('aria-label', locale === 'vi' ? 'Đổi giao diện' : 'Toggle Theme');
        menuButton.setAttribute('aria-label', locale === 'vi' ? 'Mở menu' : 'Toggle Menu');
        if (kind === 'document' && typeof window.setLanguage === 'function') {
            window.setLanguage(locale);
            document.documentElement.lang = locale;
        }
        refreshPreviewLinks();
    }
    render();
    const savedTheme = localStorage.getItem('key-launcher-theme') || localStorage.getItem('theme');
    if (savedTheme) document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const theme = document.documentElement.classList.toggle('dark') ? 'dark' : 'light';
        localStorage.setItem('key-launcher-theme', theme);
        localStorage.setItem('theme', theme);
    });
    function closeMenu() {
        menu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    }
    menuButton.addEventListener('click', () => {
        const open = menu.classList.contains('hidden');
        menu.classList.toggle('hidden', !open);
        menuButton.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') { closeMenu(); more.open = false; }
    });
    document.addEventListener('click', event => {
        if (!more.contains(event.target)) more.open = false;
        if (!header.contains(event.target)) closeMenu();
    });
    selector.addEventListener('change', () => {
        locale = selector.value;
        localStorage.setItem('key-launcher-language', locale);
        localStorage.setItem('lang', locale);
        localStorage.setItem('locale', locale);
        if (kind === 'blog') {
            const slug = location.pathname.replace(/^\/blog(?:\/vi)?\/?/, '').replace(/\/$/, '');
            location.assign(pageUrl((locale === 'vi' ? '/blog/vi' : '/blog') + (slug ? '/' + slug : '')));
        } else if (kind === 'home') {
            const url = new URL(location.href);
            url.searchParams.set('lang', locale);
            location.assign(pageUrl(url.toString()));
        } else {
            const url = new URL(location.href);
            url.searchParams.set('lang', locale);
            history.replaceState(null, '', url);
            render();
        }
    });
    window.addEventListener('pageshow', event => { if (event.persisted) location.reload(); });
})();
