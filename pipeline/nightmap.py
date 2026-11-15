"""Night-side Earth under the lightning: NASA's Black Marble 2016.

    python pipeline/nightmap.py

Input: data/raw/lightning/BlackMarble_2016_3km.jpg (13500x6750, equirectangular, 180°W at
the left edge), from NASA Earth Observatory's "Earth at Night" maps:
https://assets.science.nasa.gov/content/dam/science/esd/eo/images/imagerecords/144000/144898/BlackMarble_2016_3km.jpg

City lights in Black Marble are yellow-orange, the same as NASA's lightning dots. So the map
is recoloured to cool blue-white (brightness kept, hue changed) and dimmed, which keeps
every city visible while only lightning stays yellow.
Writes web/public/data/lightning/night_8k.jpg (8192x4096) and night_4k.jpg (4096x2048).
"""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "raw" / "lightning" / "BlackMarble_2016_3km.jpg"
OUT = ROOT / "web" / "public" / "data" / "lightning"

TINT = np.array([0.66, 0.78, 1.0], np.float32)  # cool blue-white
GAIN = 0.8


def main():
    Image.MAX_IMAGE_PIXELS = None
    src = Image.open(SRC).convert("RGB")
    for size, name in ((8192, "night_8k.jpg"), (4096, "night_4k.jpg")):
        img = np.asarray(src.resize((size, size // 2), Image.LANCZOS)).astype(np.float32) / 255
        lum = img @ np.array([0.2126, 0.7152, 0.0722], np.float32)
        out = np.clip(lum[..., None] * TINT * GAIN, 0, 1)
        Image.fromarray((out * 255 + 0.5).astype(np.uint8)).save(OUT / name, quality=88, optimize=True)
        print(f"{name}: {(OUT / name).stat().st_size / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
