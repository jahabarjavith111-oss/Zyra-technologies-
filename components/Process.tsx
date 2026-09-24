import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Discover", desc: "Understand the problem, users, constraints and what success looks like." },
  { n: "02", title: "Define", desc: "Scope precisely — requirements, architecture and measurable outcomes." },
  { n: "03", title: "Design", desc: "Prototype interfaces, data models and system blueprints before code." },
  { n: "04", title: "Engineer", desc: "Build in tight iterations with reviews, tests and DevSecOps guardrails." },
  { n: "05", title: "Validate", desc: "Test with real users, harden security and prove performance." },
  { n: "06", title: "Scale", desc: "Deploy, monitor, optimize cost and grow with your business." },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Engineering Approach</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How We Build
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="card-ring group relative h-full min-h-44 overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1">
                <div className="font-mono text-[13px] font-semibold tracking-widest text-accent">
                  {s.n}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-[13.5px] leading-6 text-muted opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                  {s.desc}
                </p>
                <p className="mt-2 text-[13.5px] leading-6 text-muted lg:hidden">
                  {s.desc}
                </p>
                {i < STEPS.length - 1 && (
                  <div className="mt-4 hidden text-faint lg:block">↓</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
