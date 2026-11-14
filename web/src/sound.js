// Tone.js engine. Rules from the plan:
//   - pitch snaps to C minor pentatonic
//   - data smoothed over ~0.5 s before it reaches the sound
//   - at most four layers: pad, melody, percussion, cursor
import * as Tone from 'tone';

const PENTA = ['C', 'Eb', 'F', 'G', 'Bb'];
const SMOOTH_TAU = 0.5; // seconds
// Lightning: hits.norm = new-flash activity on the visible side / this dataset's typical
// busy level (features.js), so ~1 means "a normal busy moment".
const HIT_MIN = 0.12;     // below this: silence
const THUNDER_AT = 1.6;   // above this: occasional thunder accent

// Scale degree -> note name. Degree 0 = C2.
export function degreeToNote(deg, baseOctave = 2) {
  const d = Math.max(0, Math.round(deg));
  return `${PENTA[d % 5]}${baseOctave + Math.floor(d / 5)}`;
}

class Smoothed {
  constructor(v = 0) { this.v = v; this.init = false; }
  step(target, dt) {
    if (!this.init) { this.v = target; this.init = true; return this.v; }
    this.v += (target - this.v) * (1 - Math.exp(-dt / SMOOTH_TAU));
    return this.v;
  }
}

export class SoundEngine {
  constructor() {
    this.master = new Tone.Volume(-8).toDestination();
    this.limiter = new Tone.Limiter(-1).connect(this.master);

    // Layer 1: pad. Warmer = brighter filter + higher chord.
    this.padFilter = new Tone.Filter(600, 'lowpass').connect(this.limiter);
    this.pad = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'fatsawtooth', count: 3, spread: 20 },
      envelope: { attack: 1.5, decay: 0.5, sustain: 0.8, release: 3 },
      volume: -20,
    }).connect(this.padFilter);
    this.padDegree = null;

    // Layer 2: melody. Four notes panned left to right across the visible side.
    this.melody = [-0.75, -0.25, 0.25, 0.75].map((pan) => {
      const panner = new Tone.Panner(pan).connect(this.limiter);
      const synth = new Tone.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.02, decay: 0.3, sustain: 0.2, release: 1.2 },
        volume: -14,
      }).connect(panner);
      return { synth, panner, degree: new Smoothed(), level: new Smoothed() };
    });
    this.step = 0;
    this.melodyLoop = new Tone.Loop((time) => this._playMelody(time), '8n');

    // Layer 3: percussion (lightning). Quantized to 16th notes so it grooves instead of
    // firing on every data frame (15/s).
    this.drumPan = new Tone.Panner(0).connect(this.limiter);
    this.drum = new Tone.MembraneSynth({
      pitchDecay: 0.03, octaves: 4,
      envelope: { attack: 0.001, decay: 0.35, sustain: 0, release: 0.2 },
      volume: -8,
    }).connect(this.drumPan);
    this.thunderFilter = new Tone.Filter(900, 'lowpass').connect(this.drumPan);
    this.thunder = new Tone.NoiseSynth({
      noise: { type: 'brown' },
      envelope: { attack: 0.005, decay: 0.9, sustain: 0, release: 0.4 },
      volume: -6,
    }).connect(this.thunderFilter);
    this.hits = { norm: 0, lat01: 0.5, pan: 0 };
    this.drumLoop = new Tone.Loop((time) => this._playDrums(time), '16n');
    this.lastThunder = 0;

    // Layer 4: explore cursor. Plays the value under the mouse (or keyboard crosshair).
    this.cursorPan = new Tone.Panner(0).connect(this.limiter);
    this.cursorSynth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.25, sustain: 0.15, release: 0.6 },
      volume: -8,
    }).connect(this.cursorPan);
    this.cursorDegree = null;
    this.cursorLast = 0;
    // TODO: SST arpeggio (flow speed).

    // Layer 3 (aerosols): one texture of four voices, each loud in proportion to how much
    // of that type is on the visible side. Order matches the pipeline: carbon, dust, salt, sulfate.
    this._buildAerosols();

    this.mean = new Smoothed();
    this.mode = 'ocean';
  }

  _buildAerosols() {
    const voice = () => {
      const pan = new Tone.Panner(0).connect(this.limiter);
      const gain = new Tone.Gain(0).connect(pan);
      return { pan, gain, level: new Smoothed(), solo: 1 };
    };
    // Smoke (black carbon): crackling, like a fire.
    const smoke = voice();
    smoke.filter = new Tone.Filter(2500, 'highpass').connect(smoke.gain);
    smoke.synth = new Tone.NoiseSynth({ noise: { type: 'white' }, envelope: { attack: 0.001, decay: 0.03, sustain: 0 }, volume: -4 }).connect(smoke.filter);
    // Dust: a low drone (C2 + G2, filtered saws).
    const dust = voice();
    dust.filter = new Tone.Filter(320, 'lowpass').connect(dust.gain);
    dust.oscs = [new Tone.Oscillator('C2', 'sawtooth'), new Tone.Oscillator('G2', 'sawtooth')];
    dust.oscs.forEach((o) => { o.volume.value = -14; o.connect(dust.filter); });
    // Sea salt: airy shimmer that swells like surf.
    const salt = voice();
    salt.filter = new Tone.Filter(4200, 'highpass').connect(salt.gain);
    salt.trem = new Tone.Tremolo(0.25, 0.7).connect(salt.filter).start();
    salt.noise = new Tone.Noise('pink');
    salt.noise.volume.value = -16;
    salt.noise.connect(salt.trem);
    // Sulfates: bell tones on the pentatonic scale.
    const sulfate = voice();
    sulfate.synth = new Tone.FMSynth({
      harmonicity: 3.01, modulationIndex: 12,
      envelope: { attack: 0.002, decay: 1.4, sustain: 0, release: 1.2 },
      modulationEnvelope: { attack: 0.002, decay: 0.6, sustain: 0, release: 0.6 },
      volume: -14,
    }).connect(sulfate.gain);
    this.aero = [smoke, dust, salt, sulfate];
    this.aeroLoop = new Tone.Loop((time) => this._playAerosols(time), '16n');
    this.aeroStep = 0;
    this.soloUntil = 0;
  }

  _aerosolSources(on) {
    const [, dust, salt] = this.aero;
    for (const src of [...dust.oscs, salt.noise]) {
      if (on && src.state !== 'started') src.start();
      if (!on && src.state === 'started') src.stop();
    }
    if (on && this.aeroLoop.state !== 'started') this.aeroLoop.start(0);
    if (!on) {
      this.aeroLoop.stop();
      this.aero.forEach((v) => v.gain.gain.rampTo(0, 0.3));
    }
  }

  // Explore: hovering a type plays it alone for a moment (others duck).
  cursorType(type) {
    if (this.mode !== 'aerosols') return;
    this.soloUntil = Tone.now() + 1.5;
    this.aero.forEach((v, k) => { v.solo = k === type ? 1.6 : 0.12; });
  }

  _playAerosols(time) {
    if (this.mode !== 'aerosols') return;
    const [smoke, , , sulfate] = this.aero;
    const step = this.aeroStep++;
    // Smoke crackle: more crackles per beat with more smoke.
    const s = smoke.level.v * smoke.solo;
    if (s > 0.08 && Math.random() < Math.min(0.9, s * 0.45)) {
      smoke.synth.triggerAttackRelease('64n', time + Math.random() * 0.05, Math.min(1, 0.3 + s * 0.3));
    }
    // Sulfate bells on quarter notes, higher and denser with more sulfate.
    const b = sulfate.level.v * sulfate.solo;
    if (step % 4 === 0 && b > 0.1 && Math.random() < Math.min(0.85, 0.2 + b * 0.35)) {
      const deg = 10 + Math.floor(Math.random() * 6) + Math.min(4, Math.round(b * 2));
      sulfate.synth.triggerAttackRelease(degreeToNote(deg, 2), '8n', time, Math.min(1, 0.35 + b * 0.25));
    }
  }

  get state() {
    return Tone.getContext().state; // 'running' once the start button has been pressed
  }

  async start() {
    await Tone.start();
    const transport = Tone.getTransport();
    transport.bpm.value = 84;
    this.melodyLoop.start(0);
    this.drumLoop.start(0);
    transport.start();
  }

  setMode(mode) {
    this.mode = mode;
    this.pad.releaseAll();
    this.padDegree = null;
    this.mean = new Smoothed(); // don't carry ocean levels into the storm bed (or back)
    this.hits = { norm: 0, lat01: 0.5, pan: 0 };
    this._aerosolSources(mode === 'aerosols');
  }

  setMuted(muted) {
    this.master.mute = muted;
  }

  // features: { mean01, bands: [{v01, level}], hits?: {strength, lat01, pan} }
  update(features, dt) {
    if (!features) return;
    if (this.mode === 'ocean') {
      const m = this.mean.step(features.padMean01 ?? features.mean01, dt);
      this.padFilter.frequency.rampTo(300 + m * 2500, 0.3);
      const degree = Math.round(m * 6); // 0..6 -> C2..Eb3 roots
      if (degree !== this.padDegree) {
        this.padDegree = degree;
        this.pad.releaseAll();
        this.pad.triggerAttack([0, 2, 4].map((k) => degreeToNote(degree + k, 2)));
      }
      features.bands.forEach((b, i) => {
        this.melody[i].degree.step(b.v01 * 9, dt); // two octaves of pentatonic
        this.melody[i].level.step(b.level, dt);
      });
    } else if (this.mode === 'aerosols' && features.classes) {
      if (Tone.now() > this.soloUntil) this.aero.forEach((v) => { v.solo = 1; });
      features.classes.forEach(({ level, pan }, k) => {
        const v = this.aero[k];
        const l = v.level.step(level, dt);
        // ~1 = typical amount -> gain 0.5; heavier plumes up to full, silent when absent.
        v.gain.gain.rampTo(Math.min(1, Math.max(0, l * 0.5)) * Math.min(1.6, v.solo), 0.25);
        v.pan.pan.rampTo(pan, 0.4);
      });
      // Dust drone opens up a little as dust thickens.
      this.aero[1].filter.frequency.rampTo(220 + Math.min(1.5, this.aero[1].level.v) * 260, 0.4);
    } else if (this.mode === 'lightning' && features.hits) {
      // Drums read the latest activity on each 16th note (see _playDrums).
      this.hits = features.hits;
      // Storm bed: a low, dark C minor chord that opens up as global activity rises.
      const m = this.mean.step(Math.min(1, features.hits.norm / 2), dt);
      this.padFilter.frequency.rampTo(160 + m * 1100, 0.3);
      if (this.padDegree !== 'storm') {
        this.padDegree = 'storm';
        this.pad.releaseAll();
        this.pad.triggerAttack(['C2', 'G2', 'Eb3']);
      }
    }
  }

  _playDrums(time) {
    if (this.mode !== 'lightning') return;
    const { norm, lat01, pan } = this.hits;
    if (norm < HIT_MIN) return;
    // Busier storms -> more 16ths filled; each hit's loudness follows activity too.
    if (Math.random() > Math.min(1, 0.25 + norm * 0.5)) return;
    this.drumPan.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), time);
    const note = degreeToNote(lat01 * 9, 1); // storms in the north sound higher, south lower
    this.drum.triggerAttackRelease(note, '16n', time, Math.min(1, 0.25 + norm * 0.45));
    if (norm > THUNDER_AT && time - this.lastThunder > 1.5 && Math.random() < 0.35) {
      this.lastThunder = time;
      this.thunder.triggerAttackRelease('8n', time, Math.min(1, 0.4 + (norm - THUNDER_AT) * 0.4));
    }
  }

  // value01: 0..1 under the cursor, or null for "no data" (land). pan: -1..1.
  // A note sounds when the snapped pitch changes, at most ~12 per second.
  cursor(value01, pan = 0) {
    if (value01 == null) {
      this.cursorDegree = null;
      return;
    }
    const degree = Math.round(value01 * 14); // three octaves of pentatonic
    const now = Tone.now();
    if (degree === this.cursorDegree || now - this.cursorLast < 0.08) return;
    this.cursorDegree = degree;
    this.cursorLast = now;
    this.cursorPan.pan.rampTo(Math.max(-1, Math.min(1, pan)), 0.03);
    this.cursorSynth.triggerAttackRelease(degreeToNote(degree, 3), '16n', now);
  }

  _playMelody(time) {
    if (this.mode !== 'ocean') return;
    // One band per step, sweeping left to right like a slow scan.
    const i = this.step++ % this.melody.length;
    const v = this.melody[i];
    if (v.level.v < 0.05) return; // that slice of the globe has no data
    v.synth.triggerAttackRelease(degreeToNote(v.degree.v, 4), '8n', time, Math.min(1, v.level.v));
  }
}
