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

Meridian Institute of Technology is a private STEM university in the US Northeast. Its leaders ran the place off four separate Power BI dashboards: maroon, pie-chart-heavy, tiny fonts, cramped filters, some pages literally labeled "under revision." Each covered one domain. None talked to each other. The data was there. People just spent more time orienting than reading.

Meridian Analytics is the redesign: one platform, one visual language, an overview cockpit on top and consistent drill-downs underneath. I audited the legacy dashboards, mapped what Power BI could and couldn't do, then worked through IA, wireframes, and high-fidelity design. Lead with the application funnel paired with yield, then geography, program mix, demographics, deposits. Everything defaults to multi-year trends, with forecasts marked as forecasts.

A few decisions shaped the rest. Enrollment splits almost evenly between undergrad and grad (about 4,200 and 4,160), so every screen segments by level. International share is structural: grad students are roughly 48% international, undergrads about 4%. And because predictive analytics here has a documented bias problem, the optional AI layer, Ask Meridian AI, is a guide with visible inputs and a human in the loop, never the decision-maker.

The result: one product where leadership can glance and trust what they see, and analysts can drill to the cohort level. Eight new screens carry it, starting with the overview cockpit above.

## Context and primary users

Meridian Institute of Technology is small, research-heavy, and structurally odd: enrollment splits almost 50/50 between undergrad and grad. Fall 2024 was roughly 4,200 undergrads and 4,160 grads, about 8,360 total. That split is recent, and it shapes everything. Any "total" hides two different stories.

The Institute runs on four data domains, each with its own owner:

- **Undergraduate Admissions** (first-year and transfer funnel)
- **Graduate Admissions** (a separate, far more international funnel)
- **Research** (proposals, awards, expenditures, PhD pipeline, faculty output)
- **HR** (headcount, turnover, composition)

Before this, those four lived in four separate Power BI dashboards, built by different hands at different times. They didn't speak to each other. To see the full picture you opened four files and held the connections in your head.

### Why one cockpit was needed

Leadership questions cross domains. The tooling stopped at domain borders.

A provost prepping for the board doesn't think in "undergrad dashboard" versus "research dashboard." They think: enrollment is softening, is the research pipeline strong enough to carry us, is headcount outgrowing our revenue base. Three domains in one breath. The old setup answered them in three sittings.

There was a quieter problem. Each dashboard was built on its own terms, so the same idea was said differently in each. International share is the cleanest example: grad students are about 48% international, undergrads only about 4%. A blended "percent international" is meaningless here. The data has to split by level, everywhere, by default.

### The dual-audience challenge: glance vs. drill-down

The hardest tension wasn't visual. Two reading modes had to live in one product.

One group reads at a glance. Ninety seconds before a meeting, they want the headline: up or down, against last year and plan, anything on fire. They don't filter. They want the system to have done the thinking.

The other group drills. They pull a program's applicant pool apart by gender, source country, test policy, and state, then check it against peers. For them the dashboard is a workbench, and every filter matters.

A dashboard built for one is useless to the other. The legacy ones leaned hard toward drill-down and dumped everything on screen, so the glance user spent their ninety seconds just orienting. The redesign serves both: an overview cockpit on top of deep, drillable module pages.

### Primary users and what each one needs

I designed around six primary users. They overlap, but their core jobs are distinct.

**University leadership and the provost.** Highest altitude: glance, multi-year trends, forecasts. Their question: where is the Institute heading, what should I worry about. They need one overview reconciling all four domains, defaulting to trends, with projections flagged so a forecast is never mistaken for fact. They almost never filter.

**Enrollment management leaders.** The most demanding audience. They live in applied, admitted, deposited, enrolled, plus summer melt, read against yield. Their reality is strange: undergrad applications fell (roughly 14,170 to 10,500, about 25% down year over year), yet admit rate rose (about 43% to 51%) and yield ticked up (about 17% to 21%). Fewer applications, easier admit, better yield. That's the weekly story, and they need it without doing arithmetic across four charts. They also need source-market detail and deposit and melt tracking.

**Deans and program directors.** They care about their own house: program-level demand and capacity. A dean wants to know whether their applicant pool is growing or shrinking, how it splits by gender and geography, and whether demand matches seats. They need module pages that slice cleanly by school, because a healthy total can hide a program quietly falling off.

**The research office.** Different rhythm. They track the funding pipeline and output: proposals, awards, expenditures, PhD pipeline, faculty productivity. Headline numbers: funding around $21.4M, awards around $52M, expenditures around $35.5M, an H-index around 184, roughly 1.97 PhD students per faculty member. They read these as multi-year series (fiscal 2014 through 2024). They also need the tenure versus non-tenure split.

**HR leaders.** They own headcount, turnover, composition. Current headcount is about 1,363 (roughly 708 faculty, 655 staff), with about 72 new hires last year. They need the academic mix (tenured, tenure-track, non-tenure-track, adjunct, visiting), gender and race/ethnicity composition, and hiring and turnover trends. Composition is sensitive data, presented carefully.

**Institutional-research analysts.** They build the data, and everyone trusts them to vouch for it. If the IR analysts don't believe a number, no dean or provost will. They need exact definitions, legible lineage, and metrics mapping to the standards they report against: the Common Data Set (Section C: applied, admitted, enrolled, yield) and federal IPEDS, including peer benchmarking. Those became the data contract. Designing for analysts first was deliberate: win the people who own the data, and everyone downstream inherits that trust.

The through-line: leadership needs the glance, analysts and enrollment leaders need the drill-down, deans, research, and HR sit between. One product had to hold all of it, with a shared vocabulary, split by level where it matters, defaulting to multi-year trends with projections flagged honestly.

## The problem: four dashboards that made you work before they told you anything

When I picked this up, "the dashboards" were four separate Power BI reports. Different offices, different builders, different times. Same maroon, but no shared layout, no shared filter pattern, no agreed way to read a number.

Leadership never said "the data is wrong." They said "it takes me too long to find what I came for." That is a UX problem. People burned the first 30 to 60 seconds of every visit just orienting. By the time they found the number, they had forgotten the question they walked in with.

So I ran a structured audit. I scored all four reports against Nielsen's heuristics on the 0 to 4 severity scale and tied every finding to a real user and a real task.

### The four reports, and what each one actually did

