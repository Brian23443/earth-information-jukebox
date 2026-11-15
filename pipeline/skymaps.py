"""Textures for the sky behind the globe -> web/public/sky/.

Inputs (data/raw/sky/, fetched by hand, see README):
  starmap_2020_8k.exr   NASA SVS Deep Star Maps 2020 (svs.gsfc.nasa.gov/4851): real stars
                        (Hipparcos/Tycho/Gaia) + Milky Way, J2000 RA/Dec plate carree,
                        RA 0h at the center, RA increasing to the left. Linear half-float.
  lroc_color_2k.jpg     NASA SVS CGI Moon Kit (svs.gsfc.nasa.gov/4720), LRO color.
  2k_*.jpg / .png       Solar System Scope textures (CC BY 4.0), built from NASA mission data.

The star map is tone mapped to 8-bit sRGB (linear -> sRGB curve, no other change) so the
browser can use it; everything else is copied (re-encoded only to keep sizes down).
"""
from pathlib import Path

import numpy as np
import OpenEXR
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / 'data' / 'raw' / 'sky'
OUT = ROOT / 'web' / 'public' / 'sky'

COPIES = {
    'sun.jpg': '2k_sun.jpg',
    'mercury.jpg': '2k_mercury.jpg',
    'venus.jpg': '2k_venus_atmosphere.jpg',  # the clouds are what anyone would see
    'moon.jpg': 'lroc_color_2k.jpg',
    'mars.jpg': '2k_mars.jpg',
    'jupiter.jpg': '2k_jupiter.jpg',
    'saturn.jpg': '2k_saturn.jpg',
    'uranus.jpg': '2k_uranus.jpg',
    'neptune.jpg': '2k_neptune.jpg',
}


def srgb(x):
    x = np.clip(x, 0, 1)
    return np.where(x <= 0.0031308, 12.92 * x, 1.055 * np.power(x, 1 / 2.4) - 0.055)


def stars():
    rgb = OpenEXR.File(str(RAW / 'starmap_2020_8k.exr')).parts[0].channels['RGB'].pixels.astype(np.float32)
    img = (srgb(rgb) * 255 + 0.5).astype(np.uint8)
    Image.fromarray(img).save(OUT / 'stars.jpg', quality=90, subsampling=0, optimize=True)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for dst, src in COPIES.items():
        Image.open(RAW / src).convert('RGB').save(OUT / dst, quality=88, optimize=True)
    # Ring: 2048x125 strip, radial brightness + transparency (inner edge on the left).
    Image.open(RAW / '2k_saturn_ring_alpha.png').convert('RGBA').save(OUT / 'saturn_ring.png', optimize=True)
    stars()
    for p in sorted(OUT.iterdir()):
        print(f'{p.name:18s} {p.stat().st_size / 1e6:6.2f} MB')


if __name__ == '__main__':
    main()
