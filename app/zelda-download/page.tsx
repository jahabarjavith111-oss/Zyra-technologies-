import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { canonical, OG_IMAGE } from "@/lib/seo";

export const metadata = {
  title: "ZELDA APP DOWNLOAD",
  description:
    "Download the official ZELDA Women Safety Guardian Android application from ZyraTec.",
  alternates: { canonical: canonical("/zelda-download") },
  openGraph: {
    title: "ZELDA APP DOWNLOAD",
    description:
      "Download the official ZELDA Women Safety Guardian Android application from ZyraTec.",
    url: canonical("/zelda-download"),
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "ZELDA app download by ZyraTec" },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "ZELDA APP DOWNLOAD",
    description:
      "Download the official ZELDA Women Safety Guardian Android application from ZyraTec.",
    images: [OG_IMAGE],
  },
};

const APK_URL =
  "https://github.com/jahabarjavith111-oss/Zyra-technologies-/releases/download/zelda-android-v0.1.0/ZELDA-v0.1.0.apk";

const APK_V3_URL =
  "https://github.com/jahabarjavith111-oss/Zyra-technologies-/releases/download/zelda-android-v3-0.1.0/ZELDA-v3-0.1.0.apk";

const DOWNLOADS = [
  {
    id: "download",
    label: "ANDROID APP",
    title: "Download ZELDA",
    description: "ZELDA Women Safety Guardian – Original Version.",
    details: "Install the ZELDA APK directly on your Android phone. Version 0.1.0 · 156 MB.",
    url: APK_URL,
    filename: "ZELDA-v0.1.0.apk",
    button: "Download APK",
    note: "After downloading, open the file and allow installation from this source.",
  },
  {
    id: "download-v3",
    label: "ANDROID APP · V3",
    title: "Download ZELDA v3",
    description: "Updated ZELDA Women Safety Guardian application.",
    details: "Install the ZELDA v3 APK directly on your Android phone. Version 0.1.0 · 157 MB.",
    url: APK_V3_URL,
    filename: "ZELDA-v3-0.1.0.apk",
    button: "Download ZELDA v3 APK",
    note: "After downloading, open the file and allow installation from this source. This installs as a separate app from ZELDA v2.",
  },
];

export default function ZeldaDownloadPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products · Android App"
        title="ZELDA APP DOWNLOAD"
        desc="Download the official ZELDA Women Safety Guardian Android application."
      />
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink transition-colors hover:text-accent"
            >
              ← Back to Products
            </Link>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {DOWNLOADS.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-24 rounded-2xl border border-accent/25 bg-accent-soft p-6"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-paper"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                        <path d="M11 18h2" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold tracking-[0.22em] text-accent">
                        {item.label}
                      </div>
                      <div className="mt-0.5 font-display text-lg font-bold">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-6 text-muted">
                    {item.description}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-6 text-muted">
                    {item.details}
                  </p>
                  <a
                    href={item.url}
                    download={item.filename}
                    type="application/vnd.android.package-archive"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-paper transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3v12" />
                      <path d="m7 10 5 5 5-5" />
                      <path d="M5 21h14" />
                    </svg>
                    {item.button}
                  </a>
                  <p className="mt-3 text-[11.5px] leading-5 text-muted">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}