# Cut the white studio background out of the portrait -> transparent PNG.
# Edge-connected flood fill so white highlights INSIDE the face are kept.
from PIL import Image, ImageFilter
import collections

SRC = "/Users/mr.khan/ux-portfolio-2026/frontend/public/images/faraz.jpg"
OUT = "/Users/mr.khan/ux-portfolio-2026/frontend/public/images/faraz-cutout.png"

im = Image.open(SRC).convert("RGB")
w, h = im.size
px = im.load()

# BFS flood fill from all border pixels: mark near-white pixels connected to the edge.
bg = bytearray(w * h)
q = collections.deque()

def is_white(x, y):
    # Background is pure studio white: very bright AND nearly colorless.
    # The shirt's blown highlights are bright but carry a pink cast, so the
    # chroma test keeps them.
    r, g, b = px[x, y]
    return min(r, g, b) >= 230 and (max(r, g, b) - min(r, g, b)) <= 16

for x in range(w):
    for y in (0, h - 1):
        if is_white(x, y) and not bg[y * w + x]:
            bg[y * w + x] = 1
            q.append((x, y))
for y in range(h):
    for x in (0, w - 1):
        if is_white(x, y) and not bg[y * w + x]:
            bg[y * w + x] = 1
            q.append((x, y))

while q:
    x, y = q.popleft()
    for nx, ny in ((x-1,y),(x+1,y),(x,y-1),(x,y+1)):
        if 0 <= nx < w and 0 <= ny < h and not bg[ny * w + nx] and is_white(nx, ny):
            bg[ny * w + nx] = 1
            q.append((nx, ny))

# Fill enclosed transparent islands: any bg-marked region that is NOT
# connected to the border becomes subject again (white speckles inside
# the shirt/face survive).
outside = bytearray(w * h)
q2 = collections.deque()
for x in range(w):
    for y in (0, h - 1):
        if bg[y * w + x] and not outside[y * w + x]:
            outside[y * w + x] = 1
            q2.append((x, y))
for y in range(h):
    for x in (0, w - 1):
        if bg[y * w + x] and not outside[y * w + x]:
            outside[y * w + x] = 1
            q2.append((x, y))
while q2:
    x, y = q2.popleft()
    for nx, ny in ((x-1,y),(x+1,y),(x,y-1),(x,y+1)):
        if 0 <= nx < w and 0 <= ny < h and bg[ny * w + nx] and not outside[ny * w + nx]:
            outside[ny * w + nx] = 1
            q2.append((nx, ny))

# Build alpha: border-connected background 0, everything else 255.
alpha = Image.new("L", (w, h), 255)
ap = alpha.load()
for y in range(h):
    row = y * w
    for x in range(w):
        if outside[row + x]:
            ap[x, y] = 0

# Erode 1px then blur for a soft, halo-free edge.
alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))

out = im.convert("RGBA")
out.putalpha(alpha)

# Trim transparent margins, keep a small pad.
bbox = alpha.getbbox()
if bbox:
    pad = 6
    l = max(0, bbox[0] - pad); t = max(0, bbox[1] - pad)
    r = min(w, bbox[2] + pad); b = min(h, bbox[3] + pad)
    out = out.crop((l, t, r, b))

# Resize to a sane web width.
if out.width > 1100:
    nh = round(out.height * 1100 / out.width)
    out = out.resize((1100, nh), Image.LANCZOS)

out.save(OUT, optimize=True)
print("saved", OUT, out.size)
