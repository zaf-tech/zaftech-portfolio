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
