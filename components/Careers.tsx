import Link from "next/link";
import Reveal from "./Reveal";

export default function Careers() {
  return (
    <section id="careers" className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(201,141,28,0.13),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Careers</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Build the Future With Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-8 text-muted">
            We are building technology for the problems that matter tomorrow.
          </p>
          <Link
            href="/careers"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:opacity-85"
          >
            View Open Positions
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
