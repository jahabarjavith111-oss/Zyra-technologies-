import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { CASES } from "@/lib/company";

export const metadata = {
  title: "Case Studies — ZYRA Technologies",
  description: "Selected work: problem, solution, technology, impact.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Selected Work"
        desc="Problem → solution → technology → impact. How ZYRA engineers outcomes."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="card-ring group flex h-full flex-col rounded-2xl p-7 transition-all hover:-translate-y-1"
                >
                  <span className="text-[12px] font-semibold tracking-[0.28em] text-faint">
                    PROJECT — {c.n}
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold tracking-tight">{c.title}</h2>
                  <p className="mt-1.5 text-[14px] text-muted">{c.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.stack.map((t) => (
                      <span key={t} className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[12px] text-ink">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 text-[14px] font-semibold text-ink group-hover:text-accent">
                    View Case Study →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-4">
            <div className="rounded-3xl border border-dashed border-line p-10 text-center">
              <h2 className="font-display text-xl font-bold">More case studies on request</h2>
              <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-7 text-muted">
                Client work under NDA can be walked through on a call. Ask us
                for the relevant story in your industry.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand title="Have a similar problem? Let's solve it." />
    </main>
  );
}
