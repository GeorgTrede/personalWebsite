"""Regenerate responsive photos and WOFF2 fonts without modifying originals.
Requires Pillow with WebP support, fonttools and brotli. Run from any directory.
"""
from pathlib import Path
from PIL import Image
from fontTools.ttLib import TTFont

assets = Path(__file__).resolve().parents[1] / 'assets'
for name, widths in [('forest-desktop', [1280, 1920]), ('forest-mobile', [480, 800])]:
    with Image.open(assets / f'{name}.jpg') as original:
        for width in widths:
            height = round(original.height * width / original.width)
            image = original.resize((width, height), Image.Resampling.LANCZOS)
            image.save(assets / f'{name}-{width}.webp', 'WEBP', quality=85, method=6)
for weight in ['Light', 'Medium', 'Bold']:
    with TTFont(assets / f'Roboto-{weight}.ttf') as font:
        font.flavor = 'woff2'
        font.save(assets / f'Roboto-{weight}.woff2')
