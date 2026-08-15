---
name: seo-daily-orchestrator
description: "Coordinate Zaftech's daily SEO multi-agent workflow for audits, fixes, metadata/schema work, internal linking, blog SEO, province-page SEO, recurring improvements, reruns, updates, partial reruns, and previous-result refinement. Use whenever SEO work for this repository is requested."
---

# SEO Daily Orchestrator

Coordinate a repeatable multi-agent SEO workflow for the Zaftech portfolio repository.

## Execution mode: agent team

## Agent roster

| Teammate | Type | Role | Skill | Output |
|---|---|---|---|---|
| technical-seo-auditor | custom | crawl, metadata, sitemap, schema, discoverability | technical-seo-audit | `_workspace/01_technical-seo-audit.md` |
| on-page-seo-optimizer | custom | titles, descriptions, headings, page copy, anchors | on-page-seo | `_workspace/02_on-page-edit-plan.md` |
| content-seo-strategist | custom | blog backlog, topical authority, internal links | content-seo | `_workspace/01_content-seo-backlog.md` |
| local-seo-specialist | custom | Canada/province service-area SEO | local-seo | `_workspace/02_province-page-plan.md` |
| seo-qa-analyst | custom | validation and regression review | seo-qa | `_workspace/03_validation-summary.md` |

## Workflow

### Phase 0: context check
1. Check whether `_workspace/` exists.
2. Decide run mode:
   - no `_workspace/` -> initial run
   - `_workspace/` exists + user asks for a specific subset -> partial rerun for only the relevant agents
   - `_workspace/` exists + user provides a new SEO objective -> archive current `_workspace/` to `_workspace_YYYYMMDD_HHMMSS/` and start fresh
3. For partial reruns, read the last relevant artifacts first and preserve still-valid work.

### Phase 1: preparation
1. Read `CLAUDE.md`, route files under `app/`, metadata exports, `app/robots.ts`, `app/sitemap.ts`, JSON-LD usage, province pages, and blog routes.
2. Create `_workspace/` and save a concise brief in `_workspace/00_run-brief.md`.
3. Read `references/zaftech-keyword-map.md` and `references/daily-checklist.md`.

### Phase 2: team execution
Create the SEO team and assign work in parallel.

Recommended task split:
- technical-seo-auditor -> technical audit and quick technical fixes
- on-page-seo-optimizer -> home/services/about/blog metadata and copy opportunities
- content-seo-strategist -> content backlog and internal-link plan
- local-seo-specialist -> province page opportunities and Canada-wide intent coverage
- seo-qa-analyst -> waits for outputs, then validates proposed edits and applied changes

### Phase 3: communication rules
- technical findings that affect copy or schema go directly to on-page and local agents.
- content strategist shares support-article targets with on-page and local agents.
- QA reviews every applied change and labels it pass, fix, or follow-up.
- Conflicts are not deleted; they are recorded with rationale and recommendation.

### Phase 4: implementation
1. Prioritize small, high-confidence improvements first.
2. Apply code changes only when they are repository-verifiable and low risk.
3. Record all edits in `_workspace/03_change-log.md`.
4. Preserve bigger ideas as backlog items instead of forcing risky edits.

### Phase 5: validation
1. Run the smallest meaningful checks available, ideally build then lint.
2. Review generated diffs for truthfulness and duplication.
3. Write `_workspace/03_seo-qa-review.md` and `_workspace/03_validation-summary.md`.

### Phase 6: reporting
Return:
- what changed in code
- what was validated
- what remains backlog or needs external data
- next-best daily actions

## Daily operating rules
- Safe recurring execution means audit, plan, small copy/metadata/schema/internal-link improvements, and validation.
- Do not claim "top rank" guarantees; aim for measurable SEO improvement.
- Do not push, open PRs, merge, or publish externally without explicit approval.
- If Search Console, Analytics, Lighthouse history, or SERP tools are unavailable, say so and use repository-grounded proxies.

## Data flow
- `_workspace/00_run-brief.md`
- `_workspace/01_technical-seo-audit.md`
- `_workspace/01_content-seo-backlog.md`
- `_workspace/01_local-seo-opportunities.md`
- `_workspace/02_on-page-edit-plan.md`
- `_workspace/02_internal-link-plan.md`
- `_workspace/02_province-page-plan.md`
- `_workspace/03_change-log.md`
- `_workspace/03_seo-qa-review.md`
- `_workspace/03_validation-summary.md`

## Error handling
- One agent blocked -> continue with others, note the gap, then rerun the blocked slice.
- Build or lint fails -> stop treating code edits as complete until the failure is understood.
- External verification missing -> mark as follow-up, not as validated truth.

## Test scenarios

### Normal flow
- user asks for daily SEO improvement for the Zaftech site
- team audits technical, on-page, content, and local opportunities
- small safe edits are applied
- validation passes
- backlog and next-day priorities are recorded

### Error flow
- metadata edits are proposed but validation cannot run
- QA marks changes as partially verified
- orchestrator reports exactly what still needs local or external validation before PR/merge
