import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { SOLUTIONS } from "@/lib/offerings";

import { PAGE_SEO, canonical, OG_IMAGE } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO.solutions.title,
  description: PAGE_SEO.solutions.description,
  keywords: PAGE_SEO.solutions.keywords,
  alternates: { canonical: canonical(PAGE_SEO.solutions.path) },
  openGraph: {
    title: PAGE_SEO.solutions.title,
    description: PAGE_SEO.solutions.description,
    url: canonical(PAGE_SEO.solutions.path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ZyraTec business technology solutions" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO.solutions.title,
    description: PAGE_SEO.solutions.description,
    images: [OG_IMAGE],
  },
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Solutions for Modern Businesses"
        desc="Packaged outcomes, not hourly tasks — each solution ships with scope, timeline and success metrics."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 90}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="card-ring group block h-full rounded-2xl p-8 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] font-semibold tracking-widest text-accent">{s.n}</span>
                    <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">→</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-muted">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[14px] text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {p}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
