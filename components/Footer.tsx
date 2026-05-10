import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-500/20">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/images/logo.svg"
              alt="Zaftech Logo"
              className="h-10 md:h-12 w-auto mb-4"
            />
            <p className="text-blue-300/60 mb-4 max-w-md leading-relaxed text-sm">
              Agentic AI enablement for enterprise. We deploy private LLMs,
              pre-orchestrated AI agents, and compliance-first AI adoption —
              replacing human-accuracy-dependent workflows with computer
              accuracy, securely and at speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-blue-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-blue-300/60 hover:text-blue-300 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-blue-200 mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-300/60 text-sm">
              <li>
                <a
                  href="mailto:info@zaftech.com"
                  className="hover:text-blue-300 transition-colors"
                >
                  info@zaftech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12898025001"
                  className="hover:text-blue-300 transition-colors"
                >
                  +1 (289) 802-5001
                </a>
              </li>
              <li>400 Applewood Crescent, Concord, ON L4K 0C3</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/20 mt-8 pt-8 text-center text-blue-300/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Zaftech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
