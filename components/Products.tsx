import Link from "next/link";
import Reveal from "./Reveal";

const TAGS = ["Flutter", "React", "Node.js", "MySQL", "Socket.IO"];

export default function Products() {
  return (
    <section id="products" className="border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Products</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Products Built by ZYRA
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-muted">
            We&apos;re not only a services company — we design and ship our own
            intelligent products.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <article className="card-ring relative grid gap-10 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_80%_20%,rgba(201,141,28,0.15),transparent_70%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] text-accent">
                FLAGSHIP · LIVE
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                ZELDA
              </h3>
              <p className="mt-3 text-[17px] font-medium text-muted">
                AI-Powered Women Safety Emergency Response System
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted">
                From distress signal to coordinated emergency response — SOS
                with cancellation guard, live GPS tracking, automatic evidence
                recording, and a real-time police dashboard in one system.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[12.5px] font-medium text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-ink px-6 py-3 text-[14.5px] font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:opacity-85"
                >
                  Explore Product →
                </Link>
                <span className="self-center text-[13px] text-faint">
                  More products in the pipeline
                </span>
              </div>
            </div>
            <div className="relative grid content-center gap-3">
              {[
                ["Emergency SOS", "Tap · cancel window · auto-escalates"],
                ["Live GPS Tracking", "Periodic updates to dashboard"],
                ["Evidence Recording", "Auto video capture + upload"],
                ["Police Dashboard", "Cases · map · status · resolution"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between rounded-xl border border-line bg-paper px-5 py-4"
                >
                  <span className="text-[13px] font-medium text-muted">{k}</span>
                  <span className="font-mono text-[12.5px] font-semibold text-ink">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
