#!/usr/bin/env python3
"""Generate api/pricing.js from the app repo's price matrix.

Source of truth is `pricing/price_matrix.csv` in loitq07/minimal-t9-launcher,
which is generated from World Bank price level data and pushed to Play Console.
This script never invents a price: every number it emits is copied from that CSV.

The output is a Vercel Edge Function, not a static asset. The full matrix stays
on the server: each request resolves the caller's country from Vercel's IP
geolocation and returns only that country's prices, without a country selector.

Usage:
    python3 tools/generate_regional_pricing.py \
        --matrix ../minimal-t9-launcher/pricing/price_matrix.csv \
        --config ../minimal-t9-launcher/pricing/pricing.json \
        --out api/pricing.js
"""

import argparse
import csv
import json
import os
from datetime import date

FUNCTION_TEMPLATE = """\
// Regional pricing endpoint for Key Launcher PRO \u2014 GENERATED FILE, DO NOT EDIT BY HAND.
// Source of truth: pricing/price_matrix.csv in loitq07/minimal-t9-launcher,
// the same matrix that is pushed to Google Play Console.
// Regenerate with: python3 tools/generate_regional_pricing.py
// Generated {generated} from {count} Play regions.
//
// The table stays on the server. Each response carries only the caller's country.

export const config = {{ runtime: 'edge' }};

// ISO country -> [currency, annual, lifetime, annualDecimals, lifetimeDecimals,
//                 percent below the plain FX conversion]
const PRICES = {{
{table}
}};

export default function handler(request) {{
    const headers = {{
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'private, no-store',
        'cdn-cache-control': 'no-store',
        'vercel-cdn-cache-control': 'no-store',
        'x-content-type-options': 'nosniff',
        'vary': 'x-vercel-ip-country'
    }};
    if (request.method !== 'GET' && request.method !== 'HEAD') {{
        return new Response(JSON.stringify({{ error: 'Method not allowed' }}), {{
            status: 405, headers: {{ ...headers, allow: 'GET, HEAD' }}
        }});
    }}
    // Only Vercel's IP geolocation selects a country. Ignore query parameters,
    // cookies and browser language. Missing geolocation must not reveal a fallback price.
    const country = request.headers.get('x-vercel-ip-country') || '';
    const row = /^[A-Z]{{2}}$/.test(country) && Object.hasOwn(PRICES, country) ? PRICES[country] : null;

    const body = row
        ? {{
            country: country,
            currency: row[0],
            annual: {{ amount: row[1], decimals: row[3] }},
            lifetime: {{ amount: row[2], decimals: row[4] }},
            discountPct: row[5],
            resolved: true
        }}
        : null;

    return new Response(request.method === 'HEAD' ? null : JSON.stringify(body), {{
        status: 200,
        headers
    }});
}}
"""


def read_matrix(path):
    rows = []
    with open(path, newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            rows.append(row)
    return rows


def decimals_of(raw):
    """Digits after the decimal point, exactly as priced in Play Console."""
    return len(raw.split(".")[1]) if "." in raw else 0


def pct(raw):
    return int(round(float(raw.strip().rstrip("%"))))


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--matrix", required=True)
    ap.add_argument("--config", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    rows = read_matrix(args.matrix)
    with open(args.config, encoding="utf-8") as fh:
        pricing_cfg = json.load(fh)

    base = pricing_cfg["base_prices"]
    base_currency = pricing_cfg["base_currency"]

    countries = {}
    for row in rows:
        countries[row["country"]] = (
            row["currency"],
            row["annual_local"],
            row["lifetime_local"],
            pct(row["annual_off_vs_fx"]),
        )

    table = []
    us = countries.get('US')
    if not us or us[0] != base_currency or float(us[1]) != base['annual'] or float(us[2]) != base['lifetime']:
        raise ValueError('US matrix prices must match the configured base prices')
    for code, (currency, annual, lifetime, off) in sorted(countries.items()):
        table.append(
            f"    {code}: [{js_string(currency)}, {annual}, {lifetime}, "
            f"{decimals_of(annual)}, {decimals_of(lifetime)}, {off}],"
        )
    if table:
        table[-1] = table[-1].rstrip(",")

    out = FUNCTION_TEMPLATE.format(
        generated=date.today().isoformat(),
        count=len(countries),
        table="\n".join(table),
    )

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as fh:
        fh.write(out)

    print(f"wrote {args.out}: {len(countries)} countries")


if __name__ == "__main__":
    main()
