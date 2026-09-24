import Reveal from "./Reveal";

const PILLARS = [
  "AI",
  "SOFTWARE",
  "DATA",
  "CLOUD",
  "CYBERSECURITY",
  "DIGITAL PRODUCTS",
];

export default function Intro() {
  return (
    <section id="about" className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Technology with Purpose</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-balance">
              Intelligence, engineered for real business outcomes.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[16.5px] leading-8 text-muted">
              ZYRA Technologies is a technology company focused on building
              intelligent digital solutions that combine software engineering,
              artificial intelligence, data and cloud technologies.
            </p>
            <p className="mt-4 text-[16.5px] leading-8 text-muted">
              We don&apos;t ship demos. We design, engineer and scale systems
              that businesses can run on — from AI products to enterprise
              platforms.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p} delay={i * 70}>
              <div className="card-ring rounded-xl px-4 py-5 text-center transition-colors">
                <span className="font-display text-[13px] font-bold tracking-[0.22em] text-ink">
                  {p}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
