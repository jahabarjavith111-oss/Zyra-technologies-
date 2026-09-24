import type { MetadataRoute } from "next";
import { SERVICES, SOLUTIONS } from "@/lib/offerings";
import { TEAM, CASES } from "@/lib/company";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zyra.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = [
    "",
    "/about",
    "/services",
    "/products",
    "/solutions",
    "/technology",
    "/case-studies",
    "/leadership",
    "/careers",
    "/contact",
  ].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const dynamics = [
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${SITE_URL}/solutions/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...TEAM.map((m) => ({
      url: `${SITE_URL}/leadership/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...CASES.map((c) => ({
      url: `${SITE_URL}/case-studies/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...statics, ...dynamics];
}
