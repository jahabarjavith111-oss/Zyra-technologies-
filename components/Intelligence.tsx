import Reveal from "./Reveal";

function Node({
  label,
  sub,
  accent = false,
}: {
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-52 rounded-xl border px-6 py-4 text-center backdrop-blur ${
        accent
          ? "border-accent/50 bg-accent-soft shadow-[0_0_40px_rgba(201,141,28,0.25)]"
          : "border-line bg-paper-2"
      }`}
    >
      <div className="font-display text-[15px] font-bold tracking-[0.24em]">
        {label}
      </div>
      <div className="mt-1 text-[11.5px] tracking-wide text-muted">{sub}</div>
    </div>
  );
}

function Connector() {
  return <div className="mx-auto h-7 w-px bg-gradient-to-b from-accent/60 to-accent/10" />;
}

function Split() {
  return (
    <div className="relative mx-auto h-10 w-full max-w-md">
      <div className="absolute left-1/2 top-0 h-5 w-px bg-accent/50" />
      <div className="absolute left-[calc(50%-6.5rem)] right-[calc(50%-6.5rem)] top-5 h-px bg-accent/40 sm:left-[calc(50%-8rem)] sm:right-[calc(50%-8rem)]" />
      <div className="absolute left-[calc(50%-6.5rem)] top-5 h-5 w-px bg-accent/40 sm:left-[calc(50%-8rem)]" />
      <div className="absolute right-[calc(50%-6.5rem)] top-5 h-5 w-px bg-accent/40 sm:right-[calc(50%-8rem)]" />
    </div>
  );
}

function Join() {
  return (
    <div className="relative mx-auto h-10 w-full max-w-md">
      <div className="absolute bottom-0 left-1/2 top-5 w-px bg-accent/40" />
      <div className="absolute bottom-5 left-[calc(50%-6.5rem)] right-[calc(50%-6.5rem)] top-0 h-px bg-accent/40 sm:left-[calc(50%-8rem)] sm:right-[calc(50%-8rem)]" />
      <div className="absolute bottom-5 left-[calc(50%-6.5rem)] top-0 w-px bg-accent/40 sm:left-[calc(50%-8rem)]" />
      <div className="absolute bottom-5 right-[calc(50%-6.5rem)] top-0 w-px bg-accent/40 sm:right-[calc(50%-8rem)]" />
    </div>
  );
}

export default function Intelligence() {
  return (
    <section id="intelligence" className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,141,28,0.14),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow">ZYRA Intelligence</p>
          <h2 className="section-head mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Where Intelligence Meets Engineering
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-muted">
            One connected ecosystem — data and software feed automation, and
            everything runs on cloud.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-14">
          <Node label="AI" sub="Models · Agents · Reasoning" accent />
          <Connector />
          <Split />
          <div className="grid gap-6 sm:grid-cols-2 sm:mx-auto sm:max-w-lg">
            <Node label="DATA" sub="Platforms · Analytics" />
            <Node label="SOFTWARE" sub="Apps · APIs · Systems" />
          </div>
          <Join />
          <Node label="AUTOMATION" sub="Workflows · Orchestration" />
          <Connector />
          <Node label="CLOUD" sub="Scale · Reliability · Delivery" />
        </Reveal>
      </div>
    </section>
  );
}
