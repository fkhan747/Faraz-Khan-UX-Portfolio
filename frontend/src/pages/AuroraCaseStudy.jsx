import { useCaseData } from "../components/CaseStudyGate";
import VaultImage from "../components/VaultImage";
import { useLightbox } from "../components/Lightbox";
import Reveal from "../components/Reveal";
import CaseTopBar from "../components/CaseTopBar";
import Seo from "../components/Seo";
import { Maximize2 } from "lucide-react";
import { rich, Thanks } from "./pilots/deckParts";
import { DECK_CSS } from "./pilots/caseDeck";

/* AURORA, restructured 2026-09-13. THIS IS THE LIVE PAGE at /case/aurora.

   WHAT THIS IS: Faraz's revised Aurora doc (dashboard + journey creation
   during the Angular migration) in the case-study rhythm he
   picked from wongdoody.com/case-studies/access-the-unseen: a full-bleed
   cover with the title on it, one deck line, then a strict alternation of a
   narrow uppercase text block and big rounded screens. White ground,
   Helvetica, one ink. The site's own chrome (CaseTopBar, the Thanks footer)
   stays so the page still belongs to the portfolio.

   COPY: every word comes from `aurora.v3` in src/data/auroraCase.js through
   useCaseData(), so this bundle ships no confidential text. The previous
   page (overview / research / insights / ... / design system) is in git
   history; its data keys stay in the module untouched.

   IMAGES: one frame rule for every screen. The wrapper owns the radius, the
   1px edge and the size; the image fills it. Pairs and trios share a height
   whose ratio is computed from the REAL pixel dimensions in RATIO below, so
   the widest screen fits whole and only the taller ones lose their bottom.
   Faraz asked for this after a draft where images overlapped and the corner
   treatment drifted. No GIF / MP4 slots, no wireframes as stand-ins. */

const ACCENT = "#1A4C49";

/* width / height of each file in public/aurora, measured, not guessed. */
const RATIO = {
  "/aurora/01_RBJ_Type_Tab_Basic_Fields.jpg": 2.1083,
  "/aurora/02_RBJ_Type_Tab_All_Fields.jpg": 1.0852,
  "/aurora/03_RBJ_Content_Tab.jpg": 1.199,
  "/aurora/04_RBJ_Properties_Weekly.jpg": 1.0206,
  "/aurora/05_RBJ_Properties_Monthly.jpg": 0.8818,
  "/aurora/06_RBJ_Properties_Custom.jpg": 0.9074,
  "/aurora/07_Composer_Empty_AI.jpg": 1.9355,
  "/aurora/08_Composer_Text_Block_Selected.jpg": 1.9355,
  "/aurora/09_Helio_AI_Make_Shorter_Response.jpg": 1.9355,
  "/aurora/10_Composer_Open_with_AI_Context_Menu.jpg": 1.9355,
  "/aurora/11_Composer_Blocks_Library_Panel.jpg": 1.9355,
};

