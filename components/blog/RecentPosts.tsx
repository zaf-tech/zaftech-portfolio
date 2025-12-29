import Link from "next/link";
import type { BlogPostSummary } from "@/lib/blog-types";
import { formatPublishDate } from "@/lib/blog-format";

export default function RecentPosts({
  posts,
  title = "Recent posts",
}: {
  posts: BlogPostSummary[];
  title?: string;
}) {
  return (
    <aside className="card">
      <h2 className="text-lg font-heading font-bold text-primary">{title}</h2>
      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <div key={post.slug} className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="block text-sm font-semibold text-primary group-hover:text-accent-teal transition-colors"
            >
              {post.title}
            </Link>
            <div className="mt-1 text-xs text-text-light">
              {formatPublishDate(post.publishDate)} • {post.readingTimeMinutes} min
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
