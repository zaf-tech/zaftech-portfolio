# Change Log

## 2026-08-22

### Files changed

- `app/blog/[slug]/page.tsx`
  - Added reusable `blogUrl` value.
  - Added `BreadcrumbList` JSON-LD matching the visible Home / Blog / Post breadcrumb.

- `components/ProvinceServicePage.tsx`
  - Added reusable `provinceUrl` value.
  - Added `url` to province `Service` JSON-LD.
  - Added `BreadcrumbList` JSON-LD for Home / AI Services / Province.

### Files intentionally excluded from this SEO PR

- `.env.local` contains environment-specific data and must not be committed.
- Agent monitor files are unrelated to this SEO rerun and should remain outside this PR unless requested separately.