- **Undergraduate Admissions.** Counts, gender and school breakdowns, acceptance rate, test scores, geography. The funnel was scattered across tiles, not told in one place.
- **Graduate Admissions.** Structurally similar to undergraduate, but laid out differently. You relearned the page every time you switched.
- **Research (sponsored programs).** Funding, awards, expenditures, proposals, H-index, multi-year trends. The densest screens.
- **HR.** Headcount, faculty and staff, gender and race/ethnicity, new hires, turnover.

Four domains, four mental models, four visual languages. A provost wanting a Monday read across enrollment, research, and people had to open four files and stitch the story in their head.

### What was actually broken (heuristic + severity audit)

**Visual clutter, no hierarchy (major to catastrophic).** Every page showed everything at once. Ten to fifteen tiles competing, none visibly more important. Nothing told your eye where to start.

**Pie-chart overload (major).** Pies everywhere, several with five-plus near-identical slices. You cannot compare two 18% slices by eye. The same quantity was a pie on one page and a stacked bar on another, so the chart type carried no meaning.

**Combination charts you had to decode (major).** Bars and lines on two y-axes, no labeling of which series belonged to which axis. A chart you have to study is a chart you stop using.

**Inconsistent color and type (minor to major).** Color was decorative, not meaningful. Fonts were tiny (8 to 10px) and sizes jumped with no scale.

**Navigation friction (major).** A left-rail of terse, overlapping tabs, no breadcrumb, no "you are here." Filters were crammed into corners, some report-wide, some per-page, with no way to tell which. You would change a year filter and read two numbers from two different years side by side. A trust-killer.

**A single mixed "total" that hid the story (major).** The biggest failure was treating the institution as one population. Enrollment here is near 50/50 (roughly 4,200 undergraduate and 4,160 graduate, about 8,360 total), recently flipped from graduate-majority to near-even. A single total hides that flip. "Percent international" is around 48% graduate, only 4% undergraduate, so a blended number is misleading. The redesign had to segment by level everywhere.

**"Under revision" notes left in production (major for trust).** Several pages carried "under revision" labels. If a dean sees that on a page they are about to quote in a board meeting, they stop trusting all of it.

**No multi-year default, projections not flagged (major).** The legacy reports defaulted to one cycle, and forward-looking numbers sat next to actuals with nothing marking them as projections. For an institution staring down an enrollment cliff, this year's number without the trend is useless.

### Why this mattered for this institution specifically

The story leaders most needed to watch is tense. Over two years the undergraduate funnel compressed and loosened: applications fell from roughly 14,170 to roughly 10,500 (about 25% in one year), while the admit rate rose (about 43% to about 51%) and yield ticked up (about 17% to about 21%). Fewer applications, an easier admit, slightly better yield. The legacy layout could not tell that three-variable story, because the numbers lived on different tiles, in different chart styles, with no shared timeline.

The old reports were not failing on data. They were failing on hierarchy, consistency, segmentation, and orientation. People could eventually get their answer, but the design taxed their time and confidence every visit. Some had quietly stopped using the dashboards. That is what the redesign set out to fix: stop making people orient, start leading with the answer.

## Research and domain landscape

Before I drew a single box, I learned the sector. An enrollment dashboard that ignores how admissions actually works is just a prettier version of the wrong thing. So I mapped where this product sits, what pressures its readers are under, and what the data can honestly say. Every finding ends in a design decision. That is the only reason to do research.

### Where a dashboard actually sits: the CRM / SIS / BI stack

Enrollment data does not start in a dashboard. It starts in a CRM and a student information system. The dashboard is the last mile.

Slate leads the enrollment CRM market, used by more than 1,000 institutions and roughly half the market in one poll. It spans undergraduate and graduate admissions, so it tends to be the single source of truth for the whole funnel. Once a student enrolls, the record shifts to an SIS. BI sits on top. The legacy dashboards were built in Power BI, and the redesign stays there.

Design implications:

- The dashboard is a reporting layer, not a database. It reads modeled data and does not reconcile it. That kept me honest about design problems versus data-pipeline problems.
- Because Slate carries both funnels, the product presents one unified funnel across levels. That is why the redesign collapses four dashboards into one platform.
- I designed to real Power BI capabilities. Interactions, cross-filtering, and chart types all had to be things Power BI can ship.

### Analytics here is longitudinal, not a single snapshot

Enrollment analytics is a multi-year problem: roughly a decade of history plus forward projections, not one frozen cycle. Leaders watch trajectories, not photographs. A single cycle can look fine and still be the first year of a slide. Meridian's undergraduate funnel proves it: fewer applications, a higher admit rate, and a slightly better yield all at once. No single number tells that story. The shape over time does.

Design implications:

- Default every core view to a multi-year trend. The current term is the most recent point on a line, not the headline.
- Pair the funnel with yield on the same screen, so the "fewer apps but better yield" tension is visible at a glance.
- Show projections, and flag them clearly. History and forecast must never share a visual treatment, or leaders read a model output as a fact.

### The enrollment cliff is regional, not uniform

The "enrollment cliff" is not evenly distributed. The college-age population is shrinking in the Northeast, Midwest, and West (16 to 17 percent fewer high-school graduates by the early 2040s) while the South grows slightly. A STEM university in the US Northeast feels this more sharply than a national average suggests.

Design implications:

- Geography is a first-class dimension, not a decorative map. Source markets by state and county need to be drillable, because where applications come from is changing structurally.
- Undergraduate and graduate diverge geographically and need their own geo views. Undergraduate demand is regional and exposed to the Northeast decline. Graduate demand is global.

### International share is meaningless until you split by level

At Meridian, graduate students are about 48% international while undergraduates are only about 4%. Any single "percent international" figure averages two populations that have almost nothing to do with each other. That isn't imprecise, it's misleading.

The graduate picture is global and concentrated: India is by far the largest source, then China, Nigeria, Iran, Bangladesh, Nepal, and Taiwan. The undergraduate picture is overwhelmingly domestic. Meridian recently flipped from graduate-majority to a near-even split, which makes blended totals even more deceptive.

Design implications:

- Segment by level everywhere. There is no global "students" view that isn't split into undergraduate and graduate, because the blended number hides the only thing worth knowing.
- Give graduate its own geographic view (a world map and a ranked country list), separate from the domestic, state-level undergraduate view.

