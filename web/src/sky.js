// The sky behind the globe: stars, the Sun, the Moon and the planets where they really
// were on the date being shown (see ephemeris.js), seen from Earth.
//
// The sky is a child of the globe, so turning the Earth turns the sky with it, the same as
// flying around the planet. Positions are real; sizes are not: true sizes would be
// specks (the Moon is half a degree), so bodies are drawn a few times larger.
// The named bright stars are real; the faint background stars and Milky Way glow are
// illustrative, placed around the real galactic plane.
import * as THREE from 'three';
import { PLANETS, noonSiderealDeg, skyPositions } from './ephemeris.js';

const DEG = Math.PI / 180;
const R = 50; // sky distance (camera sits 1-4 units from the globe's center)

// Angular radius drawn (deg) and the name people see.
const BODIES = {
  moon: { size: 1.0, label: 'Moon', pole: [270, 66.5] },
  mercury: { size: 0.28, label: 'Mercury', pole: [281.0, 61.4] },
  venus: { size: 0.42, label: 'Venus', pole: [272.8, 67.2] },
  mars: { size: 0.34, label: 'Mars', pole: [317.7, 52.9] },
  jupiter: { size: 0.55, label: 'Jupiter', pole: [268.1, 64.5] },
  saturn: { size: 0.45, label: 'Saturn', pole: [40.6, 83.5] },
  uranus: { size: 0.3, label: 'Uranus', pole: [257.3, -15.2] },
  neptune: { size: 0.3, label: 'Neptune', pole: [299.4, 43.5] },
};
const KIND = { mercury: 0, venus: 1, mars: 2, jupiter: 3, saturn: 4, uranus: 5, neptune: 6, moon: 7 };
const SUN_CORE = 1.1; // deg
const SUN_R = R * 0.9; // drawn a little nearer than the planets so it covers those behind it

// Bright stars: RA, Dec (deg), magnitude, tint. Enough to make the familiar shapes
// (Orion, the Big Dipper, Cassiopeia, the Southern Cross) recognizable.
const STARS = [
  [101.29, -16.72, -1.46, 'w'], [95.99, -52.7, -0.74, 'w'], [213.92, 19.18, -0.05, 'o'],
  [279.23, 38.78, 0.03, 'w'], [79.17, 46.0, 0.08, 'y'], [78.63, -8.2, 0.13, 'b'],
  [114.83, 5.22, 0.34, 'w'], [88.79, 7.41, 0.5, 'r'], [24.43, -57.24, 0.46, 'b'],
  [210.96, -60.37, 0.61, 'b'], [297.7, 8.87, 0.76, 'w'], [186.65, -63.1, 0.76, 'b'],
  [68.98, 16.51, 0.86, 'o'], [247.35, -26.43, 0.96, 'r'], [201.3, -11.16, 0.97, 'b'],
  [116.33, 28.03, 1.14, 'o'], [344.41, -29.62, 1.16, 'w'], [310.36, 45.28, 1.25, 'w'],
  [191.93, -59.69, 1.25, 'b'], [152.09, 11.97, 1.35, 'b'], [37.95, 89.26, 1.98, 'y'],
  [219.9, -60.83, -0.27, 'y'], [81.28, 6.35, 1.64, 'b'], [86.94, -9.67, 2.07, 'b'],
  [85.19, -1.94, 1.77, 'b'], [84.05, -1.2, 1.69, 'b'], [83.0, -0.3, 2.23, 'b'],
  [165.93, 61.75, 1.79, 'o'], [165.46, 56.38, 2.37, 'w'], [178.46, 53.69, 2.44, 'w'],
  [183.86, 57.03, 3.31, 'w'], [193.51, 55.96, 1.77, 'w'], [200.98, 54.93, 2.23, 'w'],
  [206.89, 49.31, 1.86, 'b'], [10.13, 56.54, 2.24, 'o'], [2.29, 59.15, 2.28, 'w'],
  [14.18, 60.72, 2.15, 'b'], [21.45, 60.24, 2.68, 'w'], [28.6, 63.67, 3.37, 'b'],
  [187.79, -57.11, 1.63, 'r'], [183.79, -58.75, 2.79, 'b'], [263.4, -37.1, 1.62, 'b'],
  [138.3, -69.72, 1.67, 'w'], [125.63, -59.51, 1.86, 'o'], [306.41, -56.74, 1.94, 'b'],
  [51.08, 49.86, 1.79, 'y'], [2.1, 29.09, 2.06, 'b'], [17.43, 35.62, 2.07, 'r'],
  [30.97, 42.33, 2.1, 'o'], [31.79, 23.46, 2.0, 'o'], [56.87, 24.11, 2.87, 'b'],
  [113.65, 31.89, 1.58, 'w'], [99.43, 16.4, 1.93, 'w'], [276.04, -34.38, 1.85, 'b'],
  [283.82, -26.3, 2.05, 'b'], [326.05, 9.88, 2.38, 'o'], [346.19, 15.21, 2.49, 'b'],
  [3.31, 15.18, 2.83, 'b'], [262.69, 52.3, 2.79, 'y'], [305.56, 40.26, 2.23, 'y'],
  [292.68, 27.96, 3.05, 'o'], [345.94, 28.08, 2.42, 'r'], [141.9, -8.66, 1.98, 'o'],
];
const TINT = {
  b: [0.75, 0.84, 1.0], w: [1.0, 1.0, 1.0], y: [1.0, 0.95, 0.82], o: [1.0, 0.83, 0.62], r: [1.0, 0.68, 0.5],
};

