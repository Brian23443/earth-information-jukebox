// The sky behind the globe: NASA's star map, the Sun, the Moon and the planets where they
// really were on the date being shown (see ephemeris.js), seen from Earth.
//
// Drawn in its own pass from a camera at the Earth's center, so it sits at infinity: zooming
// out shrinks the Earth but never shifts the sky. It turns with the globe, the same as flying
// around the planet. Positions are real; sizes are not: true sizes would be specks (the
// Moon is half a degree), so bodies are drawn a few times larger.
//
// Textures (web/public/sky/, made by pipeline/skymaps.py):
//   stars.jpg  NASA SVS Deep Star Maps 2020 (real stars and Milky Way, J2000 RA/Dec)
//   moon.jpg   NASA SVS CGI Moon Kit (LRO)
//   others     Solar System Scope (CC BY 4.0), built from NASA mission imagery
import * as THREE from 'three';
import { noonSiderealDeg, skyPositions } from './ephemeris.js';

const DEG = Math.PI / 180;
const R = 50; // distance of the Sun, Moon and planets from the sky camera
const STAR_R = 90; // star sphere, behind everything

// Angular radius drawn (deg), the name people see, pole (RA, Dec), and a stand-in color
// until the texture arrives.
const BODIES = {
  moon: { size: 1.0, label: 'Moon', pole: [270, 66.5], color: 0x9a9894 },
  mercury: { size: 0.28, label: 'Mercury', pole: [281.0, 61.4], color: 0x8f8a85 },
  venus: { size: 0.42, label: 'Venus', pole: [272.8, 67.2], color: 0xe8d9b0 },
  mars: { size: 0.34, label: 'Mars', pole: [317.7, 52.9], color: 0xb5643a },
  jupiter: { size: 0.55, label: 'Jupiter', pole: [268.1, 64.5], color: 0xc9b393 },
  saturn: { size: 0.45, label: 'Saturn', pole: [40.6, 83.5], color: 0xd6c08f },
  uranus: { size: 0.3, label: 'Uranus', pole: [257.3, -15.2], color: 0xa6d8e0 },
  neptune: { size: 0.3, label: 'Neptune', pole: [299.4, 43.5], color: 0x4f6fd6 },
};
const SUN_CORE = 1.1; // deg
const SUN_R = R * 0.9; // a little nearer than the planets so it covers those behind it
// Saturn's ring texture spans 1.215-2.335 Saturn radii (C ring inner edge to A ring outer
// edge; puts the Cassini division at 1.95-2.03, where it is).
const RING_IN = 1.215, RING_OUT = 2.335;

// Equatorial (x toward RA 0, z toward the north pole) → the sky frame, which matches the
// globe's (lat = Dec, lon = RA): x = cos(lon)cos(lat), y = sin(lat), z = -sin(lon)cos(lat).
function eqToLocal([x, y, z], out = new THREE.Vector3()) {
  return out.set(x, z, -y).normalize();
}
function raDecToLocal(ra, dec, out = new THREE.Vector3()) {
  const c = Math.cos(dec * DEG);
  return out.set(c * Math.cos(ra * DEG), Math.sin(dec * DEG), -c * Math.sin(ra * DEG));
}

// Textures hold display (sRGB) values and these shaders write display values, so skip
// three's sRGB decode.
function loadTexture(loader, file, onLoad) {
  return loader.load(`sky/${file}`, (t) => {
    t.colorSpace = THREE.NoColorSpace;
    t.anisotropy = 4;
    onLoad?.(t);
  });
}

function starMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uMap: { value: null }, uOn: { value: 0 }, uGain: { value: 0.85 } },
    side: THREE.BackSide,
    depthWrite: false,
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap; uniform float uOn; uniform float uGain; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float ra = atan(-d.z, d.x);            // radians, east positive
        float dec = asin(clamp(d.y, -1.0, 1.0));
        // NASA map: RA 0h at the center, RA increasing to the left.
        vec2 uv = vec2(fract(0.5 - ra / 6.2831853), 0.5 + dec / 3.1415927);
        vec3 c = uOn > 0.5 ? texture2D(uMap, uv).rgb * uGain : vec3(0.0);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}

