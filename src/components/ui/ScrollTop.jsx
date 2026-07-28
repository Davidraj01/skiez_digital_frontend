import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // useLayoutEffect prevents a flash at the old scroll position
  useLayoutEffect(() => {
    if (hash) return; // allow in-page #hash links to work normally
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  // If you DO use #hash links and want smooth scroll to the target
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return null;
}
