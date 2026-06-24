// Meridian Institute of Technology, university analytics dashboard case study.
// CLIENT IS ANONYMIZED (real client confidential). Never surface the real name or logo.
// Body is markdown, rendered by MeridianCaseStudy.jsx. Screens are placeholders until
// the high-fidelity designs are added. No em-dashes (house rule).

export const meridian = {
  slug: "meridian",
  title: "Meridian Institute Analytics",
  subtitle:
    "One analytics platform for an entire university, built so leaders can read it in seconds instead of minutes",
  client: "Meridian Institute of Technology (anonymized)",
  role: "Lead UX Designer",
  hero: {
    eyebrow: "UX Case Study · Higher-Ed Analytics · Power BI",
    meta: "Role: Lead UX designer (UX + data viz)  ·  Domain: Higher-ed institutional analytics  ·  Platform: Web, aligned to Power BI",
    facts: [
      { label: "Role", value: "Lead UX designer (UX + data viz)" },
      { label: "Domain", value: "Higher-ed institutional analytics" },
      { label: "Platform", value: "Web, aligned to Power BI" },
    ],
    stats: [
      { value: "4", label: "Departments unified" },
      { value: "~40", label: "Legacy views replaced" },
      { value: "14,700", label: "Applications tracked" },
      { value: "10+ yrs", label: "Of history in one view" },
    ],
  },
  body: `## TL;DR

Meridian's leaders ran the place off four disconnected Power BI dashboards. The data was there; they just spent more time orienting than reading.

The redesign: one platform, one visual language, a cockpit on top, consistent drill-downs underneath. Eight screens, defaulting to multi-year trends.

Leaders glance and trust it. Analysts drill to the cohort.

## Context and primary users

Meridian is small, research-heavy, and split almost 50/50 undergrad/grad (about 4,200 and 4,160 in Fall 2024). Any "total" hides two stories. Four domains, four owners, four Power BI dashboards that never talked.

### Why one cockpit was needed

Leadership questions cross domains; the tools stopped at the borders. A provost asks "is enrollment softening, is research strong enough to carry us, is headcount outgrowing revenue" in one breath. The old setup needed three sittings.

Every dashboard spoke its own dialect too. Grad is about 48% international, undergrad about 4%, so a blended number is meaningless. Split by level, by default, everywhere.

### The dual-audience challenge: glance vs. drill-down

Two reading modes, one product. Some read at a glance: ninety seconds, headline plus anything on fire. Others drill, pulling a pool apart by gender, country, test policy. The legacy tools dumped everything on screen, so glance users burned their ninety seconds just orienting.

### Primary users

I designed around six readers, from a provost who needs the headline in ninety seconds to an IR analyst who defends every number. Win the analysts, who own the data, and everyone downstream inherits that trust.

## The problem: four dashboards that made you work before they told you anything

Four Power BI reports. Same maroon, no shared layout, filter logic, or chart language. Leadership never said the data was wrong, just that it took too long to find what they came for. People burned 30 to 60 seconds every visit just orienting.

So I audited all four against Nielsen's heuristics on a 0 to 4 severity scale, every finding tied to a real user and task.

### The four reports, and what each one actually did

Undergraduate Admissions, Graduate Admissions, Research, HR. Four domains, four mental models, four visual languages. A provost wanting a Monday read had to open four files and stitch the story in their head.

### What was actually broken (heuristic + severity audit)

Everything showed at once, nothing telling your eye where to start.

The biggest failure: treating the institution as one population. Enrollment is near 50/50 (about 4,200 undergraduate, 4,160 graduate). "Percent international" is around 48% graduate but only 4% undergraduate, so a blended number lies. I segmented by level everywhere.

### Why this mattered for this institution specifically

The story leaders most needed to watch was tense: applications fell from roughly 14,170 to 10,500, the admit rate rose (43% to 51%), yield ticked up (17% to 21%). The legacy layout could not tell that three-variable story. The numbers lived on different tiles, in different styles, with no shared timeline. Some people had quietly stopped looking. The redesign set out to stop making people orient and start leading with the answer.

## Research and domain landscape

Before I drew a box, I learned the sector. Every finding here became a design decision.

### Where a dashboard actually sits: the CRM / SIS / BI stack

The dashboard is the last mile of a CRM and SIS pipeline. Slate runs about half the enrollment CRM market and holds both funnels, so it's the source of truth. I built to real Power BI capabilities and collapsed four legacy dashboards into one.

### Analytics here is longitudinal, not a single snapshot

Leaders watch trajectories, not photographs. Meridian proves it: fewer applications, higher admit rate, better yield, all at once. So every view defaults to a multi-year trend, pairs the funnel with yield, and flags projections as forecasts.

### The enrollment cliff is regional, not uniform

The college-age population is shrinking in the Northeast, Midwest, and West while the South grows. A Northeast STEM school feels this sharply. So geography is a first-class, drillable dimension, regional for undergrad and global for grad.

### International share is meaningless until you split by level

Grad is about 48% international, undergrad about 4%. A blended number averages two unrelated populations, so I segment by level everywhere. There is no global "students" view.

### Test-optional is reversing, so test policy is a cohort dimension

Comparing yield across years now means comparing across policy regimes. So test policy is a filterable dimension a user can hold constant.

### Post-SFFA, demographic data is shrinking and politically sensitive

After the 2023 ruling, public release of disaggregated data collapsed. So demographic views degrade gracefully when a category is suppressed, and stay inside the platform.

### Predictive analytics carries a documented bias risk

In 2021, The Markup reported EAB's Navigate used race to predict student success, bias shipped into real guidance. So AI is a guide, never the decision-maker. Every output is a signal a human evaluates, inputs visible, sensitive attributes out of scoring.

### What the research locked in

One product shape: a funnel paired with yield, then geography, program mix, demographics, and deposits. Built on Common Data Set and IPEDS, defaulting to multi-year trends and segmenting by level.

## Goals, success criteria, and process

### What we were actually trying to fix

The Institute had a reading problem, not a data problem. The numbers were right, but scattered across four Power BI dashboards. Deans burned the first minutes of every meeting hunting for the page, the filter, the current version.

The brief was not "prettier charts." It was: make these numbers fast to read and safe to trust, for people who open this between meetings and need an answer in under a minute.

### What success looked like

Success was behavioral. A first-time user names any screen's headline in about five seconds. A returning user answers a routine question with at most one filter change. One definition per metric. A forecast always reads as a forecast. And the analysts sign off that the surface matches their data contract. That sign-off was the real acceptance test.

### Approach and process

Six passes, looping back often. The discipline: align with what Power BI can render before drawing anything pretty.

I audited the four legacy dashboards, mapped every idea to native behavior (drill-through, not a custom framework), then collapsed them into one spine, greyscale first.

AI came last, on purpose. Ask Meridian AI stays optional, audited for bias, human in the loop. A guide, not the decision-maker.

## Information architecture and navigation model

One product, one navigation model, one set of filters that act the same everywhere. Shallow by design: an Overview cockpit up top, then five owner-aligned areas, each opening on a summary before drilling into named sub-views. Filters carry over, so the drill-down continues the question you were already asking.

Two calls shaped it. Undergrad and Grad stay split (not one "Admissions" toggle) because the funnels differ, roughly 48% international versus 4%, with volumes 2x apart. One layout would always look wrong for one of them.

And one rule runs through it: segment by level, always. No lone "total enrollment", no blended "percent international". Both would describe a student who doesn't exist.

## Design system and visual language

Four old dashboards, four layouts, one maroon. I rebuilt them as one component set with one rule set. Learn one page, you can read them all.

Calm, modern SaaS. Quiet chrome so the numbers get the contrast. Foundations, chart kit, and AI layer sit below.

## Module deep-dive: undergraduate and graduate admissions

These two modules are the platform's heart, and they break the same rule: one number lies. Grad students are ~48% international, undergrads ~4%. A single Institute-wide "percent international" describes no one.

So the rule came first: segment by level, everywhere. Each gets its own overview, geography, and funnel. Shared chrome, never shared data.

### Undergraduate admissions

The undergrad story is a tension, not a headline. Over two years the funnel both tightened and loosened.

- Applications fell ~14,170 to ~10,500.
- Admit rate rose ~43% to ~51%.
- Yield ticked up ~17% to ~21%.

Fewer applications, easier admit, slightly better yield. Every KPI carries a year-over-year delta, because "10,500 applications" tells a dean nothing and "down ~25%" starts a conversation. Single-cycle blindness is exactly what the legacy Power BI dashboards got wrong.

### Graduate admissions

Graduate runs on a different engine: smaller pool, dramatic international skew, heavy loss between admitted and enrolled. So it's built around stage conversion, not multi-year trends.

The funnel makes the real problem legible: more than two thirds of admitted applicants decline. That gap, not the application count, is where the yield work lives.

At ~48% international with source markets concentrated (India by far the largest), concentration is a risk as much as a strength. When one country supplies a big share, a visa-policy change is an enrollment event.

### Why the two modules deliberately diverge

One "admissions" template would have been easier. I chose not to. Undergrad optimizes for multi-year tension; grad for stage conversion and source-market concentration. The chrome, navigation, and AI layer are shared so it feels like one tool. The analysis is split because the two populations genuinely are. That is the one decision the legacy dashboards never made.

## Module deep-dive: research and HR

Undergrad and grad are one pipeline. Research and HR are different animals. Research is a money-and-output story told over years. HR is a workforce story where the key numbers are also the most sensitive. Both legacy dashboards had admissions' disease (maroon chrome, pies, tiny type), but the cure differed because the questions did.

I kept the overview-and-drill-down spine, then changed the top-line KPIs, the time horizon, and how I handled demographic data.

### Research Intelligence

This office does not ask "how many proposals this month." It asks "is the funding pipeline healthier than three years ago." So I led with money over time.

The KPI band separates three numbers people kept confusing: **funding (new) ~$21.4M** (did we win), **awards (active) ~$52M** (what we manage), **expenditures ~$35.5M** (are we using it). Legacy split these across separate pies, so people compared slices and drew the wrong conclusion. Side by side, one definition each, was the highest-value fix.

The decade trend anchors the page: a single year says almost nothing; the ten-year slope tells you growing, flat, or sliding. Output (publications, patents, H-index ~184) sits apart as the lagging proxy it is.

### HR Workforce

HR needed the most restraint: do less, more clearly, and treat people's data with care.

The KPI band is deliberately plain: **headcount ~1,363**, split at once into **faculty ~708** and **staff ~655**, two populations run by different rules. New hires and turnover sit beside it so headcount reads as a flow.

The body answers three questions an HR leader actually asks: who we have now, how the workforce is changing, and who we have by demographics, split faculty versus staff.

The demographic panels are where I designed most carefully:

- Race/ethnicity and gender are **composition, not performance.** Nothing ranks or targets.
- Small headcounts are **suppressed or grouped.** "100% of 3 people" is noise and a privacy risk.
- **No AI scoring here.** Ask Meridian AI summarizes; it never predicts, ranks, or flags.

### Why these two share a pattern

Both are longitudinal stories the legacy dashboards flattened into single-year pies. Both have a headline number that misleads alone and only helps once you split it. Admissions taught me to lead with the funnel; these taught me to lead with the multi-year arc, and to know when not to compute.

## Funnel, yield, and melt

A lean intro, then the spine of each point.

The funnel is the whole job for enrollment leaders, so it sits up top.

Five stages, plus a sixth most dashboards skip: summer melt, where yield quietly leaks.

### Why funnel and yield share a screen

One number is meaningless without the other. Year one: applications fell 25%, but admit rate rose 43% to 51% and yield 17% to 21%. Narrower at the top, more efficient at the bottom.

### The melt band

Real money that rarely gets a home. Deposited-versus-enrolled as its own delta gives leaders a number to plan against.

## Geo intelligence

Geography is the second lens. "Percent international" means nothing until you split it by level, so each gets its own view.

### Undergraduate Geo

At 4% international, the domestic story is the story. I lead with a US map, because the enrollment cliff is regional and Meridian sits in the Northeast.

### Graduate Geo

At ~48% international, the source-market world map leads. The pipeline is concentrated, and that is the risk: one visa shift can move a whole class.

## Before and after

The fastest proof: old pain on the left, new answer on the right.

### Module by module

**Undergraduate Admissions.** Applications fell 14,170 to 10,500, admit rate climbed 43% to 51%. A Northeast school feels the demographic decline harder, so geography earned its own screen.

**Graduate Admissions.** The worst of the pie problem. International share now splits by level: ~48% of grad students, only ~4% of undergrads.

**Research.** A dense grid of fiscal-year tables became a proposals-to-awards pipeline with flagged trends.

**HR.** Headcount 1,363, 72 new hires. Glance up top, detail below.

### What carried across all four

One platform, not four prettier reports. The same patterns everywhere: KPIs with deltas, trends by default, charts chosen for the question, one predictable drill path.

## Outcome, reflection, and forward outlook

What shipped, what I'd redo, and where Meridian goes next.`,
};
