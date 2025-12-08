import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import ProcessStep from '@/components/ProcessStep'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              Transform Your Business with
              <span className="text-accent"> Expert IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-light mb-8 leading-relaxed">
              We deliver scalable software development, cloud infrastructure, and strategic consulting 
              to help your business thrive in the digital age.
            </p>
            <Link href="/contact" className="btn-primary inline-block text-lg px-8 py-4">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
              title="Software Development"
              description="Custom applications built with modern technologies, following best practices for scalability and maintainability."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="Web Applications"
              description="Responsive, fast, and user-friendly web applications that deliver exceptional user experiences."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
              title="Cloud & DevOps"
              description="Modern cloud infrastructure and CI/CD pipelines to accelerate deployment and ensure reliability."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Security & Compliance"
              description="Robust security measures and compliance frameworks to protect your data and systems."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="IT Consulting"
              description="Strategic guidance to help you make informed technology decisions and optimize your IT infrastructure."
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="Support & Maintenance"
              description="Ongoing support and maintenance to keep your systems running smoothly and efficiently."
            />
          </div>
        </div>
      </section>

      {/* Why Choose ZafTech */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Why Choose ZafTech
              </h2>
              <p className="text-lg text-text-light">
                What sets us apart in delivering exceptional IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Experienced Team</h3>
                  <p className="text-text-light">
                    Our team brings years of industry experience and deep technical expertise to every project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Scalable Solutions</h3>
                  <p className="text-text-light">
                    We build systems that grow with your business, ensuring long-term value and flexibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Secure & Reliable</h3>
                  <p className="text-text-light">
                    Security and reliability are at the core of everything we build, protecting your business and data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Long-term Support</h3>
                  <p className="text-text-light">
                    We're committed to your success with ongoing support, maintenance, and partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              A proven methodology to deliver successful projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <ProcessStep
              number="1"
              title="Discover"
              description="We start by understanding your business goals, challenges, and requirements through detailed consultation and analysis."
            />
            <ProcessStep
              number="2"
              title="Plan"
              description="Our team creates a comprehensive strategy and roadmap tailored to your specific needs and timeline."
            />
            <ProcessStep
              number="3"
              title="Build"
              description="We develop your solution using best practices, modern technologies, and agile methodologies for quality delivery."
            />
            <ProcessStep
              number="4"
              title="Deploy"
              description="Careful deployment and testing ensure a smooth launch with minimal disruption to your operations."
            />
            <ProcessStep
              number="5"
              title="Support"
              description="Ongoing monitoring, maintenance, and optimization keep your systems running at peak performance."
            />
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can drive growth and efficiency for your organization.
            </p>
            <Link href="/contact" className="btn-secondary inline-block bg-white text-primary hover:bg-gray-100">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

