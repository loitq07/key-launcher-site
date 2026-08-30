#!/usr/bin/env python3
"""Generate pricing-regional.js from the app repo's price matrix.

Source of truth is `pricing/price_matrix.csv` in loitq07/minimal-t9-launcher,
which is generated from World Bank price level data and pushed to Play Console.
This script never invents a price: every number it emits is copied from that CSV.

Usage:
    python3 tools/generate_regional_pricing.py \
        --matrix ../minimal-t9-launcher/pricing/price_matrix.csv \
        --config ../minimal-t9-launcher/pricing/pricing.json \
        --out pricing-regional.js
"""

import argparse
import csv
import json
import os
from datetime import date

# tzdb zones that browsers still report but that zone.tab no longer lists.
TZ_ALIASES = {
    "Asia/Saigon": "Asia/Ho_Chi_Minh",
    "Asia/Calcutta": "Asia/Kolkata",
    "Asia/Katmandu": "Asia/Kathmandu",
    "Asia/Rangoon": "Asia/Yangon",
    "Asia/Istanbul": "Europe/Istanbul",
    "Europe/Kiev": "Europe/Kyiv",
    "Europe/Nicosia": "Asia/Nicosia",
    "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
    "America/Godthab": "America/Nuuk",
    "Atlantic/Faeroe": "Atlantic/Faroe",
    "Pacific/Ponape": "Pacific/Pohnpei",
    "US/Eastern": "America/New_York",
    "US/Central": "America/Chicago",
    "US/Mountain": "America/Denver",
    "US/Pacific": "America/Los_Angeles",
}


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


def read_zone_tab(path, countries):
    """Map IANA timezone -> ISO country code, limited to priced countries."""
    zones = {}
    if not os.path.exists(path):
        return zones
    with open(path, encoding="utf-8") as fh:
        for line in fh:
            if line.startswith("#") or not line.strip():
                continue
            parts = line.split("\t")
            if len(parts) < 3:
                continue
            country, zone = parts[0].strip(), parts[2].strip()
            if country in countries:
                zones[zone] = country
    for alias, canonical in TZ_ALIASES.items():
        if canonical in zones:
            zones[alias] = zones[canonical]
    return dict(sorted(zones.items()))


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--matrix", required=True)
    ap.add_argument("--config", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--zone-tab", default="/usr/share/zoneinfo/zone.tab")
    args = ap.parse_args()

    rows = read_matrix(args.matrix)
    with open(args.config, encoding="utf-8") as fh:
        pricing_cfg = json.load(fh)

    base = pricing_cfg["base_prices"]
    base_currency = pricing_cfg["base_currency"]

    countries = {}
    for row in rows:
        countries[row["country"]] = [
            row["name"],
            row["currency"],
            float(row["annual_local"]),
            float(row["lifetime_local"]),
            decimals_of(row["annual_local"]),
            decimals_of(row["lifetime_local"]),
            row["tier"],
            pct(row["annual_off_vs_fx"]),
            pct(row["lifetime_off_vs_fx"]),
        ]

    zones = read_zone_tab(args.zone_tab, set(countries))

    lines = [
        "// Regional pricing data for Key Launcher PRO — GENERATED FILE, DO NOT EDIT BY HAND.",
        "// Source of truth: pricing/price_matrix.csv in loitq07/minimal-t9-launcher,",
        "// the same matrix that is pushed to Google Play Console.",
        "// Regenerate with: python3 tools/generate_regional_pricing.py",
        f"// Generated {date.today().isoformat()} from {len(countries)} Play regions.",
        "",
        "const KEY_LAUNCHER_PRICING = {",
        f"    baseCurrency: {js_string(base_currency)},",
        "    base: {",
        f"        annual: {base['annual']},",
        f"        lifetime: {base['lifetime']}",
        "    },",
        "    defaultCountry: \"US\",",
        "",
        "    // [name, currency, annual, lifetime, annualDecimals, lifetimeDecimals,",
        "    //  tier, annualOffVsFx%, lifetimeOffVsFx%]",
        "    countries: {",
    ]

    for code, values in sorted(countries.items()):
        name, currency, annual, lifetime, ad, ld, tier, aoff, loff = values
        annual_js = f"{annual:.{ad}f}"
        lifetime_js = f"{lifetime:.{ld}f}"
        lines.append(
            f"        {code}: [{js_string(name)}, {js_string(currency)}, "
            f"{annual_js}, {lifetime_js}, {ad}, {ld}, {js_string(tier)}, {aoff}, {loff}],"
        )

    lines[-1] = lines[-1].rstrip(",")
    lines += [
        "    },",
        "",
        "    // IANA timezone -> ISO country, used to guess the visitor's Play region.",
        "    timezones: {",
    ]

    zone_entries = [f"        {js_string(zone)}: {js_string(code)}," for zone, code in zones.items()]
    if zone_entries:
        zone_entries[-1] = zone_entries[-1].rstrip(",")
    lines += zone_entries
    lines += [
        "    }",
        "};",
        "",
    ]

    with open(args.out, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines))

    print(f"wrote {args.out}: {len(countries)} countries, {len(zones)} timezones")


if __name__ == "__main__":
    main()
