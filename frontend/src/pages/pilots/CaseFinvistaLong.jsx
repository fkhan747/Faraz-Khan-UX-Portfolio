import { useCaseData } from "../../components/CaseStudyGate";
import VaultImage from "../../components/VaultImage";
import Reveal from "../../components/Reveal";
import CaseTopBar from "../../components/CaseTopBar";
import Seo from "../../components/Seo";
import { rich, Thanks } from "./deckParts";
import { DECK_CSS } from "./caseDeck";
import { wdCss, Media, Film, Kpis, Pair, TextBlock } from "./caseWD";

/* FINVISTA, on the shared WongDoody rhythm since 2026-09-13. THIS IS THE
   LIVE PAGE at /case/finvista. Same structure as AuroraCaseStudy.jsx, driven
   by `finvista.v4` through useCaseData(); see pilots/caseWD.jsx for the
   rhythm and the frame rules. The slide-band version this replaced (v3
   data) is in git history. */

const ACCENT = "#16653C";

/* width / height of every file this page shows, measured with PIL. */
const RATIO = {
  "/finvista/m3/system.png": 0.48,
  "/finvista/svg-13.svg": 1.8621,
  "/finvista/svg-15.svg": 1.8621,
  "/finvista/m3/dashboard.png": 0.4737,
  "/finvista/m3/personal.png": 0.4737,
  "/finvista/m3/employment.png": 0.4737,
  "/finvista/m3/vehicle.png": 0.4737,
  "/finvista/m3/consent.png": 0.4737,
  "/finvista/m3/kfs.png": 0.4737,
};

const NEXT_WORK = [
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

export default function CaseFinvistaLong() {
  const fv = useCaseData();
  const v = fv.v4;

  return (
    <div className="wd cd" style={{ "--acc": ACCENT }} data-testid="finvista-long">
      <Seo title="FinVista case study" description={v.deck} />
      <style>{DECK_CSS}</style>
      <style>{wdCss(ACCENT)}</style>
      <CaseTopBar accent={ACCENT} />

      <div className="wd-wrap">
        <section className="wd-hero">
          <VaultImage src={v.cover} alt="FinVista" />
          <div className="wd-hero-t">
            <p className="wd-tags">{v.tags}</p>
            <h1 className="wd-h1">{v.title[0]}<b>{v.title[1]}</b></h1>
          </div>
        </section>

        <Reveal className="wd-deck">
          <p>{rich(v.deck)}</p>
          <div className="wd-mark"><div className="m">{v.mark.m}</div><div className="s">{v.mark.s}</div></div>
        </Reveal>
        <div className="wd-meta">
          {v.facts.map((f) => <div key={f.label}><b>{f.label}</b>{f.value}</div>)}
        </div>

        <Pair sections={v.pair} />
        <Media items={v.lead.items} cap={v.lead.cap} ratios={RATIO} />
        <Kpis items={v.kpis} />

        {v.sections.map((s) => (
          <div key={s.h}>
            <TextBlock s={s} />
            {s.film ? <Film screens={s.film} hint={s.filmHint} /> : null}
            {(s.media || []).map((m, i) => <Media key={i} items={m.items} cap={m.cap} ratios={RATIO} />)}
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
