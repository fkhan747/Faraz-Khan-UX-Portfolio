import { Link } from "react-router-dom";
import Logo from "./Logo";

/*
 * The sticky banner every case study carries: back to the work, the monogram
 * in the middle linking home, and the wordmark on the right.
 *
 * It is painted in the case study's own brand colour. Pass `accent`, or let it
 * read --case-acc from an ancestor. Everything on it is white, so an accent
 * has to be dark enough to carry white type; every case accent in use is
 * (FinVista #16653C, Meridian #8E2131, Aurora #1A4C49, Threadfold #A63B25).
 *
 * Replaces three different top bars: the deck pages' paper-coloured cd-top,
 * the concept pages' sticky white header, and the inline back-links that
 * Aurora and Threadfold had instead of a bar.
 */

const BAR_CSS = `
  .ctb{
    position:sticky; top:0; z-index:40;
    background:var(--ctb-acc, #171512);
    border-bottom:1px solid rgba(255,255,255,.16);
  }
  .ctb-in{
    max-width:1360px; margin:0 auto; padding:12px 40px;
    display:grid; grid-template-columns:1fr auto 1fr; align-items:center;
  }
  @media (max-width:900px){ .ctb-in{ padding:10px 22px; } }
  .ctb a{ text-decoration:none; }
  .ctb-back{
    justify-self:start;
    font-family:'Outfit',sans-serif; font-size:13.5px; font-weight:500;
    color:rgba(255,255,255,.82); display:inline-flex; align-items:center; gap:7px;
    transition:color .16s ease-out;
  }
  .ctb-home{ justify-self:center; display:inline-flex; line-height:0; padding:2px; border-radius:8px; }
  .ctb-logo{ width:auto; height:26px; display:block; }
  .ctb-mark{
    justify-self:end;
    font-family:'Playfair Display',serif; font-size:17px; letter-spacing:-.02em;
    color:#fff;
  }
  /* The wordmark is a link on a coloured bar, so the global "links keep their
     own colour" rules do not reach it. Stated here instead. */
  .ctb .ctb-mark{ color:#fff; }
  .ctb-back:focus-visible, .ctb-home:focus-visible{
    outline:2px solid #fff; outline-offset:3px;
  }
  @media (hover:hover) and (pointer:fine){
    .ctb-back:hover{ color:#fff; }
    .ctb-home:hover{ background:rgba(255,255,255,.14); }
  }
  /* Narrow phones: the monogram would crowd the two labels, so it steps out
     and the bar falls back to the two-ended layout. */
  @media (max-width:520px){
    .ctb-in{ grid-template-columns:1fr auto; }
    .ctb-home{ display:none; }
  }
`;

export default function CaseTopBar({ accent, backTo = "/projects", backLabel = "All work" }) {
  return (
    <header className="ctb" style={accent ? { "--ctb-acc": accent } : undefined}>
      <style>{BAR_CSS}</style>
      <div className="ctb-in">
        <Link to={backTo} className="ctb-back" data-testid="back-link">
          <span aria-hidden="true">←</span> {backLabel}
        </Link>
        <Link to="/" className="ctb-home" aria-label="Faraz Khan, home">
          <Logo className="ctb-logo" fill="#FFFFFF" />
        </Link>
        <Link to="/" className="ctb-mark">Faraz Khan</Link>
      </div>
    </header>
  );
}
