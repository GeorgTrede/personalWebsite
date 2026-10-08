"""Regenerate the paper's animated preview and reduced-motion still.

Requires Pillow with animated WebP support; the source GIF is kept unchanged.
"""
from pathlib import Path

from PIL import Image

assets = Path(__file__).resolve().parents[1] / 'assets'
frames, durations = [], []
with Image.open(assets / 'paper-lorenz-observed-predicted.gif') as source:
    loop = source.info.get('loop', 0)
    for index in range(source.n_frames):
        source.seek(index)
        frame = source.convert('RGBA')
        frame.thumbnail((600, 600), Image.Resampling.LANCZOS)
        frames.append(frame)
        durations.append(source.info.get('duration', 100))

frames[0].save(
    assets / 'paper-lorenz-preview.webp', 'WEBP', save_all=True,
    append_images=frames[1:], duration=durations, loop=loop,
    lossless=True, method=4,
)
frames[3 * len(frames) // 4].save(
    assets / 'paper-lorenz-still.webp', 'WEBP', lossless=True, method=4,
)
print(f'Prepared {len(frames)} frames, {sum(durations)}ms, loop={loop}')
