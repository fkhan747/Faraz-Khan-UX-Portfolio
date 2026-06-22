import React from "react";

/**
 * AuroraDesignSystem
 * A dark, self-contained design-system SHOWCASE documenting a generic
 * B2B SaaS marketing-platform UI kit. Renders inside an existing dark
 * portfolio case study (no outer page chrome). The product itself is a
 * LIGHT app, so every real component renders on white sub-panels inside
 * the dark sections.
 *
 * Generic placeholder content only — no client/product names.
 */

const ROBOTO = { fontFamily: "Roboto, sans-serif" };

/* ---------- small shared building blocks ---------- */

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

/* A captioned label sitting above a rendered specimen on a white panel. */
const SpecLabel = ({ children }) => (
  <p
    className="text-[10px] uppercase tracking-[0.16em] font-medium text-[#637285] mb-2"
    style={ROBOTO}
  >
    {children}
  </p>
);

/* White product panel — the "canvas" the real components live on. */
const WhitePanel = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white p-6 md:p-8 ${className}`} style={ROBOTO}>
    {children}
  </div>
);

/* ---------- inline SVG icons (product look) ---------- */

const Icon = {
  search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...p}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
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
  chevronLeft: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...p}>
      <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chevronRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...p}>
      <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
};

/* ---------- 1 · COLOR ---------- */

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

/* A named color shown with a horizontal tint ramp beneath it. */
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
    blurb="A focused palette: an evergreen brand mark, a teal primary with a five-step tint ramp, five expressive secondaries, a neutral gray family, and semantic status colors. Every value is a hard-coded token."
  >
    {/* Brand */}
    <div className="space-y-4">
      <SpecLabel>Brand</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Swatch name="Evergreen" hex="#1A4C49" />
        <Swatch name="Rich Black" hex="#292929" />
        <Swatch name="White" hex="#FFFFFF" dark />
      </div>
    </div>

    {/* Primary + ramp */}
    <div className="space-y-4">
      <SpecLabel>Primary · Teal + tint ramp</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Swatch name="Teal" hex="#2B8679" />
        <Swatch name="Teal 100" hex="#D5EAE6" />
        <Swatch name="Teal 300" hex="#8FCBC2" />
        <Swatch name="Teal 500" hex="#4FA99B" />
        <Swatch name="Teal 700" hex="#2B8679" />
        <Swatch name="Teal 900" hex="#1F6359" />
      </div>
    </div>

    {/* Secondary, each with a ramp */}
    <div className="space-y-4">
      <SpecLabel>Secondary · each with lighter + darker</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <RampSwatch name="Gold" ramp={["#FBEEC2", "#EBB81B", "#B78D0B"]} />
        <RampSwatch name="Pink" ramp={["#FED6E4", "#FC7CAE", "#D6517F"]} />
        <RampSwatch name="Lime" ramp={["#C7F0D6", "#20B965", "#178C4B"]} />
        <RampSwatch name="Sky" ramp={["#C3E6F6", "#0094D3", "#0470A0"]} />
        <RampSwatch name="Poppy" ramp={["#FBD6D0", "#F36F60", "#C44A3C"]} />
      </div>
    </div>

    {/* Grays */}
    <div className="space-y-4">
      <SpecLabel>Grays</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Swatch name="Icon Gray" hex="#637285" />
        <Swatch name="Disabled Gray" hex="#B1B9C2" />
        <Swatch name="Line Gray" hex="#E0E3E7" />
        <Swatch name="Background Gray" hex="#F2F4F5" />
        <Swatch name="Rich Black" hex="#292929" />
        <Swatch name="White" hex="#FFFFFF" dark />
      </div>
    </div>

    {/* Text colors */}
    <div className="space-y-4">
      <SpecLabel>Text colors</SpecLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Swatch name="Rich Black" hex="#292929" />
        <Swatch name="Secondary Text" hex="#4A5056" />
        <Swatch name="Disabled Text" hex="#A5A8AB" />
      </div>
    </div>

    {/* Status */}
    <div className="space-y-4">
      <SpecLabel>Status · color + soft notification tint</SpecLabel>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { name: "Success", hex: "#157841", tint: "#E3F4EA" },
          { name: "Error", hex: "#EE2F19", tint: "#FCE4E1" },
          { name: "Warning", hex: "#EB8E1B", tint: "#FBEDD8" },
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
  </SubSection>
);

/* ---------- 2 · TYPOGRAPHY ---------- */

const TYPE_SPECS = [
  { name: "H1", spec: "Regular · 24px · 125%", sample: "The quick brown fox", style: { fontSize: "24px", lineHeight: "125%", fontWeight: 400 } },
  { name: "H2 / Category", spec: "Bold · 16px · 125% · 0.06em · UPPERCASE", sample: "CATEGORY", style: { fontSize: "16px", lineHeight: "125%", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" } },
  { name: "Block Header", spec: "Bold · 12px · 16px · 0.03em · UPPERCASE", sample: "BLOCK HEADER", style: { fontSize: "12px", lineHeight: "16px", fontWeight: 700, letterSpacing: "0.03em", textTransform: "uppercase" } },
  { name: "Body", spec: "Regular · 14px · 20px", sample: "The quick brown fox jumps over the lazy dog.", style: { fontSize: "14px", lineHeight: "20px", fontWeight: 400 } },
  { name: "Body Bold", spec: "Bold · 14px · 20px", sample: "The quick brown fox jumps over the lazy dog.", style: { fontSize: "14px", lineHeight: "20px", fontWeight: 700 } },
  { name: "Form Field Supporting", spec: "Regular · 12px · 16px", sample: "Supporting text describing the field.", style: { fontSize: "12px", lineHeight: "16px", fontWeight: 400 } },
  { name: "Subheading / byline", spec: "Regular · 10px", sample: "Subheading byline text", style: { fontSize: "10px", lineHeight: "14px", fontWeight: 400 } },
];

const TypographySection = () => (
  <SubSection
    num="02"
    label="Typography"
    title="Typography"
    blurb="Roboto across the board. Specimens render in the product's Rich Black (#292929) on white, with uppercase and letter-spacing applied exactly as specified."
  >
    <WhitePanel className="divide-y divide-[#E0E3E7]">
      {TYPE_SPECS.map((t) => (
        <div key={t.name} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 first:pt-0 last:pb-0 items-baseline">
          <div className="md:col-span-4">
            <div className="text-sm font-bold text-[#292929]">{t.name}</div>
            <div className="text-[12px] text-[#637285] mt-0.5">{t.spec}</div>
          </div>
          <div className="md:col-span-8 text-[#292929]" style={{ ...ROBOTO, ...t.style }}>
            {t.sample}
          </div>
        </div>
      ))}
    </WhitePanel>
  </SubSection>
);

/* ---------- 3 · SPACING ---------- */

const SPACING = [8, 16, 24, 32, 48, 64, 80];

const SpacingSection = () => (
  <SubSection
    num="03"
    label="Spacing"
    title="Spacing"
    blurb="A seven-step scale from 8 to 80 px keeps rhythm consistent across layouts. Each white square scales to its token; sits on the Evergreen brand surface."
  >
    <div className="rounded-2xl bg-[#1A4C49] p-6 md:p-8">
      <div className="flex flex-wrap items-end gap-6 md:gap-8">
        {SPACING.map((px) => (
          <div key={px} className="flex flex-col items-center gap-3">
            <div
              className="bg-white rounded-[3px]"
              style={{ width: `${px}px`, height: `${px}px` }}
            />
            <div className="text-center" style={ROBOTO}>
              <div className="text-sm font-bold text-white leading-none">{px}</div>
              <div className="text-[10px] text-white/55 mt-1">px</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubSection>
);

/* ---------- COMPONENT helpers ---------- */

/* A labeled cell within a white component panel. */
const Specimen = ({ label, children, className = "" }) => (
  <div className={className}>
    <SpecLabel>{label}</SpecLabel>
    <div>{children}</div>
  </div>
);

/* ---------- 4 · BUTTONS ---------- */

const ButtonsSection = () => (
  <SubSection
    num="04"
    label="Component"
    title="Buttons"
    blurb="Primary (filled teal), Secondary (teal outline), and Tertiary (text) across Default, Hover, and Disabled states."
  >
    <WhitePanel>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-6">
        {/* Primary column */}
        <div className="space-y-4">
          <SpecLabel>Primary</SpecLabel>
          <button type="button" className="block w-full rounded bg-[#2B8679] text-white text-sm font-bold px-5 py-2.5" style={ROBOTO}>
            Primary action
          </button>
          <button type="button" className="block w-full rounded bg-[#1F6359] text-white text-sm font-bold px-5 py-2.5" style={ROBOTO}>
            Primary action
          </button>
          <button type="button" disabled className="block w-full rounded bg-[#B1B9C2] text-white text-sm font-bold px-5 py-2.5 cursor-not-allowed" style={ROBOTO}>
            Primary action
          </button>
          <div className="text-[11px] text-[#637285] grid grid-cols-3 text-center" style={ROBOTO}>
            <span>Default</span>
            <span>Hover</span>
            <span>Disabled</span>
          </div>
        </div>

        {/* Secondary column */}
        <div className="space-y-4">
          <SpecLabel>Secondary</SpecLabel>
          <button type="button" className="block w-full rounded border border-[#2B8679] text-[#2B8679] bg-white text-sm font-bold px-5 py-2.5" style={ROBOTO}>
            Secondary action
          </button>
          <button type="button" className="block w-full rounded border border-[#1F6359] text-[#1F6359] bg-[#D5EAE6] text-sm font-bold px-5 py-2.5" style={ROBOTO}>
            Secondary action
          </button>
          <button type="button" disabled className="block w-full rounded border border-[#B1B9C2] text-[#B1B9C2] bg-white text-sm font-bold px-5 py-2.5 cursor-not-allowed" style={ROBOTO}>
            Secondary action
          </button>
          <div className="text-[11px] text-[#637285] grid grid-cols-3 text-center" style={ROBOTO}>
            <span>Default</span>
            <span>Hover</span>
            <span>Disabled</span>
          </div>
        </div>

        {/* Tertiary column */}
        <div className="space-y-4">
          <SpecLabel>Tertiary / Text</SpecLabel>
          <button type="button" className="block w-full rounded text-[#2B8679] bg-white text-sm font-bold px-5 py-2.5" style={ROBOTO}>
            Tertiary action
          </button>
          <button type="button" className="block w-full rounded text-[#1F6359] bg-[#D5EAE6] text-sm font-bold px-5 py-2.5" style={ROBOTO}>
            Tertiary action
          </button>
          <button type="button" disabled className="block w-full rounded text-[#B1B9C2] bg-white text-sm font-bold px-5 py-2.5 cursor-not-allowed" style={ROBOTO}>
            Tertiary action
          </button>
          <div className="text-[11px] text-[#637285] grid grid-cols-3 text-center" style={ROBOTO}>
            <span>Default</span>
            <span>Hover</span>
            <span>Disabled</span>
          </div>
        </div>
      </div>
    </WhitePanel>
  </SubSection>
);

/* ---------- 5 · TEXT FIELDS ---------- */

const OutlinedField = ({ label, value, placeholder, borderColor = "#E0E3E7", labelColor = "#637285", supporting, supportingColor = "#637285", disabled, error }) => (
  <div>
    <div
      className={`relative rounded bg-white px-3 pt-4 pb-2 ${disabled ? "bg-[#F2F4F5]" : ""}`}
      style={{ border: `${error || (borderColor !== "#E0E3E7") ? "2px" : "1px"} solid ${borderColor}` }}
    >
      <span
        className="absolute -top-2.5 left-2.5 bg-white px-1 text-[12px] font-medium"
        style={{ ...ROBOTO, color: labelColor }}
      >
        {label}
      </span>
      <div
        className={`text-sm ${disabled ? "text-[#A5A8AB]" : value ? "text-[#292929]" : "text-[#A5A8AB]"}`}
        style={ROBOTO}
      >
        {value || placeholder || "Placeholder"}
      </div>
    </div>
    {supporting ? (
      <p className="text-[12px] mt-1.5 leading-4" style={{ ...ROBOTO, color: supportingColor }}>
        {supporting}
      </p>
    ) : null}
  </div>
);

const TextFieldsSection = () => (
  <SubSection
    num="05"
    label="Component"
    title="Text Fields"
    blurb="Material-style outlined inputs with floating labels that sit on the border. Supporting/error text beneath each field."
  >
    <WhitePanel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Specimen label="Default">
          <OutlinedField label="Field label" placeholder="Placeholder" supporting="Supporting text" />
        </Specimen>

        <Specimen label="Focus">
          <OutlinedField label="Field label" value="Typing" borderColor="#2B8679" labelColor="#2B8679" supporting="Supporting text" />
        </Specimen>

        <Specimen label="Filled">
          <OutlinedField label="Field label" value="Field value" borderColor="#637285" supporting="Supporting text" />
        </Specimen>

        <Specimen label="Error">
          <OutlinedField label="Field label" value="Invalid value" borderColor="#EE2F19" labelColor="#EE2F19" supporting="Error message goes here" supportingColor="#EE2F19" error />
        </Specimen>

        <Specimen label="Disabled">
          <OutlinedField label="Field label" placeholder="Placeholder" disabled supporting="Supporting text" supportingColor="#A5A8AB" />
        </Specimen>
      </div>
    </WhitePanel>
  </SubSection>
);

/* ---------- 6 · CHIPS ---------- */

const ChipsSection = () => (
  <SubSection
    num="06"
    label="Component"
    title="Chips & Filter Chips"
    blurb="Default and selected states for both compact entity chips and toggleable filter chips."
  >
    <WhitePanel className="space-y-8">
      <Specimen label="Chips">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F4F5] text-[#292929] text-[13px] font-medium px-3.5 py-1.5" style={ROBOTO}>
            Category
            <span className="text-[#637285]"><Icon.close /></span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D5EAE6] text-[#1F6359] text-[13px] font-medium px-3.5 py-1.5" style={ROBOTO}>
            Category
            <span className="text-[#1F6359]"><Icon.close /></span>
          </span>
        </div>
        <div className="text-[11px] text-[#637285] mt-2 flex gap-10" style={ROBOTO}>
          <span>Default</span>
          <span>Selected</span>
        </div>
      </Specimen>

      <Specimen label="Filter chips">
        <div className="flex flex-wrap gap-3">
          <button type="button" className="inline-flex items-center rounded-full border border-[#B1B9C2] bg-white text-[#292929] text-[13px] font-medium px-3.5 py-1.5" style={ROBOTO}>
            Filter label
          </button>
          <button type="button" className="inline-flex items-center gap-1.5 rounded-full border border-[#2B8679] bg-[#2B8679] text-white text-[13px] font-medium px-3.5 py-1.5" style={ROBOTO}>
            <Icon.check />
            Filter label
          </button>
        </div>
        <div className="text-[11px] text-[#637285] mt-2 flex gap-10" style={ROBOTO}>
          <span>Default</span>
          <span>Selected</span>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 7 · SEGMENTED + TABS ---------- */

const SegmentedTabsSection = () => (
  <SubSection
    num="07"
    label="Component"
    title="Segmented Button & Tabs"
    blurb="A three-segment control with one active segment, plus underline tabs with a selected item."
  >
    <WhitePanel className="space-y-8">
      <Specimen label="Stepper / segmented">
        <div className="inline-flex rounded-full border border-[#E0E3E7] overflow-hidden" style={ROBOTO}>
          {["Step one", "Step two", "Step three"].map((s, i) => (
            <button
              type="button"
              key={s}
              className={`text-[13px] font-bold px-5 py-2 relative ${
                i === 2 ? "bg-[#2B8679] text-white" : i === 1 ? "bg-[#D5EAE6] text-[#1F6359]" : "bg-white text-[#4A5056]"
              }`}
            >
              {i > 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-px text-[#E0E3E7]">
                  <svg width="8" height="24" viewBox="0 0 8 24" fill="none"><path d="M0 0l8 12-8 12" fill={i === 2 ? "#D5EAE6" : "white"}/></svg>
                </span>
              )}
              {s}
            </button>
          ))}
        </div>
      </Specimen>

      <Specimen label="Tabs">
        <div className="border-b border-[#E0E3E7] flex gap-6" style={ROBOTO}>
          <button type="button" className="text-sm font-bold text-[#2B8679] pb-3 -mb-px border-b-2 border-[#2B8679]">
            Tab one
          </button>
          <button type="button" className="text-sm font-medium text-[#4A5056] pb-3">
            Tab two
          </button>
          <button type="button" className="text-sm font-medium text-[#4A5056] pb-3">
            Tab three
          </button>
        </div>
        <div className="text-[11px] text-[#637285] mt-2" style={ROBOTO}>
          Selected · Default · Default
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 8 · TOGGLE + CHECKBOX ---------- */

const SwitchTrack = ({ on }) => (
  <span
    className={`inline-flex items-center w-11 h-6 rounded-full p-0.5 transition-colors ${on ? "bg-[#2B8679] justify-end" : "bg-[#B1B9C2] justify-start"}`}
  >
    <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
  </span>
);

const CheckBox = ({ checked, disabled }) => (
  <span
    className={`inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] ${
      disabled
        ? "border border-[#E0E3E7] bg-[#F2F4F5]"
        : checked
        ? "bg-[#2B8679]"
        : "border-2 border-[#637285] bg-white"
    }`}
  >
    {checked ? <span className="text-white"><Icon.check /></span> : null}
  </span>
);

const ToggleCheckboxSection = () => (
  <SubSection
    num="08"
    label="Component"
    title="Toggle & Checkbox"
    blurb="An on/off switch and a labeled checkbox shown unchecked, checked, and disabled."
  >
    <WhitePanel className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <Specimen label="Toggle / Switch">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <SwitchTrack on />
            <span className="text-[11px] text-[#637285]" style={ROBOTO}>On</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SwitchTrack on={false} />
            <span className="text-[11px] text-[#637285]" style={ROBOTO}>Off</span>
          </div>
        </div>
      </Specimen>

      <Specimen label="Checkbox">
        <div className="space-y-3" style={ROBOTO}>
          <label className="flex items-center gap-2.5 text-sm text-[#292929]">
            <CheckBox checked={false} /> Option label
          </label>
          <label className="flex items-center gap-2.5 text-sm text-[#292929]">
            <CheckBox checked /> Option label
          </label>
          <label className="flex items-center gap-2.5 text-sm text-[#A5A8AB] cursor-not-allowed">
            <CheckBox disabled /> Option label
          </label>
          <div className="text-[11px] text-[#637285]">Unchecked · Checked · Disabled</div>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 9 · TRACKER ---------- */

const TRACKER_STEPS = [
  { label: "Step one", state: "complete" },
  { label: "Step two", state: "complete" },
  { label: "Step three", state: "current" },
  { label: "Step four", state: "upcoming" },
];

const TrackerSection = () => (
  <SubSection
    num="11"
    label="Component"
    title="Tracker"
    blurb="A horizontal step tracker with completed steps, a current step, and an upcoming step."
  >
    <WhitePanel>
      <div className="flex items-start" style={ROBOTO}>
        {TRACKER_STEPS.map((s, i) => {
          const last = i === TRACKER_STEPS.length - 1;
          const done = s.state === "complete";
          const current = s.state === "current";
          return (
            <div key={s.label} className="flex-1 flex flex-col items-center relative">
              <div className="flex items-center w-full">
                <span className={`flex-1 h-0.5 ${i === 0 ? "opacity-0" : done || current ? "bg-[#2B8679]" : "bg-[#E0E3E7]"}`} />
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-bold shrink-0 ${
                    done
                      ? "bg-[#2B8679] text-white"
                      : current
                      ? "border-2 border-[#2B8679] text-[#2B8679] bg-white"
                      : "border-2 border-[#E0E3E7] text-[#A5A8AB] bg-white"
                  }`}
                >
                  {done ? <Icon.check /> : i + 1}
                </span>
                <span className={`flex-1 h-0.5 ${last ? "opacity-0" : done ? "bg-[#2B8679]" : "bg-[#E0E3E7]"}`} />
              </div>
              <span
                className={`mt-2 text-[12px] text-center ${
                  current ? "font-bold text-[#292929]" : done ? "text-[#292929]" : "text-[#A5A8AB]"
                }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </WhitePanel>
  </SubSection>
);

/* ---------- 10 · TABLE ---------- */

const TABLE_ROWS = [
  ["Item label one", "Category", "Active", "Apr 12, 2026"],
  ["Item label two", "Category", "Pending", "Apr 14, 2026"],
  ["Item label three", "Category", "Active", "Apr 18, 2026"],
  ["Item label four", "Category", "Archived", "Apr 21, 2026"],
];

const TableSection = () => (
  <SubSection
    num="12"
    label="Component"
    title="Data Table"
    blurb="A header row with three to four line-separated body rows, dividers in Line Gray (#E0E3E7)."
  >
    <WhitePanel className="p-0 md:p-0 overflow-x-auto">
      <table className="w-full text-left border-collapse" style={ROBOTO}>
        <thead>
          <tr className="border-b border-[#E0E3E7] bg-[#F2F4F5]">
            {["Name", "Category", "Status", "Updated"].map((h) => (
              <th key={h} className="text-[12px] font-bold uppercase tracking-[0.03em] text-[#637285] px-6 py-3 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row) => (
            <tr key={row[0]} className="border-b border-[#E0E3E7] last:border-0">
              <td className="text-sm font-bold text-[#292929] px-6 py-3.5 whitespace-nowrap">{row[0]}</td>
              <td className="text-sm text-[#4A5056] px-6 py-3.5 whitespace-nowrap">{row[1]}</td>
              <td className="px-6 py-3.5 whitespace-nowrap">
                <span
                  className="inline-block rounded-full text-[12px] font-medium px-2.5 py-0.5"
                  style={{
                    ...ROBOTO,
                    backgroundColor:
                      row[2] === "Active" ? "#E3F4EA" : row[2] === "Pending" ? "#FBEDD8" : "#F2F4F5",
                    color: row[2] === "Active" ? "#157841" : row[2] === "Pending" ? "#EB8E1B" : "#637285",
                  }}
                >
                  {row[2]}
                </span>
              </td>
              <td className="text-sm text-[#4A5056] px-6 py-3.5 whitespace-nowrap">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </WhitePanel>
  </SubSection>
);

/* ---------- 11 · BREADCRUMBS + PAGINATION ---------- */

const NavSection = () => (
  <SubSection
    num="10"
    label="Component"
    title="Breadcrumbs & Pagination"
    blurb="A breadcrumb trail to the current page, plus numbered pagination with previous/next and an active page."
  >
    <WhitePanel className="space-y-8">
      <Specimen label="Breadcrumbs">
        <nav className="flex items-center flex-wrap gap-1 text-sm" style={ROBOTO} aria-label="Breadcrumb">
          <button type="button" className="text-[#2B8679] font-medium">Home</button>
          <span className="text-[#B1B9C2]">/</span>
          <button type="button" className="text-[#2B8679] font-medium">Category</button>
          <span className="text-[#B1B9C2]">/</span>
          <span className="text-[#637285]" aria-current="page">Current</span>
        </nav>
      </Specimen>

      <Specimen label="Pagination">
        <div className="flex items-center gap-1.5" style={ROBOTO}>
          <button type="button" className="flex items-center justify-center w-9 h-9 rounded border border-[#E0E3E7] text-[#637285]" aria-label="Previous page">
            <Icon.chevronLeft />
          </button>
          {[1, 2, 3, 4].map((n) => (
            <button
              type="button"
              key={n}
              className={`w-9 h-9 rounded text-sm font-bold ${
                n === 1 ? "bg-[#2B8679] text-white" : "text-[#4A5056] hover:bg-[#F2F4F5]"
              }`}
            >
              {n}
            </button>
          ))}
          <span className="text-[#A5A8AB] text-sm px-1">…</span>
          <button type="button" className="w-9 h-9 rounded text-sm font-bold text-[#4A5056] hover:bg-[#F2F4F5]">8</button>
          <button type="button" className="flex items-center justify-center w-9 h-9 rounded border border-[#E0E3E7] text-[#637285]" aria-label="Next page">
            <Icon.chevronRight />
          </button>
          <span className="text-[12px] text-[#637285] ml-3">Page 1 of 8</span>
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- 12 · NOTIFICATIONS ---------- */

const NOTIFICATIONS = [
  { kind: "Success", icon: Icon.success, fg: "#157841", bg: "#E3F4EA", border: "#157841" },
  { kind: "Error", icon: Icon.error, fg: "#EE2F19", bg: "#FCE4E1", border: "#EE2F19" },
  { kind: "Warning", icon: Icon.warning, fg: "#EB8E1B", bg: "#FBEDD8", border: "#EB8E1B" },
  { kind: "Info", icon: Icon.info, fg: "#0094D3", bg: "#C3E6F6", border: "#0094D3" },
];

const NotificationsSection = () => (
  <SubSection
    num="13"
    label="Component"
    title="Persistent Notifications"
    blurb="Banner notifications for Success, Error, Warning, and Info, each with an icon, message, and dismiss control."
  >
    <WhitePanel className="space-y-3">
      {NOTIFICATIONS.map((n) => {
        const I = n.icon;
        return (
          <div
            key={n.kind}
            className="flex items-start gap-3 rounded px-4 py-3"
            style={{ ...ROBOTO, backgroundColor: n.bg, borderLeft: `4px solid ${n.border}` }}
            role="status"
          >
            <span style={{ color: n.fg }} className="shrink-0 mt-0.5">
              <I />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-[#292929]">{n.kind}</div>
              <div className="text-[13px] text-[#4A5056] leading-5">
                Notification message describing what happened.
              </div>
            </div>
            <button type="button" className="shrink-0 text-[#637285] mt-0.5" aria-label="Dismiss">
              <Icon.close />
            </button>
          </div>
        );
      })}
    </WhitePanel>
  </SubSection>
);

/* ---------- 13 · SEARCH BAR ---------- */

const SearchSection = () => (
  <SubSection
    num="09"
    label="Component"
    title="Search Bar"
    blurb="A single-line search input with a leading search icon and placeholder text."
  >
    <WhitePanel>
      <Specimen label="Search">
        <div className="flex items-center gap-2.5 rounded border border-[#E0E3E7] bg-white px-3 py-2.5 max-w-md" style={ROBOTO}>
          <span className="text-[#637285]"><Icon.search /></span>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm text-[#292929] placeholder-[#A5A8AB] outline-none"
            style={ROBOTO}
          />
        </div>
      </Specimen>
    </WhitePanel>
  </SubSection>
);

/* ---------- root ---------- */

export default function AuroraDesignSystem() {
  return (
    <div className="space-y-16 md:space-y-20" style={ROBOTO}>
      {/* Foundations */}
      <ColorSection />
      <TypographySection />
      <SpacingSection />

      {/* Components */}
      <ButtonsSection />
      <TextFieldsSection />
      <div className="grid lg:grid-cols-2 gap-12 md:gap-14 items-start">
        <ChipsSection />
        <SegmentedTabsSection />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 md:gap-14 items-start">
        <ToggleCheckboxSection />
        <SearchSection />
      </div>
      <NavSection />
      <TrackerSection />
      <TableSection />
      <NotificationsSection />
    </div>
  );
}
