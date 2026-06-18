import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Small copy-to-clipboard control shown next to email / phone mentions.
 * Renders a copy icon that flips to a check for ~1.6s after a successful copy.
 */
export default function CopyButton({ value, label = "value", size = 16, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for browsers without the async clipboard API
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* no-op */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `copied ${label}` : `copy ${label}`}
      title={copied ? "copied" : `copy ${label}`}
      data-testid="copy-button"
      className={cn(
        "inline-flex items-center justify-center flex-shrink-0 rounded-full transition-colors",
        className
      )}
    >
      {copied ? <Check size={size} /> : <Copy size={size} />}
    </button>
  );
}
