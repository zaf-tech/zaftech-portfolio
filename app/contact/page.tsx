'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-grid-animated relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="decorative-blob w-96 h-96 -top-48 -left-48 pulse-glow"></div>
        <div className="decorative-blob w-80 h-80 -bottom-32 -right-32"></div>
        
        {/* Floating contact icons */}
        <div className="absolute top-32 right-20 w-14 h-14 text-accent-teal/20 float-icon hidden lg:block">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-16 w-12 h-12 text-accent-teal/15 float-icon hidden lg:block" style={{ animationDelay: '1.5s' }}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
            <div>
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto md:mx-0 rounded-full"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
                Request Your <span className="gradient-text-animated">Free IT Assessment</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-light max-w-2xl leading-relaxed">
                Talk to an MSP expert and discover how managed IT services can help your business
              </p>

              {/* Contact highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="text-left p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-accent-teal mb-2">Free</div>
                  <div className="text-sm text-text-light">No Obligation</div>
                </div>
                <div className="text-left p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-accent-teal mb-2">&lt;24hr</div>
                  <div className="text-sm text-text-light">Response Time</div>
                </div>
                <div className="text-left p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-accent-teal mb-2">Expert</div>
                  <div className="text-sm text-text-light">MSP Consultation</div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="absolute -top-8 -left-10 w-24 h-24 bg-accent-teal/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-10 w-28 h-28 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="relative overflow-hidden rounded-2xl bg-white/85 backdrop-blur shadow-2xl border border-accent-teal/15 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-accent-teal/10 pointer-events-none"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p className="text-sm font-medium text-text-light">Assessment pipeline · Secure intake</p>
                  </div>
                  <svg
                    viewBox="0 0 360 240"
                    className="w-full mb-4 text-accent-teal"
                    role="img"
                    aria-label="Assessment workflow illustration"
                  >
                    <defs>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#14B8A6" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                    <rect x="40" y="70" width="120" height="110" rx="14" fill="white" opacity="0.9" stroke="rgba(20,184,166,0.25)" strokeWidth="2" />
                    <rect x="200" y="70" width="120" height="110" rx="14" fill="white" opacity="0.9" stroke="rgba(37,99,235,0.25)" strokeWidth="2" />
                    <rect x="55" y="90" width="90" height="14" rx="7" fill="#14B8A6" opacity="0.15" />
                    <rect x="55" y="112" width="70" height="12" rx="6" fill="#14B8A6" opacity="0.1" />
                    <rect x="55" y="132" width="80" height="12" rx="6" fill="#2563EB" opacity="0.12" />
                    <rect x="55" y="152" width="65" height="12" rx="6" fill="#14B8A6" opacity="0.1" />

                    <rect x="215" y="90" width="90" height="14" rx="7" fill="#2563EB" opacity="0.15" />
                    <rect x="215" y="112" width="70" height="12" rx="6" fill="#14B8A6" opacity="0.12" />
                    <rect x="215" y="132" width="80" height="12" rx="6" fill="#2563EB" opacity="0.1" />
                    <rect x="215" y="152" width="65" height="12" rx="6" fill="#14B8A6" opacity="0.08" />

                    <path
                      d="M160 120 C190 120, 190 120, 220 120"
                      fill="none"
                      stroke="url(#flowGradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                    <circle cx="160" cy="120" r="10" fill="white" stroke="url(#flowGradient)" strokeWidth="4" />
                    <circle cx="220" cy="120" r="10" fill="white" stroke="url(#flowGradient)" strokeWidth="4" />
                    <circle cx="190" cy="120" r="14" fill="#14B8A6" opacity="0.2" />

                    <rect x="125" y="32" width="110" height="24" rx="12" fill="url(#flowGradient)" opacity="0.9" />
                    <text x="180" y="50" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Assessment Signal</text>
                  </svg>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Discovery</p>
                      <p className="text-base font-semibold text-primary">Intake Form</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Analysis</p>
                      <p className="text-base font-semibold text-primary">Rapid Review</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Plan</p>
                      <p className="text-base font-semibold text-primary">Roadmap</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
                      <p className="text-xs text-text-light">Security</p>
                      <p className="text-base font-semibold text-primary">Hardened</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="mb-6">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-2">
                  Schedule a Consultation
                </h2>
                <p className="text-text-light">
                  Fill out the form below and we'll get back to you within one business day to schedule 
                  your free IT assessment. Perfect for business owners, office managers, and operations managers.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Tell Us About Your IT Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="What IT challenges are you facing? What would you like to discuss in your assessment?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you for your request! We'll contact you within one business day to schedule your free IT assessment.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    Something went wrong. Please try again or email us directly at info@zaftech.com.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request Free IT Assessment'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-text-light">
                Prefer to reach out directly? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">Email</h3>
                <a
                  href="mailto:info@zaftech.com"
                  className="text-accent-teal hover:text-accent-teal/80 transition-colors"
                >
                  info@zaftech.com
                </a>
                <p className="text-sm text-text-light mt-2">We respond within one business day</p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">Service Area</h3>
                <p className="text-text-light">Remote and on-site support available</p>
                <p className="text-sm text-text-light mt-2">Serving businesses nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
