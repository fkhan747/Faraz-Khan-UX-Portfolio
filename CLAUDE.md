# CLAUDE.md — Faraz Khan's UX Portfolio

Read this first. Faraz's personal portfolio: a plain React (CRA + CRACO) app in
`frontend/`, fully static, deployed to **GitHub Pages** at **www.khanfaraz.in**
from a **private repo** (GitHub Pro). There is no backend, no Netlify, no
Emergent — do not reintroduce any of them.

## Design language (current)
Dark near-black site (`#100210`) with a comic/neon accent language (magenta
`#F0186C`, purple `#7B2FBE`, cyan `#17C3E8`, yellow `#F2D50F`), Title Case
headings, bottom-nav chrome. Shared comic CSS lives in
`src/components/neonStyle.jsx`. Never use em-dashes in copy; write human.

## Case studies — names, routes, access
One true name everywhere (no legacy dual names):

| Study | Slug/route | Access |
|---|---|---|
| Meridian Institute Analytics | `/case/meridian` | open, leads the order |
| FinVista | `/case/finvista` | **locked (vault)** |
| Aurora | `/case/aurora` | **locked (vault)** |
| Jack of All Threads | `/case/joat` | **locked (vault)** |
| Slate (concept) | `/case/slate`, prototype `/slate/` | open |
| Almanac (concept, dormant `live:false`) | `/case/almanac`, prototype `/almanac/` | open |
| Crux (concept) | `/case/crux`, prototype `/crux/` | open |

Old URLs (`recruitos`, `knowledgeos`, `decisionos`, `somethings-cooking`)
redirect via `<Navigate>` routes in `App.js` + static stubs in
`public/<old>/index.html` and `public/case/<old>/index.html`. Keep those stubs.

Data files: `src/data/<name>Case.js` exporting the matching name (`meridian`,
`finvista`, `aurora`, `joat`, `slate`, `almanac`, `crux`). Cards/order come from
`src/data/content.js` (`projects` + `concepts`).

## The vault (confidential case studies)
FinVista, Aurora and JOAT are **AES-256-GCM encrypted on the deployed site**:
- Written content ships as `public/locked/<slug>.enc` (generated, gitignored);
  the app never imports their data modules — `CaseStudyGate` decrypts on unlock
  and provides data via `useCaseData()`.
- All screenshots in `build/{finvista,aurora,joat}/` are encrypted by the
  postbuild step (`cover.jpg` stays plain — public card teaser). Pages render
  them through `VaultImage`/`PhoneFrame`/`Lightbox`, which decrypt to object
  URLs at view time.
- Format: `CSE1` magic + 12-byte IV + ciphertext; PBKDF2 (fixed public salt in
  `src/lib/vault.js`, 150k iters). **No password or hash exists in source** —
  unlock succeeds only if AES-GCM auth succeeds. Unlock is EPHEMERAL: leaving a
  case study re-locks it (Faraz's explicit requirement — never persist it).
- The password lives ONLY in `frontend/.env.local` (`CS_PW=...`, gitignored) —
  ask Faraz if missing; never commit it or write it into tracked files.
- Build pipeline: `prestart`/`prebuild` → `scripts/encrypt-case-data.mjs`;
  `postbuild` → react-snap, then `scripts/encrypt-build.mjs` (encrypts
  screenshots + fails the build if confidential text appears in built JS/HTML).

## Build & deploy
```bash
cd frontend
npm install            # .npmrc sets legacy-peer-deps
CI=false npm run build # prebuild encrypt → craco → react-snap → postbuild encrypt+leak-check
npx gh-pages -d build --dotfiles   # or ../deploy.sh
```
Source lives on `main`, built output on `gh-pages`. `public/CNAME` +
`public/.nojekyll` must ride every build. Get Faraz's go-ahead before live
deploys; verify live with curl after (Pages can lag). No private-file stripping
is needed anymore — nothing private sits in `public/`.

Gotchas: use nvm node 20.20.2 (`/usr/local/bin/node` is broken on this Mac);
react-snap port 45678 zombie → `lsof -ti :45678 | xargs kill -9`; never pipe
builds (masks exit codes).

## Hidden interview deck
`/deck/` = encrypted 35-slide deck (same password, its own AES payload),
reached via the TreasureSpark easter egg in `Layout.jsx`. Confidential images
are inlined as data URIs inside its encrypted payload, so encrypting the site
images does not affect it. Plaintext working copy: `presentation/` (gitignored,
local only). The hosted payload sits in `public/deck/index.html` under
`<script id="deck-data">`.

## Analytics
GA4 (`G-H7ZD6PZMK1`) + Microsoft Clarity (`xktpj6mube`) + Cloudflare Web
Analytics + PostHog (Faraz's own project `phc_yy4d...`) — one guarded loader in
`public/index.html`, skipped for react-snap and localhost.
