// A three.js sphere wearing a 2:1 equirectangular texture.
//
// three.js SphereGeometry UVs: u=0 is longitude -180, u=0.5 is 0°, v=1 is the north pole.
// A local point at (lat, lon) is:
//   x = -cos(phi) sin(theta), y = cos(theta), z = sin(phi) sin(theta)
//   phi = (lon + 180) in radians, theta = (90 - lat) in radians
import * as THREE from 'three';

const DEG = Math.PI / 180;
const MAX_TILT = 30 * DEG; // keeps the per-band sound summaries honest (see the plan)
const FAR = 4.0;           // camera distance when fully zoomed out (leaves room for the overlays)
const NEAR = 1.18;         // closest zoom ever (0.18 globe radii above the surface)
// Zoom stops where the best texture would be magnified more than 4x on screen
// (texture pixels per device pixel at the center of the view). Past ~1.7x (0.6) the
// stills start to soften, but deeper zoom is worth it for exploring; at 4x it's blurry.
const MIN_TEXELS_PER_PX = 0.25;
const MAX_SPIN_VEL = 4;    // rad/s cap on fling speed
const VEL_WINDOW_MS = 100; // release velocity = average over the last 100 ms of drag

export function latLonToLocal(lat, lon, out = new THREE.Vector3()) {
  const phi = (lon + 180) * DEG;
  const theta = (90 - lat) * DEG;
  return out.set(-Math.cos(phi) * Math.sin(theta), Math.cos(theta), Math.sin(phi) * Math.sin(theta));
}

export class Globe {
  constructor(container, { reducedMotion = false } = {}) {
    this.container = container;
    this.reducedMotion = reducedMotion;
    this.spin = -90 * DEG; // start with longitude 0 facing the viewer
    this.tilt = 15 * DEG;
    this.spinVel = 0;
    this.autoSpin = reducedMotion ? 0 : 3 * DEG; // radians per second
    this.idleFor = 0;
    this.far = FAR; // grows on tall, narrow screens so the whole globe fits the width
    this.distance = FAR;
    this.targetDistance = FAR;
    this.detailWidth = 2048; // width of the sharpest texture available (set per dataset)
    this.minDistance = NEAR;
    this.onZoom = null; // callback(zoomFactor)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);
    this.maxTextureSize = this.renderer.capabilities.maxTextureSize;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100);
    this.camera.position.set(0, 0, FAR);

