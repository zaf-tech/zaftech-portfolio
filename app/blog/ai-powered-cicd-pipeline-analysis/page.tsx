'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogPost() {
  const [activeId, setActiveId] = useState("problem");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem', 'costs', 'solution', 'results', 'roi'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top < 200) {
          setActiveId(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div className="h-full bg-gradient-to-r from-accent via-accent-teal to-primary w-0" style={{ width: "100%" }} />
      </div>

      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">CI/CD Cost Optimization</span>
        </div>
      </div>

      <div className="container-custom max-w-5xl">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-accent to-accent-teal text-white">
              DevOps Strategy
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Cut Your Cloud Costs by 60% in 90 Days
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            An executive guide to AI-powered pipeline optimization for CTOs
          </p>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div>February 18, 2026</div>
            <div>5 min read</div>
            <div>4 key takeaways</div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1 order-last lg:order-first">
            <nav className="sticky top-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-primary mb-4">Quick Nav</h3>
              <ul className="space-y-3">
                {[
                  { id: 'problem', label: 'The Problem' },
                  { id: 'costs', label: 'Hidden Costs' },
                  { id: 'solution', label: 'The Solution' },
                  { id: 'results', label: 'Real Results' },
                  { id: 'roi', label: 'ROI Breakdown' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className={`text-sm transition-all ${
                        activeId === item.id
                          ? 'text-accent font-semibold'
                          : 'text-gray-700 hover:text-accent'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-2 space-y-12">
            {/* Problem Section */}
            <section id="problem" className="scroll-mt-32">
              <h2 className="text-4xl font-bold text-primary mb-6">The Hidden Cost Leak</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-bold">You&apos;re losing money you don&apos;t see.</span> Most engineering teams waste 30-50% of their pipeline and infrastructure budget on redundant builds, unused storage, and configuration failures.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">35%</div>
                  <div className="text-xs text-gray-600">of incidents from drift</div>
                </div>
                <div className="bg-white border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">80%</div>
                  <div className="text-xs text-gray-600">artifacts unused</div>
                </div>
                <div className="bg-white border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">60%</div>
                  <div className="text-xs text-gray-600">cost waste typical</div>
                </div>
              </div>

              <p className="text-gray-700">
                This isn&apos;t from bad architecture. It&apos;s from lack of visibility. You can&apos;t optimize what you can&apos;t see.
              </p>
            </section>

            {/* Costs Breakdown */}
            <section id="costs" className="scroll-mt-32">
              <h2 className="text-4xl font-bold text-primary mb-6">Where the Money Goes</h2>

              <div className="space-y-4">
                {/* Cost 1 */}
                <div className="bg-white border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🔨</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Redundant Builds</h3>
                      <p className="text-gray-600 text-sm mb-2">Same code rebuilt 60% of the time due to poor caching</p>
                      <div className="text-accent font-semibold">20-30% of compute cost</div>
                    </div>
                  </div>
                </div>

                {/* Cost 2 */}
                <div className="bg-white border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💾</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Wasted Storage</h3>
                      <p className="text-gray-600 text-sm mb-2">Untagged images, failed builds, unused artifacts</p>
                      <div className="text-accent font-semibold">40-50% of storage cost</div>
                    </div>
                  </div>
                </div>

                {/* Cost 3 */}
                <div className="bg-white border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⚠️</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Drift-Related Outages</h3>
                      <p className="text-gray-600 text-sm mb-2">Undetected config mismatches cause preventable incidents</p>
                      <div className="text-accent font-semibold">$5-15K per incident</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Solution */}
            <section id="solution" className="scroll-mt-32">
              <h2 className="text-4xl font-bold text-primary mb-6">The Solution: Intelligence</h2>

              <p className="text-gray-700 mb-8">
                AI-powered analysis reveals what&apos;s happening in your pipelines. Once you see it, you can optimize it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Insight 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">1️⃣</div>
                  <h3 className="font-bold text-gray-900 mb-2">Commit Intelligence</h3>
                  <p className="text-sm text-gray-700">Understand which commits waste resources, predict loads, optimize builds</p>
                </div>

                {/* Insight 2 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">2️⃣</div>
                  <h3 className="font-bold text-gray-900 mb-2">Drift Detection</h3>
                  <p className="text-sm text-gray-700">Continuous monitoring alerts to config mismatches before they break production</p>
                </div>

                {/* Insight 3 */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">3️⃣</div>
                  <h3 className="font-bold text-gray-900 mb-2">Storage Optimization</h3>
                  <p className="text-sm text-gray-700">Intelligent cleanup policies automatically delete 70-85% of unused artifacts</p>
                </div>

                {/* Insight 4 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">4️⃣</div>
                  <h3 className="font-bold text-gray-900 mb-2">Executive Dashboards</h3>
                  <p className="text-sm text-gray-700">Real-time visibility into costs, performance, and optimization opportunities</p>
                </div>
              </div>
            </section>

            {/* Real Results */}
            <section id="results" className="scroll-mt-32">
              <h2 className="text-4xl font-bold text-primary mb-6">Real-World Results</h2>

              <div className="bg-gradient-to-r from-accent to-accent-teal text-white rounded-lg p-8 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-1">60%</div>
                    <div className="text-sm opacity-90">Cost reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">4 wks</div>
                    <div className="text-sm opacity-90">Time to implement</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">78%</div>
                    <div className="text-sm opacity-90">Fewer incidents</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">30%</div>
                    <div className="text-sm opacity-90">Faster deploys</div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary p-6 bg-gray-50 rounded">
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">Mid-sized SaaS company (40 engineers, 5 services):</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">Month 1:</span>
                    <span>Smart caching → $2,400/mo savings (20%)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">Month 2:</span>
                    <span>Drift detection → Prevented 3 outages (3% savings)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">Month 3:</span>
                    <span>Storage cleanup → Deleted 84% of artifacts (40% savings)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">Month 4:</span>
                    <span>Team awareness → Additional optimizations (5% savings)</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded border-l-4 border-accent">
                  <p className="text-gray-900 font-bold">Final: $12,000 → $4,800/month</p>
                  <p className="text-sm text-gray-600">$86,400 annual savings</p>
                </div>
              </div>
            </section>

            {/* ROI */}
            <section id="roi" className="scroll-mt-32 pb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">The Business Case</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border rounded-lg p-6">
                  <div className="text-sm text-gray-600 mb-2">Implementation Cost</div>
                  <div className="text-3xl font-bold text-gray-900">$15,000</div>
                  <div className="text-xs text-gray-500 mt-2">3 weeks senior engineer</div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <div className="text-sm text-gray-600 mb-2">Monthly Savings</div>
                  <div className="text-3xl font-bold text-accent">$7,200</div>
                  <div className="text-xs text-gray-500 mt-2">40-60% cost reduction typical</div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <div className="text-sm text-gray-600 mb-2">Payback Period</div>
                  <div className="text-3xl font-bold text-primary">2.1 mo</div>
                  <div className="text-xs text-gray-500 mt-2">Breakeven in 2 months</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Why This Matters</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-green-600 text-lg">✓</span>
                    <span><span className="font-bold">Immediate ROI:</span> Positive within month 1, significant by month 3</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 text-lg">✓</span>
                    <span><span className="font-bold">Low Risk:</span> Conservative policies, easy rollback</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 text-lg">✓</span>
                    <span><span className="font-bold">Multiple Benefits:</span> Lower costs + better reliability + faster deploys</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 text-lg">✓</span>
                    <span><span className="font-bold">Ongoing Savings:</span> $86K+/year ongoing benefit</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white border rounded-lg">
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">Next Steps:</span>
                </p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Calculate your current monthly cloud spend</li>
                  <li>2. Estimate waste % (typically 30-50%)</li>
                  <li>3. Schedule a 30-min audit call</li>
                  <li>4. Start with storage optimization (fastest win)</li>
                </ol>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent to-accent-teal rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Optimize?</h3>
              <p className="mb-6 opacity-90">Let&apos;s discuss your specific situation and find quick wins.</p>
              <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-accent font-semibold rounded hover:shadow-lg transition-all"
              >
                Schedule a Call
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}