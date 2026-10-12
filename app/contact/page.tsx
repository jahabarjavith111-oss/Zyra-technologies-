import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

import { PAGE_SEO, canonical, OG_IMAGE } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  keywords: PAGE_SEO.contact.keywords,
  alternates: { canonical: canonical(PAGE_SEO.contact.path) },
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: canonical(PAGE_SEO.contact.path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Contact ZYRA Technologies" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Intelligent"
        desc="Have a problem worth solving? Tell us about it — we reply within 2 business days."
      />
      <Contact />
    </main>
  );
}
