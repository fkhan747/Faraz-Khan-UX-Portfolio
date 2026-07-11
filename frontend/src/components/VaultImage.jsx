import { useEffect, useState } from "react";
import { resolveImage, isVaultPath } from "../lib/vault";

// 1x1 transparent placeholder shown while an encrypted image decrypts.
const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/**
 * Resolve a possibly-encrypted image path to a renderable URL. Plain paths
 * resolve synchronously (no flash); encrypted paths resolve async via the
 * vault (fetch → AES-GCM decrypt → object URL).
 */
export function useVaultSrc(src) {
  const [url, setUrl] = useState(() => (isVaultPath(src) ? undefined : src));
  useEffect(() => {
    if (!isVaultPath(src)) {
      setUrl(src);
      return undefined;
    }
    let alive = true;
    setUrl(undefined);
    Promise.resolve(resolveImage(src)).then((u) => {
      if (alive) setUrl(u);
    });
    return () => {
      alive = false;
    };
  }, [src]);
  return url;
}

/**
 * Drop-in <img> replacement for the locked case studies. Everything else
 * (className, loading, width/height, alt...) passes through unchanged.
 */
export default function VaultImage({ src, alt = "", ...props }) {
  const url = useVaultSrc(src);
  return <img src={url || BLANK} alt={alt} {...props} />;
}
