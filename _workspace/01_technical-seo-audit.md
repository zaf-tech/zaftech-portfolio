# Technical SEO Audit

## Run date

2026-08-22 14:12 UTC

## Scope reviewed

- Metadata exports in `app/layout.tsx`, homepage, services, about, blog, contact layout, province pages, and privacy policy.
- `app/sitemap.ts` and `app/robots.ts`.
- JSON-LD usage in layout, services, contact, blog detail pages, and province service pages.
- Existing sitemap coverage for static pages, dynamic blog posts, and province service pages.

## Findings

### Passed

- Static pages have canonical metadata and Open Graph coverage.
- Dynamic province pages generate canonical URLs and province-specific metadata.
- Blog detail pages generate dynamic metadata and canonical URLs.
- Sitemap includes static pages, blog posts, and province service-area pages.
- Robots file points crawlers to `https://zaftech.ca/sitemap.xml`.

### Improvements applied today

- Added `BreadcrumbList` JSON-LD to dynamic blog detail pages.
- Added `BreadcrumbList` JSON-LD to dynamic province service pages.
- Added explicit canonical `url` to the province `Service` JSON-LD object.

## Follow-ups

- Add real Open Graph images when production image assets are available.
- Consider Search Console data review before changing titles/descriptions again.
