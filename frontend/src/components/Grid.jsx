import { cn } from "../lib/utils";

/**
 * 12-column layout primitives — the single source of truth for horizontal
 * alignment across the site.
 *
 * Container: consistent outer margins (matches the site's px-6/md:10/lg:16
 *   rhythm) plus a max-width cap so content stays gridded on ultra-wide
 *   screens. Everything that should align to the page edges lives inside one.
 *
 * Grid: a 12-column CSS grid with a uniform gutter. Children opt into widths
 *   with Tailwind col-span-* utilities (e.g. col-span-12 md:col-span-6).
 *   Because every Grid shares the same column count and gutter, a col-span-6
 *   block on one page lines up pixel-for-pixel with a col-span-6 on another.
 */

export const GRID_GUTTER = "gap-x-6 lg:gap-x-8";

export function Container({ as: As = "div", className = "", children, ...rest }) {
  return (
    <As
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-6 md:px-10 lg:px-16",
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
