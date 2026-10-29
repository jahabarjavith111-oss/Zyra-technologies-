import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { WORKPLACE_FAQS } from "@/lib/faqs";
import { PAGE_SEO, canonical, faqSchema, OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO["workplace-safety"].title,
  description: PAGE_SEO["workplace-safety"].description,
  keywords: PAGE_SEO["workplace-safety"].keywords,
  alternates: { canonical: canonical(PAGE_SEO["workplace-safety"].path) },
  openGraph: {
    title: PAGE_SEO["workplace-safety"].title,
    description: PAGE_SEO["workplace-safety"].description,
    url: canonical(PAGE_SEO["workplace-safety"].path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ZELDA employee safety app for workplaces in India" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO["workplace-safety"].title,
    description: PAGE_SEO["workplace-safety"].description,
    images: [OG_IMAGE],
  },
};

const USE_CASES = [
  ["Late-shift travel", "Staff leaving after dark get an alarm that carries live location to the response team, without needing to explain where they are."],
  ["Field and site work", "Employees working alone or off-site can raise a case with recorded context instead of a description from memory."],
  ["Client-facing roles", "Sales and support staff meeting unfamiliar clients have a discreet way to signal distress and keep a record."],
  ["Complaint escalation", "An internal harassment or safety report becomes a tracked case with evidence, status and an owner."],
];

const ROLES = [
  ["Employees", "Install the app, register with your organisation, raise an SOS in one tap. A short cancellation window prevents accidental alarms."],
  ["Responders", "Security, HR or a nominated response team see incoming cases on a browser dashboard with live location and evidence."],
  ["Leadership", "Case status and closure are visible, so safety reporting stops depending on individual recollection."],
];

export default function WorkplaceSafetyPage() {
  const seo = PAGE_SEO["workplace-safety"];
  const path = seo.path;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical(path)}#service`,
    name: "ZELDA Employee Safety App",
    serviceType: "Employee safety software",
    description: seo.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    audience: { "@type": "Audience", audienceType: "Employers and workplace safety teams" },
    url: canonical(path),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Workplace Safety", item: canonical(path) },
    ],
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Workplace Safety", href: canonical(path) },
  ];

  return (
    <main>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema(WORKPLACE_FAQS)]} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="ZELDA · Workplace Safety"
        title="Workplace Safety App for Employees in India"
        desc="An employee safety app that gives your response team live location, recorded evidence and case status — instead of a phone call and a guess."
      />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="card-ring rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  Safety policy is not the same as safety response
                </h2>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  Most organisations have a safety policy and a committee. What
                  they often do not have is a way for an employee in difficulty to
                  reach a responder in seconds, with enough context for that
                  responder to act.
                </p>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  ZELDA closes that gap. An employee raises an alarm from their
                  phone; the nominated response team sees a live case on a browser
                  dashboard — location streaming, evidence recording, status
                  tracked until closure.
                </p>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  It was designed first as a women safety system, which is why the
                  evidence and location handling are built in rather than bolted
                  on. ZyraTec is based in Trichy, Tamil Nadu, and demonstrated
                  ZELDA publicly in Tiruchirappalli in March 2026.
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
                  WHAT RESPONDERS GET
                </div>
                <ul className="mt-4 space-y-3 text-[14.5px] leading-7 text-muted">
                  <li>· One-tap SOS with a cancellation window</li>
                  <li>· Live GPS streaming while the case is open</li>
                  <li>· Automatic video evidence recording</li>
                  <li>· Real-time case delivery and status</li>
                  <li>· Role-based access to cases and evidence</li>
                </ul>
                <div className="mt-6 text-[12px] font-semibold tracking-[0.24em] text-faint">
                  DEPLOYMENT
                </div>
                <p className="mt-2 text-[14.5px] leading-7 text-muted">
                  Android and iOS app for staff; browser dashboard for responders.
                  Configured per organisation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <p className="eyebrow">Where it helps</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Situations that need more than a hotline
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {USE_CASES.map(([title, body], i) => (
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
            <p className="eyebrow">Three roles, one system</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Who does what
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ROLES.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
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
            <div className="card-ring rounded-2xl p-8 sm:p-10">
              <p className="eyebrow">Piloting it</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Prove the response before you scale it
              </h2>
              <p className="mt-4 max-w-3xl text-[15.5px] leading-8 text-muted">
                We configure ZELDA for your organisation, onboard one team and
                your nominated responders, and run it for an agreed period. You
                review how cases were raised, delivered and closed before deciding
                whether to extend it to the rest of the company.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-ink px-7 py-3.5 text-[14.5px] font-semibold text-paper hover:opacity-85"
                >
                  Discuss a workplace pilot →
                </Link>
                <Link
                  href="/campus-safety"
                  className="rounded-full border border-line px-7 py-3.5 text-[14.5px] font-semibold text-ink hover:border-accent/50"
                >
                  Safety for campuses
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={WORKPLACE_FAQS} title="Workplace safety — frequently asked questions" />
      <CTABand title="Give your team a response, not just a policy." />
    </main>
  );
}
