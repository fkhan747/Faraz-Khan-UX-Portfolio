import { useEffect } from "react";

/**
 * Lightweight per-page SEO. Sets the document title + meta description and
 * Open Graph / Twitter tags on mount. Combined with prerendering (react-snap),
 * each route ships static HTML with its own title + description for crawlers
 * and link unfurls. No external dependency.
 */
const NAME = "Faraz Khan";
const DEFAULT_DESC =
  "Senior UX Lead with 12+ years bridging design, data, and development. Enterprise platforms, design systems, and AI-native product concepts.";
const OG_IMAGE = "https://www.khanfaraz.in/images/faraz.jpg";

function upsert(selector, attr, key, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description = DEFAULT_DESC, image = OG_IMAGE }) {
  useEffect(() => {
    const full = title ? `${title} · ${NAME}` : `${NAME} · Senior UX Lead`;
    document.title = full;
    upsert('meta[name="description"]', "name", "description", description);
    upsert('meta[property="og:title"]', "property", "og:title", full);
    upsert('meta[property="og:description"]', "property", "og:description", description);
    upsert('meta[property="og:type"]', "property", "og:type", "website");
    upsert('meta[property="og:image"]', "property", "og:image", image);
    upsert('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsert('meta[name="twitter:title"]', "name", "twitter:title", full);
    upsert('meta[name="twitter:description"]', "name", "twitter:description", description);
  }, [title, description, image]);
  return null;
}
