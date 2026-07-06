# CONTROL-ROOM.md, the Crux build plan and handoff

Written 2026-07-06 by Claude Fable 5, possibly finished by whoever reads this.
Read `~/.claude/FABLE.md` first (working method), then this file top to bottom.
This document contains everything: the research, the decision, the full spec,
the build phases, and the current status. Do not re-litigate decided questions;
Faraz approved this direction on 2026-07-06.

---

## 0. STATUS LEDGER (update this section as work proceeds)

| Item | State |
|---|---|
| Research (5-angle web sweep) | DONE, digest in section 2 |
| Direction approved by Faraz | DONE ("Do it but keep all of this separate") |
| This plan file | DONE |
| Phase 1: prototype shell + design tokens | DONE + VERIFIED (public/decisionos/index.html; overview + agent screens, hash router, canon store; console clean, overflowX 0, KPIs 5/12/1) |
| Phase 2: canon data + agent fleet screens | Overview + Agent screen + 12-item canon queue DONE + VERIFIED; Agent autonomy DETAIL still stubbed |
| Phase 3: the five trust patterns as working UI | 1 Intent Preview DONE+VERIFIED (12 cards, blast radius, sources, reversibility). 3 Confidence Signal DONE+VERIFIED (why-decompose + sub-70% forces Escalate, 2 items). Approve/Decline-with-reason/Escalate loop DONE+VERIFIED (single source of truth: 12->11 updated queue+KPI+nav badge+cleared log+toast). REMAINING: 2 Autonomy Dial (+ queue re-route animation), 4 Action Audit (cleared[] already feeds it), 5 Escalation Pathway (Sentinel incident). Note: "Edit scope" intentionally omitted to avoid a dead button; add in Phase 4 only if made real. |
| Phase 4: polish pass (motion, edge states, copy) | NOT STARTED |
| Phase 5: case-study integration content | NOT STARTED |
| Piece 2: Commentary Mode component | NOT STARTED |
| Garnish: llms.txt + machine-readable layer | NOT STARTED |
| Merge into main site | BLOCKED, only on Faraz's explicit word |

---

## 1. What this is, and the hard constraints

Faraz asked: "what can I create that no UX designer has in their portfolio?"
A 5-agent research sweep (2026-07-06, ~90 searches) answered it. The build is:

**Piece 1, the headline: the Crux Control Room.** A working, fully client-side
prototype of an AI-agent supervision console for an enterprise BFSI/analytics
domain, rendering the five Agent Experience (AX) trust patterns as real,
clickable UI. Research found these patterns exist ONLY as essays and
frameworks; no designer portfolio anywhere ships them as working interface.

**Piece 2, the multiplier: Commentary Mode.** A toggleable rationale overlay
for case studies (pins that explain each decision, trade-off, and rejected
alternative in place). Research found interactive rationale overlays exist only
in review tools, on zero portfolios.

**HARD CONSTRAINTS (Faraz's words: "keep all of this separate"):**
- Nothing touches the live main site until Faraz explicitly says merge.
- No edits to `App.js`, nav, `content.js`, or any routed page during the build.
- The prototype lives at `frontend/public/decisionos/` (new files only; the
  dev server serves it at `/decisionos/` with zero React changes).
- Until merge, every deploy MUST strip it from build output, exactly like the
  lab files: `rm -rf frontend/build/decisionos` before `gh-pages` publish.
  Add this to the deploy ritual now so it cannot be forgotten.
- Commentary Mode is built as new unimported files plus a documented
  integration diff (section 8); the diff is applied only on merge day.

**Why Crux specifically:** the concept already exists in the site as the
dormant third AI concept (slug `decisionos`, title Crux, `live: false` in
`frontend/src/data/content.js` around line 126). Its 457-line case-study data
file (`frontend/src/data/decisionosCase.js`) already argues the exact thesis
the Control Room proves: traceable reasoning, visible confidence, the human
firmly making the call. Its `prototypeUrl: "/decisionos/"` points at a
prototype that does not exist yet. The Control Room completes Crux instead of
adding a me-too fourth concept, which the hiring research explicitly warns
against.

---

## 2. Research digest (so nobody re-searches)

Five parallel agents, full results archived in the session transcript. The
load-bearing findings, with sources:

### 2a. The white space this build occupies
- Agent Experience (AX) trust patterns are a 2026 discipline made of essays
  and frameworks with named patterns (Intent Preview, Autonomy Dial,
  Confidence Signal, Action Audit, Escalation Pathway) but no shipped designer
  artifacts. Sources: pixelmojo.io/blogs/what-is-ax-design-complete-guide-agentic-experience-2026,
  agentexperience.ax/all/, Microsoft AX principles. Zero portfolio
  implementations surfaced in search.
- Live explorable BI artifacts by individual designers are near-absent; only
  vendor demos exist (InetSoft, Plotly, Klipfolio). A polished client-side
  enterprise console is genuinely uncommon.
- Commentary/rationale overlays on one's own work: only review tools (Heurio,
  Webflow comments) exist; the closest cousin is Brian Lovin's essay-format
  App Dissection, about other people's apps.

