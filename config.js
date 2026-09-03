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
        faq: "FAQ",
        help: "Help",
        helpUrl: "https://www.keylauncher.app/help",
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
            "assets/hero_1.webp",
            "assets/hero_2.webp",
            "assets/hero_3.webp",
            "assets/hero_4.webp",
            "assets/hero_5.webp",
            "assets/hero_6.webp",
            "assets/hero_7.webp",
            "assets/hero_8.webp"
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

    // Pricing / Plans Section
    pricing: {
        badgeText: "Transparent pricing",
        title: "Use for Free. <br class=\"sm:hidden\">Upgrade to PRO.",
        subtitle: "Core features are entirely free and ad-free forever. Upgrade to PRO with a yearly subscription or a one-time lifetime purchase.",

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
                    { name: "Lightning-fast T9 search (Vietnamese diacritics)", included: true },
                    { name: "Up to 8 pinned items & 3 widgets", included: true },
                    { name: "3 Super Shortcut slots (keys 1-3)", included: true },
                    { name: "1 Private Vault secure item & 1 App Limit", included: true },
                    { name: "30-day trial of Focus Mode, Synced Lyrics, Icon Packs & Backup", included: true },
                    { name: "Notification Dots, Quick Actions & Swipe Gestures included", included: true }
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
                    { name: "Unlimited pinned items & widgets", included: true },
                    { name: "All 9 Super Shortcut slots & unlimited app pages", included: true },
                    { name: "Unlimited Private Vault items & App Limits", included: true },
                    { name: "Full Focus Mode, Synced Lyrics & Icon Packs", included: true },
                    { name: "Custom fonts, keyboard color presets & Calculator Mode", included: true },
                    { name: "Auto wallpaper, unlimited RSS sources & Backup / Restore", included: true }
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
                        { nameEn: "Double-Tap to Lock", free: "✅", pro: "✅" },
                        { nameEn: "App Pages", free: "2 pages", pro: "Unlimited" }
                    ]
                },
                {
                    nameEn: "Keyboard",
                    features: [
                        { nameEn: "Calculator Mode", free: "30-day trial", pro: "✅" },
                        { nameEn: "Ringer Toggle", free: "30-day trial", pro: "✅" },
                        { nameEn: "Keyboard Color Presets", free: "30-day trial", pro: "✅" }
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
                        { nameEn: "Auto Wallpaper Change", free: "30-day trial", pro: "✅" },
                        { nameEn: "Icon Pack Support", free: "30-day trial", pro: "✅" },
                        { nameEn: "Custom Fonts", free: "30-day trial", pro: "✅" },
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
                        { nameEn: "Backup & Restore", free: "30-day trial", pro: "✅" }
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
                answer: "A T9 launcher uses the classic 3x4 keypad layout (like old dumb phones) to find and launch apps. Each key represents multiple letters (e.g., 2 is ABC, 3 is DEF). By pressing keys matching your app name (for example, 4-2-6 for 'Han' or 'Games'), the launcher instantly filters your apps. It takes just 2 or 3 taps to open any app, eliminating home screen clutter and helping you avoid mindless scrolling."
            },
            {
                question: "Is Key Launcher safe and private?",
                answer: "Absolutely. Key Launcher operates 100% offline and locally on your device. It does not request internet permissions, does not collect any personal data, and does not upload your usage statistics to any cloud servers. Your private vault and app usage data are stored securely on your own phone."
            },
            {
                question: "Does Key Launcher support custom icon packs and wallpapers?",
                answer: "Yes. Key Launcher provides full support for custom icon packs, system colors, and various typography choices. You can customize the look of individual icons, set auto-wallpaper changes, and use your favorite fonts. Some advanced visual customizations are part of the optional PRO plan."
            },
            {
                question: "Will Key Launcher drain my battery?",
                answer: "No, on the contrary! Key Launcher is built using efficient native Android architecture. It has no background network synchronization, no ads, and a highly optimized minimalist layout. This helps reduce CPU activity and screen-on power consumption, leading to better battery life."
            },
            {
                question: "What messaging and calling integrations are supported?",
                answer: "The launcher supports instant dialing and messaging. By typing contacts or numbers, you can directly launch phone calls, SMS, or open chat apps like WhatsApp, Zalo, and Viber to contact people instantly without navigating through different contact lists."
            },
            {
                question: "Can I try the PRO features before purchasing?",
                answer: "Yes, you can! Key Launcher offers a 30-day free trial for core PRO features, including Focus Mode, Synced Lyrics, and custom Icon Packs. This lets you experience the full potential of the launcher before deciding whether to purchase a yearly subscription or a lifetime license."
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
        privacyUrl: "/privacy-policy",
        termsText: "Terms of Service",
        termsUrl: "/tos",
        helpText: "Help",
        helpUrl: "https://www.keylauncher.app/help"
    }
};
