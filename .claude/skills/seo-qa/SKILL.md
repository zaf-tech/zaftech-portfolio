---
name: seo-qa
description: "Validate SEO changes for accuracy, metadata/schema consistency, build safety, and regression risk. Use whenever SEO edits are ready for review or when technical/on-page/local/content recommendations need final verification."
---

# SEO QA

Use this skill to review proposed or completed SEO edits before they are treated as done.

## Workflow
1. Read agent outputs and the current diff.
2. Check titles, descriptions, canonicals, schema, headings, and internal links for consistency.
3. Run lightweight verification such as build/lint when available.
4. Separate pass items, must-fix issues, and follow-up items.
5. Write results to `_workspace/03_seo-qa-review.md` and `_workspace/03_validation-summary.md`.

## Review lens
- truthful claims
- no duplicated or conflicting metadata
- no regressions in crawlable route coverage
- no obvious UX harm
- changes are small enough to trust

## Guardrails
- If validation cannot run, say why.
- If a page is better left unchanged, say so clearly.
