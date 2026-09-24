import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* backdrop */}
      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,rgba(201,141,28,0.16),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#f5f8fc_100%)]" />
      {/* flowing data lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          className="flow-line"
          d="M-40 520 C 260 480, 420 300, 620 330 S 980 420, 1260 240"
          stroke="rgba(180,83,9,0.4)"
          strokeWidth="1.2"
        />
        <path
          className="flow-line"
          style={{ animationDelay: "-3s" }}
          d="M-40 580 C 300 540, 460 380, 660 400 S 1000 500, 1260 330"
          stroke="rgba(146,64,14,0.35)"
          strokeWidth="1.2"
        />
        <path
          className="flow-line"
          style={{ animationDelay: "-6s" }}
          d="M-40 460 C 280 420, 480 240, 680 270 S 1020 360, 1260 180"
          stroke="rgba(201,141,28,0.3)"
          strokeWidth="1"
        />
        {[
          [180, 500],
          [420, 388],
          [620, 330],
          [830, 372],
          [1020, 300],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#c98d1c" opacity="0.8" />
            <circle cx={x} cy={y} r="9" stroke="rgba(180,83,9,0.4)" strokeWidth="1" />
          </g>
        ))}
      </svg>

      <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-16 text-center sm:px-8 lg:pb-32 lg:pt-24">
        <p className="anim-rise eyebrow" style={{ animationDelay: "60ms" }}>
          ZYRA Technologies
        </p>
        <h1
          className="anim-rise section-head mt-5 font-display text-[clamp(2.6rem,6.2vw,4.9rem)] font-bold leading-[1.02] tracking-tight text-balance"
          style={{ animationDelay: "140ms" }}
        >
          ENGINEERING
          <br />
          INTELLIGENCE.
          <br />
          <span className="text-muted">BUILDING WHAT&apos;S NEXT.</span>
        </h1>
        <p
          className="anim-rise mx-auto mt-6 max-w-xl text-[17px] leading-8 text-muted"
          style={{ animationDelay: "220ms" }}
        >
          We build intelligent software, AI systems, digital products and
          technology solutions for the next generation of businesses.
        </p>
        <div
          className="anim-rise mt-9 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            href="#capabilities"
            className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:opacity-85"
          >
            Explore ZYRA
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-line bg-paper-2/70 px-7 py-3.5 text-[15px] font-semibold text-ink backdrop-blur transition-colors hover:border-accent/50"
          >
            Start a Project
          </Link>
        </div>
        <div
          className="anim-rise mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] font-medium tracking-wide text-faint"
          style={{ animationDelay: "380ms" }}
        >
          <span>AI · Generative AI</span>
          <span>Software · Data</span>
          <span>Cloud · Cybersecurity</span>
        </div>
      </div>
    </section>
  );
}
