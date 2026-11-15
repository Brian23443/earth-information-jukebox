// A three.js sphere wearing a 2:1 equirectangular texture.
//
// three.js SphereGeometry UVs: u=0 is longitude -180, u=0.5 is 0°, v=1 is the north pole.
// A local point at (lat, lon) is:
//   x = -cos(phi) sin(theta), y = cos(theta), z = sin(phi) sin(theta)
//   phi = (lon + 180) in radians, theta = (90 - lat) in radians
import * as THREE from 'three';
import { Sky } from './sky.js';

const DEG = Math.PI / 180;
const MAX_TILT = 30 * DEG; // keeps the per-band sound summaries honest (see the plan)
const FAR = 4.0;           // camera distance when fully zoomed out (leaves room for the overlays)
const NEAR = 1.18;         // closest zoom ever (0.18 globe radii above the surface)
const OUT_FACTOR = 4;      // zoom out to 4x the default distance: the Earth shrinks to ~1/5 of the view
// Zoom stops where the best texture would be magnified more than 4x on screen
// (texture pixels per device pixel at the center of the view). Past ~1.7x (0.6) the
// stills start to soften, but deeper zoom is worth it for exploring; at 4x it's blurry.
const MIN_TEXELS_PER_PX = 0.25;
const MAX_SPIN_VEL = 4;    // rad/s cap on fling speed
const SHOW_DRIFT = 1.6 * DEG; // rad/s, guided show between camera moves
const SHOW_MAX_TILT = 75 * DEG; // the show can look down on the poles
// Arrow keys: held keys accelerate to a steady speed, release coasts to a stop.
// (Speeds shrink with zoom so keyboard users can make fine moves when zoomed in.)
const KEY_SPIN_MAX = 80 * DEG;    // rad/s at full speed, zoomed out
const KEY_TILT_MAX = 40 * DEG;
const KEY_ACCEL_TIME = 0.45;      // s from rest to full speed
const KEY_DECEL_TIME = 0.35;      // s from full speed to rest after release
const KEY_TAP_KICK = 0.45;        // share of full speed a fresh press starts at (taps still move ~3-4°)
const ARROWS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']);
const VEL_WINDOW_MS = 100; // release velocity = average over the last 100 ms of drag

// Dataset-switch transitions (globe.swapStyle; ?swap=sweep|bloom|scan|dissolve to try them).
export const SWAP_STYLES = {
  sweep: { id: 0, seconds: 0.8, ease: false },
  bloom: { id: 1, seconds: 1.3, ease: true },
  scan: { id: 2, seconds: 1.2, ease: true },
  dissolve: { id: 3, seconds: 1.1, ease: true },
};

const EVENT_AFTERGLOW = 8; // summary frames a finished flash keeps fading (~0.5 s at 1x)

