import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";
import type { BlogPost, BlogPostFrontmatter, BlogPostSummary } from "@/lib/blog-types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getBlogFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"));
}

function normalizeSlug(slug: string): string {
  return slug.trim().toLowerCase();
}

function toIntReadingMinutes(text: string): number {
  const stats = readingTime(text);
  return Math.max(1, Math.round(stats.minutes));
}

function parseFrontmatter(raw: unknown, fallbackSlug: string): BlogPostFrontmatter {
  if (!raw || typeof raw !== "object") {
    throw new Error(`Invalid frontmatter for blog post: ${fallbackSlug}`);
  }

  const data = raw as Partial<BlogPostFrontmatter>;

  const title = data.title?.toString().trim();
  const slug = normalizeSlug((data.slug ?? fallbackSlug).toString());
  const excerpt = data.excerpt?.toString().trim();
  const author = data.author?.toString().trim();
  const publishDate = data.publishDate?.toString().trim();
  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => t.toString().trim()).filter(Boolean)
    : [];
  const metaTitle = data.metaTitle?.toString().trim();
  const metaDescription = data.metaDescription?.toString().trim();
  const coverImage = data.coverImage?.toString().trim() || undefined;

  if (!title || !excerpt || !author || !publishDate || !metaTitle || !metaDescription) {
    throw new Error(
      `Missing required frontmatter fields for blog post: ${fallbackSlug}`
    );
  }

  // Basic date sanity check (will still accept valid ISO-ish formats)
  const parsed = new Date(publishDate);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid publishDate for blog post: ${fallbackSlug}`);
  }

  return {
    title,
    slug,
    excerpt,
    author,
    publishDate: parsed.toISOString().slice(0, 10),
    tags,
    metaTitle,
    metaDescription,
    coverImage,
  };
}

export function getAllBlogPostSlugs(): string[] {
  return getBlogFiles().map((fileName) => fileName.replace(/\.(md|mdx)$/, ""));
}

export function getAllBlogPosts(): BlogPostSummary[] {
  const files = getBlogFiles();

  const posts = files.map((fileName) => {
    const filePath = path.join(BLOG_DIR, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const slugFromFile = fileName.replace(/\.(md|mdx)$/, "");

    const parsed = matter(fileContents);
    const frontmatter = parseFrontmatter(parsed.data, slugFromFile);

    return {
      ...frontmatter,
      readingTimeMinutes: toIntReadingMinutes(parsed.content),
    } satisfies BlogPostSummary;
  });

  return posts.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const normalized = normalizeSlug(slug);

  const mdPath = path.join(BLOG_DIR, `${normalized}.md`);
  const mdxPath = path.join(BLOG_DIR, `${normalized}.mdx`);

  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;
  if (!filePath) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContents);
  const frontmatter = parseFrontmatter(parsed.data, normalized);

  const processed = await remark().use(html).process(parsed.content);
  const contentHtml = processed.toString();

  return {
    ...frontmatter,
    readingTimeMinutes: toIntReadingMinutes(parsed.content),
    contentMarkdown: parsed.content,
    contentHtml,
  };
}

export function getRelatedBlogPosts(
  currentSlug: string,
  tags: string[],
  limit = 3
): BlogPostSummary[] {
  const all = getAllBlogPosts().filter((p) => p.slug !== normalizeSlug(currentSlug));

  const scored = all
    .map((post) => {
      const overlap = post.tags.filter((t) => tags.includes(t)).length;
      return { post, overlap };
    })
    .filter(({ overlap }) => overlap > 0)
    .sort((a, b) => (a.overlap === b.overlap ? (a.post.publishDate < b.post.publishDate ? 1 : -1) : b.overlap - a.overlap))
    .slice(0, limit)
    .map(({ post }) => post);

  return scored;
}

export { formatPublishDate } from "@/lib/blog-format";
