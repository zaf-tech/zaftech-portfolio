export const metadata = {
  title: 'Managed IT Services - ZafTech',
  description: 'Comprehensive managed IT services including helpdesk support, network monitoring, cybersecurity, cloud management, and IT consulting for small to medium businesses.',
}

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-grid-animated relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="decorative-blob w-96 h-96 -top-48 -right-48 pulse-glow"></div>
        <div className="decorative-blob w-72 h-72 -bottom-32 -left-32"></div>
        
        {/* Floating service icons */}
        <div className="absolute top-32 left-16 w-14 h-14 text-accent/20 float-icon hidden lg:block">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 w-12 h-12 text-accent/15 float-icon hidden lg:block" style={{ animationDelay: '1.5s' }}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
                Our Managed IT Services
              </h1>
              <p className="text-xl md:text-2xl text-text-light max-w-2xl mx-auto leading-relaxed">
                Complete IT management designed to keep your business running smoothly and securely
              </p>
            </div>
            
            {/* Service highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-heading font-bold text-accent mb-2">6</div>
                <div className="text-sm text-text-light">Core Services</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-heading font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-text-light">Support Available</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-heading font-bold text-accent mb-2">All-in-One</div>
                <div className="text-sm text-text-light">Monthly Plan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed IT Services */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Managed IT Services</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Complete IT management for your business. We handle all aspects of your technology infrastructure 
                  so you can focus on what you do best—running your business.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  Our managed IT services include proactive monitoring, regular maintenance, security management, 
                  and ongoing support—all included in one predictable monthly fee. No surprises, no hidden costs.
                </p>
                <p className="text-text-light mb-4 leading-relaxed font-medium">
                  <strong>What's Included:</strong>
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 network monitoring and alerting
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Proactive maintenance and updates
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Helpdesk support for your team
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Security management and protection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cloud and backup management
                  </li>
                </ul>
                <p className="text-text-light mt-4 leading-relaxed">
                  <strong>Who It's For:</strong> Small to medium businesses that want reliable IT management 
                  without the cost and complexity of an in-house IT department.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">MSP</div>
                  <p className="text-text-light">Complete IT Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpdesk & Support */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">HD</div>
                  <p className="text-text-light">Fast Support</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Helpdesk & IT Support</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  When your team needs IT help, we're here. Our helpdesk provides fast, reliable support 
                  to keep your business running smoothly.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  Whether it's a quick question or a technical issue, our team responds promptly and resolves 
                  problems efficiently. We offer both remote and on-site support to meet your needs.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Remote support for quick resolution
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    On-site support when needed
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fast response times during business hours
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    After-hours support available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Cybersecurity & Endpoint Protection</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Protect your business from cyber threats with comprehensive security management. We implement 
                  multiple layers of protection to keep your data and systems secure.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  Our security approach includes endpoint protection, continuous monitoring, regular security 
                  assessments, and employee training to reduce your risk of cyberattacks and data breaches.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Endpoint protection and antivirus management
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Security monitoring and threat detection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Regular security updates and patch management
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Security best practices and employee training
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">SEC</div>
                  <p className="text-text-light">Security First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & Backup */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">CLD</div>
                  <p className="text-text-light">Cloud Services</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Cloud Management & Backup</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Keep your data safe and accessible with professional cloud and backup management. We handle 
                  Microsoft 365, secure backups, and disaster recovery planning.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  Our cloud services ensure your business data is protected, backed up regularly, and recoverable 
                  in case of emergencies. We manage your cloud infrastructure so you don't have to.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Microsoft 365 setup and management
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated secure backups
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Email management and security
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Disaster recovery planning and testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Consulting & vCIO */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">IT Consulting & vCIO Services</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Strategic IT guidance without the cost of a full-time CIO. Our virtual CIO (vCIO) services 
                  help you make informed technology decisions aligned with your business goals.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  We provide strategic planning, technology assessments, budget guidance, and IT roadmap 
                  development to ensure your technology investments support your business objectives.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Strategic IT planning and roadmaps
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Technology assessments and audits
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Budget planning and IT cost optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vendor management and technology selection
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">vCIO</div>
                  <p className="text-text-light">Strategic Guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="bg-pattern-dense w-full h-full"></div>
        </div>
        <div className="decorative-blob w-96 h-96 -top-32 -left-32 opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Simplify Your IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our managed IT services can help your business run more efficiently and securely.
            </p>
            <a href="/contact" className="btn-secondary inline-block bg-white text-primary hover:bg-gray-100">
              Schedule a Free IT Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
