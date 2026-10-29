import Reveal from "./Reveal";
import type { Faq } from "@/lib/seo";

export default function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
}: {
  items: Faq[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((f) => (
            <Reveal key={f.q}>
              <details className="card-ring group rounded-2xl p-6">
                <summary className="cursor-pointer list-none font-display text-[15px] font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-[14.5px] leading-7 text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
