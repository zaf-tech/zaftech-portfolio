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
