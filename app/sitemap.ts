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
