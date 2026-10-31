import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { OG_IMAGE, SITE_NAME, canonical } from "@/lib/seo";

const COLLEGE = "JJ College of Engineering and Technology";

export const metadata: Metadata = {
  title: `A Surprise for ${COLLEGE} | ZyraTec`,
  description: `A surprise tribute to the students, faculty and alumni of ${COLLEGE}, from the team at ZyraTec.`,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: canonical("/jj-college"),
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    title: `A Surprise for ${COLLEGE}`,
    description: "Something special is waiting for the JJ College community.",
    url: canonical("/jj-college"),
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "A surprise for JJ College of Engineering and Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `A Surprise for ${COLLEGE}`,
    description: "Something special is waiting for the JJ College community.",
    images: [OG_IMAGE],
  },
};

const ADMIRES = [
  {
    title: "Curiosity",
    body: "The best engineers never stop asking why. They pull things apart, test the edges and come back with a better question.",
  },
  {
    title: "Grit",
    body: "Deadlines, demos and the courage to ship something real. The work is hard; the habit of finishing is harder.",
  },
  {
    title: "Community",
    body: "A campus is at its strongest when seniors guide juniors, friends debug together and everyone lifts the room.",
  },
];

export default function JJCollegePage() {
  return (
    <main>
      {/* Unlisted surprise page — noindex, not linked from the site or sitemap. */}
      <section className="relative overflow-hidden pt-16">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_25%,rgba(201,141,28,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#f5f8fc_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              A surprise · 11.11.2026
            </div>
            <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.28em] text-faint">
              For the JJ College community
            </p>
            <h1 className="section-head mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              JJ College of Engineering and Technology
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-muted">
              A small tribute from ZyraTec to a campus that keeps building people
              who build the future.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <article className="card-ring h-full rounded-3xl p-8 sm:p-10">
                <p className="eyebrow">A note for the campus</p>
                <h2 className="section-head mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  To the students, faculty and alumni of JJ College
                </h2>
                <div className="mt-6 space-y-4 text-[15.5px] leading-8 text-muted">
                  <p>
                    JJ College of Engineering and Technology is more than a
                    campus. It is the labs, the late nights, the friendships and
                    the quiet belief that a better answer is possible.
                  </p>
                  <p>
                    It is the final-year project that finally works at 2 a.m. It
                    is the placement season, the demo day, the senior who explains
                    one more concept and the teacher who refuses to give up on a
                    student.
                  </p>
                  <p>
                    We built this page for the people who make that place what it
                    is. For the builders, the thinkers and the ones who keep the
                    campus curious.
                  </p>
                </div>
                <p className="mt-8 font-display text-lg font-semibold">
                  — The ZyraTec team
                </p>
              </article>
            </Reveal>

            <div className="grid gap-4">
              {ADMIRES.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="card-ring h-full rounded-2xl p-7">
                    <div className="font-mono text-[12px] font-semibold tracking-widest text-accent">
                      0{i + 1}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-7 text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-paper sm:p-12">
              <div className="hero-grid absolute inset-0 opacity-20" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  The reveal
                </p>
                <h2 className="section-head mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Something special goes live on 11 November 2026.
                </h2>
                <p className="mt-4 max-w-2xl text-[15.5px] leading-8 text-paper/70">
                  This page is a surprise for the JJ College of Engineering and
                  Technology community. On the day, share it with the campus — and
                  let the people who make the place special see it.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-paper/15 bg-paper/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-paper/50">
                      Date
                    </div>
                    <div className="mt-1 font-display text-xl font-bold">
                      11.11.2026
                    </div>
                  </div>
                  <div className="rounded-2xl border border-paper/15 bg-paper/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-paper/50">
                      Place
                    </div>
                    <div className="mt-1 font-display text-xl font-bold">
                      Trichy, India
                    </div>
                  </div>
                  <div className="rounded-2xl border border-paper/15 bg-paper/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-paper/50">
                      For
                    </div>
                    <div className="mt-1 font-display text-xl font-bold">
                      Campus community
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-full bg-paper px-7 py-3 text-[14.5px] font-semibold text-ink hover:opacity-85"
                  >
                    Explore ZyraTec →
                  </Link>
                  <Link
                    href="/products"
                    className="rounded-full border border-paper/25 px-7 py-3 text-[14.5px] font-semibold text-paper hover:border-accent/70"
                  >
                    Meet ZELDA
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow">With pride</p>
            <h2 className="section-head mt-4 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              For JJ College of Engineering and Technology.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-7 text-muted">
              Keep building. Keep asking better questions. Keep making the campus
              proud.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
