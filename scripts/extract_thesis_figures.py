"""Export the selected thesis figures; the source PDFs stay unpublished.

Requires PyMuPDF and Pillow. Pass --master and --bachelor with local PDF paths.
"""
import argparse
from pathlib import Path

import fitz
from PIL import Image

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--master', required=True, type=Path)
parser.add_argument('--bachelor', required=True, type=Path)
args = parser.parse_args()
assets = Path(__file__).resolve().parents[1] / 'assets'

for name, source, page_number, bounds in [
    ('master', args.master, 50, (68, 68, 524, 430)),
    ('bachelor', args.bachelor, 12, (137, 68, 478, 330)),
]:
    clip = fitz.Rect(bounds)
    with fitz.open(source) as doc:
        scale = 1600 / clip.width
        pixmap = doc[page_number - 1].get_pixmap(
            matrix=fitz.Matrix(scale, scale), clip=clip, alpha=False)
        full_size = assets / f'{name}-thesis-figure.png'
        pixmap.save(full_size)
    with Image.open(full_size) as image:
        image.thumbnail((600, 600), Image.Resampling.LANCZOS)
        image.save(assets / f'{name}-thesis-figure.webp', 'WEBP', lossless=True, method=6)
    print(f'{name}: exported figure from PDF page {page_number}')
