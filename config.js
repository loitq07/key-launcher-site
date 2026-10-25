// Key Launcher Landing Page Content Configuration
// Edit this file to easily update text, links, testimonials, and features without editing index.html.

const KEY_LAUNCHER_CONTENT = {
    // Navigation Header
    navigation: {
        logo: "assets/logo_key_launcher.png",
        features: "Features",
        press: "Press",
        compare: "Compare",
        pricing: "Pricing",
        activate: "Activate",
        blog: "Blog",
        more: "More",
        testimonials: "Reviews",
        faq: "FAQ",
        help: "Help",
        helpUrl: "https://www.keylauncher.app/help",
        downloadText: "Download Free",
        downloadUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
        apkDownloadUrl: "https://apkpure.com/key-launcher-%C2%B7-t9-productivity/com.loitran.minimalt9launcher.free/download"
    },

    // Hero Section
    hero: {
        badgeText: "Key Launcher 2.0",
        titleLine1: "Everything starts",
        titleLine2: "with a key.",
        description: "Launch apps with T9 or QWERTY, try Swipe Typing (Beta), and make room for focus. Customize your home screen, organize private spaces, and turn your phone into a Pomodoro desk clock.",
        demoText: "Watch the 2.0 demo",
        demoUrl: "https://youtu.be/eomHRqCAvow",
        playStoreBtnUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
        playStoreBadge: "assets/google_play_badge.png",
        apkDownloadUrl: "https://apkpure.com/key-launcher-%C2%B7-t9-productivity/com.loitran.minimalt9launcher.free/download",
        screenshot: "assets/screenshot_hero.png",
        screenshots: ["assets/hero_1.webp", "assets/screenshots/3_qwerty.png", "assets/hero_2.webp", "assets/hero_3.webp", "assets/hero_4.webp", "assets/hero_5.webp", "assets/hero_6.webp", "assets/hero_7.webp", "assets/hero_8.webp"],
        rating: {
            stars: 4.7,
            reviewsCount: "100+ reviews",
            label: "4.7/5 on Google Play"
        },
        valueProps: ["T9 & QWERTY search", "Swipe Typing (Beta)", "Free core · Ad-free"]
    },

    // Media Coverage / Press & Videos
    media: {
        badgeText: "Media Coverage",
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
                source: "Android Authority",
                logo: "assets/logo_android_authority_light.svg",
                title: "These 11 paid Android apps are worth every penny I spent",
                quote: "Key Launcher is among the most impressive launchers I’ve ever used. I thought I’d hate the idea of a T9 keypad-based home screen, but it’s since replaced the Pixel Launcher on my Pixel 8. That alone should tell you how good it is.",
                url: "https://www.androidauthority.com/best-paid-android-apps-3690115/"
            },
            {
                source: "MobileSyrup",
                logo: "assets/ms-logo.svg",
                title: "New Android launcher uses dumb phone techniques in a smart way",
                quote: "A launcher built around a T9 keypad mixes 90s vibes with surprisingly powerful shortcuts",
                url: "https://mobilesyrup.com/2026/05/06/new-android-launcher-uses-dumb-phone-techniques-in-a-smart-way/"
            },
            {
                source: "Computerworld",
                logo: "assets/logo_computerworld.svg",
                title: "A retro-geeky Android home screen remix",
                quote: "Key Launcher has only been out and available on the Play Store for a matter of weeks now, but it's impressively polished — and, even more important, impressively original while also having some fantastic geek-tech throwback vibes.",
                url: "https://www.computerworld.com/article/4180222/retro-android-home-screen.html"
            },
            {
                source: "MakeUseOf",
                logo: "assets/logo_MakeUseOf.svg",
                title: "I swapped my app grid for a T9 keypad and my Android is faster than ever",
                quote: "I have tried several launchers, but I'd have to say that Key Launcher is the only one that tries to solve Android's clutter problem.",
                url: "https://www.makeuseof.com/swapped-app-grid-for-t9-keypad-my-android-is-faster-than-ever/"
            }
        ],
        video: {
            title: "Watch the Full Review Video",
            embedUrl: "https://www.youtube.com/embed/09Wzav3Iw-Y?start=119",
            url: "https://www.youtube.com/watch?v=09Wzav3Iw-Y&t=119s"
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
                description: "Find apps with a few keystrokes.",
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
                description: "Separate private spaces, each with its own passcode.",
                footerLabel: "Vault storage",
                footerValue: "Stored on your device",
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

    // Focus Mode Highlight Section
    focusMode: {
        badgeText: "Super Focus",
        title: "Mute Distractions. <br class=\"hidden sm:inline\">Silence the Noise.",
        description: "Turn your device into the ultimate desk companion. Key Launcher's Super Focus mode silences all distracting notifications and replaces your standard interface with a minimalist dashboard. Enjoy seamless, zero-distraction access to essential utilities like your music player, calendar, Pomodoro timer, personal photo slideshow, and a classic offline game for quick breaks.",
        image: "assets/focus_mode.webm",
        bullets: [
            {
                icon: "do_not_disturb_on",
                title: "1-Tap Silent Mode",
                description: "Instantly mute incoming alerts from all distracting social apps."
            },
            {
                icon: "music_note",
                title: "Music Player",
                description: "Relax with synced lyrics right on your screen."
            },
            {
                icon: "calendar_today",
                title: "Calendar & Agenda",
                description: "Keep track of your agenda at a single glance."
            },
            {
                icon: "hourglass_empty",
                title: "Pomodoro Timer",
                description: "Built-in interval timer to keep you in the zone."
            },
            {
                icon: "photo_album",
                title: "Album Slideshow",
                description: "Cycle through favorite memories while you work."
            },
            {
                icon: "sports_esports",
                title: "T-Rex Game",
                description: "A fun, classic offline run for short breaks."
            }
        ]
    },

    // Competitor Comparison Section
    compare: {
        badgeText: "Side-by-Side Comparison",
        title: "Why Switch to Key Launcher?",
        subtitle: "Compare Key Launcher with other popular minimalist Android launchers. See why thousands of minimalist phone lovers and power users made the switch.",
        featureHeader: "Feature",
        topBadge: "Top",
        mobileLabel: "Compare with:",
        mobileHint: "Tap to switch",
        allTab: "All",
        scrollHint: "Swipe horizontally to see all columns",
        rows: [
            { name: "T9 Keypad Fast Search", desc: "Find apps with a few keystrokes.", keyLauncher: "Yes (Instant)", niagara: "❌ Alphabet scroll", minimalistPhone: "❌ Text list", olauncher: "❌ Text search" },
            { name: "QWERTY & Swipe Typing", desc: "QWERTY search + Swipe Typing (Beta)", keyLauncher: "Yes (Both)", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
            { name: "Multiple Private Vaults", desc: "Separate vaults with their own passcodes", keyLauncher: "Multiple vaults with Pro", niagara: "Hide app only", minimalistPhone: "App blocker only", olauncher: "Hide app only" },
            { name: "Super Focus & Ambient Lyrics", desc: "Built-in Pomodoro, desk clock & synced lyrics", keyLauncher: "Built-in", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
            { name: "Search & privacy", desc: "App and contact search on-device; online services disclosed", keyLauncher: "Local search + online features", niagara: "See privacy policy", minimalistPhone: "See privacy policy", olauncher: "See privacy policy" },
            { name: "Pricing Model", desc: "Fair and sustainable pricing", keyLauncherMain: "Free Core", keyLauncherSub: "Affordable Lifetime Option", niagara: "Annual Subscription", minimalistPhone: "High Subscription ($20+/yr)", olauncher: "Free / Donation" }
        ]
    },

    // Pricing / Plans Section
    pricing: {
        badgeText: "Transparent pricing",
        title: "Use for Free. <br class=\"sm:hidden\">Upgrade to PRO.",
        subtitle: "Core features are entirely free and ad-free forever. Upgrade to PRO with a yearly subscription or a one-time lifetime purchase.",
        comparisonSubtitle: "Compare all features side-by-side",

        // Copy for the regional price block. The prices themselves are served
        // per-visitor by api/pricing.js and never shipped to the browser.
        regional: {
            annualLabel: "1-Year Subscription",
            lifetimeLabel: "Lifetime Purchase",
            regionLabel: "Prices for",
            regionUnknown: "Prices shown in USD. Google Play charges the price set for your account's country.",
            discountNote: "{pct}% below the global price, adjusted for local purchasing power.",
            discountMinPct: 10,
            policyNote: "No sales, ever. Prices only go up \u2014 buy earlier, pay less. Lifetime purchases are never repriced."
        },
        licenseBanner: {
            title: "E-Ink, Dumbphone or Non-Google Play user?",
            description: "Buy or activate 100% offline license keys via VietQR (PayOS) or International Card (Lemon Squeezy).",
            buttonText: "Buy / Activate License"
        },
        // Public global prices shown while regional Vercel pricing is unavailable.
        // The API replaces them with the visitor's exact Google Play region price.
        fallback: {
            currency: "USD",
            annual: { amount: 9.99, decimals: 2 },
            lifetime: { amount: 29.99, decimals: 2 },
            discountPct: 0,
            resolved: false
        },
        plans: [
            {
                name: "Free Plan",
                price: "Free",
                pricePeriod: "/ lifetime",
                priceHtml: `
                    <div class="flex items-baseline gap-1">
                        <span id="free-price" class="text-3xl font-display font-extrabold text-zinc-900 dark:text-white">Free</span>
                        <span class="text-zinc-500 text-sm">/ lifetime</span>
                    </div>
                `,
                description: "Ideal for digital detox pursuers who want clean interfaces and basic speed.",
                buttonText: "Download Free",
                buttonUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
                isRecommended: false,
                features: [
                    { name: "T9 & QWERTY search with Swipe Typing (Beta)", included: true },
                    { name: "8 pinned items, 3 widgets per Widget Center & 2 Stack widgets", included: true },
                    { name: "3 Super Shortcuts", included: true },
                    { name: "1 Private Vault item & 1 App Limit", included: true },
                    { name: "In-app trial of Pro features; see terms in the app", included: true },
                    { name: "Notification Dots, Quick Actions & Home swipe gestures", included: true }
                ]
            },
            {
                name: "PRO Plan",
                price: "",
                pricePeriod: "",
                // Rendered by app.js from /api/pricing, which resolves the caller's
                // country at the edge and returns only that country's prices.
                regionalPricing: true,
                description: "Tailor every aspect of your mobile layout to fit your aesthetic lofi chill music routines.",
                buttonText: "Upgrade In-App",
                buttonUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
                isRecommended: true,
                features: [
                    { name: "Unlimited pinned items & Widget Center widgets; up to 4 Stack widgets", included: true },
                    { name: "All Super Shortcut keys & unlimited Home pages", included: true },
                    { name: "Multiple Private Vaults, unlimited vault items & App Limits", included: true },
                    { name: "Focus Mode, Synced Lyrics & Icon Packs", included: true },
                    { name: "Glass keyboard, Neon Glow, Ripple & 3D Home transitions", included: true },
                    { name: "Custom fonts, Calculator, auto wallpaper & Backup / Restore", included: true }
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
                        { nameEn: "Hide Apps & Contacts", free: "10 apps; unlimited contacts", pro: "Unlimited" },
                        { nameEn: "Double-Tap to Lock", free: "✅", pro: "✅" },
                        { nameEn: "App Pages", free: "2 pages", pro: "Unlimited" },
                        { nameEn: "QWERTY Search", free: "✅", pro: "✅" },
                        { nameEn: "Swipe Typing (Beta)", free: "✅", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Keyboard",
                    features: [
                        { nameEn: "Calculator Mode", free: "In-app trial", pro: "✅" },
                        { nameEn: "Ringer Toggle", free: "In-app trial", pro: "✅" },
                        { nameEn: "Keyboard Color Presets", free: "In-app trial", pro: "✅" },
                        { nameEn: "Glass Keyboard", free: "In-app trial", pro: "✅" },
                        { nameEn: "Neon Glow & Ripple", free: "In-app trial", pro: "✅" },
                        { nameEn: "3D Home Transitions", free: "In-app trial", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Widget Center",
                    features: [
                        { nameEn: "Widgets Quantity", free: "3 widgets", pro: "Unlimited" },
                        { nameEn: "Custom Wallpaper", free: "❌", pro: "✅" },
                        { nameEn: "Widget Stack (Home / Notification Center)", free: "2 widgets", pro: "4 widgets" }
                    ]
                },
                {
                    nameEn: "Quick Glance",
                    features: [
                        { nameEn: "Clock Widget", free: "✅", pro: "✅" },
                        { nameEn: "Calendar Widget", free: "✅", pro: "✅" },
                        { nameEn: "Weather Widget", free: "✅", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Super Shortcut & Hotkey",
                    features: [
                        { nameEn: "Super Shortcut", free: "3 slots", pro: "All keys" }
                    ]
                },
                {
                    nameEn: "Private Vault",
                    features: [
                        { nameEn: "Private Vault", free: "1 item", pro: "Unlimited" },
                        { nameEn: "Additional Private Vaults", free: "In-app trial", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Focus Mode",
                    features: [
                        { nameEn: "Focus Mode", free: "In-app trial", pro: "✅" },
                        { nameEn: "Always-On Screen", free: "In-app trial", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Music",
                    features: [
                        { nameEn: "Music Controls", free: "✅", pro: "✅" },
                        { nameEn: "Synced Lyrics", free: "In-app trial", pro: "✅" }
                    ]
                },
                {
                    nameEn: "Appearance",
                    features: [
                        { nameEn: "Wallpaper Options", free: "✅", pro: "✅" },
                        { nameEn: "Auto Wallpaper Change", free: "In-app trial", pro: "✅" },
                        { nameEn: "Icon Pack Support", free: "In-app trial", pro: "✅" },
                        { nameEn: "Custom Fonts", free: "In-app trial", pro: "✅" },
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
                    nameEn: "Discover Feed",
                    features: [
                        { nameEn: "RSS Feed Sources", free: "3 sources", pro: "Unlimited" }
                    ]
                },
                {
                    nameEn: "Settings & Data",
                    features: [
                        { nameEn: "Backup & Restore", free: "In-app trial", pro: "✅" }
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
        title: "Real Users. <br class=\"sm:hidden\">Real Reviews.",
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
            },
            {
                quote: "this app is basically perfect. well designed, fast, easy to use, visually stunning. ad free!!!! purchase for full features is a reasonable $5 a year or $10 one time purchase (I will only ever use apps that offer a 1 time purchase) but is perfectly useable without paying. this is everything a launcher should be.",
                avatar: "assets/alliyah.jpg",
                initials: "A",
                author: "Alliyah",
                role: "Motorola motorola razr 60 ultra"
            },
            {
                quote: "I felt like this launcher was made for me. Very big Niagara launcher fan, but would install an app dialer and additional apps to improve my experience. This already has an app dialer at its core with super shortcuts, widget page, RSS feed, and categories in the app drawer. Loving this launcher so far and paid for premium!",
                avatar: "assets/marlo_hernandez.jpg",
                initials: "MH",
                author: "Marlo Hernandez",
                role: "ZTE REDMAGIC 9 Pro"
            },
            {
                quote: "As a long time Nova user, I started looking for a new launcher when I found out about the terrible things the company who bought Nova was doing. I tried many launchers and found that Key Launcher was the best of the bunch and met all my very picky requirements. Key Launcher is fast, flexible, highly configurable, and the developer is very helpful, very responsive, and very invested in making his customers happy and building the best product possible. I am very happy and very satisfied!",
                avatar: "",
                initials: "ST",
                author: "Skip Tannen",
                role: ""
            },
            {
                quote: "super useful launcher, developer super active providing frequent new updates with new features. I moved from Smart, Nova and Octopi.",
                avatar: "assets/rafal_skos.jpg",
                initials: "RS",
                author: "Rafal Skos",
                role: "Google Pixel 10 Pro"
            },
            {
                quote: "My daily driver, T9 keyboard is intuitive and fast to use, it has a really nice UI alongside focus mode and timed lyrics on the home screen. So far, the launcher is fast and responsive. The developer patches out any bugs very quickly too! Overall, I can't recommend this launcher enough if you miss the T9 keyboard or looking for a unique launcher :)",
                avatar: "assets/charlie.jpg",
                initials: "C",
                author: "Charlie",
                role: "Google Pixel 8 Pro"
            },
            {
                quote: "This launcher is exceptional, offering a visually stunning experience that serves as a compelling reason to utilize the Android platform.",
                avatar: "assets/ivan_lara_mainar.png",
                initials: "IM",
                author: "Ivan Lara Mainar",
                role: "Samsung Galaxy S25 Ultra"
            },
            {
                quote: "Great balance between clean/minimal and features/functionality. The T9 search is super fast with smart memory, and the inclusion of widgets and app actions in \"quick dial\" shortcuts makes it complete and very flexible without being overcrowded. Great launcher! And as extra benefit, the developer responds quickly and adequately to reports and feedback.",
                avatar: "assets/tim.jpg",
                initials: "T",
                author: "Tim",
                role: "Oppo Find X9 Pro"
            },
            {
                quote: "This is one of the top launcher applications available on the Play Store, developed with a unique approach.",
                avatar: "",
                initials: "AD",
                author: "Aditya Dwivedi",
                role: "Realme 8 5G"
            },
            {
                quote: "The interface design, with the keyboard on the main page, the widget page, and especially notifications on the left page, is very convenient. The sorting of applications on the main page according to usage is another important feature. An intelligently designed professional launcher",
                avatar: "",
                initials: "E",
                author: "Erdem",
                role: "Samsung Galaxy A23"
            },
            {
                quote: "To be honest, I didn't like it much at first, but they've improved it, and I've tried using it more. Now, I find it quite pleasant. Notifications, calendar, app grouping, widgets, etc.—everything a good launcher needs. Highly recommended.",
                avatar: "assets/carl_berrick.jpg",
                initials: "CB",
                author: "Carl Berrick",
                role: "Google Pixel 8a"
            },
            {
                quote: "my favourite launcher on samsung so far, still working to make it mine but I love it!",
                avatar: "assets/jesse_wills.png",
                initials: "JW",
                author: "Jesse Wills",
                role: "Samsung Galaxy S24 Ultra"
            },
            {
                quote: "Extremely polished launcher, what an excellent proposal, see, may this standard of quality be maintained (translated)",
                avatar: "",
                initials: "AP",
                author: "Ailton pires guimaraes",
                role: "Samsung Galaxy A16"
            }
        ]
    },

    // FAQs Section
    faq: {
        badgeText: "Common questions",
        title: "Frequently Asked Questions",
        subtitle: "Have questions about Key Launcher? Find answers to the most common queries below.",
        items: [
            {
                question: "What is a T9 App Launcher?",
                answer: "A T9 launcher uses a classic 3×4 keypad to filter apps by the letters on each number key. Enter a few digits, then choose the matching app. Key Launcher also offers QWERTY search and Swipe Typing (Beta)."
            },
            {
                question: "Is Key Launcher safe and private?",
                answer: "App and contact search runs on your device, and Private Vault contents are stored locally. Online features such as web suggestions, weather and lyrics use network services. The app also uses analytics, crash reporting and purchase services. See the Privacy Policy for details."
            },
            {
                question: "Does Key Launcher support custom icon packs and wallpapers?",
                answer: "Yes. Key Launcher provides full support for custom icon packs, system colors, and various typography choices. You can customize the look of individual icons, set auto-wallpaper changes, and use your favorite fonts. Some advanced visual customizations are part of the optional PRO plan."
            },
            {
                question: "Will Key Launcher drain my battery?",
                answer: "Battery use depends on your setup. An always-on Focus clock, live widgets, weather refresh and other active features can increase power use. Adjust these features in Settings to suit your device."
            },
            {
                question: "What messaging and calling integrations are supported?",
                answer: "The launcher supports instant dialing and messaging. By typing contacts or numbers, you can directly launch phone calls, SMS, or open chat apps like WhatsApp, Zalo, and Viber to contact people instantly without navigating through different contact lists."
            },
            {
                question: "Can I try the PRO features before purchasing?",
                answer: "Yes. You can try Pro features in the app before upgrading. Check the app for your trial duration and terms; existing installations may keep earlier trial terms. Pro is available as a yearly subscription or a lifetime purchase."
            }
        ]
    },

    // Download CTA Banner Section
    downloadCta: {
        title: "Ready to Experience T9 Speed?",
        description: "Download Key Launcher today on your Android device to simplify operations, skyrocket productivity, and reclaim screen time.",
        buttonText: "Get Free on Play Store",
        buttonUrl: "https://play.google.com/store/apps/details?id=com.loitran.minimalt9launcher.free",
        playStoreBadge: "assets/google_play_badge.png",
        apkDownloadUrl: "https://apkpure.com/key-launcher-%C2%B7-t9-productivity/com.loitran.minimalt9launcher.free/download"
    },

    // Footer
    footer: {
        brandText: "Key Launcher",
        creatorText: "PRODUCT BY LOUSIFY TECH",
        copyright: "© 2026 Lousify Tech. All rights reserved.",
        privacyText: "Privacy Policy",
        privacyUrl: "/privacy-policy",
        termsText: "Terms of Service",
        termsUrl: "/tos",
        helpText: "Help",
        helpUrl: "https://www.keylauncher.app/help"
    },

    // UI and Supporting Labels
    ui: {
        ratingOn: "on Google Play",
        previousScreenshot: "Previous screenshot",
        nextScreenshot: "Next screenshot",
        toggleTheme: "Toggle theme",
        changeLanguage: "Change language",
        featuresBenefits: "Features & Benefits",
        scrollToExplore: "Scroll to explore",
        apkSubtext: "Direct APK / Non-GMS",
        apkTitle: "Download APK",
        featuredOn: "Featured on",
        listedOn: "Listed on"
    }
};