### Test-optional is reversing, so test policy is a cohort dimension

The test-optional consensus is fracturing at selective schools. Dartmouth reinstated a testing requirement in February 2024, CalTech in April 2024, and Brown followed. Comparing yield or academic profile across years now means comparing across different testing-policy regimes, which quietly confounds the trend.

Design implications:

- Treat test policy as a filterable cohort dimension, not a footnote. A user should be able to hold policy constant when reading a multi-year yield trend, so a policy change isn't misread as a change in the pool.
- Keep ACT/SAT distributions available but framed by the policy in effect, so a test-optional year and a test-required year are never silently averaged.

### Post-SFFA, demographic data is shrinking and politically sensitive

After the 2023 SFFA ruling ended race-conscious admissions, the public release of disaggregated demographic data collapsed. Only 16 of about 39 tracked selective institutions released that data in 2025, down from 34 the year before. The inputs to any demographic panel are getting thinner and more contested.

Design implications:

- Build demographic views to degrade gracefully. Panels should still read clearly when a category is suppressed, rather than implying a real value of zero.
- Be restrained about what gets shown. Keep these views inside the platform, not as headline marketing metrics.

### Predictive analytics carries a documented bias risk

This one shaped the AI layer most. In 2021, The Markup reported that EAB's Navigate software used race as a predictor of student success at several schools. That is not hypothetical. It is a shipped product that encoded bias into guidance affecting real students.

I wanted an AI layer here (Ask Meridian AI, AI next-best-actions, AI signals), but that reporting set the rules for how it could exist.

Design implications:

- AI is a guide, never the decision-maker. Every AI output is a signal a human evaluates, not a verdict executed automatically.
- Be transparent about inputs. When the product surfaces a signal, a user can see what drove it and sanity-check it.
- Keep a human in the loop, and keep sensitive attributes out of scoring logic. The bias risk is a design constraint baked in from the start, not a disclaimer bolted on at the end.

### What the research locked in

The landscape pointed at one product shape. The data contract follows standards the sector already trusts: the Common Data Set and federal IPEDS, which also give a clean basis for peer benchmarking. The default view leads with the application funnel (applied, admitted, deposited, enrolled, plus summer melt) paired with yield, then geographic distribution, program mix by level, demographics, and deposits. Everything defaults to multi-year trends, supports benchmarking, and flags projections clearly. And everything segments by level, because at Meridian the blended number is almost always the misleading one.

That is the brief the rest of the design had to satisfy.

## Goals, success criteria, and process

### What we were actually trying to fix

The Institute had a reading problem, not a data problem. The numbers existed across four separate Power BI dashboards, and were broadly correct. But a dean spent the first minutes of every session figuring out where to look, which filter was on, and whether the page was even current. By the time they could read a trend, the meeting had moved on.

The brief was not "make prettier charts." It was "make these numbers fast to read and safe to trust, for people who open this between meetings and need an answer in under a minute."

I set five goals and wrote them down where the team could hold me to them.

- **Clarity over density.** Get the headline of any page in five seconds, before scrolling, before touching a filter.
- **Faster time-to-answer.** Answer a common question without reading instructions and without changing more than one control.
- **One source of truth.** One platform, not four. Same definitions everywhere. Projections always flagged, never blended into actuals.
- **Segment by default.** A single "total enrollment" hides a near 50/50 undergraduate-to-graduate split that recently flipped. "Percent international" is meaningless when graduate is around 48% international and undergraduate around 4%. Every view splits by level first.
- **Role-based reading.** Leadership wants the glance and the trend. Enrollment wants funnel, yield, deposits, melt. Deans want their program. Each role lands on what it came for.

### What success looked like

Success was behavioral, not "it looks modern":

- A first-time user can name the headline of any screen in roughly five seconds.
- A returning user answers a routine question with at most one filter change.
- Every metric has one definition. The funnel uses the same words (applied, admitted, deposited, enrolled, plus summer melt) on every screen.
- A forecast always reads as a forecast.
- The analysts sign off that the surface matches their data contract. That sign-off was the real acceptance test.
- The AI layer is optional. Turn it off and the platform is still complete.

### Approach and process

Six passes, with a lot of looping back. The discipline: align with what Power BI can actually render before drawing anything pretty.

**1. UX audit of the four legacy dashboards.** I went through Undergraduate, Graduate, Research, and HR screen by screen and catalogued what made them slow: pie charts where a ranked bar reads faster, fonts too small to scan, hidden left-rail navigation, and pages still labeled "under revision" in production. I tagged each problem by what it cost the reader.

**2. Alignment with Power BI.** The unglamorous step that made the rest real. Before any layout, I mapped each thing I wanted to native Power BI behavior: cross-filtering on click, bookmarks, drill-through, what a slicer can and cannot do. The overview-and-drill-down model is built on drill-through, not a custom framework nobody could maintain after I left.

**3. Information architecture.** I collapsed four dashboards into one spine: an overview cockpit on top, then four domains, each with the same overview-then-detail pattern. Learning one teaches you all four. Level is a first-class axis, not a buried filter. Multi-year is the default time frame.

**4. Greybox wireframes.** I designed the whole system in greyscale first, so the only thing anyone could react to was layout and reading order. This is where "headline first" got enforced: every screen had to earn its top-left with the single most important number, and the funnel had to read left to right the way people say it out loud.

**5. High-fidelity design.** Only after the greybox held did I bring in type, data-ink discipline (kill the chartjunk), and clearly different treatment for projections versus actuals. The Common Data Set and IPEDS gave me a standardized data contract the analysts already recognized.

**6. The optional AI layer.** AI came last, on purpose. Ask Meridian AI for natural-language questions and next-best-actions. It is optional for two reasons: the platform has to be complete without it, and predictive analytics here carries documented bias risk (The Markup, 2021, on EAB Navigate using race as a predictor). So anything that scores or predicts gets bias auditing, transparency, and a human in the loop. AI is a guide, not the decision-maker.

The order mattered more than any single screen. Audit told me what was slow, Power BI told me what was buildable, IA gave it one spine, greybox protected the reading order, and only then did high fidelity and AI get to show up.

## Information architecture and navigation model

The first architectural decision mattered most: make it one product. One platform, one navigation model, one set of filters that behave the same everywhere.

### Overview and drill-down

