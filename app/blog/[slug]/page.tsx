import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
  "cybersecurity-best-practices-2026": {
    title: "Top Cybersecurity Best Practices for 2026",
    date: "January 5, 2026",
    category: "Cybersecurity",
    author: "ZAFTECH Team",
    readTime: "5 min read",
    content: `
      <p>In 2026, cybersecurity remains a critical concern for businesses of all sizes. As threats continue to evolve, staying ahead with robust security practices is essential.</p>

      <h2>1. Multi-Factor Authentication (MFA)</h2>
      <p>Implementing MFA across all business systems is no longer optional—it's a necessity. This adds an extra layer of security beyond passwords, making it significantly harder for attackers to gain unauthorized access.</p>

      <h2>2. Regular Security Audits</h2>
      <p>Conducting quarterly security audits helps identify vulnerabilities before they can be exploited. This includes penetration testing, vulnerability scanning, and compliance reviews.</p>

      <h2>3. Employee Training</h2>
      <p>Human error remains the weakest link in cybersecurity. Regular training sessions help employees recognize phishing attempts, social engineering tactics, and other common threats.</p>

      <h2>4. Zero Trust Architecture</h2>
      <p>Adopting a zero trust approach means verifying every access request, regardless of whether it originates inside or outside your network perimeter.</p>

      <h2>5. Endpoint Protection</h2>
      <p>With remote work becoming the norm, securing all endpoints—laptops, mobile devices, and IoT devices—is critical. Deploy advanced endpoint detection and response (EDR) solutions.</p>

      <h2>Conclusion</h2>
      <p>Cybersecurity is an ongoing journey, not a destination. By implementing these best practices and partnering with experienced MSPs like ZAFTECH, you can significantly reduce your risk exposure and protect your business assets.</p>
    `
  },
  "cloud-migration-guide": {
    title: "Complete Guide to Cloud Migration for SMBs",
    date: "January 3, 2026",
    category: "Cloud Computing",
    author: "ZAFTECH Team",
    readTime: "7 min read",
    content: `
      <p>Cloud migration can transform your business operations, but it requires careful planning and execution. This guide walks you through the essential steps.</p>

      <h2>Why Migrate to the Cloud?</h2>
      <p>Cloud computing offers scalability, cost savings, enhanced collaboration, and improved disaster recovery capabilities. For SMBs, these benefits can be game-changing.</p>

      <h2>Phase 1: Assessment</h2>
      <p>Start by inventorying your current infrastructure, applications, and data. Identify which workloads are suitable for cloud migration and which might need to remain on-premises.</p>

      <h2>Phase 2: Planning</h2>
      <p>Develop a comprehensive migration strategy. Choose your cloud provider (AWS, Azure, Google Cloud), select the right services, and create a detailed timeline.</p>

      <h2>Phase 3: Migration</h2>
      <p>Execute your migration in stages, starting with non-critical applications. This allows you to identify and address issues before migrating mission-critical systems.</p>

      <h2>Phase 4: Optimization</h2>
      <p>Once migrated, continuously monitor and optimize your cloud resources. Right-size your instances, implement cost management tools, and leverage cloud-native services.</p>

      <h2>Common Challenges</h2>
      <ul>
        <li>Data security and compliance concerns</li>
        <li>Legacy application compatibility</li>
        <li>Staff training and change management</li>
        <li>Cost management and budget overruns</li>
      </ul>

      <p>ZAFTECH specializes in seamless cloud migrations that minimize downtime and maximize ROI. Contact us for a free cloud readiness assessment.</p>
    `
  },
  "ai-business-automation": {
    title: "AI-Powered Business Automation: Getting Started",
    date: "December 28, 2025",
    category: "AI Solutions",
    author: "ZAFTECH Team",
    readTime: "6 min read",
    content: `
      <p>Artificial Intelligence is revolutionizing how businesses operate. From customer service to data analysis, AI can automate routine tasks and provide valuable insights.</p>

      <h2>Understanding AI in Business Context</h2>
      <p>AI encompasses machine learning, natural language processing, computer vision, and predictive analytics. Each has unique applications in business automation.</p>

      <h2>Key Areas for AI Implementation</h2>
      <h3>Customer Service</h3>
      <p>AI-powered chatbots can handle routine inquiries 24/7, freeing your team to focus on complex issues that require human touch.</p>

      <h3>Data Analysis</h3>
      <p>Machine learning algorithms can process vast amounts of data to identify patterns, trends, and anomalies that humans might miss.</p>

      <h3>Process Automation</h3>
      <p>Robotic Process Automation (RPA) combined with AI can handle repetitive tasks like data entry, invoice processing, and report generation.</p>

      <h2>Getting Started with AI</h2>
      <ol>
        <li>Identify processes that consume significant time and resources</li>
        <li>Start with a pilot project to prove ROI</li>
        <li>Ensure your data infrastructure is AI-ready</li>
        <li>Train your team on AI tools and best practices</li>
        <li>Continuously measure and optimize performance</li>
      </ol>

      <h2>Partnering for Success</h2>
      <p>ZAFTECH helps businesses navigate their AI journey with customized solutions that align with your specific needs and goals.</p>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-teal
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
            prose-li:text-gray-700 prose-li:mb-2
            prose-strong:text-primary prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent-teal/5 rounded-xl border border-primary/10">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">
            Need Help with Your IT Infrastructure?
          </h3>
          <p className="text-gray-700 mb-6">
            ZAFTECH provides comprehensive managed IT services, cybersecurity solutions, 
            cloud computing, and AI enablement. Let's discuss how we can help your business thrive.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Consultation
          </Link>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-teal font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
