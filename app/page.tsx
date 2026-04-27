import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import HeroIllustration from "@/components/HeroIllustration";
import ServicesSlider from "@/components/ServicesSlider";

export default function Home() {
  return (
    <>
      {/* Agentic AI Solutions Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950/80 via-slate-950/85 to-slate-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-slate-950/50"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{ top: '60%', right: '15%', animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{ bottom: '30%', left: '20%', animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/30 rounded-full mb-6 backdrop-blur-sm border border-blue-400/50">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-300 tracking-widest">
                  AUTONOMOUS BUSINESS AUTOMATION
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 mb-6 leading-tight">
                AI Agents That Work For You 24/7
              </h2>
            </div>

            {/* Main Content Card */}
            <div className="bg-gradient-to-br from-slate-800/50 via-blue-900/40 to-slate-800/50 backdrop-blur-md border border-blue-500/40 rounded-2xl p-8 md:p-12 shadow-2xl shadow-blue-500/20 max-w-3xl mx-auto">
              
              {/* Rotating Services Slider */}
              <div className="mb-10">
                <ServicesSlider />
              </div>

              {/* Value Proposition */}
              <div className="mb-10 p-8 bg-gradient-to-r from-blue-500/15 to-blue-400/15 rounded-xl border border-blue-400/40">
                <p className="text-lg md:text-xl text-blue-100 font-semibold leading-relaxed mb-4">
                  Deploy autonomous AI agents that handle complex business processes end-to-end with zero human intervention.
                </p>
                <p className="text-base md:text-lg text-blue-200/80 leading-relaxed">
                  From customer service to invoice processing to lead qualification—our AI agents work 24/7 to eliminate bottlenecks and reduce operational costs by up to 70%.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col items-center">
                <a
                  href="https://calendly.com/talha-jilal-zaftech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 px-8 md:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-base md:text-lg group"
                >
                  <span>🤖</span>
                  <span>Schedule Your Automation Audit</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <p className="text-sm md:text-base text-blue-300/70 mt-4 font-medium">
                  Free assessment • See your automation potential • Expert consultation
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
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Why Choose Zaftech For AI Automation
              </h2>
              <p className="text-lg text-blue-300/70">
                Build intelligent agents that understand your business and handle operations autonomously
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/30">
                  <svg
                    className="w-4 h-4 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-blue-300 mb-2">
                    Fully Autonomous Agents
                  </h3>
                  <p className="text-blue-200/70">
                    Our AI agents operate independently, making decisions and completing tasks without human oversight 24/7.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/30">
                  <svg
                    className="w-4 h-4 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-blue-300 mb-2">
                    End-to-End Process Automation
                  </h3>
                  <p className="text-blue-200/70">
                    From intake to completion, we build agents that handle multi-step business processes without manual handoffs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/30">
                  <svg
                    className="w-4 h-4 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-blue-300 mb-2">
                    Industry-Specific Agents
                  </h3>
                  <p className="text-blue-200/70">
                    Customized agents for your industry: finance, healthcare, e-commerce, real estate, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/30">
                  <svg
                    className="w-4 h-4 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-blue-300 mb-2">
                    Reduced Downtime
                  </h3>
                  <p className="text-blue-200/70">
                    Our proactive maintenance and monitoring significantly
                    reduce system failures and keep your operations running
                    smoothly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/30">
                  <svg
                    className="w-4 h-4 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-blue-300 mb-2">
                    Security-First Approach
                  </h3>
                  <p className="text-blue-200/70">
                    We prioritize your security with continuous monitoring,
                    regular updates, and best practices to protect your business
                    data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/30">
                  <svg
                    className="w-4 h-4 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-blue-300 mb-2">
                    Long-Term AI Partnership
                  </h3>
                  <p className="text-blue-200/70">
                    We're not just a vendor—we're your AI partner. We invest in
                    understanding your business and building lasting
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">

        {/* Decorative blobs */}
        <div className="decorative-blob w-96 h-96 -top-48 -right-48 pulse-glow"></div>
        <div className="decorative-blob w-80 h-80 -bottom-32 -left-32"></div>

        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 w-16 h-16 text-blue-300/20 float-icon hidden lg:block">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div
          className="absolute top-40 right-20 w-12 h-12 text-blue-300/15 float-icon hidden lg:block"
          style={{ animationDelay: "1s" }}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.36 4.24l-.707-.707M5.95 5.95l-.707-.707"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-40 left-20 w-14 h-14 text-blue-300/15 float-icon hidden lg:block"
          style={{ animationDelay: "2s" }}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30 w-fit">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-blue-300">
                  Agentic AI Platform
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-blue-200 mb-6 leading-tight">
                Your Business,
                <br />
                <span className="gradient-text-animated">
                  Automated by AI Agents
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-300/70 mb-8 leading-relaxed">
                Deploy intelligent autonomous agents that handle complex business processes, customer interactions, and decision-making without human intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-block text-base px-6 py-3"
                >
                  Schedule Automation Audit
                </Link>
                <Link
                  href="/services"
                  className="text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  Explore agent solutions →
                </Link>
              </div>
            </div>

            {/* Hero Illustration */}
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl float-up hidden lg:block"></div>
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl float-up hidden lg:block"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
              AI Agent Solutions
            </h2>
            <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
              Purpose-built autonomous agents for every business process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              }
              title="Customer Service Agents"
              description="AI agents that handle customer inquiries, support tickets, and complaint resolution across email, chat, and phone—24/7 with human fallback."
            />
            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              title="Document Processing Agents"
              description="Automatically extract, categorize, validate, and process invoices, contracts, forms, and documents with 99%+ accuracy."
            />
            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title="Lead Qualification & Conversion Agents"
              description="Engage prospects, qualify leads based on custom criteria, schedule demos, and move qualified leads through your sales pipeline automatically."
            />
            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Expense & Billing Agents"
              description="Process expense claims, generate invoices, manage recurring billing, and reconcile accounts automatically with full audit trails."
            />
            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              }
              title="Data Extraction & Analytics Agents"
              description="Monitor data sources, extract insights, generate reports, and feed intelligence into your decision-making workflows continuously."
            />
            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              title="Compliance & Monitoring Agents"
              description="Continuously monitor for compliance violations, policy breaches, and anomalies—alerting your team before issues become problems."
            />
          </div>
        </div>
      </section>

      {/* Stats / Trust Indicators */}
      <section className="section bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Our Service Commitments
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Transparent metrics that demonstrate our commitment to your IT
                success
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm font-medium text-primary mb-1">
                  Monitoring
                </div>
                <div className="text-xs text-text-light">
                  Continuous oversight
                </div>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">
                  &lt;1hr
                </div>
                <div className="text-sm font-medium text-primary mb-1">
                  Response Time
                </div>
                <div className="text-xs text-text-light">Fast support</div>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-sm font-medium text-primary mb-1">
                  Uptime SLA
                </div>
                <div className="text-xs text-text-light">
                  Guaranteed reliability
                </div>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm font-medium text-primary mb-1">
                  Proactive
                </div>
                <div className="text-xs text-text-light">
                  Preventive approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl float-up hidden lg:block"></div>
        <div
          className="absolute bottom-0 right-1/4 w-56 h-56 bg-accent-teal/3 rounded-full blur-3xl float-up hidden lg:block"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              How We Get Started
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Our proven MSP onboarding process ensures a smooth transition
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <ProcessStep
              number="1"
              title="Assess Your IT Environment"
              description="We conduct a comprehensive assessment of your current IT infrastructure, identifying strengths, risks, and opportunities for improvement."
            />
            <ProcessStep
              number="2"
              title="Identify Risks & Improvements"
              description="Our team analyzes your systems and provides a clear roadmap for addressing security gaps, performance issues, and operational inefficiencies."
            />
            <ProcessStep
              number="3"
              title="Implement Monitoring & Security"
              description="We set up proactive monitoring tools and security measures to protect your business and catch issues before they become problems."
            />
            <ProcessStep
              number="4"
              title="Ongoing Management & Support"
              description="Your dedicated team handles day-to-day IT management, provides helpdesk support, and ensures your systems run smoothly."
            />
            <ProcessStep
              number="5"
              title="Continuous Optimization"
              description="We regularly review and optimize your IT infrastructure, making improvements to enhance performance, security, and efficiency."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Cloud infrastructure specialists, IoT researchers, and business solution designers dedicated to your success
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 - Talha */}
            <div className="bg-slate-800/60 rounded-xl border border-blue-500/30 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-4 border-slate-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg\">
                    T
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-6 px-6 text-center\">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Talha
                </h3>
                <p className="text-accent-teal font-semibold mb-3">
                  Cloud Architect & DevOps Engineer
                </p>
                <p className="text-text-light text-sm leading-relaxed mb-3">
                  Expert in architecting enterprise systems and mastering cloud infrastructure automation. Transforms complex IT environments into streamlined, automated solutions across AWS, Azure, and GCP.
                </p>
                <p className="text-text-light text-xs mb-2">
                  <span className="font-semibold text-primary">Credentials:</span> MSc Information Systems | GCIS | BSc Computer Science
                </p>
                <p className="text-text-light text-xs">
                  <span className="font-semibold text-primary">Specialties:</span> Terraform, Ansible, Kubernetes, CI/CD Pipelines, ITIL, Multi-Cloud Architecture, AI/ML Infrastructure
                </p>
              </div>
            </div>

            {/* Team Member 2 - Dr Mujahid Tabassum */}
            <div className="bg-slate-800/60 rounded-xl border border-blue-500/30 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group backdrop-blur-sm">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 h-32 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-4 border-slate-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg\">
                    MT
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-6 px-6 text-center">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Dr Mujahid Tabassum
                </h3>
                <p className="text-accent-teal font-semibold mb-3">
                  Senior IoT Researcher & Business Solutions Designer
                </p>
                <p className="text-text-light text-sm leading-relaxed mb-3">
                  Pioneering solutions at the intersection of Internet of Things and enterprise business strategy. Transforms emerging IoT technologies into scalable business solutions that drive innovation and competitive advantage.
                </p>
                <p className="text-text-light text-xs mb-2">
                  <span className="font-semibold text-primary">Credentials:</span> Ph.D. in Electronics & Telecommunications | Advanced IoT Systems Design | Business Strategy Certification
                </p>
                <p className="text-text-light text-xs">
                  <span className="font-semibold text-primary">Specialties:</span> IoT Architecture, Embedded Systems, Business Solutions Design, Edge Computing, Industrial IoT, Smart Systems, Digital Transformation
                </p>
              </div>
            </div>

            {/* Team Member 3 - Ramish */}
            <div className="bg-slate-800/60 rounded-xl border border-blue-500/30 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-32 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-slate-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg\">
                    R
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-6 px-6 text-center\">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Ramish
                </h3>
                <p className="text-accent-teal font-semibold mb-3">
                  Software Engineer & Cloud Solutions Architect
                </p>
                <p className="text-text-light text-sm leading-relaxed mb-3">
                  Delivers scalable web applications and cloud infrastructure that drive operational efficiency and product performance. Expert in building production-ready systems using Node.js, React, AWS, and GCP.
                </p>
                <p className="text-text-light text-xs">
                  <span className="font-semibold text-primary">Specialties:</span> Full-Stack Development, MySQL & Prisma ORM, Cloud Architecture, CI/CD Automation
                </p>
              </div>
            </div>

            {/* Team Member 4 - Ahmad Baig */}
            <div className="bg-slate-800/60 rounded-xl border border-blue-500/30 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group backdrop-blur-sm">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-32 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-4 border-slate-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg\">
                    AB
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-6 px-6 text-center">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Ahmad Baig
                </h3>
                <p className="text-accent-teal font-semibold mb-3">
                  DevOps Engineer & Technical Project Manager
                </p>
                <p className="text-text-light text-sm leading-relaxed mb-3">
                  Unique blend of project management expertise and cloud engineering. Delivers projects that align business goals with technical excellence—an engineer who understands project timelines and a PM who understands technology.
                </p>
                <p className="text-text-light text-xs mb-2">
                  <span className="font-semibold text-primary">Credentials:</span> PMP Certified | Microsoft Certified Cloud Admin | Scrum Master
                </p>
                <p className="text-text-light text-xs">
                  <span className="font-semibold text-primary">Specialties:</span> CI/CD Automation, Terraform, Kubernetes, Docker, Azure/AWS/GCP, Agile Delivery, Stakeholder Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="bg-pattern-dense w-full h-full"></div>
        </div>
        <div className="decorative-blob w-96 h-96 -top-32 -left-32 opacity-20 pulse-glow"></div>
        <div className="decorative-blob w-80 h-80 -bottom-24 -right-24 opacity-20"></div>
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl float-up"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl float-up"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Automate Everything. Deploy with Confidence.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience seamless CI/CD pipelines and DevOps automation that accelerates
              your development lifecycle. Focus on innovation while we handle the complexity
              of continuous integration and deployment.
            </p>
            <Link
              href="/contact"
              className="btn-secondary inline-block bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-blue-400/50"
            >
              Schedule a Free IT Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
