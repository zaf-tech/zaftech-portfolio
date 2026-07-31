# Canada SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Canada-wide SEO for zaftech.ca — technical foundation (Phase 1) and provincial landing pages (Phase 2).

**Architecture:** Phase 1 upgrades all existing pages with proper metadata, JSON-LD structured data, sitemap, and robots.txt using Next.js 14's built-in metadata API. Phase 2 adds 13 provincial landing pages via a single dynamic route backed by a shared component and data file. Phase 3 (content calendar) is manual content production — not implemented in code.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS. No new dependencies required.

---

## File Map

### Phase 1 — New Files
| File | Purpose |
|------|---------|
| `lib/provinces.ts` | Province data (slug, name, industries) |
| `components/JsonLd.tsx` | Reusable JSON-LD `<script>` injector |
| `app/opengraph-image.tsx` | Default OG image via `ImageResponse` |
| `app/sitemap.ts` | Dynamic sitemap (static pages + blog posts) |
| `app/robots.ts` | Robots directives + sitemap pointer |
| `app/contact/layout.tsx` | Server wrapper for contact page metadata + LocalBusiness schema |

### Phase 1 — Modified Files
| File | Changes |
|------|---------|
| `app/layout.tsx` | Add `metadataBase`, OG, Twitter, verification, Organization JSON-LD |
| `app/page.tsx` | Add Canadian-targeted `metadata` export |
| `app/about/page.tsx` | Upgrade `metadata` |
| `app/services/page.tsx` | Upgrade `metadata` + add Service JSON-LD |
| `app/blog/page.tsx` | Upgrade `metadata` |
| `app/blog/[slug]/page.tsx` | Add `generateMetadata` + `dateISO`/`excerpt` fields + BlogPosting JSON-LD |

### Phase 2 — New Files
| File | Purpose |
|------|---------|
| `components/ProvinceServicePage.tsx` | Shared provincial landing page layout |
| `app/ai-services/[province]/page.tsx` | Dynamic provincial route |

### Phase 2 — Modified Files
| File | Changes |
|------|---------|
| `app/sitemap.ts` | Add provincial page URLs |
| `app/services/page.tsx` | Add "Serving Canada" province link section |

---

## Phase 1: Technical SEO Foundation

### Task 1: Province Data File

**Files:**
- Create: `lib/provinces.ts`

- [ ] **Step 1: Create `lib/provinces.ts`**

```ts
export interface Province {
  slug: string
  name: string
  industries: string[]
  industryDescription: string
}

export const provinces: Province[] = [
  {
    slug: 'ontario',
    name: 'Ontario',
    industries: ['Finance', 'Legal', 'Healthcare', 'Technology'],
    industryDescription: 'finance, legal services, healthcare, and technology sectors',
  },
  {
    slug: 'british-columbia',
    name: 'British Columbia',
    industries: ['Technology', 'Healthcare', 'Mining', 'Real Estate'],
    industryDescription: 'technology, healthcare, mining, and real estate industries',
  },
  {
    slug: 'alberta',
    name: 'Alberta',
    industries: ['Oil & Gas', 'Energy', 'Agriculture', 'Finance'],
    industryDescription: 'oil & gas, energy, agriculture, and financial services',
  },
  {
    slug: 'quebec',
    name: 'Quebec',
    industries: ['Manufacturing', 'Pharmaceuticals', 'Finance', 'Government'],
    industryDescription: 'manufacturing, pharmaceutical, financial, and government sectors',
  },
  {
    slug: 'manitoba',
    name: 'Manitoba',
    industries: ['Agriculture', 'Healthcare', 'Manufacturing'],
    industryDescription: 'agriculture, healthcare, and manufacturing industries',
  },
  {
    slug: 'saskatchewan',
    name: 'Saskatchewan',
    industries: ['Agriculture', 'Mining', 'Energy'],
    industryDescription: 'agriculture, mining, and energy sectors',
  },
  {
    slug: 'nova-scotia',
    name: 'Nova Scotia',
    industries: ['Maritime', 'Healthcare', 'Government'],
    industryDescription: 'maritime, healthcare, and government sectors',
  },
  {
    slug: 'new-brunswick',
    name: 'New Brunswick',
    industries: ['Manufacturing', 'Healthcare', 'Forestry'],
    industryDescription: 'manufacturing, healthcare, and forestry industries',
  },
  {
    slug: 'prince-edward-island',
    name: 'Prince Edward Island',
    industries: ['Agriculture', 'Tourism', 'Government'],
    industryDescription: 'agriculture, tourism, and government sectors',
  },
  {
    slug: 'newfoundland-and-labrador',
    name: 'Newfoundland and Labrador',
    industries: ['Oil & Gas', 'Mining', 'Fisheries'],
    industryDescription: 'oil & gas, mining, and fisheries industries',
  },
  {
    slug: 'northwest-territories',
    name: 'Northwest Territories',
    industries: ['Mining', 'Government', 'Remote Operations'],
    industryDescription: 'mining, government, and remote operations sectors',
  },
  {
    slug: 'yukon',
    name: 'Yukon',
    industries: ['Mining', 'Government', 'Tourism'],
    industryDescription: 'mining, government, and tourism industries',
  },
  {
    slug: 'nunavut',
    name: 'Nunavut',
    industries: ['Mining', 'Government', 'Remote Operations'],
    industryDescription: 'mining, government, and remote operations sectors',
  },
]

export function getProvince(slug: string): Province | undefined {
  return provinces.find((p) => p.slug === slug)
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add lib/provinces.ts
git commit -m "feat(seo): add Canadian province data file"
```

