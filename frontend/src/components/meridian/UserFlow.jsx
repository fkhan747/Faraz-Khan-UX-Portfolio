import { ArrowRight } from "lucide-react";

export default function MeridianFlow() {
  const steps = [
    { n: "01", title: "Open Meridian", desc: "Land on the overview cockpit, no filtering needed." },
    { n: "02", title: "Read the headline", desc: "Up or down, against last year and plan, anything on fire." },
    { n: "03", title: "Open a module", desc: "Undergraduate, Graduate, Research, or HR, segmented by level." },
    { n: "04", title: "Filter to a cohort", desc: "Program, geography, test policy, term. The funnel updates." },
    { n: "05", title: "Act or export", desc: "Trigger outreach, flag a risk, or export for the board deck." },
  ];

  const lanes = [
    {
      label: "Leadership, steps 1 to 2",
      body: "Glance, trust, leave. The cockpit has already done the thinking, so a provost gets the headline in ninety seconds without touching a filter.",
      box: "bg-[#075EFD]/8 border border-[#075EFD]/30",
      lh: "text-[#5B9BFF]",
    },
    {
      label: "Analysts & enrollment, steps 1 to 5",
      body: "Drill all the way down. Same entry point, but they pull the funnel apart by cohort, check it against peers, and leave with an action.",
      box: "bg-[#F5379B]/8 border border-[#F5379B]/30",
      lh: "text-[#F5379B]",
    },
  ];

  return (
    <div className="mt-2">
      <div className="flex flex-wrap items-stretch gap-0">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-stretch flex-1 min-w-[150px]">
            <div className="dark-card rounded-2xl p-5 flex-1 min-w-[150px]">
              <span className="font-mono text-sm uppercase tracking-widest text-white">{s.n}</span>
              <h3 className="mt-2 font-display text-base font-black text-[#F4F3FA]">{s.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#A29CB4]">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center px-1.5 text-[#F5379B] shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {lanes.map((l) => (
          <div key={l.label} className={`rounded-2xl p-5 ${l.box}`}>
            <div className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${l.lh}`}>{l.label}</div>
            <p className="text-[13px] leading-relaxed text-[#F4F3FA]/85">{l.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