// Equatorial (x toward RA 0, z toward the north pole) → the globe's local frame, where
// lat = dec and lon = RA (globe.js: x = cos(lon)cos(lat), y = sin(lat), z = -sin(lon)cos(lat)).
function eqToLocal([x, y, z], out = new THREE.Vector3()) {
  return out.set(x, z, -y).normalize();
}
function raDecToLocal(ra, dec, out = new THREE.Vector3()) {
  const c = Math.cos(dec * DEG);
  return out.set(c * Math.cos(ra * DEG), Math.sin(dec * DEG), -c * Math.sin(ra * DEG));
}

// Galactic (l, b) → equatorial unit vector (J2000; transpose of the IAU rotation).
const GAL = [
  [-0.0548755604, -0.8734370902, -0.4838350155],
  [0.4941094279, -0.44482963, 0.7469822445],
  [-0.867666149, -0.1980763734, 0.4559837762],
];
function galacticToEq(l, b) {
  const g = [Math.cos(b) * Math.cos(l), Math.cos(b) * Math.sin(l), Math.sin(b)];
  return [0, 1, 2].map((i) => GAL[0][i] * g[0] + GAL[1][i] * g[1] + GAL[2][i] * g[2]);
}

function gauss(rand) {
  return Math.sqrt(-2 * Math.log(rand() + 1e-9)) * Math.cos(2 * Math.PI * rand());
}

// Seeded so the sky looks the same on every visit.
function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NOISE_GLSL = /* glsl */ `
float hash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise3(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1,0,0)), f.x), mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x), mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise3(p); p *= 2.03; a *= 0.5; } return s; }
`;

