'use client';

import Link from "next/link";
import { useState } from "react";

const post = {
  title: "DevOps Best Practices for Successful MVPs",
  date: "February 1, 2026",
  category: "DevOps",
  author: "ZAFTECH Team",
  readTime: "8 min read",
  image: "/images/blog/devops-mvp.jpg",
  highlights: [
    "Infrastructure as Code (IaC)",
    "Continuous Integration (CI)",
    "Continuous Delivery (CD)",
    "Monitoring and Logging",
    "Feature Flags",
    "Collaboration and Communication"
  ],
  content: [
    {
      title: "Infrastructure as Code (IaC)",
      body: "Define and manage your infrastructure using code. Tools like Terraform or CloudFormation ensure environments are reproducible, version-controlled, and easily shared among team members."
    },
    {
      title: "Continuous Integration (CI)",
      body: "Automate builds and tests on every code commit. CI pipelines catch issues early, enforce code quality, and provide fast feedback to developers."
    },
    {
      title: "Continuous Delivery (CD)",
      body: "Extend CI by automating deployments to staging environments. This practice reduces manual errors, speeds up delivery, and ensures your MVP is always deployable."
    },
    {
      title: "Monitoring and Logging",
      body: "Equip your MVP with basic monitoring and logging. Visibility into application performance and errors lets you respond quickly to issues in production."
    },
    {
      title: "Feature Flags",
      body: "Use feature flags to control which features are released. This enables safe experimentation, A/B testing, and quick rollbacks without redeploying code."
    },
    {
      title: "Collaboration and Communication",
      body: "Foster a culture where developers and operations work closely. Shared responsibility and clear communication channels reduce friction and speed up problem resolution."
    }
  ],
  conclusion:
    "By adopting these DevOps best practices, you’ll build a more reliable MVP, accelerate delivery, and lay the foundation for scalable growth as your product evolves."
};

export default function BlogPost() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="container-custom max-w-4xl">
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <div className="w-24 h-24 rounded-xl object-cover border border-gray-200 shadow bg-gradient-to-br from-accent to-accent-teal flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-accent to-accent-teal text-white">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Highlights Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-accent">Key DevOps Practices</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {post.highlights.map((item, idx) => (
              <li key={idx} className="bg-accent/10 border-l-4 border-accent px-4 py-3 rounded shadow-sm text-primary font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Content Section */}
        <section className="prose prose-lg max-w-none mb-16 text-gray-700">
          <p>Building a successful Minimum Viable Product (MVP) requires balancing speed with stability. Implementing core DevOps practices can streamline development, improve reliability, and accelerate feedback loops.</p>
          {post.content.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-bold text-accent-teal mb-2">{section.title}</h3>
              <p>{section.body}</p>
            </div>
          ))}
          <h3 className="text-xl font-bold text-primary mt-10 mb-2">Conclusion</h3>
          <p>{post.conclusion}</p>
        </section>

        {/* Interactive Feedback Section */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2 text-accent">Was this article helpful?</h2>
          {!submitted ? (
            <form onSubmit={handleFeedback} className="flex flex-col gap-2 max-w-md">
              <textarea
                className="border border-gray-300 rounded p-2 resize-none focus:outline-accent"
                rows={3}
                placeholder="Share your feedback or questions..."
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                required
              />
              <button type="submit" className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-teal transition-colors font-semibold">Submit</button>
            </form>
          ) : (
            <div className="text-green-600 font-medium">Thank you for your feedback!</div>
          )}
        </section>
      </article>
    </main>
  );
}
