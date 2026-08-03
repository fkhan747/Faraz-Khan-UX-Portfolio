import React from "react";

/* Primary users, in the same card the other case studies use:
   dark-card, accent left border, role title + short description.

   Three personas, not six. The original set listed every audience the platform
   touches, which read as an org chart rather than a design input. These three
   are the ones whose needs actually pulled the design in different directions:
   speed (leadership), depth (enrollment), and separation (HR). */
const USERS = [
  {
    label: "Senior leadership",
    desc: "Wants the whole institution in one glance: the headline across all four domains in ninety seconds, multi-year trends, and forecasts flagged as forecasts.",
  },
  {
    label: "Enrollment management",
    desc: "The most demanding audience. Lives in the funnel: applied through to enrolled plus summer melt, yield by segment and source market, deposits tracked all summer.",
  },
  {
    label: "HR leaders",
    desc: "Own their own data. Headcount, turnover, and academic mix, with faculty and staff kept apart and workforce composition presented carefully.",
  },
];

export default function MeridianPersonas() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {USERS.map((u) => (
        <div key={u.label} className="dark-card rounded-2xl p-6 border-l-4"
          style={{ borderLeftColor: "var(--acc, #075EFD)" }}>
          <h3 className="font-display text-lg font-black mb-2 text-[#F4F3FA]">{u.label}</h3>
          <p className="text-sm leading-relaxed text-[#F4F3FA]/85">{u.desc}</p>
        </div>
      ))}
    </div>
  );
}
