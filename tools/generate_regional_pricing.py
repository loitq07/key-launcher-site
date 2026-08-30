#!/usr/bin/env python3
"""Generate api/pricing.js from the app repo's price matrix.

Source of truth is `pricing/price_matrix.csv` in loitq07/minimal-t9-launcher,
which is generated from World Bank price level data and pushed to Play Console.
This script never invents a price: every number it emits is copied from that CSV.

The output is a Vercel Edge Function, not a static asset. The full matrix stays
on the server: each request resolves the caller's country from the Play/Vercel
geo header and the response carries that one country's prices and nothing else,
so a visitor cannot read the price list for any other country.

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
// The table below never leaves the server. Each response carries the caller's
// own country and nothing else, so no visitor can read another country's price.

export const config = {{ runtime: 'edge' }};

// ISO country -> [currency, annual, lifetime, annualDecimals, lifetimeDecimals,
//                 percent below the plain FX conversion]
const PRICES = {{
{table}
}};

const BASE = {{
    currency: {base_currency},
    annual: {base_annual},
    lifetime: {base_lifetime},
    decimals: {base_decimals}
}};

export default function handler(request) {{
    // Vercel resolves this from the caller's IP at the edge. It is absent when
    // running locally, in which case we fall back to the global base price.
    const country = (request.headers.get('x-vercel-ip-country') || '').toUpperCase();
    const row = PRICES[country];

    const body = row
        ? {{
            country: country,
            currency: row[0],
            annual: {{ amount: row[1], decimals: row[3] }},
            lifetime: {{ amount: row[2], decimals: row[4] }},
            discountPct: row[5],
            resolved: true
        }}
        : {{
            country: null,
            currency: BASE.currency,
            annual: {{ amount: BASE.annual, decimals: BASE.decimals }},
            lifetime: {{ amount: BASE.lifetime, decimals: BASE.decimals }},
            discountPct: 0,
            resolved: false
        }};

    return new Response(JSON.stringify(body), {{
        status: 200,
        headers: {{
            'content-type': 'application/json; charset=utf-8',
            // The answer differs per caller, so it must never be shared by a
            // cache: a cached response would show one country's price to another.
            'cache-control': 'private, no-store, max-age=0',
            'vary': 'x-vercel-ip-country'
        }}
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
        base_currency=js_string(base_currency),
        base_annual=base["annual"],
        base_lifetime=base["lifetime"],
        base_decimals=decimals_of(str(base["annual"])),
    )

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as fh:
        fh.write(out)

    print(f"wrote {args.out}: {len(countries)} countries")


if __name__ == "__main__":
    main()
