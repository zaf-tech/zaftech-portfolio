export const metadata = {
  title: 'About Us - ZafTech',
  description: 'Learn about ZafTech, our mission, values, and commitment to delivering exceptional IT solutions.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              About ZafTech
            </h1>
            <p className="text-xl text-text-light">
              Building trusted partnerships through reliable technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Mission
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text-light leading-relaxed mb-6">
                At ZafTech, we believe that technology should empower businesses, not complicate them. 
                Our mission is to deliver IT solutions that are not only technically excellent but also 
                aligned with your business goals and easy to maintain.
              </p>
              <p className="text-lg text-text-light leading-relaxed mb-6">
                We work closely with our clients to understand their unique challenges and opportunities, 
                ensuring that every solution we deliver provides real value and drives measurable results. 
                Our commitment extends beyond project delivery—we build long-term partnerships based on 
                trust, reliability, and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-lg text-text-light">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">Reliability</h3>
                <p className="text-text-light">
                  We build systems that you can depend on. Reliability isn't just a feature—it's a 
                  fundamental requirement in everything we create. Your business operations depend on 
                  technology that works consistently and predictably.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">Quality</h3>
                <p className="text-text-light">
                  We maintain the highest standards in our work. Quality means writing clean, maintainable 
                  code, following best practices, and thoroughly testing our solutions. We don't cut corners— 
                  we build for the long term.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">Partnership</h3>
                <p className="text-text-light">
                  We view our clients as partners, not just customers. Your success is our success. 
                  We invest in understanding your business and building relationships that last beyond 
                  individual projects.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">Innovation</h3>
                <p className="text-text-light">
                  We stay current with technology trends and best practices, but we're pragmatic about 
                  when to adopt new tools. Innovation means choosing the right solution for your specific 
                  needs, not just the latest technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Approach
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Listen First</h3>
                  <p className="text-text-light">
                    We start by understanding your business, your challenges, and your goals. 
                    Every great solution begins with a deep understanding of the problem.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Plan Strategically</h3>
                  <p className="text-text-light">
                    We create comprehensive plans that align technology solutions with your business 
                    objectives, considering both immediate needs and long-term growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Execute with Excellence</h3>
                  <p className="text-text-light">
                    We deliver on our promises with attention to detail, clear communication, and 
                    a commitment to quality throughout the development process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Support Continuously</h3>
                  <p className="text-text-light">
                    Our relationship doesn't end at launch. We provide ongoing support, maintenance, 
                    and optimization to ensure your systems continue to serve your business well.
                  </p>
                </div>
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
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to partner with a team that's committed to your success?
            </p>
            <a href="/contact" className="btn-secondary inline-block bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

