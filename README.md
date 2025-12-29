# Zaftech Portfolio Website

A modern, professional IT consulting website built with Next.js and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Project Structure

- `/app` - Next.js app router pages
- `/components` - Reusable React components
- `/public` - Static assets

## Blog

The blog is filesystem-backed (no external CMS) and lives under:

- `/app/blog` - Blog listing page
- `/app/blog/[slug]` - Blog detail page
- `/content/blog` - Markdown posts with frontmatter

### Add a new blog post

1. Create a new Markdown file in `/content/blog`.
	 - The filename should match the `slug` (example: `my-post.md` for `slug: "my-post"`).
2. Include frontmatter fields:

```md
---
title: "My Post Title"
slug: "my-post"
excerpt: "Short summary used on the blog listing."
author: "Zaftech Team"
publishDate: "2025-12-29"
tags:
	- "Managed IT"
	- "Security"
metaTitle: "My Post Title | Zaftech Blog"
metaDescription: "SEO description for search and social previews."
coverImage: "/images/blog/managed-it.svg"
---

Your Markdown content goes here...
```

Notes:
- Reading time is calculated automatically.
- New posts are statically generated at build time via `generateStaticParams()`.
