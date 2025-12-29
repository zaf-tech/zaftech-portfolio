import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="card bg-gradient-to-br from-primary to-primary-dark text-white border-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Ready for better IT?
          </h2>
          <p className="mt-2 text-white/80 max-w-2xl">
            Get a free IT consultation and learn how Zaftech can reduce downtime,
            improve security, and keep your team productive.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary">
            Get Free IT Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
