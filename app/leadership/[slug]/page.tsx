import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TEAM } from "@/lib/company";
import { canonical, OG_IMAGE, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = TEAM.find((x) => x.slug === slug);
  if (!m) return { title: "Leadership — ZyraTec" };
  const path = `/leadership/${m.slug}`;
  const shortRole = m.role.replace(/\s*\([^)]*\)/g, "").trim();
  const title = `${m.name} — ${shortRole}, ZyraTec`;
  const description = `${m.name}, ${m.role} at ZyraTec, Trichy. ${m.focus.split(" · ").slice(0, 2).join(", ")}.`;
  return {
    title,
    description,
    alternates: { canonical: canonical(path) },
    openGraph: {
      title,
      description,
      url: canonical(path),
      siteName: "ZyraTec",
      type: "profile",
      images: [{ url: m.photo.startsWith("http") ? m.photo : `${SITE_URL}${m.photo}`, alt: m.name }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function MemberDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = TEAM.find((x) => x.slug === slug);
  if (!m) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Leadership", href: "/leadership" },
    { label: m.name, href: canonical(`/leadership/${m.slug}`) },
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    image: m.photo.startsWith("http") ? m.photo : `${SITE_URL}${m.photo}`,
    worksFor: {
      "@type": "Organization",
      name: "ZyraTec",
      url: SITE_URL,
    },
    url: canonical(`/leadership/${m.slug}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Leadership", item: canonical("/leadership") },
      { "@type": "ListItem", position: 3, name: m.name, item: canonical(`/leadership/${m.slug}`) },
    ],
  };

  return (
    <main>
      <JsonLd data={[personSchema, breadcrumbSchema]} />
      <Breadcrumbs items={breadcrumbs} />
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