function planetMaterial(kind) {
  return new THREE.ShaderMaterial({
    uniforms: { uLight: { value: new THREE.Vector3(1, 0, 0) }, uKind: { value: kind } },
    vertexShader: /* glsl */ `
      varying vec3 vObj; varying vec3 vWorldN;
      void main() {
        vObj = normal;
        vWorldN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uLight; uniform float uKind;
      varying vec3 vObj; varying vec3 vWorldN;
      ${NOISE_GLSL}
      vec3 bands(vec3 p, vec3 a, vec3 b, float freq, float warp) {
        float t = p.y * freq + (fbm(p * 3.0) - 0.5) * warp;
        return mix(a, b, smoothstep(-0.35, 0.35, sin(t)));
      }
      void main() {
        vec3 p = normalize(vObj);
        vec3 c;
        if (uKind < 0.5) {        // Mercury
          c = vec3(0.56, 0.54, 0.52) * (0.75 + 0.5 * fbm(p * 6.0));
        } else if (uKind < 1.5) { // Venus: featureless cloud deck
          c = vec3(0.95, 0.88, 0.7) * (0.92 + 0.12 * fbm(p * 2.5 + vec3(p.y * 3.0)));
        } else if (uKind < 2.5) { // Mars
          c = mix(vec3(0.78, 0.4, 0.22), vec3(0.45, 0.24, 0.15), smoothstep(0.45, 0.65, fbm(p * 4.0)));
          c = mix(c, vec3(0.95), smoothstep(0.88, 0.93, abs(p.y)));
        } else if (uKind < 3.5) { // Jupiter
          c = bands(p, vec3(0.93, 0.88, 0.78), vec3(0.72, 0.55, 0.4), 15.0, 1.4);
          float spot = smoothstep(0.16, 0.1, length(vec2((atan(p.z, p.x) - 0.6) * 0.55, p.y + 0.36)));
          c = mix(c, vec3(0.78, 0.4, 0.28), spot * 0.8);
        } else if (uKind < 4.5) { // Saturn
          c = bands(p, vec3(0.93, 0.85, 0.64), vec3(0.8, 0.69, 0.48), 8.0, 0.8);
        } else if (uKind < 5.5) { // Uranus
          c = vec3(0.64, 0.86, 0.9) * (0.95 + 0.05 * sin(p.y * 12.0));
        } else if (uKind < 6.5) { // Neptune
          c = bands(p, vec3(0.32, 0.48, 0.88), vec3(0.24, 0.36, 0.76), 7.0, 0.6);
        } else {                  // Moon: highlands and darker maria
          float m = smoothstep(0.5, 0.58, fbm(p * 1.6 + 3.0));
          c = mix(vec3(0.74, 0.73, 0.7), vec3(0.42, 0.42, 0.42), m) * (0.85 + 0.25 * fbm(p * 12.0));
        }
        // Lit by the Sun from its real direction, so the Moon and Venus show their phase.
        float d = dot(normalize(vWorldN), uLight);
        float lit = smoothstep(-0.04, 0.25, d) * (0.35 + 0.65 * max(d, 0.0));
        gl_FragColor = vec4(c * (lit + 0.015), 1.0);
      }`,
  });
}

function ringMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uLight: { value: new THREE.Vector3(1, 0, 0) }, uNormal: { value: new THREE.Vector3(0, 1, 0) } },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      varying vec2 vP;
      void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uLight; uniform vec3 uNormal; varying vec2 vP;
      void main() {
        float r = length(vP);  // in planet radii: rings span ~1.24-2.27
        float a = smoothstep(1.24, 1.3, r) * (1.0 - smoothstep(2.2, 2.27, r));
        a *= 0.55 + 0.35 * sin(r * 38.0) * sin(r * 11.0);
        a *= 1.0 - 0.9 * smoothstep(1.93, 1.95, r) * (1.0 - smoothstep(2.0, 2.02, r)); // Cassini division
        float light = 0.25 + 0.75 * abs(dot(uNormal, uLight));
        gl_FragColor = vec4(vec3(0.9, 0.82, 0.64) * light, a * 0.85);
      }`,
  });
}

function sunMaterial(coreFrac) {
  return new THREE.ShaderMaterial({
    uniforms: { uCore: { value: coreFrac } },
    transparent: true,
    depthWrite: false,
    // Pure additive light. The canvas is transparent over the page background and
    // premultiplied, so alpha must grow with the light added (alpha = brightest channel):
    // a fixed alpha of 1 cuts a dark square out of the page, alpha 0 hides the glow.
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneFactor,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uCore; varying vec2 vUv;
      void main() {
        float r = length(vUv) / uCore;          // 1 = edge of the disc
        float disc = 1.0 - smoothstep(0.92, 1.0, r);
        float limb = mix(0.75, 1.0, sqrt(max(0.0, 1.0 - r * r)));
        float glow = 0.55 * exp(-(r - 1.0) * 0.9) + 0.25 / (1.0 + r * r);
        float fade = 1.0 - smoothstep(0.6, 1.0, length(vUv));
        vec3 c = vec3(1.0, 0.97, 0.9) * disc * limb + vec3(1.0, 0.78, 0.5) * glow * (1.0 - disc) * fade;
        gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)));
      }`,
  });
}

function starMaterial(pixelRatio) {
  return new THREE.ShaderMaterial({
    uniforms: { uPx: { value: pixelRatio } },
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `
      uniform float uPx; attribute float size; attribute vec4 tint; varying vec4 vTint;
      void main() {
        vTint = tint;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPx;
      }`,
    fragmentShader: /* glsl */ `
      varying vec4 vTint;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = exp(-d * d * 4.0) * (1.0 - smoothstep(0.8, 1.0, d));
        gl_FragColor = vec4(vTint.rgb, vTint.a * a);
      }`,
  });
}

