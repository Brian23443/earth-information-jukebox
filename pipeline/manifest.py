"""Every NASA source file the pipeline uses, in one place.

Filenames come from the SVS API (https://svs.gsfc.nasa.gov/api/<id>), checked
on 2026-11-14. If a download 404s, re-check the API for that page id.
"""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"        # untouched downloads
WORK = ROOT / "data" / "work"      # extracted frames, scratch
OUT = ROOT / "web" / "public" / "data"  # what the site serves

SVS = "https://svs.gsfc.nasa.gov/vis/a000000"

DATASETS = {
    "sst": {
        "title": "Sea surface currents and temperature",
        "svs_page": "https://svs.gsfc.nasa.gov/3912/",
        "credit": "Visualization: NASA's Scientific Visualization Studio. Data: ECCO2 (MIT/JPL).",
        # 2048x1024 equirectangular MP4, no colorbar. ~256 MB, re-encoded for the web.
        "movie": f"{SVS}/a003900/a003912/ecco2_sst_flow.mp4",
        "colorbar": f"{SVS}/a003900/a003912/sst_ecco2_cbar.png",
        # The "orig" frame set is already thinned on the server: 2,001 TIFs
        # numbered 23000, 23004, ... 31000. Every 4th *file* = every 16th number.
        "frames": {
            "url": f"{SVS}/a003900/a003912/frames/2048x1024_1x1_30p/orig/"
                   "flat_global_ecco2_2028x1024.{n:05d}.tif",
            "first": 23000, "last": 31000, "number_step": 4, "file_stride": 4,
        },
        # Zoom detail: 6840x3420 TIFs (35 MB each, same numbering). Too big to use whole,
        # so pipeline/hires.py turns every `every_movie_frames`-th one into a JPEG.
        # JPEG q88 with 4:4:4 chroma (full-resolution color) keeps the thin colored lines:
        # mean error 2.6 vs 4.4 for WebP q80, at 11.4 vs 4.9 MB per still.
        # 80 movie frames ~= 14 days of model time -> 26 stills, ~300 MB (every 40 was
        # ~580 MB and pushed the site past GitHub Pages' 1 GB limit).
        "hires": {
            "url": f"{SVS}/a003900/a003912/frames/6840x3420_1x1_30p/"
                   "flat_global_ecco2_6840x3420.{n:05d}.tif",
            "every_movie_frames": 80,
            "format": "jpg",
            "quality": 88,
        },
        # No date file exists on the SVS page; dates are interpolated linearly
        # across this range (see the plan's "Covers" column).
        "dates": ["2007-03-25", "2008-03-03"],
        "mode": "legend",
        "units": "°C",
        # Sampled from sst_ecco2_cbar.png (bar spans x=14..291 at y=48, 0..32 °C):
        #   python pipeline/legend.py sample data/raw/sst/sst_ecco2_cbar.png \
        #       --line 16 48 290 48 --vmin 0 --vmax 32 --n 17
        "legend": [
            [0.0, [52, 95, 248]], [2.0, [50, 126, 226]], [4.0, [50, 156, 203]],
            [6.0, [51, 183, 180]], [8.0, [53, 209, 158]], [10.0, [56, 233, 133]],
            [12.0, [59, 253, 112]], [14.0, [62, 255, 91]], [16.0, [81, 255, 70]],
            [18.0, [124, 255, 51]], [20.0, [179, 255, 38]], [22.0, [229, 255, 34]],
            [24.0, [251, 246, 33]], [26.0, [249, 199, 30]], [28.0, [248, 138, 27]],
            [30.0, [247, 65, 25]], [32.0, [247, 0, 24]],
        ],
        "reject_cutoff": 18.0,  # CIELAB distance; above this a pixel is "no data"
        # Flow lines fade to black along their trails: compare hue, not brightness.
        # Raw lookup keeps 2.7% of pixels; normalized keeps ~21% (checked on 27000.tif).
        "normalize_brightness": True,
        "min_brightness": 60,
        "min_saturation": 0.35,
    },
    "lightning": {
        "title": "Lightning seen from the Space Station",
        "svs_page": "https://svs.gsfc.nasa.gov/5011/",
        "credit": "Visualization: NASA's Scientific Visualization Studio. Data: ISS LIS (NASA GHRC).",
        # 4096x2048, 60 fps, ~350 MB. Downscaled to 2048x1024 for the texture.
        "movie": f"{SVS}/a005000/a005011/iss_lightning_sos_yearly_07312023_2048p60.mp4",
        # 6,002 frames at 60 fps. Every 4th = 15 summaries/s, plenty for percussion.
        # Frames are read straight from ffmpeg (no PNGs: 3.7 MB each at 4096).
        "frames": {"from_movie": True, "every": 4},
        # NASA: "between March 2017 and July 2023". Frames do NOT map linearly to dates
        # (a straight-line mapping puts northern summer in December; a sine fit finds
        # ~8.3 yearly cycles where 6.4 are expected), so the site shows the period only.
        "dates": ["2017-03-01", "2023-07-31"],
        "dates_exact": False,
        "mode": "flashes",
        "units": "flashes",
        # Flashes are yellow dots (e.g. 118,123,24); the grey latitude lines must not count.
        "flash_rgb": {"r_min": 100, "g_min": 85, "b_max": 90, "rb_min": 60},
    },
    "aerosols": {
        "title": "Aerosols: dust, smoke, sea salt, sulfates",
        "svs_page": "https://svs.gsfc.nasa.gov/5552/",
        "listed_page": "https://svs.gsfc.nasa.gov/5669/",
        "credit": "Visualization: NASA's Scientific Visualization Studio. Data: GEOS-FP (NASA GMAO).",
        "movie": f"{SVS}/a005500/a005552/Aerosols_NoLabels_2048x1024_30fps.mp4",
        "colorbar": f"{SVS}/a005500/a005552/Aerosols_cbar.png",
        # The NoLabels frame folder has no file listing, so frames come from the MP4.
        "frames": {"from_movie": True, "every": 4},
        "dates": ["2024-08-01", "2024-09-14"],
        "mode": "classes",  # TODO: 4-type share summaries
        "units": "share",
    },
    "forest": {
        "title": "Forest height (GEDI lidar)",
        "svs_page": "https://svs.gsfc.nasa.gov/4950/",
        "credit": "Visualization: NASA's Scientific Visualization Studio. Data: GEDI L3 V2 (NASA ORNL DAAC, via OpenTopography).",
        # The EIC visual shown in the side panel (16:9, not a globe texture).
        "panel_movie": f"{SVS}/a004900/a004950/GEDI_global_w_colorbar_1080p60.mp4",
        # Raw GeoTIFF: download by hand from https://doi.org/10.5069/G9V12301
        # (free OpenTopography account), save as data/raw/forest/gedi_l3_rh100_mean.tif
        "geotiff": "data/raw/forest/gedi_l3_rh100_mean.tif",
        "mode": "static",
        "units": "m",
    },
    "nightlights": {
        "title": "Night lights change, 2012–2024",
        "svs_page": "https://svs.gsfc.nasa.gov/5475/",
        "listed_page": "https://svs.gsfc.nasa.gov/5313/",
        "credit": "Visualization: NASA's Scientific Visualization Studio. Data: Black Marble (Suomi NPP VIIRS).",
        "movie": f"{SVS}/a005400/a005475/nightlights_2012-2024_KSC_04_plus2_2048x1024_30p_sos.mp4",
        "frames": {"from_movie": True, "every": 4},
        "mode": "change",  # stretch
        "units": "relative",
    },
}
