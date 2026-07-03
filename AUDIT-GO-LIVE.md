# Portfolio Go-Live Audit, 2026-07-03

Method: 17 independent fresh-eyes reviewers audited the rendered site (95 full-page screenshots, desktop + mobile) and the complete source copy, benchmarked against live research on world-class designer portfolios (Bestfolios / Cofolios / Case Study Club circuit, hiring-manager essays, NN/g). Every blocker and high finding, and every jargon flag, was then adversarially fact-checked against the actual files; 27 over-flagged items were killed. Everything below survived verification. The five case-study verifiers ran as agents; the site-findings verification was re-run by hand against source and a live 390px browser check.

## Executive verdict: GO, after the P0 list

The foundation is genuinely strong: distinctive identity (nobody will confuse this with a template), correct curation, an honesty posture (no fabricated research, disclosed concept work, "designed for, not yet measured") that most senior portfolios lack, and case studies whose structure maps almost one-to-one to what hiring managers say they want. The gap to world-class is not more work, it is removing self-inflicted credibility dings: one placeholder link, a broken mobile nav, a handful of exhibits whose captions do not survive someone actually reading the pixels, and copy that spends the prime positioning moments on personality instead of proof.

Scores against the world-class bar (1-10):

| Audit 1, Site | Score | | Audit 2, Case studies | Score |
|---|---|---|---|---|
| First impression & positioning | 6 | | FinVista | 7 |
| IA & recruiter journey | 7 | | Aurora | 6.5 |
| Visual system & consistency | 6 | | Meridian | 6.5 |
| Site copy & voice | 5.5 | | Slate | 6.5 |
| Credibility, trust & a11y | 5 | | Jack of All Threads | 6 |

---

## P0, fix before the link goes on the resume (all verified)

1. **LinkedIn is a placeholder.** `content.js:14` is `linkedin: "https://linkedin.com/"`. Every LinkedIn button on the site (footer, Contact, both CTA banners) opens LinkedIn's homepage. Recruiters treat LinkedIn as mandatory; this reads as broken or fake. One-line fix.
2. **Mobile nav is broken at phone widths.** Verified live at 390px: the white nav pill overflows the viewport and "Book A Call" sits entirely offscreen (right edge measured at 1127px). In the audit captures the labels clip ("My Wo"). Collapse to a proper mobile state (hamburger, or logo + one CTA) below ~640px and test 320-430px.
3. **Delete the fabricated content from `content.js`, do not just hide it.** Invented testimonials with stock avatars ("quietly the best UX designer of his generation"), a "4.9/5 across 30+ engagements" block, and a fictional `journey` array ("Joined a Berlin fintech") that contradicts the real India-based timeline. Currently unrendered, but it ships in the public repo and is one flag-flip from a career-level credibility incident.
4. **Meridian renders a leaked authoring note.** `meridianCase.js:243`: "A lean intro, then the spine of each point." appears verbatim on the live page as the first paragraph of the funnel section. Delete the line.
5. **JOAT's "Campaign Page" exhibit is the wrong screenshot.** `05-campaign.jpg` is the Design Studio (Pick Your Product / Pick Your Color / Design menu), verified at pixel level, while the caption calls it "the public campaign page a raiser shares into Facebook ads". The artifact the whole conversion story depends on is missing. Swap in a real campaign page, or reconstruct one and label it redrawn.
6. **Slate's embedded prototype is still branded RecruitOS.** `public/recruitos/index.html`: title "RecruitOS - Interactive Prototype", frame label, and the in-product wordmark all say RecruitOS while the page, H1 and copy say Slate. A first-time reviewer thinks it is someone else's product or an unfixed rename. Also the hard-coded caption next to View Prototype describes Almanac's behavior ("answers from your sources... flags what's stale"), not Slate's.
7. **White-on-white rendering bugs, same pattern in two files.** Aurora design-goal numbers (`AuroraCaseStudy.jsx` ~390: number is `text-white` while alternating cards are `bg-white`, so 02/04 numbers are invisible) and Slate "PRINCIPLE 02/04" eyebrows (`ConceptCaseStudy.jsx` ~469, same bug). Make the color conditional like the sibling title already is.
8. **Aurora's stats contradict its own honesty claim.** Section 07 says "I didn't run a formal usability study", yet the page cites "71% of test users", "Participant 7", "82% of users surveyed", "64% of CRM managers" with no source or sample anywhere. This is the single most probing-prone credibility risk in any interview. Attach source + sample inline to each figure or cut it, and rename "test users / Participant 7" to what actually happened (walkthrough participants).
9. **Meridian section 10 shows a viewport-tall blank while its two lazy iframes load.** The `funnel.html` / `school.html` IframeBlocks are the last iframes on the page; everything else already uses static captures. Replace them with `MeridianShot`-style static images (pattern exists on the same page).
10. **AI-generated lifestyle covers undercut the work.** FinVista's family-on-a-couch, Meridian's boardroom scene, JOAT's group shot (with visibly impossible floral shirt prints), all sitting under a footer that says "MADE WITH CARE, NOT WITH TEMPLATES". Replace covers with real product UI in a consistent treatment; the dashboards and app screens already exist in the case pages. This is the #1 "AI-made site" tell reviewers pattern-match on.