The model is overview-and-drill-down, deliberately shallow. Two levels do the work.

The top level is the **Overview cockpit**: the whole Institute on one screen. Enrollment by level, the undergraduate funnel and yield, research funding, headcount. Multi-year trend by default, projections flagged as projections. This is what the provost opens first, often the only screen they open. It answers "how are we doing" in ten seconds, then points somewhere.

The second level is the four domain areas, each with its own overview and a few sub-views. Click the undergraduate enrollment number and you land on the Undergraduate Overview with the same filters carried over. The old tools reset your context on every switch. Here the drill-down continues the question you were already asking.

I kept it at two real levels on purpose. Deans and provosts do not spelunk through nested tabs. When something needs a third level, it opens in place, not another tier to get lost in.

### Five-area navigation

The top-level navigation is five items, and that is the entire mental model:

- **Overview**, the cockpit. The institution at a glance.
- **Undergraduate**, first-year and transfer admissions.
- **Graduate**, which behaves very differently and earns its own area.
- **Research**, sponsored programs.
- **Human Resources**, workforce.

Five is a number people hold without a legend. It maps to who owns what: enrollment management in Undergraduate and Graduate, the research office in Research, HR in Human Resources, leadership moving across all of them from the Overview. The areas are the org chart of the questions, not a taxonomy I invented.

Splitting Undergraduate and Graduate instead of one "Admissions" toggle was a real tradeoff. The two funnels are not the same shape. Graduate is about 48% international, undergraduate about 4%. Volumes differ by more than 2x (roughly 10,500 undergraduate applications against 4,052 graduate). One layout for both meant one would always look wrong.

### Per-area sub-views

Each area opens on its own overview, then offers a short, named set of sub-views. Every one answers a question someone actually asked in discovery.

**Undergraduate**
- *Overview*, applications (about 10,500), admit count and rate, yield, by gender and school, test-score profile.
- *Geography*, applications and admits by state and county, international by country on a world map.
- *Funnel / Yield / Melt*, applied to admitted to deposited to enrolled. The screen enrollment leaders care about most: fewer applications (down from 14,170 to 10,500 over two years), a rising admit rate (43% to 51%), yield ticking up (17% to 21%).

**Graduate**
- *Overview*, the funnel (Applied 4,052, Admitted 2,423, Offer Accepted 695, Enrolled 506), by gender and school, international versus domestic.
- *Geography*, top source countries on the same world-map pattern as undergraduate.

**Research**
- *Research Intelligence*, funding (about $21.4M), awards (about $52M), expenditures (about $35.5M), H-index (about 184), PhD students per faculty (about 1.97), trends across FY2014 to 2024, split by tenure and non-tenure stream.

**Human Resources**
- *Workforce*, headcount (about 1,363: faculty 708, staff 655), gender, race and ethnicity, academic population mix, new hires (about 72), turnover.

### The global filter model

Filters were one of the worst parts of the old experience: cramped, inconsistent, stranded in a corner. Now the bar is global, sits in the same place on every screen, and persists as you drill down. Set the year on the Overview, drop into Undergraduate, the year is still set.

The shared dimensions:

- **Year**, the cycle year. Defaults to multi-year trend, not a single snapshot, because enrollment analytics is a longitudinal problem.
- **Term**, fall, spring, summer.
- **Level**, undergraduate or graduate. More below, because it is not just a filter.
- **Decision plan**, early decision, early action, regular, rolling.
- **Cohort**, first-year, transfer, returning, by school or program.
- **Test policy**, test-required, test-optional, test-blind. The test-optional consensus is fracturing at selective schools, and yield trends get confounded if you read across policy regimes. Filterable test policy lets you compare like with like.

Decision plan and test policy mean nothing in HR. So the bar shows the dimensions that apply and hides the ones that do not. What you see is always live.

### Why segment-by-level is enforced everywhere

This is the one rule the whole IA protects: no single "total enrollment" number standing alone, no unsegmented "percent international" anywhere.

Both would lie. The Institute sits at a near 50/50 split (about 4,200 undergraduate, 4,160 graduate, roughly 8,360 total), and it only recently flipped from graduate-majority to near-even. A single total hides that flip, exactly the structural shift leadership needs to see. "Percent international" is worse: graduate is 48% international, undergraduate 4%, so any blended figure describes a student who does not exist.

So level is structure, not an optional filter. The product enforces it three ways:

- The two largest areas are split by level in the nav, so you are almost always already inside one level.
- On the Overview, every enrollment and international figure is shown split by level. Two bars, never one merged bar with an asterisk.
- Where a metric genuinely combines levels, the default is segmented and the combined number is what you opt into.

Segment-by-level keeps the honest version of the story the default one.

## Design system and visual language

The legacy dashboards looked like four products built by four people in four different years. Same maroon, every page its own layout. The redesign was mostly agreement: one set of components, one set of rules, everywhere. Learn to read Undergraduate and you can read Research.

Calm, modern SaaS. The data is the point, so the chrome stays quiet and the numbers get the contrast.

### Foundations

- **Surface and depth.** Light neutral canvas, soft low-elevation cards, generous padding. No heavy borders. The card is the unit of meaning and white space does the separating. That answers the legacy problem, where everything touched everything.
- **Type.** A clean geometric sans, plus a mono face for two jobs: the uppercase eyebrow labels on each module, and the tabular figures in KPI tiles so numbers read like a ledger. Big numbers, quiet labels.
- **Color, restrained.** Near-neutral base, one confident blue for emphasis. Categorical data keeps a fixed palette across every chart. Status means something: green healthy, amber watch, red risk. The institutional maroon is now a quiet brand presence, not a flood color.
- **Icons.** One line set, single weight, used sparingly. They orient, they never carry data.

### The chart kit

Legacy decks leaned on pies and dense combo charts nobody could read. I narrowed it to a small kit, one type per question, all aligned to what Power BI can render.

- **KPI tiles.** Top-line numbers in big tabular figures, each with a label, a trend delta versus prior cycle, and a sparkline. One reused component.
- **Funnel.** Built for the admissions story: applied, admitted, deposited, enrolled, with summer melt called out. Conversion sits on the funnel, so yield reads in context.
- **Donut, used carefully.** One donut for one part-to-whole split (domestic versus international), headline share in the center. One donut, one question. Never five pies on a page.
- **Bars.** The workhorse. Horizontal for ranked categories, grouped or stacked for composition. Sorted by value, so the eye lands on the biggest thing first.
- **Lines.** The default over time, because enrollment is a multi-year problem. Forecast segments are dashed, lighter, labeled, so a model is never mistaken for a fact.
- **Choropleth map.** One map style for geography, so source markets read the same everywhere.

