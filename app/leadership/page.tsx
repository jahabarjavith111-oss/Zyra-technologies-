import PageHero from "@/components/PageHero";
import Leadership from "@/components/Leadership";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Leadership — ZYRA Technologies",
  description: "The founders building ZYRA — vision, business, technology and engineering.",
};

export default function LeadershipPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leadership"
        title="The people building ZYRA."
        desc="Two founders — one driving vision, business and operations, the other driving technology, AI and engineering — converging on future products and solutions."
      />
      <Leadership />
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="card-ring rounded-3xl p-8 text-center sm:p-10">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
                HOW WE WORK
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-paper p-5">
                  <div className="font-display text-[15px] font-bold">BRAGATHEESH V</div>
                  <div className="mt-1 text-[13px] text-accent">Founder &amp; CEO</div>
                  <p className="mt-2 text-[13px] leading-6 text-muted">
                    Vision &amp; Strategy · Business · Partnerships · Operations
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-paper p-5">
                  <div className="font-display text-[15px] font-bold">ABDUL JAVID J</div>
                  <div className="mt-1 text-[13px] text-accent">Co-Founder &amp; CTO</div>
                  <p className="mt-2 text-[13px] leading-6 text-muted">
                    Technology · AI &amp; GenAI · Engineering · Architecture
                  </p>
                </div>
              </div>
              <div className="mx-auto my-4 h-8 w-px bg-gradient-to-b from-accent/60 to-accent/10" />
              <div className="mx-auto max-w-md rounded-xl border border-accent/40 bg-accent-soft p-5">
                <div className="font-display text-[15px] font-bold tracking-[0.18em]">
                  ZYRA TECHNOLOGIES
                </div>
                <p className="mt-1 text-[13px] text-muted">
                  Future Products &amp; Solutions
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand title="Want to build with this team?" />
    </main>
  );
}
