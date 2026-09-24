import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zyra.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZYRA Technologies — Engineering Intelligence. Building What's Next.",
    template: "%s | ZYRA Technologies",
  },
  description:
    "ZYRA Technologies builds intelligent software, AI systems, digital products and technology solutions across AI, Software, Data, Cloud and Cybersecurity.",
  openGraph: {
    type: "website",
    siteName: "ZYRA Technologies",
    title: "ZYRA Technologies — Engineering Intelligence. Building What's Next.",
    description:
      "AI · Software · Data · Cloud · Cybersecurity · Digital Products. We build intelligent systems for the next generation of businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRA Technologies",
    description: "Engineering Intelligence. Building What's Next.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
