import Link from "next/link";
import Reveal from "./Reveal";
import { CASES } from "@/lib/company";

export default function Work() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Projects · Case Studies</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Work
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 90}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="card-ring group flex h-full flex-col rounded-2xl p-7 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-semibold tracking-[0.28em] text-faint">
                    PROJECT — {c.n}
                  </span>
                  <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">→</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-1.5 text-[14px] text-muted">{c.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.stack.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[12px] text-ink">{t}</span>
                  ))}
                </div>
                <p className="mt-4 line-clamp-3 text-[14px] leading-7 text-muted">{c.problem}</p>
                <span className="mt-5 text-[14px] font-semibold text-ink group-hover:text-accent">
                  View Case Study →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
