import Link from "next/link";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    slug: "ai-powered-cicd-pipeline-analysis",
    title: "AI-Powered CI/CD Pipeline Analysis: How Smart Dashboards Cut Cloud Costs by 60%",
    excerpt: "Learn how AI-powered pipeline analysis and intelligent dashboards reduce cloud costs by 60% while improving deployment efficiency and detecting infrastructure drift.",
    date: "February 18, 2026",
    category: "DevOps",
    image: "/images/blog/cicd-ai-analysis.jpg",
    author: "ZAFTECH Team",
    readTime: "12 min read",
  },
  {
    slug: "devops-best-practices-successful-mvps",
    title: "DevOps Best Practices for Successful MVPs",
    excerpt: "Implement core DevOps practices to streamline your MVP development and delivery.",
    date: "February 1, 2026",
    category: "DevOps",
    image: "/images/blog/devops-mvp.jpg",
    author: "ZAFTECH Team",
    readTime: "8 min read",
  },
  {
    slug: "cybersecurity-best-practices-2026",
    title: "Top Cybersecurity Best Practices for 2026",
    excerpt: "Discover the latest cybersecurity strategies to protect your business from evolving threats in the digital landscape.",
    date: "January 5, 2026",
    category: "Cybersecurity",
    image: "/images/blog/cybersecurity.jpg",
    author: "ZAFTECH Team",
    readTime: "5 min read",
  },
  {
    slug: "cloud-migration-guide",
    title: "Complete Guide to Cloud Migration for SMBs",
    excerpt: "Learn how to seamlessly migrate your business infrastructure to the cloud with minimal downtime and maximum efficiency.",
    date: "January 3, 2026",
    category: "Cloud Computing",
    image: "/images/blog/cloud.jpg",
    author: "ZAFTECH Team",
    readTime: "7 min read",
  },
  {
    slug: "ai-business-automation",
    title: "AI-Powered Business Automation: Getting Started",
    excerpt: "Explore how artificial intelligence can streamline your operations and boost productivity across your organization.",
    date: "December 28, 2025",
    category: "AI Solutions",
    image: "/images/blog/ai.jpg",
    author: "ZAFTECH Team",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">
                Insights & Resources
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blue-200 mb-6">
              AI Enablement Insights
            </h1>
            <p className="text-lg md:text-xl text-blue-300/70 mb-8 leading-relaxed">
              Expert perspectives on agentic AI, private LLMs, compliance
              frameworks, and the future of computer accuracy in enterprise
              workflows.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-5 py-2 rounded-full bg-blue-500/30 text-blue-200 font-medium border border-blue-400/40 transition-all hover:bg-blue-500/40">
                All Posts
              </button>
              {["Cybersecurity", "Cloud Computing", "AI Solutions", "DevOps"].map((cat) => (
                <button
                  key={cat}
                  className="px-5 py-2 rounded-full bg-slate-800/60 text-blue-300/70 border border-blue-500/20 font-medium hover:border-blue-400/50 hover:text-blue-200 transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/80">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-slate-950/90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-200 mb-4">
              Stay Ahead of AI Adoption
            </h2>
            <p className="text-lg mb-8 text-blue-300/70">
              Get the latest AI enablement insights, private LLM updates, and
              compliance guides delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-slate-800/80 text-blue-200 placeholder-blue-400/40 border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
              />
              <button
                type="submit"
                className="btn-primary px-8 py-3 rounded-lg font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
