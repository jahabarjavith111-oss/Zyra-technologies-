import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { CAMPUS_FAQS } from "@/lib/faqs";
import { PAGE_SEO, canonical, faqSchema, OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO["campus-safety"].title,
  description: PAGE_SEO["campus-safety"].description,
  keywords: PAGE_SEO["campus-safety"].keywords,
  alternates: { canonical: canonical(PAGE_SEO["campus-safety"].path) },
  openGraph: {
    title: PAGE_SEO["campus-safety"].title,
    description: PAGE_SEO["campus-safety"].description,
    url: canonical(PAGE_SEO["campus-safety"].path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ZELDA campus safety software for colleges in India" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO["campus-safety"].title,
    description: PAGE_SEO["campus-safety"].description,
    images: [OG_IMAGE],
  },
};

const FLOW = [
  {
    step: "01",
    title: "Student raises an alarm",
    body: "One tap in the ZELDA app starts an SOS. There is a short cancellation window, so an accidental press does not create a false case.",
  },
  {
    step: "02",
    title: "Location streams live",
    body: "GPS updates stream continuously while the case is open, so the security desk sees where the student is now — not where they were when they called.",
  },
  {
    step: "03",
    title: "Evidence is recorded",
    body: "After the countdown the app records audio and video automatically. Response decisions are backed by recorded context instead of recollection.",
  },
  {
    step: "04",
    title: "The case reaches the desk",
    body: "The case appears on the campus dashboard in real time with status, location and evidence in a single view, and stays open until it is closed.",
  },
];

const GAPS = [
  ["A call gives one data point", "A phone call states a problem once. It cannot show movement, and the caller may not be able to speak at all."],
  ["Paper registers lag", "Registers and WhatsApp groups record incidents after the fact — they are not a response mechanism."],
  ["Evidence is contested later", "Without a recording, incidents become one account against another, which is slow and unfair to everyone."],
  ["Nobody knows who is responding", "When an alarm is raised in a group chat, ownership is unclear and follow-up is unverifiable."],
];

export default function CampusSafetyPage() {
  const seo = PAGE_SEO["campus-safety"];
  const path = seo.path;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical(path)}#service`,
    name: "ZELDA Campus Safety Software",
    serviceType: "Campus safety software",
    description: seo.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    audience: { "@type": "Audience", audienceType: "Colleges, universities and residential campuses" },
    url: canonical(path),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Campus Safety", item: canonical(path) },
    ],
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Campus Safety", href: canonical(path) },
  ];

  return (
    <main>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema(CAMPUS_FAQS)]} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="ZELDA · Campus Safety"
        title="Campus Safety Software for Colleges in India"
        desc="ZELDA gives students a one-tap alarm and gives your security desk live location, recorded evidence and case status — in one dashboard."
      />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="card-ring rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  The minutes before help arrives
                </h2>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  Campus safety usually works until it is tested. A student in
                  trouble calls a number, describes a location they may not know
                  precisely, and waits while security works out where to go. In
                  that gap, the incident has already moved.
                </p>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  ZELDA changes what the responding team receives. Instead of a
                  single static report, the security desk gets a live case:
                  continuous location, recorded evidence and a status they can
                  act on and close out.
                </p>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  ZELDA is built by ZyraTec, a software company in Trichy, Tamil
                  Nadu, and was publicly demonstrated in Tiruchirappalli in March
                  2026. The same system is what we configure for a campus.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-paper hover:opacity-85"
                  >
                    See ZELDA features →
                  </Link>
                  <Link
                    href="/case-studies/zelda-women-safety"
                    className="rounded-full border border-line px-6 py-3 text-[14px] font-semibold text-ink hover:border-accent/50"
                  >
                    Read the case study
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-ring h-full rounded-2xl p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">
                  WHO IT IS FOR
                </div>
                <ul className="mt-4 space-y-3 text-[14.5px] leading-7 text-muted">
                  <li>· Engineering, arts and science colleges</li>
                  <li>· Universities with distributed campuses</li>
                  <li>· Hostels and residential blocks</li>
                  <li>· Institutions running late-evening classes or events</li>
                  <li>· Campus security and anti-harassment cells</li>
                </ul>
                <div className="mt-6 text-[12px] font-semibold tracking-[0.24em] text-faint">
                  WORKS ON
                </div>
                <p className="mt-2 text-[14.5px] leading-7 text-muted">
                  Android and iOS for students; any modern browser for the
                  security dashboard. No dedicated hardware.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <p className="eyebrow">Why registers fail</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What a phone call cannot tell you
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {GAPS.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * 90}>
                <div className="card-ring h-full rounded-2xl p-7">
                  <h3 className="font-display text-[16px] font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From alarm to closed case
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FLOW.map((f, i) => (
              <Reveal key={f.step} delay={(i % 2) * 90}>
                <div className="card-ring h-full rounded-2xl p-8">
                  <span className="font-mono text-[12.5px] font-semibold tracking-widest text-accent">{f.step}</span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="card-ring rounded-2xl p-8 sm:p-10">
              <p className="eyebrow">Running a pilot</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Start with one block, then decide
              </h2>
              <p className="mt-4 max-w-3xl text-[15.5px] leading-8 text-muted">
                We do not ask a campus to roll out to every student on day one. A
                pilot is scoped with you: we configure the campus, onboard a group
                of students and your security staff, run it for an agreed period
                and review the response data together. The decision to expand is
                made on evidence, not on a slide deck.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-ink px-7 py-3.5 text-[14.5px] font-semibold text-paper hover:opacity-85"
                >
                  Discuss a campus pilot →
                </Link>
                <Link
                  href="/workplace-safety"
                  className="rounded-full border border-line px-7 py-3.5 text-[14.5px] font-semibold text-ink hover:border-accent/50"
                >
                  Safety for workplaces
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={CAMPUS_FAQS} title="Campus safety — frequently asked questions" />
      <CTABand title="Bring verifiable safety to your campus." />
    </main>
  );
}
