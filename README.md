# ZYRA Technologies — Website

Next.js 16 + Tailwind CSS 4. Dark premium tech theme.

## Run locally

```bash
cd zyra-site
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Home (hero, capabilities, intelligence, products, solutions, tech, process, work, leadership, careers, contact)
- `/about`, `/services`, `/products`, `/solutions`, `/technology`
- `/case-studies`, `/leadership`, `/careers`, `/contact`
- `/services/[slug]` × 6, `/solutions/[slug]` × 6
- `/leadership/[slug]` × 6, `/case-studies/[slug]` × 3

## Env

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — canonical URL (sitemap, metadata)
- `NEXT_PUBLIC_FORM_ENDPOINT` — optional Formspree/Web3Forms endpoint.
  When empty, the contact form falls back to `mailto:`.

## Deploy (Vercel)

1. Push this folder to GitHub.
2. Import the repo in Vercel (framework preset: Next.js).
3. Set env vars above in Vercel project settings.
4. Deploy — `sitemap.xml` and `robots.txt` generate automatically.

## Build

```bash
npm run build
npm run start
```
