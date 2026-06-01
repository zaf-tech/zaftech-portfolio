import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/JsonLd"
import { provinces } from "@/lib/provinces"

export const metadata: Metadata = {
  title: "Agentic AI Services for Canadian Enterprises",
  description:
    "Private LLMs, agentic AI pipelines, finance automation, and AI compliance for Canadian enterprises. PIPEDA-compliant and production-ready in weeks.",
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
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">
                Agentic AI Enablement
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blue-200 mb-6 leading-tight">
              From Human Accuracy
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                to Computer Accuracy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-300/70 max-w-3xl mx-auto leading-relaxed mb-10">
              AI enablement built for enterprise — private, secure, and
              production-ready from day one. We integrate state-of-the-art
              agentic AI to replace your most accuracy-critical human workflows.
            </p>

            {/* Stat pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
              <div className="text-center p-5 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-blue-500/30">
                <div className="text-2xl font-heading font-bold text-blue-300 mb-1">
                  Private LLMs
                </div>
                <div className="text-sm text-blue-400/60">
                  Your data stays yours
                </div>
              </div>
              <div className="text-center p-5 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-blue-500/30">
                <div className="text-2xl font-heading font-bold text-blue-300 mb-1">
                  Security-First
                </div>
                <div className="text-sm text-blue-400/60">
                  Compliance by design
                </div>
              </div>
              <div className="text-center p-5 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-blue-500/30">
                <div className="text-2xl font-heading font-bold text-blue-300 mb-1">
                  Weeks to Deploy
                </div>
                <div className="text-sm text-blue-400/60">
                  Not months
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1 — Agentic AI Integration */}
      <section className="section bg-slate-950/15 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
                  <span className="text-xs font-semibold text-blue-300 tracking-wider">PILLAR 01</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-blue-200 mb-4">
                  Agentic AI Integration
                </h2>
                <p className="text-blue-300/70 mb-4 leading-relaxed">
                  Deploy pre-orchestrated AI agent pipelines that automate your
                  end-to-end business processes — customer service, document
                  routing, approval workflows, and lead qualification — running
                  24/7 with zero human handoff required.
                </p>
                <p className="text-blue-300/70 mb-6 leading-relaxed">
                  Our agents integrate directly into your existing systems — CRM,
                  ERP, ticketing platforms — so you get automation without
                  disruption. Every agent includes human-in-the-loop escalation
                  for edge cases.
                </p>
                <ul className="space-y-3">
                  {[
                    "Pre-built agent templates for common workflows",
                    "Multi-step workflow orchestration",
                    "Human-in-the-loop escalation handling",
                    "CRM, ERP & ticketing system integration",
                    "Real-time monitoring & performance dashboards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-300/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="text-7xl font-heading font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3">
                    AI
                  </div>
                  <div className="text-sm text-blue-400/60 font-medium tracking-widest uppercase">
                    Agent Orchestration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2 — Private LLM Deployment */}
      <section className="section bg-slate-950/10 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30 flex items-center justify-center min-h-[280px] order-2 md:order-1">
                <div className="text-center">
                  <div className="text-7xl font-heading font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3">
                    LLM
                  </div>
                  <div className="text-sm text-blue-400/60 font-medium tracking-widest uppercase">
                    Private & Secure
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
                  <span className="text-xs font-semibold text-blue-300 tracking-wider">PILLAR 02</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-blue-200 mb-4">
                  Private LLM Deployment
                </h2>
                <p className="text-blue-300/70 mb-4 leading-relaxed">
                  Run fully private, on-premises or VPC-hosted large language
                  models tailored to your business. Your data never leaves your
                  environment — no third-party API calls, no data exposure, full
                  compliance with SOC 2, HIPAA, and GDPR.
                </p>
                <p className="text-blue-300/70 mb-6 leading-relaxed">
                  We fine-tune models on your proprietary data, deploy them in
                  air-gapped environments when required, and continuously monitor
                  performance and accuracy over time.
                </p>
                <ul className="space-y-3">
                  {[
                    "On-prem or private VPC-hosted deployment",
                    "Fine-tuned on your proprietary business data",
                    "Air-gapped deployment for regulated industries",
                    "SOC 2 · HIPAA · GDPR compliant architecture",
                    "Ongoing model performance monitoring",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-300/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3 — AI for Finance & Accounting */}
      <section className="section bg-slate-950/15 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
                  <span className="text-xs font-semibold text-blue-300 tracking-wider">PILLAR 03</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-blue-200 mb-4">
                  AI for Finance & Accounting
                </h2>
                <p className="text-blue-300/70 mb-4 leading-relaxed">
                  The most costly errors in business come from human accuracy
                  limitations in financial workflows. We replace those with
                  computer accuracy — automated reconciliation, invoice
                  processing, expense classification, and accurate AI utilization
                  billing with full audit trails on every transaction.
                </p>
                <p className="text-blue-300/70 mb-6 leading-relaxed">
                  Our finance agents integrate with your existing accounting
                  platforms, process documents in any format, and generate
                  compliance-ready reports automatically.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated invoice & expense processing",
                    "AI-driven ledger reconciliation",
                    "Accurate AI utilization billing & cost attribution",
                    "Audit trail generation for every transaction",
                    "Integration with QuickBooks, SAP, Oracle, Xero",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-300/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="text-7xl font-heading font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3">
                    $AI
                  </div>
                  <div className="text-sm text-blue-400/60 font-medium tracking-widest uppercase">
                    Finance Automation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4 — AI Compliance & Security */}
      <section className="section bg-slate-950/10 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30 flex items-center justify-center min-h-[280px] order-2 md:order-1">
                <div className="text-center">
                  <div className="text-7xl font-heading font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3">
                    GRC
                  </div>
                  <div className="text-sm text-blue-400/60 font-medium tracking-widest uppercase">
                    Governance · Risk · Compliance
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
                  <span className="text-xs font-semibold text-blue-300 tracking-wider">PILLAR 04</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-blue-200 mb-4">
                  AI Compliance & Security
                </h2>
                <p className="text-blue-300/70 mb-4 leading-relaxed">
                  AI adoption must never outpace governance. Our compliance agents
                  enforce policy rules in real time, generate regulatory reports
                  automatically, and maintain immutable audit logs across every AI
                  action your organisation takes.
                </p>
                <p className="text-blue-300/70 mb-6 leading-relaxed">
                  We build AI security frameworks that detect anomalies, prevent
                  data leakage, and ensure every AI decision is traceable,
                  explainable, and audit-ready.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time policy enforcement agents",
                    "Regulatory reporting automation (SOC 2, ISO 27001)",
                    "Anomaly & data breach detection",
                    "Immutable audit log for every AI action",
                    "Compliance documentation generation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-300/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 5 — AI-Powered Application Development */}
      <section className="section bg-slate-950/15 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
                  <span className="text-xs font-semibold text-blue-300 tracking-wider">PILLAR 05</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-blue-200 mb-4">
                  AI-Powered Application Development
                </h2>
                <p className="text-blue-300/70 mb-4 leading-relaxed">
                  Build production-grade applications with AI at the core — not
                  bolted on. Document Q&A systems, intelligent decision engines,
                  internal copilots, and customer-facing AI interfaces tailored
                  to your exact domain and data.
                </p>
                <p className="text-blue-300/70 mb-6 leading-relaxed">
                  Every application we build is API-first, scalable, and designed
                  for rapid iteration — from validated prototype to production
                  deployment in weeks.
                </p>
                <ul className="space-y-3">
                  {[
                    "RAG-powered document intelligence systems",
                    "Domain-specific AI copilots & chat interfaces",
                    "Decision engines with explainable AI output",
                    "API-first architecture for seamless integration",
                    "Rapid prototyping to production in weeks",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-300/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="text-7xl font-heading font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3">
                    DEV
                  </div>
                  <div className="text-sm text-blue-400/60 font-medium tracking-widest uppercase">
                    AI Application Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-slate-950/90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-6">
              Ready to Enable AI Across Your Organisation?
            </h2>
            <p className="text-xl text-blue-300/70 mb-8 leading-relaxed">
              Book a free AI enablement assessment. We&apos;ll map your
              highest-impact automation opportunities and show you exactly where
              computer accuracy beats human accuracy in your workflows.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-block text-lg px-8 py-4"
            >
              Book AI Enablement Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