// First index in a sorted array whose value is >= x.
function lowerBound(arr, x) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

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
    this.cover = null;
    this.swapStyle = 'bloom';
    this.flight = null;
    this.held = false; // true during the guided show: no auto-spin
    this.eventSets = new Set(); // lightning dot buffers, kept between switches
    this.eventPoints = null;
    this.atmosphere = this._makeAtmosphere();
    this.scene.add(this.atmosphere); // doesn't turn: the glow follows the light, not the land
    // Stars, Sun, Moon and planets for the shown date; they turn with the Earth.
    // Drawn first in its own pass (see update), so it sits at infinity behind the Earth.
    this.sky = new Sky({ follow: this.sphere, mainCamera: this.camera, container });
    this.renderer.autoClear = false;

    this.raycaster = new THREE.Raycaster();
    this._bindPointer();
    this._bindKeys();
    new ResizeObserver(() => this._resize()).observe(container);
    this._resize();
    this._apply();
  }

  // Farthest the camera may go (zooming out past the default view, to see more sky).
  get maxDistance() {
    return this.far * OUT_FACTOR;
  }

  // 1 at the default view; grows as the camera nears the surface (surface distance ratio),
  // below 1 when zoomed out past it.
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
    if (texture.colorSpace !== THREE.SRGBColorSpace) {
      texture.colorSpace = THREE.SRGBColorSpace;
      // Re-upload: the GPU format depends on the colour space. (Videos re-upload every
      // frame anyway, and forcing one before a frame exists logs "no video".)
      if (!texture.isVideoTexture) texture.needsUpdate = true;
    }
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
      if (land.colorSpace !== THREE.SRGBColorSpace) { land.colorSpace = THREE.SRGBColorSpace; land.needsUpdate = true; }
      if (mask.colorSpace !== THREE.NoColorSpace) { mask.colorSpace = THREE.NoColorSpace; mask.needsUpdate = true; }
      land.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      u.landMap.value = land;
      u.landMask.value = mask;
      u.landOn.value = 1;
    } else {
      u.landOn.value = 0;
    }
  }

  // Build a dataset's dot buffers once (they're 50+ MB on the GPU): later switches only
  // fade them in and out. The arrays come ready-made from events-worker.js.
  _eventPoints(events) {
    if (events._points) return events._points;
    const { width, height } = events;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(events.pos, 3));
    geo.setAttribute('aTime', new THREE.BufferAttribute(events.time, 2));
    geo.setAttribute('aDot', new THREE.BufferAttribute(events.dot, 2));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1.01);
    geo.setDrawRange(0, 0);
    const gl = this.renderer.getContext();
    const c = this.renderer.domElement;
    const uniforms = {
      uFrame: { value: 0 },
      uAfter: { value: EVENT_AFTERGLOW },
      uOpacity: { value: 0 },
      uViewport: { value: new THREE.Vector2(c.width || 1, c.height || 1) },
      uSrc: { value: new THREE.Vector2(width, height) },
      uMaxPoint: { value: Math.min(512, gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1]) },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false, // far-side culling happens in the vertex shader
      // Light, kept at the brightest of overlapping dots (adding them blew busy storms out
      // to white; NASA's movie keeps them yellow). Alpha follows the light so the
      // transparent canvas composites it correctly past the globe's edge.
      blending: THREE.CustomBlending,
      blendEquation: THREE.MaxEquation,
      blendEquationAlpha: THREE.MaxEquation,
      vertexShader: /* glsl */ `
        attribute vec2 aTime;   // start, end (summary frames)
        attribute vec2 aDot;    // radius (source px), peak brightness 0-1
        uniform float uFrame;
        uniform float uAfter;
        uniform vec2 uViewport; // device px
        uniform vec2 uSrc;      // source map size (4096 x 2048)
        uniform float uMaxPoint;
        varying vec2 vEast;     // screen px per source px east
        varying vec2 vSouth;    // screen px per source px south (+y in the map)
        varying float vSize;
        varying vec2 vDot;
        varying float vAge;
        varying float vSince;
        vec2 px(vec4 clip) { return clip.xy / clip.w * 0.5 * uViewport; }
        void hide() { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; }
        void main() {
          float age = uFrame - aTime.x;
          float since = uFrame - aTime.y; // >= 0: finished, fading out
          if (age < 0.0 || since >= uAfter) { hide(); return; }
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          // Hide dots on the far side ourselves (depth testing clipped them at the limb).
          vec3 normalView = normalize(normalMatrix * position);
          if (dot(normalView, normalize(-mv.xyz)) < 0.02) { hide(); return; }
          vec4 clip = projectionMatrix * mv;
          vec3 p = normalize(position);
          vec3 east = vec3(p.z, 0.0, -p.x) * (6.2831853 / uSrc.x);
          vec3 north = normalize(vec3(0.0, 1.0, 0.0) - p * p.y) * (3.1415927 / uSrc.y);
          vec2 s0 = px(clip);
          vEast = px(projectionMatrix * modelViewMatrix * vec4(position + east, 1.0)) - s0;
          vSouth = px(projectionMatrix * modelViewMatrix * vec4(position - north, 1.0)) - s0;
          float reach = aDot.x * 1.6 + 3.0; // dot + halo, source px
          vec2 ext = (abs(vEast) + abs(vSouth)) * reach;
          vSize = clamp(2.0 * max(ext.x, ext.y) + 2.0, 2.0, uMaxPoint);
          gl_PointSize = vSize;
          gl_Position = clip;
          vDot = aDot;
          vAge = age;
          vSince = since;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uAfter;
        uniform float uOpacity;
        varying vec2 vEast;
        varying vec2 vSouth;
        varying float vSize;
        varying vec2 vDot;
        varying float vAge;
        varying float vSince;
        void main() {
          vec2 sp = (gl_PointCoord - 0.5) * vSize;
          sp.y = -sp.y; // gl_PointCoord runs down the screen
          mat2 J = mat2(vEast, vSouth);
          if (abs(determinant(J)) < 1e-8) discard;
          float d = length(inverse(J) * sp); // distance from the centre, source px
          // Keep tiny dots at least ~1 screen pixel wide so they never vanish.
          float r = max(vDot.x, 0.7 / max(length(vEast), 1e-3));
          // A soft glow like NASA's dots: bright centre fading over the outer half, then a
          // faint halo beyond.
          float core = vDot.y * (1.0 - smoothstep(0.35, 1.05, d / r));
          float glow = vDot.y * exp(-pow(max(d - r, 0.0) / 1.8, 2.0)) * 0.45;
          // New dots pop white-hot, burn NASA's yellow, then cool to orange as they fade.
          float hot = 1.0 - smoothstep(0.0, 3.0, vAge);
          float after = clamp(vSince / uAfter, 0.0, 1.0);
          float fade = vSince < 0.0 ? 1.0 : exp(-vSince / (uAfter * 0.3)) * (1.0 - after);
          vec3 coreColor = mix(vec3(1.0, 0.86, 0.12), vec3(1.0, 0.97, 0.82), hot * 0.85);
          coreColor = mix(coreColor, vec3(1.0, 0.45, 0.1), smoothstep(0.0, 0.5, after) * step(0.0, vSince));
          // Max-blended, so take the brighter of the dot and its halo rather than adding.
          vec3 c = max(coreColor * min(core * 1.15, 1.0), vec3(1.0, 0.58, 0.14) * glow) * fade * uOpacity;
          float a = max(c.r, max(c.g, c.b));
          if (a < 0.003) discard;
          gl_FragColor = vec4(c, a);
        }`,
    });
    const pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false;
    pts.userData = { uniforms, starts: events.start, span: events.maxLife + EVENT_AFTERGLOW };
    this.sphere.add(pts); // rotates with the globe; invisible until shown
    this.eventSets.add(pts);
    events._points = pts;
    return pts;
  }

  // Upload a dataset's dots ahead of time (on the next frame, while nothing else is happening).
  prepareEvents(events) {
    if (events) this._eventPoints(events);
  }

  // Lightning (pipeline/events.py): every dot NASA drew, redrawn as a soft glow that stays
  // sharp at any zoom, with a short afterglow. Each dot is one GPU point; the vertex shader
  // works out how one source pixel lands on screen there (east and south vectors), so dots
  // flatten correctly toward the globe's edge. Fades in.
  setEvents(events) {
    this.clearEvents();
    if (!events) return;
    this.eventPoints = this._eventPoints(events);
    this.eventUniforms = this.eventPoints.userData.uniforms;
  }

  // Only dots that started within the longest lifetime (+ afterglow) can be showing, and
  // they're sorted by start: draw just that slice.
  setEventsFrame(frame) {
    if (!this.eventPoints) return;
    const { uniforms, starts, span } = this.eventPoints.userData;
    uniforms.uFrame.value = frame;
    const lo = lowerBound(starts, frame - span);
    const hi = lowerBound(starts, frame + 1e-3);
    this.eventPoints.geometry.setDrawRange(lo, Math.max(0, hi - lo));
  }

  // Fade the current dots out (their buffers stay, for next time).
  clearEvents() {
    if (!this.eventPoints) return;
    this.eventPoints = null;
    this.eventUniforms = null;
  }

  // Dots fade in when shown and out when hidden (~0.4 s).
  _stepEvents(dt) {
    const k = 1 - Math.exp(-dt * 8);
    for (const pts of this.eventSets) {
      const u = pts.userData.uniforms.uOpacity;
      const target = pts === this.eventPoints ? 1 : 0;
      u.value += (target - u.value) * k;
      if (target === 0 && u.value < 0.01) {
        u.value = 0;
        pts.geometry.setDrawRange(0, 0);
      }
    }
  }

  _updateEventScale() {
    const c = this.renderer.domElement;
    for (const pts of this.eventSets ?? []) pts.userData.uniforms.uViewport.value.set(c.width || 1, c.height || 1);
  }


  _extendShader() {
    const blank = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
    blank.needsUpdate = true;
    this.uniforms = {
      landMap: { value: blank },
      landMask: { value: blank },
      landOn: { value: 0 },
      landPrevOn: { value: 0 }, // the outgoing dataset had the land layer (during a swap)
      colorFixOn: { value: 0 },
      cf0: { value: new THREE.Vector4(1, 0, 0, 0) },
      cf1: { value: new THREE.Vector4(0, 1, 0, 0) },
      cf2: { value: new THREE.Vector4(0, 0, 1, 0) },
      smoothOn: { value: 1 }, // bicubic sampling where texels are magnified (zoomed in)
      // Cover (start screen): a realistic sunlit Earth, then the data revealed across it.
      coverOn: { value: 0 },
      coverDay: { value: blank },
      coverNight: { value: blank },
      coverSun: { value: new THREE.Vector3(-0.95, 0.26, 0.16).normalize() }, // view space: from the left
      coverReveal: { value: 0 }, // 0 = all realistic Earth, 1 = all data
      // Switching datasets: the previous texture, swept away left to right.
      swapPrev: { value: blank },
      swapOn: { value: 0 },
      swapPrevVideo: { value: 0 }, // video textures hold sRGB values (decoded in the shader)
      swapT: { value: 1 },
      swapStyle: { value: 1 },
    };
    this.material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vViewN;\nvarying vec3 vObjPos;')
        .replace('#include <fog_vertex>', 'vViewN = normalize(normalMatrix * normal);\nvObjPos = position;\n#include <fog_vertex>');
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
uniform sampler2D landMap;
uniform sampler2D landMask;
uniform float landOn;
uniform float landPrevOn;
uniform float colorFixOn;
uniform vec4 cf0;
uniform vec4 cf1;
uniform vec4 cf2;
uniform float smoothOn;
uniform float coverOn;
uniform sampler2D coverDay;
uniform sampler2D coverNight;
uniform vec3 coverSun;
uniform float coverReveal;
uniform sampler2D swapPrev;
uniform float swapOn;
uniform float swapPrevVideo;
uniform float swapT;
uniform float swapStyle; // 0 sweep, 1 corruption bloom, 2 satellite scan, 3 dissolve
varying vec3 vViewN;
varying vec3 vObjPos; // point on the unit globe, turns with it (noise sticks to the land)

float gHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float gNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(gHash(i), gHash(i + vec3(1,0,0)), f.x), mix(gHash(i + vec3(0,1,0)), gHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(gHash(i + vec3(0,0,1)), gHash(i + vec3(1,0,1)), f.x), mix(gHash(i + vec3(0,1,1)), gHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float gFbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * gNoise(p); p *= 2.07; a *= 0.5; } return s; }

// Catmull-Rom bicubic in 9 bilinear taps. Only used where one texel covers more than a
// screen pixel: there, plain bilinear shows soft blocks; zoomed out it would just cost time
// (and skip mipmaps), so it fades back to the normal lookup.
vec4 sampleCatmullRom(sampler2D tex, vec2 uv, vec2 size) {
  vec2 p = uv * size;
  vec2 t1 = floor(p - 0.5) + 0.5;
  vec2 f = p - t1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 t0 = (t1 - 1.0) / size;
  vec2 t3 = (t1 + 2.0) / size;
  vec2 t12 = (t1 + w2 / w12) / size;
  vec4 r = vec4(0.0);
  r += textureLod(tex, vec2(t0.x,  t0.y),  0.0) * w0.x  * w0.y;
  r += textureLod(tex, vec2(t12.x, t0.y),  0.0) * w12.x * w0.y;
  r += textureLod(tex, vec2(t3.x,  t0.y),  0.0) * w3.x  * w0.y;
  r += textureLod(tex, vec2(t0.x,  t12.y), 0.0) * w0.x  * w12.y;
  r += textureLod(tex, vec2(t12.x, t12.y), 0.0) * w12.x * w12.y;
  r += textureLod(tex, vec2(t3.x,  t12.y), 0.0) * w3.x  * w12.y;
  r += textureLod(tex, vec2(t0.x,  t3.y),  0.0) * w0.x  * w3.y;
  r += textureLod(tex, vec2(t12.x, t3.y),  0.0) * w12.x * w3.y;
  r += textureLod(tex, vec2(t3.x,  t3.y),  0.0) * w3.x  * w3.y;
  // Catmull-Rom overshoots at hard edges (dark halos around bright spots). Clamp to the
  // range of the four nearest texels so it can't invent values the data doesn't have.
  vec2 a = t1 / size, b = (t1 + 1.0) / size;
  vec4 c00 = textureLod(tex, a, 0.0), c10 = textureLod(tex, vec2(b.x, a.y), 0.0);
  vec4 c01 = textureLod(tex, vec2(a.x, b.y), 0.0), c11 = textureLod(tex, b, 0.0);
  return clamp(r, min(min(c00, c10), min(c01, c11)), max(max(c00, c10), max(c01, c11)));
}

// How many screen pixels one texel spans here (> 1 means magnified).
float texelScreenSize(vec2 uv, vec2 size) {
  vec2 d = fwidth(uv * size);
  return 1.0 / max(max(d.x, d.y), 1e-6);
}

vec4 sampleSmooth(sampler2D tex, vec2 uv) {
  vec4 lin = texture2D(tex, uv);
  if (smoothOn < 0.5) return lin;
  vec2 size = vec2(textureSize(tex, 0));
  float k = smoothstep(0.9, 1.4, texelScreenSize(uv, size));
  if (k <= 0.0) return lin;
  return mix(lin, sampleCatmullRom(tex, uv, size), k);
}`,
        )
        .replace(
          '#include <map_fragment>',
          `#ifdef USE_MAP
  vec4 sampledDiffuseColor = sampleSmooth(map, vMapUv);
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF(sampledDiffuseColor);
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif
#ifdef USE_MAP
  if (colorFixOn > 0.5) {
    // The matrix was fitted in display (sRGB) space: convert, apply, convert back.
    vec3 c = sRGBTransferOETF(vec4(diffuseColor.rgb, 1.0)).rgb;
    c = clamp(vec3(dot(cf0.xyz, c) + cf0.w, dot(cf1.xyz, c) + cf1.w, dot(cf2.xyz, c) + cf2.w), 0.0, 1.0);
    diffuseColor.rgb = sRGBTransferEOTF(vec4(c, 1.0)).rgb;
  }
  float showNew = 1.0; // share of the new dataset here (below 1 only during a swap)
  if (swapOn > 0.5) {
    vec4 prev = sampleSmooth(swapPrev, vMapUv);
    if (swapPrevVideo > 0.5) prev = sRGBTransferEOTF(prev);
    vec3 n = normalize(vViewN);
    vec3 blue = vec3(0.3, 0.62, 1.0);
    vec3 col;
    float t = swapT;
    float fadeOut = 1.0 - smoothstep(0.85, 1.0, t); // effects gone by the end
    if (swapStyle < 0.5) {
      // Sweep: left to right, faint edge line.
      float edge = mix(-1.45, 1.45, t);
      showNew = 1.0 - smoothstep(edge - 0.3, edge + 0.3, n.x);
      col = mix(prev.rgb, diffuseColor.rgb, showNew) + blue * exp(-pow((n.x - edge) / 0.06, 2.0)) * 0.25 * fadeOut;
    } else if (swapStyle < 1.5) {
      // Corruption bloom: a blue glow ignites at the centre of the view and spreads over the
      // planet. Its front is a sharp, ragged line of light; thin glowing veins creep just
      // ahead of it through the old data; a faint blue fades quickly behind it.
      vec3 o = normalize(vObjPos);
      float d = acos(clamp(n.z, -1.0, 1.0)); // 0 at the centre of the view, 1.57 at the edge
      float dn = d + (gFbm(o * 4.0) - 0.5) * 0.5;
      float R = mix(-0.3, 2.1, t);
      float aa = max(fwidth(dn), 1e-4); // ~1 screen pixel: crisp at any size
      showNew = 1.0 - smoothstep(R - aa, R + aa, dn);
      float ahead = (1.0 - smoothstep(R, R + 0.22, dn)) * (1.0 - showNew);
      // Veins: thin ridges of noise, lit only just ahead of the front.
      float v = 1.0 - abs(gFbm(o * 9.0 + 3.7) * 2.0 - 1.0);
      float vaa = max(fwidth(v), 1e-4);
      float vein = smoothstep(0.93 - vaa, 0.93 + vaa, v) * ahead;
      float core = 1.0 - smoothstep(0.0, 1.5 * aa, abs(dn - R)); // the line itself
      float halo = exp(-abs(dn - R) / 0.035);                        // its glow
      float wash = (1.0 - smoothstep(0.0, 0.18, R - dn)) * showNew;
      col = mix(prev.rgb, diffuseColor.rgb, showNew);
      col = mix(col, col * vec3(0.55, 0.8, 1.3), (wash * 0.35 + ahead * 0.2) * fadeOut);
      col += (vec3(0.75, 0.9, 1.0) * core + blue * (halo * 0.55 + vein * 0.8)) * fadeOut;
    } else if (swapStyle < 2.5) {
      // Satellite scan: a bright line passes from the north pole to the south, laying the
      // new data down behind it, with a short afterglow.
      float y = normalize(vObjPos).y; // sin(latitude)
      float edge = mix(1.12, -1.12, t);
      showNew = smoothstep(edge - 0.015, edge + 0.015, y);
      float line = exp(-pow((y - edge) / 0.012, 2.0));
      float trail = exp(-max(y - edge, 0.0) / 0.09) * showNew;
      col = mix(prev.rgb, diffuseColor.rgb, showNew);
      col = mix(col, col * vec3(0.6, 0.85, 1.3), trail * 0.5 * fadeOut);
      col += blue * (line * 1.2 + trail * 0.12) * fadeOut;
    } else {
      // Dissolve: the old data breaks up in an organic pattern with glowing edges.
      float nz = gFbm(normalize(vObjPos) * 3.2);
      float thr = mix(0.12, 0.9, t) ;
      showNew = 1.0 - smoothstep(thr - 0.02, thr + 0.02, nz);
      if (t >= 1.0) showNew = 1.0;
      float rim = exp(-pow((nz - thr) / 0.014, 2.0));
      col = mix(prev.rgb, diffuseColor.rgb, showNew) + blue * rim * 0.6 * fadeOut;
    }
    diffuseColor.rgb = col;
  }
  // Land layer: on the parts of the globe showing a dataset that uses it, so it sweeps in
  // (or out) with that dataset instead of jumping.
  float landShare = landOn * showNew + landPrevOn * (1.0 - showNew);
  if (landShare > 0.0) {
    float m = texture2D(landMask, vMapUv).r * landShare;
    if (m > 0.0) diffuseColor.rgb = mix(diffuseColor.rgb, sampleSmooth(landMap, vMapUv).rgb, m);
  }
  if (coverOn > 0.5) {
    // Sunlit Blue Marble by day, Black Marble city lights by night.
    float ndl = dot(normalize(vViewN), coverSun);
    float day = smoothstep(-0.1, 0.3, ndl);
    vec3 dayC = texture2D(coverDay, vMapUv).rgb * clamp(ndl * 1.1 + 0.08, 0.0, 1.0);
    vec3 nightC = pow(texture2D(coverNight, vMapUv).rgb, vec3(1.7)) * 2.4; // lights bright, land dark
    vec3 real = mix(nightC, dayC, day);
    // "Data dawn": the data sweeps in from the sunlit side to the night side, with a faint
    // bright line at the edge.
    float edge = mix(1.25, -1.6, coverReveal);
    float show = smoothstep(edge, edge + 0.35, ndl);
    float line = exp(-pow((ndl - edge - 0.12) / 0.05, 2.0)) * (1.0 - smoothstep(0.85, 1.0, coverReveal));
    diffuseColor.rgb = mix(real, diffuseColor.rgb, show) + vec3(0.35, 0.65, 1.0) * line * 0.5 * step(0.001, coverReveal);
  }
#endif`,
        );
    };
    this.material.customProgramCacheKey = () => 'globe-land-colorfix-bicubic-cover-swap-v8';
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
    this.targetDistance = Math.max(this.minDistance, Math.min(this.maxDistance, 1 + surface));
    this.idleFor = 0;
  }

  update(dt) {
    this.idleFor += dt;
    this._stepKeys(dt);
    this._stepCover(dt);
    this._stepFlight(dt);
    this._stepEvents(dt);
    this._stepSwap(dt);
    if (!this.dragging) {
      this.spin += this.spinVel * dt;
      this.spinVel *= Math.pow(0.08, dt); // momentum decays smoothly
      if (Math.abs(this.spinVel) < 0.005) this.spinVel = 0;
      // Auto-spin only when idle and zoomed out, and ease it in rather than jumping.
      if (this.held) {
        // Guided show: between camera moves the planet keeps drifting gently (eased in
        // after each move), so it never looks frozen while the narrator talks.
        if (!this.flight) {
          this.driftFor = (this.driftFor ?? 0) + dt;
          this.spin += SHOW_DRIFT * Math.min(1, this.driftFor / 1.5) * dt;
        } else this.driftFor = 0;
      } else if (this.idleFor > 4 && this.zoomFactor < 1.2) {
        const ease = Math.min(1, (this.idleFor - 4) / 2);
        this.spin += this.autoSpin * ease * dt;
      }
    }
    // Smooth zoom toward the target (the cover animation drives the distance itself)
    const prev = this.distance;
    if (this.cover) this.distance = this.targetDistance;
    else this.distance += (this.targetDistance - this.distance) * (1 - Math.exp(-dt * 10));
    if (Math.abs(this.distance - prev) > 1e-4) {
      this.camera.position.z = this.distance;
      this.onZoom?.(this.zoomFactor);
    }
    this._apply();
    this.sky.update(this.container.clientWidth, this.container.clientHeight, this.renderer.domElement.height);
    this.renderer.clear();
    this.renderer.render(this.sky.scene, this.sky.camera);
    this.renderer.clearDepth();
    this.renderer.render(this.scene, this.camera);
  }

  // ---------- Guided show ----------
  // Turn so (lat, lon) faces the viewer, at a zoom factor (1 = default view), over `seconds`.
  // Latitude is limited by the tilt clamp (±30°). Resolves on arrival.
  flyTo({ lat = 15, lon = 0, zoom = 1, seconds = 2.5 } = {}) {
    // spin = 90° - (lon + 180°) puts lon in front (see latLonToLocal); tilt = lat.
    let spin = (90 - (lon + 180)) * DEG;
    const turn = 2 * Math.PI;
    spin += Math.round((this.spin - spin) / turn) * turn; // the short way round
    // The show may look at the poles (the temperature sweep); exploring stays within ±30°.
    const limit = this.held ? SHOW_MAX_TILT : MAX_TILT;
    const tilt = Math.max(-limit, Math.min(limit, lat * DEG));
    const z = Math.max(0.2, zoom);
    const distance = Math.max(this.minDistance, Math.min(this.maxDistance, 1 + (this.far - 1) / z));
    this.spinVel = 0;
    this.flight?.resolve();
    return new Promise((resolve) => {
      this.flight = {
        t: 0, seconds: Math.max(0.01, seconds), resolve,
        from: { spin: this.spin, tilt: this.tilt, distance: this.targetDistance },
        to: { spin, tilt, distance },
      };
    });
  }

  cancelFlight() {
    this.flight?.resolve();
    this.flight = null;
  }

  // End of the show: hand back control. If it left the view tilted past what exploring
  // allows (a pole), ease back inside the limit instead of snapping at the first key press.
  releaseHold() {
    this.held = false;
    this.cancelFlight();
    if (Math.abs(this.tilt) > MAX_TILT + 1e-3) {
      const tilt = Math.sign(this.tilt) * MAX_TILT;
      this.flight = {
        t: 0, seconds: 1.2, resolve: () => {},
        from: { spin: this.spin, tilt: this.tilt, distance: this.targetDistance },
        to: { spin: this.spin, tilt, distance: this.targetDistance },
      };
    }
  }

  _stepFlight(dt) {
    const f = this.flight;
    if (!f) return;
    f.t = Math.min(1, f.t + dt / f.seconds);
    const e = f.t < 0.5 ? 4 * f.t ** 3 : 1 - Math.pow(-2 * f.t + 2, 3) / 2;
    this.spin = f.from.spin + (f.to.spin - f.from.spin) * e;
    this.tilt = f.from.tilt + (f.to.tilt - f.from.tilt) * e;
    this.targetDistance = f.from.distance + (f.to.distance - f.from.distance) * e;
    this.idleFor = 0;
    if (f.t >= 1) {
      this.flight = null;
      f.resolve();
    }
  }

  // ---------- Switching datasets ----------
  // Call right after setTexture(new): the old texture stays on the globe and the new one
  // sweeps across it (~0.8 s). done() runs when the old texture is no longer drawn.
  swapFrom(prevTex, done) {
    const u = this.uniforms;
    this._swapDone?.(); // a swap still running: its old texture can go now
    if (!prevTex || this.reducedMotion) { u.swapOn.value = 0; u.landPrevOn.value = 0; this._swapDone = null; done?.(); return; }
    u.swapPrev.value = prevTex;
    u.swapPrevVideo.value = prevTex.isVideoTexture ? 1 : 0;
    u.landPrevOn.value = u.landOn.value; // still the outgoing dataset's: callers set the new land after
    u.swapOn.value = 1;
    u.swapT.value = 0;
    u.swapStyle.value = SWAP_STYLES[this.swapStyle]?.id ?? 1;
    this._swapRaw = 0;
    this._swapDone = done ?? (() => {});
  }

  _stepSwap(dt) {
    const u = this.uniforms;
    if (!u.swapOn.value) return;
    const style = SWAP_STYLES[this.swapStyle] ?? SWAP_STYLES.bloom;
    this._swapRaw = Math.min(1, this._swapRaw + dt / style.seconds);
    const x = this._swapRaw;
    u.swapT.value = style.ease ? 0.5 - 0.5 * Math.cos(Math.PI * x) : x;
    if (x >= 1) {
      u.swapOn.value = 0;
      u.landPrevOn.value = 0;
      const done = this._swapDone;
      this._swapDone = null;
      done?.();
    }
  }

  // ---------- Cover (start screen) ----------
  // A big, sunlit, slowly turning Earth off to one side, with the real sky behind it. Same
  // globe and camera as the app, so the hand-off to the data is one continuous move.
  setCover(day, night) {
    const u = this.uniforms;
    for (const t of [day, night]) {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    }
    u.coverDay.value = day;
    u.coverNight.value = night;
    u.coverOn.value = 1;
    u.coverReveal.value = 0;
    this.atmoUniforms.uAmount.value = 1;
    this.cover = { t: 0, leaving: false, dataReady: false, revealT: null, startSpin: 0, startTilt: 0, resolve: null };
    this.sky.showBodies(false);
    this.tilt = 12 * DEG;
    this._coverFrame(1);
  }

  // Data is on the globe: the reveal may begin.
  coverDataReady() {
    if (this.cover) this.cover.dataReady = true;
  }

  // Glide to the app's view while turning half a world (the stars sweep past), then sweep
  // the data across the planet. Resolves when the app view is fully in place.
  leaveCover() {
    const c = this.cover;
    if (!c || c.leaving) return Promise.resolve();
    c.leaving = true;
    c.t = 0;
    c.startSpin = this.spin;
    c.startTilt = this.tilt;
    return new Promise((resolve) => { c.resolve = resolve; });
  }

  // Thin blue glow around the cover Earth, brightest on its sunlit edge. Only drawn outside
  // the planet's outline (back faces of a slightly larger sphere), so it never tints the data.
  _makeAtmosphere() {
    this.atmoUniforms = { uAmount: { value: 0 }, uSun: { value: this.uniforms.coverSun.value } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.atmoUniforms,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
      blendSrcAlpha: THREE.OneFactor,
      blendDstAlpha: THREE.OneFactor,
      vertexShader: /* glsl */ `
        varying vec3 vN; varying vec3 vPos;
        void main() {
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vPos = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uAmount; uniform vec3 uSun; varying vec3 vN; varying vec3 vPos;
        void main() {
          vec3 v = normalize(-vPos);
          // Back faces seen just past the planet's edge face away at ~-0.29; the shell's own
          // outline is 0. Brightest against the planet, fading out into space.
          float rim = pow(clamp(-dot(vN, v) / 0.29, 0.0, 1.0), 2.2);
          float lit = smoothstep(-0.35, 0.6, dot(vN, uSun)); // sunlit side of the rim
          vec3 c = vec3(0.32, 0.6, 1.0) * rim * rim * (0.05 + 0.95 * lit) * uAmount * 0.45; // subtle
          gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)));
        }`,
    });
    const m = new THREE.Mesh(new THREE.SphereGeometry(1.045, 96, 48), mat);
    m.renderOrder = 2;
    return m;
  }

  // How far the view is from the app's framing: 1 = cover (bigger, off to one side).
  _coverFrame(k) {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    const portrait = w < h;
    const coverDistance = this.far * (portrait ? 0.82 : 0.78); // a bit closer than the app view
    this.targetDistance = this.far + (coverDistance - this.far) * k;
    // Shift the picture: right of centre on wide screens, lower on tall ones.
    const ox = portrait ? 0 : -0.17 * w * k;
    const oy = portrait ? -0.24 * h * k : 0;
    if (k > 0) this.camera.setViewOffset(w, h, ox, oy, w, h);
    else this.camera.clearViewOffset();
  }

  _stepCover(dt) {
    const c = this.cover;
    if (!c) return;
    const u = this.uniforms;
    if (!c.leaving) {
      this.spin += (this.reducedMotion ? 0 : this.autoSpin) * dt; // the planet turns on its own
      this._coverFrame(1);
      return;
    }
    c.t += dt;
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const glideTime = this.reducedMotion ? 0 : 2.2;
    const g = glideTime ? Math.min(1, c.t / glideTime) : 1;
    const e = ease(g);
    this._coverFrame(1 - e);
    if (!this.reducedMotion) {
      this.spin = c.startSpin + Math.PI * e;
      this.tilt = c.startTilt + (15 * DEG - c.startTilt) * e;
    }
    // The data dawn starts partway through the glide, once the data has arrived.
    if (c.revealT === null && c.dataReady && c.t >= glideTime * 0.35) c.revealT = 0;
    if (c.revealT !== null) {
      c.revealT += dt;
      const r = Math.min(1, c.revealT / (this.reducedMotion ? 0.4 : 1.5));
      u.coverReveal.value = this.reducedMotion ? r : ease(r);
      this.atmoUniforms.uAmount.value = 1 - u.coverReveal.value;
      if (r >= 1 && g >= 1) {
        u.coverOn.value = 0;
        this.cover = null;
        this.camera.clearViewOffset();
        // The glide ends at rest; ease the auto-spin straight back in (resetting the idle
        // timer left the planet still for 4 s after the cover, as if it had frozen).
        this.idleFor = 4;
        this.sky.showBodies(true);
        c.resolve?.();
      }
    }
  }

  // The moment shown (UTC ms): places the Sun, Moon and planets.
  setSkyTime(ms) {
    this.sky.setTime(ms);
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
    const wasDefault = Math.abs(this.targetDistance - this.far) < 1e-3;
    this.far = Math.max(FAR, fitDistance);
    if (wasDefault) this.targetDistance = this.far;
    this.targetDistance = Math.min(this.targetDistance, this.maxDistance);
    this._updateZoomLimit(); // a bigger window needs more texels for the same zoom
    this._updateEventScale();
  }

  _bindPointer() {
    const el = this.renderer.domElement;
    const pointers = new Map(); // active pointers, for pinch zoom
    let samples = [];           // recent {t, spin} for release velocity
    let last = null;
    let pinchDist = 0;

    // Radians per pixel: the surface should track the finger at any zoom (zoomed out past
    // the default view, keep the default rate so a small Earth doesn't spin wildly).
    const radPerPx = () => (2 * (Math.min(this.distance, this.far) - 1) * Math.tan(17.5 * DEG)) / this.container.clientHeight;

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
    // Shift is reserved for "read the value aloud" (see main.js), so no Shift modifier here.
    this.keysHeld = new Set();
    this.keySpinVel = 0; // rad/s
    this.keyTiltVel = 0;
    this.container.addEventListener('keydown', (e) => {
      if (ARROWS.has(e.key)) {
        e.preventDefault();
        if (!e.repeat && !this.keysHeld.has(e.key)) {
          this.keysHeld.add(e.key);
          this.spinVel = 0; // cancel any drag momentum
          // Fresh press: start partway to full speed so a quick tap still moves.
          const z = Math.sqrt(Math.max(1, this.zoomFactor));
          if (e.key === 'ArrowLeft') this.keySpinVel = Math.max(this.keySpinVel, (KEY_TAP_KICK * KEY_SPIN_MAX) / z);
          if (e.key === 'ArrowRight') this.keySpinVel = Math.min(this.keySpinVel, (-KEY_TAP_KICK * KEY_SPIN_MAX) / z);
          if (e.key === 'ArrowUp') this.keyTiltVel = Math.max(this.keyTiltVel, (KEY_TAP_KICK * KEY_TILT_MAX) / z);
          if (e.key === 'ArrowDown') this.keyTiltVel = Math.min(this.keyTiltVel, (-KEY_TAP_KICK * KEY_TILT_MAX) / z);
        }
        this.idleFor = 0;
        return;
      }
      const zoomKeys = { '+': 1.5, '=': 1.5, '-': 1 / 1.5, _: 1 / 1.5 };
      if (zoomKeys[e.key]) {
        e.preventDefault();
        this.spinVel = 0;
        this.zoomBy(zoomKeys[e.key]);
      }
    });
    this.container.addEventListener('keyup', (e) => this.keysHeld.delete(e.key));
    // Losing focus mid-press never sends keyup: stop instead of spinning forever.
    this.container.addEventListener('blur', () => this.keysHeld.clear());
  }

  // Ease keyboard velocity toward its target: linear ramps (constant acceleration) feel
  // smoother than jumps, and coasting on release avoids a hard stop.
  _stepKeys(dt) {
    const z = Math.sqrt(Math.max(1, this.zoomFactor));
    const held = (k) => (this.keysHeld.has(k) ? 1 : 0);
    const ramp = (vel, dir, max) => {
      const target = dir * max;
      const rate = (dir !== 0 ? max / KEY_ACCEL_TIME : max / KEY_DECEL_TIME) * dt;
      if (Math.abs(target - vel) <= rate) return target;
      return vel + Math.sign(target - vel) * rate;
    };
    this.keySpinVel = ramp(this.keySpinVel, held('ArrowLeft') - held('ArrowRight'), KEY_SPIN_MAX / z);
    this.keyTiltVel = ramp(this.keyTiltVel, held('ArrowUp') - held('ArrowDown'), KEY_TILT_MAX / z);
    if (this.keySpinVel) { this.spin += this.keySpinVel * dt; this.idleFor = 0; }
    if (this.keyTiltVel) this.tiltBy(this.keyTiltVel * dt);
  }

  get keyMoving() {
    return this.keysHeld.size > 0 || this.keySpinVel !== 0 || this.keyTiltVel !== 0;
  }
}
