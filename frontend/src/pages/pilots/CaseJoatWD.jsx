import { useCaseData } from "../../components/CaseStudyGate";
import VaultImage from "../../components/VaultImage";
import Reveal from "../../components/Reveal";
import CaseTopBar from "../../components/CaseTopBar";
import Seo from "../../components/Seo";
import { rich, Thanks } from "./deckParts";
import { DECK_CSS } from "./caseDeck";
import { wdCss, Media, Kpis, Pair, TextBlock } from "./caseWD";

/* JACK OF ALL THREADS on the shared rhythm (see pilots/caseWD.jsx), 2026-09-25.
   Driven by `joat.v2` through useCaseData(), so this bundle ships no
   confidential text; the slide-band page it replaces is in git history.

   THE ANONYMISATION IS REVERSED (2026-09-25, Faraz's call: the company no
   longer trades). Real name, real press, real partners. This page carries
   the ORIGINAL case study's content and its original posture: no invented
   numbers. The KPI strip holds structural facts about the product, and the
   press record is the only performance-adjacent claim, kept in its own
   band because it is the part anyone can independently check. */

const ACCENT = "#F25C4D";

/* width / height of every file this page shows, measured with PIL. */
const RATIO = {
  "/joat/01-homepage.jpg": 0.3571,
  "/joat/02-design-studio.jpg": 1.6092,
  "/joat/03-set-price.jpg": 1.6092,
  "/joat/04-add-description.jpg": 1.6092,
  "/joat/05-campaign.jpg": 1.6092,
  "/joat/06-dashboard.jpg": 1.5184,
  "/joat/07-payout.jpg": 1.7327,
  "/joat/08-stories.jpg": 0.7403,
  "/joat/10-account.jpg": 1.7327,
  "/joat/ia.svg": 1.9286,
  "/joat/flow.svg": 2.4545,
  "/joat/wf-studio.svg": 1.8621,
  "/joat/wf-campaign.svg": 1.8621,
  "/joat/wf-home.svg": 1.8621,
};

const NEXT_WORK = [
  ["/case/finvista", "/finvista/cover.jpg", "FinVista", "Assisted lending"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
];

export default function CaseJoatWD() {
  const tf = useCaseData();
  const v = tf.v2;

  return (
    <div className="wd cd" style={{ "--acc": ACCENT }} data-testid="joat-wd">
      <Seo title="Jack of All Threads case study" description={v.deck} />
      <style>{DECK_CSS}</style>
      <style>{wdCss(ACCENT)}</style>
      <CaseTopBar accent={ACCENT} />

      <div className="wd-wrap">
        <section className="wd-hero">
          <VaultImage src={v.cover} alt="Jack of All Threads" />
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
            {(s.media || []).map((m, i) => <Media key={i} items={m.items} cap={m.cap} ratios={RATIO} />)}
            {(s.media2 || []).map((m, i) => <Media key={`b${i}`} items={m.items} cap={m.cap} ratios={RATIO} />)}
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
