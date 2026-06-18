import { useState } from "react";
import BookingModal from "./BookingModal";

/**
 * Drop-in trigger for the scheduling popup. Renders a <button> with whatever
 * className / children / extra props (e.g. data-testid) it's given, manages its
 * own open state, and reuses the shared <BookingModal>.
 *
 * Usage: <BookCallButton className="...">book a 30-min call →</BookCallButton>
 */
export default function BookCallButton({ className = "", children, ...rest }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} {...rest}>
        {children}
      </button>
      <BookingModal open={open} onOpenChange={setOpen} />
    </>
  );
}
