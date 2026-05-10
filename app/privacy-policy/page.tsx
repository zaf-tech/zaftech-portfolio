export const metadata = {
  title: "Privacy Policy | Zaftech",
  description:
    "Learn how Zaftech collects, uses, protects, and retains personal information in accordance with applicable Canadian privacy laws.",
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "May 9, 2026";

  return (
    <div>
      <section className="relative overflow-hidden py-20 md:py-24 bg-slate-950/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-slate-950/50"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">
                Privacy Policy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blue-200 mb-6 leading-tight max-w-4xl">
              How Zaftech Protects Your Data
            </h1>

            <p className="text-xl md:text-2xl text-blue-300/70 max-w-3xl leading-relaxed mb-8">
              We collect and use personal information only for the purposes you
              provide it to us, including research and development, service
              delivery, and business communication. We do not sell personal
              information or client data to third parties.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Effective Date", value: effectiveDate },
                { label: "Data Use", value: "Research and development only" },
                { label: "Sharing", value: "No sale of personal data" },
              ].map(({ label, value }) => (
                <div key={label} className="card">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-400/60 mb-2">
                    {label}
                  </p>
                  <p className="text-lg font-semibold text-blue-200 leading-snug">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="card space-y-4">
              <p className="text-blue-200 font-semibold text-lg">
                We are committed to handling personal information in a manner
                that is transparent, secure, and consistent with applicable
                Canadian privacy law, including PIPEDA and related provincial
                requirements where applicable.
              </p>
              <p className="text-blue-300/70 leading-relaxed">
                This policy explains what information we collect, how we use it,
                how we protect it, and the choices available to you when you
                interact with the Zaftech website, contact forms, and related
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-950/15">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-blue-300/70 leading-relaxed">
                <p>
                  We may collect information you submit directly, such as your
                  name, email address, company name, and message when you use
                  our contact or assessment forms.
                </p>
                <p>
                  We may also collect limited technical information that helps
                  us operate, secure, and improve the website, such as browser
                  type, device information, pages visited, and approximate
                  usage patterns.
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-blue-300/70 leading-relaxed">
                <p>We use personal information only for legitimate business purposes, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Responding to your inquiries and scheduling consultations.</li>
                  <li>Delivering the services or information you request.</li>
                  <li>Researching, designing, and improving our products and services.</li>
                  <li>Protecting the website from fraud, abuse, and security threats.</li>
                  <li>Meeting legal, regulatory, and record-keeping obligations.</li>
                </ul>
                <p>
                  When you share your interests or project details with us, we
                  use that information to support research and development
                  activities that are directly related to your request.
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                3. No Sale of Personal Information
              </h2>
              <div className="space-y-4 text-blue-300/70 leading-relaxed">
                <p>
                  Zaftech does not sell, rent, or trade personal information or
                  business information to third parties.
                </p>
                <p>
                  If we use service providers to help operate the website or
                  deliver communications, they are only permitted to process
                  data on our instructions and for the limited purpose of
                  supporting Zaftech. They may not use your data for their own
                  marketing or independent commercial purposes.
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                4. Data Protection and Security
              </h2>
              <div className="space-y-4 text-blue-300/70 leading-relaxed">
                <p>
                  We use administrative, technical, and physical safeguards to
                  protect personal information against unauthorized access,
                  disclosure, alteration, or destruction.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access controls and least-privilege handling.</li>
                  <li>Encrypted transport where supported by the platform.</li>
                  <li>Monitoring for unusual or suspicious activity.</li>
                  <li>Secure retention and disposal practices.</li>
                </ul>
                <p>
                  No online system is completely risk-free, but we work to
                  maintain safeguards that are appropriate to the sensitivity
                  of the information we process.
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                5. Retention and Deletion
              </h2>
              <p className="text-blue-300/70 leading-relaxed">
                We keep personal information only for as long as it is needed to
                fulfill the purpose for which it was collected, to comply with
                legal obligations, or to resolve disputes and enforce agreements.
                When information is no longer required, we take steps to delete
                or anonymize it in a secure manner.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                6. Canadian Privacy Law
              </h2>
              <div className="space-y-4 text-blue-300/70 leading-relaxed">
                <p>
                  Zaftech aims to handle personal information in accordance with
                  applicable Canadian privacy legislation, including the
                  Personal Information Protection and Electronic Documents Act
                  (PIPEDA) and any applicable provincial law.
                </p>
                <p>
                  If you have questions about how your information is handled or
                  wish to request access, correction, or deletion where
                  available, please contact us using the details below.
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                7. Your Choices and Rights
              </h2>
              <div className="space-y-4 text-blue-300/70 leading-relaxed">
                <p>You may contact us to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ask what personal information we hold about you.</li>
                  <li>Request corrections to inaccurate information.</li>
                  <li>Withdraw consent where consent is the basis for processing.</li>
                  <li>Ask us to stop using your information for non-essential communications.</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                8. Contact Us
              </h2>
              <div className="space-y-3 text-blue-300/70 leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy or want to
                  exercise your privacy rights, contact Zaftech at:
                </p>
                <p className="text-blue-200 font-medium">Email: info@zaftech.com</p>
                <p className="text-blue-200 font-medium">Phone: +1 (289) 802-5001</p>
                <p className="text-blue-200 font-medium">
                  Address: 400 Applewood Crescent, Concord, ON L4K 0C3
                </p>
              </div>
            </div>

            <div className="card border-blue-400/40 bg-gradient-to-br from-blue-500/15 to-slate-900/60">
              <h2 className="text-2xl font-heading font-semibold text-blue-200 mb-4">
                9. Policy Updates
              </h2>
              <p className="text-blue-300/70 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements, or website
                features. The updated version will be posted on this page with a
                revised effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}