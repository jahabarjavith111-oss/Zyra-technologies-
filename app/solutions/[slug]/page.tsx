import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { SOLUTIONS } from "@/lib/offerings";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SOLUTIONS.find((x) => x.slug === slug);
  return { title: s ? `${s.title} — ZYRA Technologies` : "Solution — ZYRA" };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SOLUTIONS.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <main>
      <PageHero eyebrow={`Solutions · ${s.n}`} title={s.title} desc={s.tagline} />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="card-ring rounded-2xl p-8">
                <h2 className="font-display text-xl font-bold">Overview</h2>
                <p className="mt-3 text-[15.5px] leading-8 text-muted">{s.desc}</p>
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
                    Scope this solution →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
