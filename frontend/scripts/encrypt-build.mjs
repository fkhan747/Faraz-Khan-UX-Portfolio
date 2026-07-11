// Post-build vault step (runs after react-snap):
// 1. Encrypts every screenshot in build/{finvista,aurora,joat}/ in place
//    (cover.jpg excluded — it is the public card teaser), so the deployed
//    site serves those files as AES-GCM ciphertext.
// 2. Leak check: samples long strings from each study's decrypted data and
//    asserts none of them appear anywhere in the built JS/HTML. Fails the
//    build loudly if confidential text would ship in plaintext.
import { readFileSync, writeFileSync, readdirSync, statSync, copyFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";
import { tmpdir } from "node:os";
import { loadPassword, deriveKey, encryptBytes, isEncrypted } from "./vaultCrypto.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BUILD = join(ROOT, "build");
const LOCKED_DIRS = ["finvista", "aurora", "joat"];
const PLAIN_ALLOWLIST = new Set(["cover.jpg"]);

const key = await deriveKey(loadPassword());

// --- 1. encrypt screenshots in place ---
let count = 0;
let bytes = 0;
for (const dir of LOCKED_DIRS) {
  const abs = join(BUILD, dir);
  for (const name of readdirSync(abs)) {
    const file = join(abs, name);
    if (!statSync(file).isFile() || PLAIN_ALLOWLIST.has(name)) continue;
    const buf = readFileSync(file);
    if (isEncrypted(buf)) continue; // idempotent re-runs
    writeFileSync(file, await encryptBytes(key, buf));
    count += 1;
    bytes += buf.length;
  }
}
console.log(`encrypted ${count} screenshots (${(bytes / 1024 / 1024).toFixed(1)} MB plaintext) across ${LOCKED_DIRS.join(", ")}`);

// --- 2. leak check ---
const sampleStrings = (obj, out = []) => {
  if (typeof obj === "string") {
    if (obj.length > 60) out.push(obj);
  } else if (Array.isArray(obj)) obj.forEach((v) => sampleStrings(v, out));
  else if (obj && typeof obj === "object") Object.values(obj).forEach((v) => sampleStrings(v, out));
  return out;
};
const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(js|html|json|txt|xml)$/.test(name)) out.push(p);
  }
  return out;
};

const textFiles = walk(BUILD).map((p) => ({ p, t: readFileSync(p, "utf8") }));
const leaks = [];
for (const slug of LOCKED_DIRS) {
  const tmp = join(tmpdir(), `leakcheck-${slug}-${Date.now()}.mjs`);
  copyFileSync(join(ROOT, "src", "data", `${slug}Case.js`), tmp);
  const mod = await import(`file://${tmp}`);
  rmSync(tmp, { force: true });
  const data = Object.values(mod)[0];
  const samples = sampleStrings(data).slice(0, 12);
  for (const s of samples) {
    for (const { p, t } of textFiles) {
      if (t.includes(s)) leaks.push(`${slug}: "${s.slice(0, 60)}..." found in ${relative(BUILD, p)}`);
    }
  }
}
if (leaks.length) {
  console.error("PLAINTEXT LEAKS FOUND — refusing to pass:");
  leaks.slice(0, 10).forEach((l) => console.error("  " + l));
  process.exit(1);
}
console.log("leak check passed: no confidential case text in built JS/HTML.");
