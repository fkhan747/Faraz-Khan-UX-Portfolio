export default function MeridianIA() {
  const sources = [
    { name: "Slate CRM", sub: "ug + graduate admissions" },
    { name: "Student Information System", sub: "enrolled-student records" },
    { name: "Power BI semantic layer", sub: "shared metric definitions" },
  ];

  const modules = [
    {
      name: "Undergraduate",
      color: "#4896CF",
      views: ["Summary", "Geo", "Funnel, yield, melt", "Applicant segments"],
    },
    {
      name: "Graduate",
      color: "#0E9C92",
      views: ["Summary", "Geo, source markets", "Trends", "Definitions"],
    },
    {
      name: "Research",
      color: "#E7842E",
      views: ["Summary", "Proposals", "Awards", "Expenditure, faculty"],
    },
    {
      name: "Human Resources",
      color: "#6B3FA0",
      views: [
        "Summary",
        "Headcount trends",
        "Turnover trends",
        "Workforce composition",
      ],
    },
  ];

  const Connector = () => (
    <div className="flex flex-col items-center" aria-hidden="true">
      <div
        className="w-[2px] h-6 rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #F5379B, rgba(245,55,155,0.25))",
        }}
      />
    </div>
  );

  return (
    <div className="mt-2 flex flex-col items-center">
      <p className="self-start font-mono text-[10px] uppercase tracking-widest text-[#A29CB4] mb-3">
        Data sources
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
        {sources.map((s) => (
          <div
            key={s.name}
            className="dark-card rounded-2xl px-4 py-3 text-center"
          >
            <p className="font-display text-sm font-bold text-[#F4F3FA]">
              {s.name}
            </p>
            <p className="text-[11px] text-[#A29CB4] mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <Connector />

      <div
        className="rounded-2xl px-7 py-4 text-center w-full max-w-md"
        style={{
          background: "linear-gradient(180deg,#A32638,#8C1E2E)",
          boxShadow: "0 16px 40px -20px rgba(163,38,56,0.7)",
        }}
      >
        <p className="font-display text-lg font-black text-white">
          Meridian Institute Analytics
        </p>
        <p className="text-[11.5px] text-white/80 mt-0.5">
          one platform, one shared vocabulary
        </p>
      </div>

      <Connector />

      <div className="dark-card rounded-2xl px-6 py-3 text-center">
        <p className="font-display text-sm font-bold text-[#F4F3FA]">
          Overview cockpit
        </p>
        <p className="text-[11px] text-[#A29CB4] mt-0.5">
          all four departments at a glance
        </p>
      </div>

      <Connector />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full">
        {modules.map((m) => (
          <div
            key={m.name}
            className="dark-card rounded-2xl p-4 border-t-4"
            style={{ borderTopColor: m.color }}
          >
            <h3 className="font-display text-sm font-bold text-[#F4F3FA] mb-3">
              {m.name}
            </h3>
            <ul className="flex flex-col gap-1.5">
              {m.views.map((v, i) => (
                <li
                  key={v}
                  className={`text-xs pl-3 relative ${
                    i === 0 ? "text-[#EDEBF5]" : "text-[#A29CB4]"
                  }`}
                >
                  <span
                    className="absolute left-0 top-[7px] w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#5B9BFF" }}
                    aria-hidden="true"
                  />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-[12.5px] text-[#A29CB4] mt-5 max-w-2xl">
        Global filters (year, term, <b className="text-[#F5379B]">level</b>,
        decision plan, cohort) carry across every screen, so a number always
        means the same thing.
      </p>
    </div>
  );
}
