// The guided show: a narrated tour that teaches the sounds one at a time, then hands the
// planet over. It plays a list of steps (show-script.js) using the app's own controls:
//
//   { dataset: 'sst' }            switch dataset (waits until it's on screen)
//   { seek: 0.42 }                jump to this point of the timeline (0-1)
//   { play: true, speed: 1 }      playback
//   { focus: ['pad'] }            play only these sound layers (null = all; see sound.js)
//   { probe: true }               the temperature tone: pitch = value in front of the viewer
//   { fly: { lat, lon, zoom, seconds }, wait: false }   move the camera (waits unless wait: false)
//   { say: 'ocean-1', text: '…' } a narration line (waits until it has been spoken)
//   { pause: 1.5 }                wait this many seconds (a moment to just listen)
//   { reach: 0.35, then: 0.25 }   glide the timeline to 35% (faster or slower, never a jump)
//                                 by the end of this step's flight, then play at 0.25x
//
// Narration: a recorded file web/public/show/voice/<id>.mp3 when there is one, otherwise
// the browser's built-in voice reads the text (a stand-in until recordings exist).
// Production builds list the recordings in show/voice/index.json (vite.config.js); in
// development each file is looked up directly.
//
// The show stops the moment someone takes over (stop()): the planet stays where it is.

const VOICE_DIR = 'show/voice';

export class Show {
  constructor(ctx) {
    this.ctx = ctx; // { globe, sound, selectDataset(id), seek(f), setPlaying(b), setSpeed(x), position(), rate(), probe(b), caption(text|null), onEnd() }
    this.running = false;
    this.cancels = new Set();
    this.recordings = null;
  }

  async start(steps) {
    if (this.running) return;
    this.running = true;
    this.ctx.globe.held = true;
    this.ctx.sound.setBed(true);
    this.recordings = await this._recordings(steps);
    try {
      for (const step of steps) {
        if (!this.running) break;
        await this._step(step);
      }
    } catch (err) {
      console.error('[show] stopped by an error', err);
    } finally {
      if (this.running) this.stop({ finished: true });
    }
  }

  // Someone took over (or the show ended): leave everything as it is, sounds back to normal.
  stop({ finished = false } = {}) {
    if (!this.running) return;
    this.running = false;
    for (const cancel of this.cancels) cancel();
    this.cancels.clear();
    window.speechSynthesis?.cancel();
    this.audio?.pause();
    this.audio = null;
    const { globe, sound } = this.ctx;
    globe.releaseHold();
    globe.idleFor = 0;
    this.ctx.probe(false);
    sound.focus(null);
    sound.duck(false);
    sound.setBed(false);
    this.ctx.caption(null);
    this.ctx.onEnd?.({ finished });
  }

  async _step(s) {
    const { ctx } = this;
    // A new dataset opens already at its moment (seek), so nothing jumps. If the dataset
    // was already showing, the timeline glides there instead (see reach, below).
    let switched = false;
    if (s.dataset) switched = await this._cancellable(ctx.selectDataset(s.dataset, s.seek ?? 0)); // (chimes, in main.js)
    let reach = s.reach, then = s.then;
    if (s.seek != null && !switched) {
      if (s.dataset) { reach = s.seek; then = s.speed; } else ctx.seek(s.seek);
    }
    if (s.speed != null && reach == null) ctx.setSpeed(s.speed);
    if (s.play != null) ctx.setPlaying(s.play);
    if (s.focus !== undefined) ctx.sound.focus(s.focus);
    if (s.probe != null) ctx.probe(s.probe);
    // Glide the timeline to a moment instead of jumping there: play faster or slower so it
    // arrives as the camera does (over the flight, or `within` seconds).
    if (reach != null) {
      const seconds = s.fly?.seconds ?? s.within ?? 3;
      const ahead = (reach - ctx.position() + 1) % 1; // timelines loop
      const needed = ahead / Math.max(1e-6, ctx.rate() * seconds);
      ctx.setSpeed(Math.max(0.1, Math.min(4, needed)));
    }
    if (s.fly) {
      const arrived = ctx.globe.flyTo(s.fly);
      // A whoosh as big as the move, panned the way the planet turns.
      const f = ctx.globe.flight;
      if (f) {
        const turn = Math.abs(f.to.spin - f.from.spin) + Math.abs(f.to.tilt - f.from.tilt);
        const strength = Math.min(1, turn / 2 + Math.abs(f.to.distance - f.from.distance) * 0.3);
        ctx.sound.whoosh(f.seconds, strength, f.to.spin >= f.from.spin ? 1 : -1);
      }
      // Once there, the speed to carry on at (even when the show doesn't wait for the move).
      if (reach != null && then != null) arrived.then(() => { if (this.running) ctx.setSpeed(then); });
      if (s.wait !== false) await this._cancellable(arrived);
    } else if (reach != null) {
      await this._sleep(s.within ?? 3);
      if (then != null) ctx.setSpeed(then);
    }
    if (s.say) await this._say(s.say, s.text);
    if (s.pause) await this._sleep(s.pause);
  }