---

### Task 2: JsonLd Component

**Files:**
- Create: `components/JsonLd.tsx`

- [ ] **Step 1: Create `components/JsonLd.tsx`**

```tsx
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/JsonLd.tsx
git commit -m "feat(seo): add reusable JsonLd component"
```

---

### Task 3: Default OG Image

**Files:**
- Create: `app/opengraph-image.tsx`

Next.js automatically uses `app/opengraph-image.tsx` as the default Open Graph image for all pages that don't define their own.

- [ ] **Step 1: Create `app/opengraph-image.tsx`**

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zaftech — Enterprise AI Consulting Canada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: '#93c5fd',
            marginBottom: 20,
            letterSpacing: '-2px',
          }}
        >
          Zaftech
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#bfdbfe',
            textAlign: 'center',
            maxWidth: 860,
            lineHeight: 1.4,
            marginBottom: 30,
          }}
        >
          Enterprise AI Consulting Canada
        </div>
        <div style={{ display: 'flex', gap: 32, color: '#60a5fa', fontSize: 22 }}>
          <span>Private LLMs</span>
          <span>·</span>
          <span>Agentic AI</span>
          <span>·</span>
          <span>Compliance-First</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
```

- [ ] **Step 2: Verify OG image renders**

Run dev server: `npm run dev`

Visit: `http://localhost:3000/opengraph-image`

Expected: 1200×630 image with dark blue gradient, "Zaftech" in large blue text, subtitle and service tags below.

- [ ] **Step 3: Commit**

```bash
git add app/opengraph-image.tsx
git commit -m "feat(seo): add default OG image via ImageResponse"
```

---

### Task 4: Upgrade Root Layout Metadata + Organization JSON-LD

**Files:**
- Modify: `app/layout.tsx`

The contact page is a `'use client'` component so it cannot export metadata itself. The `template: "%s | Zaftech"` ensures all child page titles are suffixed with the brand. The home page will use `title.absolute` to avoid duplication.

