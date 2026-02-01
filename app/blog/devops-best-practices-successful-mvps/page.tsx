import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: Record<string, any> = {
  "devops-best-practices-successful-mvps": {
    title: "DevOps Best Practices for Successful MVPs",
    date: "February 1, 2026",
    category: "DevOps",
    author: "ZAFTECH Team",
    readTime: "8 min read",
    content: `
      <p>Building a successful Minimum Viable Product (MVP) requires balancing speed with stability. Implementing core DevOps practices can streamline development, improve reliability, and accelerate feedback loops.</p>

      <h2>1. Infrastructure as Code (IaC)</h2>
      <p>Define and manage your infrastructure using code. Tools like Terraform or CloudFormation ensure environments are reproducible, version-controlled, and easily shared among team members.</p>

      <h2>2. Continuous Integration (CI)</h2>
      <p>Automate builds and tests on every code commit. CI pipelines catch issues early, enforce code quality, and provide fast feedback to developers.</p>

      <h2>3. Continuous Delivery (CD)</h2>
      <p>Extend CI by automating deployments to staging environments. This practice reduces manual errors, speeds up delivery, and ensures your MVP is always deployable.</p>

      <h2>4. Monitoring and Logging</h2>
      <p>Equip your MVP with basic monitoring and logging. Visibility into application performance and errors lets you respond quickly to issues in production.</p>

      <h2>5. Feature Flags</h2>
      <p>Use feature flags to control which features are released. This enables safe experimentation, A/B testing, and quick rollbacks without redeploying code.</p>

      <h2>6. Collaboration and Communication</h2>
      <p>Foster a culture where developers and operations work closely. Shared responsibility and clear communication channels reduce friction and speed up problem resolution.</p>

      <h2>Conclusion</h2>
      <p>By adopting these DevOps best practices, you’ll build a more reliable MVP, accelerate delivery, and lay the foundation for scalable growth as your product evolves.</p>
    `
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-900">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="container-custom max-w-4xl">
        <header className="mb-12">
          <div className="mb-4">
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
        <div className="prose prose-lg max-w-none mb-16 text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
