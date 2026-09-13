import VaultImage from "../../components/VaultImage";
import { useLightbox } from "../../components/Lightbox";
import Reveal from "../../components/Reveal";
import { Maximize2 } from "lucide-react";
import { rich } from "./deckParts";

/* The case-study rhythm Faraz picked on 2026-09-13 from
   wongdoody.com/case-studies/access-the-unseen, shared by Aurora and FinVista:

     full-bleed cover with the title on it
     one deck line + Role / Scale facts
     The Challenge | Our Solution, side by side
     the lead screen, then a KPI strip
     numbered text blocks in a narrow centred column, big rounded screens
     between them

   White ground, Helvetica, one ink, the project's own accent for emphasis.
   Every image goes through <Frame/>: the wrapper owns the radius, the 1px
   edge and the size, and pairs/trios take their shared height from the REAL
   pixel ratio of the widest file (passed in `ratios`), so nothing wide is
   cropped and tall screens are top-anchored. Text blocks are data-driven:
   whichever keys a section carries (p, ps, cards, bullets, findings,
   personaRows, setup, results, friction, numbered, steps) render in a fixed
   order, so both pages stay consistent without sharing copy.

   NO BACKTICKS inside wdCss's template literal. */

export const wdCss = (accent) => `
  .wd{ --ink:#1F1F1A; --muted:#5F5F58; --rule:#E6E4DE; --acc:${accent}; --r:16px;
    background:#fff; color:var(--ink);
    font-family:"Helvetica Neue",Helvetica,Arial,system-ui,sans-serif;
    font-size:18px; line-height:1.5; overflow-x:clip; -webkit-font-smoothing:antialiased; }
  .wd *{ box-sizing:border-box; }
  .wd-wrap{ max-width:1440px; margin:0 auto; }

  /* ── Cover ───────────────────────────────────────────────────────── */
  .wd-hero{ position:relative; height:min(810px,88vh); min-height:520px; overflow:hidden;
    margin:24px 24px 0; border-radius:var(--r); border:1px solid rgba(31,31,26,.14); background:#101413; }
  .wd-hero img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; }
  .wd-hero::after{ content:""; position:absolute; inset:0;
    background:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.58) 100%); }
  .wd-hero-t{ position:absolute; left:56px; right:56px; bottom:56px; z-index:2; max-width:900px; }
  .wd-tags{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.85); margin:0 0 18px; }
  .wd-h1{ margin:0; font-size:clamp(36px,5.2vw,76px); line-height:1.02; letter-spacing:-.015em;
    font-weight:300; color:#fff; text-wrap:balance; }
  .wd-h1 b{ display:block; font-weight:700; }
  @media (max-width:800px){ .wd-hero{ margin:12px 12px 0; } .wd-hero-t{ left:22px; right:22px; bottom:32px; } }

  /* ── Deck + facts ────────────────────────────────────────────────── */
  .wd-deck{ display:grid; grid-template-columns:minmax(0,760px) 1fr; gap:48px; align-items:start; padding:64px 80px 28px; }
  .wd-deck p{ margin:0; font-size:20px; line-height:1.5; }
  .wd-mark{ justify-self:end; text-align:right; }
  .wd-mark .m{ font-size:22px; font-weight:700; letter-spacing:-.02em; color:var(--acc); }
  .wd-mark .s{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-top:6px; }
  .wd-meta{ display:flex; flex-wrap:wrap; gap:20px 56px; margin:0 80px; padding:0 0 28px;
    font-size:14px; color:var(--muted); border-bottom:1px solid var(--rule); }
  .wd-meta b{ display:block; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink); margin-bottom:4px; }
  @media (max-width:800px){ .wd-deck{ grid-template-columns:1fr; padding:44px 22px 20px; } .wd-meta{ margin:0 22px; } }

  /* ── The Challenge / Our Solution, side by side ──────────────────── */
  .wd-pair{ display:grid; grid-template-columns:1fr 1fr; gap:64px; margin:96px 80px 0; }
  .wd-pair-col p{ margin:0 0 16px; font-size:17px; line-height:1.55; }
  .wd-pair-col .wd-h2{ margin-bottom:16px; }
  @media (max-width:900px){ .wd-pair{ grid-template-columns:1fr; gap:48px; margin:64px 22px 0; } }

  /* ── KPI strip ───────────────────────────────────────────────────── */
  .wd-kpis{ display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin:56px 80px 0; }
  @media (max-width:900px){ .wd-kpis{ grid-template-columns:repeat(2,1fr); margin:40px 22px 0; } }
  .wd-kpi{ border-top:1px solid var(--ink); padding-top:14px; }
  .wd-kpi .v{ font-size:56px; font-weight:300; letter-spacing:-.03em; line-height:1; font-variant-numeric:tabular-nums; }
  .wd-kpi .l{ font-size:14px; color:var(--muted); margin-top:8px; }

  /* ── Frames: the one rule for every image ────────────────────────── */
  .wd-media{ margin:72px 80px 0; padding:0; }
  .wd-frame{ position:relative; border-radius:var(--r); overflow:hidden;
    border:1px solid rgba(31,31,26,.14); background:#F4F3EF; }
  .wd-frame img{ display:block; width:100%; height:auto; }
  .wd-figbtn{ display:block; width:100%; padding:0; border:0; background:none; cursor:zoom-in; }
  .wd-grid{ display:grid; gap:16px; }
  .wd-grid .wd-frame{ aspect-ratio:var(--ar,1.6); }
  .wd-grid .wd-frame img{ height:100%; object-fit:cover; object-position:top left; }
  .wd-grid.n2{ grid-template-columns:1fr 1fr; } .wd-grid.n3{ grid-template-columns:repeat(3,1fr); }
  .wd-grid.n4{ grid-template-columns:repeat(4,1fr); }
  /* Portrait screens (phones) never take a half-page column: they sit at
     phone width, centred, however many there are. A lone phone likewise. */
  .wd-grid.tall{ grid-template-columns:repeat(var(--n),minmax(0,300px)); justify-content:center; gap:24px; }
  .wd-media.tall1 .wd-frame{ max-width:320px; margin:0 auto; }
  /* A landscape and a portrait together: columns proportional to each
     image's ratio, each frame at its own ratio, so both share one height
     and neither is cropped. */
  .wd-grid.mixed{ grid-template-columns:var(--cols); }
  .wd-grid.mixed .wd-frame{ aspect-ratio:var(--own); }
  .wd-media.sheet .wd-frame{ max-width:760px; margin:0 auto; }
  .wd-media.tall1 figcaption{ text-align:center; }
  .wd-media figcaption{ grid-column:1/-1; font-size:13px; color:var(--muted); margin-top:14px; line-height:1.45; }
  .wd-zoom{ position:absolute; top:12px; right:12px; z-index:2; width:34px; height:34px; display:grid; place-items:center;
    border-radius:8px; cursor:pointer; border:1px solid rgba(31,31,26,.14); background:rgba(255,255,255,.9);
    color:var(--ink); opacity:.75; transition:opacity .18s ease; }
  .wd-frame:hover .wd-zoom{ opacity:1; }
  .wd-zoom:focus-visible{ outline:2px solid var(--acc); outline-offset:2px; opacity:1; }
  @media (max-width:800px){ .wd-media{ margin:44px 22px 0; } .wd-grid.n3, .wd-grid.n4{ grid-template-columns:1fr 1fr; } }
  @media (max-width:520px){ .wd-grid.n2, .wd-grid.n3, .wd-grid.n4{ grid-template-columns:1fr; } }

  /* Filmstrip: every screen in order, sideways scroll in its own box. */
  .wd-film-wrap{ overflow-x:auto; padding:0 0 16px; scroll-snap-type:x proximity; }
  .wd-film{ list-style:none; margin:0; padding:0; display:flex; width:max-content; gap:16px; }
  .wd-film li{ width:220px; flex:none; scroll-snap-align:start; }
  .wd-film .n{ font-size:11px; letter-spacing:.14em; color:var(--acc); font-weight:700; }
  .wd-film .tag{ font-size:9.5px; letter-spacing:.14em; margin-left:8px; background:var(--ink); color:#F2D50F; padding:3px 7px; border-radius:4px; vertical-align:1px; }
  .wd-film .wd-frame{ margin-top:10px; aspect-ratio:9/19; }
  .wd-film .wd-frame img{ height:100%; object-fit:cover; object-position:top; }
  .wd-film .t{ font-weight:700; font-size:14px; margin:12px 0 0; }
  .wd-film .d{ font-size:13px; color:var(--muted); margin:2px 0 0; }
  .wd-film-hint{ font-size:12.5px; color:var(--muted); margin:0 80px; }
  @media (max-width:800px){ .wd-film-hint{ margin:0 22px; } }

  /* ── Text blocks: the reference's narrow centred column ──────────── */
  .wd-text{ max-width:842px; margin:96px auto 0; padding:0 22px; transform:translateX(-60px); }
  @media (max-width:1100px){ .wd-text{ transform:none; } }
  @media (max-width:800px){ .wd-text{ margin-top:64px; } }
  .wd-h2{ margin:0 0 18px; font-size:36px; font-weight:300; letter-spacing:.01em; text-transform:uppercase; line-height:1.1; color:var(--ink); }
  .wd-h2 .n{ color:var(--muted); margin-right:14px; }
  .wd-h3{ margin:26px 0 10px; font-size:18px; font-weight:700; }
  .wd-text p{ margin:0 0 18px; }
  .wd-ul{ margin:0 0 18px; padding:0; list-style:none; }
  .wd-ul li{ margin:0 0 12px; padding-left:22px; position:relative; }
  .wd-ul li::before{ content:""; position:absolute; left:0; top:.62em; width:8px; height:8px; border-radius:50%; background:var(--acc); }
  .wd-ol{ margin:0; padding:0; list-style:none; counter-reset:k; }
  .wd-ol li{ counter-increment:k; margin:0 0 12px; padding-left:40px; position:relative; }
  .wd-ol li::before{ content:counter(k) "."; position:absolute; left:0; top:0; font-weight:700; color:var(--acc); }

  /* ── Exhibits: scannable, not read ───────────────────────────────── */
  .wd-cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin:8px 0 8px; }
  @media (max-width:760px){ .wd-cards{ grid-template-columns:1fr; } }
  .wd-card{ border-top:1px solid var(--ink); padding-top:12px; }
  .wd-card b{ display:block; font-size:16px; margin-bottom:6px; }
  .wd-card span{ font-size:15px; color:var(--muted); line-height:1.5; display:block; }
  .wd-findings{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin:8px 0 24px; }
  @media (max-width:760px){ .wd-findings{ grid-template-columns:1fr 1fr; } }
  @media (max-width:480px){ .wd-findings{ grid-template-columns:1fr; } }
  .wd-finding{ border-top:1px solid var(--ink); padding-top:12px; }
  .wd-finding .v{ font-size:30px; font-weight:300; letter-spacing:-.02em; line-height:1; font-variant-numeric:tabular-nums; }
  .wd-finding .l{ font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:var(--acc); font-weight:700; margin-top:6px; }
  .wd-finding .d{ font-size:14.5px; color:var(--muted); line-height:1.45; margin-top:6px; }
  .wd-tablewrap{ overflow-x:auto; margin:8px 0 24px; }
  .wd-table{ width:100%; border-collapse:collapse; min-width:560px; }
  .wd-table th, .wd-table td{ text-align:left; padding:12px 16px 12px 0; vertical-align:top; border-bottom:1px solid var(--rule); font-size:15px; line-height:1.45; }
  .wd-table thead th{ font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); font-weight:700; border-bottom:1px solid var(--ink); }
  .wd-table tbody th{ width:26%; }
  .wd-table tbody th b{ display:block; } .wd-table tbody th span{ font-size:12px; color:var(--acc); letter-spacing:.06em; text-transform:uppercase; }
  .wd-setup{ display:flex; flex-wrap:wrap; gap:8px 28px; margin:20px 0 28px; padding:14px 0; border-top:1px solid var(--rule); border-bottom:1px solid var(--rule); }
  .wd-setup > div{ display:flex; align-items:baseline; gap:6px; }
  .wd-setup .v{ font-size:15px; font-weight:700; } .wd-setup .l{ font-size:13px; color:var(--muted); }
  .wd-results{ display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin:8px 0 24px; }
  @media (max-width:760px){ .wd-results{ grid-template-columns:repeat(2,1fr); } }
  .wd-results > div{ border-top:1px solid var(--ink); padding-top:12px; }
  .wd-results .v{ font-size:40px; font-weight:300; letter-spacing:-.03em; line-height:1; font-variant-numeric:tabular-nums; white-space:nowrap; }
  .wd-results .v small{ font-size:.5em; color:var(--muted); margin:0 4px; font-weight:400; }
  .wd-results .l{ font-size:14px; margin-top:6px; } .wd-results .s{ font-size:12.5px; color:var(--acc); margin-top:2px; font-weight:700; }
  .wd-friction{ display:grid; grid-template-columns:1fr 1fr; gap:24px; margin:8px 0 24px; }
  @media (max-width:760px){ .wd-friction{ grid-template-columns:1fr; } }
  .wd-fr{ border-top:1px solid var(--ink); padding-top:12px; }
  .wd-fr b{ display:block; font-size:16px; margin-bottom:8px; }
  .wd-fr p{ font-size:14.5px; color:var(--muted); line-height:1.5; margin:0 0 8px; }
  .wd-fr p em{ font-style:normal; font-weight:700; color:var(--ink); }
  /* The eleven steps as one strip. */
  .wd-steps{ list-style:none; margin:8px 0 24px; padding:0; display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
  @media (max-width:700px){ .wd-steps{ grid-template-columns:repeat(2,1fr); } }
  .wd-steps li{ background:#fff; border:1px solid var(--rule); border-radius:10px; padding:12px 14px; font-size:14px; }
  .wd-steps li.hand{ background:#FFF9D6; }
  .wd-steps .n{ font-size:11px; letter-spacing:.14em; color:var(--acc); font-weight:700; display:block; }
  .wd-steps .h{ font-size:9.5px; letter-spacing:.14em; color:var(--muted); margin-left:6px; }

  .wd .cd-thanks{ margin-top:120px; }
`;