### 2b. The kill list (verified saturated, do not build)
- Portfolio chatbot / digital twin: tutorial genre, off-the-shelf template
  (github.com/medevs/smart-portfolio), juniors have them.
- AI-UX pattern LIBRARY: Shape of AI (shapeof.ai), AIverse (37+ patterns),
  aiuxpatterns.com, aiux.rezza.io, Smashing Magazine feature. Saturated.
  Patterns may be USED as vocabulary inside Crux, never as the piece itself.
- "How I design with AI" write-up as headline: mainstream content genre
  (UX Collective, Jane Street, Nick Babich, dozens more).
- Resume-as-dashboard: Tableau runs an official gallery of hundreds.
- Personal /stats page: leerob-era developer cliche.
- Generic UI experiments lab: Rauno (uiw.tf), Comeau, Emil Kowalski own it.
- Site-version time machine: Lynn Fisher owns it (20 years of archives).
- 3D/WebGL spectacle: wrong game; hiring managers rank judgment over show.
- AI website-audit tools: commercial category (Baymard UX-Ray, Talos, O8).
  The existing AgenticWorkflow demo stays positioned as methodology.

### 2c. Hiring-signal rules that shape the build
- "Vibe-coded prototypes that looked very vibed" and "portfolios that reach
  70% and stop" are top rejection reasons (Tom Scott, Verified Insider,
  verifiedinsider.substack.com/p/design-hiring-observations). One finished
  piece beats two rough ones. Polish is not optional; it is the signal.
- 79% of hiring managers screen for skill DESIGNING AI products; that skill
  is scarcer than AI-tool use (figma.com/blog/why-demand-for-designers-is-on-the-rise/).
