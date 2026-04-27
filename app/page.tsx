import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import HeroIllustration from "@/components/HeroIllustration";
import ServicesSlider from "@/components/ServicesSlider";

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950/80 via-slate-950/85 to-slate-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-slate-950/50"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-300 tracking-widest">
                  ENTERPRISE AI ENABLEMENT
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 mb-6 leading-tight">
                Intelligent AI Solutions
                <br />
                for the Modern Enterprise
              </h2>
            </div>

            {/* Main Content Card */}
            <div className="bg-gradient-to-br from-slate-800/50 via-blue-900/40 to-slate-800/50 backdrop-blur-md border border-blue-500/40 rounded-2xl p-8 md:p-12 shadow-2xl shadow-blue-500/20 max-w-3xl mx-auto">
              <div className="mb-10">
                <ServicesSlider />
              </div>

              <div className="mb-10 p-8 bg-gradient-to-r from-blue-500/15 to-blue-400/15 rounded-xl border border-blue-400/40">
                <p className="text-lg md:text-xl text-blue-100 font-semibold leading-relaxed mb-4">
                  We help organisations adopt AI with confidence — private,
                  secure, and aligned with your compliance requirements.
                </p>
                <p className="text-base md:text-lg text-blue-200/80 leading-relaxed">
                  From streamlining finance and operations to deploying private
                  LLMs your team can trust — Zaftech delivers AI enablement
                  that creates measurable business value from day one.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <a
                  href="https://calendly.com/talha-jilal-zaftech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-4 px-8 md:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-base md:text-lg group"
                >
                  <span>Book a Free AI Assessment</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <p className="text-sm text-blue-300/60 mt-4">
                  No commitment · Expert consultation · Confidential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zaftech */}
      <section className="section bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 relative overflow-hidden">
        <div className="decorative-blob w-72 h-72 top-20 right-10 pulse-glow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Why Enterprises Choose Zaftech
              </h2>
              <p className="text-lg text-blue-300/70">
                AI adoption done right — with your team in control and your
                data fully protected
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: "Intelligent Process Automation",
                  body: "Our AI solutions streamline high-volume, repetitive workflows — reducing manual overhead while keeping your team focused on decisions that require human judgement.",
                },
                {
                  title: "End-to-End Implementation",
                  body: "From strategy through to production deployment, we handle the full lifecycle. You get a working AI solution, not just a recommendation document.",
                },
                {
                  title: "Industry-Tailored Solutions",
                  body: "Purpose-built for finance, healthcare, legal, logistics, and professional services — industries where accuracy, compliance, and audit trails are non-negotiable.",
                },
                {
                  title: "Accurate AI Utilisation Billing",
                  body: "Full visibility into your AI spend. We instrument every deployment with usage tracking so you can attribute costs precisely and optimise continuously.",
                },
                {
                  title: "Security & Compliance First",
                  body: "Every solution we build is designed for your regulatory environment from day one — SOC 2, HIPAA, GDPR. Governance is built in, not bolted on.",
                },
                {
                  title: "Long-Term AI Partnership",
                  body: "We stay engaged beyond launch. As your business evolves, we help you expand, refine, and scale your AI capabilities over time.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/30">
                    <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-blue-300 mb-2">{title}</h3>
                    <p className="text-blue-200/70 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero / Platform Statement */}
      <section className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="decorative-blob w-96 h-96 -top-48 -right-48 pulse-glow"></div>
        <div className="decorative-blob w-80 h-80 -bottom-32 -left-32"></div>

        <div className="container-custom relative z-10">
          <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30 w-fit">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-blue-300">
                  AI Enablement Platform
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-blue-200 mb-6 leading-tight">
                Your Operations,
                <br />
                <span className="gradient-text-animated">
                  Elevated by AI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-300/70 mb-8 leading-relaxed">
                We integrate intelligent AI into your existing workflows —
                reducing overhead, improving accuracy, and giving your team
                better tools to make faster decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <Link href="/contact" className="btn-primary inline-block text-base px-6 py-3">
                  Book AI Consultation
                </Link>
                <Link href="/services" className="text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm sm:text-base">
                  Explore our solutions →
                </Link>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
              AI Solutions We Deliver
            </h2>
            <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
              Practical, production-ready AI for every business function
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>}
              title="Customer Experience AI"
              description="Intelligent assistants that handle enquiries, route support tickets, and resolve common issues across email, chat, and voice — with seamless handoff to your team when needed."
            />
            <ServiceCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
              title="Document Intelligence"
              description="Extract, classify, validate, and process invoices, contracts, and forms at scale — with accuracy that exceeds manual review and a full audit trail on every document."
            />
            <ServiceCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Sales & Lead Intelligence"
              description="Qualify inbound leads, enrich prospect data, personalise outreach, and surface your highest-value opportunities — so your sales team focuses on closing, not sorting."
            />
            <ServiceCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Finance & Billing Automation"
              description="Automate expense processing, invoice generation, recurring billing, and account reconciliation — with complete audit trails and cost attribution for every AI action."
            />
            <ServiceCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              title="Data & Reporting Intelligence"
              description="Connect your data sources, automate report generation, and surface actionable insights on demand — so your leadership team always has the information they need."
            />
            <ServiceCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Compliance & Risk Monitoring"
              description="Continuously monitor for policy violations, regulatory breaches, and anomalies — with automated reporting and alerts that keep your compliance team ahead of issues."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Our Delivery Standards
              </h2>
              <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
                The commitments we make to every client engagement
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { stat: "Weeks", label: "To Production", sub: "Not months" },
                { stat: "<1hr", label: "Response Time", sub: "Expert support" },
                { stat: "99.9%", label: "Uptime SLA", sub: "Guaranteed reliability" },
                { stat: "100%", label: "Audit Trail", sub: "Every AI action logged" },
              ].map(({ stat, label, sub }) => (
                <div key={label} className="card text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">
                    {stat}
                  </div>
                  <div className="text-sm font-medium text-blue-200 mb-1">{label}</div>
                  <div className="text-xs text-blue-400/50">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
              How We Engage
            </h2>
            <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
              A structured approach that delivers working AI in weeks, not months
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <ProcessStep
              number="1"
              title="Discovery & Assessment"
              description="We map your existing workflows, identify the highest-value AI opportunities, and assess your data landscape, compliance requirements, and technical environment."
            />
            <ProcessStep
              number="2"
              title="Solution Design"
              description="We design the AI architecture — selecting the right models, integration patterns, and deployment approach for your specific context and constraints."
            />
            <ProcessStep
              number="3"
              title="Build & Integration"
              description="We build and integrate the solution into your existing systems, with security controls, audit logging, and compliance checks built in from the start."
            />
            <ProcessStep
              number="4"
              title="Validation & Handover"
              description="We validate accuracy, performance, and compliance before go-live, and ensure your team is fully trained and confident operating the new system."
            />
            <ProcessStep
              number="5"
              title="Ongoing Optimisation"
              description="Post-launch, we monitor performance, refine models, and expand capabilities as your needs evolve — a long-term partner, not a one-time vendor."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
              AI engineers, cloud architects, and compliance specialists
              dedicated to your success
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                initials: "T",
                gradient: "from-blue-500 to-blue-600",
                avatarGradient: "from-blue-400 to-blue-500",
                name: "Talha",
                role: "Cloud Architect & AI Engineer",
                bio: "Specialises in enterprise cloud infrastructure and AI/ML deployments. Designs scalable, secure systems across AWS, Azure, and GCP that form the backbone of production AI solutions.",
                credentials: "MSc Information Systems · GCIS · BSc Computer Science",
                specialties: "Terraform · Kubernetes · CI/CD · Multi-Cloud · AI/ML Infrastructure",
              },
              {
                initials: "MT",
                gradient: "from-emerald-500 to-teal-600",
                avatarGradient: "from-emerald-400 to-teal-500",
                name: "Dr Mujahid Tabassum",
                role: "Senior IoT Researcher & Solutions Designer",
                bio: "Bridges IoT and enterprise strategy to build scalable, data-driven solutions. Transforms emerging technologies into competitive business advantages.",
                credentials: "Ph.D. Electronics & Telecommunications · Business Strategy Certification",
                specialties: "IoT Architecture · Edge Computing · Industrial AI · Digital Transformation",
              },
              {
                initials: "R",
                gradient: "from-blue-500 to-purple-600",
                avatarGradient: "from-blue-400 to-purple-500",
                name: "Ramish",
                role: "Software Engineer & Cloud Solutions Architect",
                bio: "Builds production-ready AI applications and cloud infrastructure that drive measurable operational improvements.",
                credentials: "",
                specialties: "Full-Stack · Node.js · React · Cloud Architecture · CI/CD",
              },
              {
                initials: "AB",
                gradient: "from-purple-500 to-pink-600",
                avatarGradient: "from-purple-400 to-pink-500",
                name: "Ahmad Baig",
                role: "DevOps Engineer & Technical Project Manager",
                bio: "Combines engineering rigour with delivery discipline — ensuring AI projects ship on time, on scope, and aligned with business goals.",
                credentials: "PMP Certified · Microsoft Certified Cloud Admin · Scrum Master",
                specialties: "Terraform · Kubernetes · Azure/AWS/GCP · Agile Delivery",
              },
            ].map(({ initials, gradient, avatarGradient, name, role, bio, credentials, specialties }) => (
              <div key={name} className="bg-slate-800/60 rounded-xl border border-blue-500/30 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group backdrop-blur-sm">
                <div className={`bg-gradient-to-br ${gradient} h-32 relative`}>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${avatarGradient} border-4 border-slate-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                      {initials}
                    </div>
                  </div>
                </div>
                <div className="pt-16 pb-6 px-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-blue-200 mb-1">{name}</h3>
                  <p className="text-blue-400 font-semibold text-sm mb-3">{role}</p>
                  <p className="text-blue-300/60 text-sm leading-relaxed mb-3">{bio}</p>
                  {credentials && (
                    <p className="text-blue-400/50 text-xs mb-2">
                      <span className="font-semibold text-blue-300/70">Credentials:</span> {credentials}
                    </p>
                  )}
                  <p className="text-blue-400/50 text-xs">
                    <span className="font-semibold text-blue-300/70">Specialties:</span> {specialties}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-slate-950/90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-6">
              Ready to Adopt AI with Confidence?
            </h2>
            <p className="text-xl text-blue-300/70 mb-8 leading-relaxed">
              Book a free AI enablement assessment. We will identify your
              highest-value opportunities and map a clear path to measurable
              outcomes — without disrupting what already works.
            </p>
            <Link href="/contact" className="btn-primary inline-block text-lg px-8 py-4">
              Book AI Enablement Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
