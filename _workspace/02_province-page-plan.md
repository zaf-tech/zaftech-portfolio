# Province Page Plan

## Run date

2026-08-22 14:12 UTC

## Current province-page system

- Pages are generated from `lib/provinces` using `app/ai-services/[province]/page.tsx`.
- Each page has province-specific metadata, canonical URL, and Open Graph URL.
- Sitemap includes province pages.

## Applied today

- Added province page breadcrumb JSON-LD.
- Added canonical URL field to each province `Service` JSON-LD object.

## Future safe additions

1. Add short province-specific FAQ sections if approved and fact-checked.
2. Add internal links from `/services` to priority province pages.
3. Add proof points or case studies once real customer/location data is available.