Every chart shares the same title pattern, legend, number formatting, and empty and loading states. A chart with no data says so instead of rendering a broken axis. A dean can drill from overview into a program without relearning the page.

### The AI layer

The brief asked for AI, and the research made me cautious. The Markup reported in 2021 that EAB's Navigate used race as a predictor of student success. Predictive analytics in admissions has a documented bias problem. So my rule was simple: AI assists, it does not decide. It lives in the same visual system as everything else and never sits between a user and the numbers.

It shows up in three restrained places.

- **Ask Meridian AI.** Natural-language queries that return a real chart from the kit plus a short written read, not a black box. Every response is grounded in the same data contract (Common Data Set, IPEDS) and links back to the view it pulled from.
- **AI next-best-actions.** Small optional cards that point toward a view worth checking. Prompts to look, never automated decisions.
- **AI signals feed.** A quiet, dismissible feed of flagged changes so leadership catches movement early without hunting across four domains.

The guardrails are part of the design, not a disclaimer bolted on.

- **Human-in-the-loop by default.** Nothing the AI surfaces acts on its own. Every signal ends at a human decision.
- **Transparency about inputs.** AI features show what they looked at and link to the source. No hidden model, no mystery score sold as truth.
- **Bias guardrails.** Any scoring is a guide to audit, not a verdict. Sensitive demographic attributes are never predictors, the exact failure The Markup documented. After SFFA, disaggregated demographic reporting collapsed (Inside Higher Ed found only 16 of about 39 tracked selective institutions released it in 2025, down from 34), so those inputs are thin and politically sensitive. One more reason to keep AI advisory.

The test I held it to: delete the AI entirely and the dashboards are still complete and trustworthy. The AI earns its place by saving time, not by becoming the thing you have to trust.

## Module deep-dive: undergraduate and graduate admissions

These two modules are the heart of the platform, and they are where "one total number hides the truth" bites hardest. The populations behave nothing alike. Graduate students are about 48% international, undergraduates only about 4%. A single Institute-wide "percent international" would describe no one.

So the first decision, before any chart, was a rule: segment by level, everywhere. Undergrad and grad each get their own overview, geography, and funnel. Nothing important is ever shown as an institution-wide blend. The chrome stays identical so leaders move between the two without relearning the layout. The data never crosses the line.

### Undergraduate admissions

The undergrad story is a tension, not a headline. Over about two years the first-year funnel both compressed and loosened. Applications fell from roughly 14,170 to roughly 10,500. The admit rate rose from about 43% to about 51%. Yield ticked up from about 17% to about 21%. Fewer applications, an easier admit, slightly better yield. That is what the provost and the enrollment VP argue about, so the overview surfaces it in the first few seconds.

The screen leads with the funnel, read left to right: applied, admitted, deposited, enrolled, with summer melt flagged as the drop between deposited and enrolled. Each stage carries its count and its conversion to the next, so admit rate and yield are properties of the funnel you are already looking at, not floating cards.

Beside it runs a row of KPIs, each with a last-year delta:

- Applications, with year-over-year change as a signed number and a direction, not just red or green (color alone fails colorblind users and prints badly).
- Admit rate, flagged as up, which here is not automatically "good."
- Yield, the number leaders care about most.
- Deposited and enrolled, with melt called out rather than left to subtract.

The deltas are the point. "10,500 applications" tells a dean nothing. "10,500, down about 25% from last year" starts a conversation. The single-cycle snapshot is exactly what the legacy Power BI dashboards got wrong.

Below the funnel, the pool breaks down two ways:

- **By school.** Split across Business, Sciences, Systems, and Arts & Letters. A dean stops caring about the Institute number and starts caring about their own demand. Systems up while Arts & Letters is flat is a staffing conversation, visible without a filter dance.
- **By applicant mix.** Gender split and academic-quality signals (ACT and SAT bands). With the test-optional consensus fracturing (Dartmouth and CalTech reinstated test requirements in 2024), test policy is a cohort dimension, never a fixed assumption.

A note on the charts. The legacy dashboards leaned on pie charts for everything, including eight-slice breakdowns a pie cannot carry. The redesign uses horizontal bars sorted by size for any "by category" view. Pies survive only for a true two- or three-segment split, like international versus domestic.

Geography gets its own screen. For a Northeast institution the picture is not uniform: EAB, citing WICHE's 2024 projections, expects the Northeast college-age population to shrink (roughly 16 to 17 percent fewer high-school graduates by the early 2040s). "Where are our applicants coming from, and is that base eroding" earns a dedicated drill-down.

### Graduate admissions

Graduate admissions runs on a different engine. The pool is smaller, the international skew is dramatic, and far more loss sits between "admitted" and "enrolled." So the module is built around funnel-by-stage and the queue of work, not year-over-year trends.

The admission summary is the spine, an explicit four-stage funnel:

- **Applied: about 4,052**
- **Admitted: about 2,423** (an admit rate near 60%, far higher than undergraduate, which is exactly why the two can never share a funnel)
- **Offer accepted: about 695**
- **Enrolled: about 506**

The funnel makes the real problem legible: the steep fall from admitted to offer-accepted. More than two thirds of admitted applicants decline. That gap, not the application count, is where the yield work lives, so the design gives it the widest step-down.

Two breakdowns sit under it:

- **By school**, so a program director sees their own pipeline. A single department can swing the totals here.
- **By gender**, a simple split, not dressed up.

The international story forces the segment-by-level rule. At about 48% international, this is an entirely different population from the roughly 4% undergrad pool. Source markets are concentrated: India by far the largest, then China, Nigeria, Iran, Bangladesh, Nepal, and Taiwan. The overview shows top source countries as a sorted bar list and a clear international-versus-domestic split, then hands the world map to graduate geography. Concentration is a risk as much as a strength: when one country supplies a large share of intake, a visa-policy change is an enrollment event.

The module also carries something undergraduate does not: a review queue. Graduate decisions are distributed across programs and committees, so the module surfaces applications by review state. The funnel tells leadership how the cycle is converting; the queue tells reviewers what is still on their desk.

