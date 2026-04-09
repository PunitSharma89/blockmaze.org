# System Prompt

You are the Aristotle First Principles Deconstructor, a strategic reasoning engine trained to think the way Aristotle originally defined first principles: identify the foundational truths that cannot be deduced from any other proposition, then build upward from those truths alone.

When the user describes any challenge, problem, decision, or situation, execute this exact analytical sequence:

## PHASE 1: ASSUMPTION AUTOPSY
Identify every assumption embedded in how the user framed their problem. List each one explicitly. Most people don't realize 80% of their 'problem' is inherited assumptions they never questioned. Flag which assumptions are borrowed from convention, competitors, industry norms, or fear.

## PHASE 2: IRREDUCIBLE TRUTHS
Strip the situation down to only what is verifiably, undeniably true. Not what's "generally accepted." Not what competitors do. Not what worked before. Only what remains when every assumption is removed. These are the first principles. Present them as a numbered list of foundational truths.

## PHASE 3: RECONSTRUCTION FROM ZERO
Using ONLY the irreducible truths from Phase 2, rebuild the solution as if no prior approach existed. Ask: "If we were solving this for the first time with no knowledge of how anyone else has done it, what would we build?" Generate 3 distinct reconstructed approaches, each starting purely from first principles.

## PHASE 4: ASSUMPTION vs. TRUTH MAP
Create a clear comparison: on one side, the assumptions the user started with. On the other side, the first principles that replaced them. Show exactly where conventional thinking was leading them astray and where the new foundation leads.

## PHASE 5: THE ARISTOTELIAN MOVE
Identify the single highest-leverage action that emerges from first principles thinking. This is the move that conventional analysis would never surface because it requires abandoning assumptions that "everyone knows are true." Present it as a clear, specific, immediately executable recommendation.

For every phase, write in direct, clear language. No filler. No hedging. Think like a philosopher who charges $5,000/hr for clarity.

Start by asking: What problem, decision, or situation do you want me to deconstruct to its foundation?

---

# Blockmaze Foundation - Website Rebuild Requirements

## CRITICAL RULE: EXACT COPY — NO MODIFICATIONS

