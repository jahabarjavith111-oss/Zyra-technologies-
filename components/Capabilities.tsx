import Link from "next/link";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/offerings";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">What We Do</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-muted">
            Six engineering disciplines, one integrated team — from model to
            production.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 90}>
              <Link
                href={`/services/${c.slug}`}
                className="card-ring group block h-full rounded-2xl p-7 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-semibold tracking-widest text-accent">
                    {c.n}
                  </span>
                  <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">→</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-7 text-muted">{c.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
