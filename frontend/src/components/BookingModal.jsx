import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { PROFILE } from "../data/content";

/**
 * Reusable scheduling popup. Built on the shadcn Dialog so it keeps focus-trap,
 * Esc-to-close, backdrop, and a close button for free. Dark, on-brand frame with
 * an embedded Cal.com booking page (PROFILE.bookingUrl) - which points straight at
 * a single event (?theme=dark) so the booker lands on the calendar, no picker.
 *
 * Props: open (bool), onOpenChange (fn) - controlled by the trigger.
 */
export default function BookingModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[920px] w-[94vw] bg-[#15101F] border border-white/10 rounded-3xl p-6 text-[#F4F3FA]">
        {/* Greeting - matches the site's eyebrow + display type */}
        <div className="space-y-2 pr-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B]">book a call</p>
          <DialogTitle className="font-display text-2xl md:text-3xl font-black text-[#F4F3FA]">
            Thanks for reaching out.
          </DialogTitle>
          <DialogDescription className="text-sm text-[#A29CB4] leading-relaxed">
            Pick a slot below. The calendar invite and video link land in your inbox the moment you book.
          </DialogDescription>
        </div>

        {/* Embedded scheduler - dark-themed; scrolls internally, so no double scrollbars */}
        <iframe
          src={PROFILE.bookingUrl}
          title="Book a call"
          loading="lazy"
          className="block w-full rounded-xl bg-[#100210]"
          style={{ height: "min(78vh, 720px)", border: 0 }}
        />
      </DialogContent>
    </Dialog>
  );
}
