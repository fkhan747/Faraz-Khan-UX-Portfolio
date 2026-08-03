import { Link } from "react-router-dom";
import { Maximize2 } from "lucide-react";
import { useLightbox } from "../../components/Lightbox";
import VaultImage from "../../components/VaultImage";
import PhoneFrame from "../../components/PhoneFrame";
import Reveal from "../../components/Reveal";

/* Shared building blocks for the slide-band case studies.

   Every case study is the same composition system in a different brand colour,
   so the pieces live here rather than being copied per page. Colour is never
   passed in: everything paints from `--acc`, which each page sets once on its
   root.

   Images always go through VaultImage. Plain paths pass straight through
   untouched, and the encrypted case studies (FinVista, Aurora, THREADFOLD) decrypt
   in place, so a page never has to know whether its screenshots are
   confidential. */

/* Bullets for the vault case studies come from the encrypted data module as
   plain strings, so they cannot carry JSX. `**double asterisks**` mark the lead
   phrase, and this turns it into <b>. Deliberately minimal: one marker, no
   nesting, no HTML injection. */
export function rich(text) {
  if (typeof text !== "string" || !text.includes("**")) return text;
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? <b key={i}>{part}</b> : part
  );
}

/* A figure that opens in the shared Lightbox. The expand control is always
   visible rather than hover-only, so it is discoverable on touch. */
export function Fig({ src, alt, cap, className = "cd-fig", style, children }) {
  const { open } = useLightbox();
  const show = () => open({ src, alt, caption: cap || alt });
  return (
    <figure className={className} style={style}>
      <button type="button" className="cd-figbtn" onClick={show}>
        {children || <VaultImage src={src} alt={alt} loading="lazy" />}
      </button>
      <span
        className="cd-zoom"
        role="button"
        tabIndex={0}
        aria-label={`Open ${alt} full screen`}
        onClick={show}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(); }
        }}
      >
        <Maximize2 size={15} strokeWidth={1.9} />
      </span>
      {cap ? <figcaption>{cap}</figcaption> : null}
    </figure>
  );
}

/* A wide product screen in the media half: thin white border on the brand
   panel. Deliberately not `cd-fig`, whose own border and radius would fight
   the frame. */
export function Shot({ src, alt }) {
  return (
    <div className="cd-media cd-media-shot">
      <Fig src={src} alt={alt} className="" />
    </div>
  );
}

/* One to three phone screens on the brand panel. The device bezel is the frame
   here, so these do not take the white border the wide shots use.

   The panel carries ONE expand control, not one per phone: these screens are a
   set, and expanding should show the set. The whole panel is the click target,
   and the Lightbox renders the group side by side. */
export function Phones({ items }) {
  const { open } = useLightbox();
  const w = items.length === 1 ? 288 : items.length === 2 ? 250 : 214;
  const show = () => open({ items, caption: items.map((i) => i.alt).join(" · ") });
  const label = items.length === 1
    ? `Open ${items[0].alt} full screen`
    : `Open all ${items.length} screens full screen`;
  return (
    <div className="cd-media cd-media-phones">
      <button type="button" className="cd-panel-btn" onClick={show} aria-label={label}>
        {items.map((it) => (
          <span className="cd-phone" key={it.src} style={{ maxWidth: w }}>
            <PhoneFrame src={it.src} alt={it.alt} />
          </span>
        ))}
      </button>
      <span
        className="cd-zoom cd-zoom-panel"
        role="button"
        tabIndex={0}
        aria-label={label}
        onClick={show}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(); }
        }}
      >
        <Maximize2 size={15} strokeWidth={1.9} />
      </span>
    </div>
  );
}

/* Eyebrow + big accent headline, the template's core type move. */
export function Head({ eye, children }) {
  return (
    <>
      <p className="cd-eye">{eye}</p>
      <h2 className="cd-h2">{children}</h2>
    </>
  );
}

/* Copy on one side, media on the other. `rev` flips which side. */
export function Split({ eye, title, bullets, children, rev, foot }) {
  return (
    <section className={`cd-split${rev ? " cd-split-rev" : ""}`}>
      <div className="cd-half">
        <Reveal className="cd-half-in">
          <Head eye={eye}>{title}</Head>
          <ul className="cd-ul">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          {foot ? <p className="cd-note">{foot}</p> : null}
        </Reveal>
      </div>
      {children}
    </section>
  );
}

/* Three overlapping rings, the template's "key themes" device. Painted from
   --acc so it carries the right brand colour in every case study. */
export function Venn({ labels, center }) {
  const [a, b, c] = labels;
  return (
    <svg viewBox="0 0 420 360" width="100%"
      style={{ maxWidth: 420, display: "block", margin: "0 auto" }}
      role="img" aria-label={`Three overlapping principles: ${a}, ${b} and ${c}, meeting at ${center}`}>
      <g fill="none" stroke="var(--acc)" strokeWidth="1.4" opacity=".85">
        <circle cx="150" cy="140" r="110" />
        <circle cx="270" cy="140" r="110" />
        <circle cx="210" cy="240" r="110" />
      </g>
      <g fontSize="14" fontWeight="600" fill="#171512" textAnchor="middle" fontFamily="Outfit, sans-serif">
        <text x="78" y="120">{a}</text>
        <text x="344" y="120">{b}</text>
        <text x="210" y="330">{c}</text>
      </g>
      <text x="210" y="180" fontSize="13" fontWeight="700" fill="var(--acc)" textAnchor="middle"
        fontFamily="Outfit, sans-serif">{center}</text>
    </svg>
  );
}

/* Closing band in the case study's own colour: thumbnails of the other work
   first, then the two buttons. */
export function Thanks({ items, blurb }) {
  return (
    <section className="cd-thanks">
      <div className="cd-in">
        <Reveal>
          <p className="cd-eye">Thank you</p>
          <h2 className="cd-thanks-h">Thanks for reading.</h2>
          <p className="cd-thanks-p">{blurb}</p>
        </Reveal>
        <div className="cd-next">
          {items.map(([to, img, name, kind], i) => (
            <Reveal key={to} delay={i * 0.06}>
              <Link to={to}>
                <div className="cd-next-img">
                  <img src={img} alt={`${name} case study`} loading="lazy" />
                </div>
                <div className="cd-next-t">{name}</div>
                <div className="cd-next-k">{kind}</div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="cd-end">
          <Link to="/projects" className="cd-btn">All work</Link>
          <Link to="/contact" className="cd-btn cd-btn-ghost">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
