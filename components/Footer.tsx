import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/images/logo.svg"
              alt="Zaftech Logo"
              className="h-10 md:h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Managed IT services provider offering proactive monitoring,
              helpdesk support, cybersecurity, and cloud management. We manage
              your IT so you can focus on your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:info@zaftech.com"
                  className="hover:text-white transition-colors"
                >
                  info@zaftech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1 (289) 632-5658"
                  className="hover:text-white transition-colors"
                >
                  +1 (289) 802-5001
                </a>
              </li>
              <li>400 Applewood Crescent, Concord, On L4K 0C3</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Zaftech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
