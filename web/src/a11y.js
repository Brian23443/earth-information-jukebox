// Screen-reader announcements and speech.

export class Announcer {
  constructor(el, minGapMs = 2000) {
    this.el = el;
    this.minGap = minGapMs;
    this.last = 0;
    this.lastText = '';
  }

  // Throttled: at most one polite announcement every ~2 s, and never a repeat.
  say(text, { force = false } = {}) {
    const now = performance.now();
    if (!force && (now - this.last < this.minGap || text === this.lastText)) return;
    this.last = now;
    this.lastText = text;
    this.el.textContent = text;
  }
}

export function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

export function formatPlace(p) {
  if (!p) return 'Off the globe';
  const lat = `${Math.abs(p.lat).toFixed(0)}° ${p.lat >= 0 ? 'north' : 'south'}`;
  const lon = `${Math.abs(p.lon).toFixed(0)}° ${p.lon >= 0 ? 'east' : 'west'}`;
  return `${lat}, ${lon}`;
}
