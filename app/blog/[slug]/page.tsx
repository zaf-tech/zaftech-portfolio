import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogCard from "@/components/blog/BlogCard";
import TagPill from "@/components/blog/TagPill";
import { formatPublishDate } from "@/lib/blog-format";
import {
  getAllBlogPostSlugs,
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const images = post.coverImage
    ? [{ url: `${SITE_URL}${post.coverImage}`, width: 1600, height: 900 }]
    : undefined;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: new Date(post.publishDate).toISOString(),
      authors: [post.author],
      tags: post.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: images?.map((i) => i.url),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedBlogPosts(post.slug, post.tags, 3);
  const recent = getAllBlogPosts().slice(0, 5);

  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.publishDate).toISOString(),
    dateModified: new Date(post.publishDate).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    image: post.coverImage ? `${SITE_URL}${post.coverImage}` : undefined,
    keywords: post.tags?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-medium text-accent hover:text-accent-teal transition-colors"
            >
              ← Back to Blog
            </Link>

            <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-primary leading-tight">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-light">
              <span>{formatPublishDate(post.publishDate)}</span>
              <span aria-hidden="true">•</span>
              <span>{post.readingTimeMinutes} min read</span>
              <span aria-hidden="true">•</span>
              <span>By {post.author}</span>
            </div>

            {post.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
            ) : null}
          </div>

          {post.coverImage ? (
            <div className="mt-10 card p-0 overflow-hidden">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </div>
          ) : null}

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <article className="lg:col-span-8">
              <div
                className="prose prose-slate max-w-none prose-headings:font-heading prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-teal prose-strong:text-primary prose-code:text-primary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="mt-10">
                <BlogCTA />
              </div>

              {related.length ? (
                <div className="mt-12">
                  <h2 className="text-2xl font-heading font-bold text-primary">
                    Related posts
                  </h2>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {related.map((p) => (
                      <BlogCard key={p.slug} post={p} />
                    ))}
                  </div>
                </div>
              ) : null}
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="card">
                  <h2 className="text-lg font-heading font-bold text-primary">
                    Recent posts
                  </h2>
                  <div className="mt-4 space-y-4">
                    {recent.map((p) => (
                      <div key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="block text-sm font-semibold text-primary hover:text-accent-teal transition-colors"
                        >
                          {p.title}
                        </Link>
                        <div className="mt-1 text-xs text-text-light">
                          {formatPublishDate(p.publishDate)} • {p.readingTimeMinutes} min
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
