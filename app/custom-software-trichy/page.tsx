import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { SERVICES } from "@/lib/offerings";
import { TRICHY_FAQS } from "@/lib/faqs";
import {
  ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
  PAGE_SEO,
  canonical,
  faqSchema,
  OG_IMAGE,
  SITE_URL,
} from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO["custom-software-trichy"].title,
  description: PAGE_SEO["custom-software-trichy"].description,
  keywords: PAGE_SEO["custom-software-trichy"].keywords,
  alternates: { canonical: canonical(PAGE_SEO["custom-software-trichy"].path) },
  openGraph: {
    title: PAGE_SEO["custom-software-trichy"].title,
    description: PAGE_SEO["custom-software-trichy"].description,
    url: canonical(PAGE_SEO["custom-software-trichy"].path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Custom software development in Trichy — ZyraTec" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO["custom-software-trichy"].title,
    description: PAGE_SEO["custom-software-trichy"].description,
    images: [OG_IMAGE],
  },
};

const PROCESS = [
  {
    step: "01",
    title: "Discovery & scoping",
    body: "We map the workflow you want to fix, the data involved and what success looks like — then agree a written scope with milestones before any code is written.",
  },
  {
    step: "02",
    title: "Architecture & plan",
    body: "Data model, integrations, security and deployment are decided up front, so the system can grow without a rewrite when usage increases.",
  },
  {
    step: "03",
    title: "Build in short releases",
    body: "Work ships in reviewed increments with a staging environment you can click through, so feedback arrives while changes are still cheap.",
  },
  {
    step: "04",
    title: "Launch & support",
    body: "We handle deployment, monitoring and handover documentation, then keep improving the system against agreed priorities.",
  },
];

const AUDIENCE = [
  ["Startups", "MVPs and SaaS products that need to reach real users without rebuilding later."],
  ["SMEs", "Internal tools, portals and dashboards that replace spreadsheets and manual follow-up."],
  ["Institutions", "Campus and workplace safety systems, reporting tools and administrative platforms."],
  ["Product teams", "Additional engineering capacity for AI features, data pipelines or platform work."],
];

export default function CustomSoftwareTrichyPage() {
  const seo = PAGE_SEO["custom-software-trichy"];
  const path = seo.path;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical(path)}#service`,
    name: "Custom Software Development in Trichy",
    serviceType: "Custom software development",
    description: seo.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Tiruchirappalli" },
      { "@type": "City", name: "Trichy" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    url: canonical(path),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Custom Software Development in Trichy", item: canonical(path) },
    ],
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Custom Software in Trichy", href: canonical(path) },
  ];

  return (
    <main>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema(TRICHY_FAQS)]} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Custom Software · Trichy"
        title="Custom Software Development in Trichy"
        desc="ZyraTec designs and builds custom software from Ammapettai, Tiruchirappalli — for businesses in Tamil Nadu and clients across India."
      />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="card-ring rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  Software built in Trichy, delivered across India
                </h2>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  Off-the-shelf tools assume your business works like everyone
                  else&apos;s. Custom software starts from how your team actually
                  operates — the approvals, the exceptions, the reports that
                  someone rebuilds by hand every month.
                </p>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  ZyraTec is a software company headquartered in Ammapettai,
                  Tiruchirappalli (Trichy), Tamil Nadu. We build web applications,
                  internal platforms, AI features, data pipelines and mobile apps —
                  and we run them in production rather than stopping at a demo.
                </p>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  Being based in Trichy means you can meet the team in person when
                  that helps, while our remote-first setup means delivery does not
                  depend on anyone&apos;s commute. The same team serves clients
                  across Tamil Nadu, the rest of India and overseas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OFFICE</div>
                  <address className="mt-3 not-italic text-[14.5px] leading-7 text-muted">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.city}
                    <br />
                    {ADDRESS.region} {ADDRESS.postalCode}, India
                  </address>
                  <p className="mt-3 text-[14px] text-muted">Mon–Sat · 9:00 AM – 10:00 PM IST</p>
                </div>
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">TALK TO US</div>
                  <div className="mt-3 flex flex-col gap-1.5 text-[14.5px] font-medium">
                    {CONTACT_PHONES.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="text-ink hover:text-accent">
                        {phone}
                      </a>
                    ))}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink hover:text-accent">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-paper hover:opacity-85"
                  >
                    Start a project →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we build
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-ring group block h-full rounded-2xl p-7 transition-all hover:-translate-y-1"
                >
                  <span className="font-mono text-[12.5px] font-semibold tracking-widest text-accent">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-muted">{s.tagline}</p>
                  <span className="mt-4 inline-block text-[13.5px] font-semibold text-ink group-hover:text-accent">
                    Explore →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <p className="eyebrow">Process</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How a project runs
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={(i % 2) * 90}>
                <div className="card-ring h-full rounded-2xl p-8">
                  <span className="font-mono text-[12.5px] font-semibold tracking-widest text-accent">{p.step}</span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <p className="eyebrow">Who we work with</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Teams we build for
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {AUDIENCE.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * 90}>
                <div className="card-ring h-full rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-4">
            <Link
              href="/case-studies/zelda-women-safety"
              className="card-ring group block rounded-2xl p-8 transition-all hover:-translate-y-1"
            >
              <p className="eyebrow">Related work</p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                ZELDA — women safety emergency response system
              </h3>
              <p className="mt-2 text-[14.5px] leading-7 text-muted">
                Built by ZyraTec: a Flutter app for users, a React dashboard for
                police and real-time case delivery. Publicly demonstrated in
                Tiruchirappalli in March 2026.
              </p>
              <span className="mt-4 inline-block text-[14px] font-semibold text-ink group-hover:text-accent">
                Read the case study →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection items={TRICHY_FAQS} title="Custom software in Trichy — FAQs" />
      <CTABand title="Have a workflow worth fixing? Let's scope it." />
    </main>
  );
}
