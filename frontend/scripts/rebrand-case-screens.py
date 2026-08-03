"""Replaces the client wordmark in the Threadfold case-study screenshots.

    python3 scripts/rebrand-threadfold-screens.mjs.py <src_dir> <out_dir>

The screenshots are of a real product, so the original wordmark and its
"jack of all threads" tagline appear in 16 of the 18 images. This paints them
out and draws a neutral "threadfold" lockup in their place.

The wordmark sits in one of three fixed positions, listed in PLACEMENTS below.
For each, the script samples a ring of pixels around the box:

  * low variance  -> flat header (red band, white bar, grey bar). Fill with the
    sampled colour and draw the new mark in a contrasting tone, so the patch is
    invisible.
  * high variance -> the header sits over photography. Filling flat would leave
    an obvious rectangle, so instead it lays down a solid brand-coloured chip
    with the mark reversed out, which is a normal way to put a logo on a photo.

Originals are never modified in place; everything is written to out_dir.
"""
import sys, os, glob
import numpy as np
from PIL import Image, ImageDraw, ImageFont

SRC, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)

BRAND = (214, 74, 58)           # the chip colour used over photography
FONT = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
WORD = "threadfold"

# (x0, y0, x1, y1) of the wordmark plus its tagline, per layout.
CENTRED = (262, 10, 384, 56)     # 1400px desktop, mark centred in the header
LEFT    = (8,   4, 136, 52)      # 1400px back-office screens, mark top-left
MOBILE  = (4,   4, 224, 46)      # 320px mobile screens

# Headers that sit over photography. Detection by colour spread got most of
# these but not all: a photo can be locally smooth exactly where the ring is
# sampled. These are known by inspection, so they are stated rather than
# guessed.
PHOTO = {"08-stories.jpg", "12-about.jpg", "m-about.jpg", "m-stories.jpg"}

PLACEMENTS = {
    "01-homepage-hero.jpg": CENTRED, "01-homepage.jpg": CENTRED,
    "02-design-studio.jpg": CENTRED, "03-set-price.jpg": CENTRED,
    "04-add-description.jpg": CENTRED, "05-campaign.jpg": CENTRED,
    "06-dashboard.jpg": CENTRED, "08-stories.jpg": CENTRED,
    "09-checkout.jpg": CENTRED, "11-login.jpg": CENTRED,
    "12-about.jpg": CENTRED,
    "07-payout.jpg": LEFT, "10-account.jpg": LEFT,
    "m-about.jpg": MOBILE, "m-home.jpg": MOBILE,
    "m-login.jpg": MOBILE, "m-stories.jpg": MOBILE,
}


def ring_stats(arr, box, pad=14):
    """Median colour and spread of a true ring around the box.

    The box interior is excluded. Including it was the bug in the first pass:
    a high-contrast mark on a perfectly flat header produced a large spread and
    every screen was misread as photography.
    """
    x0, y0, x1, y1 = box
    h, w = arr.shape[:2]
    # Sample only to the LEFT and RIGHT of the mark, across the same rows.
    # Sampling above and below reached into the next band down (the red hero,
    # the blue sub-bar) and made flat headers look like photographs.
    left = arr[y0:y1, max(0, x0 - pad - 40):max(0, x0 - 4)]
    right = arr[y0:y1, min(w, x1 + 4):min(w, x1 + pad + 40)]
    parts = [p.reshape(-1, 3) for p in (left, right) if p.size]
    if not parts:
        return np.array([255, 255, 255]), 99.0, 0
    ring = np.concatenate(parts)
    if len(ring) < 50:
        return np.array([255, 255, 255]), 99.0, 0
    med = np.median(ring, axis=0)
    spread = float(np.mean(np.std(ring, axis=0)))
    return med.astype(int), spread, len(ring)


def luminance(c):
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def draw_mark(im, box, fill, ink, rounded=False):
    d = ImageDraw.Draw(im)
    x0, y0, x1, y1 = box
    if rounded:
        d.rounded_rectangle([x0, y0, x1, y1], radius=6, fill=fill)
    else:
        d.rectangle([x0, y0, x1, y1], fill=fill)

    bw, bh = x1 - x0, y1 - y0
    # Largest size that still leaves a little breathing room in the box.
    size = 8
    while size < 60:
        f = ImageFont.truetype(FONT, size + 1)
        tw = d.textlength(WORD, font=f)
        if tw > bw * 0.88 or (size + 1) > bh * 0.62:
            break
        size += 1
    f = ImageFont.truetype(FONT, size)
    tw = d.textlength(WORD, font=f)
    tx = x0 + (bw - tw) / 2
    ty = y0 + (bh - size * 1.18) / 2
    d.text((tx, ty), WORD, font=f, fill=ink)


report = []
for path in sorted(glob.glob(os.path.join(SRC, "*.jpg"))):
    name = os.path.basename(path)
    im = Image.open(path).convert("RGB")
    box = PLACEMENTS.get(name)
    if not box:
        im.save(os.path.join(OUT, name), quality=92)
        report.append((name, "no mark, copied"))
        continue

    arr = np.asarray(im).astype(int)
    med, spread, _ = ring_stats(arr, box)
    photo = name in PHOTO or spread > 26

    if photo:
        draw_mark(im, box, tuple(BRAND), (255, 255, 255), rounded=True)
        how = f"chip on photo (spread {spread:.0f})"
    else:
        bg = tuple(int(v) for v in med)
        ink = (255, 255, 255) if luminance(bg) < 140 else BRAND
        draw_mark(im, box, bg, ink)
        how = f"flat {bg} (spread {spread:.0f})"

    im.save(os.path.join(OUT, name), quality=92)
    report.append((name, how))

for n, h in report:
    print(f"  {n:26s} {h}")
print(f"\n{len(report)} images written to {OUT}")
