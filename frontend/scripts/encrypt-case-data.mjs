// Encrypts the confidential case-study data modules to public/locked/<slug>.enc.
// Runs on prestart + prebuild so both the dev server and production builds
// serve the written case-study content only as ciphertext. The editable
// plaintext source stays in src/data/*Case.js (private repo), which the app
// itself never imports.
import { mkdirSync, writeFileSync, copyFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { loadPassword, deriveKey, encryptBytes } from "./vaultCrypto.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCES = {
  finvista: { file: "src/data/finvistaCase.js", exportName: "finvista" },
  aurora: { file: "src/data/auroraCase.js", exportName: "aurora" },
  joat: { file: "src/data/joatCase.js", exportName: "joat" },
};

const key = await deriveKey(loadPassword());
const outDir = join(ROOT, "public", "locked");
mkdirSync(outDir, { recursive: true });

for (const [slug, { file, exportName }] of Object.entries(SOURCES)) {
  // The data files use ESM syntax but live in a CJS package; import via a
  // temporary .mjs copy.
  const tmp = join(tmpdir(), `case-${slug}-${Date.now()}.mjs`);
  copyFileSync(join(ROOT, file), tmp);
  const mod = await import(`file://${tmp}`);
  rmSync(tmp, { force: true });
  const data = mod[exportName];
  if (!data) throw new Error(`${file} does not export "${exportName}"`);
  const payload = await encryptBytes(key, new TextEncoder().encode(JSON.stringify(data)));
  writeFileSync(join(outDir, `${slug}.enc`), payload);
  console.log(`locked/${slug}.enc  (${(payload.length / 1024).toFixed(1)} KB)`);
}
console.log("case data encrypted.");
