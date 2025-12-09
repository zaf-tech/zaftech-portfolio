import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-grid-animated relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Decorative blobs */}
        <div className="decorative-blob w-96 h-96 -top-48 -right-48 pulse-glow"></div>
        <div className="decorative-blob w-80 h-80 -bottom-32 -left-32"></div>

        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 w-16 h-16 text-accent-teal/20 float-icon hidden lg:block">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <div
          className="absolute top-40 right-20 w-12 h-12 text-accent-teal/15 float-icon hidden lg:block"
          style={{ animationDelay: "1s" }}
        >
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
          className="absolute bottom-40 left-20 w-14 h-14 text-accent-teal/15 float-icon hidden lg:block"
          style={{ animationDelay: "2s" }}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-teal/10 rounded-full mb-6 backdrop-blur-sm border border-accent-teal/20 w-fit">
                <div className="w-1.5 h-1.5 bg-accent-teal rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-accent-teal">
                  Managed IT Services Provider
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                We Manage Your IT So You Can
                <br />
                <span className="gradient-text-animated">
                  Focus on Your Business
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-light mb-8 leading-relaxed">
                Proactive IT support, security, and monitoring—all in one
                predictable monthly plan. Stop worrying about technology. Let us
                handle it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-block text-base px-6 py-3"
                >
                  Schedule a Free IT Assessment
                </Link>
                <Link
                  href="/services"
                  className="text-primary font-medium hover:text-accent-teal transition-colors text-sm sm:text-base"
                >
                  Learn more about our services →
                </Link>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent-teal/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-10 w-28 h-28 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur shadow-2xl border border-accent-teal/15 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-accent-teal/10 pointer-events-none"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p className="text-sm font-medium text-text-light">
                      Live status · Secure · Managed
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 380 240"
                    className="w-full mb-4 text-accent-teal"
                    role="img"
                    aria-label="MSP monitoring dashboard illustration"
                  >
                    <defs>
                      <linearGradient
                        id="nodeGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#14B8A6" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                      <linearGradient
                        id="panelGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="rgba(20,184,166,0.25)" />
                        <stop offset="100%" stopColor="rgba(37,99,235,0.15)" />
                      </linearGradient>
                    </defs>

                    {/* Main monitoring dashboard panel */}
                    <rect
                      x="30"
                      y="40"
                      width="320"
                      height="160"
                      rx="20"
                      fill="url(#panelGradient)"
                      stroke="rgba(37,99,235,0.3)"
                      strokeWidth="2.5"
                    />

                    {/* Dashboard header with security badge */}
                    <rect
                      x="50"
                      y="58"
                      width="280"
                      height="24"
                      rx="12"
                      fill="white"
                      opacity="0.95"
                    />
                    <circle
                      cx="280"
                      cy="70"
                      r="8"
                      fill="#14B8A6"
                      opacity="0.9"
                    />
                    <circle
                      cx="300"
                      cy="70"
                      r="8"
                      fill="#2563EB"
                      opacity="0.9"
                    />
                    <circle
                      cx="320"
                      cy="70"
                      r="8"
                      fill="#22C55E"
                      opacity="0.9"
                    />

                    {/* Dashboard header indicator */}
                    {/* <circle cx="70" cy="70" r="4" fill="#14B8A6" opacity="0.9">
                      <animate
                        attributeName="opacity"
                        values="0.9;0.4;0.9"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle> */}
                    <text
                      x="58"
                      y="74"
                      fill="rgba(37,99,235,0.85)"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="system-ui, sans-serif"
                    >
                      System Status
                    </text>

                    {/* Security shield badge */}
                    <circle
                      cx="250"
                      cy="70"
                      r="18"
                      fill="white"
                      stroke="url(#nodeGradient)"
                      strokeWidth="3"
                    />
                    <path
                      d="M250 60 L242 64 L242 72 Q242 76 246 78 L250 80 L254 78 Q258 76 258 72 L258 64 Z"
                      fill="url(#nodeGradient)"
                      opacity="0.8"
                    />

                    {/* Server/device status rows */}
                    <rect
                      x="50"
                      y="98"
                      width="200"
                      height="16"
                      rx="8"
                      fill="white"
                      opacity="0.9"
                    />
                    <circle
                      cx="58"
                      cy="106"
                      r="6"
                      fill="#22C55E"
                      opacity="0.9"
                    />

                    <rect
                      x="50"
                      y="122"
                      width="160"
                      height="14"
                      rx="7"
                      fill="white"
                      opacity="0.75"
                    />
                    <circle
                      cx="58"
                      cy="129"
                      r="5"
                      fill="#22C55E"
                      opacity="0.9"
                    />

                    <rect
                      x="50"
                      y="144"
                      width="140"
                      height="14"
                      rx="7"
                      fill="white"
                      opacity="0.65"
                    />
                    <circle
                      cx="58"
                      cy="151"
                      r="5"
                      fill="#F59E0B"
                      opacity="0.9"
                    />

                    <rect
                      x="50"
                      y="166"
                      width="120"
                      height="14"
                      rx="7"
                      fill="white"
                      opacity="0.55"
                    />
                    <circle
                      cx="58"
                      cy="173"
                      r="5"
                      fill="#22C55E"
                      opacity="0.9"
                    />

                    {/* Network nodes and connections */}
                    {/* Central hub node */}
                    <circle
                      cx="190"
                      cy="200"
                      r="16"
                      fill="white"
                      stroke="url(#nodeGradient)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="190"
                      cy="200"
                      r="10"
                      fill="url(#nodeGradient)"
                      opacity="0.8"
                    />

                    {/* Connected nodes */}
                    <circle
                      cx="120"
                      cy="200"
                      r="12"
                      fill="white"
                      stroke="url(#nodeGradient)"
                      strokeWidth="3"
                    />
                    <circle
                      cx="120"
                      cy="200"
                      r="7"
                      fill="#14B8A6"
                      opacity="0.9"
                    />

                    <circle
                      cx="260"
                      cy="200"
                      r="12"
                      fill="white"
                      stroke="url(#nodeGradient)"
                      strokeWidth="3"
                    />
                    <circle
                      cx="260"
                      cy="200"
                      r="7"
                      fill="#2563EB"
                      opacity="0.9"
                    />

                    {/* Connection lines */}
                    <line
                      x1="136"
                      y1="200"
                      x2="174"
                      y2="200"
                      stroke="url(#nodeGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    <line
                      x1="206"
                      y1="200"
                      x2="248"
                      y2="200"
                      stroke="url(#nodeGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.6"
                    />

                    {/* Cloud sync illustration - successful sync */}
                    {/* Cloud shape */}
                    <circle
                      cx="285"
                      cy="110"
                      r="10"
                      fill="url(#nodeGradient)"
                      opacity="0.9"
                    />
                    <circle
                      cx="295"
                      cy="105"
                      r="12"
                      fill="url(#nodeGradient)"
                      opacity="0.9"
                    />
                    <circle
                      cx="307"
                      cy="111"
                      r="8"
                      fill="url(#nodeGradient)"
                      opacity="0.9"
                    />
                    <rect
                      x="280"
                      y="108"
                      width="30"
                      height="12"
                      rx="6"
                      fill="url(#nodeGradient)"
                      opacity="0.9"
                    />
                    {/* Success checkmark */}
                    {/* <circle
                      cx="295"
                      cy="105"
                      r="9"
                      fill="#22C55E"
                      opacity="0.95"
                    /> */}
                    <text
                      x="295"
                      y="115"
                      textAnchor="middle"
                      fill="white"
                      fontSize="20"
                      fontWeight="900"
                    >
                      ✔
                    </text>
                    {/* <path
                      d="M312 105 L314.5 107.5 L318 104"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    /> */}

                    {/* <rect
                      x="280"
                      y="128"
                      width="60"
                      height="20"
                      rx="10"
                      fill="#22C55E"
                      opacity="0.9"
                    />
                    <text
                      x="310"
                      y="142"
                      textAnchor="middle"
                      fill="white"
                      fontSize="9"
                      fontWeight="600"
                    >
                      SECURED
                    </text> */}
                  </svg>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Monitoring</p>
                      <p className="text-base font-semibold text-primary">
                        24/7 Live
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Response</p>
                      <p className="text-base font-semibold text-primary">
                        &lt; 1 hour
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Reliability</p>
                      <p className="text-base font-semibold text-primary">
                        99.9% SLA
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Approach</p>
                      <p className="text-base font-semibold text-primary">
                        Proactive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gradient-animated relative overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl float-up hidden lg:block"></div>
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl float-up hidden lg:block"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Managed IT Services
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Comprehensive IT management designed to keep your business running
              smoothly
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              title="Managed IT Services"
              description="Complete IT management including proactive monitoring, maintenance, and support. We handle your technology so you can focus on growth."
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              }
              title="Helpdesk Support"
              description="Fast, reliable IT support when you need it. Remote and on-site assistance with quick response times to keep your team productive."
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
              title="Cybersecurity"
              description="Protect your business with endpoint protection, security monitoring, and best practices. Stay ahead of threats with proactive security management."
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
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              }
              title="Cloud & Backup"
              description="Microsoft 365 management, secure cloud backups, and disaster recovery planning. Keep your data safe and accessible from anywhere."
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
              title="Network Management"
              description="Ongoing network monitoring, maintenance, and optimization. Ensure your infrastructure runs reliably and efficiently."
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              }
              title="IT Consulting & vCIO"
              description="Strategic IT guidance and virtual CIO services. Make informed technology decisions aligned with your business goals."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Zaftech */}
      <section className="section bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
        <div className="decorative-blob w-72 h-72 top-20 right-10 pulse-glow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Why Choose Zaftech
              </h2>
              <p className="text-lg text-text-light">
                What makes us the right managed IT services partner for your
                business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg
                    className="w-4 h-4 text-white"
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
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Proactive Monitoring & Support
                  </h3>
                  <p className="text-text-light">
                    We prevent problems before they impact your business. Our
                    proactive approach means fewer disruptions and more uptime.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg
                    className="w-4 h-4 text-white"
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
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Fast Response Times
                  </h3>
                  <p className="text-text-light">
                    When issues arise, we respond quickly. Our team is available
                    when you need us, minimizing downtime and keeping your
                    business running.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg
                    className="w-4 h-4 text-white"
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
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Predictable Monthly Pricing
                  </h3>
                  <p className="text-text-light">
                    No surprise IT bills. Our flat monthly fee gives you budget
                    certainty and includes all the IT support your business
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg
                    className="w-4 h-4 text-white"
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
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Reduced Downtime
                  </h3>
                  <p className="text-text-light">
                    Our proactive maintenance and monitoring significantly
                    reduce system failures and keep your operations running
                    smoothly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg
                    className="w-4 h-4 text-white"
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
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Security-First Approach
                  </h3>
                  <p className="text-text-light">
                    We prioritize your security with continuous monitoring,
                    regular updates, and best practices to protect your business
                    data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg
                    className="w-4 h-4 text-white"
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
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Long-Term IT Partnership
                  </h3>
                  <p className="text-text-light">
                    We're not just a vendor—we're your IT partner. We invest in
                    understanding your business and building lasting
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Indicators */}
      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
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
      <section className="section bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl float-up hidden lg:block"></div>
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
              Stop Worrying About IT. Let Us Manage It for You.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the peace of mind that comes with reliable, proactive
              IT management. Focus on growing your business while we handle your
              technology.
            </p>
            <Link
              href="/contact"
              className="btn-secondary inline-block bg-white text-primary hover:bg-gray-100"
            >
              Schedule a Free IT Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
