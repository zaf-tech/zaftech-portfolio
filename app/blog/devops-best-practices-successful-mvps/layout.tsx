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
