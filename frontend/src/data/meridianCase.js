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
      { value: "8,714", label: "Applications in one view" },
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
    { t: "Segment by level, always", d: "Grad is ~48% international, undergrad ~4%. A blended mix describes a student who doesn't exist, so population mixes never blend across levels. The Overview may roll the funnel up; any mix or comparison only ever lives per level." },
    { t: "Lead with the answer", d: "End the 90-second orienting. Headline first, drill second. Every screen names its takeaway before it shows the detail." },
    { t: "Design to what Power BI can show", d: "Agree with the tool's limits before drawing anything pretty. Native drill-through, nothing custom the build team couldn't actually deliver." },
    { t: "Trends by default, deltas everywhere", d: "One year tells you nothing. Every view defaults to a multi-year trend, and every KPI carries a year-over-year delta." },
    { t: "AI is a guide, never the decider", d: "Human in the loop, inputs visible, sensitive attributes kept out of any scoring. Ask Meridian AI summarizes and explains what is on screen; it never scores a student, and people make the calls." },
  ],
  constraints: [
    { t: "Power BI's native limits", d: "I designed to native behavior, drill-through and standard visuals, nothing custom-built, so the team could actually ship it." },
    { t: "The data the university already has", d: "The admissions system and the student-records system already owned every number. I designed to the data the university actually has, not an idealized one." },
    { t: "Post-SFFA data sensitivity", d: "After the 2023 ruling, disaggregated demographic data is restricted. Those views suppress small counts and degrade gracefully when a category is withheld." },
    { t: "Scope honesty", d: "The Overview is hi-fi; the other tabs carried through IA, greybox, and hi-fi. Designed and demonstrated, not shipped and measured." },
  ],
  validation: [
    { t: "Heuristic audit", d: "I scored all four legacy dashboards against Nielsen's heuristics on a 0 to 4 severity scale, and tied every finding to a real person and a real task." },
    { t: "Analyst sign-off", d: "The IR analysts who own and defend the data confirmed every number on screen means exactly what their records say. That sign-off was the real acceptance test." },
    { t: "Honest scope", d: "Expert review and stakeholder sign-off, not a formal usability study. Validating task-times with real provosts and deans is the next step." },
  ],
  expectedOutcomes: [
    "Faster executive scanning, the headline in seconds instead of minutes",
    "Fewer dashboard switches, one platform instead of four separate files",
    "Better KPI discoverability, one definition per metric, a delta on every tile",
    "Consistent reporting, learn one page and you can read them all",
  ],
  body: `## The short read

Meridian ran a whole university off four Power BI dashboards that never talked to each other. The numbers were right. Reading them was the problem.

I rebuilt it as one platform with five tabs. The Overview reads the whole institution in one screen; each tab opens its own area in depth. Every view opens on a multi-year trend.

One dashboard, both jobs. A provost lands and trusts the headline. An analyst switches tabs and pulls a group apart quickly.

## The problem: four dashboards that made you work before they told you anything

Four departments, four owners, four files that never spoke. Maroon backgrounds, pie charts, tiny type, one year of data on every screen.

Each one spoke its own language. Graduate students are ~48% international, undergraduates ~4%. Any "percent international" describes a student who does not exist.

Two ways of reading collided on one page: the ninety-second scan and the deep read. The old tools served neither.

## Research: what the sector told me to build

Six findings from the sector became six rules.

- **It is a trajectory, not a snapshot.** Meridian had fewer applications, a higher acceptance rate and better enrolment at the same time. Every view opens on a trend.
- **The enrolment cliff is regional.** College-age population shrinking in the Northeast, growing in the South. Geography is a top-level filter.
- **International share lies until you split it.** Show numbers by level. There is no combined "students" view.
- **Test-optional is reversing.** Test policy is a filter you can hold constant.
- **Demographic data got restricted in 2023.** Those views hide small counts and skip categories the university cannot release.
- **Predictive analytics carries a real bias risk.** AI here is a guide, never the decider. Sensitive attributes stay out of any scoring.

## What peer universities do about this, and where Meridian broke from the pattern

Dashboard sprawl is the sector's default state, not this university's special failure. The common answer is to buy more dashboards: a BI license per department, each with its own definitions, refresh cycles and owner. EDUCAUSE has ranked data and analytics governance among higher ed's top technology issues for years, and the pattern behind it is always the same. Institutional research becomes a report factory, every leadership question becomes a ticket, and cabinet meetings open with an argument about whose number is right, because "enrolled student" means three different things in three different files.

Meridian broke from that pattern in three ways. One platform instead of one per department. One definition per metric, signed off by the analysts who own the data, so the argument about whose number is right ends before the meeting starts. And answer-first screens, so the platform replaces the report queue for routine questions instead of adding to it.

## Information architecture: one navigation, five tabs

The fix was structural, not decorative. One shared navigation, five tabs: the Overview answers "how is the institution doing," each other tab owns its department. Standard Power BI click-through, so the build team could ship it.

Learn one page, read them all: same layout, filter positions, headline treatment on every tab.

## Inside the undergraduate and graduate tabs

Both tabs break the same rule: one number lies. So they share layout and never share data.

**Undergraduate** is a tension, not a headline. Applications fell ~8,410 to ~6,290, acceptance rose ~43% to ~51%, enrolment ~17% to ~21%. Every number carries a year-over-year change: "down 25%" starts a conversation; "6,290 applications" does not.

**Graduate** runs on a different engine: small pool, heavy international skew, most admitted students never enrol. I built it around stage conversion. Two thirds of admitted applicants decline. That gap, not the application count, is where the work sits. With India the largest source country, a visa change becomes an enrolment event.

One "admissions" template would have been easier. The populations genuinely differ, and that is the call the old dashboards never made.

## Inside the research and HR tabs

Same layout, different questions, so different top-line numbers and time horizons.

**Research** leads with money over time. The top band pulls apart three numbers people kept confusing: funding won (~$21.4M), awards managed (~$52M), money spent (~$35.5M). The old version split these across three pies, so people compared slices. Side by side, one definition each. The highest-value fix in the project.

**HR** needed restraint. Headcount ~1,363, split into faculty ~708 and staff ~655. Two populations, different rules. Demographics are composition, never performance. Small numbers are hidden. No AI scoring touches this tab.

## Before and after

Five problems, five fixes, on the same screens.

Maroon backgrounds and pie charts became a calm, legible layout. Single-year snapshots became multi-year trends with a year-over-year change on every number. Combined totals became level-split views. Buried headlines became a headline band. Four files became one platform.

## Outcome, reflection, and forward outlook

The analysts who own the data signed off that every number means what their records say.

Honest scope: expert review, not a formal usability study. Overview is finished; the other tabs went through structure, rough layout, finished design. Designed and demonstrated, not shipped and measured.

Next: run task-time tests with real provosts and deans, then measure the platform in use so "ninety seconds" becomes a number, not a design intent.
`,


};
