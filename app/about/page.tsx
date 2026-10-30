import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const VALUES = [
  ["Innovation", "We prototype early and learn fast."],
  ["Integrity", "We say what we'll do, then do it."],
  ["Engineering Excellence", "Clean architecture, tested code, documented systems."],
  ["Customer Focus", "Outcomes over output — every build ties to value."],
  ["Continuous Learning", "Research time is part of the job, not a perk."],
  ["Responsible Technology", "Secure, fair and transparent AI by default."],
];

import { PAGE_SEO, canonical, OG_IMAGE } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  keywords: PAGE_SEO.about.keywords,
  alternates: { canonical: canonical(PAGE_SEO.about.path) },
  openGraph: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    url: canonical(PAGE_SEO.about.path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "About ZyraTec" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    images: [OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ZyraTec Solutions"
        title="About ZyraTec Solutions — Software Company in Trichy"
        desc="ZyraTec Solutions is a technology company building intelligent digital solutions across software, AI, data and cloud — from Trichy, Tamil Nadu, India."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="card-ring h-full rounded-2xl p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR STORY</div>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  ZyraTec started with a simple belief — that intelligent
                  technology should be engineered, not improvised. From AI
                  systems to enterprise platforms, we&apos;re building a company
                  where research rigor meets delivery discipline.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR VISION</div>
                  <p className="mt-3 font-display text-xl font-bold leading-8">
                    Build technology that makes intelligence accessible, useful and scalable.
                  </p>
                </div>
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR MISSION</div>
                  <p className="mt-3 font-display text-xl font-bold leading-8">
                    Engineer intelligent digital solutions that create measurable value for businesses and people.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-4">
            <div className="card-ring rounded-2xl p-8">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
                OUR VALUES · ENGINEERING PHILOSOPHY
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {VALUES.map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-line bg-paper p-5">
                    <div className="font-display text-[15px] font-bold">{t}</div>
                    <p className="mt-1.5 text-[14px] leading-6 text-muted">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={140} className="mt-4">
            <div className="card-ring rounded-2xl p-8">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
                COMPANY FACTS
              </div>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-accent">Name</dt>
                  <dd className="mt-1 text-[14.5px] leading-7 text-muted">
                    ZyraTec, also written ZyraTec Solutions — a software and AI
                    company, unrelated to the allergy medicine Zyrtec.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-accent">Headquarters</dt>
                  <dd className="mt-1 text-[14.5px] leading-7 text-muted">
                    Ammapettai, Tiruchirappalli (Trichy) 620009, Tamil Nadu, India.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-accent">Founded by</dt>
                  <dd className="mt-1 text-[14.5px] leading-7 text-muted">
                    Bragatheesh V, Founder &amp; CEO, with Abdul Javid J as
                    Co-Founder &amp; CTO.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-accent">What we do</dt>
                  <dd className="mt-1 text-[14.5px] leading-7 text-muted">
                    AI &amp; generative AI, software engineering, data, cloud,
                    cybersecurity and digital products.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-accent">Product</dt>
                  <dd className="mt-1 text-[14.5px] leading-7 text-muted">
                    ZELDA, a women safety emergency response app with SOS, live
                    GPS and automatic evidence recording.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-accent">Working model</dt>
                  <dd className="mt-1 text-[14.5px] leading-7 text-muted">
                    Remote-first, serving clients across India and worldwide.
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
