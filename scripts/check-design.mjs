#!/usr/bin/env node
/**
 * Design-system guard (see DESIGN.md).
 *
 * Flags, in every .js / .jsx file under src:
 *   1. raw hex colours in components (#rgb / #rrggbb)
 *   2. off-palette stock Tailwind colour utilities
 *      (blue-/green-/red-/yellow-/purple-/indigo-/slate-/gray-/stone- …)
 *
 * Colours must come from the brand tokens (primary / secondary / tertiary /
 * paper / ink / line). This exists so generic AI defaults can't creep back in.
 *
 * Existing violations are tracked debt, cleaned up phase by phase — the count
 * should only ever go down. Run: `npm run lint:design`.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = "src";
const EXTS = new Set([".js", ".jsx"]);

const HEX = /#[0-9a-fA-F]{3,8}\b/g;
const OFF_PALETTE =
  /\b(?:bg|text|border|from|to|via|ring|fill|stroke|accent|decoration|divide|outline|shadow)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}\b/g;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (EXTS.has(extname(p))) out.push(p);
  }
  return out;
}

const files = walk(ROOT);
const perFile = [];
let total = 0;

for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  const hits = [];
  lines.forEach((line, i) => {
    const hex = line.match(HEX) || [];
    const off = line.match(OFF_PALETTE) || [];
    for (const m of [...hex, ...off]) {
      hits.push({ line: i + 1, token: m });
    }
  });
  if (hits.length) {
    perFile.push({ file, hits });
    total += hits.length;
  }
}

if (total === 0) {
  console.log("✓ design-lint: no raw hex or off-palette colours in src/");
  process.exit(0);
}

perFile.sort((a, b) => b.hits.length - a.hits.length);
console.log(`\ndesign-lint: ${total} violations in ${perFile.length} files`);
console.log("(brand tokens only — see DESIGN.md; tracked debt, drive to 0)\n");
for (const { file, hits } of perFile) {
  console.log(`  ${file}  —  ${hits.length}`);
  for (const h of hits.slice(0, 6)) {
    console.log(`      L${h.line}: ${h.token}`);
  }
  if (hits.length > 6) console.log(`      … +${hits.length - 6} more`);
}
console.log("");
process.exit(1);
