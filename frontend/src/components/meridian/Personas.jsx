import React from "react";

/* Primary users, in the same card the other case studies use:
   dark-card, blue left border, role title + short description. */
const USERS = [
  {
    label: "Leadership & provost",
    desc: "Reads at the highest altitude. Wants the headline across all four domains in ninety seconds, multi-year trends, and forecasts flagged as forecasts.",
  },
  {
    label: "Enrollment management",
    desc: "The most demanding audience. Lives in the funnel: applied through to enrolled plus summer melt, yield by segment and source market, deposits tracked all summer.",
  },
  {
    label: "Deans & program directors",
    desc: "Read their own house. Program-level demand versus capacity and clean slices by school, because a healthy total can hide one program quietly falling off.",
  },
  {
    label: "Research office",
    desc: "A different rhythm. The funding pipeline and output, proposals, awards, and expenditures, read as multi-year series rather than a single snapshot.",
  },
  {
    label: "HR leaders",
    desc: "Own their own data. Headcount, turnover, and academic mix, with workforce composition presented carefully.",
  },
  {
    label: "IR analysts",
    desc: "Designed for first, on purpose. They need exact definitions, visible lineage, and mapping to the Common Data Set and IPEDS. Win them and everyone downstream inherits the trust.",
  },
];

export default function MeridianPersonas() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {USERS.map((u) => (
        <div key={u.label} className="dark-card rounded-2xl p-6 border-l-4 border-[#075EFD]">
          <h3 className="font-display text-lg font-black mb-2 text-[#F4F3FA]">{u.label}</h3>
          <p className="text-sm leading-relaxed text-[#F4F3FA]/85">{u.desc}</p>
        </div>
      ))}
    </div>
  );
}
