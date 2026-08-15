---
name: technical-seo-audit
description: "Audit technical SEO for the Zaftech Next.js site: metadata exports, canonicals, sitemap, robots, structured data, crawl/index coverage, and discoverability gaps. Use whenever SEO health, indexing, schema, or crawlability is mentioned."
---

# Technical SEO Audit

Use this skill to inspect the repository for technical SEO opportunities that can be proven from code.

## Workflow
1. Inventory important routes in `app/`.
2. Check global metadata in `app/layout.tsx` and page metadata in route files.
3. Inspect `app/robots.ts`, `app/sitemap.ts`, JSON-LD components, and canonical URLs.
4. Look for missing metadata, duplicate intent, weak structured data, orphaned pages, and indexability mismatches.
5. Write findings to `_workspace/01_technical-seo-audit.md` with severity, evidence, and suggested fix.

## Focus areas
- title and description coverage
- canonical consistency
- sitemap completeness
- robots correctness
- structured data coverage
- route discoverability
- internal linking hints that affect crawl depth

## Guardrails
- Do not claim ranking outcomes from repository evidence alone.
- Prefer low-risk fixes that fit Next.js metadata APIs.
- If a fix needs Search Console, Analytics, or real crawl telemetry, label it external verification.
