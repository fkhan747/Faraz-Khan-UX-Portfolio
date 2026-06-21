import { useEffect } from "react";

/**
 * Lightweight per-page SEO. Sets the document title + meta description and
 * Open Graph / Twitter tags on mount. Combined with prerendering (react-snap),
 * each route ships static HTML with its own title + description for crawlers
 * and link unfurls. No external dependency.
 */
const NAME = "Faraz Khan";
const SITE = "https://www.khanfaraz.in";
const DEFAULT_DESC =
  "Senior UX Lead with 12+ years bridging design, data, and development. Enterprise platforms, design systems, and AI-native product concepts.";
const OG_IMAGE = `${SITE}/images/faraz.jpg`;

function upsert(selector, attr, key, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({ title, description = DEFAULT_DESC, image = OG_IMAGE }) {
  useEffect(() => {
    const full = title ? `${title} · ${NAME}` : `${NAME} · Senior UX Lead`;
    document.title = full;
    // Per-page canonical URL. pathname is correct during react-snap prerender;
    // pairing it with the fixed production origin avoids baking in localhost.
    // Normalised to a trailing slash to match Netlify's served URLs.
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const url = SITE + (path.endsWith("/") ? path : `${path}/`);
    upsert('meta[name="description"]', "name", "description", description);
    upsert('meta[property="og:title"]', "property", "og:title", full);
    upsert('meta[property="og:description"]', "property", "og:description", description);
    upsert('meta[property="og:type"]', "property", "og:type", "website");
    upsert('meta[property="og:url"]', "property", "og:url", url);
    upsert('meta[property="og:image"]', "property", "og:image", image);
    upsertLink("canonical", url);
    upsert('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsert('meta[name="twitter:title"]', "name", "twitter:title", full);
    upsert('meta[name="twitter:description"]', "name", "twitter:description", description);
  }, [title, description, image]);
  return null;
}
