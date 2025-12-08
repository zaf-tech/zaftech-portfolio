export const metadata = {
  title: 'Services - ZafTech',
  description: 'Comprehensive IT services including software development, web applications, cloud solutions, and consulting.',
}

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-text-light">
              Comprehensive IT solutions designed to meet your business needs and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Software Development</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  We build custom software solutions tailored to your specific business requirements. 
                  Our development process emphasizes clean code, scalability, and maintainability.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  Whether you need a desktop application, mobile app, or enterprise software, we leverage 
                  modern technologies and best practices to deliver robust solutions that grow with your business.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom application development
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API development and integration
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Legacy system modernization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Code review and quality assurance
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">SD</div>
                  <p className="text-text-light">Scalable Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Applications */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">WA</div>
                  <p className="text-text-light">Modern Web Apps</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Web Applications</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  We create responsive, fast, and intuitive web applications that provide exceptional user experiences. 
                  Our web solutions are built with performance and accessibility in mind.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  From single-page applications to complex web platforms, we use modern frameworks and technologies 
                  to deliver scalable solutions that work seamlessly across all devices.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Responsive web design
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Progressive web applications
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    E-commerce platforms
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Content management systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & DevOps */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Cloud & DevOps</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Modern cloud infrastructure and DevOps practices to accelerate deployment, improve reliability, 
                  and reduce operational overhead. We help you leverage the power of cloud computing.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  Our team designs and implements scalable cloud architectures, automates deployment pipelines, 
                  and establishes monitoring and logging systems to keep your infrastructure running smoothly.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cloud architecture design
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    CI/CD pipeline setup
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Infrastructure as Code
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Monitoring and alerting
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">CD</div>
                  <p className="text-text-light">Cloud & DevOps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Consulting */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">IT</div>
                  <p className="text-text-light">Strategic Consulting</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">IT Consulting</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Strategic IT consulting to help you make informed technology decisions and optimize your 
                  infrastructure. We provide expert guidance tailored to your business objectives.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  From technology assessments to digital transformation strategies, we help you navigate 
                  complex technical challenges and identify opportunities for improvement and growth.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Technology strategy and planning
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    System architecture review
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital transformation guidance
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cost optimization analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <a href="/contact" className="btn-secondary inline-block bg-white text-primary hover:bg-gray-100">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

