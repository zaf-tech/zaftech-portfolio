# ZafTech Website Redesign — Design Spec
**Date:** 2026-04-27  
**Branch:** `redesign`  
**Status:** Approved

---

## Goal

Unify the entire ZafTech portfolio website under a single dark-navy "AI world" visual system and reframe the brand as the premier **Agentic AI enablement provider** — helping enterprises replace human-accuracy-dependent processes with computer accuracy through private LLMs, pre-orchestrated agents, and compliance-first AI adoption.

---

## 1. Visual System (applies to ALL pages)

### Background
`NetworkAnimation` is already mounted as a `fixed` full-screen layer in `app/layout.tsx`. The single change needed across all pages: **remove every opaque background** (`bg-white`, `bg-gray-50`, `from-white`, `bg-gray-50`) and replace with transparent dark-glass equivalents so the animation shows through everywhere.

### Color Tokens (unify with home page)
| Use | Class |
|-----|-------|
| Page body | `bg-slate-950` / `#0d1117` |
| Section separator (subtle) | `bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/80` |
| Card background | `bg-slate-800/60 backdrop-blur-sm border border-blue-500/30` |
| Heading text | `text-blue-200` |
| Body text | `text-blue-300/70` or `text-slate-300` |
| Strong accent | `from-blue-400 to-blue-300` gradient |
| CTA button | existing `.btn-primary` (blue gradient, already correct) |
| Icon containers | `bg-gradient-to-br from-blue-500/20 to-blue-400/10` |

### Typography
- Headings: Poppins (`font-heading font-bold`) — `text-blue-200`
- Body: Inter (`font-sans`) — `text-blue-300/70`
- Labels/badges: `text-blue-300 text-xs tracking-widest font-semibold`
- No `text-primary` (#0F172A near-black) or `text-text-light` (#6B7280) anywhere — both are light-theme leftovers

### Logo
Use `/logo.svg` as-is in Navigation. No changes to Navigation component needed.

### Section Structure Pattern (repeatable)
```
<section className="section bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/80 relative overflow-hidden">
  <!-- optional decorative blobs -->
  <div className="container-custom relative z-10">
    ...
  </div>
</section>
```
Alternating sections use `via-slate-900/60` vs `via-slate-950/80` for subtle visual rhythm.

---

## 2. Services Page — Complete Rewrite

### Hero
**Tagline:** "From Human Accuracy to Computer Accuracy"  
**Sub:** "AI enablement built for enterprise — private, secure, and production-ready from day one."  
**Badge:** `AGENTIC AI ENABLEMENT`  
**3 stat pills:** `Private LLMs` · `Security-First` · `Weeks to Deploy`

### 5 Service Pillars

Each pillar rendered as a two-column section (icon + text left, dark glass visual right), alternating layout on mobile:

#### Pillar 1 — Agentic AI Integration
**What:** Pre-orchestrated agent pipelines that automate end-to-end business processes — customer service, document routing, approval workflows, lead qualification — running 24/7 with zero human handoff.  
**Bullets:** Pre-built agent templates · Multi-step workflow orchestration · Human-in-the-loop escalation · Integration with existing systems (CRM, ERP, ticketing)

#### Pillar 2 — Private LLM Deployment
**What:** Fully private, on-premises or VPC-hosted large language models. Your data never leaves your environment. Compliant with SOC 2, HIPAA, GDPR.  
**Bullets:** On-prem or private cloud hosting · Fine-tuning on your proprietary data · Air-gapped deployment option · Ongoing model performance monitoring

#### Pillar 3 — AI for Finance & Accounting
**What:** Replace human-accuracy-dependent financial workflows with computer accuracy — automated reconciliation, invoice processing, expense classification, and billing intelligence with full audit trails.  
**Bullets:** Automated invoice & expense processing · AI-driven reconciliation · Accurate AI utilization billing & cost attribution · Audit trail generation for every transaction

#### Pillar 4 — AI Compliance & Security
**What:** Policy-aware AI agents that enforce compliance rules, generate regulatory reports, detect anomalies, and maintain full audit logs — ensuring AI adoption never outpaces governance.  
**Bullets:** Regulatory reporting automation · Real-time policy enforcement agents · Anomaly & breach detection · Compliance documentation generation

#### Pillar 5 — AI-Powered Application Development
**What:** Build production-grade applications with AI at the core — document Q&A systems, decision engines, intelligent chat interfaces, and internal copilots tailored to your domain.  
**Bullets:** RAG-powered document intelligence · Domain-specific AI copilots · API-first architecture for integration · Rapid prototyping to production

### CTA Section
**Headline:** "Ready to Enable AI Across Your Organisation?"  
**Sub:** "Book a free AI enablement assessment. We'll map your highest-impact automation opportunities."  
**Button:** "Book AI Enablement Assessment" → `/contact`

---

## 3. Home Page — Targeted Updates

The visual system is already correct. Only content alignment needed:

- Hero section badge: update to `AGENTIC AI ENABLEMENT`
- ServicesSlider: update slide items to match the 5 pillars
- "Why Choose Zaftech" block: replace "Reduced Downtime" bullet with "Accurate AI Billing" and update copy to reflect AI enablement focus
- "Our Process" section: rename steps from MSP onboarding language to AI enablement onboarding
- Final CTA copy: update from DevOps language to AI enablement language

---

## 4. About Page

- Strip all `from-white`, `bg-white`, `bg-gray-50`, `bg-white/60` → dark glass equivalents
- Update mission statement: position as AI enablement pioneer
- Keep team bios as-is (they are accurate)
- Values section: update icons containers from `bg-white/60 border-gray-100` → `bg-slate-800/60 border border-blue-500/30`

---

## 5. Contact Page

- Check for light-theme backgrounds and strip them
- Form card: `bg-slate-800/60 backdrop-blur-sm border border-blue-500/30`
- CTA headline: "Book an AI Enablement Assessment"
- Sub-copy: focus on AI adoption, not generic IT support

---

## 6. Blog Page

- Strip any `bg-white` / `bg-gray-50` section backgrounds
- Blog cards: apply dark glass card system (`bg-slate-800/60 border border-blue-500/30`)
- Section header text: `text-blue-200`

---

## 7. Git Branch

All work on branch `redesign` (already exists). No PRs until user approves final output.

---

## 8. Validation

After each page rewrite:
- `npm run build` must pass with zero TypeScript errors
- No page should have white/gray opaque background sections
- Visual spot-check: network animation visible through all sections on all pages
- All text must be readable against dark background (no `text-primary` #0F172A on dark)

---

## Out of Scope

- New page routes
- New components beyond what's needed
- Blog article content
- Authentication / backend changes
- Navigation restructuring