## P1, fix soon (high leverage, verified)

- **Hero positioning.** The strongest line on the site is "I Make Complex Products Feel Obvious", but 4 of 7 hero lines and 3 of 5 magenta accents go to Footballer / Gamer / 47 Tabs Deep, and "Senior UX Lead" appears nowhere above the fold (only the footer). The sub-line lists "Graphic/Brand design" before UX, which reads generalist to a product screener. Add a role eyebrow ("SENIOR UX LEAD · ENTERPRISE, FINTECH & ANALYTICS · 12+ YRS"), de-accent or relocate the hobby lines to About, lead the sub with product design.
- **Outcome-framed cards.** Case cards carry scope, not results ("Re-imagining a Digital Lending Platform..."). Meridian, the strongest case, is not even featured on the landing page (featured = first two array items). Feature Meridian, add one honest outcome line per card.
- **Metrics provenance.** FinVista's "60% Faster Processing / 40% Less Training" have no measurement story; Meridian's "90 seconds of orienting" reads measured but is not attributed; JOAT leaves its own recorded traction ("500 designs & Rs.250,000 raised", visible inside its own homepage screenshot) unused. One provenance clause per number, or reframe as target.
- **Aurora never answers its own targets.** The page sets "error rate below 15%", "setup errors -60%", "off-platform authoring -50%", then has no outcomes section. Add honest status rows ("achieved by design, verified in walkthroughs" / "not yet measured, here is what I'd track").
- **Anonymization consistency.** Meridian is disclosed as anonymized; FinVista ("Leading Indian NBFC") and Aurora ("by Helio") are not. A reviewer who googles FinVista, finds nothing, then sees Meridian disclosed, concludes fabrication. One shared disclosure line on all client cases. Also: the Meridian cover crest reads "MERIDIAN UNIVERSITY" while everything else says "Institute".
- **About page bio is the driest text on the site** ("buzzing tech hubs", "creative flair", "passion for human-centered design", the exact cliches screeners flag) while the Contact FAQ is the best writing on the site. Rewrite the bio in the FAQ's voice; move the personality (footballer/gamer/tabs) here from the hero.
- **Geography claim.** FAQ says "across a few different countries"; every listed role is in India. Change to "twelve-plus years in India, shipping for clients in several countries" (defensible via the Infocepts global-clients bullet).
- **Reduced-motion gap.** The marquee (30s infinite) and `.rise` animations have no `prefers-reduced-motion` handling (`index.css:140`), a WCAG 2.2.2 miss on a site listing accessibility as a core skill. One media query fixes it.
- **Length discipline.** Meridian ~2,500 body words with the funnel numbers retold in four sections; Slate ~4,200 words with a full component gallery; Aurora spends ~30% of the page on a design-system dump. Merge, dedupe, and compress toward a 5-minute read each; keep one canonical statement of each fact.
- **Missing everywhere: timeframe + team + ownership split.** No case states duration/year; FinVista and Aurora say "2 Designers" while narrating everything as "I" (a named senior-interview probe); Slate's "Sr. UX Lead (end-to-end)" on solo work reads inflated where "Solo designer, research to prototype" reads senior.
- **JOAT exhibits carry lorem ipsum** ("Lorem Ipsum is simply dummy text...", testimonial "Nina Srivastav, Lorem Ipsum...") plus typos, while captioned as the live product. Relabel as design comps, crop, or swap in archive captures. Also "Order Tracking" shows the buyer's confirmation screen, not the raiser view its caption claims.
- **Slate closes by grading itself** ("well-researched, fully-designed") and its competitive table gives itself 8/8 Yes against shipped products. Add a real reflection, concede at least one cell, label the column "designed intent, unshipped".
- **No iteration beat in Meridian, JOAT, or Slate.** Each jumps from exploration to final with nothing that failed. One honest "the analysts killed this because..." beat per case closes the benchmark's most-demanded gap. (FinVista and Aurora already do this well.)
- **Wayfinding labels.** "This is Me / My Work / Get in Touch", "See What I Do", "Know Me": keep the voice in content, make navigation boring (Work / About / Contact). Add Resume access to the header path, availability line to the footer.
- **Casing and consistency sweep.** "Finvista" (case hero) vs "FinVista" (everywhere else); "Point A Swarm Of AI Agents..." (landing) vs sentence case on the destination page; five different job-title spellings; UK/US spelling mix; phone formatted "+91 - 77956..."; forced Title Case capitalizing "A/Of/And" mid-heading; email `Abdulfarazkhan@outlook.com` casing on a site that owns khanfaraz.in.

