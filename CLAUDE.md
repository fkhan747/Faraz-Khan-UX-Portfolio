# CLAUDE.md — Faraz's UX Portfolio (Emergent-free)

Read this first. This is Faraz Khan's personal portfolio site. **It no longer depends on Emergent** — it's a plain React (CRA + CRACO) app that builds with npm and hosts as static files on Netlify. Faraz works entirely in Claude / Claude Code now and hosts on Netlify. Do not reintroduce any Emergent dependency or tooling.

## The site lives in `frontend/`
Everything that matters for the website is in `frontend/`. (`backend/` is a leftover FastAPI app and is NOT used by the portfolio — the site is fully static.)

## Build & run (no Emergent, no flags)
```bash
cd frontend
npm install        # .npmrc sets legacy-peer-deps=true, so this just works
npm run build      # outputs frontend/build/  ← the deployable static site
# preview locally:
npx serve -s build
```
A prebuilt `frontend/build/` is already included in this zip, so it can be deployed without building first.

## What changed to remove Emergent (keep it this way)
- Deleted `@emergentbase/visual-edits` from `frontend/package.json`.
- Removed the `withVisualEdits` block from `frontend/craco.config.js`.
- Added `frontend/.npmrc` (`legacy-peer-deps=true`) so installs are clean.
- Pinned `ajv@8` in dependencies (fixes a react-scripts 5 / ajv-keywords build error).
- Added `frontend/public/_redirects` for Netlify SPA routing (deep links like `/case/recruitos` survive refresh; real files like `/recruitos/` are served first).

## Architecture
- React + react-router-dom, Tailwind + shadcn/ui, framer-motion, embla-carousel.
- Routing in `frontend/src/App.js`. Pages in `frontend/src/pages/`. Project/content data in `frontend/src/data/` (`content.js`, `auroraCase.js`, `finvistaCase.js`).
- Brand: bold **lowercase** display type, cream `#F7F1DA` cards, vermilion accent `#E94B1F`, yellow `#FFD93D` for "coming soon", mono uppercase eyebrows.

## Case studies currently in the site
- **FinVista** — full React case study (`/case/finvista`). Baseline, untouched.
- **Aurora** — full React case study (`/case/aurora`). Untouched.
- **RecruitOS** — merged: the interactive prototype is hosted at `frontend/public/recruitos/index.html` (served at `/recruitos/`), and `frontend/src/pages/RecruitosConcept.jsx` (`/case/recruitos`) embeds it in an iframe with a back link + "open full screen".
- A separate **AI-native concepts** section was added to `frontend/src/pages/Projects.jsx` (dark, AI-accented band) listing RecruitOS (live), KnowledgeOS + DecisionOS (in progress) — driven by the `concepts` array in `content.js`. This keeps the AI concepts visually distinct from the Aurora/FinVista client work.

## RecruitOS prototype internals (for editing it)
Single-file SPA at `frontend/public/recruitos/index.html`. Google AI / Material-3 design language (LOCKED): bg `#F7F9FC`, ink `#1F1F1F`, Google Blue `#1A73E8`, AI = Gemini gradient `linear-gradient(120deg,#4285F4,#9168F0 55%,#E8519B)` via `.grad`/`.grain`, sparkle ✦. Fonts: Plus Jakarta Sans + Inter + Roboto Mono. Client-side router (`VIEWS`/`go()`), global "Ask AI" chatbot, canon data (8 candidates / 6 projects, Acme Corp is the active project). The comment/annotation tool was removed. **Still open: an alignment pass — render + screenshot and fix.**

## Next steps queue
1. Host on Netlify (drag `frontend/build` to app.netlify.com/drop), then a custom domain.
2. RecruitOS alignment polish (screenshot-driven).
3. Build KnowledgeOS, then DecisionOS, and merge each into the `concepts` array + a page, same as RecruitOS.
4. Optional: a written narrative case-study wrapper for RecruitOS.