function buildStars(pixelRatio) {
  const rand = mulberry32(20261114);
  const pos = [], size = [], tint = [];
  const add = (v, mag, rgb, alphaScale = 1) => {
    pos.push(v.x * R, v.y * R, v.z * R);
    size.push(Math.min(5.5, Math.max(1.7, 4.0 - 0.5 * mag)));
    tint.push(...rgb, Math.min(1, Math.max(0.1, (1.2 - mag * 0.11) * alphaScale)));
  };
  const v = new THREE.Vector3();
  for (const [ra, dec, mag, t] of STARS) add(raDecToLocal(ra, dec, v), mag, TINT[t]);
  // Faint field stars, denser toward the galactic plane.
  for (let i = 0; i < 8000; i++) {
    const l = rand() * 2 * Math.PI;
    const b = rand() < 0.45 ? gauss(rand) * 0.16 : Math.asin(2 * rand() - 1);
    const mag = 6.2 - 2.6 * Math.pow(rand(), 3);
    const t = rand();
    add(eqToLocal(galacticToEq(l, b), v), mag, t < 0.15 ? TINT.b : t < 0.8 ? TINT.w : t < 0.93 ? TINT.y : TINT.o);
  }
  // Milky Way haze: many very dim points in the plane, brightest toward the center (Sagittarius).
  for (let i = 0; i < 9000; i++) {
    // Half spread along the whole plane, half bunched toward the galactic center.
    const l = rand() < 0.5 ? rand() * 2 * Math.PI : gauss(rand) * 0.9;
    const glow = 0.5 + 0.5 * Math.cos(l);
    const b = gauss(rand) * 0.06 * (1 + 0.8 * glow);
    add(eqToLocal(galacticToEq(l, b), v), 7, [0.85, 0.88, 1.0], 0.16 + 0.22 * glow);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('size', new THREE.Float32BufferAttribute(size, 1));
  g.setAttribute('tint', new THREE.Float32BufferAttribute(tint, 4));
  const pts = new THREE.Points(g, starMaterial(pixelRatio));
  pts.frustumCulled = false;
  pts.renderOrder = -2;
  return pts;
}

export class Sky {
  // parent: the object that turns with the Earth (the globe sphere).
  constructor({ parent, scene, camera, container, pixelRatio }) {
    this.camera = camera;
    this.group = new THREE.Group(); // equatorial frame; rotation.y = -sidereal angle
    parent.add(this.group);
    this.stars = buildStars(pixelRatio);
    this.group.add(this.stars);

    // Sun: a camera-facing quad in the scene root, placed each frame.
    const glowDeg = SUN_CORE * 8;
    const half = SUN_R * Math.tan(glowDeg * DEG);
    this.sun = new THREE.Mesh(new THREE.PlaneGeometry(half * 2, half * 2), sunMaterial(SUN_CORE / glowDeg));
    this.sun.renderOrder = 1; // after the planets: a planet behind the Sun is lost in its glare
    this.sun.frustumCulled = false;
    scene.add(this.sun);
    this.sunLocal = new THREE.Vector3(1, 0, 0);

    const sphereGeo = new THREE.SphereGeometry(1, 48, 24);
    this.bodies = {};
    for (const [name, b] of Object.entries(BODIES)) {
      const mesh = new THREE.Mesh(sphereGeo, planetMaterial(KIND[name]));
      mesh.scale.setScalar(R * Math.tan(b.size * DEG));
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), raDecToLocal(b.pole[0], b.pole[1]));
      if (name === 'saturn') {
        const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 2.3, 96, 1), ringMaterial());
        ring.rotation.x = -Math.PI / 2; // ring plane = Saturn's equator
        mesh.add(ring);
        this.ring = ring;
      }
      this.group.add(mesh);
      this.bodies[name] = { mesh, light: new THREE.Vector3(1, 0, 0), ...b };
    }

    // Names, drawn as page text (sharp at any size, no textures).
    this.labelLayer = document.createElement('div');
    this.labelLayer.className = 'sky-labels';
    this.labelLayer.setAttribute('aria-hidden', 'true');
    container.appendChild(this.labelLayer);
    this.labels = {};
    this.labelPos = {};
    for (const name of ['sun', ...Object.keys(BODIES)]) {
      const el = document.createElement('span');
      el.textContent = name === 'sun' ? 'Sun' : BODIES[name].label;
      el.hidden = true;
      this.labelLayer.appendChild(el);
      this.labels[name] = el;
      this.labelPos[name] = { el, x: 0, y: 0 };
    }

    this.lastMs = null;
    this._v = new THREE.Vector3();
    this._w = new THREE.Vector3();
    this.setTime(Date.now());
  }

  // ms: the moment being shown (UTC). Cheap; skipped unless the date moved.
  setTime(ms) {
    if (this.lastMs !== null && Math.abs(ms - this.lastMs) < 600000) return; // 10 min
    this.lastMs = ms;
    const pos = skyPositions(ms);
    this.group.rotation.y = -noonSiderealDeg(ms) * DEG;
    eqToLocal(pos.sun, this.sunLocal);
    for (const [name, b] of Object.entries(this.bodies)) {
      const p = pos[name];
      eqToLocal(p, this._v);
      b.mesh.position.copy(this._v).multiplyScalar(R);
      // Sunlight arrives along (Sun − body); the Moon is close enough to use the Sun's direction.
      const toSun = name === 'moon' ? pos.sun : [pos.sun[0] - p[0], pos.sun[1] - p[1], pos.sun[2] - p[2]];
      eqToLocal(toSun, b.light);
    }
    this.group.updateMatrixWorld(true);
  }

  // After the globe has turned: face the Sun's quad at the camera, aim the light, place labels.
  update(width, height) {
    const cam = this.camera;
    const m = this.group.matrixWorld;
    const sunWorld = this._w.copy(this.sunLocal).transformDirection(m).multiplyScalar(SUN_R);
    this.sun.position.copy(sunWorld);
    this.sun.quaternion.copy(cam.quaternion);
    this._place('sun', sunWorld, SUN_R * Math.tan(SUN_CORE * DEG), width, height);
    for (const [name, b] of Object.entries(this.bodies)) {
      const light = this._v.copy(b.light).transformDirection(m);
      b.mesh.material.uniforms.uLight.value.copy(light);
      if (name === 'saturn') {
        this.ring.material.uniforms.uLight.value.copy(light);
        this.ring.material.uniforms.uNormal.value.set(0, 1, 0).applyQuaternion(b.mesh.getWorldQuaternion(new THREE.Quaternion()));
      }
      const world = b.mesh.getWorldPosition(this._w);
      this._place(name, world, b.mesh.scale.x, width, height);
    }
    this._spreadLabels();
  }

  // Bodies close together (a conjunction) would stack their names: nudge later ones down.
  _spreadLabels() {
    const shown = Object.values(this.labelPos).filter((p) => !p.el.hidden).sort((a, b) => a.y - b.y);
    for (let i = 0; i < shown.length; i++) {
      for (let j = 0; j < i; j++) {
        const a = shown[j], b = shown[i];
        if (Math.abs(a.x - b.x) < 56 && b.y - a.y < 14) b.y = a.y + 14;
      }
      const p = shown[i];
      p.el.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) translateX(-50%)`;
    }
  }

  // Label below the body, hidden when off screen or behind the Earth.
  _place(name, world, radius, width, height) {
    const el = this.labels[name];
    const cam = this.camera.position;
    const d = this._v.copy(world).sub(cam);
    const dist = d.length();
    d.divideScalar(dist);
    const t0 = -cam.dot(d); // closest approach to the globe's center along the sight line
    const behindEarth = t0 > 0 && cam.lengthSq() - t0 * t0 < 1;
    const ndc = this._v.copy(world).project(this.camera);
    const onScreen = ndc.z < 1 && Math.abs(ndc.x) < 1.05 && Math.abs(ndc.y) < 1.05;
    const show = onScreen && !behindEarth;
    if (el.hidden === show) el.hidden = !show;
    if (!show) return;
    const pxPerUnit = height / (2 * Math.tan((this.camera.fov / 2) * DEG) * dist);
    const x = (ndc.x * 0.5 + 0.5) * width;
    const y = (-ndc.y * 0.5 + 0.5) * height + radius * pxPerUnit + 6;
    const p = this.labelPos[name];
    p.x = x; p.y = y;
  }
}
