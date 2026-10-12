import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
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

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) notFound();

  const rows: [string, string][] = [
    ["Problem", c.problem],
    ["Solution", c.solution],
    ["Technology", c.technology],
    ["Impact", c.impact],
  ];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${c.title} — ${c.subtitle}`,
          description: c.solution,
          author: { "@type": "Organization", name: "ZYRA Technologies", url: SITE_URL },
          publisher: { "@type": "Organization", name: "ZYRA Technologies", url: SITE_URL },
          mainEntityOfPage: canonical(`/case-studies/${c.slug}`),
        }}
      />
      <PageHero eyebrow={`Project — ${c.n}`} title={c.title} desc={c.subtitle} />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {c.stack.map((t) => (
                <span key={t} className="rounded-full border border-line bg-paper-2 px-4 py-1.5 font-mono text-[12.5px] text-ink">{t}</span>
              ))}
            </div>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {rows.map(([h, p]) => (
              <div key={h} className="bg-paper-2 p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">{h.toUpperCase()}</div>
                <p className="mt-3 text-[15px] leading-8 text-muted">{p}</p>
              </div>
            ))}
          </div>
          <Reveal delay={100} className="mt-8">
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
