// Client-side vault for the confidential case studies (FinVista, Aurora,
// Jack of All Threads). The deployed site serves their written content and
// screenshots as AES-256-GCM ciphertext; this module decrypts them in the
// browser after the visitor enters the password on the case-study gate.
//
// How the pieces fit:
// - frontend/scripts/encrypt-case-data.mjs (prestart/prebuild) encrypts each
//   study's data module to public/locked/<slug>.enc.
// - frontend/scripts/encrypt-build.mjs (postbuild) encrypts the screenshot
//   files inside build/{finvista,aurora,joat}/ (cover.jpg stays plain — it is
//   the public card teaser).
// - Both use the same format: "CSE1" magic + 12-byte IV + ciphertext, with the
//   key derived from the password via PBKDF2 (fixed public salt below, 150k
//   iterations, SHA-256). The salt is not a secret; the password is.
//
// The unlock is EPHEMERAL by design (Faraz's requirement): the derived key and
// decrypted object URLs live in module memory only and are wiped by
// clearVault() when the visitor leaves the case study. Nothing is persisted.
//
// There is deliberately no password or password-hash in this file: the only
// unlock check is whether AES-GCM authentication succeeds.

const MAGIC = "CSE1";
const SALT = "khanfaraz.in/case-vault/v1"; // public KDF salt, not a secret
const LOCKED = new Set(["finvista", "aurora", "joat"]);
const LOCKED_PREFIX = /^\/(finvista|aurora|joat)\//;
const DEV = process.env.NODE_ENV === "development";

const MIME = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  webp: "image/webp",
  gif: "image/gif",
};

let vaultKey = null; // CryptoKey while a locked study is open
let urlCache = new Map(); // src -> Promise<objectURL|src>

export function isLocked(slug) {
  return LOCKED.has(slug);
}

async function deriveKey(password) {
  const enc = new TextEncoder();
  const base = await crypto.subtle.importKey(
    "raw",
    enc.encode((password || "").trim()),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode(SALT), iterations: 150000, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
}

function splitPayload(buf) {
  const bytes = new Uint8Array(buf);
  const magic = new TextDecoder().decode(bytes.slice(0, 4));
  if (magic !== MAGIC) return null;
  return { iv: bytes.slice(4, 16), ct: bytes.slice(16) };
}

async function decryptPayload(key, buf) {
  const parts = splitPayload(buf);
  if (!parts) throw new Error("not-encrypted");
  return crypto.subtle.decrypt({ name: "AES-GCM", iv: parts.iv }, key, parts.ct);
}

/**
 * Attempt to unlock a locked case study. Returns the decrypted case data
 * object on success, or null when the password is wrong (AES-GCM auth
 * failure) or the payload is missing. On success the derived key stays in
 * module memory so images can decrypt on demand.
 */
export async function unlockCase(slug, password) {
  try {
    const res = await fetch(`/locked/${slug}.enc`, { cache: "no-store" });
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    const key = await deriveKey(password);
    const plain = await decryptPayload(key, buf);
    const data = JSON.parse(new TextDecoder().decode(plain));
    vaultKey = key;
    return data;
  } catch {
    return null;
  }
}

/** Wipe the key + decrypted object URLs. Called when the gate unmounts. */
export function clearVault() {
  vaultKey = null;
  for (const p of urlCache.values()) {
    Promise.resolve(p).then((u) => {
      if (typeof u === "string" && u.startsWith("blob:")) URL.revokeObjectURL(u);
    });
  }
  urlCache = new Map();
}

/** True for paths that ship encrypted in production (needs the vault key). */
export function isVaultPath(src) {
  return needsVault(src);
}

function needsVault(src) {
  if (DEV) return false;
  if (typeof src !== "string" || !LOCKED_PREFIX.test(src)) return false;
  if (src.endsWith("cover.jpg")) return false; // public card teaser stays plain
  return true;
}

/**
 * Resolve an image path to something an <img> can render. Plain paths pass
 * straight through; encrypted paths fetch + decrypt to an object URL (cached
 * per session). Falls back to the raw path if the file turns out to be plain.
 */
export function resolveImage(src) {
  if (!needsVault(src)) return Promise.resolve(src);
  if (urlCache.has(src)) return urlCache.get(src);
  const p = (async () => {
    const res = await fetch(src);
    if (!res.ok) return src;
    const buf = await res.arrayBuffer();
    if (!splitPayload(buf)) return src; // plaintext file — serve as-is
    if (!vaultKey) throw new Error("vault-locked");
    const plain = await decryptPayload(vaultKey, buf);
    const ext = src.split(".").pop().toLowerCase();
    const blob = new Blob([plain], { type: MIME[ext] || "application/octet-stream" });
    return URL.createObjectURL(blob);
  })().catch(() => undefined);
  urlCache.set(src, p);
  return p;
}