- [ ] **Step 1: Replace `app/layout.tsx` with the following**

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkAnimation from "@/components/NetworkAnimation";
import JsonLd from "@/components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zaftech",
  "url": "https://zaftech.ca",
  "logo": "https://zaftech.ca/images/logo.svg",
  "description":
    "Enterprise AI enablement company specializing in private LLMs, agentic AI agents, and compliance-first AI adoption for Canadian enterprises.",
  "areaServed": { "@type": "Country", "name": "Canada" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://zaftech.ca/contact",
  },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://zaftech.ca"),
  title: {
    default: "Zaftech — Enterprise AI Consulting Canada",
    template: "%s | Zaftech",
  },
  description:
    "From human accuracy to computer accuracy. Zaftech deploys private LLMs, pre-orchestrated AI agents, and compliance-first AI adoption for Canadian enterprises — secure, production-ready, weeks to deploy.",
  openGraph: {
    type: "website",
    siteName: "Zaftech",
    title: "Zaftech — Enterprise AI Consulting Canada",
    description:
      "From human accuracy to computer accuracy. Zaftech deploys private LLMs, pre-orchestrated AI agents, and compliance-first AI adoption for Canadian enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaftech — Enterprise AI Consulting Canada",
    description:
      "From human accuracy to computer accuracy. Zaftech deploys private LLMs, pre-orchestrated AI agents, and compliance-first AI adoption for Canadian enterprises.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans relative bg-slate-950">
        <JsonLd data={organizationSchema as Record<string, unknown>} />
        <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
          <NetworkAnimation />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Set env var for Google verification**

Create `.env.local` at the project root (if it doesn't exist) and add:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=paste_your_token_here
```

Also add this variable in your Vercel/Netlify project settings under Environment Variables.

- [ ] **Step 3: Verify OG and verification tags in browser**

With dev server running, visit `http://localhost:3000/` and view page source (Ctrl+U).

Check for:
- `<meta property="og:title"` — expected value: `Zaftech — Enterprise AI Consulting Canada`
- `<meta name="twitter:card"` — expected value: `summary_large_image`
- `<meta name="google-site-verification"` — expected: present (will be empty string if env var not set yet — that's fine)
- `application/ld+json` script — expected: Organization schema JSON

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx .env.local
git commit -m "feat(seo): upgrade root layout with metadataBase, OG, Twitter cards, Organization schema"
```

Note: Add `.env.local` to `.gitignore` if not already there. Run `git check-ignore .env.local` to verify.

---

### Task 5: Sitemap and Robots

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 1: Create `app/sitemap.ts`**

```ts
import { MetadataRoute } from "next"

const BASE = "https://zaftech.ca"

const blogSlugs: { slug: string; date: string }[] = [
  { slug: "ai-powered-cicd-pipeline-analysis", date: "2026-02-18" },
  { slug: "devops-best-practices-successful-mvps", date: "2026-02-01" },
  { slug: "cybersecurity-best-practices-2026", date: "2026-01-05" },
  { slug: "cloud-migration-guide", date: "2026-01-03" },
  { slug: "ai-business-automation", date: "2025-12-28" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(({ slug, date }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
```

- [ ] **Step 2: Create `app/robots.ts`**

```ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://zaftech.ca/sitemap.xml",
  }
}
```

- [ ] **Step 3: Verify sitemap and robots**

With dev server running:

Visit `http://localhost:3000/sitemap.xml`
Expected: Valid XML listing all static pages and 5 blog post URLs.

Visit `http://localhost:3000/robots.txt`
Expected:
```
User-agent: *
Allow: /

Sitemap: https://zaftech.ca/sitemap.xml
```

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat(seo): add dynamic sitemap and robots.txt"
```

---

### Task 6: Upgrade Home Page Metadata

**Files:**
- Modify: `app/page.tsx`

Using `title.absolute` prevents the root template from appending "| Zaftech" (which would duplicate the brand name already in the title).

- [ ] **Step 1: Add metadata export to `app/page.tsx`**

Add these lines after the existing imports and before `export default function Home()`:

```ts
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Zaftech — Enterprise AI Consulting Canada",
  },
  description:
    "Zaftech helps Canadian enterprises adopt AI with confidence. Private LLMs, agentic AI agents, and compliance-first implementation across Ontario, BC, Alberta, and all provinces.",
  openGraph: {
    title: "Zaftech — Enterprise AI Consulting Canada",
    description:
      "Private LLMs, agentic AI agents, and compliance-first AI adoption for Canadian enterprises. Production-ready in weeks.",
    url: "https://zaftech.ca",
  },
  alternates: {
    canonical: "https://zaftech.ca",
  },
}
```

- [ ] **Step 2: Verify title**

Visit `http://localhost:3000/` — browser tab should read exactly: `Zaftech — Enterprise AI Consulting Canada`

View source, search for `<title>` — expected: `<title>Zaftech — Enterprise AI Consulting Canada</title>`

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat(seo): add Canadian-targeted metadata to home page"
```

---

### Task 7: Upgrade About Page Metadata

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Replace the existing `metadata` export in `app/about/page.tsx`**

```ts
export const metadata = {
  title: "About — AI Enablement Company Canada",
  description:
    "Zaftech is a Canadian enterprise AI enablement company. We help organisations across Ontario, BC, Alberta, and all provinces deploy private LLMs, agentic AI, and compliance-first automation.",
  openGraph: {
    title: "About Zaftech — AI Enablement Company Canada",
    description:
      "Meet the team behind Zaftech — AI engineers, cloud architects, and compliance specialists helping Canadian enterprises adopt AI with confidence.",
    url: "https://zaftech.ca/about",
  },
  alternates: {
    canonical: "https://zaftech.ca/about",
  },
}
```

- [ ] **Step 2: Verify title uses template**

Visit `http://localhost:3000/about` — browser tab should read: `About — AI Enablement Company Canada | Zaftech`

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat(seo): upgrade about page metadata for Canadian market"
```

---

### Task 8: Upgrade Services Page Metadata + Service JSON-LD

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Replace the existing `metadata` export in `app/services/page.tsx`**

```ts
import JsonLd from "@/components/JsonLd"

export const metadata = {
  title: "Agentic AI Services for Canadian Enterprises",
  description:
    "Private LLMs, agentic AI agent pipelines, finance automation, AI compliance, and AI application development — built for Canadian enterprises. PIPEDA-compliant, production-ready in weeks.",
  openGraph: {
    title: "Agentic AI Services for Canadian Enterprises | Zaftech",
    description:
      "From human accuracy to computer accuracy. Zaftech deploys AI solutions for finance, healthcare, legal, and operations teams across Canada.",
    url: "https://zaftech.ca/services",
  },
  alternates: {
    canonical: "https://zaftech.ca/services",
  },
}
```

- [ ] **Step 2: Add Service JSON-LD to the services page component**

Inside `export default function Services()`, add the `JsonLd` component as the first child of the outer `<div>`:

```tsx
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise AI Enablement Services",
  "provider": {
    "@type": "Organization",
    "name": "Zaftech",
    "url": "https://zaftech.ca",
  },
  "areaServed": {
    "@type": "Country",
    "name": "Canada",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agentic AI Integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private LLM Deployment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI for Finance & Accounting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Compliance & Security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered Application Development" } },
    ],
  },
}

export default function Services() {
  return (
    <div>
      <JsonLd data={serviceSchema as Record<string, unknown>} />
      {/* ... rest of existing JSX unchanged ... */}
```

- [ ] **Step 3: Verify service schema in page source**

Visit `http://localhost:3000/services`, view source.

Search for `application/ld+json` — expected: two JSON-LD blocks (Organization from root layout + Service from this page).

- [ ] **Step 4: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat(seo): upgrade services page metadata and add Service JSON-LD schema"
```

---

### Task 9: Upgrade Blog Page Metadata

**Files:**
- Modify: `app/blog/page.tsx`

- [ ] **Step 1: Replace the existing `metadata` export in `app/blog/page.tsx`**

The blog page currently doesn't export metadata — look for an existing export or add this before `export default`:

```ts
export const metadata = {
  title: "AI Insights & Resources for Canadian Enterprises",
  description:
    "Expert articles on enterprise AI adoption, private LLM deployment, PIPEDA compliance, and agentic AI for Canadian businesses across all provinces.",
  openGraph: {
    title: "AI Insights & Resources for Canadian Enterprises | Zaftech",
    description:
      "Expert articles on enterprise AI adoption, private LLM deployment, PIPEDA compliance, and agentic AI for Canadian businesses.",
    url: "https://zaftech.ca/blog",
  },
  alternates: {
    canonical: "https://zaftech.ca/blog",
  },
}
```

- [ ] **Step 2: Verify**

Visit `http://localhost:3000/blog` — browser tab should read: `AI Insights & Resources for Canadian Enterprises | Zaftech`

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat(seo): upgrade blog page metadata for Canadian market"
```

---

### Task 10: Contact Page Metadata + LocalBusiness JSON-LD

The contact page is `'use client'`, so metadata must go in a wrapping layout file.

**Files:**
- Create: `app/contact/layout.tsx`

- [ ] **Step 1: Create `app/contact/layout.tsx`**

```tsx
import type { Metadata } from "next"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Contact — Book Your Free AI Assessment",
  description:
    "Ready to adopt AI with confidence? Book a free AI enablement assessment with Zaftech — serving enterprises across Ontario, British Columbia, Alberta, Quebec, and all Canadian provinces.",
  openGraph: {
    title: "Contact Zaftech — Book Your Free AI Assessment",
    description:
      "Book a free AI enablement assessment. We'll identify your highest-value AI opportunities and map a clear path to measurable outcomes.",
    url: "https://zaftech.ca/contact",
  },
  alternates: {
    canonical: "https://zaftech.ca/contact",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Zaftech",
  "url": "https://zaftech.ca",
  "description":
    "Enterprise AI consulting and enablement services across Canada — private LLMs, agentic AI, and compliance-first AI adoption.",
  "areaServed": [
    "Ontario", "British Columbia", "Alberta", "Quebec", "Manitoba",
    "Saskatchewan", "Nova Scotia", "New Brunswick", "Prince Edward Island",
    "Newfoundland and Labrador", "Northwest Territories", "Yukon", "Nunavut",
  ],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={localBusinessSchema as Record<string, unknown>} />
      {children}
    </>
  )
}
```

- [ ] **Step 2: Verify**

Visit `http://localhost:3000/contact`, view source.

Check for:
- `<title>Contact — Book Your Free AI Assessment | Zaftech</title>`
- `ProfessionalService` JSON-LD block with `areaServed` listing all provinces

- [ ] **Step 3: Commit**

```bash
git add app/contact/layout.tsx
git commit -m "feat(seo): add contact page metadata and LocalBusiness JSON-LD"
```

---

### Task 11: Blog Post generateMetadata + BlogPosting JSON-LD

**Files:**
- Modify: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Add `dateISO` and `excerpt` fields to each entry in `blogPosts`**

In `app/blog/[slug]/page.tsx`, update the `blogPosts` record to add `dateISO` and `excerpt` to each post:

```ts
const blogPosts: Record<string, any> = {
  "devops-best-practices-successful-mvps": {
    title: "DevOps Best Practices for Successful MVPs",
    date: "February 1, 2026",
    dateISO: "2026-02-01",
    excerpt: "Implement core DevOps practices — IaC, CI/CD, monitoring, and feature flags — to streamline your MVP development and accelerate delivery.",
    category: "DevOps",
    author: "ZAFTECH Team",
    readTime: "8 min read",
    content: `...` // leave existing content unchanged
  },
  "cybersecurity-best-practices-2026": {
    title: "Top Cybersecurity Best Practices for 2026",
    date: "January 5, 2026",
    dateISO: "2026-01-05",
    excerpt: "Discover the latest cybersecurity strategies — MFA, zero trust, endpoint protection, and regular audits — to protect your business from evolving threats in 2026.",
    category: "Cybersecurity",
    author: "ZAFTECH Team",
    readTime: "5 min read",
    content: `...` // leave existing content unchanged
  },
  "cloud-migration-guide": {
    title: "Complete Guide to Cloud Migration for SMBs",
    date: "January 3, 2026",
    dateISO: "2026-01-03",
    excerpt: "A step-by-step guide to cloud migration for small and medium businesses — from assessment and planning through execution and ongoing optimisation.",
    category: "Cloud Computing",
    author: "ZAFTECH Team",
    readTime: "7 min read",
    content: `...` // leave existing content unchanged
  },
  "ai-business-automation": {
    title: "AI-Powered Business Automation: Getting Started",
    date: "December 28, 2025",
    dateISO: "2025-12-28",
    excerpt: "A practical introduction to AI in business — customer service automation, data analysis, and process automation with a step-by-step getting started framework.",
    category: "AI Solutions",
    author: "ZAFTECH Team",
    readTime: "6 min read",
    content: `...` // leave existing content unchanged
  },
}
```

Note: Also add `dateISO` and `excerpt` to the `"ai-powered-cicd-pipeline-analysis"` post when you find it in the file. Use `dateISO: "2026-02-18"` and an appropriate excerpt.

- [ ] **Step 2: Add `generateMetadata` function**

Add this import at the top of `app/blog/[slug]/page.tsx`:

```ts
import type { Metadata } from "next"
import JsonLd from "@/components/JsonLd"
```

Add this function before `export default function BlogPost`:

```ts
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      authors: [post.author],
      url: `https://zaftech.ca/blog/${params.slug}`,
    },
    alternates: {
      canonical: `https://zaftech.ca/blog/${params.slug}`,
    },
  }
}
```

- [ ] **Step 3: Add BlogPosting JSON-LD inside `BlogPost` component**

Inside `export default function BlogPost({ params }: PageProps)`, add the schema before the `return` statement and render it inside the `<main>`:

```tsx
export default function BlogPost({ params }: PageProps) {
  const post = blogPosts[params.slug]
  if (!post) { notFound() }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.dateISO,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://zaftech.ca",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zaftech",
      "url": "https://zaftech.ca",
      "logo": { "@type": "ImageObject", "url": "https://zaftech.ca/images/logo.svg" },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://zaftech.ca/blog/${params.slug}`,
    },
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <JsonLd data={blogPostingSchema as Record<string, unknown>} />
      {/* ... rest of existing JSX unchanged ... */}
