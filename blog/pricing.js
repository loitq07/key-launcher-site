// The edge endpoint returns only the visitor's market. Unknown regions keep
// the Play Store link; language never selects a currency or a fallback market.
(() => {
    const targets = document.querySelectorAll('[data-blog-price]');
    if (!targets.length) return;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    fetch('/api/pricing', {
        headers: { accept: 'application/json' },
        cache: 'no-store',
        credentials: 'omit',
        signal: controller.signal
    })
        .then(response => response.ok ? response.json() : null)
        .then(prices => {
            if (!prices || prices.resolved !== true || !/^[A-Z]{2}$/.test(prices.country) ||
                !/^[A-Z]{3}$/.test(prices.currency) ||
                !Number.isFinite(prices.lifetime?.amount) || prices.lifetime.amount <= 0 ||
                !Number.isInteger(prices.lifetime.decimals) ||
                prices.lifetime.decimals < 0 || prices.lifetime.decimals > 3) return;

            const locale = new Intl.Locale('und-' + prices.country).maximize().toString();
            const formatted = new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: prices.currency,
                currencyDisplay: 'narrowSymbol',
                minimumFractionDigits: prices.lifetime.decimals,
                maximumFractionDigits: prices.lifetime.decimals
            }).format(prices.lifetime.amount);
            targets.forEach(target => { target.textContent = formatted; });
        })
        .catch(() => { /* The app shows the visitor's final local price. */ })
        .finally(() => clearTimeout(timeout));
})();
