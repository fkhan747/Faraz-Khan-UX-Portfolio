# Cartoon v4: best-of pipeline.
# - strong wash rescue (blown side -> warm skin)
# - LIGHT detail-preserving smooth (keeps eyes)
# - k-means cel colors (numpy, seeded)
# - XDoG ink lines (coherent strokes, not speckle)
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

SRC = "/Users/mr.khan/ux-portfolio-2026/frontend/public/images/faraz-cutout.webp"
OUT = "/Users/mr.khan/ux-portfolio-2026/frontend/public/images/faraz-cartoon.webp"

CROP = (260, 0, 870, 780)
NECK_FADE = 130
K = 16
SAT = 1.6

im = Image.open(SRC).convert("RGBA").crop(CROP)
rgb_img = im.convert("RGB")
alpha = np.asarray(im.split()[3]).astype(np.float32)
H = im.height; W = im.width

rgb = np.asarray(rgb_img).astype(np.float32)

# ---- 1. Wash rescue: bright low-chroma -> warm skin (soft mask, strong blend)
mx = rgb.max(axis=2); mn = rgb.min(axis=2)
chroma = mx - mn
washed = ((mn > 120) & (chroma < 46) & (alpha > 128)).astype(np.uint8) * 255
wm = Image.fromarray(washed).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(14))
wmask = (np.asarray(wm).astype(np.float32) / 255.0)[..., None] * 0.7
skin = np.array([233, 164, 128], dtype=np.float32)
target = 0.35 * rgb + 0.65 * skin
rgb = rgb * (1 - wmask) + target * wmask

# gentle highlight knee
knee, slope = 190.0, 0.6
over = rgb > knee
rgb[over] = knee + (rgb[over] - knee) * slope

base_img = Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8))

# ---- 2. Light detail-preserving smooth (v2 recipe, milder)
detail = base_img.convert("L").filter(ImageFilter.FIND_EDGES).filter(ImageFilter.GaussianBlur(3.0))
detail = detail.point(lambda p: min(255, p * 4))
smooth = base_img.filter(ImageFilter.MedianFilter(7)).filter(ImageFilter.ModeFilter(5))
lightly = base_img.filter(ImageFilter.MedianFilter(3))
mixed = Image.composite(lightly, smooth, detail)
mixed = ImageEnhance.Color(mixed).enhance(SAT)
mixed = ImageEnhance.Brightness(mixed).enhance(1.05)

sm = np.asarray(mixed).astype(np.float32)

# ---- 3. K-means cel quantization
rng = np.random.RandomState(11)
fg = alpha.reshape(-1) > 128
pix = sm.reshape(-1, 3)[fg]
sample = pix[rng.choice(len(pix), size=min(24000, len(pix)), replace=False)]
centers = sample[rng.choice(len(sample), K, replace=False)].copy()
for _ in range(14):
    d = ((sample[:, None, :] - centers[None, :, :]) ** 2).sum(-1)
    lab = d.argmin(1)
    for k in range(K):
        sel = sample[lab == k]
        if len(sel):
            centers[k] = sel.mean(0)
flat = sm.reshape(-1, 3)
d = ((flat[:, None, :] - centers[None, :, :]) ** 2).sum(-1)
cel = centers[d.argmin(1)].reshape(H, W, 3)

# ---- 4. XDoG ink lines from the pre-quantize image (coherent strokes)
gray = np.asarray(mixed.convert("L")).astype(np.float32)
def g(a, r):
    return np.asarray(Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32)
g1 = g(gray, 1.0)
g2 = g(gray, 2.6)
dog = g1 - 0.97 * g2
# ink where the DoG response is clearly negative-edge
ink = (dog < -2.4).astype(np.uint8) * 255
ink_img = Image.fromarray(ink).filter(ImageFilter.MedianFilter(3)).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.5))
ink_f = np.asarray(ink_img).astype(np.float32) / 255.0
cel = cel * (1 - ink_f[..., None] * 0.68)

# ---- 5. Neck fade + save
fade = np.ones(H, dtype=np.float32)
fade[H - NECK_FADE:] = np.linspace(1, 0, NECK_FADE)
alpha_out = alpha * fade[:, None]
out = np.dstack([np.clip(cel, 0, 255), alpha_out]).astype(np.uint8)
Image.fromarray(out).save(OUT, "WEBP", quality=88, method=6)
print("saved", OUT, (W, H))
