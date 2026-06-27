// Meridian Institute of Technology, university analytics dashboard case study.
// CLIENT IS ANONYMIZED (real client confidential). Never surface the real name or logo.
// Body is markdown, rendered by MeridianCaseStudy.jsx. Voice: first-person,
// conversational, crisp (owltastic-inspired). No em-dashes (house rule).

export const meridian = {
  slug: "meridian",
  title: "Meridian Institute Analytics",
  subtitle:
    "One analytics platform for an entire university, built so leaders can read it in seconds instead of minutes",
  hero: {
    eyebrow: "UX Case Study · Higher-ed Analytics · Power BI",
    facts: [
      { label: "Role", value: "Lead UX designer (UX + data viz)" },
      { label: "Domain", value: "Education tech" },
      { label: "Platform", value: "Power BI, Data Visualization and Data Analytics" },
    ],
    stats: [
      { value: "4", label: "Departments unified" },
      { value: "~40", label: "Legacy views replaced" },
      { value: "14,170", label: "Applications tracked" },
      { value: "10+ yrs", label: "Of history in one view" },
    ],
  },
  responsibilities: [
    "Research",
    "Information architecture",
    "UI design",
    "Design system",
    "Power BI alignment",
    "AI interaction patterns",
  ],
  principles: [
    { t: "Segment by level, always", d: "Grad is ~48% international, undergrad ~4%. A blended number describes a student who doesn't exist, so there's no Institute-wide total anywhere." },
    { t: "Lead with the answer", d: "End the 90-second orienting. Headline first, drill second. Every screen names its takeaway before it shows the detail." },
    { t: "Design to what Power BI renders", d: "Agree with the engine before drawing anything pretty. Native drill-through, not a custom framework the team can't actually ship." },
    { t: "Trends by default, deltas everywhere", d: "One year tells you nothing. Every view defaults to a multi-year trend, and every KPI carries a year-over-year delta." },
    { t: "AI is a guide, never the decider", d: "Human in the loop, inputs visible, sensitive attributes kept out of any scoring. Ask Meridian AI summarizes; it never ranks or predicts." },
  ],
  constraints: [
    { t: "Power BI rendering limits", d: "I designed to native behavior, drill-through and standard visuals, not a bespoke framework, so engineering could actually build it." },
    { t: "The existing data model", d: "Slate (the enrollment CRM) and the SIS were the source of truth. I designed to the live data contract, not an idealized one." },
    { t: "Post-SFFA data sensitivity", d: "After the 2023 ruling, disaggregated demographic data is restricted. Those views suppress small counts and degrade gracefully when a category is withheld." },
    { t: "Scope honesty", d: "The Overview is hi-fi; the other tabs carried through IA, greybox, and hi-fi. Designed and demonstrated, not shipped and measured." },
  ],
  validation: [
    { t: "Heuristic audit", d: "I scored all four legacy dashboards against Nielsen's heuristics on a 0 to 4 severity scale, and tied every finding to a real person and a real task." },
    { t: "Analyst sign-off", d: "The IR analysts who own and defend the data confirmed the surface matched their data contract. That sign-off was the real acceptance test." },
    { t: "Honest scope", d: "Expert review and stakeholder sign-off, not a formal usability study. Validating task-times with real provosts and deans is the next step." },
  ],
  expectedOutcomes: [
    "Faster executive scanning, the headline in seconds instead of minutes",
    "Fewer dashboard switches, one platform instead of four separate files",
    "Better KPI discoverability, one definition per metric, a delta on every tile",
    "Consistent reporting, learn one page and you can read them all",
  ],
  body: `## TL;DR

Meridian's leaders ran a whole university off a sprawl of disconnected Power BI reports that never talked to each other. The data was all there. They just spent more time hunting for it than reading it.

So I rebuilt it as one dashboard with five tabs: Overview, Undergraduate, Graduate, HR, and Research. One navigation, one visual language. The Overview tab is the cockpit that rolls the whole institution into a single read; each other tab drills into its own area, and every view defaults to multi-year trends.

Now a provost can land on the Overview and trust it, and an analyst can switch to a tab and pull a cohort apart. One dashboard, both jobs.

## Context and primary users

Meridian is small, research-heavy, and split almost evenly between undergrad and grad (about 4,200 and 4,160 in Fall 2024). That split matters more than it sounds: any "total" quietly hides two different stories. Four domains, four owners, four dashboards that never spoke to each other.

### One question, four files

Leadership thinks across domains. The tools didn't. A provost asks "is enrollment softening, is research strong enough to carry us, is headcount outrunning revenue?" in a single breath, and the old setup needed three separate sittings to answer it.

Every dashboard spoke its own dialect, too. Grad is about 48% international, undergrad about 4%. Blend them and the number means nothing. So I split by level, by default, everywhere.

### Two ways of reading, one product

People read this in two modes. Some glance: ninety seconds, give me the headline and anything on fire. Others drill: pull a pool apart by gender, country, test policy. The legacy tools dumped it all on screen at once, so the glance crowd burned their ninety seconds just figuring out where to look.

### Who I designed for

I designed around six readers, from a provost who needs the headline in ninety seconds to an IR analyst who has to defend every number to the state. My bet: win the analysts who own the data, and everyone downstream inherits that trust.

## The problem: four dashboards that made you work before they told you anything

Four Power BI reports. Same maroon, but no shared layout, no shared filters, no shared chart language. Nobody ever said the data was wrong. They said it took too long to find what they came for, about 90 seconds of orienting every single visit.

So I audited all four against Nielsen's heuristics on a 0 to 4 severity scale, and tied every finding to a real person and a real task.

### Four reports, four mental models

Undergraduate Admissions, Graduate Admissions, Research, HR. Four domains, four mental models, four visual languages. A provost who just wanted a Monday-morning read had to open four files and stitch the story together in their head.

### What was actually broken

Everything showed at once, and nothing told your eye where to start.

The biggest miss was treating the whole institution as one population. Enrollment is near 50/50 (about 4,200 undergrad, 4,160 grad). "Percent international" is around 48% for grad but only 4% for undergrad, so a blended number is a lie with a decimal point. I segmented by level everywhere.

### Why it hit this school harder

The story leaders most needed to watch was a tense one: applications fell from roughly 14,170 to 10,670, the admit rate climbed (43% to 51%), yield ticked up (17% to 21%). The old layout could not tell that three-variable story. The numbers lived on different tiles, in different styles, with no shared timeline. Some people had quietly stopped looking. The whole redesign was about ending the orienting and leading with the answer.

## Research and domain landscape

Before I drew a single box, I went and learned the sector. Every finding here turned into a design decision.

### Where a dashboard actually sits

The dashboard is the last mile of a CRM and SIS pipeline. Slate runs about half the enrollment-CRM market and holds both funnels, so that is the source of truth. I designed to what Power BI can actually render, and collapsed four legacy dashboards into one.

### It's a trajectory, not a snapshot

Leaders watch where things are heading, not a single photograph. Meridian is the proof: fewer applications, higher admit rate, better yield, all at the same time. So every view defaults to a multi-year trend, pairs the funnel with yield, and labels projections as forecasts.

### The enrollment cliff is regional

The college-age population is shrinking in the Northeast, Midwest, and West, and growing in the South. A Northeast STEM school feels that sharply. So geography is a first-class, drillable dimension: regional for undergrad, global for grad.

### International share lies until you split it

Grad is about 48% international, undergrad about 4%. A blended number averages two unrelated populations. So I segment by level everywhere. There is no global "students" view, on purpose.

### Test-optional is reversing

Comparing yield across years now means comparing across policy regimes. So test policy is a dimension you can hold constant, not a footnote.

### Post-SFFA, demographic data is sensitive

After the 2023 ruling, public release of disaggregated data dropped off sharply. So demographic views degrade gracefully when a category is suppressed, and they stay inside the platform.

### Predictive analytics carries a real bias risk

In 2021, The Markup reported that EAB's Navigate used race to predict student success, bias shipped straight into real advising. So here, AI is a guide, never the decision-maker. Every output is a signal a human weighs, inputs visible, sensitive attributes kept out of the scoring.

### What the research locked in

One product shape: a funnel paired with yield, then geography, program mix, demographics, and deposits. Built on Common Data Set and IPEDS, defaulting to multi-year trends, always split by level.

## Design principles

Five rules did the deciding. If a screen broke one, it went back to grayscale.

## Goals, success criteria, and process

### What we were really fixing

The Institute had a reading problem, not a data problem. The numbers were right; they were scattered across four dashboards. Deans burned the first few minutes of every meeting hunting for the page, the filter, the current version.

The brief was not "prettier charts." It was: make these numbers fast to read and safe to trust, for people who open this between meetings and need an answer in under a minute.

### What success looked like

I made success behavioral, not decorative. A first-time user names any screen's headline in about five seconds. A returning user answers a routine question with one filter change at most. One definition per metric. A forecast always reads as a forecast. And the analysts sign off that the surface matches their data contract. That sign-off was the real acceptance test.

### How I worked

Six passes, looping back often. The discipline I held myself to: agree with what Power BI can render before drawing anything pretty.

I audited the four legacy dashboards, mapped every idea to native behavior (drill-through, not some custom framework), then collapsed them into one spine, grayscale first.

AI came last, on purpose. Ask Meridian AI is optional, audited for bias, human in the loop. A guide, not the decision-maker.

## Constraints I designed within

Enterprise work, so the box was real before I drew anything. These shaped every call.

## Information architecture and navigation model

One product, one navigation model, one set of filters that behave the same everywhere. Shallow on purpose: an Overview cockpit up top, then five owner-aligned areas, each opening on a summary before you drill into named sub-views. Filters carry over, so the drill-down continues the question you were already asking.

Two calls shaped it. Undergrad and Grad stay split (not one "Admissions" toggle) because the funnels are genuinely different: roughly 48% international versus 4%, volumes 2x apart. One layout would always look wrong for one of them.

And one rule runs through the whole thing: segment by level, always. No lone "total enrollment," no blended "percent international." Both would describe a student who does not exist.

## Design system and visual language

Four old dashboards, four layouts, one shade of maroon. I rebuilt them as one component set with one set of rules. Learn one page and you can read them all.

The vibe is calm, modern SaaS. Quiet chrome, so the numbers get the contrast. Foundations and the chart kit sit underneath; Ask Meridian AI is the one floating affordance, on top, never baked in.

## Inside the undergraduate and graduate tabs

These two are the heart of the platform, and they both break the same rule: one number lies. Grad students are about 48% international, undergrads about 4%. A single Institute-wide "percent international" describes nobody.

So the rule came first: segment by level, everywhere. Each gets its own overview, geography, and funnel. Shared chrome, never shared data.

### Undergraduate admissions

The undergrad story is a tension, not a headline. Over two years the funnel both tightened and loosened at once.

- Applications fell ~14,170 to ~10,670.
- Admit rate rose ~43% to ~51%.
- Yield ticked up ~17% to ~21%.

Fewer applications, easier admit, slightly better yield. Every KPI carries a year-over-year delta, because "10,670 applications" tells a dean nothing and "down ~25%" starts a conversation. That single-cycle blindness is exactly what the legacy dashboards got wrong.

### Graduate admissions

Graduate runs on a different engine: smaller pool, dramatic international skew, heavy loss between admitted and enrolled. So I built it around stage conversion, not multi-year trends.

The funnel makes the real problem legible: more than two thirds of admitted applicants decline. That gap, not the application count, is where the yield work lives.

At about 48% international with source markets concentrated (India by far the largest), that concentration is a risk as much as a strength. When one country supplies a big share of a class, a visa-policy change becomes an enrollment event.

### Why I let the two diverge

One "admissions" template would have been easier. I chose not to. Undergrad is built for multi-year tension; grad for stage conversion and source-market concentration. The chrome, navigation, and the Ask AI affordance are shared so it still feels like one tool. The analysis splits because the two populations genuinely are different. That is the one call the legacy dashboards never made.

## Inside the research and HR tabs

Undergrad and grad are one pipeline. Research and HR are different animals. Research is a money-and-output story told over years; HR is a workforce story where the key numbers are also the most sensitive. Both legacy dashboards had the same flaws as admissions (maroon chrome, pie charts, tiny type), but the fix was different because the questions were different.

I kept the overview-and-drill-down spine, then changed the top-line KPIs, the time horizon, and how I handled demographic data.

### Research Intelligence

This office does not ask "how many proposals this month." It asks "is the funding pipeline healthier than it was three years ago." So I led with money, over time.

The KPI band pulls apart three numbers people kept confusing: **funding (new) ~$21.4M** (did we win it), **awards (active) ~$52M** (what we manage), **expenditures ~$35.5M** (are we spending it). The legacy version split these across separate pies, so people compared slices and drew the wrong conclusion. Putting them side by side, one definition each, was the single highest-value fix.

The decade trend anchors the page: one year tells you almost nothing; the ten-year slope tells you growing, flat, or sliding. Output (publications, patents, H-index ~184) sits off to the side as the lagging proxy it is.

### HR Workforce

HR needed the most restraint: do less, more clearly, and treat people's data with care.

The KPI band is deliberately plain: **headcount ~1,363**, split right away into **faculty ~708** and **staff ~655**, two populations run by different rules. New hires and turnover sit next to it so headcount reads as a flow, not a still.

The body answers the three questions an HR leader actually asks: who we have now, how the workforce is changing, and who we have by demographics, faculty versus staff.

The demographic panels are where I designed most carefully:

- Race/ethnicity and gender are **composition, not performance.** Nothing ranks or targets.
- Small headcounts are **suppressed or grouped.** "100% of 3 people" is noise and a privacy risk.
- **No AI scoring here.** Ask Meridian AI summarizes; it never predicts, ranks, or flags.

### Why these two share a pattern

Both are longitudinal stories the legacy dashboards flattened into single-year pies. Both have a headline number that misleads on its own and only helps once you split it. Admissions taught me to lead with the funnel; these taught me to lead with the multi-year arc, and to know when not to compute at all.

## Funnel, yield, and melt

A lean intro, then the spine of each point.

The funnel is the whole job for enrollment leaders, so it sits right up top.

Five stages, plus a sixth most dashboards skip: summer melt, where yield quietly leaks out.

### Why funnel and yield share a screen

One is meaningless without the other. Year one: applications fell 25%, but admit rate rose 43% to 51% and yield 17% to 21%. Narrower at the top, more efficient at the bottom.

### The melt band

Real money that rarely gets a home. Showing deposited-versus-enrolled as its own delta gives leaders a number they can actually plan against.

## Geo intelligence

Geography is the second lens. "Percent international" means nothing until you split it by level, so each level gets its own map.

### Undergraduate Geo

At 4% international, the domestic story is the story. I lead with a US map, because the enrollment cliff is regional and Meridian sits right in the Northeast.

### Graduate Geo

At about 48% international, the source-market world map leads. The pipeline is concentrated, and that is the risk: one visa shift can move a whole class.

## Before and after

The fastest proof: the old pain on the left, the new answer on the right.

### Tab by tab

**Undergraduate Admissions.** Applications fell 14,170 to 10,670, admit rate climbed 43% to 51%. A Northeast school feels the demographic decline harder, so geography earned its own screen.

**Graduate Admissions.** The worst of the pie problem. International share now splits by level: about 48% of grad students, only about 4% of undergrads.

**Research.** A dense grid of fiscal-year tables became a proposals-to-awards pipeline with flagged trends.

**HR.** Headcount 1,363, 124 new hires. Glance up top, detail below.

### What carried across all four

One platform, not four prettier reports. The same patterns everywhere: KPIs with deltas, trends by default, charts chosen for the question, one predictable drill path.

## How I validated, and what it should produce

No formal usability lab on this one, and I won't pretend otherwise. Here is what I actually leaned on, and the outcomes the design is built to produce.

## Outcome, reflection, and forward outlook

What shipped, what I would redo, and where Meridian goes next.`,
};