### Why the two modules deliberately diverge

It would have been easier to build one "admissions" template for both levels. I chose not to. Undergraduate optimizes for multi-year tension and leans on deltas and trends. Graduate optimizes for stage conversion and international concentration and leans on the funnel step-down and source-market mix. The chrome, navigation, KPI styling, chart vocabulary, and AI layer are shared so the product feels like one tool. The analysis underneath is split because the two populations genuinely are. That split is the whole point of the redesign, and the one decision the legacy dashboards never made.

## Module deep-dive: research and HR

Undergrad and grad are one pipeline everyone already gets: applications in, students out. Research and HR are different animals. Research is a money-and-output story that plays out over years. HR is a workforce story where the most important numbers are also the most sensitive. Both legacy dashboards had the same disease as admissions (maroon chrome, pie charts, tiny type, a page rail), but the cure differed because the questions differ.

I kept the same overview-and-drill-down spine. What changed: the top-line KPIs, the default time horizon, and how carefully I handled demographic data.

### Research Intelligence

The research office does not ask "how many proposals this month." They ask "is our funding pipeline healthier than three years ago, and where is it going." So the module leads with money over time.

The top is a four-KPI band that separates three numbers people constantly confused in the old Power BI version:

- **Funding (new) about $21.4M**, newly awarded this year. The "did we win" number.
- **Awards (active) about $52M**, total value of awards currently active across their multi-year lifespans. The "what are we managing" number.
- **Expenditures about $35.5M**, what was actually spent this year. The "are we using it" number.
- **H-index about 184**, an output proxy, kept because leadership asks for it by name.

In the legacy dashboard these three sat in separate pie charts on separate pages, so people compared a $21M slice against a $52M slice and drew the wrong conclusion. Putting them side by side, each with one plain sentence of definition, was the highest-value fix here. Awards is not funding. Expenditure is not awards. A large active-award balance with slow spend means projects are pacing behind, which the office wants to catch early.

Below the band, the centerpiece is the decade trend: proposals, awards, and expenditures FY2014 to FY2024 on one chart. A single year tells you almost nothing. The ten-year slope tells you whether the enterprise is growing, flat, or sliding.

A few specific decisions:

- **Proposals, awards, expenditures share one chart, not three.** On a common axis, the funnel from effort to outcome becomes legible.
- **Funding sources get a ranked bar set, not a pie.** A portfolio that is 80% one federal agency is a different risk than one spread across five. A ranked bar shows that instantly; a pie hides it.
- **Tenure vs non-tenure expenditure** answers "who is doing the sponsored work," which shapes hiring and space.
- **PhD students per faculty about 1.97** sits near output as a bridge into HR.

Research output (publications, patents, H-index) lives in its own block. I was honest: these are lagging proxies, easy to game. I kept the H-index visible but did not let it anchor the page. The pipeline anchors the page, because that is what the office can act on.

### HR Workforce

HR needed the most restraint. The legacy version tried to show everything at once: headcount, gender, race, job categories, hiring, turnover, training, all competing pies in maroon on pages labeled "under revision." The redesign does less, more clearly, and treats demographic data with care.

The KPI band is deliberately plain:

- **Headcount about 1,363**, split immediately into **faculty about 708** and **staff about 655**. The combined number is nearly useless to an HR leader, who manages those two populations under different rules. So the split is in the headline, not a drill-down.
- **New hires about 72** for the year, the inflow.
- A turnover indicator as the outflow, so headcount reads as a flow (in, out, net), not a static count.

The body is organized around three questions an HR leader actually asks.

**Who do we have right now.** The academic mix (tenured, tenure-track, non-tenure, adjunct, visiting) is the most important breakdown, because it drives budget, governance, and long-term commitment. A growing adjunct share next to a shrinking tenured core is a strategic signal, not a footnote, so it gets a dedicated stacked bar. Faculty and staff each get their own composition.

**How is the workforce changing.** Active and filled jobs by year, 2015 to 2024, paired with turnover. A single year is noise. The decade shape tells you whether the institution is growing, holding, or quietly shrinking through unfilled lines, which is how a hiring freeze shows up in the data.

**Who do we have, by demographics.** Gender and race/ethnicity, broken out by faculty versus staff because the two populations look very different and an aggregate hides that. This is the part I designed most carefully.

A few honest notes on the demographic panels:

- I treated race/ethnicity and gender as **descriptive composition, not performance metrics.** Nothing ranks or implies a target. A neutral title ("Workforce composition by race/ethnicity") reads very differently than an evaluative one, and I chose neutral.
- Small headcounts get **suppressed or grouped.** "100% of a 3-person group" reads as a finding when it is just noise and a privacy risk. This mirrors a post-SFFA shift: Inside Higher Ed found only 16 of about 39 selective institutions released disaggregated demographic data in 2025, down from 34 the year before.
- **No AI scoring touches this module.** Ask Meridian AI can summarize what is on screen, but it never predicts, ranks, or flags individuals or groups. After The Markup documented in 2021 that EAB Navigate used race to predict student success, putting any predictive layer on workforce demographics was a line I would not cross.

### Why these two share a pattern

Research and HR look unrelated, but they taught the same lesson. Both are longitudinal stories the legacy dashboards had flattened into single-year pies. Both have a headline number that misleads alone (total awards, total headcount) and only becomes useful when you split it. And both carry data where the responsible move is to show less, define terms plainly, and refuse to let AI turn description into judgment. Admissions taught me to lead with the funnel. These two taught me to lead with the multi-year arc, and to know when not to compute.

## Funnel, yield, and melt

For enrollment leaders, the funnel is the whole job. Everything else explains why it moved. So it gets the most important screen after the cockpit, read top to bottom like a story.

The funnel runs five stages: applied, admitted, deposited, enrolled, and a sixth most dashboards skip, summer melt. Melt is the gap between students who deposit in spring and show up in fall. It is where yield quietly leaks, and because it lands after the celebratory deposit numbers go out, it blindsides leaders most. I gave it its own band, not a footnote.

