"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const GROUPS: Record<string, string[]> = {
  Languages: ["Java", "Python", "C++", "JavaScript", "TypeScript", "Kotlin", "SQL"],
  Frameworks: ["React", "Spring Boot", "Node.js", "FastAPI", "TensorFlow"],
  "Cloud & Infra": ["AWS", "Docker", "CI/CD", "GitHub", "Cloud Infrastructure"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  AI: ["Generative AI", "Machine Learning", "LLMs", "AI Agents", "Computer Vision", "NLP"],
};

const KEYS = Object.keys(GROUPS);

export default function TechWall() {
  const [active, setActive] = useState(KEYS[0]);

  return (
    <section id="technology" className="border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Technology</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our Technology Ecosystem
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {KEYS.map((k) => (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-colors ${
                  active === k
                    ? "bg-ink text-paper"
                    : "border border-line bg-paper text-muted hover:text-ink"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
          <div className="card-ring mt-6 rounded-2xl p-7 sm:p-9">
            <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
              {active.toUpperCase()}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {GROUPS[active].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-line bg-paper px-4 py-2.5 font-mono text-[13.5px] font-medium text-ink transition-colors hover:border-accent/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