function planetMaterial(color) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: null }, uOn: { value: 0 }, uColor: { value: new THREE.Color(color) },
      uLight: { value: new THREE.Vector3(1, 0, 0) },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv; varying vec3 vWorldN;
      void main() {
        vUv = uv;
        vWorldN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap; uniform float uOn; uniform vec3 uColor; uniform vec3 uLight;
      varying vec2 vUv; varying vec3 vWorldN;
      void main() {
        vec3 c = uOn > 0.5 ? texture2D(uMap, vUv).rgb : uColor;
        // Lit from the Sun's real direction, so the Moon and Venus show their true phase.
        float d = dot(normalize(vWorldN), uLight);
        float lit = smoothstep(-0.04, 0.25, d) * (0.35 + 0.65 * max(d, 0.0));
        gl_FragColor = vec4(c * (lit + 0.015), 1.0);
      }`,
  });
}

function ringMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: null }, uOn: { value: 0 },
      uLight: { value: new THREE.Vector3(1, 0, 0) }, uNormal: { value: new THREE.Vector3(0, 1, 0) },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      varying vec2 vP;
      void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap; uniform float uOn; uniform vec3 uLight; uniform vec3 uNormal; varying vec2 vP;
      void main() {
        float u = (length(vP) - ${RING_IN.toFixed(3)}) / ${(RING_OUT - RING_IN).toFixed(3)};
        vec4 t = uOn > 0.5 ? texture2D(uMap, vec2(u, 0.5)) : vec4(0.45, 0.41, 0.33, 0.6);
        float light = 0.3 + 0.7 * abs(dot(uNormal, uLight));
        gl_FragColor = vec4(min(t.rgb * 1.9, 1.0) * light, t.a * 0.9);
      }`,
  });
}

