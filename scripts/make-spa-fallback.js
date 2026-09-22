// Copies dist/index.html to dist/200.html so hosts that use the
// "200.html" SPA-fallback convention (e.g. Cloudflare) serve the app
// shell — instead of a 404 — for any client-side route that isn't a
// real file on disk (e.g. /about, /admin/login).
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "..", "dist");
const src = resolve(dist, "index.html");
const dest = resolve(dist, "200.html");

if (!existsSync(src)) {
  console.error(`[make-spa-fallback] ${src} not found — did the build run?`);
  process.exit(1);
}

copyFileSync(src, dest);
console.log(`[make-spa-fallback] wrote ${dest}`);
