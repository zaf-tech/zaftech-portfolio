import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="card group cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-500/10 to-blue-400/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">
              {post.category === "Cybersecurity" && "🛡️"}
              {post.category === "Cloud Computing" && "☁️"}
              {post.category === "AI Solutions" && "🤖"}
              {post.category === "Managed IT" && "⚙️"}
              {post.category === "DevOps" && "🔄"}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 w-fit mb-3">
            {post.category}
          </span>

          <h3 className="text-xl font-heading font-bold text-blue-200 mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-blue-300/60 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-blue-400/50 pt-4 border-t border-blue-500/20">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-blue-500/20">
          <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors flex items-center gap-2 text-sm">
            Read Article
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
