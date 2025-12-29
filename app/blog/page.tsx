import type { Metadata } from "next";
import { Suspense } from "react";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogListClient from "@/components/blog/BlogListClient";
import RecentPosts from "@/components/blog/RecentPosts";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description:
    "Insights on managed IT services, cybersecurity, cloud, and IT best practices for growing businesses.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Insights on managed IT services, cybersecurity, cloud, and IT best practices for growing businesses.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE_NAME}`,
    description:
      "Insights on managed IT services, cybersecurity, cloud, and IT best practices for growing businesses.",
  },
};

export default function BlogPage({
}: {}) {
  const posts = getAllBlogPosts();
  const recent = posts.slice(0, 5);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-pattern relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-teal/10 rounded-full mb-6 backdrop-blur-sm border border-accent-teal/20 w-fit">
              <div className="w-1.5 h-1.5 bg-accent-teal rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-accent-teal">
                Zaftech Blog
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Insights for modern IT
            </h1>
            <p className="mt-4 text-lg text-text-light leading-relaxed">
              Practical guidance on managed IT services, cybersecurity, cloud, and
              reliable infrastructure—built for growing businesses.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="card">
                    <p className="text-text-light">Loading posts…</p>
                  </div>
                }
              >
                <BlogListClient posts={posts} />
              </Suspense>

              <div className="mt-10">
                <BlogCTA />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <RecentPosts posts={recent} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
