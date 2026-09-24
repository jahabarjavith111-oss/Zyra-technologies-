import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { CASES } from "@/lib/company";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  return { title: c ? `${c.title} — Case Study | ZYRA` : "Case Study — ZYRA" };
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