```

- [ ] **Step 4: Verify**

Visit `http://localhost:3000/blog/devops-best-practices-successful-mvps`, view source.

Check for:
- `<title>DevOps Best Practices for Successful MVPs | Zaftech</title>`
- `BlogPosting` JSON-LD block with `headline` and `datePublished`

- [ ] **Step 5: TypeScript check**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 6: Commit**

```bash
git add app/blog/[slug]/page.tsx
git commit -m "feat(seo): add generateMetadata and BlogPosting JSON-LD to blog post pages"
```

---

### Task 11b: Metadata for Static Blog Post Pages

Both `app/blog/ai-powered-cicd-pipeline-analysis/page.tsx` and `app/blog/devops-best-practices-successful-mvps/page.tsx` are `'use client'` components — same pattern as the contact page. Each needs a `layout.tsx` sibling that exports metadata and BlogPosting JSON-LD.

**Files:**
- Create: `app/blog/ai-powered-cicd-pipeline-analysis/layout.tsx`
- Create: `app/blog/devops-best-practices-successful-mvps/layout.tsx`

- [ ] **Step 1: Create `app/blog/ai-powered-cicd-pipeline-analysis/layout.tsx`**

```tsx
import type { Metadata } from "next"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "AI-Powered CI/CD Pipeline Analysis: Cut Cloud Costs by 60%",
  description:
    "Learn how AI-powered pipeline analysis and intelligent dashboards reduce cloud costs by 60% while improving deployment efficiency and detecting infrastructure drift.",
  openGraph: {
    title: "AI-Powered CI/CD Pipeline Analysis: Cut Cloud Costs by 60% | Zaftech",
    description:
      "How AI-powered pipeline analysis and intelligent dashboards reduce cloud costs by 60% while improving deployment efficiency.",
    type: "article",
    publishedTime: "2026-02-18",
    url: "https://zaftech.ca/blog/ai-powered-cicd-pipeline-analysis",
  },
  alternates: {
    canonical: "https://zaftech.ca/blog/ai-powered-cicd-pipeline-analysis",
  },
}

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "AI-Powered CI/CD Pipeline Analysis: How Smart Dashboards Cut Cloud Costs by 60%",
  "description":
    "Learn how AI-powered pipeline analysis and intelligent dashboards reduce cloud costs by 60% while improving deployment efficiency and detecting infrastructure drift.",
  "datePublished": "2026-02-18",
  "author": {
    "@type": "Organization",
    "name": "ZAFTECH Team",
    "url": "https://zaftech.ca",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zaftech",
    "url": "https://zaftech.ca",
    "logo": { "@type": "ImageObject", "url": "https://zaftech.ca/images/logo.svg" },
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://zaftech.ca/blog/ai-powered-cicd-pipeline-analysis",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={blogPostingSchema as Record<string, unknown>} />
      {children}
    </>
  )
}
```

