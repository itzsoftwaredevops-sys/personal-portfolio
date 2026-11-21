# Abdulganiyyu Mustapha Muhammad — Personal Developer Portfolio

> **Brand Identity:** ITZ SOFTWARE DEVOPS  
> **Headline:** Software Engineer | Full-Stack Developer | Blockchain Engineer | Smart Contract Developer  
> **Location:** Nigeria  
> **Canonical Domain (Recommended):** `abdulganiyyu.com` / `abdulganiyyu.dev` / `itzsoftwaredevops.dev`  
> **Primary Contact:** [agmuhammadmustapha@gmail.com](mailto:agmuhammadmustapha@gmail.com)  

---

## 🚀 Overview

This repository houses the official personal digital headquarters and engineering portfolio of **Abdulganiyyu Mustapha Muhammad** (`Itz Software DevOps`).

Engineered with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, this platform establishes a strong, credible, and verifiable professional identity across search engines, recruiter pipelines, Web3 ecosystems, and open-source communities.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router, Server Components & Static Prerendering)
- **Language:** TypeScript (Strict typing & explicit interfaces)
- **Styling:** Tailwind CSS (Utility-first with dark-mode aesthetic: `#080B12`, `#101522`, `#141B2B`)
- **Typography:** Space Grotesk (Headings), Inter (Interface), JetBrains Mono (Code/Metadata)
- **Icons:** Lucide React & Handcrafted SVG Brand Icons
- **SEO & Schema:** Schema.org JSON-LD (Person, ProfilePage, WebSite, Breadcrumbs, BlogPosting)
- **Syndication:** RSS 2.0 Feed (`/feed.xml`), XML Sitemap (`/sitemap.xml`), Robots (`/robots.txt`)

---

## 📂 Architecture & Directory Structure

```text
├── public/                 # Static assets, favicons, illustrations
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── about/          # Professional biography, academic background, SIWES
│   │   ├── achievements/   # Documented competition milestones & hackathon awards
│   │   ├── blog/           # Technical engineering writing & architectural deep dives
│   │   │   └── [slug]/     # Dynamic article case study pages
│   │   ├── contact/        # Direct channels & client-side mailto inquiry system
│   │   ├── experience/     # Chronological timeline (FUD, CRAI LAB, Stellar, Byzantine)
│   │   ├── privacy/        # Zero-tracking data privacy disclosure
│   │   ├── projects/       # Complete engineering portfolio with category filters
│   │   │   └── [slug]/     # Dynamic technical case study pages
│   │   ├── feed.xml/       # Auto-generated RSS 2.0 feed
│   │   ├── globals.css     # Dark-mode theme variables, grid background, ambient glow
│   │   ├── layout.tsx      # Root layout with Navbar, Footer, and Schema JSON-LD
│   │   ├── page.tsx        # High-impact engineering home page
│   │   ├── robots.ts       # Dynamic robots.txt generation
│   │   └── sitemap.ts      # Automated XML sitemap generation
│   ├── components/
│   │   ├── layout/         # Responsive Navbar & Footer
│   │   ├── seo/            # Schema.org structured data components (Person, WebSite, etc.)
│   │   └── ui/             # Badges, ProjectCards, ContactForm, SectionHeadings, Icons
│   └── data/               # Centralized data layer (Zero duplication, easy updates)
│       ├── achievements.ts # Verifiable rankings & metrics
│       ├── blog.ts         # Authentic engineering deep dives & case studies
│       ├── experience.ts   # Chronological educational & industrial training records
│       ├── projects.ts     # Detailed specifications for VeriCred, Stellar, etc.
│       ├── siteConfig.ts   # Official personal identity, social links, SEO defaults
│       └── skills.ts       # Tiered capabilities without arbitrary percentages
```

---

## 🌟 Featured Engineering Projects

1. **[VeriCred](https://vericred.web.app/):** Decentralized academic credential verification network built with RFC 8785 canonical JSON, SHA-256 digests, and Ethereum Sepolia smart contracts.
2. **Stellar Open-Source Contributions:** Drips Stellar Wave 10 milestone: 45 out of 45 assigned issues resolved and merged across 8+ community repositories in 7 days.
3. **DAGPulse Mining DApp:** Top 4 placement in Wave 3 competition for decentralized real-time mining telemetry and Web3 wallet integration.
4. **BlockDAG IntentX Protocol:** Protocol engineering on BlockDAG with a Wave 1 leaderboard score of 74.0/100 (ranked 13th to 14th).
5. **Byzantine Nexus NG:** Collaborative Web3 engineering initiative with Muhammad Mukhtar Balogun (*"Built for Faults. Designed to Dominate."*).
6. **CipherMesh / OminiMesh:** Architectural research on peer-to-peer mesh networks and privacy-preserving routing.

---

## 🔍 Search Engine Optimization (SEO) & Google Search Console

### Structured Data (JSON-LD)
The website embeds valid Schema.org metadata:
- **`Person`**: Establishes identity for *Abdulganiyyu Mustapha Muhammad*, alternate name *Itz Software DevOps*, educational affiliation with *Federal University Dutse*, and verified `sameAs` links to GitHub, X, Telegram, and WhatsApp.
- **`WebSite`** & **`ProfilePage`**: Clarifies the domain as the official digital headquarters.
- **`BreadcrumbList`**: Enhances search result navigation.
- **`BlogPosting`**: Indexes technical articles for Google Search.

### Google Search Console Verification Steps
1. Navigate to [Google Search Console](https://search.google.com/search-console/).
2. Add a new **URL prefix** property with your deployed URL (e.g., `https://personal-portfolio-itzsoftwaredevops.vercel.app` or your custom domain).
3. Verify ownership using the HTML tag or DNS TXT record method.
4. Under **Sitemaps**, submit: `https://your-domain/sitemap.xml`.
5. Under **URL Inspection**, enter your homepage and request indexing.

---

## 🌐 Custom Domain Setup (Vercel)

1. Open your project on the [Vercel Dashboard](https://vercel.com).
2. Go to **Settings** → **Domains**.
3. Add your preferred domain (recommended: `abdulganiyyu.com` or `abdulganiyyu.dev`).
4. Follow the DNS instructions to add an `A` record (`76.76.21.21`) or `CNAME` (`cname.vercel-dns.com`).
5. Update `siteConfig.domain.current` in `src/data/siteConfig.ts` to reflect your new custom domain.

---

## 💻 Local Development & Verification

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run lint checks
npm run lint

# Build production bundle
npm run build
```

---

## 📜 License & Provenance

© 2026 Abdulganiyyu Mustapha Muhammad (Itz Software DevOps). All engineering rights reserved.
