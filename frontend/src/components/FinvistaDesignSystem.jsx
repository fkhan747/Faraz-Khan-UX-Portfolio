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
    blurb="Primary (filled green), Secondary (green outline), and Tertiary (text-only) across Default, Hover, and Disabled states. Large (h56), Medium (h48), and Small (h36) sizes."
  >
    <WhitePanel>
      <div className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-6">
          <div className="space-y-4">
            <SpecLabel>Primary</SpecLabel>
            <button type="button" className="block w-full rounded-lg bg-[#0E8943] text-white text-base font-bold px-5 py-3" style={RALEWAY}>
              Primary Action
            </button>
            <button type="button" className="block w-full rounded-lg bg-[#0E7E3C] text-white text-base font-bold px-5 py-3" style={RALEWAY}>
              Primary Action
            </button>
            <button type="button" disabled className="block w-full rounded-lg bg-[#DCDCDC] text-[#909090] text-base font-bold px-5 py-3 cursor-not-allowed" style={RALEWAY}>
              Primary Action
            </button>
            <div className="text-[11px] text-[#65656A] grid grid-cols-3 text-center" style={RALEWAY}>
              <span>Default</span><span>Hover</span><span>Disabled</span>
            </div>
          </div>

          <div className="space-y-4">
            <SpecLabel>Secondary</SpecLabel>
            <button type="button" className="block w-full rounded-lg border-2 border-[#0E8943] text-[#0E8943] bg-white text-base font-bold px-5 py-[10px]" style={RALEWAY}>
              Secondary Action
            </button>
            <button type="button" className="block w-full rounded-lg border-2 border-[#0E7E3C] text-[#0E7E3C] bg-[#EFFBF2] text-base font-bold px-5 py-[10px]" style={RALEWAY}>
              Secondary Action
            </button>
            <button type="button" disabled className="block w-full rounded-lg border-2 border-[#DCDCDC] text-[#909090] bg-white text-base font-bold px-5 py-[10px] cursor-not-allowed" style={RALEWAY}>
              Secondary Action
            </button>
            <div className="text-[11px] text-[#65656A] grid grid-cols-3 text-center" style={RALEWAY}>
              <span>Default</span><span>Hover</span><span>Disabled</span>
            </div>
          </div>

          <div className="space-y-4">
            <SpecLabel>Tertiary / Text</SpecLabel>
            <button type="button" className="block w-full rounded-lg text-[#0E8943] bg-white text-base font-bold px-5 py-3" style={RALEWAY}>
              Tertiary Action
            </button>
            <button type="button" className="block w-full rounded-lg text-[#0E7E3C] bg-[#EFFBF2] text-base font-bold px-5 py-3" style={RALEWAY}>
              Tertiary Action
            </button>
            <button type="button" disabled className="block w-full rounded-lg text-[#909090] bg-white text-base font-bold px-5 py-3 cursor-not-allowed" style={RALEWAY}>
              Tertiary Action
            </button>
            <div className="text-[11px] text-[#65656A] grid grid-cols-3 text-center" style={RALEWAY}>
              <span>Default</span><span>Hover</span><span>Disabled</span>
            </div>
          </div>
        </div>

        <Specimen label="Size scale">
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" className="rounded-lg bg-[#0E8943] text-white text-base font-bold px-6 h-14" style={RALEWAY}>Large 56</button>
            <button type="button" className="rounded-lg bg-[#0E8943] text-white text-sm font-bold px-5 h-12" style={RALEWAY}>Medium 48</button>
            <button type="button" className="rounded-lg bg-[#0E8943] text-white text-sm font-bold px-4 h-9" style={RALEWAY}>Small 36</button>
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

const ProgressSection = () => (
  <SubSection
    num="07"
    label="Component"
    title="Progress"
    blurb="A dual-mode progress indicator: a percentage bar for overall progress and a stepped counter for multi-step flows."
  >
    <WhitePanel className="space-y-8">
      <Specimen label="Percentage bar">
        <div style={RALEWAY}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#252729]">Application progress</span>
            <span className="text-sm font-bold text-[#0E8943]" style={FIGTREE}>64%</span>
          </div>
          <div className="h-2.5 rounded-full bg-[#DEF7E5] overflow-hidden">
            <div className="h-full rounded-full bg-[#0E8943]" style={{ width: "64%" }} />
          </div>
        </div>
      </Specimen>

      <Specimen label="Step counter">
        <div className="flex items-center gap-3" style={RALEWAY}>
          <span className="text-sm font-bold text-[#0E8943]" style={FIGTREE}>Step 7 of 11</span>
          <div className="flex-1 h-2 rounded-full bg-[#DEF7E5] overflow-hidden max-w-xs">
            <div className="h-full rounded-full bg-[#0E8943]" style={{ width: `${(7/11)*100}%` }} />
          </div>
        </div>
      </Specimen>
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
    num="08"
    label="Component"
    title="Toasts"
    blurb="Notification toasts for Success, Error, Warning, and Info with a left accent border, icon, message, and dismiss control."
  >
    <WhitePanel className="space-y-3">
      {TOASTS.map((t) => {
        const I = t.icon;
        return (
          <div
            key={t.kind}
            className="flex items-start gap-3 rounded-lg px-4 py-3"
            style={{ ...RALEWAY, backgroundColor: t.bg, borderLeft: `4px solid ${t.border}` }}
            role="status"
          >
            <span style={{ color: t.fg }} className="shrink-0 mt-0.5">
              <I />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-[#252729]">{t.kind}</div>
              <div className="text-[13px] text-[#505054] leading-5">
                Notification message describing what happened.
              </div>
            </div>
            <button type="button" className="shrink-0 text-[#65656A] mt-0.5" aria-label="Dismiss">
              <Icon.close />
            </button>
          </div>
        );
      })}
    </WhitePanel>
  </SubSection>
);

/* ---------- 09 · TEXT FIELDS ---------- */

const FieldShell = ({ label, children, supporting, supportingColor = "#65656A" }) => (
  <div>
    <label className="block text-[14px] font-semibold text-[#252729] mb-1.5" style={RALEWAY}>
      {label}
    </label>
    {children}
    {supporting ? (
      <p className="text-[12px] font-medium mt-1.5 leading-4" style={{ ...RALEWAY, color: supportingColor }}>
        {supporting}
      </p>
    ) : null}
  </div>
);

const TextFieldsSection = () => (
  <SubSection
    num="09"
    label="Component"
    title="Text Fields"
    blurb="Label, input, and helper/error text across Default, Focus, Filled, Error, and Disabled states."
  >
    <WhitePanel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Specimen label="Default">
          <FieldShell label="Field label" supporting="Helper text">
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full rounded-lg border border-[#DCDCDC] bg-white text-base text-[#252729] placeholder-[#909090] px-3 py-2.5 outline-none"
              style={RALEWAY}
            />
          </FieldShell>
        </Specimen>

        <Specimen label="Focus">
          <FieldShell label="Field label" supporting="Helper text">
            <input
              type="text"
              defaultValue="Typing"
              className="w-full rounded-lg border-2 border-[#0E8943] bg-white text-base text-[#252729] px-3 py-2 outline-none"
              style={RALEWAY}
            />
          </FieldShell>
        </Specimen>

        <Specimen label="Filled">
          <FieldShell label="Field label" supporting="Helper text">
            <input
              type="text"
              defaultValue="Field value"
              className="w-full rounded-lg border border-[#65656A] bg-white text-base text-[#252729] px-3 py-2.5 outline-none"
              style={RALEWAY}
            />
          </FieldShell>
        </Specimen>

        <Specimen label="Error">
          <FieldShell label="Field label" supporting="Error message" supportingColor="#F6323E">
            <input
              type="text"
              defaultValue="Invalid value"
              className="w-full rounded-lg border-2 border-[#F6323E] bg-white text-base text-[#252729] px-3 py-2 outline-none"
              style={RALEWAY}
            />
          </FieldShell>
        </Specimen>

        <Specimen label="Disabled">
          <FieldShell label="Field label" supporting="Helper text" supportingColor="#909090">
            <input
              type="text"
              disabled
              placeholder="Placeholder"
              className="w-full rounded-lg border border-[#DCDCDC] bg-[#F7F7F7] text-base text-[#909090] placeholder-[#909090] px-3 py-2.5 outline-none cursor-not-allowed"
              style={RALEWAY}
            />
          </FieldShell>
        </Specimen>
      </div>
    </WhitePanel>
  </SubSection>
);

/* ---------- 10 · FILE UPLOAD ---------- */

const FileUploadSection = () => (
  <SubSection
    num="10"
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
          <button type="button" className="mt-4 rounded-lg border-2 border-[#0E8943] text-[#0E8943] text-sm font-bold px-5 py-2" style={RALEWAY}>
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
    num="11"
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
            <span className="inline-block rounded-full bg-[#FFF9EF] text-[#F98D29] text-[11px] font-bold px-2.5 py-1">Escalated</span>
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
              <button type="button" className="w-full rounded-lg bg-[#0E8943] text-white text-sm font-bold py-3" style={RALEWAY}>Continue</button>
              <button type="button" className="w-full rounded-lg border-2 border-[#0E8943] text-[#0E8943] text-sm font-bold py-2.5" style={RALEWAY}>Save for later</button>
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
    num="12"
    label="Component"
    title="Dialog"
    blurb="A centered modal dialog with a title, body, and paired action buttons."
  >
    <WhitePanel>
      <Specimen label="Confirmation dialog">
        <div className="rounded-2xl border border-[#DCDCDC] bg-white p-6 max-w-sm shadow-lg" style={RALEWAY}>
          <div className="text-lg font-bold text-[#252729] mb-2">Confirm submission</div>
          <p className="text-sm text-[#505054] leading-relaxed mb-6">
            Are you sure you want to submit this application? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button type="button" className="flex-1 rounded-lg border-2 border-[#DCDCDC] text-[#65656A] text-sm font-bold py-2.5" style={RALEWAY}>Cancel</button>
            <button type="button" className="flex-1 rounded-lg bg-[#0E8943] text-white text-sm font-bold py-2.5" style={RALEWAY}>Submit</button>
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
      <TabsSection />
      <CheckboxSection />
      <ProgressSection />
      <ToastsSection />
      <TextFieldsSection />
      <FileUploadSection />
      <CardsSection />
      <DialogSection />
    </div>
  );
}
