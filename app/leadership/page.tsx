import PageHero from "@/components/PageHero";
import Leadership from "@/components/Leadership";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { TEAM } from "@/lib/company";

import { PAGE_SEO, canonical, collectionSchema, OG_IMAGE } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO.leadership.title,
  description: PAGE_SEO.leadership.description,
  keywords: PAGE_SEO.leadership.keywords,
  alternates: { canonical: canonical(PAGE_SEO.leadership.path) },
  openGraph: {
    title: PAGE_SEO.leadership.title,
    description: PAGE_SEO.leadership.description,
    url: canonical(PAGE_SEO.leadership.path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ZyraTec leadership" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO.leadership.title,
    description: PAGE_SEO.leadership.description,
    images: [OG_IMAGE],
  },
};

export default function LeadershipPage() {
  return (
    <main>
      <JsonLd
        data={collectionSchema({
          name: "ZyraTec Leadership",
          description: PAGE_SEO.leadership.description,
          path: PAGE_SEO.leadership.path,
          items: TEAM.map((m) => ({
            name: `${m.name} — ${m.role}`,
            url: canonical(`/leadership/${m.slug}`),
          })),
        })}
      />
      <PageHero
        eyebrow="Leadership"
        title="ZyraTec Leadership — Trichy, India"
        desc="A leadership team spanning vision, technology, marketing and people — converging on future products and solutions."
      />
      <Leadership />
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="card-ring rounded-3xl p-8 text-center sm:p-10">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
                HOW WE WORK
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-paper p-5">
                  <div className="font-display text-[15px] font-bold">BRAGATHEESH V</div>
                  <div className="mt-1 text-[13px] text-accent">Founder &amp; CEO</div>
                  <p className="mt-2 text-[13px] leading-6 text-muted">
                    Vision &amp; Strategy · Business · Partnerships · Operations
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-paper p-5">
                  <div className="font-display text-[15px] font-bold">ABDUL JAVID J</div>
                  <div className="mt-1 text-[13px] text-accent">Co-Founder &amp; CTO</div>
                  <p className="mt-2 text-[13px] leading-6 text-muted">
                    Technology · AI &amp; GenAI · Engineering · Architecture
                  </p>
                </div>
              </div>
              <div className="mx-auto my-4 h-8 w-px bg-gradient-to-b from-accent/60 to-accent/10" />
              <div className="mx-auto max-w-md rounded-xl border border-accent/40 bg-accent-soft p-5">
                <div className="font-display text-[15px] font-bold tracking-[0.18em]">
                  ZyraTec
                </div>
                <p className="mt-1 text-[13px] text-muted">
                  Future Products &amp; Solutions
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand title="Want to build with this team?" />
    </main>
  );
}
