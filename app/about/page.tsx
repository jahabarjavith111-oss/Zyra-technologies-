import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const VALUES = [
  ["Innovation", "We prototype early and learn fast."],
  ["Integrity", "We say what we'll do, then do it."],
  ["Engineering Excellence", "Clean architecture, tested code, documented systems."],
  ["Customer Focus", "Outcomes over output — every build ties to value."],
  ["Continuous Learning", "Research time is part of the job, not a perk."],
  ["Responsible Technology", "Secure, fair and transparent AI by default."],
];

export const metadata = {
  title: "About — ZYRA Technologies",
  description: "Story, vision, mission and values behind ZYRA Technologies.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About ZYRA"
        title="Who We Are"
        desc="ZYRA Technologies is a technology company building intelligent digital solutions across software, AI, data and cloud."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="card-ring h-full rounded-2xl p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR STORY</div>
                <p className="mt-4 text-[15.5px] leading-8 text-muted">
                  ZYRA started with a simple belief — that intelligent
                  technology should be engineered, not improvised. From AI
                  systems to enterprise platforms, we&apos;re building a company
                  where research rigor meets delivery discipline.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR VISION</div>
                  <p className="mt-3 font-display text-xl font-bold leading-8">
                    Build technology that makes intelligence accessible, useful and scalable.
                  </p>
                </div>
                <div className="card-ring rounded-2xl p-8">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">OUR MISSION</div>
                  <p className="mt-3 font-display text-xl font-bold leading-8">
                    Engineer intelligent digital solutions that create measurable value for businesses and people.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-4">
            <div className="card-ring rounded-2xl p-8">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
                OUR VALUES · ENGINEERING PHILOSOPHY
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {VALUES.map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-line bg-paper p-5">
                    <div className="font-display text-[15px] font-bold">{t}</div>
                    <p className="mt-1.5 text-[14px] leading-6 text-muted">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
