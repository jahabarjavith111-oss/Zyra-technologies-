import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Page Not Found — ZyraTec",
  robots: { index: false, follow: true },
};

const LINKS = [
  { label: "Back to Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ZELDA Women Safety App", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow="404"
        title="This page doesn't exist."
        desc="The link may be outdated or mistyped. Use the links below to find what you need — or tell us what you were looking for."
      />
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-16 sm:px-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-paper-2 px-6 py-3 text-[14.5px] font-semibold text-ink transition-colors hover:border-accent/50"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </section>
      <CTABand title="Still can't find it?" desc="Send us a message and we'll point you in the right direction." />
    </main>
  );
}