Funnel and yield share one screen because one number is meaningless without the other. Meridian's first-year story is the clearest case. Applications fell from about 14,170 to about 10,500, roughly 25% year over year. Alone, that reads like a crisis. But the admit rate rose from about 43% to about 51%, and yield ticked up from about 17% to about 21%. Narrower at the top, more efficient at the bottom. So the screen puts application trend, admit rate, and yield on a shared multi-year axis. A dean cannot read one without the other two.

A few decisions that shaped the view:

- **Multi-year by default, single cycle on demand.** Enrollment is longitudinal. The default is the trend with the current cycle highlighted. Collapse to one year only if you ask.
- **Stage-to-stage conversion, not just totals.** Each step shows the count and the conversion to the next, so the weak joint is obvious. One blended yield number hides exactly that.
- **Projections are flagged, never blended.** Forecasted stages render dashed and labeled, so nobody mistakes a model output for a banked number.
- **One funnel, switchable by level.** The same view serves undergraduate and graduate. Graduate melt behaves differently (visa timing, funding, later decisions), so the switch reframes the annotations, not just the numbers.

The melt band is the piece I am most attached to. It is real money and almost never gets a home. Showing deposited-versus-enrolled as its own delta turns "we lost some kids over the summer" into a number a leader can plan against.

## Geo intelligence

Geography is the second lens, and it argues for segmenting by level. "Percent international" means nothing until you split it. Graduate students are about 48% international. Undergraduates are about 4%. Average them and you get a number that describes no one and swings with the enrollment mix. So each level gets its own geo view.

### Undergraduate Geo

For undergraduates the international story is small (4%), so the domestic story is the story. This view leads with a US map by state and county, because that is where the 96% lives and the budget goes.

It is also where the enrollment cliff stops being abstract. The decline is regional. EAB, citing WICHE's 2024 projections, has the Northeast, Midwest, and West losing high-school graduates (roughly 16 to 17 percent declines by the early 2040s) while the South grows slightly. Meridian sits in the Northeast, where the squeeze hits hardest. A national total hides that. Breaking enrollment down by state lets a leader see the home market shrink and watch whether South-facing recruiting replaces it.

### Graduate Geo

Graduate flips the emphasis. At about 48% international, the source-market map is the centerpiece, and it is a world map.

Each country is sized by volume, so the global pipeline reads at a glance. Meridian's graduate cohort is heavily concentrated: India is by far the largest source, then China, Nigeria, Iran. That concentration is the point. Leaning this hard on one or two countries is a risk: a visa shift or a currency swing can move an entire incoming class. A companion table puts conversion next to volume, so a director can tell a country that sends many applications from one that yields enrolled students.

Two views cost a little (two screens, a switch to learn) but buy honesty. One blended map would say an average thing, which here means nothing.

## Before and after

The fastest way to show the change: put the old pain next to the new answer, then walk it module by module.

### The five problems, and what replaced them

**1. Clutter instead of hierarchy.** Every legacy page tried to show everything at once: twelve to fifteen visuals per screen, no entry point, tiny fonts. Nothing was bigger than anything else, so nothing was first.

The redesign opens every screen with headline KPIs, then a primary trend, then supporting detail, then the long tail. The most-asked question is answered in the top band. Whitespace does real work now.

**2. Pie overload instead of fit-for-purpose charts.** The legacy reports leaned hard on pies, including for things pies are bad at: comparing seven source countries, reading a gender split, judging change over time.

I matched each chart to its question. Parts of a whole stay a share bar or labeled donut. Comparisons became horizontal bars sorted by value, so the ranking is the layout. Anything over time became a line with the projection flagged. If a reader has to compare slice angles, it is the wrong chart.

**3. Navigation friction instead of overview-and-drill-down.** The old structure was a left-rail list with no relationship between pages. To go from "applications are down" to "down where," you closed one report and opened another. Some pages were labeled "under revision" and left in the nav as dead ends.

The new model is one overview cockpit with a drill path into each module. Click a funnel stage, land on the funnel screen with that stage in context. Click a school, land on that school filtered. The breadcrumb tells you where you are. Nothing is a dead end.

**4. No emphasis instead of KPI-with-delta.** The legacy numbers were flat. A big number sat there with no prior year, no direction, no sense of whether 51% was good or alarming. For an enrollment story that is about change over time, that is the whole game missed.

Every headline number now carries a delta: current value, change against the prior cycle, an up or down indicator. Where the metric is directional in a non-obvious way (a rising admit rate is not automatically good), the delta is shown plainly and the interpretation left to the reader. Multi-year context sits one glance away as a sparkline.

**5. Orienting time instead of reading time.** Add the four up and you get the real cost: users spent their first minutes orienting before they could read anything. The redesign spends that minute for them. The structure is consistent, the chart types are predictable, and the first thing you see is the thing you came for.

### Module by module

**Undergraduate Admissions.** The legacy report buried the funnel under demographic pies. The story leaders watch (applications down from 14,170 to 10,500, admit rate up from 43% to 51%, yield up from 17% to 21%) was never framed as the tension it is. The redesign leads with that tension: a funnel from applied to enrolled, paired with yield and summer melt, then program demand by school, then geography. Because a Northeast institution feels the demographic decline more sharply than the national average (EAB, citing WICHE 2024, puts the Northeast high-school-graduate decline near 16 to 17 percent by the early 2040s), geography earned its own screen.

**Graduate Admissions.** This module had the worst of the pie problem. Source countries (India largest, then China, Nigeria, Iran, Bangladesh, Nepal, Taiwan) were a pie where the long tail collapsed into a sliver. The summary (Applied 4,052, Admitted 2,423, Offer Accepted 695, Enrolled 506) was scattered across tiles. The redesign rebuilds source countries as a ranked horizontal bar and a world map, and the summary as a funnel. It splits international share by level: graduate students are about 48% international, undergraduates only about 4%, and a blended figure hides that.

**Research.** The sponsored-programs report was a dense grid of fiscal-year tables: funding $21.4M, awards $52M, expenditures $35.5M, an H-index around 184, all flat. The redesign keeps every number but gives it shape: the proposals-to-awards-to-expenditures pipeline as a funnel, the 2014 to 2024 history as flagged trend lines, tenure versus non-tenure expenditure as a clean split.

**HR.** The workforce report crowded headcount, composition, turnover, and hiring onto one page with pies for every split. Headcount 1,363 (faculty 708, staff 655), new hires 72, active jobs from 2015 to 2024. The redesign separates the glance from the detail: headcount and composition up top as KPIs with deltas, the academic mix as a single labeled stacked bar instead of five pies, hiring and turnover as ten-year trends.

