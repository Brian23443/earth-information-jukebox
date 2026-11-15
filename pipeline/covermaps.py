"""Textures for the cover Earth (the realistic, sunlit planet on the start screen).

    python pipeline/covermaps.py

Inputs (data/raw/, fetched by hand):
  cover/bluemarble_aug.jpg       NASA Blue Marble Next Generation, August 2004, with
                                 topography and bathymetry (5400x2700), NASA Earth Observatory
  lightning/BlackMarble_2016_3km.jpg  NASA Black Marble 2016 (night lights, original colours)
Writes web/public/cover/day.jpg and night.jpg, 4096x2048.
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
OUT = ROOT / "web" / "public" / "cover"


def main():
    Image.MAX_IMAGE_PIXELS = None
    OUT.mkdir(parents=True, exist_ok=True)
    for src, name in ((RAW / "cover" / "bluemarble_aug.jpg", "day.jpg"),
                      (RAW / "lightning" / "BlackMarble_2016_3km.jpg", "night.jpg")):
        Image.open(src).convert("RGB").resize((4096, 2048), Image.LANCZOS).save(OUT / name, quality=86, optimize=True)
        print(f"{name}: {(OUT / name).stat().st_size / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
