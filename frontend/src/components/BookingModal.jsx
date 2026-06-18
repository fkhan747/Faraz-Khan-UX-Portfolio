import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { PROFILE } from "../data/content";

/**
 * Reusable scheduling popup. Built on the shadcn Dialog so it keeps focus-trap,
 * Esc-to-close, backdrop, and a close button for free. Renders a short greeting
 * above an embedded Cal.com / Calendly booking page (PROFILE.bookingUrl).
 *
 * Props: open (bool), onOpenChange (fn) — controlled by the trigger.
 */
export default function BookingModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[520px] bg-white rounded-2xl sm:rounded-2xl p-6">
        {/* Greeting */}
        <div className="space-y-2 pr-8">
          <DialogTitle className="font-display text-2xl md:text-3xl font-black">
            Thanks for reaching out.
          </DialogTitle>
          <DialogDescription className="text-sm text-[#5A5A5A] leading-relaxed">
            Pick whatever slot works for you below — a calendar invite and a video link land in
            your inbox the moment you book. Looking forward to talking.
          </DialogDescription>
        </div>

        {/* Embedded scheduler — scrolls internally, so no double scrollbars */}
        <iframe
          src={PROFILE.bookingUrl}
          title="Book a call"
          loading="lazy"
          className="block w-full rounded-xl"
          style={{ height: "min(78vh, 720px)", border: 0 }}
        />
      </DialogContent>
    </Dialog>
  );
}
