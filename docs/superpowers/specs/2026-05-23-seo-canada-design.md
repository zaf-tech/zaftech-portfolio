# Zaftech Canada SEO Strategy — Design Spec

**Date:** 2026-05-23  
**Project:** zaftech-portfolio (Next.js 14)  
**Goal:** Canada-wide SEO to build brand awareness and drive consultation bookings from enterprise decision-makers and technical buyers across all provinces.

---

## Context

- **Stack:** Next.js 14, TypeScript, Tailwind CSS, deployed as static/SSR
- **Current state:** Basic `metadata` exports per page, no sitemap, no robots.txt, no Open Graph images, no JSON-LD schema, no canonical tags, no structured data
- **Target market:** Canada — all 10 provinces + 3 territories
- **Audience:** Enterprise decision-makers + technical buyers (CTOs, architects, IT leads)
- **Primary conversion:** Calendly booking ("Book a Free AI Assessment")
- **Content appetite:** Aggressive — blog posts, provincial landing pages, case studies, thought leadership

---

## Approach: Three-Phase Compound SEO

Each phase builds on the last. Technical foundation first ensures all content gets indexed correctly from day one.

---

## Phase 1 — Technical SEO Foundation (Weeks 1–2)

### 1.1 Sitemap (`app/sitemap.ts`)

Dynamic Next.js sitemap using the `MetadataRoute.Sitemap` return type. Auto-includes:
- Static pages: `/`, `/about`, `/services`, `/blog`, `/contact`, `/privacy-policy`
- Blog posts: dynamically from the blog post list
- Provincial pages: `/ai-services/[province-slug]` (added when Phase 2 is built)

Sitemap submitted to Google Search Console after deployment.

### 1.2 Robots (`app/robots.ts`)

Standard robots.ts allowing all crawlers with sitemap pointer:
```
User-agent: *
Allow: /
Sitemap: https://zaftech.ca/sitemap.xml
```

### 1.3 Root Layout Metadata Upgrade (`app/layout.tsx`)

Add `metadataBase` pointing to production domain. Upgrade the root `metadata` export to include:
- `metadataBase`: production URL
- `openGraph`: title, description, type (`website`), images (OG image 1200×630), siteName
- `twitter`: card (`summary_large_image`), title, description, images
- `alternates.canonical`: base canonical
- `verification.google`: token from env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

### 1.4 Per-Page Metadata Upgrades

Each page gets a targeted `metadata` export with Canadian-market-optimised title and description. Title pattern: `[Service/Topic] | Zaftech — Enterprise AI Consulting Canada`.

| Page | Title Target | Primary Keyword |
|------|-------------|-----------------|
| Home | Enterprise AI Consulting Canada — Zaftech | enterprise AI consulting Canada |
| Services | Agentic AI Services for Canadian Enterprises — Zaftech | agentic AI services Canada |
| About | About Zaftech — AI Enablement Company Canada | AI company Canada |
| Blog | AI Insights & Resources — Zaftech Blog | enterprise AI blog Canada |
| Contact | Contact Zaftech — Book Your Free AI Assessment | AI consulting Canada contact |

### 1.5 JSON-LD Structured Data

**`Organization` schema** — injected in root layout:
- name, url, logo, description, areaServed: `CA` (Canada), contactPoint (type: CustomerService), sameAs (LinkedIn, etc.)

**`Service` schema** — injected on `/services` page:
- One schema block per pillar (Agentic AI, Private LLM, Finance AI, Compliance AI, App Dev)
- areaServed: Canada with province list

**`BlogPosting` schema** — injected on each blog post page:
- headline, datePublished, dateModified, author, image, description, publisher

**`LocalBusiness` / `ProfessionalService` schema** — injected on `/contact`:
- areaServed covering all Canadian provinces

### 1.6 Google Site Verification

Stored as environment variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Injected via `metadata.verification.google` in root layout. Must be set in Vercel/Netlify environment variables before deployment.

### 1.7 OG Image

A static default OG image at `public/og-image.png` (1200×630px) — Zaftech brand colours, logo, tagline. Used as fallback for all pages without a custom OG image. Blog posts and provincial pages get their own OG images in Phase 2/3.

---

## Phase 2 — Provincial Landing Pages + Core Keyword Pages (Weeks 3–8)

### 2.1 Route Structure

```
app/
  ai-services/
    [province]/
      page.tsx        ← dynamic route for all provinces
  layout.tsx          ← shared layout (inherited)
```

Province slugs:
```
ontario, british-columbia, alberta, quebec, manitoba,
saskatchewan, nova-scotia, new-brunswick, prince-edward-island,
newfoundland-and-labrador, northwest-territories, yukon, nunavut
```

### 2.2 Province Page Content

Each provincial page includes:
- **H1:** `Enterprise AI Consulting in [Province] — Zaftech`
- **Intro paragraph** with province name naturally integrated
- **Services overview** (same 5 pillars, province-contextualised copy)
- **Industries section** — highlighting industries prominent in that province (e.g. oil & gas for Alberta, finance for Ontario, healthcare for BC)
- **PIPEDA compliance callout** — relevant to all Canadian provinces
- **CTA** — Book a Free AI Assessment (Calendly link)
- **Province-specific JSON-LD** — LocalBusiness/Service schema with province in areaServed

### 2.3 Province-Specific Industry Targeting

