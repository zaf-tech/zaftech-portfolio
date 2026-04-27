import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkAnimation from "@/components/NetworkAnimation";

export const metadata: Metadata = {
  title:
    "Zaftech - Agentic AI Enablement | Private LLMs, AI Agents & Compliance",
  description:
    "From human accuracy to computer accuracy. Zaftech deploys private LLMs, pre-orchestrated AI agents, and compliance-first AI adoption for enterprise — secure, production-ready, weeks to deploy.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans relative bg-slate-950">
        {/* Fixed background network animation */}
        <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
          <NetworkAnimation />
        </div>
        
        {/* Content wrapper with proper z-index */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
