export type BlogPostFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishDate: string; // ISO date string (YYYY-MM-DD)
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  coverImage?: string; // e.g. /images/blog/managed-it.svg
};

export type BlogPostSummary = BlogPostFrontmatter & {
  readingTimeMinutes: number;
};

export type BlogPost = BlogPostSummary & {
  contentMarkdown: string;
  contentHtml: string;
};