**DO NOT make any changes to the content, layout, structure, or design by your own judgment.** Every page must be an exact 1:1 copy of the reference website ([blockmaze.org](https://blockmaze.org/)). This means:
- Copy the **exact same text content** — do not rewrite, rephrase, or "improve" any copy
- Copy the **exact same layout and section ordering** — do not rearrange sections
- Copy the **exact same visual design** — spacing, colors, typography, alignment
- Copy the **exact same navigation structure** — menu items, dropdowns, links
- Copy the **exact same images and assets** — download and use the originals
- If something looks inconsistent on the WordPress site, **replicate the inconsistency** — do not "fix" it
- Only deviate when explicitly instructed by the user

**The reference website is the single source of truth. When in doubt, match the original.**

---

## Project Overview

Rebuild the existing WordPress website ([blockmaze.org](https://blockmaze.org/)) into a modern **Next.js + Sanity CMS** application. The design will be sourced from **Figma** and the styling will be done entirely in **Tailwind CSS**. The blog system will be fully functional through **Sanity CMS**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| CMS | Sanity (for blog, news, and dynamic content) |
| Styling | Tailwind CSS |
| Design Source | Figma (all page designs will be created/imported in Figma first) |
| Routing | Next.js App Router (file-based routing) |
| Rendering | SSG for static pages, SSR/ISR for Sanity-powered pages |
| Deployment | Vercel (recommended) / TBD |

---

## Source Website Analysis

**Current site:** https://blockmaze.org/
**Built with:** WordPress + Divi Theme
**Font:** Inter (headings + body)
**Color Scheme:**
- Background: `#FFFFFF` (white)
- Primary Text: `#0F0F0F` (near black)
- Secondary Text: `#666666` (gray)
- Heading Text: `#333333` (dark gray)
- Accent/Link Color: `#2EA3F2` (blue)
- Dark Sections: `#272727` (dark gray/black)
- Light Accent Text: `#A9A9A9` (silver gray)

**Layout:** Max container width `1080px` (standard), `1596px` (wide), centered with 80% width wrapper.

**Responsive Breakpoints:**
- Desktop: > 981px
- Tablet: 768px — 980px
- Mobile: < 767px
- Small Mobile: < 479px

---

## All Pages to Build (28 pages)

### Core Pages
1. **Home** — `/` (Hero, feature sections, CTAs, overview)
2. **About** — `/about` (Foundation responsibilities, issuer verification, ecosystem, leadership, future direction)
3. **Contact Us** — `/contact-us` (Contact form, details)
4. **Privacy Policy** — `/privacy-policy`
5. **Terms of Use** — `/terms-of-use`

### Product / Protocol Pages
6. **Blockmaze Protocol** — `/blockmaze-protocol`
7. **Tokenomics** — `/tokenomics` (Token distribution, charts, economics)
8. **Swap (RWA Swap Platform)** — `/swap` (On-chain asset exchange, swap widget/interface)
9. **Whitepaper** — `/whitepaper` (Dark themed hero, document display)
10. **Whitepaper Doc** — `/whitepaper-doc` (Full whitepaper document view)
11. **Yellow Paper** — `/blockmaze-yellow-paper`

### Governance & Network
12. **Governance** — `/governance` (Policy framework, compliance, risk review)
13. **DAO** — `/dao`
14. **Validator** — `/validator`
15. **Delegator** — `/delegator`
16. **Validator Handbook** — `/blockmaze-validator-handbook`
17. **Delegator Handbook** — `/blockmaze-delegator-handbook`

### Technical Documentation
18. **Architecture Diagram** — `/blockmaze-architecture-diagram`
19. **Security Model & Slashing Rules** — `/blockmaze-security-model-slashing-rules`
20. **Emission & Vesting** — `/blockmaze-emission-vesting`
21. **RWA Issuer Framework** — `/blockmaze-rwa-issuer-framework`
22. **Custody & Redemption Responsibility Matrix** — `/blockmaze-custody-redemption-responsibility-matrix`
23. **Exchange Listing** — `/blockmaze-exchange-listing`
24. **Legal Documentation** — `/legal-documentation`
25. **RFP (Request for Proposal)** — `/rfp`

### Content Pages (Sanity-powered)
26. **Blogs** — `/blogs` (Blog listing with grid layout, categories, pagination)
27. **News** — `/news` (News/updates listing)
28. **Knowledge Hub** — `/knowledge-hub` (Resource documents listing)

### Blog Posts (Dynamic — Sanity CMS)
- Individual blog post pages rendered from Sanity
- 7 existing posts to migrate:
  1. Why a Layer 0 Blockchain Matters for Regulated Real-World Asset Tokenization
  2. Why Do Institutions Need a Dedicated Real-World Asset Tokenization Platform?
  3. What Role Do Validator Node Rewards Play in Institutional Blockchain Networks?
  4. The Role of Governance Frameworks in Institutional Blockchain Adoption
  5. Why Tokenization Infrastructure Must Reflect Legal Ownership Systems
  6. Why Institutional Capital Requires Verifiable Blockchain Infrastructure
  7. Why Smart Contracts Cannot Represent Legal Ownership Alone

### Blog Categories
- Blockchain Regulation
- Blockchain Asset Tokenization
- Blockchain Governance Framework
- Blockchain Infrastructure
- Layer-0 Protocol
- Real-World Asset Tokenization

---

## Common / Shared Components

These components appear across multiple pages and must be built as reusable components:

### Layout Components
| Component | Description |
|-----------|-------------|
| `Header` | Fixed header with logo (250x62px), navigation menu with dropdowns, mobile hamburger menu, search |
| `Footer` | Dark background, widget areas, navigation links, social icons, copyright |
| `Layout` | Wrapper component with Header + Footer + main content area |
| `Breadcrumb` | "Home > Page Name" breadcrumb navigation |
| `Container` | Max-width centered container (1080px standard, wide variant) |
| `Sidebar` | Optional sidebar layout (79.125% main / 20.875% sidebar) |

### UI Components
| Component | Description |
|-----------|-------------|
| `Button` | Primary/secondary CTAs with hover states, multiple variants |
| `HeroSection` | Banner with background image, heading, subtext, CTA buttons |
| `SectionHeading` | Consistent section title styling |
| `Card` | Reusable card component for blog posts, features, resources |
| `BlogCard` | Blog post preview card (image, title, excerpt, category, date) |
| `BlogGrid` | Grid layout for blog listing (1/2/3 column responsive) |
| `Blurb` | Icon + text combination module |
| `SearchBar` | Search input with form action |
| `Pagination` | Page navigation for blog/news listings |
| `JsonLd` | JSON-LD structured data component (SEO meta handled via Next.js Metadata API) |
| `ContactForm` | Reusable form component |
| `DocumentViewer` | For whitepaper/document display |

### Navigation
| Component | Description |
|-----------|-------------|
| `Navbar` | Desktop navigation with dropdown menus |
| `MobileMenu` | Hamburger menu with slide-out navigation |
| `NavDropdown` | Dropdown submenu component |

---

## CSS / Styling Architecture

### Tailwind CSS Structure
All styling must use Tailwind CSS exclusively. No inline styles or separate CSS modules unless absolutely necessary.

```
app/
  globals.css              # Tailwind base imports, CSS variables, global resets, common styles
  responsive.css           # Responsive-specific overrides and utility classes
tailwind.config.ts         # Custom theme config (colors, fonts, breakpoints, spacing)
```

### globals.css — Must Include
- Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
- CSS custom properties for design tokens (colors, fonts, spacing)
- Common component classes using `@apply`
- Typography base styles
- Scrollbar, selection, and focus styles

### responsive.css — Must Include
- Mobile-first responsive overrides
- Breakpoint-specific layout adjustments
- Touch-friendly sizing for mobile
- Hide/show utilities for different viewpoints
- Navigation responsive behavior

### tailwind.config.js — Custom Theme
```js
// Colors
colors: {
  primary: '#2EA3F2',
  dark: '#0F0F0F',
  gray: { DEFAULT: '#666666', dark: '#333333', light: '#A9A9A9' },
  section: { dark: '#272727' },
  white: '#FFFFFF',
}

// Fonts
fontFamily: {
  sans: ['Inter', 'Arial', 'sans-serif'],
}

// Breakpoints (match WordPress site)
screens: {
  sm: '480px',
  md: '768px',
  lg: '981px',
  xl: '1080px',
  '2xl': '1596px',
}

// Container
container: {
  center: true,
  padding: '1rem',
  screens: { xl: '1080px' },
}
```

---

## Sanity CMS Schema (Blog System)

### Content Types to Define in Sanity

```
schemas/
  blog.js           # Blog post schema
  category.js       # Blog categories
  author.js         # Author profiles
  news.js           # News/updates
  knowledgeHub.js   # Knowledge hub resources
  siteSettings.js   # Global site settings (logo, social links, footer text)
```

### Blog Post Schema Fields
- `title` — string (required)
- `slug` — slug (auto-generated from title)
- `excerpt` — text (short description)
- `body` — rich text / portable text (full content)
- `featuredImage` — image with alt text
- `category` — reference to Category
- `tags` — array of strings
- `author` — reference to Author
- `publishedAt` — datetime
- `seo` — object (metaTitle, metaDescription, ogImage)

### Category Schema Fields
- `title` — string
- `slug` — slug
- `description` — text

### Author Schema Fields
- `name` — string
- `slug` — slug
- `image` — image
- `bio` — text

---

## Folder Structure

```
blockmaze.org/
  public/
    images/                # Static images (logo, banners, icons)
    fonts/                 # Inter font files (if self-hosted)
  app/                     # Next.js App Router (file-based routing)
    layout.tsx             # Root layout (Header + Footer wrapper, font loading)
    page.tsx               # Home page — /
    globals.css            # Tailwind base imports, CSS variables, common styles
    responsive.css         # Responsive-specific overrides
    not-found.tsx          # Custom 404 page
    about/
      page.tsx             # About — /about
    contact-us/
      page.tsx             # Contact Us — /contact-us
    privacy-policy/
      page.tsx             # Privacy Policy — /privacy-policy
    terms-of-use/
      page.tsx             # Terms of Use — /terms-of-use
    blockmaze-protocol/
      page.tsx             # Protocol — /blockmaze-protocol
    tokenomics/
      page.tsx             # Tokenomics — /tokenomics
    swap/
      page.tsx             # RWA Swap Platform — /swap
    whitepaper/
      page.tsx             # Whitepaper — /whitepaper
    whitepaper-doc/
      page.tsx             # Whitepaper Doc — /whitepaper-doc
    blockmaze-yellow-paper/
      page.tsx             # Yellow Paper — /blockmaze-yellow-paper
    governance/
      page.tsx             # Governance — /governance
    dao/
      page.tsx             # DAO — /dao
    validator/
      page.tsx             # Validator — /validator
    delegator/
      page.tsx             # Delegator — /delegator
    blockmaze-validator-handbook/
      page.tsx             # Validator Handbook
    blockmaze-delegator-handbook/
      page.tsx             # Delegator Handbook
    blockmaze-architecture-diagram/
      page.tsx             # Architecture Diagram
    blockmaze-security-model-slashing-rules/
      page.tsx             # Security Model & Slashing Rules
    blockmaze-emission-vesting/
      page.tsx             # Emission & Vesting
    blockmaze-rwa-issuer-framework/
      page.tsx             # RWA Issuer Framework
    blockmaze-custody-redemption-responsibility-matrix/
      page.tsx             # Custody & Redemption Matrix
    blockmaze-exchange-listing/
      page.tsx             # Exchange Listing
    legal-documentation/
      page.tsx             # Legal Documentation
    rfp/
      page.tsx             # RFP
    blogs/
      page.tsx             # Blog listing — /blogs (Sanity SSR/ISR)
      [slug]/
        page.tsx           # Individual blog post — /blogs/:slug (Sanity dynamic)
    news/
      page.tsx             # News listing — /news (Sanity SSR/ISR)
    knowledge-hub/
      page.tsx             # Knowledge Hub — /knowledge-hub (Sanity SSR/ISR)
    category/
      [slug]/
        page.tsx           # Category filtered blogs — /category/:slug
  components/
    layout/
      Header.tsx
      Footer.tsx
      Breadcrumb.tsx
      Container.tsx
      Sidebar.tsx
    ui/
      Button.tsx
      HeroSection.tsx
      SectionHeading.tsx
      Card.tsx
      BlogCard.tsx
      BlogGrid.tsx
      Blurb.tsx
      SearchBar.tsx
      Pagination.tsx
      ContactForm.tsx
      DocumentViewer.tsx
    navigation/
      Navbar.tsx
      MobileMenu.tsx
      NavDropdown.tsx
  lib/
    sanity.ts              # Sanity client configuration
    queries.ts             # GROQ queries for fetching content
  hooks/
    useSanity.ts           # Custom hook for Sanity data fetching (client components)
  utils/
    helpers.ts             # Date formatting, slug utils, etc.
  sanity/
    schemas/
      blog.ts
      category.ts
      author.ts
      news.ts
      knowledgeHub.ts
      siteSettings.ts
    sanity.config.ts
    sanity.cli.ts
  tailwind.config.ts
  postcss.config.mjs
  next.config.ts
  package.json
  .env.local               # Sanity project ID, dataset, API token
  CLAUDE.md                # This file
```

---

## Routing Map (Next.js App Router — file-based)

| Route | App Router Path | Rendering | Data Source |
|-------|----------------|-----------|-------------|
| `/` | `app/page.tsx` | SSG + ISR | Static + Sanity (latest blogs) |
| `/about` | `app/about/page.tsx` | SSG | Static |
| `/contact-us` | `app/contact-us/page.tsx` | SSG | Static |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | SSG | Static |
| `/terms-of-use` | `app/terms-of-use/page.tsx` | SSG | Static |
| `/blockmaze-protocol` | `app/blockmaze-protocol/page.tsx` | SSG | Static |
| `/tokenomics` | `app/tokenomics/page.tsx` | SSG | Static |
| `/swap` | `app/swap/page.tsx` | SSG | Static |
| `/whitepaper` | `app/whitepaper/page.tsx` | SSG | Static |
| `/whitepaper-doc` | `app/whitepaper-doc/page.tsx` | SSG | Static |
| `/blockmaze-yellow-paper` | `app/blockmaze-yellow-paper/page.tsx` | SSG | Static |
| `/governance` | `app/governance/page.tsx` | SSG | Static |
| `/dao` | `app/dao/page.tsx` | SSG | Static |
| `/validator` | `app/validator/page.tsx` | SSG | Static |
| `/delegator` | `app/delegator/page.tsx` | SSG | Static |
| `/blockmaze-validator-handbook` | `app/blockmaze-validator-handbook/page.tsx` | SSG | Static |
| `/blockmaze-delegator-handbook` | `app/blockmaze-delegator-handbook/page.tsx` | SSG | Static |
| `/blockmaze-architecture-diagram` | `app/blockmaze-architecture-diagram/page.tsx` | SSG | Static |
| `/blockmaze-security-model-slashing-rules` | `app/blockmaze-security-model-slashing-rules/page.tsx` | SSG | Static |
| `/blockmaze-emission-vesting` | `app/blockmaze-emission-vesting/page.tsx` | SSG | Static |
| `/blockmaze-rwa-issuer-framework` | `app/blockmaze-rwa-issuer-framework/page.tsx` | SSG | Static |
| `/blockmaze-custody-redemption-responsibility-matrix` | `app/blockmaze-custody-redemption-responsibility-matrix/page.tsx` | SSG | Static |
| `/blockmaze-exchange-listing` | `app/blockmaze-exchange-listing/page.tsx` | SSG | Static |
| `/legal-documentation` | `app/legal-documentation/page.tsx` | SSG | Static |
| `/rfp` | `app/rfp/page.tsx` | SSG | Static |
| `/blogs` | `app/blogs/page.tsx` | ISR (revalidate: 60) | Sanity |
| `/blogs/:slug` | `app/blogs/[slug]/page.tsx` | ISR (revalidate: 60) | Sanity (generateStaticParams) |
| `/news` | `app/news/page.tsx` | ISR (revalidate: 60) | Sanity |
| `/knowledge-hub` | `app/knowledge-hub/page.tsx` | ISR (revalidate: 60) | Sanity |
| `/category/:slug` | `app/category/[slug]/page.tsx` | ISR (revalidate: 60) | Sanity |
| `*` | `app/not-found.tsx` | SSG | Static |

### Rendering Strategy
- **SSG (Static Site Generation)** — all static pages are pre-rendered at build time
- **ISR (Incremental Static Regeneration)** — Sanity-powered pages revalidate every 60 seconds
- **Server Components** — default for all pages (data fetching on server)
- **Client Components** — only where interactivity is needed (marked with `'use client'`)

---

## Figma Design Workflow

1. **Import/recreate** all WordPress page layouts in Figma
2. **Design system** in Figma: define colors, typography, spacing, components
3. Use **Figma MCP** tools to extract design context and generate code
4. Adapt Figma output to project's Next.js + Tailwind conventions
5. Ensure pixel-perfect implementation matching Figma designs

---

## SEO Requirements

- All pages must export `metadata` or use `generateMetadata()` for dynamic SEO (Next.js Metadata API)
- Open Graph tags for social sharing (via metadata exports)
- JSON-LD structured data (Organization, WebSite, BlogPosting, BreadcrumbList)
- Canonical URLs on all pages
- Auto sitemap via `app/sitemap.ts` (Next.js built-in)
- Auto robots.txt via `app/robots.ts`
- Clean semantic HTML (h1-h6 hierarchy, alt tags on images)
- Breadcrumb navigation with schema markup
- Use `next/image` for all images (automatic optimization, WebP, lazy loading)

---

## Analytics

- Google Analytics: `G-NZ5ZXR8PKJ`
- Google Ads Conversion Tracking: `AW-757510680`

---

## Development Phases

### Phase 1 — Setup & Foundation
- [ ] Initialize Next.js 15 project with App Router and TypeScript
- [ ] Configure Tailwind CSS with custom theme
- [ ] Set up Sanity project and schemas
- [ ] Create globals.css and responsive.css
- [ ] Configure next.config.ts (image domains, redirects, etc.)
- [ ] Build all common/shared components

### Phase 2 — Figma Design
- [ ] Create/import all page designs in Figma
- [ ] Define design system (colors, typography, components)
- [ ] Review and approve designs

### Phase 3 — Core Pages
- [ ] Build Layout (Header, Footer, Breadcrumb)
- [ ] Build Home page
- [ ] Build About page
- [ ] Build Contact Us page
- [ ] Build all static content pages

### Phase 4 — Blog System (Sanity)
- [ ] Configure Sanity schemas (blog, category, author)
- [ ] Build blog listing page with grid, filters, pagination
- [ ] Build individual blog post page
- [ ] Migrate all 7 existing blog posts to Sanity
- [ ] Build category filtering
- [ ] Build News page
- [ ] Build Knowledge Hub page

### Phase 5 — Specialized Pages
- [ ] Build Tokenomics page (charts, data visualization)
- [ ] Build Swap page (interface/widget)
- [ ] Build Whitepaper pages
- [ ] Build Governance, DAO, Validator, Delegator pages
- [ ] Build all handbook and documentation pages

### Phase 6 — Polish & Launch
- [ ] SEO implementation across all pages
- [ ] Responsive testing on all breakpoints
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Analytics integration
- [ ] Final QA and launch

---

## Key Rules

1. **Next.js App Router** — each page in its own `app/<route>/page.tsx` file
2. **Server Components by default** — only add `'use client'` where interactivity is required
3. **All common components must be reusable** — shared across pages via `components/`
4. **Tailwind CSS only** — no CSS modules, styled-components, or inline styles
5. **Common CSS in globals.css** — shared styles, variables, base typography
6. **Responsive CSS in responsive.css** — all responsive overrides in one place
7. **All pages linked together** — use `next/link` for internal navigation, `next/image` for images
8. **Blog powered by Sanity** — all blog content managed through Sanity Studio
9. **Design from Figma** — all implementations must match Figma designs
10. **Match WordPress site exactly** — same content, layout, and user experience
11. **SEO via Metadata API** — use `export const metadata` or `generateMetadata()` on every page
12. **TypeScript throughout** — all files use `.tsx` / `.ts` extensions