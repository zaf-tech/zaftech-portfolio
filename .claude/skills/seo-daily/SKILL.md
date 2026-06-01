---
name: seo-daily
description: Daily SEO improvement workflow for zaftech.ca — runs a 5-step audit covering technical health, content creation, metadata, internal linking, and schema validation. Targets Canadian enterprise AI consulting keywords.
---

# SEO Daily Master Skill — zaftech.ca

**Announce at start:** "Running the SEO Daily skill for zaftech.ca."

This skill runs a structured daily SEO improvement session. Complete all 5 steps in order. Each step has specific checks and actions.

---

## Step 1 — Technical Health Check (5 min)

Run these checks every session:

**1.1 Sitemap**
```bash
curl -s http://localhost:3000/sitemap.xml | grep -o '<loc>[^<]*</loc>' | wc -l
```
Expected: 25+ URLs (6 static + blog posts + 13 provincial). If fewer, check `app/sitemap.ts` — a new page may be missing.

**1.2 Robots.txt**
```bash
curl -s http://localhost:3000/robots.txt
```
Expected: `Allow: /` and `Sitemap: https://zaftech.ca/sitemap.xml`

**1.3 OG Image**
Visit `http://localhost:3000/opengraph-image` — must render a 1200×630 branded image.

**1.4 Build check**
```bash
npm run build 2>&1 | tail -20
```
Zero TypeScript errors = pass. Any new errors = fix before content work.

**1.5 JSON-LD spot check**
Pick one page, view source, search for `application/ld+json`. Confirm schema is present and valid JSON.

**Report:** List any failures. Fix P0 issues (build errors, missing sitemap entries) before moving to Step 2.

---

## Step 2 — Content Creation (blog post)

Target: **1 post per session** from the keyword cluster below. Pick the next unpublished keyword.

### Keyword Queue (in priority order)

| # | Target Keyword | Title | Pillar | Status |
|---|---------------|-------|--------|--------|
| 1 | PIPEDA AI compliance | PIPEDA Compliance for Enterprise AI in Canada: What You Need to Know | Compliance | done |
| 2 | private LLM Canada | Private LLM vs Public API: The Canadian Enterprise Decision | Private LLM | - |
| 3 | AI agents Ontario finance | How AI Agents Are Transforming Ontario Financial Services | Agentic AI | - |
| 4 | AI invoice processing Canada | AI-Powered Invoice Processing: 5 Ways Canadian Firms Save 60+ Hours/Month | Finance AI | - |
| 5 | enterprise AI consulting Alberta | Enterprise AI Consulting in Alberta: Oil & Gas, Energy, and Finance | Provincial | - |
| 6 | secure LLM enterprise Canada | Why Canadian Enterprises Choose Private LLMs Over Public AI APIs | Private LLM | - |
| 7 | AI compliance Canada SOC 2 | SOC 2 Compliant AI Systems: A Guide for Canadian Enterprises | Compliance | - |
| 8 | AI application development Canada | Custom AI Application Development for Canadian Enterprises | App Dev | - |
| 9 | on-premise AI Canada | On-Premise AI Deployment: Security and Compliance for Canadian Firms | Private LLM | - |
| 10 | agentic AI workflow automation | Agentic AI Workflow Automation: Real-World Examples from Canadian Enterprises | Agentic AI | - |

**Mark a keyword done** by changing `-` to `done` in the Status column after publishing.

### Blog Post Requirements

Every post must have:
- **Length:** 1,200–2,500 words
- **H1:** Matches or closely mirrors the target keyword
- **Primary keyword:** In H1, first paragraph, 2–3 subheadings, conclusion
- **Secondary keywords:** 2–3 related terms woven in naturally
- **Internal links:** Link to the relevant service pillar page + one provincial page + `/contact`
- **CTA at end:** "Ready to explore AI for your enterprise? [Book a Free Assessment](https://zaftech.ca/contact)"
- **JSON-LD BlogPosting schema:** via `<JsonLd>` component
- **Metadata:** `generateMetadata` or static `metadata` export with title + description

### Blog Post Checklist

- [ ] Added to `blogPosts` array in `app/blog/page.tsx`
- [ ] Page file created at `app/blog/[slug]/page.tsx` or static route
- [ ] `dateISO` field set (YYYY-MM-DD)
- [ ] `excerpt` field set (150–160 chars, includes primary keyword)
- [ ] `metadata` export with Canadian-targeted title + description
- [ ] `BlogPosting` JSON-LD injected via `<JsonLd>`
- [ ] OG/Twitter metadata set
- [ ] Internal links: service pillar + provincial page + /contact
- [ ] CTA at end of post
- [ ] Image added to `/public/images/blog/[slug].jpg`
- [ ] Committed on a feature branch