- [ ] **Step 2: Create `app/blog/devops-best-practices-successful-mvps/layout.tsx`**

```tsx
import type { Metadata } from "next"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "DevOps Best Practices for Successful MVPs",
  description:
    "Implement core DevOps practices — IaC, CI/CD, monitoring, and feature flags — to streamline your MVP development and accelerate delivery.",
  openGraph: {
    title: "DevOps Best Practices for Successful MVPs | Zaftech",
    description:
      "Implement core DevOps practices to streamline your MVP development and delivery.",
    type: "article",
    publishedTime: "2026-02-01",
    url: "https://zaftech.ca/blog/devops-best-practices-successful-mvps",
  },
  alternates: {
    canonical: "https://zaftech.ca/blog/devops-best-practices-successful-mvps",
  },
}

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "DevOps Best Practices for Successful MVPs",
  "description":
    "Implement core DevOps practices — IaC, CI/CD, monitoring, and feature flags — to streamline your MVP development and accelerate delivery.",
  "datePublished": "2026-02-01",
  "author": {
    "@type": "Organization",
    "name": "ZAFTECH Team",
    "url": "https://zaftech.ca",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zaftech",
    "url": "https://zaftech.ca",
    "logo": { "@type": "ImageObject", "url": "https://zaftech.ca/images/logo.svg" },
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://zaftech.ca/blog/devops-best-practices-successful-mvps",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={blogPostingSchema as Record<string, unknown>} />
      {children}
    </>
  )
}
```

