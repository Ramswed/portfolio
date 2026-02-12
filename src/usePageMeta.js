import { useEffect } from "react";

const SITE_URL = "https://manonleroux.fr";

const upsertMeta = (selector, attributeName, attributeValue, content) => {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
};

const usePageMeta = ({ title, description, path = "/" }) => {
  useEffect(() => {
    const pageUrl = new URL(path, SITE_URL).toString();

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    upsertMeta('meta[property="og:url"]', "property", "og:url", pageUrl);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );
    upsertCanonical(pageUrl);
  }, [description, path, title]);
};

export default usePageMeta;
