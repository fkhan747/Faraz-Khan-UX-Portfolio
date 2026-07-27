import { createContext, useContext, useEffect, useState } from "react";
import { isLocked, clearVault, unlockCase, DORMANT } from "../lib/vault";
import LockedCaseStudy from "./LockedCaseStudy";

/**
 * Wraps a locked case-study route. Renders the confidential gate until the
 * visitor enters the password; on success the decrypted case data is provided
 * to the page via context (the data ships to the browser only as ciphertext —
 * see src/lib/vault.js).
 *
 * The unlock is deliberately ephemeral: the decrypted data lives only in this
 * component's state and the vault key in module memory, both discarded when
 * you navigate away (App.js keys the gate per slug, and the unmount effect
 * wipes the vault). Every visit starts locked; react-snap's prerender only
 * ever sees the gate.
 */
const CaseDataContext = createContext(null);
export const useCaseData = () => useContext(CaseDataContext);

export default function CaseStudyGate({ slug, children }) {
  const [data, setData] = useState(null);

  useEffect(() => clearVault, []); // wipe key + object URLs on exit

  // Dormant mode: auto-load plaintext case data on mount; skip the gate UI.
  useEffect(() => {
    if (!DORMANT) return;
    let cancelled = false;
    unlockCase(slug).then((d) => { if (!cancelled) setData(d); });
    return () => { cancelled = true; };
  }, [slug]);

  if (isLocked(slug) && !data) {
    return <LockedCaseStudy slug={slug} onUnlock={setData} />;
  }
  // Dormant mode: children read useCaseData() directly, so hold render until
  // the plaintext JSON arrives (otherwise they crash on au.title).
  if (DORMANT && !data) return null;
  return <CaseDataContext.Provider value={data}>{children}</CaseDataContext.Provider>;
}