const NEXT_WORK = [
  ["/case/finvista", "/finvista/cover.jpg", "FinVista", "Assisted lending"],
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

/* NO BACKTICKS BELOW: one template literal. */
const WD_CSS = `
  .au{ --ink:#1F1F1A; --muted:#5F5F58; --rule:#E6E4DE; --acc:${ACCENT}; --r:16px;
    background:#fff; color:var(--ink);
    font-family:"Helvetica Neue",Helvetica,Arial,system-ui,sans-serif;
    font-size:18px; line-height:1.5; overflow-x:clip; -webkit-font-smoothing:antialiased; }
  .au *{ box-sizing:border-box; }
  .au-wrap{ max-width:1440px; margin:0 auto; }

  /* ── Cover ───────────────────────────────────────────────────────── */
  .au-hero{ position:relative; height:min(810px,88vh); min-height:520px; overflow:hidden;
    margin:24px 24px 0; border-radius:var(--r); border:1px solid rgba(31,31,26,.14); background:#0f1d1c; }
  .au-hero img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; }
  .au-hero::after{ content:""; position:absolute; inset:0;
    background:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.58) 100%); }
  .au-hero-t{ position:absolute; left:56px; right:56px; bottom:56px; z-index:2; max-width:900px; }
  .au-tags{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.85); margin:0 0 18px; }
  .au-h1{ margin:0; font-size:clamp(36px,5.2vw,76px); line-height:1.02; letter-spacing:-.015em;
    font-weight:300; color:#fff; text-wrap:balance; }
  .au-h1 b{ display:block; font-weight:700; }
  @media (max-width:800px){ .au-hero{ margin:12px 12px 0; } .au-hero-t{ left:22px; right:22px; bottom:32px; } }

  /* ── Deck + facts ────────────────────────────────────────────────── */
  .au-deck{ display:grid; grid-template-columns:minmax(0,760px) 1fr; gap:48px; align-items:start; padding:64px 80px 28px; }
  .au-deck p{ margin:0; font-size:20px; line-height:1.5; }
  .au-mark{ justify-self:end; text-align:right; }
  .au-mark .m{ font-size:22px; font-weight:700; letter-spacing:-.02em; color:var(--acc); }
  .au-mark .s{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-top:6px; }
  .au-meta{ display:flex; flex-wrap:wrap; gap:20px 56px; margin:0 80px; padding:0 0 28px;
    font-size:14px; color:var(--muted); border-bottom:1px solid var(--rule); }
  .au-meta b{ display:block; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink); margin-bottom:4px; }
  @media (max-width:800px){ .au-deck{ grid-template-columns:1fr; padding:44px 22px 20px; } .au-meta{ margin:0 22px; } }

  /* ── The Challenge / Our Solution, side by side ──────────────────── */
  .au-pair{ display:grid; grid-template-columns:1fr 1fr; gap:64px; margin:96px 80px 0; }
  .au-pair-col p{ margin:0 0 16px; font-size:17px; line-height:1.55; }
  .au-pair-col .au-h2{ margin-bottom:16px; }
  @media (max-width:900px){ .au-pair{ grid-template-columns:1fr; gap:48px; margin:64px 22px 0; } }

  /* ── Frames: the one rule for every image ────────────────────────── */
  .au-media{ margin:72px 80px 0; padding:0; }
  .au-frame{ position:relative; border-radius:var(--r); overflow:hidden;
    border:1px solid rgba(31,31,26,.14); background:#F4F3EF; }
  .au-frame img{ display:block; width:100%; height:auto; }
  .au-figbtn{ display:block; width:100%; padding:0; border:0; background:none; cursor:zoom-in; }
  .au-duo, .au-trio{ display:grid; gap:16px; }
  .au-duo{ grid-template-columns:1fr 1fr; } .au-trio{ grid-template-columns:repeat(3,1fr); }
  .au-duo .au-frame, .au-trio .au-frame{ aspect-ratio:var(--ar,1.6); }
  .au-duo .au-frame img, .au-trio .au-frame img{ height:100%; object-fit:cover; object-position:top left; }
  .au-media figcaption{ grid-column:1/-1; font-size:13px; color:var(--muted); margin-top:14px; line-height:1.45; }
  .au-zoom{ position:absolute; top:12px; right:12px; z-index:2; width:34px; height:34px; display:grid; place-items:center;
    border-radius:8px; cursor:pointer; border:1px solid rgba(31,31,26,.14); background:rgba(255,255,255,.9);
    color:var(--ink); opacity:.75; transition:opacity .18s ease; }
  .au-frame:hover .au-zoom{ opacity:1; }
  .au-zoom:focus-visible{ outline:2px solid var(--acc); outline-offset:2px; opacity:1; }
  @media (max-width:800px){ .au-media{ margin:44px 22px 0; } .au-duo, .au-trio{ grid-template-columns:1fr; } }

  /* ── Text blocks: the reference's narrow centred column ──────────── */
  .au-text{ max-width:842px; margin:96px auto 0; padding:0 22px; transform:translateX(-60px); }
  @media (max-width:1100px){ .au-text{ transform:none; } }
  @media (max-width:800px){ .au-text{ margin-top:64px; } }
  .au-h2{ margin:0 0 18px; font-size:36px; font-weight:300; letter-spacing:.01em; text-transform:uppercase; line-height:1.1; color:var(--ink); }
  .au-h2 .n{ color:var(--muted); margin-right:14px; }
  .au-h3{ margin:26px 0 10px; font-size:18px; font-weight:700; }
  .au-text p{ margin:0 0 18px; }
  .au-ul{ margin:0 0 18px; padding:0; list-style:none; }
  .au-ul li{ margin:0 0 12px; padding-left:22px; position:relative; }
  .au-ul li::before{ content:""; position:absolute; left:0; top:.62em; width:8px; height:8px; border-radius:50%; background:var(--acc); }
  .au-ol{ margin:0; padding:0; list-style:none; counter-reset:k; }
  .au-ol li{ counter-increment:k; margin:0 0 12px; padding-left:40px; position:relative; }
  .au-ol li::before{ content:counter(k) "."; position:absolute; left:0; top:0; font-weight:700; color:var(--acc); }
  .au-nums{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin:8px 0 24px; }
  .au-num{ border-top:1px solid var(--ink); padding-top:14px; }
  .au-num .v{ font-size:56px; font-weight:300; letter-spacing:-.03em; line-height:1; font-variant-numeric:tabular-nums; }
  .au-num .l{ font-size:14px; color:var(--muted); margin-top:8px; line-height:1.4; }
  @media (max-width:700px){ .au-nums{ grid-template-columns:1fr; } }


  /* ── Exhibits: scannable, not read ───────────────────────────────── */
  .au-kpis{ display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin:56px 80px 0; }
  @media (max-width:900px){ .au-kpis{ grid-template-columns:repeat(2,1fr); margin:40px 22px 0; } }
  .au-kpi{ border-top:1px solid var(--ink); padding-top:14px; }
  .au-kpi .v{ font-size:56px; font-weight:300; letter-spacing:-.03em; line-height:1; font-variant-numeric:tabular-nums; }
  .au-kpi .l{ font-size:14px; color:var(--muted); margin-top:8px; }

  .au-cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin:8px 0 8px; }
  @media (max-width:760px){ .au-cards{ grid-template-columns:1fr; } }
  .au-card{ border-top:1px solid var(--ink); padding-top:12px; }
  .au-card b{ display:block; font-size:16px; margin-bottom:6px; }
  .au-card span{ font-size:15px; color:var(--muted); line-height:1.5; display:block; }

  .au-findings{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin:8px 0 24px; }
  @media (max-width:760px){ .au-findings{ grid-template-columns:1fr 1fr; } }
  @media (max-width:480px){ .au-findings{ grid-template-columns:1fr; } }
  .au-finding{ border-top:1px solid var(--ink); padding-top:12px; }
  .au-finding .v{ font-size:30px; font-weight:300; letter-spacing:-.02em; line-height:1; font-variant-numeric:tabular-nums; }
  .au-finding .l{ font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:var(--acc); font-weight:700; margin-top:6px; }
  .au-finding .d{ font-size:14.5px; color:var(--muted); line-height:1.45; margin-top:6px; }

  .au-tablewrap{ overflow-x:auto; margin:8px 0 24px; }
  .au-table{ width:100%; border-collapse:collapse; min-width:560px; }
  .au-table th, .au-table td{ text-align:left; padding:12px 16px 12px 0; vertical-align:top; border-bottom:1px solid var(--rule); font-size:15px; line-height:1.45; }
  .au-table thead th{ font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); font-weight:700; border-bottom:1px solid var(--ink); }
  .au-table tbody th{ width:26%; }
  .au-table tbody th b{ display:block; } .au-table tbody th span{ font-size:12px; color:var(--acc); letter-spacing:.06em; text-transform:uppercase; }
  .au-table td{ color:var(--ink); }

  .au-setup{ display:flex; flex-wrap:wrap; gap:8px 28px; margin:20px 0 28px; padding:14px 0; border-top:1px solid var(--rule); border-bottom:1px solid var(--rule); }
  .au-setup > div{ display:flex; align-items:baseline; gap:6px; }
  .au-setup .v{ font-size:15px; font-weight:700; }
  .au-setup .l{ font-size:13px; color:var(--muted); }
  .au-results{ display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin:8px 0 24px; }
  @media (max-width:760px){ .au-results{ grid-template-columns:repeat(2,1fr); } }
  .au-results > div{ border-top:1px solid var(--ink); padding-top:12px; }
  .au-results .v{ font-size:40px; font-weight:300; letter-spacing:-.03em; line-height:1; font-variant-numeric:tabular-nums; }
  .au-results .l{ font-size:14px; margin-top:6px; } .au-results .s{ font-size:12.5px; color:var(--acc); margin-top:2px; font-weight:700; }

  /* The shared Thanks footer sits on paper; give it room after the last screen. */
  .au .cd-thanks{ margin-top:120px; }
`;

/* A screen in a frame, opening in the shared Lightbox. */
function Frame({ src, alt, cap }) {
  const { open } = useLightbox();
  const show = () => open({ src, alt, caption: cap || alt });
  return (
    <div className="au-frame">
      <button type="button" className="au-figbtn" onClick={show}>
        <VaultImage src={src} alt={alt} loading="lazy" />
      </button>
      <span
        className="au-zoom"
        role="button"
        tabIndex={0}
        aria-label={`Open ${alt} full screen`}
        onClick={show}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(); } }}
      >
        <Maximize2 size={15} strokeWidth={1.9} />
      </span>
    </div>
  );
}

