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
