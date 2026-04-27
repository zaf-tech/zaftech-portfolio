'use client'

import { useState, useEffect, useRef } from 'react'

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formStartTime = useRef<number>(Date.now())
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LfidJ0lAAAAAL4-TfVe8XzBYmJE8JVMi5VODdIU'
    script.async = true
    script.onload = () => setRecaptchaLoaded(true)
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

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

    try {
      if (honeypot) return
      if (Date.now() - formStartTime.current < 3000) return

      // Try to get reCAPTCHA token but don't fail if it's not available
      let token = ''
      try {
        if (recaptchaLoaded && window.grecaptcha) {
          token = await window.grecaptcha.execute('6LfidJ0lAAAAAL4-TfVe8XzBYmJE8JVMi5VODdIU', { action: 'submit' })
        }
      } catch (e) {
        console.warn('reCAPTCHA failed, continuing without it:', e)
      }

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_2tts6ss',
          template_id: 'template_48dxotx',
          user_id: 'twMo2tgZz4h52ii85',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            message: formData.message,
            to_name: 'Zaftech Team',
          },
        }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error('EmailJS Error:', errorData)
        throw new Error(`Failed to send: ${errorData}`)
      }
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      formStartTime.current = Date.now()
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Full Error Details:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="section relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">
                  Book an Assessment
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blue-200 mb-6 leading-tight">
                Book Your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                  AI Enablement Assessment
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-300/70 max-w-2xl leading-relaxed">
                Talk to our AI experts and discover where computer accuracy can
                replace your most costly human workflows
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {[
                  { label: "Complimentary", sub: "Expert Consultation" },
                  { label: "Confidential", sub: "Your Data Stays Safe" },
                  { label: "Expert", sub: "AI Engineering Team" },
                ].map(({ label, sub }) => (
                  <div key={label} className="p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-blue-500/30">
                    <div className="text-xl font-heading font-bold text-blue-300 mb-1">{label}</div>
                    <div className="text-sm text-blue-400/60">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-blue-500/30 p-8 shadow-2xl shadow-blue-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <p className="text-sm font-medium text-blue-400/60">AI Assessment Pipeline · Secure</p>
                </div>
                <svg
                  viewBox="0 0 360 240"
                  className="w-full mb-4"
                  role="img"
                  aria-label="Assessment workflow illustration"
                >
                  <defs>
                    <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3D8CFF" />
                      <stop offset="100%" stopColor="#64C8FF" />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="70" width="120" height="110" rx="14" fill="rgba(30,40,80,0.8)" stroke="rgba(61,140,255,0.3)" strokeWidth="2" />
                  <rect x="200" y="70" width="120" height="110" rx="14" fill="rgba(30,40,80,0.8)" stroke="rgba(100,200,255,0.3)" strokeWidth="2" />
                  <rect x="55" y="90" width="90" height="14" rx="7" fill="#3D8CFF" opacity="0.3" />
                  <rect x="55" y="112" width="70" height="12" rx="6" fill="#64C8FF" opacity="0.2" />
                  <rect x="55" y="132" width="80" height="12" rx="6" fill="#3D8CFF" opacity="0.2" />
                  <rect x="55" y="152" width="65" height="12" rx="6" fill="#64C8FF" opacity="0.15" />
                  <rect x="215" y="90" width="90" height="14" rx="7" fill="#64C8FF" opacity="0.3" />
                  <rect x="215" y="112" width="70" height="12" rx="6" fill="#3D8CFF" opacity="0.2" />
                  <rect x="215" y="132" width="80" height="12" rx="6" fill="#64C8FF" opacity="0.2" />
                  <rect x="215" y="152" width="65" height="12" rx="6" fill="#3D8CFF" opacity="0.15" />
                  <path d="M160 120 C190 120, 190 120, 220 120" fill="none" stroke="url(#flowGradient2)" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
                  <circle cx="160" cy="120" r="10" fill="rgba(30,40,80,0.9)" stroke="url(#flowGradient2)" strokeWidth="4" />
                  <circle cx="220" cy="120" r="10" fill="rgba(30,40,80,0.9)" stroke="url(#flowGradient2)" strokeWidth="4" />
                  <rect x="120" y="32" width="120" height="24" rx="12" fill="url(#flowGradient2)" opacity="0.8" />
                  <text x="180" y="48" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">AI Assessment</text>
                </svg>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { sub: "Discovery", label: "Intake Form" },
                    { sub: "Analysis", label: "Rapid Review" },
                    { sub: "Plan", label: "AI Roadmap" },
                    { sub: "Security", label: "Compliance Check" },
                  ].map(({ sub, label }) => (
                    <div key={label} className="p-3 rounded-xl bg-slate-900/60 border border-blue-500/20">
                      <p className="text-xs text-blue-400/50">{sub}</p>
                      <p className="text-sm font-semibold text-blue-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-slate-950/15">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="mb-6">
                <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-2">
                  Book an AI Enablement Assessment
                </h2>
                <p className="text-blue-300/70 text-sm leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you within one
                  business day to schedule your free AI assessment.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-blue-200 placeholder-blue-400/30 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-blue-200 placeholder-blue-400/30 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-300 mb-2">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-blue-200 placeholder-blue-400/30 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-2">Tell Us About Your AI Goals *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-blue-200 placeholder-blue-400/30 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 outline-none transition-all resize-none"
                    placeholder="What workflows do you want to automate? What accuracy or compliance challenges are you facing?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-blue-500/20 border border-blue-400/40 rounded-lg text-blue-200">
                    Thank you! We&apos;ll contact you within one business day to schedule your AI enablement assessment.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-400/40 rounded-lg text-red-300">
                    Something went wrong. Please try again or email us directly at info@zaftech.ca.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed py-4 text-base font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Book AI Enablement Assessment'}
                </button>

                <p className="text-xs text-center text-blue-400/40 mt-2">
                  Protected by reCAPTCHA v3.{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-blue-400/60 hover:underline">Privacy</a>
                  {" & "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener" className="text-blue-400/60 hover:underline">Terms</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section bg-slate-950/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-blue-300/70">
                Prefer to reach out directly? We&apos;re here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mx-auto mb-4 border border-blue-500/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-blue-200 mb-2">Email</h3>
                <a href="mailto:info@zaftech.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  info@zaftech.com
                </a>
                <p className="text-sm text-blue-400/50 mt-2">We respond within one business day</p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 mx-auto mb-4 border border-blue-500/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-blue-200 mb-2">Service Area</h3>
                <p className="text-blue-300/70">Remote and on-site support available</p>
                <p className="text-sm text-blue-400/50 mt-2">Serving enterprises nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
