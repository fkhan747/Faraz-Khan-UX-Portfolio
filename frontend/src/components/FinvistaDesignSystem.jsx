import React from "react";

const RALEWAY = { fontFamily: "Raleway, sans-serif" };
const FIGTREE = { fontFamily: "Figtree, sans-serif" };

const Eyebrow = ({ children }) => (
  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5379B]">
    {children}
  </span>
);

const SubSection = ({ num, label, title, blurb, children }) => (
  <section className="space-y-6">
    <div className="flex items-center gap-4">
      <Eyebrow>
        {num} · {label}
      </Eyebrow>
      <span className="flex-1 h-px bg-white/10" />
    </div>
    <div className="max-w-3xl space-y-3">
      <h3 className="font-display text-2xl md:text-3xl font-black text-[#F4F3FA]">
        {title}
      </h3>
      {blurb ? (
        <p className="text-sm md:text-base leading-relaxed text-[#A29CB4]">
          {blurb}
        </p>
      ) : null}
    </div>
    {children}
  </section>
);

const SpecLabel = ({ children }) => (
  <p
    className="text-[10px] uppercase tracking-[0.16em] font-medium text-[#65656A] mb-2"
    style={RALEWAY}
  >
    {children}
  </p>
);

const WhitePanel = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white p-6 md:p-8 ${className}`} style={RALEWAY}>
    {children}
  </div>
);

const Specimen = ({ label, children, className = "" }) => (
  <div className={className}>
    <SpecLabel>{label}</SpecLabel>
    <div>{children}</div>
  </div>
);

const Icon = {
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16" {...p}>
      <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16" {...p}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  success: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v6M12 16.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  warning: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...p}>
      <path d="M12 4 2.8 20h18.4L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 10v4M12 17v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  info: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11v6M12 7.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  upload: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...p}>
      <path d="M12 16V4m0 0-4 4m4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  file: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
};

/* ---------- 01 · COLOR ---------- */

const Swatch = ({ name, hex, dark }) => (
  <div className="rounded-xl overflow-hidden dark-card">
    <div
      className="h-20 w-full"
      style={{ backgroundColor: hex, boxShadow: dark ? "inset 0 0 0 1px rgba(255,255,255,0.12)" : undefined }}
    />
    <div className="p-3">
      <div className="text-sm font-semibold text-[#F4F3FA] leading-tight">{name}</div>
      <div className="font-mono text-[11px] text-[#A29CB4] mt-1">{hex}</div>
    </div>
  </div>
);

const RampSwatch = ({ name, ramp }) => (
  <div className="rounded-xl overflow-hidden dark-card">
    <div className="flex h-20 w-full">
      {ramp.map((hex) => (
        <div key={hex} className="flex-1" style={{ backgroundColor: hex }} />
      ))}
    </div>
    <div className="p-3">
      <div className="text-sm font-semibold text-[#F4F3FA] leading-tight">{name}</div>
      <div className="font-mono text-[10px] text-[#A29CB4] mt-1 flex flex-wrap gap-x-2">
        {ramp.map((hex) => (
          <span key={hex}>{hex}</span>
        ))}
      </div>
    </div>
  </div>
);

const ColorSection = () => (
  <SubSection
    num="01"
    label="Color"
    title="Color"
    blurb="A green primary with a ten-step tint ramp, a secondary blue family, semantic status colors, and a neutral gray scale. Every value is a hard-coded design token."
  >
    <div className="space-y-4">
      <SpecLabel>Primary · green + tint ramp</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Swatch name="Brand" hex="#0E8943" />
        <Swatch name="Dark" hex="#0E7E3C" />
        <Swatch name="Light 1" hex="#20AD5B" />
        <Swatch name="Light 2" hex="#96DDB4" />
        <Swatch name="Light 4" hex="#DEF7E5" />
        <Swatch name="Light 7" hex="#F5FDF9" />
      </div>
    </div>

    <div className="space-y-4">
      <SpecLabel>Secondary · blue</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <RampSwatch name="Blue" ramp={["#114984", "#174176", "#2F5FAC", "#BDCCD9", "#EAF3FA"]} />
      </div>
    </div>

    <div className="space-y-4">
      <SpecLabel>Status</SpecLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { name: "Success", hex: "#0E8943", tint: "#EFFBF2" },
          { name: "Info", hex: "#00A0DF", tint: "#E0F5FC" },
          { name: "Warning", hex: "#F98D29", tint: "#FFF9EF" },
          { name: "Error", hex: "#F6323E", tint: "#FCEEEF" },
        ].map((s) => (
          <div key={s.name} className="rounded-xl overflow-hidden dark-card">
            <div className="flex h-20">
              <div className="w-1/2" style={{ backgroundColor: s.hex }} />
              <div className="w-1/2" style={{ backgroundColor: s.tint }} />
            </div>
            <div className="p-3">
              <div className="text-sm font-semibold text-[#F4F3FA] leading-tight">{s.name}</div>
              <div className="font-mono text-[11px] text-[#A29CB4] mt-1">
                {s.hex} · {s.tint}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <SpecLabel>Neutrals</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Swatch name="Black" hex="#252729" />
        <Swatch name="Dark" hex="#151515" />
        <Swatch name="Gray 500" hex="#65656A" />
        <Swatch name="Gray 300" hex="#909090" />
        <Swatch name="Gray 100" hex="#DCDCDC" />
        <Swatch name="Off White" hex="#F7F7F7" dark />
      </div>
    </div>
  </SubSection>
);

/* ---------- 02 · TYPOGRAPHY ---------- */

const TYPE_SPECS = [
  { name: "H1", spec: "ExtraBold · 38px · 150%", sample: "The quick brown fox", style: { fontSize: "38px", lineHeight: "150%", fontWeight: 800 } },
  { name: "H2", spec: "SemiBold · 28px · 150%", sample: "Jumps over the lazy dog", style: { fontSize: "28px", lineHeight: "150%", fontWeight: 600 } },
  { name: "H3", spec: "Medium · 28px · 150%", sample: "Jumps over the lazy dog", style: { fontSize: "28px", lineHeight: "150%", fontWeight: 500 } },
  { name: "H4", spec: "SemiBold · 24px · 150%", sample: "Pack my box with five dozen", style: { fontSize: "24px", lineHeight: "150%", fontWeight: 600 } },
  { name: "Title 1", spec: "SemiBold · 20px · 150%", sample: "Title level one", style: { fontSize: "20px", lineHeight: "150%", fontWeight: 600 } },
  { name: "Title 2", spec: "Bold · 18px · 150%", sample: "Title level two", style: { fontSize: "18px", lineHeight: "150%", fontWeight: 700 } },
  { name: "Title 3", spec: "Bold · 16px · 150%", sample: "Title level three", style: { fontSize: "16px", lineHeight: "150%", fontWeight: 700 } },
  { name: "Body 1", spec: "Medium · 20px · 150%", sample: "The five boxing wizards jump quickly.", style: { fontSize: "20px", lineHeight: "150%", fontWeight: 500 } },
  { name: "Body 2", spec: "Regular · 16px · 150%", sample: "The five boxing wizards jump quickly.", style: { fontSize: "16px", lineHeight: "150%", fontWeight: 400 } },
  { name: "Body 3", spec: "Medium · 14px · 150%", sample: "The five boxing wizards jump quickly.", style: { fontSize: "14px", lineHeight: "150%", fontWeight: 500 } },
  { name: "Body 5", spec: "Medium · 12px · 150%", sample: "Supporting text", style: { fontSize: "12px", lineHeight: "150%", fontWeight: 500 } },
  { name: "Body 6", spec: "Medium · 10px · 150%", sample: "Caption text", style: { fontSize: "10px", lineHeight: "150%", fontWeight: 500 } },
];

const NUMERAL_SPEC = { name: "Numerals (Figtree)", spec: "SemiBold · 20px · 150%", sample: "0 1 2 3 4 5 6 7 8 9", style: { fontSize: "20px", lineHeight: "150%", fontWeight: 600 } };

const TypographySection = () => (
  <SubSection
    num="02"
    label="Typography"
    title="Typography"
    blurb="Raleway for all text, Figtree for numerals. Specimens render in the product's Black (#252729) on white, with exact weights and line heights from the system."
  >
    <WhitePanel className="divide-y divide-[#DCDCDC]">
      {TYPE_SPECS.map((t) => (
        <div key={t.name} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 first:pt-0 last:pb-0 items-baseline">
          <div className="md:col-span-4">
            <div className="text-sm font-bold text-[#252729]">{t.name}</div>
            <div className="text-[12px] text-[#65656A] mt-0.5">{t.spec}</div>
          </div>
          <div className="md:col-span-8 text-[#252729]" style={{ ...RALEWAY, ...t.style }}>
            {t.sample}
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 items-baseline">
        <div className="md:col-span-4">
          <div className="text-sm font-bold text-[#252729]">{NUMERAL_SPEC.name}</div>
          <div className="text-[12px] text-[#65656A] mt-0.5">{NUMERAL_SPEC.spec}</div>
        </div>
        <div className="md:col-span-8 text-[#252729]" style={{ ...FIGTREE, ...NUMERAL_SPEC.style }}>
          {NUMERAL_SPEC.sample}
        </div>
      </div>
    </WhitePanel>
  </SubSection>
);

/* ---------- 03 · SPACING ---------- */

const SPACING = [8, 16, 24, 32, 48, 64, 80];

const SpacingSection = () => (
  <SubSection
    num="03"
    label="Spacing"
    title="Spacing"
    blurb="A seven-step scale from 8 to 80 px. Each white square scales to its token value, sitting on the brand green surface."
  >
    <div className="rounded-2xl bg-[#0E8943] p-6 md:p-8">
      <div className="flex flex-wrap items-end gap-6 md:gap-8">
        {SPACING.map((px) => (
          <div key={px} className="flex flex-col items-center gap-3">
            <div
              className="bg-white rounded-[3px]"
              style={{ width: `${px}px`, height: `${px}px` }}
            />
            <div className="text-center" style={RALEWAY}>
              <div className="text-sm font-bold text-white leading-none">{px}</div>
              <div className="text-[10px] text-white/55 mt-1">px</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubSection>
);

/* ---------- 04 · BUTTONS ---------- */

const ButtonsSection = () => (
  <SubSection
    num="04"
    label="Component"
    title="Buttons"
    blurb="Pill-shaped buttons across Primary (filled green), Secondary (green outline), Secondary Alt (blue filled), and Tertiary (green outline text). Default, Hover, and Disabled states."
  >
    <WhitePanel>
      <div className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          <div className="space-y-4">
            <SpecLabel>Primary</SpecLabel>
            <button type="button" className="block w-full rounded-full bg-[#0E8943] text-white text-sm font-bold px-5 py-2.5" style={RALEWAY}>
              Primary Normal
            </button>
            <button type="button" className="block w-full rounded-full bg-[#0E7E3C] text-white text-sm font-bold px-5 py-2.5" style={RALEWAY}>
              Primary Hover
            </button>
            <button type="button" disabled className="block w-full rounded-full bg-[#DCDCDC] text-[#909090] text-sm font-bold px-5 py-2.5 cursor-not-allowed" style={RALEWAY}>
              Primary Disabled
            </button>
          </div>

          <div className="space-y-4">
            <SpecLabel>Secondary</SpecLabel>
            <button type="button" className="block w-full rounded-full border-2 border-[#0E8943] text-[#0E8943] bg-white text-sm font-bold px-5 py-2" style={RALEWAY}>
              Secondary Normal
            </button>
            <button type="button" className="block w-full rounded-full border-2 border-[#0E7E3C] text-[#0E7E3C] bg-[#EFFBF2] text-sm font-bold px-5 py-2" style={RALEWAY}>
              Secondary Hover
            </button>
            <button type="button" disabled className="block w-full rounded-full border-2 border-[#DCDCDC] text-[#909090] bg-white text-sm font-bold px-5 py-2 cursor-not-allowed" style={RALEWAY}>
              Secondary Disabled
            </button>
          </div>

          <div className="space-y-4">
            <SpecLabel>Secondary Alt</SpecLabel>
            <button type="button" className="block w-full rounded-full bg-[#114984] text-white text-sm font-bold px-5 py-2.5" style={RALEWAY}>
              Secondary Normal
            </button>
            <button type="button" className="block w-full rounded-full bg-[#174176] text-white text-sm font-bold px-5 py-2.5" style={RALEWAY}>
              Secondary Hover
            </button>
            <button type="button" disabled className="block w-full rounded-full bg-[#DCDCDC] text-[#909090] text-sm font-bold px-5 py-2.5 cursor-not-allowed" style={RALEWAY}>
              Secondary Disabled
            </button>
          </div>

          <div className="space-y-4">
            <SpecLabel>Tertiary</SpecLabel>
            <button type="button" className="block w-full rounded-full border border-[#0E8943] text-[#0E8943] bg-white text-sm font-bold px-5 py-2.5" style={RALEWAY}>
              Tertiary Normal
            </button>
            <button type="button" className="block w-full rounded-full border border-[#0E7E3C] text-[#0E7E3C] bg-[#EFFBF2] text-sm font-bold px-5 py-2.5" style={RALEWAY}>
              Tertiary Hover
            </button>
            <button type="button" disabled className="block w-full rounded-full border border-[#DCDCDC] text-[#909090] bg-white text-sm font-bold px-5 py-2.5 cursor-not-allowed" style={RALEWAY}>
              Tertiary Disabled
            </button>
          </div>
        </div>

        <Specimen label="Size scale">
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" className="rounded-full bg-[#0E8943] text-white text-base font-bold px-8 h-14" style={RALEWAY}>Large 56</button>
            <button type="button" className="rounded-full bg-[#0E8943] text-white text-sm font-bold px-6 h-12" style={RALEWAY}>Medium 48</button>
            <button type="button" className="rounded-full bg-[#0E8943] text-white text-sm font-bold px-5 h-9" style={RALEWAY}>Small 36</button>
          </div>
        </Specimen>
      </div>
    </WhitePanel>
  </SubSection>
);

/* ---------- 05 · TABS ---------- */

const TabsSection = () => (
  <SubSection
    num="05"
    label="Component"
    title="Tabs"
    blurb="Bottom-border tabs with a selected state and optional count badge. Bold 16px when selected, Medium 16px when idle."
  >
    <WhitePanel>
      <Specimen label="Tabs with badge">
        <div className="border-b border-[#DCDCDC] flex gap-6" style={RALEWAY}>
          <button type="button" className="text-base font-bold text-[#0E8943] pb-3 -mb-px border-b-2 border-[#0E8943] flex items-center gap-2">
            Tab One
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 rounded-full bg-[#0E8943] text-white text-[11px] font-bold px-1.5">4</span>
          </button>
          <button type="button" className="text-base font-medium text-[#65656A] pb-3 flex items-center gap-2">
            Tab Two
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 rounded-full bg-[#DCDCDC] text-[#65656A] text-[11px] font-bold px-1.5">12</span>
          </button>
          <button type="button" className="text-base font-medium text-[#65656A] pb-3">
            Tab Three
          </button>
        </div>
        <div className="text-[11px] text-[#65656A] mt-2 flex gap-10" style={RALEWAY}>
          <span>Selected</span>
          <span>Default + badge</span>
          <span>Default</span>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 06 · CHECKBOXES ---------- */

const CheckBox = ({ checked, disabled }) => (
  <span
    className={`inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] ${
      disabled
        ? "border border-[#DCDCDC] bg-[#F7F7F7]"
        : checked
        ? "bg-[#0E8943]"
        : "border-2 border-[#65656A] bg-white"
    }`}
  >
    {checked ? <span className="text-white"><Icon.check /></span> : null}
  </span>
);

const CheckboxSection = () => (
  <SubSection
    num="06"
    label="Component"
    title="Checkboxes"
    blurb="A labeled checkbox across unchecked, checked, and disabled states."
  >
    <WhitePanel>
      <Specimen label="Checkbox with label">
        <div className="space-y-3" style={RALEWAY}>
          <label className="flex items-center gap-2.5 text-sm font-medium text-[#252729]">
            <CheckBox checked={false} /> Option label
          </label>
          <label className="flex items-center gap-2.5 text-sm font-medium text-[#252729]">
            <CheckBox checked /> Option label
          </label>
          <label className="flex items-center gap-2.5 text-sm font-medium text-[#909090] cursor-not-allowed">
            <CheckBox disabled /> Option label
          </label>
          <div className="text-[11px] text-[#65656A]">Unchecked · Checked · Disabled</div>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 07 · PROGRESS ---------- */

const PROGRESS_ROWS = [
  { label: "Great Start", pct: 18, step: 2 },
  { label: "Nice Progress", pct: 36, step: 4 },
  { label: "Halfway There", pct: 54, step: 6 },
  { label: "Nearly Finished", pct: 90, step: 10 },
];

const ProgressSection = () => (
  <SubSection
    num="09"
    label="Component"
    title="Progress"
    blurb="A combined progress indicator showing a motivational label, a percentage bar, a completion percentage, and a step counter badge."
  >
    <WhitePanel className="space-y-5">
      {PROGRESS_ROWS.map((r) => (
        <div key={r.step} className="flex items-center gap-4" style={RALEWAY}>
          <span className="text-sm font-semibold text-[#252729] w-32 shrink-0">{r.label}</span>
          <div className="flex-1 h-2 rounded-full bg-[#DEF7E5] overflow-hidden">
            <div className="h-full rounded-full bg-[#0E8943]" style={{ width: `${r.pct}%` }} />
          </div>
          <span className="text-xs font-bold text-[#0E8943] shrink-0" style={FIGTREE}>{r.pct}% Complete</span>
          <span className="inline-flex items-center gap-1 rounded bg-[#0E8943] text-white text-[11px] font-bold px-2 py-0.5 shrink-0" style={FIGTREE}>
            Step {r.step} of 11 <span className="text-[9px]">&#9660;</span>
          </span>
        </div>
      ))}
    </WhitePanel>
  </SubSection>
);

/* ---------- 08 · TOASTS ---------- */

const TOASTS = [
  { kind: "Success", icon: Icon.success, fg: "#0E8943", bg: "#EFFBF2", border: "#0E8943" },
  { kind: "Error", icon: Icon.error, fg: "#F6323E", bg: "#FCEEEF", border: "#F6323E" },
  { kind: "Warning", icon: Icon.warning, fg: "#F98D29", bg: "#FFF9EF", border: "#F98D29" },
  { kind: "Info", icon: Icon.info, fg: "#00A0DF", bg: "#E0F5FC", border: "#00A0DF" },
];

const ToastsSection = () => (
  <SubSection
    num="07"
    label="Component"
    title="Toasts"
    blurb="Notification toasts for Success, Error, Warning, and Info with a left accent border, icon, message, and dismiss control."
  >
    <WhitePanel className="space-y-3 max-w-md">
      {TOASTS.map((t) => {
        const I = t.icon;
        return (
          <div
            key={t.kind}
            className="flex items-center gap-3 rounded-lg px-4 py-3"
            style={{ ...RALEWAY, backgroundColor: t.bg, borderLeft: `4px solid ${t.border}` }}
            role="status"
          >
            <span style={{ color: t.fg }} className="shrink-0">
              <I />
            </span>
            <span className="flex-1 text-sm font-bold" style={{ color: t.fg }}>{t.kind}</span>
            <button type="button" className="shrink-0 text-[#252729]" aria-label="Dismiss">
              <Icon.close />
            </button>
          </div>
        );
      })}
    </WhitePanel>
  </SubSection>
);

/* ---------- 09 · TEXT FIELDS ---------- */

/* FinVista fields are underline / bottom-border style (label on top, value,
   single bottom rule) — matching the live login + form screens. */
const BORDER_BY_STATE = {
  default: "border-b border-[#DCDCDC]",
  focus: "border-b-2 border-[#0E8943]",
  filled: "border-b border-[#65656A]",
  error: "border-b-2 border-[#F6323E]",
  disabled: "border-b border-[#E6E6E6]",
};

const UnderlineField = ({ label, value, placeholder, required, state = "default", supporting, supportingColor = "#65656A" }) => {
  const valueColor = state === "disabled" ? "#B2B0AC" : value ? "#252729" : "#909090";
  return (
    <div>
      <label className="block text-[12px] font-medium text-[#65656A] mb-2" style={RALEWAY}>
        {label}
        {required ? <span className="text-[#F6323E]"> *</span> : null}
      </label>
      <div className={`pb-2 ${BORDER_BY_STATE[state]}`}>
        <span className="text-base font-medium" style={{ ...RALEWAY, color: valueColor }}>
          {value || placeholder}
        </span>
      </div>
      {supporting ? (
        <p className="text-[12px] font-medium mt-2 leading-4" style={{ ...RALEWAY, color: supportingColor }}>
          {supporting}
        </p>
      ) : null}
    </div>
  );
};

const TextFieldsSection = () => (
  <SubSection
    num="10"
    label="Component"
    title="Text Fields"
    blurb="Underline fields with a label on top and a single bottom rule, across Default, Focus, Filled, Error, and Disabled states."
  >
    <WhitePanel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        <Specimen label="Default">
          <UnderlineField label="Field label" required placeholder="Placeholder" state="default" supporting="Helper text" />
        </Specimen>
        <Specimen label="Focus">
          <UnderlineField label="Field label" required value="Typing" state="focus" supporting="Helper text" />
        </Specimen>
        <Specimen label="Filled">
          <UnderlineField label="Field label" value="Field value" state="filled" supporting="Helper text" />
        </Specimen>
        <Specimen label="Error">
          <UnderlineField label="Field label" value="Invalid value" state="error" supporting="Error message" supportingColor="#F6323E" />
        </Specimen>
        <Specimen label="Disabled">
          <UnderlineField label="Field label" placeholder="Placeholder" state="disabled" supporting="Helper text" supportingColor="#B2B0AC" />
        </Specimen>
      </div>
    </WhitePanel>
  </SubSection>
);

/* ---------- 10 · FILE UPLOAD ---------- */

const FileUploadSection = () => (
  <SubSection
    num="11"
    label="Component"
    title="File Upload"
    blurb="A drop-zone uploader and a file-row with status, size, and remove action."
  >
    <WhitePanel className="space-y-6">
      <Specimen label="Drop zone">
        <div className="border-2 border-dashed border-[#DCDCDC] rounded-xl px-6 py-10 text-center" style={RALEWAY}>
          <div className="flex justify-center mb-3 text-[#0E8943]">
            <Icon.upload />
          </div>
          <p className="text-sm font-semibold text-[#252729]">Drag and drop files here</p>
          <p className="text-[12px] text-[#65656A] mt-1">PDF, JPG, PNG up to 10 MB</p>
          <button type="button" className="mt-4 rounded-full border-2 border-[#0E8943] text-[#0E8943] text-sm font-bold px-5 py-2" style={RALEWAY}>
            Browse Files
          </button>
        </div>
      </Specimen>

      <Specimen label="Uploaded file row">
        <div className="flex items-center gap-3 rounded-lg border border-[#DCDCDC] px-4 py-3" style={RALEWAY}>
          <span className="text-[#0E8943]"><Icon.file /></span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-[#252729] truncate">document-scan.pdf</div>
            <div className="text-[12px] text-[#65656A]">2.4 MB · Uploaded</div>
          </div>
          <span className="text-[#0E8943]"><Icon.success /></span>
          <button type="button" className="text-[#65656A]" aria-label="Remove">
            <Icon.close />
          </button>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 11 · CARDS ---------- */

const CardsSection = () => (
  <SubSection
    num="12"
    label="Component"
    title="Cards & Bottom Sheet"
    blurb="A lead card with status badge, a value-added-service card, and a bottom sheet with a pull handle."
  >
    <WhitePanel className="space-y-8">
      <Specimen label="Lead card">
        <div className="rounded-xl border border-[#DCDCDC] p-5 max-w-sm" style={RALEWAY}>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-base font-bold text-[#252729]">Rajesh Kumar</div>
              <div className="text-[13px] text-[#65656A] mt-0.5">Personal Loan · INR 5,00,000</div>
            </div>
            <span className="inline-block rounded-full border border-[#F6323E] text-[#F6323E] text-[11px] font-bold px-2.5 py-1">Escalated</span>
          </div>
          <div className="mt-4 flex items-center gap-4 text-[12px] text-[#65656A]">
            <span>ID: LN-00482</span>
            <span>·</span>
            <span>Applied 3 days ago</span>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-[#DEF7E5] overflow-hidden">
            <div className="h-full rounded-full bg-[#0E8943]" style={{ width: "45%" }} />
          </div>
          <div className="text-[11px] text-[#65656A] mt-1" style={FIGTREE}>Step 5 of 11</div>
        </div>
      </Specimen>

      <Specimen label="Bottom sheet">
        <div className="rounded-t-2xl border border-[#DCDCDC] bg-white max-w-sm overflow-hidden" style={RALEWAY}>
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-10 h-1 rounded-full bg-[#DCDCDC]" />
          </div>
          <div className="px-5 pb-5">
            <div className="text-base font-bold text-[#252729] mb-1">Select an option</div>
            <p className="text-[13px] text-[#65656A] mb-4">Choose how you would like to proceed with this application.</p>
            <div className="space-y-2">
              <button type="button" className="w-full rounded-full bg-[#0E8943] text-white text-sm font-bold py-3" style={RALEWAY}>Continue</button>
              <button type="button" className="w-full rounded-full border-2 border-[#0E8943] text-[#0E8943] text-sm font-bold py-2.5" style={RALEWAY}>Save for later</button>
            </div>
          </div>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 12 · DIALOG ---------- */

const DialogSection = () => (
  <SubSection
    num="08"
    label="Component"
    title="Dialog"
    blurb="A centered confirmation dialog: title, body, an accept-terms checkbox, and two clear actions."
  >
    <WhitePanel>
      <Specimen label="Confirmation dialog">
        <div className="rounded-2xl border border-[#DCDCDC] bg-white p-6 max-w-sm shadow-lg mx-auto" style={RALEWAY}>
          <div className="text-lg font-bold text-[#252729] mb-2">Confirm submission</div>
          <p className="text-sm text-[#505054] leading-relaxed mb-5">
            Please review your details before submitting. You can edit them later from your profile.
          </p>
          <label className="flex items-start gap-2.5 text-[13px] text-[#252729] leading-snug mb-6">
            <span className="mt-0.5"><CheckBox checked /></span>
            <span>
              I accept the <span className="text-[#0E8943] font-semibold">Privacy Policy</span> and{" "}
              <span className="text-[#0E8943] font-semibold">Terms &amp; Conditions</span>.
            </span>
          </label>
          <div className="flex gap-3">
            <button type="button" className="flex-1 rounded-full border-2 border-[#0E8943] text-[#0E8943] text-sm font-bold py-2.5">Cancel</button>
            <button type="button" className="flex-1 rounded-full bg-[#0E8943] text-white text-sm font-bold py-2.5">Confirm</button>
          </div>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- root ---------- */

export default function FinvistaDesignSystem() {
  return (
    <div className="space-y-16 md:space-y-20" style={RALEWAY}>
      <ColorSection />
      <TypographySection />
      <SpacingSection />
      <ButtonsSection />
      <div className="grid lg:grid-cols-2 gap-12 md:gap-14 items-start">
        <TabsSection />
        <CheckboxSection />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 md:gap-14 items-start">
        <ToastsSection />
        <DialogSection />
      </div>
      <ProgressSection />
      <TextFieldsSection />
      <div className="grid lg:grid-cols-2 gap-12 md:gap-14 items-start">
        <FileUploadSection />
        <CardsSection />
      </div>
    </div>
  );
}
