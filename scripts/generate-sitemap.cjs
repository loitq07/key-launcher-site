const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const outputFile = path.join(root, 'sitemap.xml');

const BASE_URL = 'https://www.keylauncher.app';
const HELP_BASE_URL = 'https://www.keylauncher.app/help';

const ALL_LOCALES = ['en', 'vi', 'es', 'pt', 'id', 'it', 'tl', 'hi', 'fr', 'de', 'ja', 'ko', 'zh', 'ru'];

// All 55 canonical routes of Key Launcher Help Center
const HELP_ROUTES = [
  '',
  '/advanced-features/android-private-space',
  '/advanced-features/backup-restore',
  '/advanced-features/double-tap-lock',
  '/advanced-features/private-vault-hidden-items',
  '/advanced-features/pro-and-trial',
  '/advanced-features/setup-presets',
  '/advanced-features/smart-profiles',
  '/advanced-features/super-shortcuts-hotkeys',
  '/advanced-features/synced-lyrics',
  '/agenda-sheet/calendar-sync',
  '/agenda-sheet/event-actions',
  '/agenda-sheet/filters-lunar-birthdays',
  '/agenda-sheet/introduction',
  '/agenda-sheet/timeline-loading',
  '/edge-panels/discover-feed-reader-mode',
  '/edge-panels/integrated-notification-center',
  '/edge-panels/position-management-position-config',
  '/edge-panels/self-built-discover-feed-rss-aggregator',
  '/edge-panels/widget-center',
  '/focus-mode/introduction',
  '/focus-mode/modules',
  '/focus-mode/settings',
  '/getting-started/essential-system-permissions',
  '/getting-started/initial-setup-onboarding',
  '/getting-started/minimalist-focused-philosophy',
  '/home-organization/creating-and-managing-folders',
  '/home-organization/icon-gestures',
  '/home-organization/long-press-context-menus',
  '/home-organization/managing-app-drawer-categories',
  '/home-organization/pinned-apps-grid',
  '/keyboard-config/appearance-themes',
  '/keyboard-config/colors-opacity',
  '/keyboard-config/introduction',
  '/keyboard-config/long-press-actions',
  '/keyboard-config/qwerty-keyboard',
  '/keyboard-config/size-layout',
  '/keyboard-config/sound-vibration',
  '/quick-glance/center-clock',
  '/quick-glance/media-player-lyrics',
  '/quick-glance/widget-stacking',
  '/settings/contact-tap-action',
  '/settings/foldable-and-tablet',
  '/settings/fonts-and-language',
  '/settings/general-settings-swipe-gestures',
  '/settings/layout-dominant-hand',
  '/settings/setup-showcase',
  '/settings/themes-appearance',
  '/settings/weather-lunar-calendar-special-days',
  '/t9-search/calculator-mode',
  '/t9-search/how-the-t9-keyboard-works',
  '/t9-search/quick-actions',
  '/t9-search/quick-contact-search-actions',
  '/t9-search/search-settings',
  '/t9-search/universal-search'
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // 1. Root Landing Page
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}/</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>daily</changefreq>\n';
  xml += '    <priority>1.0</priority>\n';
  xml += '  </url>\n';

  // 2. Privacy Policy
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}/privacy-policy</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.5</priority>\n';
  xml += '  </url>\n';

  // 3. Terms of Service
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}/tos</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.5</priority>\n';
  xml += '  </url>\n';

  // 4. Offline License Activation
  xml += '  <url>\n';
  xml += '    <loc>' + BASE_URL + '/activate</loc>\n';
  xml += '    <lastmod>' + today + '</lastmod>\n';
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';

  // 5. Help Center (55 routes x 14 locales = 770 URLs)
  for (const route of HELP_ROUTES) {
    const isRoot = route === '';
    const priority = isRoot ? '0.9' : '0.8';
    const changeFreq = isRoot ? 'daily' : 'weekly';

    for (const loc of ALL_LOCALES) {
      const pageLoc = loc === 'en' ? `${HELP_BASE_URL}${route}` : `${HELP_BASE_URL}/${loc}${route}`;

      xml += '  <url>\n';
      xml += `    <loc>${pageLoc}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${changeFreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;

      // x-default points to English version
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${HELP_BASE_URL}${route}" />\n`;

      // Alternates for all 14 locales
      for (const altLoc of ALL_LOCALES) {
        const altHref = altLoc === 'en' ? `${HELP_BASE_URL}${route}` : `${HELP_BASE_URL}/${altLoc}${route}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${altLoc}" href="${altHref}" />\n`;
      }

      xml += '  </url>\n';
    }
  }

  xml += '</urlset>\n';

  fs.writeFileSync(outputFile, xml, 'utf8');
  console.log(`Generated ${outputFile} with 4 root URLs + ${HELP_ROUTES.length * ALL_LOCALES.length} Help Center URLs (${4 + HELP_ROUTES.length * ALL_LOCALES.length} total).`);
}

generateSitemap();
