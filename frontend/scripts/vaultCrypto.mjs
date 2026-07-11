// Shared build-time crypto for the case-study vault. Must stay format-
// compatible with src/lib/vault.js: payload = "CSE1" magic + 12-byte IV +
// AES-256-GCM ciphertext; key = PBKDF2(password, SALT, 150k, SHA-256).
// The salt is public; the password is provided via the CS_PW env var or
// frontend/.env.local (gitignored) and never lives in the repo.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const MAGIC = Buffer.from("CSE1");
const SALT = "khanfaraz.in/case-vault/v1";

export function loadPassword() {
  if (process.env.CS_PW) return process.env.CS_PW.trim();
  const envLocal = join(dirname(fileURLToPath(import.meta.url)), "..", ".env.local");
  if (existsSync(envLocal)) {
    const m = readFileSync(envLocal, "utf8").match(/^CS_PW=(.+)$/m);
    if (m) return m[1].trim();
  }
  throw new Error(
    "Vault password not found. Set CS_PW in the environment or in frontend/.env.local (CS_PW=...)."
  );
}

export async function deriveKey(password) {
  const enc = new TextEncoder();
  const base = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, [
    "deriveKey",
  ]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode(SALT), iterations: 150000, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptBytes(key, bytes) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, bytes);
  return Buffer.concat([MAGIC, Buffer.from(iv), Buffer.from(ct)]);
}

export function isEncrypted(buf) {
  return buf.length >= 4 && buf.subarray(0, 4).equals(MAGIC);
}
