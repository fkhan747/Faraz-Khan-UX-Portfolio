// Encrypts the confidential case-study data modules to public/locked/<slug>.enc.
// Runs on prestart + prebuild so both the dev server and production builds
// serve the written case-study content only as ciphertext. The editable
// plaintext source stays in src/data/*Case.js (private repo), which the app
// itself never imports.
import { mkdirSync, writeFileSync, copyFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { loadPassword, deriveKey, encryptBytes, isDormant } from "./vaultCrypto.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCES = {
  finvista: { file: "src/data/finvistaCase.js", exportName: "finvista" },
  aurora: { file: "src/data/auroraCase.js", exportName: "aurora" },
  joat: { file: "src/data/joatCase.js", exportName: "joat" },
};

const DORMANT = isDormant();
const outDir = join(ROOT, "public", "locked");
mkdirSync(outDir, { recursive: true });

const key = DORMANT ? null : await deriveKey(loadPassword());
if (DORMANT) console.log("VAULT DORMANT — writing plaintext .json (no encryption).");

for (const [slug, { file, exportName }] of Object.entries(SOURCES)) {
  const tmp = join(tmpdir(), `case-${slug}-${Date.now()}.mjs`);
  copyFileSync(join(ROOT, file), tmp);
  const mod = await import(`file://${tmp}`);
  rmSync(tmp, { force: true });
  const data = mod[exportName];
  if (!data) throw new Error(`${file} does not export "${exportName}"`);

  if (DORMANT) {
    const jsonPath = join(outDir, `${slug}.json`);
    writeFileSync(jsonPath, JSON.stringify(data));
    // Remove any stale ciphertext so /locked/ can't serve a mismatched pair.
    const encPath = join(outDir, `${slug}.enc`);
    if (existsSync(encPath)) rmSync(encPath);
    console.log(`locked/${slug}.json  plaintext`);
  } else {
    const payload = await encryptBytes(key, new TextEncoder().encode(JSON.stringify(data)));
    writeFileSync(join(outDir, `${slug}.enc`), payload);
    // Remove any leftover dormant JSON so the reactivated build can't accidentally serve it.
    const jsonPath = join(outDir, `${slug}.json`);
    if (existsSync(jsonPath)) rmSync(jsonPath);
    console.log(`locked/${slug}.enc  (${(payload.length / 1024).toFixed(1)} KB)`);
  }
}
console.log(DORMANT ? "case data written plaintext (dormant)." : "case data encrypted.");