    // Unlit material: shading would change the data colors.
    this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this._extendShader();
    this.sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 192, 96), this.material);
    this.pivot = new THREE.Group(); // tilt (x) applied outside spin (y)
    this.pivot.add(this.sphere);
    this.scene.add(this.pivot);

    this.raycaster = new THREE.Raycaster();
    this._bindPointer();
    this._bindKeys();
    new ResizeObserver(() => this._resize()).observe(container);
    this._resize();
    this._apply();
  }

  // 1 when zoomed out; grows as the camera nears the surface (surface distance ratio).
  get zoomFactor() {
    return (this.far - 1) / (this.distance - 1);
  }

  // Texture pixels per device pixel at the view center, for a texture `width` wide.
  texelsPerPixel(width, distance = this.distance) {
    const h = this.renderer.domElement.height || 1; // device pixels
    const surfacePerPx = ((distance - 1) * 2 * Math.tan((this.camera.fov / 2) * DEG)) / h;
    return (width / (2 * Math.PI)) * surfacePerPx;
  }

  // Tell the globe the sharpest texture width available; zoom stops where it would blur.
  setDetailWidth(width) {
    this.detailWidth = width;
    this._updateZoomLimit();
  }

  _updateZoomLimit() {
    const h = this.renderer.domElement.height || 1;
    const minD = 1 + (MIN_TEXELS_PER_PX * 2 * Math.PI * h) / (this.detailWidth * 2 * Math.tan((this.camera.fov / 2) * DEG));
    this.minDistance = Math.min(this.far, Math.max(NEAR, minD));
    if (this.targetDistance < this.minDistance) this.targetDistance = this.minDistance;
  }

  get maxZoom() {
    return (this.far - 1) / (this.minDistance - 1);
  }

  // colorFix: 12 numbers (3x4 matrix, display/sRGB space) that map this texture's colors onto
  // NASA's frames. Used for the playback videos; stills pass nothing.
  setTexture(texture, colorFix = null) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    this.material.map = texture;
    this.material.needsUpdate = true;
    const u = this.uniforms;
    u.colorFixOn.value = colorFix ? 1 : 0;
    if (colorFix) {
      u.cf0.value.fromArray(colorFix, 0);
      u.cf1.value.fromArray(colorFix, 4);
      u.cf2.value.fromArray(colorFix, 8);
    }
  }

  // Land never changes, so it's drawn from one sharp still through a coastline mask,
  // hiding the blocky video on land. Pass nulls to turn it off.
  setLandLayer(land, mask) {
    const u = this.uniforms;
    if (land && mask) {
      land.colorSpace = THREE.SRGBColorSpace;
      land.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      mask.colorSpace = THREE.NoColorSpace;
      u.landMap.value = land;
      u.landMask.value = mask;
      u.landOn.value = 1;
    } else {
      u.landOn.value = 0;
    }
  }

  // Vector events (lightning): every flash once, drawn as a GPU point only while
  // start <= frame < end. Sharp at any zoom, no video needed.
  // events: { x, y, start, end, r (Float32Array/Uint16Array...), count, width, height }
  setEvents(events) {
    this.clearEvents();
    if (!events) return;
    const { count, width, height } = events;
    const pos = new Float32Array(count * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      const lon = (events.x[i] / width) * 360 - 180;
      const lat = 90 - (events.y[i] / height) * 180;
      latLonToLocal(lat, lon, v).multiplyScalar(1.0015).toArray(pos, i * 3); // just above the surface
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aStart', new THREE.BufferAttribute(events.start, 1));
    geo.setAttribute('aEnd', new THREE.BufferAttribute(events.end, 1));
    geo.setAttribute('aRadius', new THREE.BufferAttribute(events.r, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1.01);
    this.eventUniforms = {
      uFrame: { value: 0 },
      uPxPerUnit: { value: 1 },
      uRadPerSrcPx: { value: (2 * Math.PI) / width },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.eventUniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false, // far-side culling happens in the vertex shader
      vertexShader: `
        attribute float aStart;
        attribute float aEnd;
        attribute float aRadius;
        uniform float uFrame;
        uniform float uPxPerUnit;
        uniform float uRadPerSrcPx;
        varying float vAge;
        void main() {
          if (uFrame < aStart || uFrame >= aEnd) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // off screen
            gl_PointSize = 0.0;
            return;
          }
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          // Hide points on the far side ourselves (depth testing against the sphere
          // clipped round dots in half near the limb).
          vec3 normalView = normalize(normalMatrix * position);
          if (dot(normalView, normalize(-mv.xyz)) < 0.02) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            gl_PointSize = 0.0;
            return;
          }
          gl_Position = projectionMatrix * mv;
          // Merged storm blobs were stored at their largest size: cap so they stay dots.
          float worldRadius = clamp(aRadius / 10.0 * 0.85, 0.8, 3.0) * uRadPerSrcPx;
          gl_PointSize = max(2.0 * worldRadius * uPxPerUnit / -mv.z, 1.6);
          vAge = uFrame - aStart;
        }`,
      fragmentShader: `
        varying float vAge;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = 1.0 - smoothstep(0.65, 1.0, d);
          if (a <= 0.0) discard;
          // New flashes pop white-hot, then settle to NASA's yellow.
          float hot = 1.0 - smoothstep(0.0, 3.0, vAge);
          vec3 yellow = vec3(1.0, 0.86, 0.12);
          gl_FragColor = vec4(mix(yellow, vec3(1.0), hot * 0.85), a);
        }`,
    });
    this.eventPoints = new THREE.Points(geo, mat);
    this.eventPoints.frustumCulled = false;
    this.sphere.add(this.eventPoints); // rotates with the globe
    this._updateEventScale();
  }

  setEventsFrame(frame) {
    if (this.eventUniforms) this.eventUniforms.uFrame.value = frame;
  }

  clearEvents() {
    if (!this.eventPoints) return;
    this.sphere.remove(this.eventPoints);
    this.eventPoints.geometry.dispose();
    this.eventPoints.material.dispose();
    this.eventPoints = null;
    this.eventUniforms = null;
  }

  _updateEventScale() {
    if (!this.eventUniforms) return;
    // Device pixels per world unit at distance 1 (divided by depth in the shader).
    const h = this.renderer.domElement.height || 1;
    this.eventUniforms.uPxPerUnit.value = h / (2 * Math.tan((this.camera.fov / 2) * DEG));
  }

  _extendShader() {
    const blank = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
    blank.needsUpdate = true;
    this.uniforms = {
      landMap: { value: blank },
      landMask: { value: blank },
      landOn: { value: 0 },
      colorFixOn: { value: 0 },
      cf0: { value: new THREE.Vector4(1, 0, 0, 0) },
      cf1: { value: new THREE.Vector4(0, 1, 0, 0) },
      cf2: { value: new THREE.Vector4(0, 0, 1, 0) },
    };
    this.material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
uniform sampler2D landMap;
uniform sampler2D landMask;
uniform float landOn;
uniform float colorFixOn;
uniform vec4 cf0;
uniform vec4 cf1;
uniform vec4 cf2;`,
        )
        .replace(
          '#include <map_fragment>',
          `#include <map_fragment>
#ifdef USE_MAP
  if (colorFixOn > 0.5) {
    // The matrix was fitted in display (sRGB) space: convert, apply, convert back.
    vec3 c = sRGBTransferOETF(vec4(diffuseColor.rgb, 1.0)).rgb;
    c = clamp(vec3(dot(cf0.xyz, c) + cf0.w, dot(cf1.xyz, c) + cf1.w, dot(cf2.xyz, c) + cf2.w), 0.0, 1.0);
    diffuseColor.rgb = sRGBTransferEOTF(vec4(c, 1.0)).rgb;
  }
  if (landOn > 0.5) {
    float m = texture2D(landMask, vMapUv).r;
    diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(landMap, vMapUv).rgb, m);
  }
#endif`,
        );
    };
    this.material.customProgramCacheKey = () => 'globe-land-colorfix-v2';
  }

  spinBy(rad) {
    this.spin += rad;
    this.idleFor = 0;
    this._apply();
  }

  tiltBy(rad) {
    this.tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, this.tilt + rad));
    this.idleFor = 0;
    this._apply();
  }

  // factor > 1 zooms in, < 1 zooms out (multiplies the surface distance).
  zoomBy(factor) {
    const surface = (this.targetDistance - 1) / factor;
    this.targetDistance = Math.max(this.minDistance, Math.min(this.far, 1 + surface));
    this.idleFor = 0;
  }

  update(dt) {
    this.idleFor += dt;
    if (!this.dragging) {
      this.spin += this.spinVel * dt;
      this.spinVel *= Math.pow(0.08, dt); // momentum decays smoothly
      if (Math.abs(this.spinVel) < 0.005) this.spinVel = 0;
      // Auto-spin only when idle and zoomed out, and ease it in rather than jumping.
      if (this.idleFor > 4 && this.zoomFactor < 1.2) {
        const ease = Math.min(1, (this.idleFor - 4) / 2);
        this.spin += this.autoSpin * ease * dt;
      }
    }
    // Smooth zoom toward the target
    const prev = this.distance;
    this.distance += (this.targetDistance - this.distance) * (1 - Math.exp(-dt * 10));
    if (Math.abs(this.distance - prev) > 1e-4) {
      this.camera.position.z = this.distance;
      this.onZoom?.(this.zoomFactor);
    }
    this._apply();
    this.renderer.render(this.scene, this.camera);
  }

  // Lat/lon under a point in the container (pixels), or null if off the globe.
  pick(px, py) {
    const r = this.container.getBoundingClientRect();
    const ndc = new THREE.Vector2((px / r.width) * 2 - 1, -(py / r.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    // Non-recursive: the sphere's children (825k lightning points) have no UVs and are slow to test.
    const hit = this.raycaster.intersectObject(this.sphere, false)[0];
    if (!hit?.uv) return null;
    return { lat: hit.uv.y * 180 - 90, lon: hit.uv.x * 360 - 180, x: ndc.x };
  }

  center() {
    const r = this.container.getBoundingClientRect();
    return this.pick(r.width / 2, r.height / 2);
  }

  // For a local unit vector: how directly it faces the viewer (-1..1) and its screen x (-1..1).
  view(localVec, out = new THREE.Vector3()) {
    out.copy(localVec).applyMatrix4(this.sphere.matrixWorld);
    return { facing: out.z, x: out.x };
  }

  _apply() {
    this.sphere.rotation.y = this.spin;
    this.pivot.rotation.x = this.tilt;
    this.pivot.updateMatrixWorld(true);
  }

  _resize() {
    const { clientWidth: w, clientHeight: h } = this.container;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // Fit the whole globe across the narrower side (portrait phones), with ~10% margin.
    const halfW = Math.min(1, this.camera.aspect) * Math.tan((this.camera.fov / 2) * DEG) * 0.9;
    const fitDistance = 1 / Math.sin(Math.atan(halfW));
    const wasZoomedOut = this.targetDistance >= this.far - 1e-3;
    this.far = Math.max(FAR, fitDistance);
    if (wasZoomedOut || this.targetDistance > this.far) this.targetDistance = this.far;
    this._updateZoomLimit(); // a bigger window needs more texels for the same zoom
    this._updateEventScale();
  }

  _bindPointer() {
    const el = this.renderer.domElement;
    const pointers = new Map(); // active pointers, for pinch zoom
    let samples = [];           // recent {t, spin} for release velocity
    let last = null;
    let pinchDist = 0;

    // Radians per pixel: the surface should track the finger at any zoom.
    const radPerPx = () => (2 * (this.distance - 1) * Math.tan(17.5 * DEG)) / this.container.clientHeight;

    el.addEventListener('pointerdown', (e) => {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      el.setPointerCapture(e.pointerId);
      if (pointers.size === 1) {
        this.dragging = true;
        this.spinVel = 0;
        last = { x: e.clientX, y: e.clientY };
        samples = [{ t: performance.now(), spin: this.spin }];
      } else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
      }
    });

    el.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchDist) this.zoomBy(d / pinchDist);
        pinchDist = d;
        return;
      }
      if (!this.dragging || !last) return;
      const k = radPerPx();
      this.spinBy((e.clientX - last.x) * k);
      this.tiltBy((e.clientY - last.y) * k);
      last = { x: e.clientX, y: e.clientY };
      const now = performance.now();
      samples.push({ t: now, spin: this.spin });
      while (samples.length > 2 && now - samples[0].t > VEL_WINDOW_MS) samples.shift();
    });

    const end = (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size > 0) { last = null; return; } // still pinching
      if (this.dragging) {
        // Velocity over the last ~100 ms. If the pointer was held still before release,
        // the window is stale and the globe should not fling (this was the "snap").
        const now = performance.now();
        const recent = samples.filter((s) => now - s.t <= VEL_WINDOW_MS);
        if (recent.length >= 2) {
          const dtS = (recent[recent.length - 1].t - recent[0].t) / 1000;
          const v = dtS > 0.016 ? (recent[recent.length - 1].spin - recent[0].spin) / dtS : 0;
          this.spinVel = Math.max(-MAX_SPIN_VEL, Math.min(MAX_SPIN_VEL, v));
        } else {
          this.spinVel = 0;
        }
      }
      this.dragging = false;
      last = null;
      pinchDist = 0;
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      // Trackpad pinch arrives as ctrl+wheel with small deltas; mouse wheels as big steps.
      const scale = e.ctrlKey ? 0.01 : 0.0015;
      this.zoomBy(Math.exp(-e.deltaY * scale));
    }, { passive: false });
  }

  _bindKeys() {
    // The container has role="application" + tabindex="0", so screen readers pass keys through.
    this.container.addEventListener('keydown', (e) => {
      // Shift is reserved for "read the value aloud" (see main.js), so no Shift modifier here.
      // Steps shrink as you zoom in so keyboard users can make fine moves.
      const step = (10 * DEG) / Math.sqrt(this.zoomFactor);
      const keys = {
        ArrowLeft: () => this.spinBy(step),
        ArrowRight: () => this.spinBy(-step),
        ArrowUp: () => this.tiltBy(step / 2),
        ArrowDown: () => this.tiltBy(-step / 2),
        '+': () => this.zoomBy(1.5),
        '=': () => this.zoomBy(1.5),
        '-': () => this.zoomBy(1 / 1.5),
        _: () => this.zoomBy(1 / 1.5),
      };
      if (keys[e.key]) {
        e.preventDefault();
        this.spinVel = 0;
        keys[e.key]();
      }
    });
  }
}