## P2, polish

- Scroll-to-top FAB overlaps content on mobile (sits bottom-center over text); dock bottom-right, show after meaningful scroll.
- 404: the `*` route silently renders the landing page under the wrong URL; use a redirect or a small branded 404.
- Dangling cells in odd-count grids (Meridian's 7 research cards / 5 principle cards in 2-col grids); make the last card full-width.
- Slate card cover on /projects is tinted near-black, breaking the thumbnail set; "LinkedIn Rcl" truncated table header; "OS family" strings survive in shared concept components (family is now Slate/Almanac/Crux).
- White nav pill is the only light-mode element and glares on the dark theme; consider off-white or translucent dark.
- Blue-dot brand motif misregisters on "Case Studies." (reads as a stray cursor); only deploy it where it owns a counter.
- Meridian hero fact "Power BI, Data Visualization and Data Analytics" is a keyword string, not a platform ("Power BI" alone); hero stat "14,170 applications tracked" is the old cycle number while the narrative centers the fall to 10,670.
- Persona cards in FinVista/Aurora read as template filler in an older voice with scripted quotes; compress to 3 lines each or fold into Primary Users.
- Small mono uppercase labels (~10px, mid-gray on near-black) sit under AA for small text; set a floor (~11px, lighter gray) for anything informational.
- Section eyebrow separators drift ("02 / TOOLKIT" vs "01 · TL;DR"); pick the middot.
- Heading-only skim: several case H2s are process labels ("Geo intelligence", "Project Overview" under the eyebrow "01 · PROJECT OVERVIEW"); rewrite the weakest as claims.
- Self-host the Unsplash concept covers; fix Almanac/Crux `status: "live prototype"` alongside `live: false`.
- 18 generic skill pills on About ("Requirement Gathering", "Design Handoff") read as an ATS keyword wall; curate to the differentiating 5-6.

---

## Audit 2 detail: confirmed engineering-jargon list (owner's hard rule)

The verifiers rejected flags on ordinary UX vocabulary ("render", "MVP", "sync", "latency" with a stated bound, tool names inside Tools cards, "user story"/"dev-ready" as handoff language, product proper nouns in scope lists). What follows is only what survived as genuinely engineering-flavored.

**Aurora (the main offender, the migration IS the plot device):**
- "AngularJS-to-Angular migration" family, six placements: subtitle, TL;DR, intro, context card, audit intro ("The rigid AngularJS codebase made each one harder to fix"), validation round title. Standing substitute: "once-in-a-decade platform rebuild" / "the rigid legacy platform".
- "The new Angular component library can absorb design tokens without breaking semantic versioning" (assumptions card): "...could adopt the design tokens without disrupting work already in flight".
- "a streaming-first contract negotiated with backend in week 3" (What Went Well): "we agreed in week 3 that suggestions would appear instantly and the composer would keep working even if the AI stalled".
- Borderline, owner's call: "Azure DevOps" is named five times; verifiers ruled tracker names acceptable, but five mentions is repetition; consider "linked to the requirement it serves" after the first mention. The Engineering Lead quote ("streaming output with graceful fallbacks") is attributed speech; keep as quote or paraphrase outside quote marks.

**Meridian:**
- "not a custom framework the team can't actually ship" / "not some custom framework" (principles + How I worked): "no custom workarounds".
- "the live data contract" / "matched their data contract" (constraints + validation): "the data the university actually has" / "confirmed every number on screen means exactly what their records say".
- "The dashboard is the last mile of a CRM and SIS pipeline. Slate runs about half the enrollment-CRM market..." : "A dashboard like this sits at the very end of the admissions and student-records systems...".
- "Power BI semantic layer / shared metric definitions" (IA diagram): "one shared meaning per number".
- "A data layer on the Common Data Set and IPEDS" (Outcome card): "Every metric traces to the Common Data Set and IPEDS".
- "CRM-to-BI keeps consolidating" (Forward outlook): "Admissions data keeps getting closer to live".

**FinVista:**
- "I built them on auto-layout and variants, so engineering could pull each one straight into the build" (design system intro): keep the Figma terms, soften the engineering clause: "...so every component could be recreated exactly as designed, with nothing lost in handoff".
- Borderline: "Third-party API integration logic" in the out-of-scope list ("Connections to outside services, behind the scenes").

**Slate:**
- "a recruiter is the only integration layer connecting an ATS, a CRM..." : "the recruiter is the only thing holding [the tools] together by hand".
- "NL search across desk" (competitive table): "Plain-English search".
- "Incumbents are systems of record with AI bolted on" : "filing cabinets with AI bolted on".
- "resume / profile -> structured records" (lifecycle step): "each becomes a clean, complete candidate card".
- Note: the demo candidate in the wireframes/prototype is a back-end engineer, so "React / TypeScript / Kubernetes" chips appear inside exhibits. That is realistic demo data, not authorial jargon; accept it or re-seed the demo with a non-engineering role.

**JOAT:** essentially clean. One "calc" ("live minimum-profit calc" -> "figure").

## Audit 2 detail: what best-in-class versions would add (per case)

- **FinVista (7/10, closest to the bar):** before/after pair for the two named fix rounds; provenance for 60%/40%; one hero stat swapped for the strongest outcome; cut the 16-screen captioned dump to 6-8 decision-proving screens; split the two-designer ownership; expand acronyms (LOS, VAS, KFS) on first use.
- **Aurora (6.5):** an outcomes section answering its own three targets; a legacy-vs-new annotated before/after (the "before" is described everywhere, shown nowhere); compress the design-system gallery to one composite + the back-fill outcome; source every statistic; replace the rupee-denominated stock cover on a "Europe" case with the real configurator.
- **Meridian (6.5):** cut to ~1,400 words (48% insight stated once, funnel numbers once); reconcile principle 01 ("no Institute-wide total anywhere") with the Overview KPI band that leads with an institute-wide total (reword the principle to "counts may roll up, rates never blend"); timeframe + team facts; one analyst-pushback iteration beat; attribute the 90-second figure; drop or evidence "the map leaders loved".
- **JOAT (6):** an outcomes section using its own recorded traction (press-attributed); the real campaign page; the buyer journey it promises twice (09-checkout.jpg exists unused); label reconstructed IA/flow/wireframes "redrawn for clarity"; 2014-context constraints (print minimums, COD logistics); timeframe/team.
- **Slate (6.5):** a reflection to replace the self-graded pitch; an iteration beat from the grayscale pass; a "same day on Slate" mirror of the day-in-the-life timeline (the strongest honest persuasion device available without fabricating tests); state the basis for the heuristic scores ("from trial accounts and recorded demos"); timeframe anchor; linked sources for Aqore/Bullhorn stats.

## Cross-cutting themes (seen 3+ places)

1. **Personality and positioning are swapped.** The hero (where positioning belongs) leads with hobbies; the About page (where personality belongs) is corporate boilerplate. One swap fixes two dimensions.
2. **The site sells "facts over feelings" and then under-delivers facts.** Missing provenance, unanswered targets, outcome-free cards, zero quantified deltas in the About experience bullets. The fix is honest framing, not invented numbers.
3. **Captions that do not survive the pixels.** Wrong screenshot (JOAT campaign), buyer screen captioned as raiser view, lorem ipsum in "live product" exhibits, "leaders loved" without evidence, RecruitOS branding under a Slate headline. Reviewers read one such mismatch as carelessness with users.
4. **AI-authorship tells cluster.** Generated lifestyle covers, "Dreamin' in the Internet Waves", scripted personas/quotes, dormant fabricated testimonials. Each is minor; together they are the pattern a skeptical reviewer uses to discount the whole site, especially with the footer's "not with templates" claim.
5. **Reveal-animation and lazy-load fragility.** Content starts at opacity 0 and reveals on intersection; tall lazy exhibits and iframes can leave fast scrollers staring at black. Some audit captures exaggerated this (verified as capture artifacts in FinVista's case), but the Meridian iframes and tall JOAT images are real. Consider a fail-safe: content visible by default when JS/observer fails, eager-load above-the-fold-adjacent exhibits.
6. **Repetition as filler.** Role/Platform fact cards appear 2-3 times per case hero; key numbers retold across sections; two design-system intros saying the same thing. Every fact should have one canonical home.

## Suggested fix order (highest leverage first)

1. LinkedIn URL (1 line)
2. Mobile nav collapse (small component change)
3. Delete fabricated content.js data (deletion)
4. Meridian leaked note (1 line)
5. White-on-white bugs x2 (2 lines)
6. Slate prototype rebrand + caption (strings + re-shoot labels)
7. JOAT campaign-page exhibit swap
8. Meridian iframe -> static shots
9. Real product-UI covers for all case cards
10. Hero: role eyebrow + de-accent hobbies + sub-line reorder
11. Aurora: outcomes section + stat provenance + de-jargon migration language
12. Anonymization disclosure lines + Finvista/University casing fixes
13. About bio rewrite in FAQ voice + geography claim fix
14. Confirmed jargon sweep (list above)
15. Reduced-motion media query + FAB reposition + 404
