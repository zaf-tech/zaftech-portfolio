import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-pattern">
      <div className="container-custom">
        <div className="card max-w-2xl">
          <h1 className="text-2xl font-heading font-bold text-primary">
            Blog post not found
          </h1>
          <p className="mt-3 text-text-light">
            The article you’re looking for doesn’t exist (or was moved).
          </p>
          <div className="mt-6">
            <Link href="/blog" className="btn-primary inline-block">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
