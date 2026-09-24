import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand({
  title = "Have a problem worth solving? Let's build it.",
  desc = "Tell us about your project — we reply within 2 business days.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="card-ring flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
                {title}
              </h2>
              <p className="mt-2 text-[15px] text-muted">{desc}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-7 py-3 text-[14.5px] font-semibold text-paper hover:opacity-85"
              >
                Start a Project
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-line px-7 py-3 text-[14.5px] font-semibold text-ink hover:border-accent/50"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
