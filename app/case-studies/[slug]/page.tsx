import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CASES } from "@/lib/company";
import { canonical, OG_IMAGE, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return { title: "Case Study — ZYRA Technologies" };
  const path = `/case-studies/${c.slug}`;
  const title = c.slug === "zelda-women-safety"
    ? "ZELDA Women Safety App Case Study — SOS, Live GPS & Police Dashboard | ZYRA"
    : `${c.title} Case Study — ${c.subtitle} | ZYRA Technologies`;
  const description = c.slug === "zelda-women-safety"
    ? "How ZYRA built ZELDA, a women safety app in India: one-tap SOS, live GPS streaming, automatic evidence recording and a real-time police dashboard. Showcased to 200 attendees in Trichy."
    : `${c.title}: ${c.subtitle}. Problem, solution, technology and impact by ZYRA Technologies, India.`;
  return {
    title,
    description,
    alternates: { canonical: canonical(path) },
    openGraph: {
      title,
      description,
      url: canonical(path),
      siteName: "ZYRA Technologies",
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${c.title} case study — ZYRA` }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

function SectionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-ring rounded-2xl p-6">
      <h3 className="font-display text-lg font-bold tracking-tight mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[14.5px] leading-6 text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: c.title, href: canonical(`/case-studies/${c.slug}`) },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${c.title} — ${c.subtitle}`,
    description: c.solution,
    author: { "@type": "Organization", name: "ZYRA Technologies", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ZYRA Technologies", url: SITE_URL },
    mainEntityOfPage: canonical(`/case-studies/${c.slug}`),
  };

  return (
    <main>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero eyebrow={`Project — ${c.n}`} title={c.title} desc={c.subtitle} />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              <div className="bg-paper-2 p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">PROBLEM</div>
                <p className="mt-3 text-[15px] leading-8 text-muted">{c.problem}</p>
              </div>
              <div className="bg-paper-2 p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">SOLUTION</div>
                <p className="mt-3 text-[15px] leading-8 text-muted">{c.solution}</p>
              </div>
              <div className="bg-paper-2 p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">IMPACT</div>
                <p className="mt-3 text-[15px] leading-8 text-muted">{c.impact}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <div className="grid gap-6 sm:grid-cols-3">
              <SectionCard title="Core Capabilities" items={c.coreCapabilities} />
              <SectionCard title="Business Impact" items={c.businessImpact} />
              <SectionCard title="Key Features" items={c.keyFeatures} />
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <Link href="/contact" className="inline-block rounded-full bg-ink px-7 py-3.5 text-[14.5px] font-semibold text-paper hover:opacity-85">
              Start a similar project →
            </Link>
          </Reveal>
        </div>
      </section>
      <CTABand />
    </main>
  );
}