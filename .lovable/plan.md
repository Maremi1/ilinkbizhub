## Goal
Build ilinkbiz.com — a single, polished light-theme corporate site that summarizes the entire I Link group (Global, International, Rwanda, Tanzania, The Founder/Mama Mia Foundation) and routes visitors to each entity's standalone site.

## Design direction
- Editorial corporate: serif display (Cormorant / Instrument Serif) paired with refined sans (Work Sans / Inter), generous whitespace, fine rules, magazine-like grids.
- Light palette: paper white background, deep navy ink, muted slate body text, single luxe gold accent.
- Interactive background: subtle animated SVG world-map / circuit-line motif behind the hero (slow-drifting nodes connected by glowing arcs, reduced-motion safe).
- Interactive illustrations: hover-reactive "Equity Tree" SVG, animated 3-tier diamond (Global → International → National), value-creation loop with rotating phase highlighting, animated stat counters, lightbox-style entity cards that lift and reveal accent rule on hover.
- Transitions: route fade/slide via Motion, scroll-reveal sections (fade-in + slight upward translate), animated underline links, marquee for entity logos.

## Sitemap (TanStack file routes)
- `/` Home — hero with animated tagline, group overview, 5 entity gateway cards, philosophy strip, foundation teaser, CTA.
- `/about` — Vision, Mission, Philosophy, Founder legacy summary (from Founder PDF), HQ locations.
- `/ecosystem` — Architecture explainer: Global / International / National 3-tier diagram, equity tree, value loop, revenue flow.
- `/entities` — Index of all group companies as a grid; each card links to its own subsite (external).
- `/services` — Four pillars: Consultancy, iLink Academy, Strategic Investment, Technology Solutions.
- `/foundation` — Mama Mia's Foundation summary, links out.
- `/contact` — HQ addresses (Kigali, Dar es Salaam), email, contact form (mailto for now).

## Entity outbound links
- I Link Global → https://global.ilinkbiz.com
- I Link International → https://international.ilinkbiz.com
- I Link Rwanda → https://rwanda.ilinkbiz.com
- I Link Tanzania → https://tanzania.ilinkbiz.com
- The Founder / Legacy → https://thefounder.ilinkbiz.com
- (Ghana, Ethiopia listed as "Coming soon" placeholders since no URLs supplied.)

## Content sources
Pulled and condensed from the five PDFs: tagline, vision/mission, four-pillar ecosystem, iLink Academy programs, investment streams, fintech/EdTech/IoT platforms, governance framework, foundation, 3-tier architecture (Global/International/National), equity tree, value creation loop, revenue flow.

## Technical
- TanStack Start file-routes under `src/routes/` with shared `Header`/`Footer` components in `__root.tsx`.
- Tailwind v4 tokens in `src/styles.css`: paper, ink, slate, gold, hairline-border, soft-shadow.
- Fonts via `@fontsource/cormorant-garamond` + `@fontsource/work-sans` (no CDN @import).
- Motion (`motion/react`) for transitions; pure SVG + CSS for background and illustrations (no Three.js). Honor `prefers-reduced-motion`.
- Per-route `head()` meta (title, description, OG) for SEO.
- Generate 2–3 hero/section images via imagegen (abstract editorial — map/circuit, handshake, growth). Use real PDF-derived copy.
- All entity outbound links open in new tab with `rel="noopener"`.

## Out of scope (for now)
- No backend / Lovable Cloud (purely marketing site).
- Functional contact form submission — mailto link only.
- No game/canvas/WebGL background.
