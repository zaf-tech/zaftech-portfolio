import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkAnimation from "@/components/NetworkAnimation";
import JsonLd from "@/components/JsonLd";
import ChatWidget from "@/components/ChatWidget";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zaftech",
  "url": "https://zaftech.ca",
  "logo": "https://zaftech.ca/images/logo.svg",
  "description":
    "Enterprise AI enablement company specializing in private LLMs, agentic AI agents, and compliance-first AI adoption for Canadian enterprises.",
  "areaServed": { "@type": "Country", "name": "Canada" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://zaftech.ca/contact",
  },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://zaftech.ca"),
  title: {
    default: "Zaftech — Enterprise AI Consulting Canada",
    template: "%s | Zaftech",
  },
  description:
    "From human accuracy to computer accuracy. Zaftech deploys private LLMs, pre-orchestrated AI agents, and compliance-first AI adoption for Canadian enterprises — secure, production-ready, weeks to deploy.",
  openGraph: {
    type: "website",
    siteName: "Zaftech",
    title: "Zaftech — Enterprise AI Consulting Canada",
    description:
      "From human accuracy to computer accuracy. Zaftech deploys private LLMs, pre-orchestrated AI agents, and compliance-first AI adoption for Canadian enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaftech — Enterprise AI Consulting Canada",
    description:
      "From human accuracy to computer accuracy. Zaftech deploys private LLMs, pre-orchestrated AI agents, and compliance-first AI adoption for Canadian enterprises.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans relative bg-slate-950">
        <JsonLd data={organizationSchema as Record<string, unknown>} />
        <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
          <NetworkAnimation />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <ChatWidget />
      </body>
    </html>
  );
}
