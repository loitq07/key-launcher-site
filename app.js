// Check if config loaded successfully
if (typeof KEY_LAUNCHER_CONTENT === 'undefined') {
    console.error("Configuration file config.js failed to load!");
} else {
    renderContent();
}

function renderArticleLogo(article) {
    if (!article.logo) {
        return `
            <span class="text-[9px] font-bold font-mono tracking-wide text-brand-500 dark:text-brand-400 uppercase bg-brand-500/10 px-1.5 py-0.5 rounded">
                ${article.source}
            </span>
        `;
    }
    if (article.logo.includes('logo_android_authority')) {
        return `
            <img src="assets/logo_android_authority_light.svg" alt="${article.source}" class="h-3.5 object-contain opacity-75 dark:hidden">
            <img src="assets/logo_android_authority_dark.svg" alt="${article.source}" class="h-3.5 object-contain opacity-90 hidden dark:block">
        `;
    }
    return `
        <img src="${article.logo}" alt="${article.source}" class="h-3.5 object-contain opacity-75 dark:invert dark:opacity-90">
    `;
}

function renderContent() {
    const data = KEY_LAUNCHER_CONTENT;

    // Navigation
    // document.getElementById('nav-creator').innerText = data.navigation.creatorText || "BY LOUSIFY TECH";
    document.getElementById('nav-link-features').innerText = data.navigation.features;
    document.getElementById('nav-link-press').innerText = data.navigation.press;
    document.getElementById('nav-link-pricing').innerText = data.navigation.pricing;
    document.getElementById('nav-link-testimonials').innerText = data.navigation.testimonials;
    document.getElementById('nav-link-faq').innerText = data.navigation.faq || "FAQ";
    if (document.getElementById('nav-link-help')) {
        document.getElementById('nav-link-help').innerText = data.navigation.help || "Help";
        document.getElementById('nav-link-help').href = data.navigation.helpUrl || "https://www.keylauncher.app/help";
    }
    
    const navDownload = document.getElementById('nav-download-btn');
    navDownload.href = data.navigation.downloadUrl;
    navDownload.innerText = data.navigation.downloadText;

    // Mobile Menu
    document.getElementById('mobile-link-features').innerText = data.navigation.features;
    document.getElementById('mobile-link-press').innerText = data.navigation.press;
    document.getElementById('mobile-link-pricing').innerText = data.navigation.pricing;
    document.getElementById('mobile-link-testimonials').innerText = data.navigation.testimonials;
    document.getElementById('mobile-link-faq').innerText = data.navigation.faq || "FAQ";
    if (document.getElementById('mobile-link-help')) {
        document.getElementById('mobile-link-help').innerText = data.navigation.help || "Help";
        document.getElementById('mobile-link-help').href = data.navigation.helpUrl || "https://www.keylauncher.app/help";
    }
    
    const mobileDownload = document.getElementById('mobile-download-btn');
    mobileDownload.href = data.navigation.downloadUrl;
    mobileDownload.innerHTML = `<span class="material-symbols-outlined mr-2 !text-[18px]">download</span> ${data.navigation.downloadText}`;

    // Logo Image
    if (data.navigation.logo) {
        const navLogoImg = document.getElementById('nav-logo');
        navLogoImg.src = data.navigation.logo;
        navLogoImg.classList.remove('hidden');
        document.getElementById('nav-logo-fallback').classList.add('hidden');
    }

    // Hero
    document.getElementById('hero-badge').innerText = data.hero.badgeText;
    document.getElementById('hero-title-1').innerText = data.hero.titleLine1;
    document.getElementById('hero-title-2').innerText = data.hero.titleLine2;
    document.getElementById('hero-desc').innerText = data.hero.description;
    
    const heroPlayLink = document.getElementById('hero-playstore-link');
    heroPlayLink.href = data.hero.playStoreBtnUrl;
    document.getElementById('hero-playstore-badge-img').src = data.hero.playStoreBadge;

    // document.getElementById('hero-reddit-btn').href = data.hero.redditBtnUrl;
    // document.getElementById('hero-discord-btn').href = data.hero.discordBtnUrl;
    // document.getElementById('hero-telegram-btn').href = data.hero.telegramBtnUrl;

    // Hero Rating
    const ratingContainer = document.getElementById('hero-rating-badge');
    if (data.hero.rating && ratingContainer) {
        const starsCount = data.hero.rating.stars;
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (starsCount >= i) {
                starsHtml += `<span class="material-symbols-outlined material-symbols-filled text-amber-500 !text-[16px]">star</span>`;
            } else if (starsCount > i - 1) {
                starsHtml += `<span class="material-symbols-outlined material-symbols-filled text-amber-500 !text-[16px]">star_half</span>`;
            } else {
                starsHtml += `<span class="material-symbols-outlined text-zinc-300 dark:text-zinc-700 !text-[16px]">star</span>`;
            }
        }
        ratingContainer.innerHTML = `
            <div class="flex items-center text-amber-500 mr-1.5">
                ${starsHtml}
            </div>
            <div class="flex items-center gap-1.5 flex-wrap justify-center">
                <span class="font-semibold text-zinc-900 dark:text-white">${data.hero.rating.stars}/5</span>
                <span class="text-zinc-500 dark:text-zinc-400 font-normal">on Google Play (${data.hero.rating.reviewsCount})</span>
            </div>
        `;
        ratingContainer.classList.remove('hidden');
    } else if (ratingContainer) {
        ratingContainer.classList.add('hidden');
    }

    // Hero Screenshot Card Deck Carousel Setup
    const screenshots = data.hero.screenshots || [data.hero.screenshot];
    const carouselContainer = document.getElementById('hero-deck-carousel');
    const dotsContainer = document.getElementById('hero-carousel-dots');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');

    if (carouselContainer && screenshots && screenshots.length > 0) {
        // Build a duplicated list to have enough offscreen cards (M >= 10 elements)
        let carouselSlides = [...screenshots];
        while (carouselSlides.length < 10) {
            carouselSlides = [...carouselSlides, ...screenshots];
        }
        const M = carouselSlides.length;
        const N = screenshots.length;
        
        let activeIdx = 0;
        let autoPlayInterval = null;

        // Render cards
        carouselContainer.innerHTML = carouselSlides.map((src, idx) => `
            <div class="carousel-card select-none" data-card-index="${idx}">
                <img src="${src}" alt="Key Launcher Screenshot ${idx % N + 1}" class="w-full h-auto block pointer-events-none select-none">
            </div>
        `).join('');

        const cards = Array.from(carouselContainer.querySelectorAll('.carousel-card'));

        // Render dots
        if (dotsContainer) {
            dotsContainer.innerHTML = screenshots.map((_, idx) => `
                <button class="carousel-dot block w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 transition-all duration-300 cursor-pointer" aria-label="Go to slide ${idx + 1}" data-dot-index="${idx}"></button>
            `).join('');
        }
        const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.carousel-dot')) : [];

        const lastDiffs = {};

        function updateCarousel() {
            const isMobile = window.innerWidth < 768;
            const xOffset = isMobile ? 20 : 64; // 20 on mobile keeps diff=2 cards within viewport
            const yOffset = isMobile ? 4 : 6;
            const rotateOffset = isMobile ? 2.5 : 3.5;
            const scaleOffset = 0.05;

            cards.forEach((card, idx) => {
                let diff = idx - activeIdx;
                // Circular routing to find shortest path in M-length array
                while (diff < -M / 2) diff += M;
                while (diff > M / 2) diff -= M;

                const absDiff = Math.abs(diff);
                const oldDiff = lastDiffs[idx];
                
                let wrapped = false;
                if (oldDiff !== undefined && Math.abs(diff - oldDiff) > M / 2) {
                    wrapped = true;
                    card.classList.add('no-transition');
                }

                if (diff === 0) {
                    card.className = wrapped ? "carousel-card active-card no-transition" : "carousel-card active-card";
                    card.style.zIndex = "30";
                    card.style.opacity = "1";
                    card.style.pointerEvents = "auto";
                    card.style.transform = "translateX(0px) translateY(-50%) scale(1) rotate(0deg)";
                } else {
                    card.className = wrapped ? "carousel-card no-transition" : "carousel-card";
                    card.style.zIndex = (30 - absDiff * 10).toString();
                    
                    if (absDiff >= 3) {
                        card.style.opacity = "0";
                        card.style.pointerEvents = "none";
                    } else if (absDiff === 2) {
                        card.style.opacity = "0.75";
                        card.style.pointerEvents = "auto";
                    } else {
                        card.style.opacity = "0.9";
                        card.style.pointerEvents = "auto";
                    }
                    
                    // Tight overlapping card fan calculation
                    const tx = diff * xOffset;
                    const ty = absDiff * yOffset;
                    const rot = diff * rotateOffset;
                    const scale = 1 - absDiff * scaleOffset;
                    
                    card.style.transform = `translateX(${tx}px) translateY(calc(-50% + ${ty}px)) scale(${scale}) rotate(${rot}deg)`;
                }

                if (wrapped) {
                    card.offsetHeight; // force reflow
                    setTimeout(() => {
                        card.classList.remove('no-transition');
                    }, 50);
                }

                lastDiffs[idx] = diff;
            });

            // Update dots
            dots.forEach((dot, idx) => {
                if (idx === activeIdx % N) {
                    dot.className = "carousel-dot block w-5 h-2 rounded-full bg-brand-500 transition-all duration-300 cursor-pointer";
                } else {
                    dot.className = "carousel-dot block w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 transition-all duration-300 cursor-pointer";
                }
            });
        }

        function nextSlide() {
            activeIdx = (activeIdx + 1) % M;
            updateCarousel();
        }

        // Prev slide wraps correctly around M items
        function prevSlide() {
            activeIdx = (activeIdx - 1 + M) % M;
            updateCarousel();
        }

        // Set slide jumps to the duplicate index closest to activeIdx to maintain direction
        function setSlide(targetDotIdx) {
            let minDistance = M;
            let targetCardIdx = activeIdx;
            
            for (let i = 0; i < M; i++) {
                if (i % N === targetDotIdx) {
                    let dist = i - activeIdx;
                    while (dist < -M / 2) dist += M;
                    while (dist > M / 2) dist -= M;
                    if (Math.abs(dist) < Math.abs(minDistance)) {
                        minDistance = dist;
                        targetCardIdx = i;
                    }
                }
            }
            activeIdx = targetCardIdx;
            updateCarousel();
        }

        // Event Listeners for Buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay();
            });
        }

        // Event Listeners for Dot indicators
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                setSlide(idx);
                resetAutoPlay();
            });
        });

        // Click directly on side cards
        cards.forEach((card, idx) => {
            card.addEventListener('click', () => {
                if (idx % N !== activeIdx % N) {
                    setSlide(idx % N);
                    resetAutoPlay();
                }
            });
        });

        // Swipe / Drag Gestures
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let isDragging = false;
        const dragThreshold = 40;

        function handleDragStart(x, y) {
            startX = x;
            startY = y;
            isDragging = true;
            if (autoPlayInterval) clearInterval(autoPlayInterval);
        }

        function handleDragMove(x, y) {
            if (!isDragging) return;
            currentX = x;
        }

        function handleDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            const diffX = currentX - startX;
            if (Math.abs(diffX) > dragThreshold && currentX !== 0) {
                if (diffX > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
            currentX = 0;
            resetAutoPlay();
        }

        // Touch Events
        carouselContainer.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            handleDragStart(touch.clientX, touch.clientY);
        }, { passive: true });

        carouselContainer.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            handleDragMove(touch.clientX, touch.clientY);
        }, { passive: true });

        carouselContainer.addEventListener('touchend', () => {
            handleDragEnd();
        });

        // Mouse Events (for desktop drag support)
        carouselContainer.addEventListener('mousedown', (e) => {
            handleDragStart(e.clientX, e.clientY);
            e.preventDefault(); // Prevents dragging images ghosting
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            handleDragMove(e.clientX, e.clientY);
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                handleDragEnd();
            }
        });

        // Infinite Auto Play
        function resetAutoPlay() {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, 4500);
        }

        // Pause on hover
        carouselContainer.addEventListener('mouseenter', () => {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
        });
        carouselContainer.addEventListener('mouseleave', () => {
            resetAutoPlay();
        });

        // Initialize
        updateCarousel();
        resetAutoPlay();

        // Recalculate offsets on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            resizeTimeout = setTimeout(updateCarousel, 150);
        });
    }

    // Value props tags
    const propsContainer = document.getElementById('hero-value-props');
    propsContainer.innerHTML = data.hero.valueProps.map(prop => `
        <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-brand-500 dark:text-brand-400 !text-[14px]">check</span>
            ${prop}
        </span>
    `).join('');

    // Media (Press & Video Showcase)
    document.getElementById('media-title').innerText = data.media.title;
    document.getElementById('media-subtitle').innerText = data.media.subtitle;
    document.getElementById('media-video-frame').src = data.media.video.embedUrl;
    document.getElementById('media-video-title').innerHTML = `
        <span class="material-symbols-outlined !text-[14px] text-red-500 mr-1">smart_display</span> ${data.media.video.title}
    `;
    
    const articlesContainer = document.getElementById('media-articles-list');
    articlesContainer.innerHTML = data.media.articles.map(article => `
        <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="group flex flex-col justify-between border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/20 hover:border-zinc-300 hover:dark:border-zinc-700 p-4 rounded-xl transition-all shadow-sm">
            <div>
                <div class="flex items-center justify-between mb-1.5">
                    ${renderArticleLogo(article)}
                    <span class="material-symbols-outlined text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white !text-[16px] transition-colors">
                        north_east
                    </span>
                </div>
                <h4 class="font-display font-bold text-xs sm:text-sm text-zinc-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors mt-2">
                    ${article.title}
                </h4>
                <p class="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed italic mt-1">
                    "${article.quote}"
                </p>
            </div>
        </a>
    `).join('');

    // ── Features Section ──────────────────────────────────────────────
    function buildFeatureCard(item) {
        const hasBg = item.image && item.image.trim() !== '';
        return `
        <div class="feature-card snap-start shrink-0 rounded-3xl overflow-hidden relative shadow-xl group
                    ${hasBg ? '' : 'bg-zinc-100 dark:bg-zinc-900'}"
             style="width: 340px; height: 560px; flex-shrink: 0;">
            ${hasBg ? `
                <img src="${item.image}" alt="${item.title}"
                     class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]">
            ` : `
                <div class="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900"></div>
            `}
            <div class="absolute top-0 left-0 right-0 p-7 z-10">
                <span class="text-[10px] font-mono uppercase tracking-widest mb-3 block
                            ${hasBg ? 'text-white/55' : 'text-zinc-400 dark:text-zinc-500'}">
                    ${item.title}
                </span>
                <h3 class="font-display font-extrabold text-2xl leading-snug
                           ${hasBg ? 'text-white' : 'text-zinc-900 dark:text-white'}">
                    ${item.description}
                </h3>
            </div>
        </div>`;
    }

    // ── Mobile: inject cards, hide desktop section via inline style ──
    document.getElementById('features-title').innerText = data.features.title;
    document.getElementById('features-subtitle').innerText = data.features.subtitle;
    const mobileCarousel = document.getElementById('features-carousel');
    if (mobileCarousel) {
        // Mobile card width = 75vw so the next card peeks
        mobileCarousel.innerHTML = data.features.items.map(item => {
            const hasBg = item.image && item.image.trim() !== '';
            return `
            <div class="feature-card snap-start shrink-0 rounded-3xl overflow-hidden shadow-xl group
                        ${hasBg ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-100 dark:bg-zinc-900'}"
                 style="width: 75vw;">
                ${hasBg ? `
                    <div class="w-full overflow-hidden aspect-[4/5] relative">
                        <img src="${item.image}" alt="${item.title}"
                             class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105">
                    </div>
                ` : `
                    <div class="w-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 aspect-[4/5]"></div>
                `}
                <div class="p-4">
                    <span class="text-[10px] font-mono uppercase tracking-widest mb-1.5 block text-zinc-400 dark:text-zinc-500">
                        ${item.title}
                    </span>
                    <h3 class="font-display font-extrabold text-base leading-snug text-zinc-900 dark:text-white">
                        ${item.description}
                    </h3>
                </div>
            </div>`;
        }).join('');
    }

    // ── Mobile paging dots ────────────────────────────────────────────
    const mobileProgressWrap = document.getElementById('features-progress-mobile');
    if (mobileCarousel && mobileProgressWrap) {
        const totalMobileCards = data.features.items.length;

        // Inject dots
        mobileProgressWrap.innerHTML = data.features.items.map((_, i) =>
            `<span class="mob-dot block rounded-full transition-all duration-300 ${
                i === 0 ? 'w-6 h-2 bg-brand-500' : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-700'
            }"></span>`
        ).join('');

        // Update dots on scroll
        mobileCarousel.addEventListener('scroll', () => {
            const cardWidth = mobileCarousel.querySelector('.feature-card')?.offsetWidth || 1;
            const gap = 16; // gap-4
            const activeIndex = Math.min(
                totalMobileCards - 1,
                Math.round(mobileCarousel.scrollLeft / (cardWidth + gap))
            );
            document.querySelectorAll('.mob-dot').forEach((dot, i) => {
                dot.className = `mob-dot block rounded-full transition-all duration-300 ${
                    i === activeIndex
                        ? 'w-6 h-2 bg-brand-500'
                        : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-700'
                }`;
            });
        }, { passive: true });
    }


    // ── Desktop: scroll-driven, only runs on wide viewports ──────────
    const featuresSticky = document.getElementById('features-sticky');
    const featuresTrack  = document.getElementById('features-track');
    const featuresOuter  = document.getElementById('features');
    const featuresMobile = document.getElementById('features-mobile');

    function setupDesktopCarousel() {
        if (window.innerWidth < 1024) {
            // Mobile: hide desktop sticky, ensure outer has no forced height
            featuresSticky.style.display = 'none';
            featuresMobile.style.display = 'block';
            featuresOuter.style.height = '';
            return;
        }

        // Desktop: show sticky, hide mobile
        featuresSticky.style.display = 'block';
        featuresMobile.style.display = 'none';

        // Inject cards into desktop track (after the header panel)
        const existingCards = featuresTrack.querySelectorAll('.feature-card');
        existingCards.forEach(c => c.remove());
        data.features.items.forEach(item => {
            featuresTrack.insertAdjacentHTML('beforeend', buildFeatureCard(item));
        });

        // Progress dots removed from desktop (shown only on mobile)

        // Measure after layout paints
        requestAnimationFrame(() => {
            const trackW      = featuresTrack.scrollWidth;
            const vw          = window.innerWidth;
            // maxTranslate = how far right the track needs to move left
            // We want the last card to be fully visible (right edge at vw - some padding)
            const maxTranslate = Math.max(0, trackW - vw + 128); // 128px right breathing room

            // Outer section height = viewport height + scroll distance
            featuresOuter.style.height = (window.innerHeight + maxTranslate) + 'px';

            // Remove any previous scroll listener by cloning (simple approach)
            const scrollHandler = () => {
                const outerRect = featuresOuter.getBoundingClientRect();
                const scrollable = featuresOuter.offsetHeight - window.innerHeight;
                const progress  = Math.max(0, Math.min(1, -outerRect.top / scrollable));

                featuresTrack.style.transform = `translateX(${-(progress * maxTranslate)}px)`;
            };

            window.addEventListener('scroll', scrollHandler, { passive: true });
            scrollHandler();
        });
    }

    setupDesktopCarousel();

    // Re-run on resize (throttled)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setupDesktopCarousel, 200);
    });

    // ── Focus Mode Section ─────────────────────────────────────────────
    if (data.focusMode) {
        const badgeEl = document.getElementById('focus-mode-badge');
        if (badgeEl) badgeEl.innerText = data.focusMode.badgeText;
        
        const titleEl = document.getElementById('focus-mode-title');
        if (titleEl) titleEl.innerHTML = data.focusMode.title;
        
        const descEl = document.getElementById('focus-mode-desc');
        if (descEl) descEl.innerText = data.focusMode.description;
        
        const videoEl = document.getElementById('focus-mode-video');
        if (videoEl) videoEl.src = data.focusMode.image;
        
        const bulletsContainer = document.getElementById('focus-mode-bullets');
        if (bulletsContainer && data.focusMode.bullets) {
            bulletsContainer.innerHTML = data.focusMode.bullets.map(b => `
                <div class="flex gap-3">
                    <span class="material-symbols-outlined text-brand-500 dark:text-brand-400 shrink-0 !text-[24px]">${b.icon}</span>
                    <div>
                        <h4 class="font-display font-bold text-sm text-zinc-900 dark:text-white">${b.title}</h4>
                        <p class="text-zinc-500 dark:text-zinc-400 text-xs mt-1 leading-relaxed">${b.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    // Pricing Grid
    document.getElementById('pricing-badge').innerText = data.pricing.badgeText;
    document.getElementById('pricing-title').innerHTML = data.pricing.title;
    document.getElementById('pricing-subtitle').innerText = data.pricing.subtitle;
    const pricingContainer = document.getElementById('pricing-grid');
    pricingContainer.innerHTML = data.pricing.plans.map(plan => `
        <div class="${plan.isRecommended ? 'border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-950 shadow-xl md:scale-105 z-10' : 'border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 shadow-sm'} rounded-3xl p-8 flex flex-col justify-between relative transition-transform">
            ${plan.isRecommended ? `
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                Recommended
            </div>` : ''}
            <div>
                <span class="text-xs font-mono ${plan.isRecommended ? 'text-zinc-900 dark:text-white font-semibold' : 'text-zinc-500'} uppercase">${plan.name}</span>
                <div class="mt-4 mb-6">
                    ${plan.priceHtml ? plan.priceHtml : `
                        <div class="flex items-baseline gap-1">
                            <span class="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white">${plan.price}</span>
                            <span class="text-zinc-500 text-sm font-medium">${plan.pricePeriod}</span>
                        </div>
                    `}
                </div>
                <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-8 leading-relaxed">${plan.description}</p>
                
                <ul class="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
                    ${plan.features.map(f => `
                        <li class="flex items-start gap-3 ${f.included ? '' : 'text-zinc-400 dark:text-zinc-600 opacity-60'}">
                            <span class="material-symbols-outlined shrink-0 !text-[20px] ${f.included ? (plan.isRecommended ? 'text-zinc-900 dark:text-white material-symbols-filled' : 'text-zinc-400 dark:text-zinc-500') : 'text-zinc-300 dark:text-zinc-700'}">
                                ${f.included ? 'check_circle' : 'cancel'}
                            </span>
                            <span class="font-medium">${f.name}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <a href="${plan.buttonUrl}" target="_blank" rel="noopener noreferrer" class="mt-10 w-full py-3.5 rounded-xl text-center font-display text-sm font-bold cursor-pointer active:scale-[0.98] transition-all duration-200 ${plan.isRecommended ? 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-md' : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-white hover:border-zinc-300'}">
                ${plan.buttonText}
            </a>
        </div>
    `).join('');

    // Detailed Feature Comparison Table Rendering
    const comparisonTableBody = document.getElementById('comparison-table-body');
    
    function renderComparisonTable() {
        if (!data.pricing.comparison || !comparisonTableBody) return;
        
        let html = '';
        
        data.pricing.comparison.categories.forEach(category => {
            // Category row header span across 3 columns
            html += `
                <tr class="bg-zinc-100/50 dark:bg-zinc-900/40 font-display font-bold text-zinc-900 dark:text-white border-b border-zinc-200/60 dark:border-zinc-800/40">
                    <td colspan="3" class="px-4 py-3 text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-50/60 dark:bg-zinc-900/30">${category.nameEn}</td>
                </tr>
            `;
            
            // Feature rows
            category.features.forEach(feat => {
                html += `
                    <tr class="border-b border-zinc-200/80 dark:border-zinc-800/50 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors">
                        <td class="p-4 align-middle font-semibold text-zinc-900 dark:text-white text-xs sm:text-sm">
                            ${feat.nameEn}
                        </td>
                        <td class="p-4 text-center align-middle font-medium text-zinc-700 dark:text-zinc-300">
                            ${formatCellVal(feat.free)}
                        </td>
                        <td class="p-4 text-center align-middle font-semibold text-zinc-900 dark:text-white">
                            ${formatCellVal(feat.pro, true)}
                        </td>
                    </tr>
                `;
            });
        });
        
        comparisonTableBody.innerHTML = html;
    }

    function formatCellVal(val, isProColumn = false) {
        if (val === '✅') {
            return `
                <span class="material-symbols-outlined material-symbols-filled text-emerald-500 !text-[18px] sm:!text-[20px]" aria-label="Included">
                    check_circle
                </span>
            `;
        }
        if (val === '❌') {
            return `
                <span class="material-symbols-outlined text-zinc-300 dark:text-zinc-700 !text-[18px] sm:!text-[20px]" aria-label="Not included">
                    cancel
                </span>
            `;
        }
        
        // Styling text limits
        const valStr = String(val);
        const lowerVal = valStr.toLowerCase();
        const isHighlight = lowerVal.includes('unlimited') || lowerVal.includes('full') || lowerVal.includes('all 9');
        
        if (isHighlight) {
            return `
                <span class="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 whitespace-nowrap">
                    ${val}
                </span>
            `;
        }
        
        if (lowerVal.includes('trial') || lowerVal.includes('only') || lowerVal.includes('items') || lowerVal.includes('widgets') || lowerVal.includes('item') || lowerVal.includes('slot')) {
            return `
                <span class="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60 whitespace-nowrap">
                    ${val}
                </span>
            `;
        }
        
        return `
            <span class="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                ${val}
            </span>
        `;
    }

    // Initial render
    renderComparisonTable();

    // Collapsible Comparison Table Logic
    const collapseWrapper = document.getElementById('comparison-collapse-wrapper');
    const toggleBtn = document.getElementById('comparison-toggle-btn');
    const toggleIcon = document.getElementById('comparison-toggle-icon');
    const fadeOverlay = document.getElementById('comparison-fade-overlay');
    let isExpanded = false;

    if (toggleBtn && collapseWrapper && fadeOverlay) {
        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            if (isExpanded) {
                // Expand
                const fullHeight = collapseWrapper.scrollHeight;
                collapseWrapper.style.maxHeight = fullHeight + 'px';
                toggleBtn.querySelector('span').innerText = 'Show Less';
                toggleIcon.style.transform = 'rotate(180deg)';
                fadeOverlay.style.opacity = '0';
                setTimeout(() => {
                    if (isExpanded) {
                        collapseWrapper.style.maxHeight = 'none';
                    }
                }, 500);
            } else {
                // Collapse
                collapseWrapper.style.maxHeight = collapseWrapper.scrollHeight + 'px';
                collapseWrapper.offsetHeight; // Force reflow
                collapseWrapper.style.maxHeight = '400px';
                toggleBtn.querySelector('span').innerText = 'Show All Features';
                toggleIcon.style.transform = 'rotate(0deg)';
                fadeOverlay.style.opacity = '1';
                
                // Scroll pricing section back into view if user has scrolled past it
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // Testimonials
    document.getElementById('testimonials-badge').innerText = data.testimonials.badgeText;
    document.getElementById('testimonials-title').innerHTML = data.testimonials.title;
    const testimonialsContainer = document.getElementById('testimonials-grid');
    testimonialsContainer.innerHTML = data.testimonials.items.map(item => `
        <div class="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm break-inside-avoid inline-block w-full mb-6">
            <p class="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed italic mb-6">"${item.quote}"</p>
            <div class="flex items-center gap-3">
                ${item.avatar ? `
                    <img src="${item.avatar}" alt="${item.author}" class="w-9 h-9 rounded-full object-cover">
                ` : `
                    <div class="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-display font-bold text-xs text-brand-500 dark:text-brand-400">
                        ${item.initials}
                    </div>
                `}
                <div gap-1>
                    <h4 class="text-xs font-semibold text-zinc-800 dark:text-white">${item.author}</h4>
                    <span class="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">${item.role}</span>
                </div>
            </div>
        </div>
    `).join('');

    // FAQs
    document.getElementById('faq-badge').innerText = data.faq.badgeText;
    document.getElementById('faq-title').innerHTML = data.faq.title;
    document.getElementById('faq-subtitle').innerText = data.faq.subtitle;
    const faqContainer = document.getElementById('faq-accordion');
    
    if (faqContainer && data.faq && data.faq.items) {
        faqContainer.innerHTML = data.faq.items.map((item, idx) => `
            <div class="faq-item border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-zinc-300 hover:dark:border-zinc-700">
                <button class="faq-trigger w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-zinc-900 dark:text-white cursor-pointer select-none focus:outline-none" aria-expanded="false" data-index="${idx}">
                    <span>${item.question}</span>
                    <span class="material-symbols-outlined shrink-0 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 !text-[20px] ml-4 pointer-events-none">
                        keyboard_arrow_down
                    </span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <div class="p-5 pt-0 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans border-t border-zinc-100/50 dark:border-zinc-800/30">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `).join('');

        // Accordion interactions logic
        const faqTriggers = faqContainer.querySelectorAll('.faq-trigger');
        faqTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const item = trigger.closest('.faq-item');
                const content = item.querySelector('.faq-content');
                const icon = trigger.querySelector('.material-symbols-outlined');
                const isOpen = trigger.getAttribute('aria-expanded') === 'true';

                // Close all other items first (accordion style)
                faqTriggers.forEach(otherTrigger => {
                    if (otherTrigger !== trigger) {
                        const otherItem = otherTrigger.closest('.faq-item');
                        const otherContent = otherItem.querySelector('.faq-content');
                        const otherIcon = otherTrigger.querySelector('.material-symbols-outlined');
                        otherTrigger.setAttribute('aria-expanded', 'false');
                        otherContent.style.maxHeight = '0px';
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                        otherItem.classList.remove('border-zinc-300', 'dark:border-zinc-700', 'bg-white/80', 'dark:bg-zinc-900/30');
                    }
                });

                // Toggle current item
                if (isOpen) {
                    trigger.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = '0px';
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                    item.classList.remove('border-zinc-300', 'dark:border-zinc-700', 'bg-white/80', 'dark:bg-zinc-900/30');
                } else {
                    trigger.setAttribute('aria-expanded', 'true');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                    item.classList.add('border-zinc-300', 'dark:border-zinc-700', 'bg-white/80', 'dark:bg-zinc-900/30');
                }
            });
        });

        // Recalculate heights on resize if active to prevent text clipping
        window.addEventListener('resize', () => {
            const activeContent = faqContainer.querySelector('.faq-trigger[aria-expanded="true"]')?.closest('.faq-item')?.querySelector('.faq-content');
            if (activeContent) {
                activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
            }
        });
    }

    // Download CTA Banner
    document.getElementById('cta-title').innerText = data.downloadCta.title;
    document.getElementById('cta-desc').innerText = data.downloadCta.description;
    
    const ctaBtnLink = document.getElementById('cta-btn-link');
    ctaBtnLink.href = data.downloadCta.buttonUrl;
    document.getElementById('cta-badge-img').src = data.downloadCta.playStoreBadge;

    // Footer
    document.getElementById('footer-brand').innerText = data.footer.brandText;
    const footerCreator = document.getElementById('footer-creator');
    if (footerCreator) {
        footerCreator.innerText = data.footer.creatorText;
    }
    document.getElementById('footer-copyright').innerText = data.footer.copyright;

    const footerHelp = document.getElementById('footer-help-link');
    if (footerHelp) {
        footerHelp.innerText = data.footer.helpText || "Help";
        footerHelp.href = data.footer.helpUrl || "https://www.keylauncher.app/help";
    }

    const footerTerms = document.getElementById('footer-terms-link');
    footerTerms.innerText = data.footer.termsText;
    footerTerms.href = data.footer.termsUrl;

    const footerPrivacy = document.getElementById('footer-privacy-link');
    footerPrivacy.innerText = data.footer.privacyText;
    footerPrivacy.href = data.footer.privacyUrl;

    const redditLink = document.getElementById('footer-reddit-link');
    if (redditLink) {
        if (data.navigation.redditUrl) {
            redditLink.href = data.navigation.redditUrl;
        } else {
            redditLink.classList.add('hidden');
        }
    }
    
    const discordLink = document.getElementById('footer-discord-link');
    if (discordLink) {
        if (data.navigation.discordUrl) {
            discordLink.href = data.navigation.discordUrl;
        } else {
            discordLink.classList.add('hidden');
        }
    }

    const telegramLink = document.getElementById('footer-telegram-link');
    if (telegramLink) {
        if (data.navigation.telegramUrl) {
            telegramLink.href = data.navigation.telegramUrl;
        } else {
            telegramLink.classList.add('hidden');
        }
    }
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    const isClosed = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    if (isClosed) {
        const header = document.querySelector('header');
        if (header) {
            header.classList.remove('-translate-y-full');
        }
    }
});

// Close mobile menu on click
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Header Scroll (Reveal on Scroll Up)
(function() {
    const header = document.querySelector('header');
    if (!header) return;
    const mobileMenu = document.getElementById('mobile-menu');
    let lastScrollY = window.pageYOffset || window.scrollY;
    const threshold = 15; // minimum scroll distance before hiding/showing
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.pageYOffset || window.scrollY;
        
        // If mobile menu is open, don't hide the header
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            header.classList.remove('-translate-y-full');
            lastScrollY = currentScrollY;
            return;
        }
        
        // Check if scroll is significant enough
        if (Math.abs(currentScrollY - lastScrollY) < threshold) {
            return;
        }
        
        if (currentScrollY > 100 && currentScrollY > lastScrollY) {
            // Scrolling down & passed header height -> hide
            header.classList.add('-translate-y-full');
        } else {
            // Scrolling up or near the top -> show
            header.classList.remove('-translate-y-full');
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });
})();

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function updateThemeIcon() {
    if (document.documentElement.classList.contains('dark')) {
        themeIcon.textContent = 'light_mode';
    } else {
        themeIcon.textContent = 'dark_mode';
    }
}

// Initial setup
updateThemeIcon();

themeToggleBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeIcon();
});