---

## Step 3 — Metadata Audit

Pick **2 pages per session** and audit their metadata against this standard:

### Metadata Standard

| Field | Required | Target |
|-------|----------|--------|
| `title` | Yes | 50–60 chars, includes primary keyword + "Canada" + "Zaftech" |
| `description` | Yes | 150–160 chars, includes 1–2 keywords, action-oriented |
| `openGraph.url` | Yes | Exact canonical URL |
| `alternates.canonical` | Yes | Same as openGraph.url |
| `openGraph.title` | Yes | Same as title or close variant |
| `openGraph.description` | Yes | Same as description |

### Pages to Audit (rotate through)

1. `/` (Home)
2. `/services`
3. `/about`
4. `/blog`
5. `/contact`
6. `/ai-services/ontario`
7. `/ai-services/british-columbia`
8. `/ai-services/alberta`
9. Each blog post page

**Fix:** Any title over 60 chars, description over 160 chars, or missing canonical → edit the file immediately.

---

## Step 4 — Internal Linking Audit

Goal: Every page should have at least 3 internal links pointing TO it.

**Check which pages are under-linked:**

Key pages that need the most inbound internal links:
- `/contact` — should be linked from every blog post and every provincial page
- `/services` — should be linked from home, about, all provincial pages, all blog posts
- `/ai-services/ontario` — should be linked from at least 2 blog posts and services page
- `/blog` — should be linked from home (latest 3 posts) and footer

**Action per session:** Find 1 existing page that could naturally link to an under-linked page, and add the link.

**Internal link format in Next.js:**
```tsx
<Link href="/ai-services/ontario">Enterprise AI consulting in Ontario</Link>
```

Use descriptive anchor text — never "click here" or "learn more" alone.

---

## Step 5 — Provincial Page Improvement

Pick **1 provincial page per session** and improve it:

### Province Rotation (weekly)

| Week | Province |
|------|----------|
| 1 | Ontario |
| 2 | British Columbia |
| 3 | Alberta |
| 4 | Quebec |
| 5 | Manitoba |
| 6 | Saskatchewan |
| 7 | Nova Scotia |
| 8 | New Brunswick |
| 9 | PEI |
| 10 | Newfoundland |
| 11 | NWT |
| 12 | Yukon |
| 13 | Nunavut |

### Provincial Page Improvement Checklist

- [ ] H1 includes province name and "Enterprise AI Consulting"
- [ ] Intro paragraph naturally uses province name 2–3 times
- [ ] Industries section reflects actual industries in `lib/provinces.ts`
- [ ] PIPEDA callout present
- [ ] At least 1 link to a blog post relevant to that province's industries
- [ ] CTA links to `/contact` (Calendly)
- [ ] JSON-LD `Service` schema has correct `areaServed` province
- [ ] Metadata title: `Enterprise AI Consulting in [Province] — Zaftech`
- [ ] Metadata description: 150–160 chars, includes province name + primary keyword

---

## Session Log Template

After each session, add a line to `docs/seo/daily-log.md`:

```markdown
## [YYYY-MM-DD]
- **Technical:** [pass/issues found]
- **Content:** [blog post written or "none"]
- **Metadata:** [pages audited]
- **Internal links:** [what was added]
- **Provincial:** [province improved]
- **Next session priority:** [what to focus on next]
```

Create `docs/seo/daily-log.md` on first run if it doesn't exist.

---

## Canadian SEO Priorities (always keep in mind)

- **PIPEDA** = differentiator. Mention it on compliance, private LLM, and contact pages.
- **Province names** in anchor text and headings signal local relevance to Google.
- **"Enterprise"** qualifier prevents low-intent traffic — keep it in titles.
- **Calendly CTA** = primary conversion. Every page should have a path to it.
- Every new blog post should target **long-tail Canadian keywords** — not just "AI consulting" but "AI consulting Ontario enterprise" or "private LLM deployment Canada PIPEDA".

---

## Key File Locations

| File | Purpose |
|------|---------|
| `app/blog/page.tsx` | Blog post list — add new posts here |
| `app/blog/[slug]/page.tsx` | Dynamic blog route with generateMetadata |
| `lib/provinces.ts` | Province data (industries, descriptions) |
| `components/ProvinceServicePage.tsx` | Shared provincial page layout |
| `app/ai-services/[province]/page.tsx` | Provincial landing pages |
| `app/sitemap.ts` | Add new routes here when new pages are created |
| `docs/superpowers/specs/2026-05-23-seo-canada-design.md` | Full SEO strategy |
| `docs/seo/daily-log.md` | Daily session log |
