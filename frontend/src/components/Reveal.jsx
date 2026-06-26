import { motion, useReducedMotion } from "framer-motion";

/* Scroll-reveal primitive. One-shot entrance: fade + a small rise as the
   element scrolls into view. Craft bar (Emil Kowalski):
   - strong custom ease-out curve, not the weak CSS default
   - explanatory/marketing pacing (~0.5s), fine for once-only reveals
   - only opacity + transform animate (GPU; no layout thrash)
   - prefers-reduced-motion keeps the fade, drops the movement
   Group stagger: render siblings with delay={i * 0.06}. */

const EASE = [0.23, 1, 0.32, 1]; // strong ease-out

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 18,
  duration = 0.55,
  once = true,
  amount = "some",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };
  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once, margin: "-80px", amount }}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
