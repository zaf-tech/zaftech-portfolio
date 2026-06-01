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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                Learn about our compliance-first approach →
              </Link>
              <Link href="/blog/pipeda-compliance-enterprise-ai-canada" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                PIPEDA AI Compliance Guide →
              </Link>
            </div>
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
