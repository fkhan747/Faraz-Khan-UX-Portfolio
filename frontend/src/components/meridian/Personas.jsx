import { Building2, LineChart, GraduationCap, FlaskConical, Users, Database } from "lucide-react";

export default function MeridianPersonas() {
  const personas = [
    {
      role: "Leadership & provost",
      altitude: "Reads at the highest altitude",
      question: "Where is the Institute heading, and what should I worry about?",
      needs: [
        "One overview across all four domains",
        "Multi-year trends, never a single snapshot",
        "Forecasts flagged as forecasts",
      ],
      Icon: Building2,
      chip: "#004380",
    },
    {
      role: "Enrollment management",
      altitude: "The most demanding audience",
      question: "Is the funnel healthy, and where are we losing people?",
      needs: [
        "Applied to enrolled, plus summer melt",
        "Yield by segment and source market",
        "Deposit tracking through the summer",
      ],
      Icon: LineChart,
      chip: "#4896CF",
    },
    {
      role: "Deans & program directors",
      altitude: "Reads their own house",
      question: "Is my applicant pool growing, and does demand match my seats?",
      needs: [
        "Program-level demand and capacity",
        "Clean slices by school",
        "A healthy total can hide a falling program",
      ],
      Icon: GraduationCap,
      chip: "#E7842E",
    },
    {
      role: "Research office",
      altitude: "A different rhythm",
      question: "Is the funding pipeline strong enough to carry us?",
      needs: [
        "Proposals, awards, expenditures over a decade",
        "Output: publications, patents, H-index",
        "Tenure versus non-tenure spend",
      ],
      Icon: FlaskConical,
      chip: "#21BA45",
    },
    {
      role: "HR leaders",
      altitude: "Owns sensitive data",
      question: "Is headcount healthy, and is the composition where we want it?",
      needs: [
        "Headcount, turnover, academic mix",
        "Gender and race/ethnicity, handled with care",
        "Hiring and turnover trends",
      ],
      Icon: Users,
      chip: "#6B3FA0",
    },
    {
      role: "IR analysts",
      altitude: "Designed for first, on purpose",
      question: "Can I trust this number, and can I defend it?",
      needs: [
        "Exact definitions and visible lineage",
        "Maps to the Common Data Set and IPEDS",
        "Win the data owners, everyone inherits the trust",
      ],
      Icon: Database,
      chip: "#363D45",
    },
  ];

  return (
    <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {personas.map((p) => {
        const Icon = p.Icon;
        return (
          <div key={p.role} className="dark-card rounded-3xl p-7">
            <div
              className="w-12 h-12 rounded-xl grid place-items-center mb-5"
              style={{ backgroundColor: p.chip }}
            >
              <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-lg font-black leading-tight text-[#F4F3FA]">
              {p.role}
            </h3>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#A29CB4]">
              {p.altitude}
            </p>
            <p className="my-4 border-l-2 border-[#F5379B] pl-4 italic text-[#F4F3FA] leading-relaxed">
              &ldquo;{p.question}&rdquo;
            </p>
            <ul className="space-y-2">
              {p.needs.map((need) => (
                <li
                  key={need}
                  className="flex gap-2 text-[13px] leading-snug text-[#A29CB4]"
                >
                  <span
                    className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#5B9BFF" }}
                  />
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