- Output over text: artifact must demo in under a minute. No process theater,
  no double diamonds, no framework diagrams (Tom Scott: "If I see a double
  diamond, I am out").
- Fabrication tells that poison portfolios: suspiciously round metrics,
  linear narratives, zero constraints (newsletter.uxuniversity.io). Crux
  keeps the house rule: research-based posture only, no invented interviews,
  no fake numbers, and an explicit "what I could not validate and how I
  would" section, which is itself a hireable judgment signal.
- Niche positioning wins: "complex data interfaces for enterprise SaaS" is
  the literal example of a winning niche claim (muz.li 2026 portfolio guide).
  Site positioning after merge: "enterprise data UX lead who ships AI-native
  prototypes."
- Emerging cheap multiplier: a 3-5 minute screen recording of Faraz directing
  the AI while building this, embedded in the case study (ADPList "30 design
  ideas for 2026"). FARAZ ACTION: record the build sessions; the model
  cannot do this part.

---

## 3. Product spec: the Crux Control Room

### 3a. One-line pitch
The screen a bank's analytics team lives in when AI agents do the work and
humans own the judgment.

### 3b. Scenario (canon, keep consistent everywhere)
Meridian-adjacent fictional mid-size bank ("Cobalt Mutual", invented, no real
brand). An operations analytics team supervises a fleet of five AI agents:

| Agent | Job | Default autonomy |
|---|---|---|
| Recon | Reconciles daily transaction ledgers, flags breaks | Auto with audit |
| Sentinel | Watches transactions for fraud patterns | Approve each |
| Reporter | Drafts the daily ops brief and regulator-ready summaries | Suggest only |
| Quality | Monitors data pipelines, proposes schema fixes | Approve each |
| Forecast | Projects liquidity and volume, flags anomalies vs forecast | Suggest only |

Canon numbers: 5 agents, 1 active incident, 12 items in today's action queue,
3 escalations this week. Keep all counts consistent across screens. Timestamps
are relative ("2m ago"), never real dates, so the prototype never goes stale.

### 3c. The five AX trust patterns as UI (the whole point)

1. **Intent Preview.** Before any agent acts, its plan renders as a card:
   what it will do, which systems it touches (blast radius chips), what it
   read to decide (source links), reversibility label (reversible / hard to
   reverse). Approve, edit scope, or decline. Declining asks for a reason,
   which the agent's future proposals visibly incorporate.
2. **Autonomy Dial.** Per agent, per action-class: a three-position control
   (Suggest only / Approve each / Auto with audit). THE memorable
   interaction: turning the dial visibly re-routes live queue items between
   the "waiting on you" and "flowing through" lanes with animated paths.
   Research says one memorable interaction beats breadth; this is it.
3. **Confidence Signal.** Every proposal carries a calibrated confidence bar
   with WHY (top factors, links to evidence rows). Below a threshold the UI
   forces escalation. Confidence is never a naked percentage; it always
   decomposes on click.
4. **Action Audit.** An immutable, filterable log: every action, who/what
   approved it, before/after diff viewer for data changes, replay stepper
   for an incident. This is the screen that makes governance people exhale.
5. **Escalation Pathway.** When an agent hits its limits it hands the human
   a context package: what it tried, what it knows, what it recommends,
   one-click paths (take over / coach and return / dismiss with reason).
   The active incident demo: Sentinel escalates a suspicious transaction
   cluster it cannot clear.

### 3d. Screens (client-side SPA, hash-router, one HTML file)
1. **Overview** (default): fleet health strip, action queue, live activity
   feed, the one active escalation pulsing.
2. **Agent detail** (x5 from canon): autonomy dial, action classes, that
   agent's recent decisions and declines.
3. **Review flow**: the Intent Preview card stack for the 12 queued items;
   approving/declining updates counts everywhere (single source of truth).
4. **Audit**: the log + diff viewer + incident replay.
5. **Escalation**: the Sentinel incident context package.
A persistent "why this exists" footnote links the (future) case study.

### 3e. Design language (LOCKED, decide once, never drift)
Distinct from Slate (Google/Material) and from the portfolio's comic/neon.
Mission-control enterprise:
- Background `#0E1116` graphite, panels `#161B22`, hairlines `#2A313C`.
- Ink `#E6EDF3`, muted `#8B949E`.
- Brand accent: Crux magenta `#E8519B` (already Crux's accent in content.js),
  used sparingly for identity moments only.
- Status semantics do the real work: ok `#3FB950`, watch `#D29922`,
  act `#F85149`, info `#58A6FF`. Confidence bars use a single hue ramp,
  never green-to-red rainbows.
- Type: IBM Plex Sans (UI) + IBM Plex Mono (data, timestamps, IDs), via
  Google Fonts. Numbers always tabular.
- Density is the aesthetic: this should feel like a terminal a professional
  trusts, not a marketing dashboard. 4px spacing grid, restrained radii
  (6px), no glassmorphism, no glow.
- Motion: 120-180ms eases, queue re-routing animation on dial turns,
  reduced-motion media query respected.

### 3f. Honesty block (non-negotiable, house rule)
The prototype and future case study carry a visible section: "Reconstructed
from secondary research. No primary research was conducted. Here is how I
would validate: (shadow sessions with ops analysts, dial-position telemetry,
escalation-quality reviews)." Never claim testing, users, or metrics.

---

## 4. Technical plan

### 4a. Files (new only, nothing existing is touched)
```
frontend/public/decisionos/index.html    the entire prototype, single file
                                          (pattern precedent: public/recruitos/
                                          index.html, 1098 lines, same idea)
frontend/src/components/CommentaryMode.jsx   piece 2, UNIMPORTED until merge
frontend/src/data/commentary/*.js            per-case-study pin content, unimported
CONTROL-ROOM.md                              this file
```
Single-file prototype: vanilla JS + CSS in one HTML document, hash routing
(`#/agent/sentinel`), state in one plain JS store object, render functions per
screen. No build step, no React, no dependencies except Google Fonts. This is
what makes it separate, portable, and identical in dev and prod.

### 4b. Viewing during development
Dev server already serves `frontend/public/` verbatim: preview at
`http://localhost:3000/decisionos/`. Hard-reload after edits (public/ files
do not hot-reload). Verify per FABLE.md: console clean, measure layouts,
screenshot proof, mobile pass at 375px (the console may be desktop-first but
must not break; a "best on desktop" notice is acceptable for dense screens).

### 4c. Keeping it off the live site until merge
- `content.js` keeps `live: false` for decisionos. DO NOT flip it.
- Deploy ritual gains one line before publish:
  `rm -rf frontend/build/decisionos` (alongside the card-lab/logo-lab strips).
- Never link it from any routed page.

### 4d. Build phases with acceptance criteria
- **Phase 1, shell:** tokens, layout chrome, hash router, five empty screens
  navigable. Accept: renders clean at 1440 and 375, zero console errors.
- **Phase 2, canon data + screens:** the store with 5 agents, 12 queue items,
  escalation incident; Overview and Agent screens live. Accept: every number
  traces to the single store; dial changes persist across screens.
- **Phase 3, trust patterns:** Intent Preview flow, dial re-routing
  animation, confidence decomposition, audit log + diff, escalation package.
  Accept: each of the five patterns is demonstrable in under 15 seconds;
  the full loop (approve, decline with reason, escalate, audit it) works.
- **Phase 4, polish:** motion pass, empty/edge states (empty queue after
  clearing it deserves a designed state), copy pass in Faraz's voice
  (crisp, first-person notes where the UI explains itself), keyboard nav,
  reduced-motion, favicon, page title, honesty footnote. Accept: it would
  survive the "very vibed" screen; nothing reads 70%-finished.
- **Phase 5, case-study content:** update `decisionosCase.js` draft sections
  IN A SEPARATE UNCOMMITTED BRANCH or as a draft file
  (`decisionosCase.controlroom-draft.js`) so main data stays untouched until
  merge. Content: the five patterns with prototype screenshots, the honest
  validation section, the "What I owned" chips, the process note with the
  screen-recording embed slot.

### 4e. Verification ritual (every phase)
FABLE.md applies in full: prove it, never claim it; console zero; measure
layouts; screenshot proof to Faraz; report failures plainly. Build gotchas
for this repo (react-snap port 45678, serial builds, crawl 11/11) only matter
at merge time since the prototype needs no build.

---

## 5. Piece 2 spec: Commentary Mode

- A floating toggle ("Design notes") on case-study pages. On: numbered pins
  appear over specific sections/images; clicking opens a compact card:
  DECISION (what was chosen), WHY (the constraint or evidence), REJECTED
  (the alternative and why not), CONFIDENCE (high/medium/low, honest).
- Implementation: one self-contained component (`CommentaryMode.jsx`) that
  takes a `pins` array ({anchorTestId, x%, y%, decision, why, rejected,
  confidence}) and renders an overlay layer; content files per case study in
  `src/data/commentary/`. Zero changes to case-study JSX until merge day;
  integration is one import + one component line per page, documented below.
- Content authorship: Faraz supplies or approves every pin's text. The model
  may draft from the existing case-study prose and this session's history,
  but pins ship only after his review (voice + accuracy).
- Pin density: 4-7 per case study. More reads as noise.

---

## 6. Garnish: the machine-readable layer (half day, optional)
- `frontend/public/llms.txt`: plain-text map of the site for AI readers
  (who Faraz is, case-study URLs with one-line summaries, contact).
- `frontend/public/portfolio.json`: structured case-study index (title, slug,
  role, domain, artifacts, honest-posture note).
- Framed on merge as a design decision: "this portfolio is designed for AI
  readers too." Near-zero cost, still rare among designers.

---

## 7. Merge-day checklist (ONLY on Faraz's explicit go)
1. Flip `live: false` to `live: true` for decisionos in `content.js` (the
   Projects page concept grid then shows Crux automatically).
2. Verify `prototypeUrl: "/decisionos/"` badge appears on the concept card.
3. Swap in the updated `decisionosCase.js` (from the Phase 5 draft).
4. Add prototype screenshots to `public/decisionos-shots/` (the `S()` helper
   in decisionosCase.js already points there).
5. Integrate Commentary Mode imports on approved case studies.
6. Remove the `rm -rf frontend/build/decisionos` line from the deploy ritual.
7. Full ritual: serial build, crawl 11/11, deploy, curl-verify bundle 200,
   leakage checks, live spot-checks. Get explicit go-ahead first, as always.
8. Consider the positioning line change on Landing/About after Faraz decides:
   "enterprise data UX lead who ships AI-native prototypes."

---

## 8. Voice and copy rules for everything above
- No em-dashes or en-dashes anywhere. Human voice, first person, crisp.
- Title Case for buttons/CTAs ("Book a Call" convention).
- No fabricated research, metrics, users, or testing. Ever.
- The prototype's microcopy is part of the design: an agent asking for
  approval should sound like a competent colleague, not a chatbot.

## 9. If you are not Fable
Follow `~/.claude/FABLE.md`. Measure before you move, prove before you
report, ask with labeled options after one miss, and keep this file's STATUS
LEDGER current so the next session (or the next model) continues without
re-deriving anything. Faraz decides everything visible; you decide nothing
irreversible alone.
