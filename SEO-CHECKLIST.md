# ZYRA Technologies — SEO Launch Checklist

Deployed URL: https://zyra-technologies.vercel.app/
Stack: Next.js 16 (static) + Vercel. All 29 URLs already in `sitemap.xml`.

Code-side SEO in this repo is DONE (canonicals, OG image route, JSON-LD,
keyword metadata, FAQs, footer deep-links, geo tags, manifest). The items
below need a human with logins — ~1 hour total.

## 1. Google Search Console (30 min) — covers Google
1. Go to https://search.google.com/search-console → Add property →
   URL prefix: `https://zyra-technologies.vercel.app/`
2. Verify via HTML tag: copy the `content="..."` code, tell your dev to put it
   in `verification.google` in `app/layout.tsx`, redeploy, click Verify.
   (Alt: verify via the Gmail account that owns the Vercel project.)
3. Sitemaps → Add `sitemap.xml` → Submit.
4. URL Inspection → test `/`, `/products`, `/services/ai-generative-ai` →
   Request Indexing for each (10/day limit — do the 10 money pages first).
5. Come back weekly: Coverage → fix errors; Performance → watch
   `zyra technologies`, `zelda women safety app`, `software company trichy`.

## 2. Bing Webmaster Tools (15 min) — covers Bing + Yahoo + DuckDuckGo
1. https://www.bing.com/webmasters → Add site (can one-click import from GSC).
2. Submit the same `sitemap.xml`.
3. URL Submission → submit the 10 priority URLs.
4. Brave Search pulls heavily from Bing/Google indexes — no separate step needed
   beyond being indexed in both.

## 3. Google Business Profile (15 min) — #1 local lever for Trichy/TN
1. https://www.google.com/business → Create profile:
   "ZYRA Technologies", category: Software Company,
   Ammapettai, Tiruchirappalli, Tamil Nadu 620009.
2. Add: phones (+91 88079 84687, +91 93459 92521), hours Mon–Sat 9AM–10PM,
   website link, logo + team photos, services (AI development, software,
   ZELDA women safety app).
3. Ask every partner/client for a review — reviews drive local ranking.

## 4. Backlinks — the "top of Google" engine (ongoing)
Free, high-value first batch:
- [ ] LinkedIn company page → link to site (fix the placeholder profile first)
- [ ] GitHub org profile + repos → link to site
- [ ] Vercel showcase / templates referencing the build
- [ ] Google Play listing for ZELDA (when published) → link to /products
- [ ] India/TN business directories (JustDial, IndiaMART, Sulekha, Clutch, GoodFirms)
- [ ] Press from Thinamalar 'Vali Kaati' event (ask for a link to /case-studies/zelda-women-safety)
- [ ] Founder LinkedIn posts + dev.to/Hashnode article on building ZELDA
Anchor text plan: mostly "ZYRA Technologies", "ZELDA women safety app",
"software company in Trichy" — never buy links.

## 5. Keywords & targets (review monthly in GSC)
| Priority | Keyword | Target page |
|---|---|---|
| 1 | zyra technologies | / |
| 2 | zelda women safety app | /products |
| 3 | women safety app india | /products |
| 4 | software company trichy | / |
| 5 | AI development company India | /services/ai-generative-ai |
| 6 | software development services India | /services |
| 7 | women safety app tamil nadu | /products, /case-studies/zelda-women-safety |
| 8 | panic SOS app India / women help app | /products (FAQ) |

Do NOT chase "zelda" alone (Nintendo owns it) or bare "software company".

## 6. Biggest future lever (when ready)
Buy a custom domain (e.g. zyra.tech), add it in Vercel → set
`NEXT_PUBLIC_SITE_URL` to it → redeploy. Everything in `lib/seo.ts`
(canonicals, sitemap, OG, schema) switches automatically. Then in GSC:
Settings → Change of address. A vercel.app subdomain will always
underperform a real domain for competitive terms.

## 7. Success metrics (1–3 months)
- All 29 URLs "Indexed" in GSC
- Top-10 for: `zyra technologies`, `zelda women safety app`, `software company trichy`
- FAQ rich-result impressions on /products
- First GBP (Maps) visibility for "software company trichy"