/* A screen in a frame, opening in the shared Lightbox. */
export function Frame({ src, alt, cap }) {
  const { open } = useLightbox();
  const show = () => open({ src, alt, caption: cap || alt });
  return (
    <div className="wd-frame">
      <button type="button" className="wd-figbtn" onClick={show}>
        <VaultImage src={src} alt={alt} loading="lazy" />
      </button>
      <span
        className="wd-zoom"
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

/* One screen, or a grid of them sharing a height. `ratios` maps src to its
   real width/height; the grid takes the widest so nothing wide is cropped. */
export function Media({ items, cap, ratios }) {
  const n = items.length;
  const tall = items.every((it) => (ratios[it.src] || 1.6) < 1);
  if (n === 1) {
    return (
      <Reveal>
        <figure className={items[0].sheet ? "wd-media sheet" : tall ? "wd-media tall1" : "wd-media"}>
          <Frame src={items[0].src} alt={items[0].alt} cap={cap} />
          {cap ? <figcaption>{cap}</figcaption> : null}
        </figure>
      </Reveal>
    );
  }
  const rs = items.map((it) => ratios[it.src] || 1.6);
  const ar = Math.max(...rs);
  const mixed = Math.max(...rs) / Math.min(...rs) > 1.5;
  if (mixed) {
    return (
      <Reveal>
        <figure className={`wd-media wd-grid n${n} mixed`} style={{ "--cols": rs.map((r) => `${r.toFixed(4)}fr`).join(" ") }}>
          {items.map((it, i) => (
            <div key={it.src} style={{ "--own": rs[i].toFixed(4) }} className="wd-own">
              <Frame src={it.src} alt={it.alt} cap={cap} />
            </div>
          ))}
          {cap ? <figcaption>{cap}</figcaption> : null}
        </figure>
      </Reveal>
    );
  }
  return (
    <Reveal>
      <figure className={`wd-media wd-grid n${n}${tall ? " tall" : ""}`} style={{ "--ar": ar.toFixed(4), "--n": n }}>
        {items.map((it) => <Frame key={it.src} src={it.src} alt={it.alt} cap={cap} />)}
        {cap ? <figcaption>{cap}</figcaption> : null}
      </figure>
    </Reveal>
  );
}

/* Every screen of a journey in order, scrolling sideways. */
export function Film({ screens, hint }) {
  return (
    <Reveal>
      <figure className="wd-media">
        <div className="wd-film-wrap">
          <ol className="wd-film" aria-label="The journey in order">
            {screens.map((sc, i) => (
              <li key={sc.src}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                {sc.hand ? <span className="tag">HANDOFF</span> : null}
                <Frame src={sc.src} alt={sc.t} />
                <p className="t">{sc.t}</p>
                <p className="d">{sc.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </figure>
      {hint ? <p className="wd-film-hint">{hint}</p> : null}
    </Reveal>
  );
}

export function Kpis({ items }) {
  return (
    <Reveal className="wd-kpis">
      {items.map(([v, l]) => <div className="wd-kpi" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>)}
    </Reveal>
  );
}

export function Pair({ sections }) {
  return (
    <Reveal className="wd-pair">
      {sections.map((s) => (
        <div className="wd-pair-col" key={s.h}>
          <h2 className="wd-h2">{s.h}</h2>
          {(s.ps || []).map((t) => <p key={t.slice(0, 24)}>{rich(t)}</p>)}
        </div>
      ))}
    </Reveal>
  );
}

/* A numbered text block. Renders whichever exhibit keys the section has. */
export function TextBlock({ s }) {
  return (
    <Reveal className="wd-text">
      <h2 className="wd-h2">{s.n ? <span className="n">{s.n}</span> : null}{s.h}</h2>
      {s.p ? <p>{rich(s.p)}</p> : null}
      {(s.ps || []).map((t) => <p key={t.slice(0, 24)}>{rich(t)}</p>)}
      {s.cards ? (
        <div className="wd-cards">{s.cards.map(([t, d]) => <div className="wd-card" key={t}><b>{t}</b><span>{d}</span></div>)}</div>
      ) : null}
      {s.sub ? <h3 className="wd-h3">{s.sub}</h3> : null}
      {s.bullets ? <ul className="wd-ul">{s.bullets.map(([k, v]) => <li key={k}><b>{k}</b> {rich(v)}</li>)}</ul> : null}
      {s.numbered ? <ol className="wd-ol">{s.numbered.map(([k, v]) => <li key={k}><b>{k}</b> {rich(v)}</li>)}</ol> : null}
      {s.findingsTitle ? <h3 className="wd-h3">{s.findingsTitle}</h3> : null}
      {s.findings ? (
        <div className="wd-findings">{s.findings.map(([v, l, d]) => <div className="wd-finding" key={l}><div className="v">{v}</div><div className="l">{l}</div><div className="d">{d}</div></div>)}</div>
      ) : null}
      {s.stepsTitle ? <h3 className="wd-h3">{s.stepsTitle}</h3> : null}
      {s.steps ? (
        <ol className="wd-steps">
          {s.steps.map((t, i) => {
            const hand = (s.handoffSteps || []).includes(i + 1);
            return <li key={t} className={hand ? "hand" : undefined}><span className="n">{String(i + 1).padStart(2, "0")}{hand ? <span className="h">HANDOFF</span> : null}</span>{t}</li>;
          })}
        </ol>
      ) : null}
      {s.personasTitle ? <h3 className="wd-h3">{s.personasTitle}</h3> : null}
      {s.personaRows ? (
        <div className="wd-tablewrap"><table className="wd-table">
          <thead><tr><th>Persona</th><th>Needs to</th><th>Held back by</th></tr></thead>
          <tbody>{s.personaRows.map(([n, r, need, pain]) => <tr key={n}><th><b>{n}</b><span>{r}</span></th><td>{need}</td><td>{pain}</td></tr>)}</tbody>
        </table></div>
      ) : null}
      {s.setup ? <div className="wd-setup">{s.setup.map(([v, l]) => <div key={v + l}><div className="v">{v}</div><div className="l">{l}</div></div>)}</div> : null}
      {s.resultsTitle ? <h3 className="wd-h3">{s.resultsTitle}</h3> : null}
      {s.results ? (
        <div className="wd-results">
          {s.results.map(([v, l, sub, from]) => (
            <div key={l}>
              <div className="v">{from ? <>{from}<small>→</small>{v}</> : v}</div>
              <div className="l">{l}</div>
              {sub ? <div className="s">{sub}</div> : null}
            </div>
          ))}
        </div>
      ) : null}
      {s.frictionTitle ? <h3 className="wd-h3">{s.frictionTitle}</h3> : null}
      {s.friction ? (
        <div className="wd-friction">
          {s.friction.map(([t, found, fixed]) => <div className="wd-fr" key={t}><b>{t}</b><p><em>Found.</em> {found}</p><p><em>Fixed.</em> {fixed}</p></div>)}
        </div>
      ) : null}
    </Reveal>
  );
}
