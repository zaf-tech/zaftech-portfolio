"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { BlogPostSummary } from "@/lib/blog-types";
import BlogCard from "@/components/blog/BlogCard";
import TagPill from "@/components/blog/TagPill";
import Pagination from "@/components/blog/Pagination";

const POSTS_PER_PAGE = 6;

export default function BlogListClient({
  posts,
}: {
  posts: BlogPostSummary[];
}) {
  const searchParams = useSearchParams();
  const urlTag = searchParams.get("tag") ?? undefined;

  const [activeTag, setActiveTag] = useState<string | undefined>(urlTag);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setActiveTag(urlTag);
    setPage(1);
  }, [urlTag]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const p of posts) for (const t of p.tags ?? []) set.add(t);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((p) => (p.tags ?? []).includes(activeTag));
  }, [posts, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);

  const pagePosts = useMemo(() => {
    const start = (safePage - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, safePage]);

  function setTag(tag?: string) {
    setActiveTag(tag);
    setPage(1);
  }

  return (
    <div className="space-y-8">
      {allTags.length ? (
        <div className="flex flex-wrap gap-2">
          <TagPill tag="All" active={!activeTag} onClick={() => setTag(undefined)} />
          {allTags.map((tag) => (
            <TagPill
              key={tag}
              tag={tag}
              active={activeTag === tag}
              onClick={() => setTag(tag)}
            />
          ))}
        </div>
      ) : null}

      {pagePosts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pagePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="card">
          <p className="text-text-light">No posts found.</p>
        </div>
      )}

      <Pagination page={safePage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
