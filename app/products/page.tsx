import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

import { PAGE_SEO, canonical, OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata = {
  title: PAGE_SEO.products.title,
  description: PAGE_SEO.products.description,
  keywords: PAGE_SEO.products.keywords,
  alternates: { canonical: canonical(PAGE_SEO.products.path) },
  openGraph: {
    title: PAGE_SEO.products.title,
    description: PAGE_SEO.products.description,
    url: canonical(PAGE_SEO.products.path),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ZELDA women safety app by ZyraTec" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: PAGE_SEO.products.title,
    description: PAGE_SEO.products.description,
    images: [OG_IMAGE],
  },
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



export default function ProductsPage() {
  const faqs: [string, string][] = [
    [
      "What is the ZELDA women safety app?",
      "ZELDA by ZyraTec is a women safety app built in India. In an emergency, the user taps SOS in the mobile app — the system streams live GPS location, records video evidence automatically, and delivers a real-time emergency case to a police dashboard so help arrives faster than a phone call alone.",
    ],
    [
      "How does ZELDA help women in an emergency?",
      "One tap sends a distress signal with your live location. A short cancellation window guards against accidental taps. If not cancelled, the countdown auto-escalates: the camera starts evidence recording, GPS streams to the backend, and authorities see your movement, status and evidence on one screen.",
    ],
    [
      "Is ZELDA available across India?",
      "ZELDA was designed and showcased in Tiruchirappalli (Trichy), Tamil Nadu, India, and is built to deploy for institutions, campuses, workplaces and city safety programs anywhere in India. Contact ZyraTec to partner or pilot it in your city.",
    ],
    [
      "How is ZELDA different from a normal panic-button or helpline call?",
      "A phone call gives responders one static report. ZELDA gives them a living case — continuous GPS movement, recorded video evidence, timestamps and resolution status — streamed in real time over Socket.IO to a centralized dashboard with JWT-secured APIs.",
    ],
    [
      "Which devices does the ZELDA app support?",
      "The user app is built with Flutter for Android and iOS, and the police dashboard is a React web app that runs in any modern browser — no special hardware needed.",
    ],
    [
      "Is ZELDA a women helping agent?",
      "Yes — ZELDA works like a women helping agent on your phone. Tap SOS and it acts for you: streaming live GPS, recording evidence and alerting responders with your case details, even when you cannot make a call. It is womens help that stays with you from distress signal to rescue.",
    ],
    [
      "Who built ZELDA?",
      "ZELDA was designed and engineered by ZyraTec, a software company in Trichy, India — led by founder Bragatheesh V and CTO Abdul Javid J — and publicly demonstrated at Thinamalar 'Vali Kaati' in March 2026 to around 200 attendees.",
    ],
  ];

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZELDA — Women Safety Emergency Response App",
    applicationCategory: "SafetyApplication",
    operatingSystem: "Android, iOS, Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    author: { "@type": "Organization", name: "ZyraTec", url: SITE_URL },
    description:
      "ZELDA is a women safety app in India with one-tap SOS, cancellation guard, live GPS tracking, automatic evidence recording and a real-time police dashboard.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <main>
      <JsonLd data={[softwareAppSchema, faqSchema]} />
      <PageHero
        eyebrow="Products · Women Safety App India"
        title="ZELDA — Women Safety App with SOS, Live GPS & Emergency Alerts"
        desc="ZELDA by ZyraTec (Trichy, India) is a women safety emergency response system — one-tap SOS, live location streaming, automatic evidence recording and a real-time police dashboard."
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
                    ["Real-time & secure", "Live event streaming with enterprise-grade authentication."],
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

          <Reveal delay={120} className="mt-4">
            <div className="card-ring rounded-2xl p-8 sm:p-10">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-accent">
                WOMEN SAFETY APP — INDIA
              </div>
              <h2 className="mt-3 max-w-3xl font-display text-2xl font-bold tracking-tight">
                Why India needs a women safety app like ZELDA
              </h2>
              <div className="mt-4 grid gap-4 text-[15px] leading-8 text-muted lg:grid-cols-2">
                <p>
                  In an emergency, the delay between distress and coordinated help costs
                  critical minutes. A phone call alone gives authorities a single static
                  report with no live context — no movement trail, no evidence, no shared
                  status. ZELDA closes that gap: the moment a woman in danger taps SOS,
                  her live GPS location streams to responders while the app records video
                  evidence automatically.
                </p>
                <p>
                  Built by ZyraTec, a software company in Trichy, Tamil Nadu,
                  ZELDA connects the person seeking help with the people who can give it —
                  police and authorized personnel watching one real-time dashboard. From
                  campuses and workplaces to city safety programs across India, ZELDA turns
                  a moment of panic into a coordinated emergency response.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={130} className="mt-4">
            <div className="card-ring rounded-2xl p-8 sm:p-10">
              <div className="text-[12px] font-semibold tracking-[0.24em] text-faint">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">
                ZELDA women safety app — FAQs
              </h2>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {faqs.map(([q, a]) => (
                  <div key={q} className="rounded-xl border border-line bg-paper p-5">
                    <h3 className="font-display text-[15px] font-bold">{q}</h3>
                    <p className="mt-2 text-[14px] leading-7 text-muted">{a}</p>
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
