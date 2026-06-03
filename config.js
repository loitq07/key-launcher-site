// Key Launcher Landing Page Content Configuration
// Edit this file to easily update text, links, testimonials, and features without editing index.html.

const KEY_LAUNCHER_CONTENT = {
    // Navigation Header
    navigation: {
        logo: "assets/logo_key_launcher.png",
        features: "Features",
        press: "Press",
        pricing: "Pricing",
        testimonials: "Reviews",
        downloadText: "Download Free",
        downloadUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free"
    },

    // Hero Section
    hero: {
        badgeText: "Latest release",
        titleLine1: "Two Taps.",
        titleLine2: "Launch Apps.",
        description: "Stop wasting time searching through cluttered screens and getting drawn into social notifications. Key Launcher replaces your standard app grid with a classic T9 keyboard. Press 1-3 number keys, and your app instantly appears. The ultimate tool for digital detox.",
        playStoreBtnUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
        playStoreBadge: "assets/google_play_badge.png",
        screenshot: "assets/screenshot_hero.png",
        screenshots: [
            "assets/hero_1.png",
            "assets/hero_2.png",
            "assets/hero_3.png",
            "assets/hero_4.png",
            "assets/hero_5.png",
            "assets/hero_6.png",
            "assets/hero_7.png"
        ],
        rating: {
            stars: 4.7,
            reviewsCount: "100+ reviews",
            label: "4.7/5 on Google Play"
        },
        valueProps: [
            "Free Core Features",
            "100% Ad-Free",
            "Offline Privacy"
        ]
    },

    // Media Coverage / Press & Videos
    media: {
        title: "Featured In & Reviews",
        subtitle: "See what tech journalists and creators are saying about Key Launcher's minimalist approach.",
        articles: [
            {
                source: "Android Authority",
                logo: "assets/logo_android_authority_light.svg",
                title: "I thought I'd hate this Android launcher inspired by dumb phones, but I was so wrong",
                quote: "Key Launcher is one of the slickest Android launchers I’ve used in years. Key Launcher genuinely surprised me. Its unique design philosophy makes oodles of sense in practice, putting efficiency and minimalism on the surface while somehow appeasing maximalists and customization lovers with multiple usage paths and tweaking options beneath. It’s a tough balance to strike, and this launcher nails it.",
                url: "https://www.androidauthority.com/key-launcher-android-launcher-3658970/"
            },
            {
                source: "Android Authority",
                logo: "assets/logo_android_authority_light.svg",
                title: "5 of the best new Android apps you need to try this May",
                quote: "Key Launcher stands out as a home screen that’s hyper-focused on shortening the journey for almost every user action, while offering a fair bit of customization for those who enjoy it.",
                url: "https://www.androidauthority.com/best-new-android-apps-games-may-2026-3661657/"
            },
            {
                source: "MobileSyrup",
                logo: "assets/ms-logo.svg",
                title: "New Android launcher uses dumb phone techniques in a smart way",
                quote: "A launcher built around a T9 keypad mixes 90s vibes with surprisingly powerful shortcuts",
                url: "https://mobilesyrup.com/2026/05/06/new-android-launcher-uses-dumb-phone-techniques-in-a-smart-way/"
            }
        ],
        video: {
            title: "Watch the Full Review Video",
            embedUrl: "https://www.youtube.com/embed/1U8iC-S4IRU?si=CZ3GvCIa0jq1SmR9"
        }
    },

    // Core Features Section
    features: {
        title: "Designed for Speed. Optimized for Focus.",
        subtitle: "Break your smartphone addiction. Simplify your daily workflow with our practical, distraction-free features.",
        items: [
            {
                icon: "bolt",
                title: "Ultra-Fast T9 Search",
                description: "Launch Any App in Two Taps.",
                footerLabel: "AI Suggestions",
                footerValue: "Self-learning",
                footerColor: "text-emerald-500",
                image: "assets/feature_search.png"
            },
            {
                icon: "call",
                title: "Instant Call",
                description: "Call, SMS, or Search Instantly.",
                footerLabel: "Supported integrations",
                footerValue: "Zalo, WhatsApp, Viber",
                footerColor: "text-zinc-600 dark:text-zinc-400",
                image: "assets/feature_call.jpg"
            },
            {
                icon: "play_circle",
                title: "Live Synced Lyrics",
                description: "Relax to Music, Right on Your Home Screen.",
                footerLabel: "Media Engine",
                footerValue: "Chill Mode",
                footerColor: "text-brand-500 dark:text-brand-400",
                image: "assets/feature_lyrics.jpg"
            },
            {
                icon: "widgets",
                title: "Widget Center",
                description: "Your Favorite Widgets One Place",
                footerLabel: "Panel type",
                footerValue: "Hidden / Anti-Distraction",
                footerColor: "text-zinc-600 dark:text-zinc-400",
                image: "assets/feature_widgets.jpg"
            },
            {
                icon: "calendar_today",
                title: "Calendar & Agenda",
                description: "Agenda right in your hand",
                footerLabel: "Agenda",
                footerValue: "Easy import / export",
                footerColor: "text-brand-500 dark:text-brand-400",
                image: "assets/feature_calendar.jpg"
            },
            {
                icon: "hourglass_empty",
                title: "Pomodoro Focus Timer",
                description: "Built-In Deep Work Mode.",
                footerLabel: "Work Ethic",
                footerValue: "Deep Work Mode",
                footerColor: "text-brand-500 dark:text-brand-400",
                image: "assets/feature_pomodoro.jpg"
            },
            {
                icon: "shield",
                title: "Private Vault",
                description: "Hide Apps. No Cloud. Zero Tracking.",
                footerLabel: "Data pipeline",
                footerValue: "100% Offline / Local",
                footerColor: "text-emerald-500",
                image: "assets/feature_vault.jpg"
            },
            {
                icon: "palette",
                title: "Material You & Typography",
                description: "Themes That Feel Uniquely Yours.",
                footerLabel: "Layout",
                footerValue: "Monochrome / System colors",
                footerColor: "text-zinc-600 dark:text-zinc-400",
                image: "assets/feature_theme.jpg"
            }
        ]
    },

    // Pricing / Plans Section
    pricing: {
        badgeText: "Transparent pricing",
        title: "Use for Free. Upgrade to PRO.",
        subtitle: "Core features are entirely free and ad-free forever. Optional PRO subscription unlocks deep aesthetic customization.",
        plans: [
            {
                name: "Free Plan",
                price: "$0",
                pricePeriod: "/ lifetime",
                priceHtml: `
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-display font-extrabold text-zinc-900 dark:text-white">$0</span>
                        <span class="text-zinc-500 text-sm">/ lifetime</span>
                    </div>
                `,
                description: "Ideal for digital detox pursuers who want clean interfaces and basic speed.",
                buttonText: "Download Free",
                buttonUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
                isRecommended: false,
                features: [
                    { name: "Lightning-fast T9 search (Vietnamese diacritics)", included: true },
                    { name: "Up to 8 pinned items & 3 widgets", included: true },
                    { name: "3 Super Shortcut slots (keys 1-3)", included: true },
                    { name: "1 Private Vault secure item & 1 App Limit", included: true },
                    { name: "30-day trial of Focus Mode, Synced Lyrics & Icon Packs", included: true },
                    { name: "Notification Dots & Backup / Restore included", included: true }
                ]
            },
            {
                name: "PRO Plan",
                price: "",
                pricePeriod: "",
                priceHtml: `
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-2">
                            <span class="text-xs text-zinc-500">1-Year Subscription</span>
                            <div class="text-right">
                                <span class="text-lg font-bold text-zinc-900 dark:text-white">$4.99</span>
                                <span class="text-xs text-zinc-400 line-through ml-1.5">$9.99</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-1">
                            <span class="text-xs text-zinc-500">Lifetime Purchase</span>
                            <div class="text-right">
                                <span class="text-lg font-bold text-zinc-900 dark:text-white">$9.99</span>
                                <span class="text-xs text-zinc-400 line-through ml-1.5">$19.99</span>
                            </div>
                        </div>
                    </div>
                `,
                description: "Tailor every aspect of your mobile layout to fit your aesthetic lofi chill music routines.",
                buttonText: "Upgrade In-App",
                buttonUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
                isRecommended: true,
                features: [
                    { name: "Unlimited pinned items & widgets", included: true },
                    { name: "All 9 Super Shortcut slots", included: true },
                    { name: "Unlimited Private Vault items & App Limits", included: true },
                    { name: "Full Focus Mode, Synced Lyrics & Icon Packs", included: true },
                    { name: "Widget Center custom wallpaper & custom fonts", included: true },
                    { name: "Auto wallpaper & Backup / Restore included", included: true }
                ]
            }
        ],
        comparison: {
            categories: [
                {
                    nameEn: "Core",
                    features: [
                        { nameEn: "T9 Smart Search", free: "✅", pro: "✅" },
                        { nameEn: "Pinned Items", free: "8 items", pro: "Unlimited" },
                        { nameEn: "Swipe Gestures", free: "✅", pro: "✅" },
                        { nameEn: "Contact Search", free: "✅", pro: "✅" },
                        { nameEn: "Hide Apps & Contacts", free: "✅", pro: "✅" },
                        { nameEn: "Double-Tap to Lock", free: "✅", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Widget Center",
                    features: [
                        { nameEn: "Widgets Quantity", free: "3 widgets", pro: "Unlimited" },
                        { nameEn: "Custom Wallpaper", free: "❌", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Quick Glance",
                    features: [
                        { nameEn: "Clock Widget", free: "✅", pro: "✅" },
                        { nameEn: "Calendar Widget", free: "✅", pro: "✅" },
                        { nameEn: "Weather Widget", free: "✅", pro: "✅" },
                        { nameEn: "Stack Widget", free: "✅", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Super Shortcut & Hotkey",
                    features: [
                        { nameEn: "Super Shortcut", free: "3 slots", pro: "All 9 slots" }
                    ]
                },
                {
                    nameEn: "Private Vault",
                    features: [
                        { nameEn: "Private Vault", free: "1 item", pro: "Unlimited" }
                    ]
                },
                {
                    nameEn: "Focus Mode",
                    features: [
                        { nameEn: "Focus Mode", free: "30-day trial", pro: "✅" },
                        { nameEn: "Always-On Screen", free: "30-day trial", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Music",
                    features: [
                        { nameEn: "Music Controls", free: "✅", pro: "✅" },
                        { nameEn: "Synced Lyrics", free: "30-day trial", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Appearance",
                    features: [
                        { nameEn: "Wallpaper Options", free: "✅", pro: "✅" },
                        { nameEn: "Auto Wallpaper Change", free: "❌", pro: "✅" },
                        { nameEn: "Icon Pack Support", free: "30-day trial", pro: "✅" },
                        { nameEn: "Icon Customization", free: "✅", pro: "✅" },
                        { nameEn: "Notification Dots", free: "✅", pro: "✅" },
                        { nameEn: "Wallpaper Overlay", free: "✅", pro: "✅" }
                    ]
                },
                {
                    nameEn: "App Usage",
                    features: [
                        { nameEn: "App Usage Tracking", free: "1 app", pro: "Unlimited" }
                    ]
                },
                {
                    nameEn: "Settings & Data",
                    features: [
                        { nameEn: "Backup & Restore", free: "✅", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Easter Egg",
                    features: [
                        { nameEn: "T-Rex Game", free: "✅", pro: "✅" }
                    ]
                }
            ]
        }
    },

    // Testimonials / Reviews Section
    testimonials: {
        badgeText: "User feedback",
        title: "Real Users. Real Reviews.",
        items: [
            {
                quote: "TL;DR: Great experience, this was my choice launcher across 5 ones I tried. I expect to use it for a long time and recommend it. Long story: The launcher is very customizable while feeling quick to use. The main page hosts 8 quick launch apps for common use ones then the T9 for everything else, so it feels like everything is available at the touch of a button. Calling my wife? Dial her number with the T9. Finding an app? 2 or 3 button presses away. Everything is quick to access.",
                avatar: "assets/christopher_pruett.jpg",
                initials: "CP",
                author: "Christopher Pruett",
                role: "Samsung Galaxy S23 Ultra"
            },
            {
                quote: "This is a launcher even a picky person could love. I say this as someone who refused to let go of Evie launcher for a long time, switched to nova and then Microsoft and then a minimalist one. None of these are like key launcher but, as many others have said, I was pleasantly surprised by how useful and enjoyable this launcher is. I like that you can search through your app icons bc many of the icon packs I use will have variants of icons for the same app. Can't go without the t9 search now!",
                avatar: "assets/ivy_tearose.jpg",
                initials: "CA",
                author: "Ivy Tearose",
                role: "Samsung Galaxy S22 Ultra"
            },
            {
                quote: "Key Launcher has completely changed the way I use my phone. Searching for T9 is incredibly fast, and the minimalist design eliminates all that visual clutter from colorful icons that make you want to procrastinate. The integrated Pomodoro Focus mode and the hidden widget center are fantastic tools. Lightweight, fast, and it delivers exactly what it promises for a good digital detox. I highly recommend it!",
                avatar: "assets/j_paulo.png",
                initials: "JP",
                author: "J. Paulo",
                role: "Oppo Find X5"
            },
            {
                quote: "A really cool and original alternative launcher! There are plenty of customization options while still keeping speed a priority. Once you get the hang of the T9-style keyboard, it becomes indispensable for everyday use. A big thumbs up to the development team for this alternative launcher! 👌",
                avatar: "assets/johan_gautreau.png",
                initials: "JG",
                author: "Johan Gautreau",
                role: "Samsung Galaxy Z Flip3 5G"
            },
            {
                quote: "This might be one of the most beautifully made launchers. sleek clean fast down to the core. only one thing I found lowkey weird - you have swipe up, down and left gestures that do their job perfectly. i would love to see some habit tracker with statistics in built with the swipe right gesture of the dev thinks it's a good enough idea. in my opinion that would make this an absolute unit, the perfect launcher.",
                avatar: "assets/pranjal_kumar.gif",
                initials: "PK",
                author: "Pranjal Kumar",
                role: "Nothing Phone 1"
            },
            {
                quote: "Absolutely fantastic, even better than Niagara Launcher, and that is high praise indeed. And with loads of potential.",
                avatar: "assets/veralithos.png",
                initials: "V",
                author: "Veralithos",
                role: "POCO X3 NFC"
            },
            {
                quote: "The best launcher out there, period, I have fallen in love with my phone all over again, I am a paid user of lots of launchers, none makes my life as easy as key launcher, key launcher makes it feel like I got a new phone.",
                avatar: "",
                initials: "SJ",
                author: "Sanju Jose",
                role: "Redmi 12C"
            },
            {
                quote: "Excellent ui and ux, overall it's the most snappy launcher i have ever came across. Highly recommended.",
                avatar: "assets/yudhishthira.jpg",
                initials: "Y",
                author: "Yudhishthira",
                role: "Redmi Mi 9T Pro"
            },
            {
                quote: "It's a nice launcher. It's a very quick and fast way to access any action. It has a focus mode to work on productive work. it takes some time to get it familiar. one you are familiar with this launcher, then it's very fast to operate. Thanks to dev for such a wonderful app. keep updating and adding new features.",
                avatar: "assets/nagarjuna_ch.jpg",
                initials: "NC",
                author: "Nagarjuna Ch",
                role: "OnePlus Nord 3 5G"
            },
            {
                quote: "I've tried countless launchers in the past but this one is easily my favorite. The design is sleek, and the implementation of the focus mode or should I say desk clock mode is absolutely superb. It changed how I use my phone for the better. While there are occasional hiccups, the developer is incredibly active and quick to address any issues. To the developer: Thank you so much for actually listening to your users. Keep up the amazing work!",
                avatar: "assets/jc_dela_cruz.jpg",
                initials: "JC",
                author: "JC Dela Cruz (Jheyz)",
                role: "Infinix ZERO Flip"
            }
        ]
    },

    // Download CTA Banner Section
    downloadCta: {
        title: "Ready to Experience T9 Speed?",
        description: "Download Key Launcher today on your Android device to simplify operations, skyrocket productivity, and reclaim screen time.",
        buttonText: "Get Free on Play Store",
        buttonUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
        playStoreBadge: "assets/google_play_badge.png"
    },

    // Footer
    footer: {
        brandText: "Key Launcher",
        creatorText: "PRODUCT BY LOUSIFY TECH",
        copyright: "© 2026 Lousify Tech. All rights reserved.",
        privacyText: "Privacy Policy",
        privacyUrl: "privacy-policy.html",
        termsText: "Terms of Service",
        termsUrl: "tos.html"
    }
};
