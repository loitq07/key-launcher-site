/* The demo player exists only while the native modal is open. */
(() => {
    const trigger = document.getElementById('hero-demo-link');
    const dialog = document.getElementById('demo-dialog');
    const close = document.getElementById('demo-close');
    const container = document.getElementById('demo-video-container');
    const hero = KEY_LAUNCHER_CONTENT.hero;
    if (!trigger || !dialog || !close || !container) return;

    document.getElementById('demo-dialog-title').textContent = hero.demoTitle;
    close.setAttribute('aria-label', hero.demoCloseText);
    let previousOverflow;

    trigger.addEventListener('click', () => {
        if (dialog.open) return;
        const url = new URL(hero.demoEmbedUrl);
        url.searchParams.set('autoplay', '1');
        url.searchParams.set('playsinline', '1');
        url.searchParams.set('rel', '0');
        url.searchParams.set('hl', window.KEY_LAUNCHER_I18N?.locale || 'en');
        const frame = document.createElement('iframe');
        frame.src = url.href;
        frame.title = hero.demoTitle;
        frame.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        container.replaceChildren(frame);
        previousOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        dialog.showModal();
    });

    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right ||
            event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    // Includes native Escape dismissal; removing the frame stops audio and playback.
    dialog.addEventListener('close', () => {
        container.replaceChildren();
        document.documentElement.style.overflow = previousOverflow;
        trigger.focus({ preventScroll: true });
    });
})();
