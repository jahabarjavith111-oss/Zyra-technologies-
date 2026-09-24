"""Trim the ZYRA logo to its Z symbol and remove the black background.

Reads public/logo.jpeg (black square with symbol + wordmark), crops the top
symbol region, trims black borders, un-premultiplies from black to get clean
transparency, and saves public/logo.png for use on the light theme.
"""

import numpy as np
from PIL import Image

src = Image.open("public/logo.jpeg").convert("RGB")
W, H = src.size

# Symbol lives in the top ~58%; the white wordmark text sits below it.
top = src.crop((0, 0, W, int(H * 0.58)))
a = np.asarray(top).astype(np.float32)

# Trim black borders around the symbol.
lum = a.max(axis=2)
ys, xs = np.where(lum > 24)
pad = 24
x0, y0 = max(0, int(xs.min()) - pad), max(0, int(ys.min()) - pad)
x1, y1 = min(top.width, int(xs.max()) + pad), min(top.height, int(ys.max()) + pad)
sym = a[y0:y1, x0:x1]

# Un-premultiply from black: alpha = peak channel, color = pixel / alpha.
# A small floor kills faint JPEG noise so edges stay clean on light backgrounds.
m = sym.max(axis=2, keepdims=True)
alpha = np.clip((m - 16) * (255.0 / 239.0), 0, 255)
with np.errstate(invalid="ignore", divide="ignore"):
    rgb = np.where(m > 0, sym / (m / 255.0), 0)
rgb = np.clip(rgb, 0, 255)

rgba = np.dstack([rgb, alpha]).astype(np.uint8)
out = Image.fromarray(rgba, "RGBA")
out.save("public/logo.png")
print("saved public/logo.png", out.size)
