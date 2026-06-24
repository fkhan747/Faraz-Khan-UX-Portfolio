// Meridian Institute of Technology, university analytics dashboard case study.
// CLIENT IS ANONYMIZED (real client confidential). Never surface the real name or logo.
// Body is markdown, rendered by MeridianCaseStudy.jsx. Screens are placeholders until
// the high-fidelity designs are added. No em-dashes (house rule).

export const meridian = {
  slug: "meridian",
  title: "Meridian Analytics",
  subtitle:
    "One analytics platform for an entire university, built so leaders can read it in seconds instead of minutes",
  client: "Meridian Institute of Technology (anonymized)",
  role: "Lead UX Designer",
  hero: {
    eyebrow: "UX Case Study · Higher-Ed Analytics · Power BI",
    meta: "Role: Lead UX designer (UX + data viz)  ·  Domain: Higher-ed institutional analytics  ·  Platform: Web, aligned to Power BI",
    stats: [
      { value: "4", label: "Departments unified" },
      { value: "~40", label: "Legacy views replaced" },
      { value: "14,700", label: "Applications tracked" },
      { value: "10+ yrs", label: "Of history in one view" },
    ],
  },
  body: `## TL;DR

Meridian's leaders ran the place off four disconnected Power BI dashboards. The data was all there. People just spent more time orienting than reading.

Meridian Analytics is the redesign: one platform, one visual language, an overview cockpit on top and consistent drill-downs underneath. Eight new screens, defaulting to multi-year trends.

Leadership can glance and trust what they see. Analysts can drill to the cohort level.

## Context and primary users

Meridian Institute of Technology is small, research-heavy, and structurally odd: enrollment splits almost 50/50 between undergrad and grad (about 4,200 and 4,160 in Fall 2024). Any "total" hides two different stories.

Four data domains, four owners, four separate Power BI dashboards built by different hands. They didn't talk. Seeing the full picture meant opening four files and holding the connections in your head.

### Why one cockpit was needed

Leadership questions cross domains; the tooling stopped at the borders. A provost prepping for the board thinks "enrollment is softening, is research strong enough to carry us, is headcount outgrowing revenue" in one breath. The old setup answered that in three sittings.

Each dashboard also spoke its own dialect. International share is the tell: grad is about 48% international, undergrad about 4%. A blended number is meaningless. The data has to split by level, by default, everywhere.

### The dual-audience challenge: glance vs. drill-down

Two reading modes had to live in one product. One group reads at a glance: ninety seconds before a meeting, just the headline and anything on fire. The other group drills, pulling an applicant pool apart by gender, country, and test policy.

The legacy tools leaned all the way to drill-down and dumped everything on screen, so glance users burned their ninety seconds just orienting. The redesign serves both: an overview cockpit on top of deep, drillable module pages.

### Primary users and what each one needs

I designed around six primary users.

**Leadership and provost.** Glance, multi-year trends, forecasts. They almost never filter and need projections flagged so a forecast is never read as fact.

**Enrollment leaders.** The most demanding audience. Their weekly story is strange: applications fell about 25% (14,170 to 10,500), yet admit rate rose (43% to 51%) and yield ticked up (17% to 21%). They need that without doing arithmetic across charts.

**Deans and program directors.** Program-level demand versus capacity, because a healthy total can hide one program quietly falling off.

**Research office.** The funding pipeline and output: funding around $21.4M, awards around $52M, H-index around 184, read as multi-year series.

**HR leaders.** Headcount around 1,363, turnover, and composition, presented carefully.

**IR analysts.** Designed for first, deliberately. They own the data, and everyone trusts them to vouch for it. They need exact definitions, clean lineage, and mapping to the Common Data Set and IPEDS. Win the analysts, and everyone downstream inherits that trust.

## The problem: four dashboards that made you work before they told you anything

Four separate Power BI reports. Different offices, different builders, same maroon but no shared layout or filter logic.

Leadership never said the data was wrong. They said it took too long to find what they came for. People burned the first 30 to 60 seconds of every visit just orienting.

So I ran a structured audit: scored all four reports against Nielsen's heuristics on a 0 to 4 severity scale, every finding tied to a real user and task.

### The four reports, and what each one actually did

Undergraduate Admissions, Graduate Admissions, Research, and HR. Four domains, four mental models, four visual languages. A provost wanting a Monday read across all of them had to open four files and stitch the story in their head.

### What was actually broken (heuristic + severity audit)

Every page showed everything at once, ten to fifteen tiles competing, nothing telling your eye where to start. Pies everywhere with near-identical slices. Two-axis charts you had to decode. Tiny 8 to 10px fonts.

The biggest failure: treating the institution as one population. Enrollment is near 50/50 (about 4,200 undergraduate, 4,160 graduate), recently flipped from graduate-majority. A single total hides that flip. "Percent international" is around 48% graduate but only 4% undergraduate, so a blended number misleads. I had to segment by level everywhere.

### Why this mattered for this institution specifically

The story leaders most needed to watch was tense. Over two years applications fell from roughly 14,170 to 10,500 (about 25% in one year), while the admit rate rose (43% to 51%) and yield ticked up (17% to 21%). Fewer applications, an easier admit, slightly better yield.

The legacy layout could not tell that three-variable story. The numbers lived on different tiles, in different chart styles, with no shared timeline.

The old reports were not failing on data. They were failing on hierarchy, consistency, segmentation, and orientation. Some people had quietly stopped using them. That is what the redesign set out to fix: stop making people orient, start leading with the answer.

## Research and domain landscape

Before I drew a single box, I learned the sector. A dashboard that ignores how admissions actually works is just a prettier version of the wrong thing. Every finding here ends in a design decision.

### Where a dashboard actually sits: the CRM / SIS / BI stack

Enrollment data starts in a CRM and a student information system. The dashboard is the last mile.

Slate runs about half the enrollment CRM market and carries both undergrad and grad funnels, so it tends to be the single source of truth. BI sits on top, in Power BI. So I designed to real Power BI capabilities, and collapsed four legacy dashboards into one unified funnel.

### Analytics here is longitudinal, not a single snapshot

Leaders watch trajectories, not photographs. A cycle can look fine and still be the first year of a slide. Meridian's undergrad funnel proves it: fewer applications, higher admit rate, slightly better yield, all at once. The shape over time tells that story; no single number does.

So every core view defaults to a multi-year trend, pairs the funnel with yield, and flags projections clearly so a forecast never reads as fact.

### The enrollment cliff is regional, not uniform

The college-age population is shrinking in the Northeast, Midwest, and West while the South grows. A STEM university in the US Northeast feels this more sharply than a national average suggests.

So geography is a first-class, drillable dimension, with separate geo views for undergrad (regional, exposed) and grad (global).

### International share is meaningless until you split by level

At Meridian, grad students are about 48% international; undergrads about 4%. Any blended "percent international" averages two populations that have nothing to do with each other. That isn't imprecise, it's misleading.

So I segment by level everywhere. There is no global "students" view, because the blended number hides the only thing worth knowing.

### Test-optional is reversing, so test policy is a cohort dimension

Selective schools are reinstating testing requirements. Comparing yield across years now means comparing across different policy regimes, which quietly confounds the trend.

So test policy is a filterable cohort dimension. A user can hold it constant, so a policy change isn't misread as a change in the pool.

### Post-SFFA, demographic data is shrinking and politically sensitive

After the 2023 SFFA ruling, public release of disaggregated demographic data collapsed. The inputs to any demographic panel are getting thinner and more contested.

So demographic views degrade gracefully when a category is suppressed, and stay inside the platform rather than as headline metrics.

### Predictive analytics carries a documented bias risk

This shaped the AI layer most. In 2021, The Markup reported that EAB's Navigate used race to predict student success. A shipped product that encoded bias into real guidance.

I wanted an AI layer here, but that reporting set the rules. AI is a guide, never the decision-maker. Every output is a signal a human evaluates, with its inputs visible and sensitive attributes kept out of scoring.

### What the research locked in

The landscape pointed at one product shape: an application funnel paired with yield, then geography, program mix, demographics, and deposits. Built on Common Data Set and IPEDS standards. Everything defaults to multi-year trends and segments by level, because at Meridian the blended number is almost always the misleading one.

## Goals, success criteria, and process

### What we were actually trying to fix

The Institute had a reading problem, not a data problem. The numbers were right but scattered across four Power BI dashboards. A dean burned the first minutes of every meeting just finding the page, the filter, the current version. By then the meeting had moved on.

The brief was not "prettier charts." It was: make these numbers fast to read and safe to trust, for people who open this between meetings and need an answer in under a minute.

I set five goals and wrote them down where the team could hold me to them.

### What success looked like

Success was behavioral, not "it looks modern." A first-time user can name any screen's headline in about five seconds. A returning user answers a routine question with at most one filter change. Every metric has one definition. A forecast always reads as a forecast. And the analysts sign off that the surface matches their data contract. That sign-off was the real acceptance test.

### Approach and process

Six passes, with a lot of looping back. The discipline: align with what Power BI can actually render before drawing anything pretty.

I audited the four legacy dashboards to tag what made them slow. I mapped every idea to native Power BI behavior, so overview-and-drill-down rides on drill-through, not a custom framework nobody could maintain after I left. I collapsed four dashboards into one spine, designed it in greyscale first to protect reading order, then brought in type and clear projection-versus-actual treatment.

AI came last, on purpose. Ask Meridian AI handles natural-language questions and next-best-actions, but it stays optional: the platform is complete without it, and predictive analytics here carries documented bias risk. Anything that scores or predicts gets bias auditing, transparency, and a human in the loop. AI is a guide, not the decision-maker.

## Information architecture and navigation model

One product. One navigation model. One set of filters that behaves the same everywhere. That was the first and most important call.

### Overview and drill-down

The model is overview-and-drill-down, deliberately shallow. Two real levels do all the work.

The top level is the Overview cockpit: the whole Institute on one screen. It's what the provost opens first, often the only screen they open. It answers "how are we doing" in ten seconds, then points somewhere.

Click a number and you drill into a domain area with the same filters carried over. The old tools reset your context on every switch. Here the drill-down continues the question you were already asking.

### Five-area navigation

Five top-level items, and that is the entire mental model. Five is a number people hold without a legend, and it maps to who owns what: enrollment management, the research office, HR, leadership moving across all of it from the Overview.

Splitting Undergraduate and Graduate instead of one "Admissions" toggle was a real tradeoff. The funnels aren't the same shape. Graduate is 48% international, undergraduate 4%. Volumes differ by more than 2x. One layout for both meant one would always look wrong.

### Per-area sub-views

Each area opens on its own overview, then offers a short, named set of sub-views. Every one answers a question someone actually asked in discovery.

The sub-view enrollment leaders care about most is Undergraduate Funnel / Yield / Melt: fewer applications (14,170 down to 10,500 over two years), a rising admit rate (43% to 51%), yield ticking up (17% to 21%).

### The global filter model

Filters were one of the worst parts of the old experience: cramped, inconsistent, stranded in a corner. Now the bar is global, sits in the same place on every screen, and persists as you drill down. Set the year on the Overview, drop into Undergraduate, the year is still set.

It defaults to a multi-year trend, not a single snapshot, because enrollment analytics is a longitudinal problem. And it shows only the dimensions that apply: decision plan and test policy mean nothing in HR, so the bar hides them. What you see is always live.

### Why segment-by-level is enforced everywhere

This is the one rule the whole IA protects: no "total enrollment" number standing alone, no unsegmented "percent international" anywhere. Both would lie.

The Institute sits near a 50/50 split and only recently flipped from graduate-majority to near-even. A single total hides that flip, exactly the structural shift leadership needs to see. And a blended "percent international" describes a student who doesn't exist: 48% on one side, 4% on the other.

So level is structure, not an optional filter. The honest version of the story stays the default one.

## Design system and visual language

Four legacy dashboards looked like four products built by four people. Same maroon, four layouts. The redesign is one component set, one rule set, everywhere. Learn to read one page and you can read them all.

Calm, modern SaaS. The chrome stays quiet so the numbers get the contrast.

### Foundations

Light neutral canvas, soft cards, generous white space doing the separating. A geometric sans, plus mono for eyebrow labels and tabular KPI figures so numbers read like a ledger. One confident blue for emphasis, a fixed categorical palette, and status that means something: green healthy, amber watch, red risk. Maroon is now a quiet brand note, not a flood.

### The chart kit

Legacy decks leaned on pies nobody could read. I narrowed it to a small kit, one type per question, all aligned to what Power BI can render: KPI tiles, an admissions funnel, one careful donut, bars as the workhorse, lines for the multi-year story, one map for geography.

Every chart shares the same title, legend, formatting, and empty state. A chart with no data says so instead of breaking. A dean can drill from overview into a program without relearning the page.

### The AI layer

The brief asked for AI; the research made me cautious. The Markup reported in 2021 that EAB's Navigate used race as a predictor of student success. So my rule was simple: AI assists, it does not decide. It never sits between a user and the numbers.

It shows up in three restrained places: Ask Meridian AI returns a real chart plus a short read, grounded in the data contract; optional next-best-action cards that prompt you to look; and a quiet, dismissible signals feed.

The guardrails are the design, not a disclaimer. Human-in-the-loop by default. Every feature shows what it looked at and links to the source. Any scoring is a guide to audit, never a verdict, and sensitive demographics are never predictors, the exact failure The Markup documented.

The test I held it to: delete the AI entirely and the dashboards are still complete and trustworthy. AI earns its place by saving time, not by becoming the thing you have to trust.

## Module deep-dive: undergraduate and graduate admissions

These two modules are the heart of the platform, and they are where one total number hides the truth bites hardest. Graduate students are about 48% international. Undergraduates, about 4%. A single Institute-wide "percent international" describes no one.

So before any chart, I set one rule: segment by level, everywhere. Undergrad and grad each get their own overview, geography, and funnel. The chrome stays identical so leaders move between them without relearning the layout. The data never crosses the line.

### Undergraduate admissions

The undergrad story is a tension, not a headline. Over two years the funnel both compressed and loosened: applications fell from ~14,170 to ~10,500, the admit rate rose from ~43% to ~51%, yield ticked up from ~17% to ~21%. Fewer applications, an easier admit, slightly better yield. That is what the provost and enrollment VP argue about, so the overview surfaces it in seconds.

The screen leads with the funnel: applied, admitted, deposited, enrolled, with summer melt flagged as the drop. Each stage carries its conversion, so admit rate and yield are properties of the funnel itself, not floating cards.

Every KPI carries a year-over-year delta. "10,500 applications" tells a dean nothing. "10,500, down about 25%" starts a conversation. That single-cycle blindness is exactly what the legacy Power BI dashboards got wrong.

### Graduate admissions

Graduate admissions runs on a different engine. Smaller pool, dramatic international skew, and far more loss between admitted and enrolled. So the module is built around stage conversion and the review queue, not multi-year trends.

The funnel is the spine: ~4,052 applied, ~2,423 admitted (a ~60% admit rate, far higher than undergrad, which is exactly why the two can never share a funnel), ~695 offers accepted, ~506 enrolled.

The funnel makes the real problem legible: more than two thirds of admitted applicants decline. That gap, not the application count, is where the yield work lives, so it gets the widest step-down.

At ~48% international, this is a different population entirely. Source markets are concentrated, India by far the largest. Concentration is a risk as much as a strength: when one country supplies a large share of intake, a visa-policy change is an enrollment event.

### Why the two modules deliberately diverge

One "admissions" template for both levels would have been easier. I chose not to. Undergrad optimizes for multi-year tension and leans on deltas. Graduate optimizes for stage conversion and source-market concentration. The chrome, navigation, and AI layer are shared so it feels like one tool. The analysis underneath is split because the two populations genuinely are. That is the one decision the legacy dashboards never made.

## Module deep-dive: research and HR

Undergrad and grad are one pipeline everyone gets: applications in, students out. Research and HR are different animals. Research is a money-and-output story that plays out over years. HR is a workforce story where the most important numbers are also the most sensitive. Both legacy dashboards had admissions' disease (maroon chrome, pie charts, tiny type), but the cure differed because the questions differ.

I kept the overview-and-drill-down spine. What changed: the top-line KPIs, the time horizon, and how carefully I handled demographic data.

### Research Intelligence

The research office does not ask "how many proposals this month." They ask "is our funding pipeline healthier than three years ago." So the module leads with money over time.

The KPI band separates three numbers people constantly confused in the old version: **funding (new) about $21.4M** (did we win), **awards (active) about $52M** (what we manage), and **expenditures about $35.5M** (are we using it). In the legacy dashboard these sat in separate pies on separate pages, so people compared a $21M slice against a $52M slice and drew the wrong conclusion. Putting them side by side, each with one plain definition, was the highest-value fix.

The centerpiece is the decade trend: proposals, awards, expenditures on one chart, FY2014 to FY2024. A single year tells you almost nothing. The ten-year slope tells you whether the enterprise is growing, flat, or sliding.

Output (publications, patents, H-index about 184) lives in its own block. I was honest: these are lagging proxies, easy to game. The pipeline anchors the page, because that is what the office can act on.

### HR Workforce

HR needed the most restraint. The legacy version showed everything at once in competing maroon pies. The redesign does less, more clearly, and treats demographic data with care.

The KPI band is deliberately plain: **headcount about 1,363**, split immediately into **faculty about 708** and **staff about 655**. The combined number is nearly useless to an HR leader, who manages those two populations under different rules. New hires and turnover sit beside it so headcount reads as a flow, not a static count.

The body answers three questions an HR leader actually asks: who do we have right now (academic mix), how is the workforce changing (the decade shape, where hiring freezes show up), and who do we have by demographics, broken out by faculty versus staff because an aggregate hides the difference.

The demographic panels are where I designed most carefully:

- I treated race/ethnicity and gender as **descriptive composition, not performance metrics.** Nothing ranks or implies a target.
- Small headcounts get **suppressed or grouped.** "100% of a 3-person group" reads as a finding when it is just noise and a privacy risk.
- **No AI scoring touches this module.** Ask Meridian AI can summarize the screen, but it never predicts, ranks, or flags individuals or groups.

### Why these two share a pattern

Research and HR look unrelated, but they taught the same lesson. Both are longitudinal stories the legacy dashboards flattened into single-year pies. Both have a headline number that misleads alone (total awards, total headcount) and only becomes useful when you split it. Admissions taught me to lead with the funnel. These two taught me to lead with the multi-year arc, and to know when not to compute.

## Funnel, yield, and melt

The funnel is the whole job for enrollment leaders, so it gets the top screen after the cockpit.

It runs five stages, plus a sixth most dashboards skip: summer melt, the gap between spring deposits and fall arrivals. That is where yield quietly leaks, so I gave it its own band.

Funnel and yield share one screen because one number is meaningless without the other. Meridian's first year: applications fell 25%, which alone reads like a crisis. But admit rate climbed from 43% to 51% and yield from 17% to 21%. Narrower at the top, more efficient at the bottom.

The melt band is the piece I am most attached to. It is real money that rarely gets a home. Showing deposited-versus-enrolled as its own delta turns "we lost some kids over the summer" into a number a leader can plan against.

## Geo intelligence

Geography is the second lens. "Percent international" means nothing until you split it by level: grad students are ~48% international, undergrads ~4%. Averaging them describes no one. So each level gets its own geo view.

### Undergraduate Geo

At 4% international, the domestic story is the story. I lead with a US map by state and county. The enrollment cliff is regional, and Meridian sits in the Northeast, where the squeeze hits hardest. A national total hides that.

### Graduate Geo

At ~48% international, the source-market world map is the centerpiece, each country sized by volume. Meridian's pipeline is heavily concentrated, and that concentration is the risk: one visa shift can move a whole incoming class. A companion table sets conversion next to volume, so a director can tell applications from enrolled students.

Two views cost a little but buy honesty. One blended map would say an average thing, which here means nothing.

## Before and after

The fastest way to show the change: old pain on the left, new answer on the right.

### The five problems, and what replaced them

**1. Clutter instead of hierarchy.** Legacy pages showed everything at once, so nothing was first. The redesign leads with headline KPIs, then trend, then detail. The most-asked question lives in the top band.

**2. Pie overload instead of fit-for-purpose charts.** The old reports used pies even for things pies are bad at. I matched each chart to its question: shares stay donuts, comparisons became sorted bars, time became lines.

**3. Navigation friction instead of overview-and-drill-down.** The old left-rail had no link between pages. Now one overview cockpit drills into each module. Click a stage, land there in context. Nothing is a dead end.

**4. No emphasis instead of KPI-with-delta.** Legacy numbers were flat, no prior year, no direction. Every headline number now carries a delta and an up or down indicator, with multi-year context one glance away.

**5. Orienting time instead of reading time.** Add the four up and users spent their first minutes orienting before they could read. The redesign spends that minute for them.

### Module by module

**Undergraduate Admissions.** I lead with the real tension: applications down 14,170 to 10,500, admit rate up 43% to 51%, yield up 17% to 21%. A Northeast school feels the demographic decline harder, so geography earned its own screen.

**Graduate Admissions.** The worst of the pie problem. Source countries became a ranked bar and map; the summary became a funnel. International share now splits by level: about 48% of grad students, only about 4% of undergrads.

**Research.** A dense grid of fiscal-year tables (funding $21.4M, awards $52M, expenditures $35.5M) became a proposals-to-awards pipeline with flagged trend lines.

**HR.** Headcount 1,363 (faculty 708, staff 655), new hires 72. The redesign splits glance from detail: KPIs with deltas up top, one labeled stacked bar instead of five pies, hiring and turnover as ten-year trends.

### What carried across all four

The point of one platform, not four prettier reports: the same patterns hold everywhere. KPIs with deltas up top. Trends as the default, projections flagged. Charts chosen for the question. One overview, a predictable drill path. The work that used to go into orienting now goes into reading.

## Outcome, reflection, and forward outlook

### What actually changed

The clearest win is orientation time. A dean used to guess which of four files to open, then hunt for the page. Now it's one platform: a single overview cockpit, overview-then-drill-down everywhere.

- **Reading speed.** I dumped the pie-heavy, tiny-font layouts for clear hierarchy and charts matched to the question. Leaders read a panel instead of decoding it.
- **Segmentation that matches reality.** I refused blended numbers. "Percent international" is meaningless when graduate students are about 48% international and undergraduates only about 4%. Every panel segments by level by default, so the numbers stop lying by aggregation.
- **One source of truth.** I built the data layer on the Common Data Set and IPEDS, giving the funnel a standardized spine four ad-hoc dashboards never had.
- **Trust.** The funnel and segmentation logic matched how the institutional-research analysts already think, so they didn't have to re-translate it.

I can't hand you a "decisions got X% faster" number. The honest claim: clearer, faster to read, better segmented, trusted by the analysts who own the data. The funnel story is now legible at a glance instead of buried across pages: applications roughly 14,170 down to about 10,500, admit rate about 43% up to 51%, yield about 17% up to 21%.

### What was hard, and what I'd do differently

- **Designing inside Power BI's box.** Every layout had to be buildable in Power BI, which constrains spacing, interaction, and chart types. Next time I'd pull a Power BI engineer into wireframe reviews earlier.
- **The AI layer is a promise, not a proof.** Ask Meridian AI is built human-in-the-loop with visible inputs, because predictive analytics in admissions has a documented bias problem. The AI shows its work and never decides, but none of it is bias-audited yet. That's the first work item.
- **Demographics on shrinking ground.** Post-SFFA, only 16 of about 39 tracked selective institutions released disaggregated demographic data in 2025, down from 34. I designed those panels to degrade gracefully when the data isn't released.
- **Scope honesty.** I built the overview cockpit to high fidelity and carried the other seven screens through IA, greybox, and hi-fi. The platform is "designed and demonstrated," not "shipped and measured."

### Forward outlook: the next two to three years

- **AI moves from a bolt-on to the way you query the data.** Today Ask Meridian AI sits on top of dashboards. The useful version is the inverse: you ask in plain language and the relevant panel assembles itself. The non-negotiable is governance, because an AI is only as honest as the data model under it.
- **Unified cloud platforms keep consolidating.** Slate leads (1,000-plus institutions) and spans undergraduate and graduate admissions, the natural upstream source for funnel data. The play is tighter, more live CRM-to-BI integration so summer melt is something you watch as it happens.
- **Segmentation becomes the whole game.** WICHE projects the Northeast, Midwest, and West shrink by roughly 16 to 17 percent in high-school graduates by the early 2040s. Defaulting to multi-year trends plus geographic segmentation is how you see the cliff coming. Test-optional is fracturing too, so test policy is a filterable cohort dimension.
- **UX maturity in higher-ed analytics.** These tools were built by data teams for data teams. The bet: build them for the provost, dean, and enrollment leader. Default to the question a leader actually asks, and treat "I understood this in five seconds" as a requirement.

The redesign makes the data clearer, faster to read, properly segmented, and more trusted by the people who own it. The AI and harder behavioral outcomes are designed-for, not yet proven. Both are true at once.`,
};
