import { cn } from "../lib/utils";

/**
 * Layout primitives - the single source of truth for horizontal alignment
 * across the site.
 *
 * Container: consistent outer margins plus a max-width cap. Capped at
 *   1040px (an 8-column measure) so the page reads as a focused column
 *   instead of stretching edge to edge on wide displays.
 *
 * Grid: children still opt into widths with Tailwind col-span-* utilities
 *   against a 12-column track (col-span-6 = half, col-span-4 = a third), so
 *   existing markup keeps working; the narrower Container is what sets the
 *   8-column page measure.
 */

export const GRID_GUTTER = "gap-x-6 lg:gap-x-8";

export function Container({ as: As = "div", className = "", children, ...rest }) {
  return (
    <As
      className={cn(
        "mx-auto w-full max-w-[1040px] px-6 md:px-10",
        className
      )}
      {...rest}
    >
      {children}
    </As>
  );
}

export function Grid({ className = "", children, ...rest }) {
  return (
    <div
      className={cn("grid grid-cols-12", GRID_GUTTER, "gap-y-6", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Grid;
