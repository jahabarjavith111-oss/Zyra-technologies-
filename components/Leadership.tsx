import Link from "next/link";
import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";
import { TEAM, type Member } from "@/lib/company";

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <Reveal delay={index * 90}>
      <Link
        href={`/leadership/${member.slug}`}
        className="card-ring group relative block h-full overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1"
      >
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100" />
        <PhotoFrame name={member.name} photo={member.photo} />
        <div className="mt-5 flex items-start justify-between">
          <span className="font-mono text-[12.5px] font-semibold tracking-widest text-faint">
            {member.n}
          </span>
          <span className="text-[13px] font-semibold text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">
            View →
          </span>
        </div>
        <h3 className="mt-5 font-display text-lg font-bold tracking-wide">
          {member.name}
        </h3>
        <div className="mt-1 text-[14px] font-semibold text-accent">{member.role}</div>
        <p className="mt-3 text-[13.5px] leading-6 text-muted">{member.focus}</p>
      </Link>
    </Reveal>
  );
}

export default function Leadership() {
  const founder = TEAM.find((m) => m.slug === "bragatheesh-v")!;
  const cofounder = TEAM.find((m) => m.slug === "abdul-javid-j")!;
  const cmo = TEAM.find((m) => m.slug === "cindhuja-b")!;
  const chro = TEAM.find((m) => m.slug === "dharshini")!;

  return (
    <section id="leadership" className="border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow">Leadership</p>
          <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The people building ZyraTec.
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl">
          {/* Top row: Founder & Co-Founder side by side */}
          <div className="grid gap-4 sm:grid-cols-2">
            {founder && <MemberCard member={founder} index={0} />}
            {cofounder && <MemberCard member={cofounder} index={1} />}
          </div>

          {/* Bottom row: CMO & CHRO side by side */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {cmo && <MemberCard member={cmo} index={2} />}
            {chro && <MemberCard member={chro} index={3} />}
          </div>
        </div>
      </div>
    </section>
  );
}
