# Faraz Khan — UX Portfolio Site

## Original Problem Statement
Design a landing page for UX portfolio site with detailed case study and about me page. Reference: "Three Circle" Framer template (orange sidebar, cream/yellow palette, bold serif typography).

## User Choices
- Designer: **FARAZ KHAN**
- Landing: **6 projects**, **2 with full case studies**
- Bio content: realistic placeholder
- Contact: static page with `mailto:` link
- Integrations: none — static portfolio only

## Architecture
- React 19 SPA, React Router 7, Tailwind, lucide-react icons
- No backend changes (FastAPI template untouched)
- Persistent orange left sidebar (280px) + main content
- Fonts: Playfair Display (display), Outfit (body), JetBrains Mono (labels)

## Pages Implemented (2025-12)
- `/` Landing — hero, stats, featured project, manifesto, 5 other projects, marquee, services, testimonials, final CTA
- `/projects` — 6 project cards
- `/case/:slug` — detailed case study (solace-mental-wellness, nomad-banking); fallback for unknown slug
- `/about` — bio, values, skills, journey timeline, experience table, beyond-work, CTA
- `/services` — 4 services, process, 3 engagement packages
- `/contact` — primary mailto pill, detail cards, social links, 4 FAQs

## Quality
- Testing iteration 1: **frontend 100%**, 0 console errors, 10/10 flows pass
- data-testid attributes on all interactive elements

## Prioritized Backlog (P1/P2)
- [P1] Add 3rd & 4th detailed case study (atlas, kindred)
- [P1] Press / awards row on landing
- [P2] Light/dark theme toggle
- [P2] Real image swap (currently placeholder Unsplash/Pexels)
- [P2] Blog/writing section
- [P2] Animated cursor + custom selection cursor