| Province | Focus Industries |
|----------|-----------------|
| Ontario | Finance, Legal, Healthcare, Tech |
| British Columbia | Tech, Healthcare, Mining, Real Estate |
| Alberta | Oil & Gas, Energy, Agriculture, Finance |
| Quebec | Manufacturing, Pharma, Finance, Government |
| Manitoba | Agriculture, Healthcare, Manufacturing |
| Saskatchewan | Agriculture, Mining, Energy |
| Nova Scotia | Maritime, Healthcare, Government |
| New Brunswick | Manufacturing, Healthcare, Forestry |
| PEI | Agriculture, Tourism, Government |
| Newfoundland & Labrador | Oil & Gas, Mining, Fisheries |
| NWT / Yukon / Nunavut | Mining, Government, Remote Operations |

### 2.4 Shared Province Page Component

A `ProvinceServicePage` component takes province data as props — avoids duplicating JSX across 13 pages. Province data defined in a `lib/provinces.ts` data file with name, slug, industries, and any province-specific copy overrides.

### 2.5 Internal Linking

Every provincial page:
- Links to `/services` (pillar hub)
- Links to relevant blog posts
- Links to `/contact`

The Services page links to all provincial pages via a "Serving enterprises across Canada" section with province list.

---

## Phase 3 — Content Calendar & Content Strategy (Month 2+)

### 3.1 Blog Content Volume

**Target:** 3–5 posts/month. Minimum viable: 3/month. Each post: 1,200–2,500 words.

### 3.2 Content Pillars & Keyword Clusters

Each service pillar has a cluster of target keywords:

**Pillar: Agentic AI**
- enterprise AI agents Canada
- AI automation for Canadian businesses
- agentic AI workflow automation
- AI process automation Ontario / Alberta / BC

**Pillar: Private LLM**
- private LLM deployment Canada
- on-premise AI Canada
- PIPEDA compliant AI
- secure LLM enterprise Canada

**Pillar: Finance AI**
- AI for finance Canada
- automated invoice processing Canada
- AI accounting automation
- finance AI compliance Canada

**Pillar: Compliance & Security**
- AI compliance Canada
- SOC 2 compliant AI
- PIPEDA AI compliance
- AI governance Canada

**Pillar: AI App Development**
- AI application development Canada
- RAG system development Canada
- enterprise AI copilot development
- custom AI app Canada

### 3.3 Content Types

1. **Keyword blog posts** — targeting specific search terms with educational content
2. **Thought leadership** — opinion pieces on AI adoption in Canada, industry trends
3. **Case studies** — dedicated pages at `/case-studies/[slug]` (high conversion intent)
4. **Comparison pages** — e.g. "Private LLM vs Public AI API: What Canadian Enterprises Need to Know"
5. **PIPEDA-specific content** — content around Canadian privacy law + AI is a differentiator

### 3.4 Sample Month 1 Content Calendar

| Week | Post Title | Target Keyword | Pillar |
|------|-----------|---------------|--------|
| 1 | PIPEDA Compliance for Enterprise AI in Canada | PIPEDA AI compliance | Compliance |
| 2 | Private LLM vs Public API: The Canadian Enterprise Decision | private LLM Canada | Private LLM |
| 3 | How AI Agents Are Transforming Ontario Financial Services | AI agents Ontario finance | Agentic AI |
| 4 | AI-Powered Invoice Processing: 5 Ways Canadian Firms Save 60+ Hours/Month | AI invoice processing Canada | Finance AI |

### 3.5 Internal Linking Strategy

- Every blog post links to its parent service pillar page
- Every blog post links to at least one provincial page (where relevant)
- Every blog post ends with a `/contact` CTA
- Service pillar pages list their 5 most relevant blog posts
- Home page features latest 3 blog posts

### 3.6 Content Production Workflow

1. Keyword research (Ahrefs/Semrush or free tools) → identify target keyword
2. Draft post targeting primary keyword + 2–3 secondary keywords
3. Add internal links (service pillar + provincial page + contact)
4. Add JSON-LD `BlogPosting` schema
5. Add custom OG image (province or service themed)
6. Publish and submit URL to Google Search Console for indexing

---

## Technical Requirements Summary

| Item | Location | Priority |
|------|----------|----------|
| `app/sitemap.ts` | New file | P0 |
| `app/robots.ts` | New file | P0 |
| Root layout metadata upgrade | `app/layout.tsx` | P0 |
| Per-page metadata upgrades | Each page file | P0 |
| Organization JSON-LD | `app/layout.tsx` or component | P0 |
| Service JSON-LD | `app/services/page.tsx` | P0 |
| BlogPosting JSON-LD | `app/blog/[slug]/page.tsx` | P0 |
| Google verification env var | `.env.local` + hosting | P0 |
| OG image (default) | `public/og-image.png` | P1 |
| Provincial routes | `app/ai-services/[province]/` | P1 |
| `lib/provinces.ts` data file | New file | P1 |
| ProvinceServicePage component | `components/ProvinceServicePage.tsx` | P1 |
| Case studies routes | `app/case-studies/[slug]/` | P2 |
| Blog post schema | Per post page | P1 |

---

## Success Metrics

- **Month 1:** All pages indexed in Google Search Console, 0 crawl errors, Core Web Vitals pass
- **Month 2:** Provincial pages appearing in search for province + AI terms
- **Month 3:** 500+ monthly organic impressions, 5+ keywords in top 50
- **Month 6:** 2,000+ monthly organic sessions, 10+ consultation bookings/month from organic
- **Month 12:** Top 10 ranking for 3+ primary Canadian AI consulting terms

---

## Out of Scope

- Paid search / Google Ads
- Social media SEO (LinkedIn, X)
- Backlink outreach (separate strategy)
- Multi-language support (French/English) — future consideration for Quebec
