import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Zaftech - Managed IT Services Provider | Proactive IT Support & Monitoring",
  description:
    "Managed IT services for growing businesses. Proactive monitoring, helpdesk support, cybersecurity, and cloud management. Predictable monthly IT management so you can focus on your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
