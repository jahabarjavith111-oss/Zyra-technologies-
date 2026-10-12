import Reveal from "./Reveal";

const VALUES = [
  "Innovation",
  "Integrity",
  "Engineering Excellence",
  "Customer Focus",
  "Continuous Learning",
  "Responsible Technology",
];

export default function About() {
  return (
    <section id="story" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">About ZYRA</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Who We Are
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <div className="card-ring h-full rounded-2xl p-8">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR STORY</div>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                ZYRA started with a simple belief — that intelligent technology
                should be engineered, not improvised. We&apos;re building a team
                and a portfolio around that discipline.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="card-ring h-full rounded-2xl p-8">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR VISION</div>
              <p className="mt-4 font-display text-lg font-bold leading-8">
                Build technology that makes intelligence accessible, useful and
                scalable.
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="card-ring h-full rounded-2xl p-8">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR MISSION</div>
              <p className="mt-4 font-display text-lg font-bold leading-8">
                Engineer intelligent digital solutions that create measurable
                value for businesses and people.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="mt-4">
          <div className="card-ring rounded-2xl p-8">
            <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
              OUR VALUES
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {VALUES.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-[13.5px] font-medium text-ink"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
