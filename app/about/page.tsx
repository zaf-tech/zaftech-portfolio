import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — AI Enablement Company Canada",
  description:
    "Zaftech is a Canadian enterprise AI company. We deploy private LLMs, agentic AI, and compliance-first automation for enterprises across all provinces.",
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

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blue-200 mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                Zaftech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-300/70 max-w-2xl mx-auto leading-relaxed">
              Pioneering AI enablement for enterprises — private, secure, and
              built to last
            </p>

            {/* Values pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { label: "Innovative", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { label: "Results-Driven", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Proactive", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { label: "Focused", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              ].map(({ label, icon }) => (
                <div key={label} className="text-center p-5 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-blue-500/30">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mx-auto mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-blue-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-slate-950/15 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Our Mission
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-lg text-blue-300/70 leading-relaxed">
                At Zaftech, we believe every business deserves the accuracy,
                consistency, and speed of AI — not just the biggest enterprises
                with the largest R&D budgets. Our mission is to make
                production-grade agentic AI accessible, private, and compliant
                for organisations of every size.
              </p>
              <p className="text-lg text-blue-300/70 leading-relaxed">
                We specialise in replacing human-accuracy-dependent workflows —
                financial reconciliation, compliance reporting, document
                processing, customer service — with AI agents that operate 24/7,
                never miss a step, and leave a full audit trail on every action.
              </p>
              <p className="text-lg text-blue-300/70 leading-relaxed">
                Our commitment is to AI adoption that never outpaces governance.
                Every solution we build is security-first, compliance-ready, and
                designed to give your organisation full control and
                transparency over its AI operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-slate-950/10 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-blue-300/70">
                The principles that guide how we serve our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Security & Compliance First",
                  body: "AI adoption must never outpace governance. Every agent, every model, every deployment we build is designed with security and regulatory compliance as a foundational requirement — not an afterthought.",
                },
                {
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  title: "Long-Term Partnership",
                  body: "We are not a vendor — we are your AI partner. We invest in understanding your business deeply and build relationships that grow as your AI capabilities mature.",
                },
                {
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Accountability & Transparency",
                  body: "Every AI decision we build is traceable and explainable. We take full accountability for the systems we deploy — with audit trails, monitoring, and clear escalation paths built in.",
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Computer Accuracy Over Human Limitation",
                  body: "The biggest ROI in AI comes from replacing workflows where human error is costly and slow. We identify those workflows and automate them with precision, speed, and consistency.",
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="card">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-blue-200 mb-3">{title}</h3>
                  <p className="text-blue-300/70 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="section bg-slate-950/15 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Leadership & Vision
              </h2>
              <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
                Meet the visionary driving Zaftech&apos;s commitment to AI excellence
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-2xl blur-2xl"></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-slate-800/60 flex items-center justify-center">
                    <div className="text-8xl">👤</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 space-y-5">
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-2">
                    Talha Jilal Kingrah
                  </h3>
                  <p className="text-xl text-blue-400 font-medium mb-4">
                    Chief Executive Officer & Founder
                  </p>
                  <a
                    href="https://www.linkedin.com/in/talha-jilal-kingrah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>

                <p className="text-blue-300/70 leading-relaxed">
                  <span className="text-blue-200 font-semibold">Talha Jilal Kingrah</span> is a
                  technology leader specialising in agentic AI, cloud infrastructure, and
                  enterprise security. As founder and CEO of Zaftech, he combines deep
                  technical expertise with strategic vision to help organisations replace
                  their most accuracy-critical human workflows with AI.
                </p>
                <p className="text-blue-300/70 leading-relaxed">
                  With extensive experience in{" "}
                  <span className="text-blue-300 font-medium">
                    cybersecurity, private LLM deployment, and AI compliance frameworks
                  </span>
                  , Talha built Zaftech on the conviction that AI adoption must be
                  private, governed, and measurably accurate before it can be trusted
                  at enterprise scale.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-5 border-t border-blue-500/20">
                  {[
                    { title: "AI Security Expert", sub: "Cybersecurity & Compliance", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                    { title: "Cloud Architect", sub: "Infrastructure & Migration", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
                    { title: "AI Innovator", sub: "LLM & Agent Deployment", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                    { title: "Strategic Partner", sub: "AI Enablement Leadership", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                  ].map(({ title, sub, icon }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-200 text-sm">{title}</h4>
                        <p className="text-xs text-blue-400/60">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="section bg-slate-950/10 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Who We Work With
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-lg text-blue-300/70 leading-relaxed">
                We work with enterprises and scale-ups that are serious about AI
                adoption — organisations that understand the difference between
                a chatbot bolted onto a website and a production-grade AI agent
                that genuinely replaces a costly, error-prone human process.
              </p>
              <p className="text-lg text-blue-300/70 leading-relaxed">
                Our clients span finance, healthcare, legal, logistics, and
                professional services — industries where accuracy, compliance,
                and audit trails are non-negotiable. We help them move from
                fragile manual workflows to reliable, autonomous AI systems.
              </p>
              <p className="text-lg text-blue-300/70 leading-relaxed">
                If your organisation is ready to invest in AI that actually
                works — privately hosted, compliance-ready, and measurably more
                accurate than human processes — we are the right partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-slate-950/90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-300/70 mb-8">
              Let&apos;s discuss your highest-impact AI opportunities and build a
              roadmap to computer accuracy across your critical workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-block text-lg px-8 py-4">
                Book AI Enablement Assessment
              </a>
              <a href="/blog" className="inline-block text-blue-400 font-medium hover:text-blue-300 transition-colors py-4">
                Read our AI insights →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
