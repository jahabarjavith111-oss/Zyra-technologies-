import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Products — ZYRA Technologies",
  description:
    "ZELDA — AI-powered women safety emergency response system by ZYRA. From distress signal to coordinated emergency response.",
};

const WORKFLOW = [
  ["SOS activated", "User triggers SOS in the mobile app when in danger."],
  ["Cancellation window", "A short window guards against accidental activation."],
  ["Countdown + evidence", "Countdown runs while the camera auto-starts evidence recording."],
  ["Case created", "An emergency case is opened with all collected information."],
  ["Location transmitted", "GPS location streams to the backend over Socket.IO."],
  ["Dashboard receives", "The police dashboard gets the case with live updates."],
  ["Monitored + resolved", "Authorities track movement, respond, and close the case."],
];

const ARCHITECTURE: [string, string][] = [
  ["Flutter", "Mobile application"],
  ["React + Vite + Tailwind", "Police web dashboard"],
  ["Node.js + Express", "Backend API"],
  ["MySQL", "Database"],
  ["Dio", "Mobile API communication"],
  ["Geolocator", "Location services"],
  ["Camera", "Emergency evidence recording"],
  ["Socket.IO", "Real-time communication"],
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title="ZELDA"
        desc="AI-powered women safety emergency response system — from distress signal to coordinated emergency response."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <article className="card-ring relative grid gap-10 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_80%_20%,rgba(201,141,28,0.15),transparent_70%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] text-accent">
                  FLAGSHIP · LIVE
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Emergency response, engineered
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted">
                  ZELDA reduces the delay between an emergency and coordinated
                  assistance. A mobile app for users connects directly to a
                  web-based dashboard for police and authorized personnel —
                  transmitting emergency information in real time instead of
                  relying on a phone call alone.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    ["Emergency SOS", "One-tap alert with a cancellation window; uncancelled alerts escalate automatically."],
                    ["Live location tracking", "GPS updates stream during the emergency — movement, not just a static pin."],
                    ["Evidence recording", "Video recording starts automatically and uploads to the emergency case."],
                    ["Police dashboard", "Active and pending cases, locations, evidence, status and resolution — one interface."],
                    ["Real-time + secure", "Socket.IO event streaming with JWT-authenticated APIs."],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-xl border border-line bg-paper p-5">
                      <div className="font-display text-[15px] font-bold">{t}</div>
                      <p className="mt-1.5 text-[14px] leading-6 text-muted">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="card-ring rounded-2xl p-7">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">
                    HOW IT WORKS
                  </div>
                  <ol className="mt-5 space-y-4">
                    {WORKFLOW.map(([t, d], i) => (
                      <li key={t} className="flex gap-3.5">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent-soft font-mono text-[12px] font-bold text-accent">
                          {i + 1}
                        </span>
                        <span>
                          <span className="block text-[14.5px] font-semibold">{t}</span>
                          <span className="mt-0.5 block text-[13.5px] leading-6 text-muted">{d}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100} className="mt-4">
            <div className="card-ring rounded-2xl p-8">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
                SYSTEM ARCHITECTURE
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {ARCHITECTURE.map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-line bg-paper p-4">
                    <div className="font-mono text-[13px] font-bold">{t}</div>
                    <div className="mt-1 text-[12.5px] text-muted">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-4">
            <div className="rounded-3xl border border-dashed border-line p-10 text-center">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">
                PUBLIC SHOWCASE
              </div>
              <h3 className="mx-auto mt-3 max-w-xl font-display text-xl font-bold leading-8">
                Demonstrated at Thinamalar “Vali Kaati” — 29 March 2026,
                Kalaiarangam, Tiruchirappalli
              </h3>
              <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-7 text-muted">
                Presented and explained to ~200 attendees, with live feedback
                from a wider public audience.
              </p>
              <Link href="/contact" className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-[14.5px] font-semibold text-paper hover:opacity-85">
                Partner With Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand title="Building safety tech with us?" desc="Talk to the team behind ZELDA." />
    </main>
  );
}
