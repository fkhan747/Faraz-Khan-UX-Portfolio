import React from "react";
import { Check, Star, ArrowUpRight } from "lucide-react";

/* The funnel story, now legible at a glance */
const SHIFTS = [
  { from: "14,170", to: "10,670", label: "Applications, over two years" },
  { from: "43%", to: "51%", label: "Admit rate" },
  { from: "17%", to: "21%", label: "Yield" },
];

const CHANGED = [
  { t: "Reads, not decodes", d: "Pie-heavy, tiny-font layouts gave way to clear hierarchy and charts matched to the question." },
  { t: "Segmented by level", d: "No blended numbers. Percent international is meaningless when grad is ~48% and undergrad ~4%, so every panel splits by default." },
  { t: "One source of truth", d: "A data layer on the Common Data Set and IPEDS, the standardized spine four ad-hoc dashboards never had." },
  { t: "Trusted by IR", d: "The funnel and segmentation logic matched how the analysts already think, so they never had to re-translate it." },
];
const DIFFERENTLY = [
  { t: "Design inside Power BI's box", d: "Every layout had to be buildable in Power BI. Next time I would pull a Power BI engineer into wireframe reviews earlier." },
  { t: "The AI is a promise, not a proof", d: "Built human-in-the-loop with visible inputs, but none of it is bias-audited yet. That is the first work item." },
  { t: "Demographics on shrinking ground", d: "Post-SFFA, far fewer institutions release disaggregated data, so those panels degrade gracefully when it is missing." },
  { t: "Scope honesty", d: "The overview is hi-fi; the other seven carried through IA, greybox, and hi-fi. Designed and demonstrated, not shipped and measured." },
];
const OUTLOOK = [
  { t: "AI becomes how you query", d: "Not a bolt-on. You ask in plain language and the right panel assembles itself, governed by an honest data model." },
  { t: "CRM-to-BI keeps consolidating", d: "Tighter, more live integration, so summer melt is something you watch as it happens." },
  { t: "Segmentation is the whole game", d: "With the enrollment cliff coming, multi-year trends plus geo and policy segmentation is how you see it early." },
  { t: "UX maturity in the sector", d: "Built for the provost and dean, not just data teams. Treat 'understood in five seconds' as a requirement." },
];

const Group = ({ eyebrow, items, icon: Icon, iconColor }) => (
  <div>
    <p className="font-mono text-[10px] uppercase tracking-widest text-[#F5379B] mb-4">{eyebrow}</p>
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((x) => (
        <div key={x.t} className="dark-card rounded-2xl p-5 flex gap-3">
          <Icon size={16} className="shrink-0 mt-1" style={{ color: iconColor }} strokeWidth={2.4} />
          <div>
            <h4 className="font-display text-base font-black text-[#F4F3FA] leading-tight">{x.t}</h4>
            <p className="text-[13px] leading-relaxed text-[#F4F3FA]/80 mt-1">{x.d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function MeridianOutcome() {
  return (
    <div className="mt-2 space-y-12">
      {/* the funnel story at a glance */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#F5379B] mb-4">The funnel story, now legible at a glance</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SHIFTS.map((s) => (
            <div key={s.label} className="dark-card rounded-2xl p-6">
              <div className="flex items-baseline gap-2 font-display font-black leading-none">
                <span className="text-2xl md:text-3xl text-[#A29CB4]">{s.from}</span>
                <ArrowUpRight size={18} className="text-[#F5379B]" />
                <span className="text-3xl md:text-4xl text-[#075EFD]">{s.to}</span>
              </div>
              <div className="mt-3 text-[11px] font-mono uppercase tracking-widest text-white/65">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Group eyebrow="What changed" items={CHANGED} icon={Check} iconColor="#F5379B" />
      <Group eyebrow="What I would do differently" items={DIFFERENTLY} icon={Star} iconColor="#075EFD" />
      <Group eyebrow="Forward outlook, the next two to three years" items={OUTLOOK} icon={ArrowUpRight} iconColor="#075EFD" />

      {/* white accent callout, the honest close */}
      <div className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-3">The honest claim</p>
        <p className="font-display text-xl md:text-2xl font-bold leading-snug text-black max-w-4xl">
          The redesign makes the data clearer, faster to read, properly segmented, and trusted by the people who own it. The AI and the harder behavioral outcomes are designed for, not yet proven. Both are true at once.
        </p>
      </div>
    </div>
  );
}
