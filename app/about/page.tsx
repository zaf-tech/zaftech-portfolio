export const metadata = {
  title: 'About Us - ZafTech Managed IT Services',
  description: 'Learn about ZafTech, a trusted managed IT services provider focused on reliability, long-term partnerships, and supporting small to medium businesses.',
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
              Your trusted partner for managed IT services
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
                At ZafTech, we believe that small and medium businesses deserve enterprise-level IT support 
                without the enterprise-level complexity and cost. Our mission is to provide reliable, proactive 
                IT management that keeps your business running smoothly.
              </p>
              <p className="text-lg text-text-light leading-relaxed mb-6">
                We understand that when your technology works, your business works. That's why we focus on 
                preventing problems before they happen, responding quickly when issues arise, and building 
                long-term partnerships based on trust and accountability.
              </p>
              <p className="text-lg text-text-light leading-relaxed mb-6">
                Our commitment extends beyond fixing problems—we're invested in your business continuity and 
                success. We take responsibility for your IT so you can focus on what matters most: growing 
                your business and serving your customers.
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
                The principles that guide how we serve our clients
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
                  Your business depends on technology that works consistently. We build systems and processes 
                  that you can count on, day in and day out. Reliability isn't optional—it's our foundation.
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
                  We're not just a vendor—we're your IT partner. We invest in understanding your business, 
                  building relationships that last, and taking ownership of your IT success. Your growth is our success.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">Accountability</h3>
                <p className="text-text-light">
                  We take responsibility for your IT infrastructure. When something goes wrong, we own it and fix it. 
                  No excuses, no blame-shifting—just solutions and continuous improvement.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">Proactive Approach</h3>
                <p className="text-text-light">
                  We prevent problems before they impact your business. Through continuous monitoring, regular 
                  maintenance, and proactive security measures, we keep your systems running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Supporting Small to Medium Businesses
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-text-light leading-relaxed">
                We specialize in serving small and medium businesses that need professional IT management 
                without the overhead of a full IT department. Our clients range from growing startups to 
                established companies with 10 to 200 employees.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                We understand the unique challenges SMBs face: limited budgets, growing technology needs, 
                and the critical importance of uptime. That's why we offer predictable monthly pricing, 
                comprehensive support, and a partnership approach that scales with your business.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                Our focus is on business continuity. We ensure your technology supports your operations, 
                protects your data, and enables your growth—all while giving you peace of mind that your 
                IT is in capable hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help manage your IT and support your business growth.
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