/* single / duo / trio. Pairs take their ratio from the widest screen so
   nothing wide is cropped; taller screens are top-anchored. */
function Media({ kind, items, cap }) {
  const ar = kind === "single" ? undefined : Math.max(...items.map((it) => RATIO[it.src] || 1.6));
  const cls = kind === "single" ? "au-media" : `au-media au-${kind}`;
  return (
    <Reveal>
      <figure className={cls} style={ar ? { "--ar": ar.toFixed(4) } : undefined}>
        {items.map((it) => <Frame key={it.src} src={it.src} alt={it.alt} cap={cap} />)}
        {cap ? <figcaption>{cap}</figcaption> : null}
      </figure>
    </Reveal>
  );
}

function TextBlock({ s }) {
  return (
    <Reveal className="au-text">
      <h2 className="au-h2">{s.n ? <span className="n">{s.n}</span> : null}{s.h}</h2>
      {s.p ? <p>{rich(s.p)}</p> : null}
      {(s.ps || []).map((t) => <p key={t.slice(0, 24)}>{rich(t)}</p>)}
      {s.nums ? (
        <div className="au-nums">
          {s.nums.map(([v, l]) => <div className="au-num" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>)}
        </div>
      ) : null}
      {s.sub ? <h3 className="au-h3">{s.sub}</h3> : null}
      {s.bullets ? (
        <ul className="au-ul">{s.bullets.map(([k, v]) => <li key={k}><b>{k}</b> {rich(v)}</li>)}</ul>
      ) : null}
      {s.numbered ? (
        <ol className="au-ol">{s.numbered.map(([k, v]) => <li key={k}><b>{k}</b> {rich(v)}</li>)}</ol>
      ) : null}
      {s.cards ? (
        <div className="au-cards">
          {s.cards.map(([t, d]) => <div className="au-card" key={t}><b>{t}</b><span>{d}</span></div>)}
        </div>
      ) : null}
      {s.findingsTitle ? <h3 className="au-h3">{s.findingsTitle}</h3> : null}
      {s.findings ? (
        <div className="au-findings">
          {s.findings.map(([v, l, d]) => <div className="au-finding" key={l}><div className="v">{v}</div><div className="l">{l}</div><div className="d">{d}</div></div>)}
        </div>
      ) : null}
      {s.personasTitle ? <h3 className="au-h3">{s.personasTitle}</h3> : null}
      {s.personaRows ? (
        <div className="au-tablewrap"><table className="au-table">
          <thead><tr><th>Persona</th><th>Needs to</th><th>Held back by</th></tr></thead>
          <tbody>{s.personaRows.map(([n, r, need, pain]) => <tr key={n}><th><b>{n}</b><span>{r}</span></th><td>{need}</td><td>{pain}</td></tr>)}</tbody>
        </table></div>
      ) : null}
      {s.setup ? (
        <div className="au-setup">{s.setup.map(([v, l]) => <div key={l}><div className="v">{v}</div><div className="l">{l}</div></div>)}</div>
      ) : null}
      {s.resultsTitle ? <h3 className="au-h3">{s.resultsTitle}</h3> : null}
      {s.results ? (
        <div className="au-results">{s.results.map(([v, l, sub]) => <div key={l}><div className="v">{v}</div><div className="l">{l}</div><div className="s">{sub}</div></div>)}</div>
      ) : null}
    </Reveal>
  );
}