- [ ] **Step 3: Verify**

Visit `http://localhost:3000/blog/ai-powered-cicd-pipeline-analysis`, view source.

Check for:
- `<title>AI-Powered CI/CD Pipeline Analysis: Cut Cloud Costs by 60% | Zaftech</title>`
- `BlogPosting` JSON-LD block

- [ ] **Step 4: Commit**

```bash
git add "app/blog/ai-powered-cicd-pipeline-analysis/layout.tsx" "app/blog/devops-best-practices-successful-mvps/layout.tsx"
git commit -m "feat(seo): add metadata and BlogPosting schema to static blog post pages"
```

---

### Task 12: Phase 1 Build Verification

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: Build completes successfully with no TypeScript or runtime errors. Output should list all routes including `/sitemap.xml` and `/robots.txt`.

- [ ] **Step 2: Check build output for SEO routes**

In the build output, verify these routes are listed:
- `○ /sitemap.xml`
- `○ /robots.txt`
- `○ /opengraph-image`

- [ ] **Step 3: Commit if any fixes were needed**

```bash
git add -A
git commit -m "fix(seo): resolve Phase 1 build issues"
```

---

## Phase 2: Provincial Landing Pages

### Task 13: ProvinceServicePage Component

**Files:**
- Create: `components/ProvinceServicePage.tsx`

- [ ] **Step 1: Create `components/ProvinceServicePage.tsx`**

