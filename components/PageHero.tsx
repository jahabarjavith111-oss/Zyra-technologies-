import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_25%,rgba(201,141,28,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#f5f8fc_100%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:pb-20 lg:pt-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-head mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-8 text-muted">{desc}</p>
        </Reveal>
      </div>
    </section>
  );
}