export default function AuroraCaseStudy() {
  const au = useCaseData();
  const v = au.v3;

  return (
    <div className="au cd" style={{ "--acc": ACCENT }} data-testid="aurora-case">
      <Seo title="Aurora case study" description={v.deck.replace(/\*\*/g, "")} />
      <style>{DECK_CSS}</style>
      <style>{WD_CSS}</style>
      <CaseTopBar accent={ACCENT} />

      <div className="au-wrap">
        <section className="au-hero">
          <VaultImage src={v.cover} alt="Aurora" />
          <div className="au-hero-t">
            <p className="au-tags">{v.tags}</p>
            <h1 className="au-h1">{v.title[0]}<b>{v.title[1]}</b></h1>
          </div>
        </section>

        <Reveal className="au-deck">
          <p>{rich(v.deck)}</p>
          <div className="au-mark"><div className="m">{v.mark.m}</div><div className="s">{v.mark.s}</div></div>
        </Reveal>
        <div className="au-meta">
          {v.facts.map((f) => <div key={f.label}><b>{f.label}</b>{f.value}</div>)}
        </div>

        {/* The Challenge and Our Solution side by side, then the lead screen
            under them, then the numbered detail. */}
        <Reveal className="au-pair">
          {v.sections.slice(0, 2).map((s) => (
            <div className="au-pair-col" key={s.h}>
              <h2 className="au-h2">{s.h}</h2>
              {(s.ps || []).map((t) => <p key={t.slice(0, 24)}>{rich(t)}</p>)}
            </div>
          ))}
        </Reveal>
        <Media kind="single" items={[v.leadShot]} cap={v.leadShot.cap} />
        <Reveal className="au-kpis">
          {v.kpis.map(([val, l]) => <div className="au-kpi" key={l}><div className="v">{val}</div><div className="l">{l}</div></div>)}
        </Reveal>

        {v.sections.slice(2).map((s) => (
          <div key={s.h}>
            <TextBlock s={s} />
            {(s.media || []).map((m, i) => <Media key={i} kind={m.kind} items={m.items} cap={m.cap} />)}
          </div>
        ))}
      </div>

      <Thanks
        items={NEXT_WORK}
        blurb="Happy to walk through any part of this in more detail, including the decisions that did not make it."
      />
    </div>
  );
}
