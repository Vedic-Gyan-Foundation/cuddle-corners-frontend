import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { PAGE_SEO, SITE_URL, DEFAULT_OG_IMAGE } from "../config/seo";

// Lightweight, dependency-free head manager for this SPA. On each route it sets
// the document title, description, canonical, Open Graph and Twitter tags, and
// an optional per-page JSON-LD block. Google renders JS, so it reads these;
// static brand-level fallbacks live in index.html for non-JS social scrapers.

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
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

/**
 * @param {object}  props
 * @param {string}  props.page          key into PAGE_SEO
 * @param {string} [props.canonicalPath] override the canonical path (e.g. a
 *                                        duplicate route pointing at its primary)
 * @param {string} [props.image]        social-share image URL
 * @param {object} [props.jsonLd]       structured data to inject for this page
 */
function Seo({ page, canonicalPath, image = DEFAULT_OG_IMAGE, jsonLd }) {
  const { pathname } = useLocation();
  const meta = PAGE_SEO[page];

  const path = canonicalPath ?? pathname;
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  useEffect(() => {
    if (!meta) return;
    const { title, description } = meta;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", url);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Cuddle Corners");
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    const id = "page-jsonld";
    let script = document.getElementById(id);
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    // Drop any page-specific JSON-LD when navigating away.
    return () => {
      const stale = document.getElementById(id);
      if (stale) stale.remove();
    };
  }, [meta, url, image, jsonLd]);

  return null;
}

export default Seo;