```tsx
import Link from "next/link"
import type { Province } from "@/lib/provinces"
import JsonLd from "@/components/JsonLd"

interface ProvinceServicePageProps {
  province: Province
}

export default function ProvinceServicePage({ province }: ProvinceServicePageProps) {
  const provinceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Enterprise AI Consulting in ${province.name}`,
    "provider": {
      "@type": "Organization",
      "name": "Zaftech",
      "url": "https://zaftech.ca",
    },
    "areaServed": {
      "@type": "State",
      "name": province.name,
      "containedIn": { "@type": "Country", "name": "Canada" },
    },
    "description": `Zaftech provides enterprise AI consulting, private LLM deployment, and agentic AI automation for businesses in ${province.name}.`,
  }

  return (
    <div>
      <JsonLd data={provinceSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">
                Enterprise AI · {province.name}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blue-200 mb-6 leading-tight">
              Enterprise AI Consulting
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                in {province.name}
              </span>
            </h1>
            <p className="text-xl text-blue-300/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Zaftech helps {province.name} enterprises adopt AI with confidence — serving the{" "}
              {province.industryDescription}. Private, secure, and production-ready from day one.
            </p>
            <a
              href="https://calendly.com/talha-jilal-zaftech/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              Book a Free AI Assessment in {province.name}
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                AI Solutions for {province.name} Industries
              </h2>
              <p className="text-lg text-blue-300/70">
                We specialise in the industries that drive {province.name}&apos;s economy
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {province.industries.map((industry) => (
                <div
                  key={industry}
                  className="bg-slate-800/60 rounded-xl border border-blue-500/30 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-200 font-semibold">{industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                What We Deliver in {province.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Agentic AI Integration",
                  description:
                    "Deploy AI agent pipelines that automate end-to-end workflows — customer service, document routing, lead qualification — running 24/7.",
                },
                {
                  title: "Private LLM Deployment",
                  description:
                    "Run fully private, on-premises or VPC-hosted LLMs. Your data stays in Canada — fully PIPEDA-compliant by design.",
                },
                {
                  title: "Finance & Operations AI",
                  description:
                    "Automate invoice processing, expense classification, and reconciliation with complete audit trails on every transaction.",
                },
                {
                  title: "AI Compliance & Security",
                  description:
                    "Real-time policy enforcement, regulatory reporting, and immutable audit logs for every AI action your organisation takes.",
                },
                {
                  title: "AI Application Development",
                  description:
                    "Build production-grade AI applications — document Q&A systems, decision engines, and domain-specific copilots.",
                },
                {
                  title: "PIPEDA-Compliant Architecture",
                  description:
                    "Every solution is designed from day one to meet Canadian privacy law — governance built in, not bolted on.",
                },
              ].map(({ title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-blue-300 mb-1">{title}</h3>
                    <p className="text-blue-200/70 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PIPEDA callout */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-slate-800/60 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm text-center">
            <h2 className="text-2xl font-heading font-bold text-blue-200 mb-4">
              PIPEDA-Compliant AI for {province.name}
            </h2>
            <p className="text-blue-300/70 leading-relaxed mb-6">
              Every AI solution Zaftech delivers in {province.name} is architected to comply with
              Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA).
              Your data stays in Canada. Full audit trails. No third-party data exposure.
            </p>
            <Link href="/services" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
              Learn about our compliance-first approach →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-slate-950/90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-6">
              Ready to Adopt AI in {province.name}?
            </h2>
            <p className="text-xl text-blue-300/70 mb-8 leading-relaxed">
              Book a free AI enablement assessment. We&apos;ll identify your highest-value
              opportunities and map a clear path to measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/talha-jilal-zaftech/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-lg px-8 py-4"
              >
                Book Free AI Assessment
              </a>
              <Link
                href="/services"
                className="inline-block text-blue-400 font-medium hover:text-blue-300 transition-colors py-4"
              >
                Explore our services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: TypeScript check**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add components/ProvinceServicePage.tsx
git commit -m "feat(seo): add shared ProvinceServicePage component"
```

---

### Task 14: Provincial Dynamic Route

**Files:**
- Create: `app/ai-services/[province]/page.tsx`

- [ ] **Step 1: Create directory and file**

Create the directory `app/ai-services/[province]/` and the file `page.tsx`:

```tsx
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProvince, provinces } from "@/lib/provinces"
import ProvinceServicePage from "@/components/ProvinceServicePage"

interface PageProps {
  params: { province: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const province = getProvince(params.province)
  if (!province) return {}
  return {
    title: `Enterprise AI Consulting in ${province.name}`,
    description: `Zaftech delivers private LLMs, agentic AI, and compliance-first AI adoption for enterprises in ${province.name}. PIPEDA-compliant, production-ready in weeks. Serving the ${province.industryDescription}.`,
    openGraph: {
      title: `Enterprise AI Consulting in ${province.name} | Zaftech`,
      description: `Private LLMs, agentic AI agents, and compliance-first AI adoption for ${province.name} enterprises. Serving the ${province.industryDescription}.`,
      url: `https://zaftech.ca/ai-services/${province.slug}`,
    },
    alternates: {
      canonical: `https://zaftech.ca/ai-services/${province.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return provinces.map((p) => ({ province: p.slug }))
}

export default function ProvincePage({ params }: PageProps) {
  const province = getProvince(params.province)
  if (!province) notFound()
  return <ProvinceServicePage province={province} />
}
```

- [ ] **Step 2: Verify provincial pages render**

With dev server running, visit:
- `http://localhost:3000/ai-services/ontario` — expected: page with "Enterprise AI Consulting in Ontario" as H1
- `http://localhost:3000/ai-services/alberta` — expected: page with "Enterprise AI Consulting in Alberta" as H1 and oil & gas industries listed
- `http://localhost:3000/ai-services/invalid-slug` — expected: Next.js 404 page

View source of `/ai-services/ontario`:
- Check `<title>Enterprise AI Consulting in Ontario | Zaftech</title>`
- Check `Service` JSON-LD block with `"name": "Enterprise AI Consulting in Ontario"`

- [ ] **Step 3: Commit**

```bash
git add "app/ai-services/[province]/page.tsx"
git commit -m "feat(seo): add provincial landing pages for all Canadian provinces"
```

---

### Task 15: Update Sitemap with Provincial Pages

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Update `app/sitemap.ts` to include provincial pages**

Replace the existing file content with:

```ts
import { MetadataRoute } from "next"
import { provinces } from "@/lib/provinces"

const BASE = "https://zaftech.ca"

const blogSlugs: { slug: string; date: string }[] = [
  { slug: "ai-powered-cicd-pipeline-analysis", date: "2026-02-18" },
  { slug: "devops-best-practices-successful-mvps", date: "2026-02-01" },
  { slug: "cybersecurity-best-practices-2026", date: "2026-01-05" },
  { slug: "cloud-migration-guide", date: "2026-01-03" },
  { slug: "ai-business-automation", date: "2025-12-28" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(({ slug, date }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const provincialPages: MetadataRoute.Sitemap = provinces.map(({ slug }) => ({
    url: `${BASE}/ai-services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages, ...provincialPages]
}
```

- [ ] **Step 2: Verify sitemap includes provincial pages**

Visit `http://localhost:3000/sitemap.xml`

Expected: All 13 provincial URLs present, e.g. `https://zaftech.ca/ai-services/ontario`, `https://zaftech.ca/ai-services/british-columbia`, etc.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat(seo): add provincial landing pages to sitemap"
```

---

### Task 16: Add "Serving Canada" Section to Services Page

**Files:**
- Modify: `app/services/page.tsx`

This section creates internal links from `/services` to every provincial page, which signals geographic relevance to search engines.

- [ ] **Step 1: Add import and "Serving Canada" section to `app/services/page.tsx`**

Add this import at the top of `app/services/page.tsx`:

```ts
import Link from "next/link"
import { provinces } from "@/lib/provinces"
```

Add this section JSX immediately before the final CTA section (before the `{/* CTA Section */}` comment):

```tsx
{/* Serving Canada */}
<section className="section bg-transparent">
  <div className="container-custom">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-heading font-bold text-blue-200 mb-4">
          Serving Enterprises Across Canada
        </h2>
        <p className="text-blue-300/70">
          We deliver AI enablement to enterprises in every Canadian province and territory
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {provinces.map((province) => (
          <Link
            key={province.slug}
            href={`/ai-services/${province.slug}`}
            className="text-center p-3 rounded-lg bg-slate-800/40 border border-blue-500/20 text-blue-300/70 hover:text-blue-300 hover:border-blue-400/40 hover:bg-slate-800/60 transition-all text-sm font-medium"
          >
            {province.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify in browser**

Visit `http://localhost:3000/services`, scroll to bottom before the CTA.

Expected: Grid of province name links. Clicking "Ontario" navigates to `/ai-services/ontario`.

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat(seo): add Serving Canada province link section to services page"
```

---

### Task 17: Phase 2 Build Verification + Final Commit

- [ ] **Step 1: Run full production build**

Run: `npm run build`

Expected: Build succeeds. Output should include 13 new `/ai-services/[province]` static routes.

- [ ] **Step 2: Spot-check built output**

In the build output, verify routes like:
```
● /ai-services/[province]   (13 pages)
  ├ /ai-services/ontario
  ├ /ai-services/british-columbia
  └ /ai-services/alberta
  ...
```

- [ ] **Step 3: Submit sitemap to Google Search Console**

After deploying to production:
1. Go to Google Search Console → Sitemaps
2. Enter: `https://zaftech.ca/sitemap.xml`
3. Click Submit

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix(seo): resolve Phase 2 build issues"
```

---

## Phase 3 Reference: Content Calendar

Phase 3 is manual content production — no code tasks. Refer to the spec at `docs/superpowers/specs/2026-05-23-seo-canada-design.md` for:

- Monthly keyword targets per service pillar
- Sample Month 1 content calendar (4 posts)
- Internal linking rules per post
- Content production workflow (research → draft → schema → OG image → publish → Search Console submit)

When adding new blog posts, update `blogSlugs` in `app/sitemap.ts` and add the post data to `app/blog/[slug]/page.tsx`.
