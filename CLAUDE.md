# Zaftech Portfolio — Claude Code Workspace

**Project:** zaftech.ca — Enterprise AI Consulting Canada  
**Stack:** Next.js 14, TypeScript, Tailwind CSS  
**Production URL:** https://zaftech.ca  
**Repo:** https://github.com/zaf-tech/zaftech-portfolio

---

## Project Context

Zaftech is a Canadian enterprise AI enablement company. The site targets CTOs, IT leads, and enterprise decision-makers across all Canadian provinces. Primary conversion goal: Calendly booking ("Book a Free AI Assessment").

**Key services:** Agentic AI, Private LLM deployment, Finance AI, Compliance AI, AI App Development.

---

## Auto-Loaded Skills

The following skills are available in this workspace. Type the slash command to invoke:

| Skill | Command | Purpose |
|-------|---------|---------|
| SEO Daily | `/seo-daily` | Daily SEO audit, content creation, and technical checks for zaftech.ca |

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/provinces.ts` | Province data for all 13 Canadian provinces/territories |
| `components/ProvinceServicePage.tsx` | Shared component for provincial landing pages |
| `components/JsonLd.tsx` | JSON-LD schema injector |
| `app/sitemap.ts` | Dynamic sitemap (auto-includes provincial pages) |
| `app/ai-services/[province]/page.tsx` | 13 provincial landing pages |
| `app/blog/[slug]/page.tsx` | Dynamic blog post route with BlogPosting schema |
| `docs/superpowers/specs/2026-05-23-seo-canada-design.md` | Full SEO strategy spec |
| `docs/superpowers/plans/2026-05-24-seo-canada.md` | SEO implementation plan |

---

## SEO Keyword Clusters

**Core target keywords:**
- enterprise AI consulting Canada
- agentic AI services Canada
- private LLM deployment Canada
- PIPEDA compliant AI
- AI company Canada

**Provincial pattern:** `enterprise AI consulting [province]` for all 13 provinces.

**Blog keyword clusters:** See `docs/superpowers/specs/2026-05-23-seo-canada-design.md` Phase 3.

---

## Blog Post Structure

New blog posts go in `app/blog/[slug]/page.tsx` (dynamic route) or as a static page. Add to the `blogPosts` array in `app/blog/page.tsx`. Target: 3–5 posts/month, 1,200–2,500 words each.

Frontmatter fields required:
```ts
{
  slug, title, excerpt, date, category, image, author, readTime,
  dateISO  // YYYY-MM-DD format for JSON-LD
}
```

---

## Dev Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm run qc       # Technical QC checks
npm run qc:full  # Full QC (build + technical)
```

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |

Set in `.env.local` for dev, in Vercel/Netlify dashboard for production.

---

## Standards

- No comments unless the WHY is non-obvious
- No unused variables or dead code
- All new pages need: `metadata` export, canonical URL, OG tags, JSON-LD schema
- Server component wrappers (`layout.tsx`) required for any `'use client'` page that needs metadata
- Provincial pages: use `ProvinceServicePage` component — do not duplicate JSX
