import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import CTABand from "@/components/CTABand";
import { TEAM } from "@/lib/company";

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = TEAM.find((x) => x.slug === slug);
  return { title: m ? `${m.name} — ${m.role} | ZYRA` : "Leadership — ZYRA" };
}

export default async function MemberDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = TEAM.find((x) => x.slug === slug);
  if (!m) notFound();

  return (
    <main>
      <PageHero eyebrow={`Leadership · ${m.n}`} title={m.name} desc={m.role} />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="card-ring rounded-2xl p-8 text-center">
                <PhotoFrame name={m.name} photo={m.photo} variant="profile" />
                <h2 className="mt-5 font-display text-xl font-bold tracking-wide">{m.name}</h2>
                <div className="mt-1 text-[14.5px] font-semibold text-accent">{m.role}</div>
                <p className="mt-3 text-[13.5px] text-muted">{m.focus}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-ring rounded-2xl p-8">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">PROFILE</div>
                <p className="mt-3 text-[15.5px] leading-8 text-muted">{m.bio}</p>
                <div className="mt-6 text-[12px] font-semibold tracking-[0.24em] text-faint">OWNS</div>
                <ul className="mt-3 space-y-2">
                  {m.owns.map((o) => (
                    <li key={o} className="flex items-center gap-2.5 text-[14.5px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 text-[12px] font-semibold tracking-[0.24em] text-accent">
                  KEY CONTRIBUTIONS
                </div>
                <ul className="mt-3 space-y-3">
                  {m.contributions.map((c) => (
                    <li key={c} className="flex gap-2.5 text-[14.5px] leading-7 text-muted">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
