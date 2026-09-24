import Link from "next/link";
import Reveal from "./Reveal";
import { SOLUTIONS } from "@/lib/offerings";

export default function Solutions() {
  return (
    <section id="solutions" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Solutions</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Solutions for Modern Businesses
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <Link
                href={`/solutions/${s.slug}`}
                className="card-ring group block h-full rounded-2xl p-7 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-semibold tracking-widest text-accent">
                    {s.n}
                  </span>
                  <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">
                    →
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-7 text-muted">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
