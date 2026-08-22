# On-Page SEO Edit Plan

## Run date

2026-08-22 14:12 UTC

## Chosen edits

### 1. Blog detail breadcrumb structured data

Reason: Blog pages already render a visible breadcrumb. Adding matching `BreadcrumbList` JSON-LD helps search engines understand site hierarchy without changing visible copy.

File: `app/blog/[slug]/page.tsx`

### 2. Province service breadcrumb structured data

Reason: Province pages are important Canada-wide service-area landing pages. Breadcrumb structured data clarifies their relationship to the services section.

File: `components/ProvinceServicePage.tsx`

### 3. Province service schema URL

Reason: The province service schema described each service but did not explicitly include its canonical page URL. Adding it improves entity-page association.

File: `components/ProvinceServicePage.tsx`

## Deferred

- Open Graph image additions deferred until real image files exist in `public/images/blog`.
- Title/meta rewrites deferred because the current metadata is already focused and no Search Console data was available.