  // ---------- narration ----------
  async _say(id, text) {
    if (!this.running) return;
    const { sound } = this.ctx;
    this.ctx.caption(text);
    sound.duck(true);
    try {
      if (sound.muted) await this._sleep(readingTime(text)); // captions still advance
      else if (this.recordings.has(id)) await this._playFile(`${VOICE_DIR}/${id}.mp3`, text);
      else await this._speak(text);
    } finally {
      if (this.running) sound.duck(false);
    }
    await this._sleep(0.5); // a breath between lines
  }

  _playFile(url, text) {
    return this._cancellable(new Promise((resolve) => {
      const a = new Audio(url);
      this.audio = a;
      a.onended = resolve;
      a.onerror = () => this._speak(text).then(resolve); // missing or broken: fall back
      a.play().catch(() => this._speak(text).then(resolve));
    }));
  }

  // Stand-in voice. Some browsers never fire onend, so a time limit backs it up.
  _speak(text) {
    const synth = window.speechSynthesis;
    if (!synth) return this._sleep(readingTime(text));
    return this._cancellable(new Promise((resolve) => {
      const u = new SpeechSynthesisUtterance(text);
      u.voice = pickVoice();
      u.rate = 1.0;
      let done = false;
      const finish = () => { if (!done) { done = true; resolve(); } };
      u.onend = finish;
      u.onerror = finish;
      setTimeout(finish, (readingTime(text) + 4) * 1000);
      synth.cancel();
      synth.speak(u);
    }));
  }

  // Which lines have recordings.
  async _recordings(steps) {
    const ids = steps.filter((s) => s.say).map((s) => s.say);
    try {
      const r = await fetch(`${VOICE_DIR}/index.json`);
      if (r.ok) return new Set(await r.json());
    } catch { /* no index: development */ }
    const found = await Promise.all(ids.map((id) =>
      fetch(`${VOICE_DIR}/${id}.mp3`, { method: 'HEAD' })
        .then((r) => (r.ok && (r.headers.get('content-type') ?? '').startsWith('audio') ? id : null))
        .catch(() => null)));
    return new Set(found.filter(Boolean));
  }

  // ---------- waiting, cancellable by stop() ----------
  _cancellable(promise) {
    return new Promise((resolve) => {
      const cancel = () => resolve();
      this.cancels.add(cancel);
      Promise.resolve(promise).then(resolve, resolve).finally(() => this.cancels.delete(cancel));
    });
  }

  _sleep(seconds) {
    return this._cancellable(new Promise((r) => setTimeout(r, seconds * 1000)));
  }
}

// Roughly how long a line takes to say (2.6 words per second).
function readingTime(text) {
  return Math.max(1.5, text.split(/\s+/).length / 2.6);
}

let chosenVoice;
function pickVoice() {
  if (chosenVoice !== undefined) return chosenVoice;
  const voices = window.speechSynthesis?.getVoices() ?? [];
  const en = voices.filter((v) => v.lang?.startsWith('en'));
  const preferred = ['Samantha', 'Google US English', 'Microsoft Aria', 'Daniel', 'Karen'];
  chosenVoice = preferred.map((n) => en.find((v) => v.name.includes(n))).find(Boolean) ?? en[0] ?? null;
  if (!voices.length) chosenVoice = undefined; // voices load late in some browsers: try again next line
  return chosenVoice ?? null;
}
