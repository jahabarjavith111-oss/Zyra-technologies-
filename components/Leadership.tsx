import Link from "next/link";
import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";
import { TEAM } from "@/lib/company";

export default function Leadership() {
  return (
    <section id="leadership" className="border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow">Leadership</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The people building ZYRA.
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 90}>
              <Link
                href={`/leadership/${m.slug}`}
                className="card-ring group relative block h-full overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100" />
                <PhotoFrame name={m.name} photo={m.photo} />
                <div className="mt-5 flex items-start justify-between">
                  <span className="font-mono text-[12.5px] font-semibold tracking-widest text-faint">
                    {m.n}
                  </span>
                  <span className="text-[13px] font-semibold text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">
                    View →
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-wide">
                  {m.name}
                </h3>
                <div className="mt-1 text-[14px] font-semibold text-accent">{m.role}</div>
                <p className="mt-3 text-[13.5px] leading-6 text-muted">{m.focus}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
