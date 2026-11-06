"""Bake subtle dawn lighting into the cutout; requires Pillow and NumPy.

Run from any directory: python3 scripts/refine-family.py
The original compressed artwork remains unchanged. No browser filters are needed.
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ASSETS = Path(__file__).resolve().parents[1] / "assets"
source = Image.open(ASSETS / "family-cutout-v2.webp").convert("RGBA")
alpha = source.getchannel("A")
rgb = ImageEnhance.Color(source.convert("RGB")).enhance(0.82)
rgb = ImageEnhance.Contrast(rgb).enhance(0.96)
pixels = np.asarray(rgb, dtype=np.float32)
height, width = pixels.shape[:2]
y, x = np.mgrid[0:height, 0:width]

# The sun is above and to the left: warm the light-facing side gently.
light = (1 - x / width) * (1 - 0.55 * y / height)
warmth = (0.035 + 0.045 * light)[..., None]
pixels = pixels * (1 - warmth) + np.array([239, 201, 150]) * warmth

# A restrained inner rim blends the cutout into the sky without a visible halo.
mask = np.asarray(alpha, dtype=np.float32) / 255
inner = np.asarray(alpha.filter(ImageFilter.MinFilter(5)), dtype=np.float32) / 255
rim = (np.maximum(mask - inner, 0) * light * 0.16)[..., None]
pixels = pixels * (1 - rim) + np.array([248, 221, 174]) * rim
result = Image.fromarray(np.clip(pixels, 0, 255).astype("uint8"), "RGB").convert("RGBA")
result.putalpha(Image.blend(alpha, alpha.filter(ImageFilter.GaussianBlur(0.45)), 0.18))
result.save(ASSETS / "family-dawn.webp", quality=85, method=6)
print(f"Saved family-dawn.webp: {(ASSETS / 'family-dawn.webp').stat().st_size:,} bytes")