### What carried across all four

The point of one platform rather than four prettier reports: the same patterns hold everywhere. KPIs with deltas at the top. Multi-year trends as the default, projections flagged. Charts chosen for the question, not for variety. A single overview to glance across all four domains, and a predictable drill path into any one. The maroon, the tiny fonts, and the "under revision" dead ends are gone. The work that used to go into orienting now goes into reading.

## Outcome, reflection, and forward outlook

### What actually changed

The clearest win is orientation time. A dean wanting undergraduate demand and a glance at yield used to guess which of four files to open, then hunt for the page. Now it's one platform: a single overview cockpit, one overview-then-drill-down model everywhere.

- **Reading speed.** I dumped the pie-heavy, tiny-font layouts for clear hierarchy, bigger type, and charts matched to the question: trends as lines, distributions as bars, geography on a map. Leaders read a panel instead of decoding it.
- **Segmentation that matches reality.** The biggest call was refusing blended numbers. Total enrollment hides a near 50/50 undergraduate-to-graduate split that just flipped from graduate-majority to even. "Percent international" is meaningless when graduate students are about 48% international and undergraduates only about 4%. Every panel now segments by level by default, so the numbers stop lying by aggregation.
- **One source of truth.** I structured the data layer around the Common Data Set (Section C: applied, admitted, enrolled, yield) and IPEDS. That gave it a standardized spine and a path to peer benchmarking. The funnel panel got trustworthy in a way four ad-hoc dashboards never were.
- **Trust.** The institutional-research analysts build and defend these numbers. The funnel and segmentation logic matched how they already think, so they didn't have to re-translate the dashboard back into their own model. I won't dress that up as a metric.

I'll be candid: I can't hand you a "decisions got X% faster" number. This was a redesign aligned to Power BI's real capabilities and the institution's real data, evaluated through review with the people who use it. The honest claim: clearer, faster to read, better segmented, trusted by the analysts who own the data. The funnel story it surfaces (applications falling from roughly 14,170 to about 10,500, admit rate rising from about 43% to 51%, yield from about 17% to 21%) is now legible at a glance instead of buried across pages. Whether leaders make faster calls is something you'd measure in a real deployment over a couple of cycles, and I'd want to.

### What was hard, and what I'd do differently

- **Designing inside Power BI's box.** Not a free-form product. Every layout had to be buildable in Power BI, which constrains spacing, interaction, and chart types. Much of the work was finding the cleanest expression of an idea the tool can actually render. Next time I'd pull a Power BI engineer into wireframe reviews earlier.
- **The AI layer is a promise, not a proof.** Ask Meridian AI and the next-best-action prompts are built human-in-the-loop with visible inputs, because predictive analytics in admissions has a documented bias problem (The Markup, 2021, on EAB Navigate using race as a predictor of success). The AI shows its work and never decides. But none of it has been bias-audited against real data or tested with real users. That's the first work item before anyone leans on a signal.
- **Demographics on shrinking ground.** Those panels were hardest to scope: the inputs are politically sensitive and disappearing. Post-SFFA, Inside Higher Ed reported only 16 of about 39 tracked selective institutions released disaggregated demographic data in 2025, down from 34 the year before. I designed those panels to degrade gracefully. Next time I'd treat "data not released" as a first-class case from the start.
- **Scope honesty.** I built one of eight screens (the overview cockpit) to high fidelity and carried the other seven through IA, greybox, and hi-fi. The cockpit is the proven anchor, the rest a coherent system. That means the platform is "designed and demonstrated," not "shipped and measured." I'd rather say that plainly.

### Forward outlook: the next two to three years

- **AI moves from a bolt-on to the way you query the data.** Today Ask Meridian AI sits on top of dashboards. The useful version is the inverse: you ask in plain language and the relevant panel assembles itself. The groundwork is the segmentation discipline already in place, because an AI is only as honest as the data model under it. The non-negotiable is governance: bias auditing, transparency about which inputs feed a score, a human gate on anything touching a real decision. As AI gets more capable, human-in-the-loop matters more, not less.
- **Unified cloud platforms keep consolidating.** The market is concentrating, with Technolutions Slate leading (1,000-plus institutions, roughly half the market in one poll) alongside Salesforce Education Cloud, Ellucian, and EAB Navigate360. Slate spans undergraduate and graduate admissions, making it the natural upstream source for funnel data. The play is tighter, more live integration between that CRM layer and the BI layer, so the "deposited, then summer melt" gap is something you watch as it happens.
- **Demographic and policy shifts make segmentation the whole game.** EAB, citing WICHE's 2024 projections, frames enrollment as a multi-year problem: Northeast, Midwest, and West are projected to shrink by roughly 16 to 17 percent in high-school graduates by the early 2040s, while the South grows slightly. A Northeast institution feels that first. So defaulting to multi-year trends with flagged projections, plus geographic segmentation, is how you see the cliff coming. Test-optional is fracturing in parallel: several selective schools reinstated test requirements, which is why test policy is a filterable cohort dimension, so yield and quality trends aren't confounded across policy regimes.
- **UX maturity in higher-ed analytics.** Institutional dashboards were historically built by data teams for data teams. That's how you get four maroon Power BI files with pages under revision. The bet: these tools should be built for the provost, dean, and enrollment leader, not only the analyst who maintains the file. Default to the question a leader actually asks, lead with the funnel paired with yield, then geography, program mix by level, demographics, deposits. Treat "I understood this in five seconds" as a requirement, not a bonus.

The honest summary: the redesign makes the data clearer, faster to read, properly segmented, and more trusted by the people who own it. The AI and harder behavioral outcomes are designed-for, not yet proven. Both are true at once, and a senior designer should be comfortable saying so.

---

**Role:** Lead UX designer, end to end. UX audit, information architecture, user flows, greybox wireframes, and high-fidelity design across all four domains (Undergraduate Admissions, Graduate Admissions, Research, and HR), plus the optional AI layer.

**Tools:** Figma (audit, IA, wireframes, hi-fi), Power BI (target platform and capability constraints), with the data model grounded in the Common Data Set and IPEDS. Client anonymized as Meridian Institute of Technology, a private STEM university in the US Northeast.`,
};
