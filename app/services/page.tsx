import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { SERVICES } from "@/lib/offerings";

import { PAGE_SEO, canonical, OG_IMAGE } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  keywords: PAGE_SEO.services.keywords,
  alternates: { canonical: canonical(PAGE_SEO.services.path) },
  openGraph: {
    title: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
    url: canonical(PAGE_SEO.services.path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ZYRA software development services" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
    images: [OG_IMAGE],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="What ZYRA Does"
        desc="Six engineering disciplines, one integrated team — scoped to outcomes, built for production."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 90}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-ring group block h-full rounded-2xl p-8 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] font-semibold tracking-widest text-accent">{s.n}</span>
                    <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">→</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-muted">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.points.slice(0, 4).map((p) => (
                      <span key={p} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[12.5px] text-muted">
                        {p}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand title="Not sure which service fits? Let's scope it together." />
    </main>
  );
}
