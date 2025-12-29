import Image from "next/image";
import Link from "next/link";
import type { BlogPostSummary } from "@/lib/blog-types";
import { formatPublishDate } from "@/lib/blog-format";

export default function BlogCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="card p-0 overflow-hidden">
      {post.coverImage ? (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
      ) : null}

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-light">
          <span>{formatPublishDate(post.publishDate)}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>

        <h3 className="mt-3 text-xl font-heading font-bold text-primary leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-accent-teal transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-text-light leading-relaxed">{post.excerpt}</p>

        {post.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-text"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5">
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-accent hover:text-accent-teal transition-colors"
          >
            Read article →
          </Link>
        </div>
      </div>
    </article>
  );
}
