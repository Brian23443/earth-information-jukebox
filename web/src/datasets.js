// The shelf. Keep ids and credits in step with pipeline/manifest.py.
export const DATASETS = [
  {
    id: 'sst',
    title: 'Ocean temperature',
    description:
      'Sea surface currents, colored by temperature, March 2007 to March 2008. Warmer water opens the chord and raises the melody.',
    units: '°C',
    format: (v) => `${v.toFixed(1)} °C`,
    sound: 'ocean',
    // The visible half of the globe always averages roughly 15-25 °C, so the pad
    // spans this range instead of 0-32 to make spinning audible.
    padRange: [14, 26],
    // Colors sampled from NASA's colorbar (pipeline/manifest.py), 0 to 32 °C.
    legend: {
      label: 'Sea surface temperature',
      colors: ['#345ff8', '#329cCB', '#35d19e', '#3bfd70', '#51ff46', '#b3ff26', '#fbf621', '#f88a1b', '#f70018'],
      min: '0 °C',
      max: '32 °C',
    },
    svs: 'https://svs.gsfc.nasa.gov/3912/',
    credit: "Visualization: NASA's Scientific Visualization Studio. Data: ECCO2 (MIT/JPL).",
    demoFallback: true, // synthetic data until the pipeline has run
  },
  {
    id: 'lightning',
    title: 'Lightning',
    description:
      'Lightning flashes seen from the International Space Station, March 2017 to July 2023. Drums follow new flashes on the side facing you: busier storms play more and louder, storms further north play higher. A low drone swells with global storm activity.',
    units: 'flashes',
    // Value = share of the surrounding map cell (about 1.4° wide) newly lit this frame.
    format: (v) => (v > 0.0075 ? 'Heavy storms' : v > 0.002 ? 'Storms' : v > 0 ? 'Scattered flashes' : 'Quiet'),
    sound: 'lightning',
    legend: {
      label: 'New lightning flashes (10-day window)',
      colors: ['#1c1f26', '#5d5a1c', '#c9c41a', '#fff34a'],
      min: 'none',
      max: 'many',
    },
    svs: 'https://svs.gsfc.nasa.gov/5011/',
    credit: "Visualization: NASA's Scientific Visualization Studio. Data: ISS LIS (NASA GHRC).",
  },
  {
    id: 'aerosols',
    title: 'Aerosols',
    description:
      'Smoke, dust, sea salt and sulfates in the air, August to mid-September 2024. Each has its own sound, loud where it is thick on the side facing you: smoke crackles like fire, dust is a low drone, sea salt shimmers like surf, sulfates ring like bells. Hover a plume to hear that type alone.',
    units: 'share',
    format: (v) => `${Math.round(v * 100)}%`,
    sound: 'aerosols',
    // Order matches pipeline/aerosols.py TYPES.
    typeNames: ['Smoke (black carbon)', 'Dust', 'Sea salt', 'Sulfate'],
    // Discrete swatches (NASA's colorbar), not a gradient.
    legend: {
      label: 'Smoke · Dust · Sea salt · Sulfate',
      colors: ['#d25e45 0 25%', '#c19adc 25% 50%', '#85aaa9 50% 75%', '#53dc34 75% 100%'],
      min: 'smoke',
      max: 'sulfate',
    },
    svs: 'https://svs.gsfc.nasa.gov/5552/',
    credit: "Visualization: NASA's Scientific Visualization Studio. Data: GEOS-FP (NASA GMAO).",
  },
  {
    id: 'forest',
    title: 'Forest height',
    description: 'Canopy height measured by the GEDI lidar on the Space Station, between 52° south and 52° north.',
    units: 'm',
    format: (v) => `${Math.round(v)} m`,
    sound: 'forest', // TODO: explore-mode cursor layer
    svs: 'https://svs.gsfc.nasa.gov/4950/',
    credit:
      "Visualization: NASA's Scientific Visualization Studio. Data: GEDI L3 V2 (NASA ORNL DAAC, via OpenTopography).",
  },
];
