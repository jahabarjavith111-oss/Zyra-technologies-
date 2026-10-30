# ZyraTec Solutions

**ZyraTec Solutions** (also written **ZyraTec**) is a software and AI development company headquartered in Ammapettai, Tiruchirappalli (Trichy), Tamil Nadu, India.

- **Website:** https://zyratec.vercel.app
- **Founder & CEO:** Bragatheesh V
- **Co-Founder & CTO:** Abdul Javid J
- **Chief Marketing Officer:** Cindhuja B
- **Chief Human Resources Officer:** Dharshini S
- **Location:** Ammapettai, Tiruchirappalli (Trichy) 620009, Tamil Nadu, India
- **Contact:** zyracmt@gmail.com · +91 88079 84687 · +91 93459 92521

> ZyraTec is a software company in India. It is not related to *Zyrtec*, the allergy medication. The two share a similar spelling and nothing else.

## What we do

| Service | What it covers |
| --- | --- |
| AI & Generative AI | LLM applications, RAG systems, agents, evaluations, guardrails |
| Software Engineering | Enterprise applications, APIs, full-stack delivery |
| Data & Analytics | Pipelines, warehousing, business intelligence |
| Cloud & DevOps | AWS, containers, CI/CD, infrastructure as code, cost optimisation |
| Cybersecurity | Application security, IAM, monitoring |
| Digital Products | SaaS platforms, mobile apps, AI-powered products |

## Product: ZELDA

**ZELDA** is a women safety emergency response system — a mobile app for users plus a web dashboard for police and responders.

- One-tap SOS with a cancellation window to prevent false alarms
- Live GPS streaming while a case is open
- Automatic video evidence recording after a countdown
- Real-time case delivery to a centralised responder dashboard
- Role-based access to cases and evidence
- Stack: Flutter app, React dashboard, Node.js/Express API, MySQL, Socket.IO

ZELDA was publicly demonstrated at Thinamalar "Vali Kaati" on 29 March 2026 in Tiruchirappalli to around 200 attendees.

## This repository

The source for the ZyraTec website — Next.js 16, Tailwind CSS 4, dark premium tech theme.

### Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Pages

- `/` — Home (hero, capabilities, intelligence, products, solutions, tech, process, work, leadership, careers, contact)
- `/about`, `/services`, `/products`, `/solutions`, `/technology`
- `/case-studies`, `/leadership`, `/careers`, `/contact`
- `/custom-software-trichy`, `/campus-safety`, `/workplace-safety`
- `/services/[slug]` × 6, `/solutions/[slug]` × 6
- `/leadership/[slug]` × 4, `/case-studies/[slug]` × 3

### Env

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — canonical URL (sitemap, robots, metadata, `llms.txt`)
- `NEXT_PUBLIC_FORM_ENDPOINT` — optional Formspree/Web3Forms endpoint.
  When empty, the contact form falls back to `mailto:`.

### Deploy (Vercel)

1. Push this folder to GitHub.
2. Import the repo in Vercel (framework preset: Next.js).
3. Set env vars above in Vercel project settings.
4. Deploy — `sitemap.xml`, `robots.txt` and `llms.txt` generate automatically.

### Build

```bash
npm run build
npm run start
```
