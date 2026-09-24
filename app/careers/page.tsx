import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const ROLES = [
  { team: "Software Engineering", title: "Full-Stack Engineer", type: "Full-time · Remote", desc: "React + Spring Boot/Node, APIs and enterprise delivery." },
  { team: "AI/ML", title: "AI Engineer — LLM Systems", type: "Full-time · Remote", desc: "Agents, evals, RAG and production GenAI." },
  { team: "Data", title: "Data Engineer", type: "Full-time · Remote", desc: "Pipelines, warehousing and BI foundations." },
  { team: "Product", title: "Product Designer", type: "Full-time · Remote", desc: "UX for SaaS and AI-powered products." },
  { team: "Cloud & DevOps", title: "Cloud Engineer", type: "Full-time · Remote", desc: "AWS, containers, CI/CD and FinOps." },
  { team: "Cybersecurity", title: "Application Security Engineer", type: "Full-time · Remote", desc: "AppSec reviews, IAM and monitoring." },
  { team: "Internships", title: "Engineering Intern (2026)", type: "Internship · 6 months · Remote", desc: "Ship real features with senior mentorship." },
];

export const metadata = {
  title: "Careers — ZYRA Technologies",
  description: "Build the future with us. Open roles across engineering, AI, data, product, cloud and security.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build the Future With Us"
        desc="We're a remote-first team headquartered in Ammapettai, Trichy. Why ZYRA → Culture → Open Positions → Apply."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="card-ring h-full rounded-2xl p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">WHY ZYRA</div>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-muted">
                  <li>· Work on AI systems that actually ship to production.</li>
                  <li>· Small senior team — your code reaches users fast.</li>
                  <li>· Research time and learning budget built in.</li>
                  <li>· Clear growth path from intern to technical leader.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-ring h-full rounded-2xl p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">CULTURE</div>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-muted">
                  <li>· Engineering excellence over theater.</li>
                  <li>· Honest feedback, written decisions, owned outcomes.</li>
                  <li>· Responsible technology — security and fairness by default.</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-10">
            <h2 className="font-display text-2xl font-bold tracking-tight">Open Positions</h2>
            <div className="mt-6 flex flex-col divide-y divide-line rounded-2xl border border-line bg-paper-2/60 px-6">
              {ROLES.map((r) => (
                <div key={r.title} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[12px] font-semibold tracking-[0.2em] text-accent">{r.team.toUpperCase()}</div>
                    <div className="mt-1 font-display text-[17px] font-bold">{r.title}</div>
                    <div className="mt-1 text-[13.5px] text-muted">{r.type} · {r.desc}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-3 shrink-0 rounded-full border border-line px-5 py-2.5 text-center text-[13.5px] font-semibold text-ink hover:border-accent/50 sm:mt-0"
                  >
                    Apply →
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[14px] text-muted">
              Role details and applications run through the contact form for now
              — select “Careers” intent and tell us which role. A full ATS
              follows when hiring scales.
            </p>
          </Reveal>
        </div>
      </section>
      <CTABand title="Don't see your role? Pitch us." desc="Send your work and what you want to build." />
    </main>
  );
}