function sunMaterial(coreFrac) {
  return new THREE.ShaderMaterial({
    uniforms: { uCore: { value: coreFrac }, uMap: { value: null }, uOn: { value: 0 }, uLod: { value: 3 } },
    transparent: true,
    depthWrite: false,
    // Pure additive light. The canvas is transparent over the page background and
    // premultiplied, so alpha must grow with the light added (alpha = brightest channel).
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneFactor,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uCore; uniform sampler2D uMap; uniform float uOn; uniform float uLod; varying vec2 vUv;
      void main() {
        float r = length(vUv) / uCore;          // 1 = edge of the disc
        float disc = 1.0 - smoothstep(0.92, 1.0, r);
        vec3 surface = vec3(1.0, 0.97, 0.9);
        if (uOn > 0.5 && r < 1.0) {
          // The flat quad as a ball: texture coordinates of the point under this pixel.
          vec2 q = vUv / uCore;
          vec3 n = vec3(q, sqrt(max(0.0, 1.0 - dot(q, q))));
          vec2 uv = vec2(0.5 + atan(n.x, n.z) / 6.2831853, 0.5 + asin(n.y) / 3.1415927);
          surface = mix(surface, textureLod(uMap, uv, uLod).rgb * 1.5, 0.55);
        }
        float limb = mix(0.7, 1.0, sqrt(max(0.0, 1.0 - r * r)));
        float glow = 0.55 * exp(-(r - 1.0) * 0.9) + 0.25 / (1.0 + r * r);
        float fade = 1.0 - smoothstep(0.6, 1.0, length(vUv));
        vec3 c = surface * disc * limb + vec3(1.0, 0.78, 0.5) * glow * (1.0 - disc) * fade;
        gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)));
      }`,
  });
}

export class Sky {
  // follow: the object that turns with the Earth (the globe sphere); mainCamera: the
  // globe's camera, whose view direction and lens the sky camera copies.
  constructor({ follow, mainCamera, container }) {
    this.follow = follow;
    this.mainCamera = mainCamera;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(mainCamera.fov, mainCamera.aspect, 0.5, 200);
    this.root = new THREE.Group(); // copies the globe's rotation
    this.group = new THREE.Group(); // equatorial frame inside it; rotation.y = -sidereal angle
    this.root.add(this.group);
    this.scene.add(this.root);

    const loader = new THREE.TextureLoader();
    // Star map: 9 MB, so it streams in after everything else; the sky is black until then.
    this.stars = new THREE.Mesh(new THREE.SphereGeometry(STAR_R, 96, 48), starMaterial());
    this.stars.renderOrder = -3;
    this.group.add(this.stars);

    const glowDeg = SUN_CORE * 8;
    const half = SUN_R * Math.tan(glowDeg * DEG);
    this.sun = new THREE.Mesh(new THREE.PlaneGeometry(half * 2, half * 2), sunMaterial(SUN_CORE / glowDeg));
    this.sun.renderOrder = 1; // after the planets: a planet behind the Sun is lost in its glare
    this.sun.frustumCulled = false;
    this.scene.add(this.sun);
    this.sunLocal = new THREE.Vector3(1, 0, 0);

    const sphereGeo = new THREE.SphereGeometry(1, 64, 32);
    this.bodies = {};
    for (const [name, b] of Object.entries(BODIES)) {
      const mesh = new THREE.Mesh(sphereGeo, planetMaterial(b.color));
      mesh.scale.setScalar(R * Math.tan(b.size * DEG));
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), raDecToLocal(b.pole[0], b.pole[1]));
      if (name === 'saturn') {
        const ring = new THREE.Mesh(new THREE.RingGeometry(RING_IN, RING_OUT, 128, 1), ringMaterial());
        ring.rotation.x = -Math.PI / 2; // ring plane = Saturn's equator
        mesh.add(ring);
        this.ring = ring;
      }
      this.group.add(mesh);
      this.bodies[name] = { mesh, light: new THREE.Vector3(1, 0, 0), ...b };
    }

    // Planet textures are small (2048x1024, 0.03-0.6 MB each); load them first.
    const useMap = (mat) => (t) => { mat.uniforms.uMap.value = t; mat.uniforms.uOn.value = 1; };
    for (const [name, b] of Object.entries(this.bodies)) loadTexture(loader, `${name}.jpg`, useMap(b.mesh.material));
    loadTexture(loader, 'saturn_ring.png', useMap(this.ring.material));
    loadTexture(loader, 'sun.jpg', useMap(this.sun.material));
    loadTexture(loader, 'stars.jpg', (t) => {
      // Magnified on screen, so no mipmaps (they'd also draw a seam where RA wraps).
      t.generateMipmaps = false;
      t.minFilter = THREE.LinearFilter;
      useMap(this.stars.material)(t);
    });

    // Names, drawn as page text (sharp at any size).
    this.labelLayer = document.createElement('div');
    this.labelLayer.className = 'sky-labels';
    this.labelLayer.setAttribute('aria-hidden', 'true');
    container.appendChild(this.labelLayer);
    this.labelPos = {};
    for (const name of ['sun', ...Object.keys(BODIES)]) {
      const el = document.createElement('span');
      el.textContent = name === 'sun' ? 'Sun' : BODIES[name].label;
      el.hidden = true;
      this.labelLayer.appendChild(el);
      this.labelPos[name] = { el, x: 0, y: 0 };
    }

    this.lastMs = null;
    this._v = new THREE.Vector3();
    this._w = new THREE.Vector3();
    this._q = new THREE.Quaternion();
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
  }

  // After the globe has turned: match its rotation and the camera, aim the light, place labels.
  update(width, height, pixelHeight) {
    const cam = this.camera;
    const main = this.mainCamera;
    if (cam.fov !== main.fov || cam.aspect !== main.aspect) {
      cam.fov = main.fov;
      cam.aspect = main.aspect;
      cam.updateProjectionMatrix();
    }
    cam.quaternion.copy(main.quaternion);
    this.root.quaternion.copy(this.follow.getWorldQuaternion(this._q));
    this.scene.updateMatrixWorld(true);

    const m = this.group.matrixWorld;
    const sunWorld = this._w.copy(this.sunLocal).transformDirection(m).multiplyScalar(SUN_R);
    this.sun.position.copy(sunWorld);
    this.sun.quaternion.copy(cam.quaternion);
    // Sun surface texture: pick the mip level for its size on screen (the ball mapping
    // would otherwise confuse the GPU's automatic choice at the wrap).
    const discPx = (2 * Math.tan(SUN_CORE * DEG) / (2 * Math.tan((cam.fov / 2) * DEG))) * pixelHeight;
    this.sun.material.uniforms.uLod.value = Math.max(0, Math.log2(2048 / Math.max(1, Math.PI * discPx)));
    this._place('sun', sunWorld, SUN_CORE, width, height);

    for (const [name, b] of Object.entries(this.bodies)) {
      const light = this._v.copy(b.light).transformDirection(m);
      b.mesh.material.uniforms.uLight.value.copy(light);
      if (name === 'saturn') {
        this.ring.material.uniforms.uLight.value.copy(light);
        this.ring.material.uniforms.uNormal.value.set(0, 1, 0).applyQuaternion(b.mesh.getWorldQuaternion(this._q));
      }
      this._place(name, b.mesh.getWorldPosition(this._w), b.size, width, height);
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
  _place(name, world, sizeDeg, width, height) {
    const p = this.labelPos[name];
    // The sky is at infinity: the sight line from the globe's camera runs along `world`.
    const d = this._v.copy(world).normalize();
    const c = this.mainCamera.position;
    const t0 = -c.dot(d);
    const behindEarth = t0 > 0 && c.lengthSq() - t0 * t0 < 1;
    const ndc = this._v.copy(world).project(this.camera);
    const onScreen = ndc.z < 1 && Math.abs(ndc.x) < 1.05 && Math.abs(ndc.y) < 1.05;
    const show = onScreen && !behindEarth;
    if (p.el.hidden === show) p.el.hidden = !show;
    if (!show) return;
    const radiusPx = (Math.tan(sizeDeg * DEG) / Math.tan((this.camera.fov / 2) * DEG)) * (height / 2);
    p.x = (ndc.x * 0.5 + 0.5) * width;
    p.y = (-ndc.y * 0.5 + 0.5) * height + radiusPx + 6;
  }
}
