import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { SERVICES } from "@/lib/offerings";
import { canonical, faqSchema, OG_IMAGE, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

const SERVICE_KEYWORDS: Record<string, string> = {
  "ai-generative-ai":
    "AI development company India, remote AI development company, AI developing company remote, hire remote AI developers India, Generative AI services, LLM development, AI agents, RAG systems",
  "software-engineering":
    "software development company India, enterprise software development, full-stack development, API development",
  "data-analytics":
    "data analytics services India, data engineering, business intelligence, data platform",
  "cloud-devops":
    "cloud services India, DevOps services, AWS consulting, CI/CD, cloud migration",
  cybersecurity:
    "cybersecurity services India, application security, IAM, security audit",
  "digital-products":
    "SaaS development India, mobile app development, digital product development",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return { title: "Service — ZyraTec" };
  const path = `/services/${s.slug}`;
  const title = `${s.title} Services in India | ZyraTec`;
  const description = `${s.title} services by ZyraTec, a software company in Trichy, India. ${s.tagline}`;
  return {
    title,
    description,
    keywords: (SERVICE_KEYWORDS[s.slug] || s.title).split(",").map((k) => k.trim()),
    alternates: { canonical: canonical(path) },
    openGraph: {
      title,
      description,
      url: canonical(path),
      siteName: "ZyraTec",
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${s.title} — ZyraTec` }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${s.title} — ZyraTec`,
    description: `${s.desc} ${s.tagline}`,
    provider: {
      "@type": "Organization",
      name: "ZyraTec",
      url: SITE_URL,
    },
    areaServed: ["Tiruchirappalli", "Tamil Nadu", "India", "Worldwide"],
    url: canonical(path),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: canonical("/services") },
      { "@type": "ListItem", position: 3, name: s.title, item: canonical(path) },
    ],
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: `${s.title} Services in India`, href: canonical(`/services/${s.slug}`) },
  ];

  return (
    <main>
      <JsonLd data={[serviceSchema, breadcrumbSchema, ...(s.faqs ? [faqSchema(s.faqs)] : [])]} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero eyebrow={`Services in India · ${s.n}`} title={`${s.title} Services in India`} desc={s.tagline} />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="card-ring rounded-2xl p-8">
                <h2 className="font-display text-xl font-bold">Overview</h2>
                <p className="mt-3 text-[15.5px] leading-8 text-muted">{s.desc}</p>
                <p className="mt-4 text-[15px] leading-8 text-muted">
                  Delivered by ZyraTec — a software company in Trichy, Tamil Nadu
                  serving clients across India and worldwide. Every {s.title.toLowerCase()}{" "}
                  engagement is scoped to outcomes, built for production, and backed by
                  senior engineering review.
                </p>
                <h3 className="mt-7 font-display text-[16px] font-bold">What&apos;s included</h3>
                <ul className="mt-3 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[14.5px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">DELIVERABLES</div>
                  <ul className="mt-3 space-y-2 text-[14.5px] text-muted">
                    {s.deliverables.map((d) => (
                      <li key={d}>· {d}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">STACK</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <span key={t} className="rounded-full border border-line bg-paper px-3.5 py-1.5 font-mono text-[12.5px] text-ink">{t}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-paper hover:opacity-85">
                    Scope this service →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {s.faqs && s.faqs.length > 0 && (
        <FaqSection items={s.faqs} title={`${s.title} — frequently asked questions`} />
      )}
      <CTABand />
    </main>
  );
}
