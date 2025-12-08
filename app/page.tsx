import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import ProcessStep from '@/components/ProcessStep'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-grid-animated relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Decorative blobs */}
        <div className="decorative-blob w-96 h-96 -top-48 -right-48 pulse-glow"></div>
        <div className="decorative-blob w-80 h-80 -bottom-32 -left-32"></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 w-16 h-16 text-accent/20 float-icon hidden lg:block">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 text-accent/15 float-icon hidden lg:block" style={{ animationDelay: '1s' }}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 text-accent/15 float-icon hidden lg:block" style={{ animationDelay: '2s' }}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8 backdrop-blur-sm border border-accent/20">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-accent">Managed IT Services Provider</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary mb-8 leading-tight">
                We Manage Your IT So You Can
                <br />
                <span className="gradient-text-animated">Focus on Your Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-light mb-10 leading-relaxed max-w-3xl mx-auto">
                Proactive IT support, security, and monitoring—all in one predictable monthly plan. 
                Stop worrying about technology. Let us handle it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn-primary inline-block text-lg px-8 py-4">
                  Schedule a Free IT Assessment
                </Link>
                <Link href="/services" className="text-primary font-medium hover:text-accent transition-colors">
                  Learn more about our services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gradient-animated relative overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl float-up hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl float-up hidden lg:block" style={{ animationDelay: '2s' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Managed IT Services
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Comprehensive IT management designed to keep your business running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Managed IT Services"
              description="Complete IT management including proactive monitoring, maintenance, and support. We handle your technology so you can focus on growth."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="Helpdesk Support"
              description="Fast, reliable IT support when you need it. Remote and on-site assistance with quick response times to keep your team productive."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Cybersecurity"
              description="Protect your business with endpoint protection, security monitoring, and best practices. Stay ahead of threats with proactive security management."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
              title="Cloud & Backup"
              description="Microsoft 365 management, secure cloud backups, and disaster recovery planning. Keep your data safe and accessible from anywhere."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Network Management"
              description="Ongoing network monitoring, maintenance, and optimization. Ensure your infrastructure runs reliably and efficiently."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
              title="IT Consulting & vCIO"
              description="Strategic IT guidance and virtual CIO services. Make informed technology decisions aligned with your business goals."
            />
          </div>
        </div>
      </section>

      {/* Why Choose ZafTech */}
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
                Why Choose ZafTech
              </h2>
              <p className="text-lg text-text-light">
                What makes us the right managed IT services partner for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Proactive Monitoring & Support</h3>
                  <p className="text-text-light">
                    We prevent problems before they impact your business. Our proactive approach means fewer disruptions and more uptime.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Fast Response Times</h3>
                  <p className="text-text-light">
                    When issues arise, we respond quickly. Our team is available when you need us, minimizing downtime and keeping your business running.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Predictable Monthly Pricing</h3>
                  <p className="text-text-light">
                    No surprise IT bills. Our flat monthly fee gives you budget certainty and includes all the IT support your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Reduced Downtime</h3>
                  <p className="text-text-light">
                    Our proactive maintenance and monitoring significantly reduce system failures and keep your operations running smoothly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Security-First Approach</h3>
                  <p className="text-text-light">
                    We prioritize your security with continuous monitoring, regular updates, and best practices to protect your business data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Long-Term IT Partnership</h3>
                  <p className="text-text-light">
                    We're not just a vendor—we're your IT partner. We invest in understanding your business and building lasting relationships.
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
                Transparent metrics that demonstrate our commitment to your IT success
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm font-medium text-primary mb-1">Monitoring</div>
                <div className="text-xs text-text-light">Continuous oversight</div>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">&lt;1hr</div>
                <div className="text-sm font-medium text-primary mb-1">Response Time</div>
                <div className="text-xs text-text-light">Fast support</div>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">99.9%</div>
                <div className="text-sm font-medium text-primary mb-1">Uptime SLA</div>
                <div className="text-xs text-text-light">Guaranteed reliability</div>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent-teal/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm font-medium text-primary mb-1">Proactive</div>
                <div className="text-xs text-text-light">Preventive approach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl float-up hidden lg:block"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-accent-teal/3 rounded-full blur-3xl float-up hidden lg:block" style={{ animationDelay: '3s' }}></div>
        
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
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl float-up" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Stop Worrying About IT. Let Us Manage It for You.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the peace of mind that comes with reliable, proactive IT management. 
              Focus on growing your business while we handle your technology.
            </p>
            <Link href="/contact" className="btn-secondary inline-block bg-white text-primary hover:bg-gray-100">
              Schedule a Free IT Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
