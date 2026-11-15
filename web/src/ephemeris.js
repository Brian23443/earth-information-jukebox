// Where the Sun, Moon and planets are in Earth's sky on a given date.
//
// Planets: JPL "Approximate Positions of the Planets" Keplerian elements (Standish),
// valid 1800-2050 to well under a degree, far finer than the globe can show.
// Moon: the low-precision series from the Astronomical Almanac (~0.3°).
// Pure math, no three.js, so it can be tested in Node.

const DEG = Math.PI / 180;
const OBLIQUITY = 23.43928 * DEG; // J2000

// a (AU), e, I, L, long. perihelion, long. ascending node (deg), then rates per century.
const ELEMENTS = {
  mercury: [0.38709927, 0.20563593, 7.00497902, 252.2503235, 77.45779628, 48.33076593,
    0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081],
  venus: [0.72333566, 0.00677672, 3.39467605, 181.9790995, 131.60246718, 76.67984255,
    0.0000039, -0.00004107, -0.0007889, 58517.81538729, 0.00268329, -0.27769418],
  earth: [1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0,
    0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0],
  mars: [1.52371034, 0.0933941, 1.84969142, -4.55343205, -23.94362959, 49.55953891,
    0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343],
  jupiter: [5.202887, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909,
    -0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106],
  saturn: [9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448,
    -0.0012506, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794],
  uranus: [19.18916464, 0.04725744, 0.77263783, 313.23810451, 170.9542763, 74.01692503,
    -0.00196176, -0.00004397, -0.00242939, 428.48202785, 0.40805281, 0.04240589],
  neptune: [30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574,
    0.00026291, 0.00005105, 0.00035372, 218.45945325, -0.32241464, -0.00508664],
};

export const PLANETS = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

const J2000_MS = Date.UTC(2000, 0, 1, 12); // JD 2451545.0

export function daysSinceJ2000(ms) {
  return (ms - J2000_MS) / 86400000;
}

// Heliocentric ecliptic position (AU) of a planet.
function heliocentric(name, T) {
  const el = ELEMENTS[name];
  const a = el[0] + el[6] * T;
  const e = el[1] + el[7] * T;
  const I = (el[2] + el[8] * T) * DEG;
  const L = el[3] + el[9] * T;
  const peri = el[4] + el[10] * T;
  const node = (el[5] + el[11] * T) * DEG;
  const w = peri * DEG - node;
  let M = (((L - peri) % 360) + 540) % 360 - 180; // -180..180
  M *= DEG;
  let E = M + e * Math.sin(M);
  for (let i = 0; i < 8; i++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  const xp = a * (Math.cos(E) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const cw = Math.cos(w), sw = Math.sin(w), cN = Math.cos(node), sN = Math.sin(node), cI = Math.cos(I), sI = Math.sin(I);
  return [
    (cw * cN - sw * sN * cI) * xp + (-sw * cN - cw * sN * cI) * yp,
    (cw * sN + sw * cN * cI) * xp + (-sw * sN + cw * cN * cI) * yp,
    sw * sI * xp + cw * sI * yp,
  ];
}

function eclipticToEquatorial([x, y, z]) {
  const c = Math.cos(OBLIQUITY), s = Math.sin(OBLIQUITY);
  return [x, y * c - z * s, y * s + z * c];
}

export function raDec([x, y, z]) {
  const r = Math.hypot(x, y, z);
  return { ra: ((Math.atan2(y, x) / DEG) + 360) % 360, dec: Math.asin(z / r) / DEG };
}

function moonEcliptic(T) {
  const s = (a, b) => Math.sin((a + b * T) * DEG);
  const lon = 218.32 + 481267.881 * T + 6.29 * s(134.9, 477198.85) - 1.27 * s(259.2, -413335.38)
    + 0.66 * s(235.7, 890534.23) + 0.21 * s(269.9, 954397.7) - 0.19 * s(357.5, 35999.05) - 0.11 * s(186.6, 966404.05);
  const lat = 5.13 * s(93.3, 483202.03) + 0.28 * s(228.2, 960400.87) - 0.28 * s(318.3, 6003.18) - 0.17 * s(217.6, -407332.2);
  const cl = Math.cos(lat * DEG);
  return [cl * Math.cos(lon * DEG), cl * Math.sin(lon * DEG), Math.sin(lat * DEG)];
}

// Geocentric equatorial vectors (AU; the Moon's is a unit direction) for every body.
export function skyPositions(ms) {
  const T = daysSinceJ2000(ms) / 36525;
  const earth = heliocentric('earth', T);
  const out = { sun: eclipticToEquatorial(earth.map((v) => -v)) };
  for (const p of PLANETS) {
    const h = heliocentric(p, T);
    out[p] = eclipticToEquatorial([h[0] - earth[0], h[1] - earth[1], h[2] - earth[2]]);
  }
  out.moon = eclipticToEquatorial(moonEcliptic(T));
  return out;
}

// Greenwich sidereal angle (deg) with Earth's daily turn removed: the sky as seen at
// noon UTC on each day, drifting ~1° per day. Using the true time of day would whirl the
// whole sky around once per day of playback (many times a second).
export function noonSiderealDeg(ms) {
  return (((280.46061837 + 0.98564736629 * daysSinceJ2000(ms)) % 360) + 360) % 360;
}

// Angle between two vectors, degrees.
export function separationDeg(a, b) {
  const d = (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / (Math.hypot(...a) * Math.hypot(...b));
  return Math.acos(Math.min(1, Math.max(-1, d))) / DEG;
}
