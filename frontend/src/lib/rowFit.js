/**
 * rowCols(n, max) - how many columns to use so no row is left holding a single
 * item.
 *
 * Faraz's rule, 2026-08-04: never leave one component alone on its own row.
 * Content-width chips in a flex-wrap container cannot honour that, because the
 * wrap point is decided by text length. A grid with a deliberate column count
 * can.
 *
 * Walks down from `max` and returns the first column count where the remainder
 * is not exactly 1. Returns `n` when the whole set fits on one row.
 *
 *   rowCols(6) -> 3   (3 + 3, rather than 5 + 1 from flex wrapping)
 *   rowCols(5) -> 3   (3 + 2)
 *   rowCols(4) -> 4   (one row)
 *   rowCols(7) -> 4   (4 + 3)
 *   rowCols(3) -> 3   (one row)
 */
export function rowCols(n, max = 4) {
  if (!n || n <= 1) return 1;
  if (n <= max) return n;
  for (let c = max; c >= 2; c -= 1) {
    if (n % c !== 1) return c;
  }
  return max;
}

/**
 * Full responsive class string for a column count.
 *
 * These are written out as complete literals on purpose. Tailwind's JIT scans
 * source text for class names, so a template like `sm:${cols}` would never be
 * generated. Every string a caller can receive has to appear here verbatim.
 */
const COLS = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
};

export function gridColsClass(cols) {
  return COLS[cols] || COLS[3];
}
