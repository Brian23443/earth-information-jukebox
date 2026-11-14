// Turns a summary frame + the globe's orientation into sound features.
import * as THREE from 'three';
import { latLonToLocal } from './globe.js';

export class FeatureExtractor {
  constructor(summary) {
    this.summary = summary;
    const { bands, cols, bandEdges = [-90, -45, 0, 45, 90] } = summary.meta;
    this.cells = [];
    for (let b = 0; b < bands; b++) {
      const lo = bandEdges[b], hi = bandEdges[b + 1];
      const lat = (lo + hi) / 2;
      // Cell area on the sphere is proportional to sin(hi) - sin(lo).
      const area = Math.sin((hi * Math.PI) / 180) - Math.sin((lo * Math.PI) / 180);
      for (let c = 0; c < cols; c++) {
        const lon = -180 + ((c + 0.5) * 360) / cols;
        this.cells.push({ b, c, lat, area, vec: latLonToLocal(lat, lon) });
      }
    }
    this._tmp = new THREE.Vector3();

    // Typical valid share of a cell that has data (SST flow lines cover ~20% of pixels).
    // Loudness is scaled by this so "full coverage for this dataset" plays at full volume.
    const shares = [];
    const bytes = summary.bytes;
    const stride = Math.max(1, Math.floor(bytes.length / 2 / 20000));
    for (let i = 0; i < bytes.length / 2; i += stride) if (bytes[i * 2 + 1]) shares.push(bytes[i * 2 + 1] / 255);
    shares.sort((a, b) => a - b);
    this.fullShare = shares.length ? Math.max(0.05, shares[Math.floor(shares.length * 0.9)]) : 1;

    // Typical "busy" activity for event datasets (lightning): the 75th percentile of the
    // area-weighted global mean per frame. hits.norm = visible activity / this, so ~1 is a
    // normal busy moment whatever the dataset's absolute scale.
    const { frames } = summary;
    const perFrame = [];
    const areaSum = this.cells.reduce((a, c) => a + c.area, 0);
    for (let f = 0; f < frames; f += Math.max(1, Math.floor(frames / 400))) {
      let sum = 0;
      for (const cell of this.cells) {
        const i = (((f * bands + cell.b) * cols + cell.c) * 2);
        sum += (bytes[i] / 255) * cell.area;
      }
      if (sum > 0) perFrame.push(sum / areaSum);
    }
    perFrame.sort((a, b) => a - b);
    this.hitScale = perFrame.length ? perFrame[Math.floor(perFrame.length * 0.75)] : 1;

    // Aerosols: a typical (75th percentile) global amount per type, so each type's sound
    // is scaled to "normal for this type" (smoke covers far less of the map than salt).
    if (summary.classes) {
      const K = 4;
      this.typeScale = [0, 1, 2, 3].map((k) => {
        const vals = [];
        for (let f = 0; f < frames; f += Math.max(1, Math.floor(frames / 200))) {
          let sum = 0;
          for (const cell of this.cells) sum += (summary.classes[(((f * bands + cell.b) * cols + cell.c) * K) + k] / 255) * cell.area;
          vals.push(sum / areaSum);
        }
        vals.sort((a, b) => a - b);
        return Math.max(1e-4, vals[Math.floor(vals.length * 0.75)]);
      });
    }
  }

  // Aerosols: amount of each type on the visible side, relative to its typical level.
  extractClasses(globe, frame) {
    const s = this.summary;
    if (!s.classes) return null;
    const { bands, cols } = s.meta;
    const f = Math.floor(((frame % s.frames) + s.frames) % s.frames);
    const sums = [0, 0, 0, 0];
    const pans = [0, 0, 0, 0];
    let vis = 0;
    for (const cell of this.cells) {
      const { facing, x } = globe.view(cell.vec, this._tmp);
      if (facing <= 0) continue;
      const w = facing * cell.area;
      vis += w;
      const base = ((f * bands + cell.b) * cols + cell.c) * 4;
      for (let k = 0; k < 4; k++) {
        const a = (s.classes[base + k] / 255) * w;
        sums[k] += a;
        pans[k] += a * x;
      }
    }
    return sums.map((sum, k) => ({
      level: vis ? sum / vis / this.typeScale[k] : 0, // ~1 = typical amount
      pan: sum ? Math.max(-1, Math.min(1, pans[k] / sum)) : 0,
    }));
  }

  // Features of the side facing the viewer at a fractional summary frame.
  extract(globe, frame) {
    const s = this.summary;
    let wSum = 0, vSum = 0;
    const bands = [0, 1, 2, 3].map(() => ({ w: 0, v: 0, area: 0 }));
    let hitW = 0, hitLat = 0, hitX = 0, visSum = 0;

    for (const cell of this.cells) {
      const { facing, x } = globe.view(cell.vec, this._tmp);
      if (facing <= 0) continue;
      const { value, share } = s.sample(frame, cell.b, cell.c);
      const v01 = (value - s.meta.vmin) / s.range;
      const vis = facing * cell.area;
      const w = vis * share;
      visSum += vis;
      wSum += w;
      vSum += w * v01;
      const bi = Math.min(3, Math.max(0, Math.floor(((x + 1) / 2) * 4)));
      bands[bi].w += w;
      bands[bi].v += w * v01;
      bands[bi].area += vis;
      // Lightning: value is the share of the cell lit by new flashes
      hitW += vis * v01;
      hitLat += vis * v01 * cell.lat;
      hitX += vis * v01 * x;
    }

    return {
      frameIndex: Math.floor(frame),
      mean01: wSum ? vSum / wSum : 0,
      bands: bands.map((b) => ({
        v01: b.w ? b.v / b.w : 0,
        level: b.area ? Math.min(1, b.w / b.area / this.fullShare) : 0,
      })),
      hits: hitW
        ? {
            strength: hitW / visSum,
            norm: hitW / visSum / this.hitScale,
            lat01: (hitLat / hitW + 90) / 180,
            pan: Math.max(-1, Math.min(1, hitX / hitW)),
          }
        : { strength: 0, norm: 0, lat01: 0.5, pan: 0 },
    };
  }

  // Value in the summary cell under a lat/lon (coarse; explore grids replace this later).
  valueAt(frame, lat, lon) {
    const { bands, cols, bandEdges = [-90, -45, 0, 45, 90] } = this.summary.meta;
    let b = bandEdges.findIndex((e, i) => i > 0 && lat <= e) - 1;
    b = Math.max(0, Math.min(bands - 1, b));
    const c = Math.max(0, Math.min(cols - 1, Math.floor(((lon + 180) / 360) * cols)));
    return this.summary.sample(frame, b, c);
  }
}
