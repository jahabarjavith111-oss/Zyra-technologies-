import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://zyratec.vercel.app";

  // Search engines and AI answer engines are explicitly allowed. Named entries
  // are used because several AI crawlers only read their own group and ignore
  // the wildcard when a specific group is matched elsewhere in the file.
  const AI_AND_SEARCH_AGENTS = [
    "Googlebot",
    "Googlebot-Image",
    "Google-Extended",
    "Bingbot",
    "DuckDuckBot",
    "Applebot",
    "Applebot-Extended",
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "CCBot",
    "Amazonbot",
    "meta-externalagent",
    "cohere-ai",
    "YouBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_AND_SEARCH_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
