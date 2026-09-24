import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import TechWall from "@/components/TechWall";

const PILLARS = [
  ["AI", "Generative AI, LLMs, agents, ML, vision and NLP — evaluated and guardrailed."],
  ["Software", "Java, Spring Boot, React, Node.js and TypeScript — enterprise-grade delivery."],
  ["Data", "Pipelines, warehouses and BI on MySQL, PostgreSQL and MongoDB."],
  ["Cloud", "AWS, Docker, CI/CD and GitHub-native DevOps with cost discipline."],
  ["Security", "AppSec, IAM and monitoring woven through build and run."],
];

export const metadata = {
  title: "Technology — ZYRA Technologies",
  description: "Our stack across AI, software, data, cloud and security.",
};

export default function TechnologyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Technology"
        title="Our Technology Ecosystem"
        desc="The stack we hire for, build on and operate — proven in production, not just on slides."
      />
      <TechWall />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight">Five pillars, one platform mindset</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="card-ring h-full rounded-2xl p-6">
                  <div className="font-display text-[15px] font-bold tracking-[0.18em] text-accent">{t.toUpperCase()}</div>
                  <p className="mt-3 text-[14px] leading-6 text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand title="Building on this stack? So are we." />
    </main>
  );
}
