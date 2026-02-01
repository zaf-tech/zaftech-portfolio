import Link from "next/link";
import BlogCard from "@/components/BlogCard";

// Sample blog posts data
const blogPosts = [
  {
    slug: "devops-best-practices-successful-mvps",
    title: "DevOps Best Practices for Successful MVPs",
    excerpt: "Implement core DevOps practices to streamline your MVP development and delivery.",
    date: "February 1, 2026",
    category: "DevOps",
    image: "/images/blog/devops-mvp.jpg",
    author: "ZAFTECH Team",
    readTime: "8 min read"
  },

  {
    slug: "cybersecurity-best-practices-2026",
    title: "Top Cybersecurity Best Practices for 2026",
    excerpt: "Discover the latest cybersecurity strategies to protect your business from evolving threats in the digital landscape.",
    date: "January 5, 2026",
    category: "Cybersecurity",
    image: "/images/blog/cybersecurity.jpg",
    author: "ZAFTECH Team",
    readTime: "5 min read"
  },
  {
    slug: "cloud-migration-guide",
    title: "Complete Guide to Cloud Migration for SMBs",
    excerpt: "Learn how to seamlessly migrate your business infrastructure to the cloud with minimal downtime and maximum efficiency.",
    date: "January 3, 2026",
    category: "Cloud Computing",
    image: "/images/blog/cloud.jpg",
    author: "ZAFTECH Team",
    readTime: "7 min read"
  },
  {
    slug: "ai-business-automation",
    title: "AI-Powered Business Automation: Getting Started",
    excerpt: "Explore how artificial intelligence can streamline your operations and boost productivity across your organization.",
    date: "December 28, 2025",
    category: "AI Solutions",
    image: "/images/blog/ai.jpg",
    author: "ZAFTECH Team",
    readTime: "6 min read"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-accent/5 to-accent-teal/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Stay updated with the latest trends in cybersecurity, cloud computing, 
              AI solutions, and managed IT services.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-5 py-2 rounded-full bg-primary text-white font-medium hover:shadow-lg transition-all">
                All Posts
              </button>
              <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:border-primary hover:text-primary transition-all">
                Cybersecurity
              </button>
              <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:border-primary hover:text-primary transition-all">
                Cloud Computing
              </button>
              <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:border-primary hover:text-primary transition-all">
                AI Solutions
              </button>
              <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:border-primary hover:text-primary transition-all">
                Managed IT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gradient-to-br from-primary via-accent to-accent-teal">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Get the latest IT insights and tips delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:shadow-xl transition-all hover:scale-105"
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
