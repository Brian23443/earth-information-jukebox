// The guided show's script (steps: see show.js). Every claim here matches how the sound is
// actually made (sound.js, features.js) and what the data shows at that place and date.
//
// To record the narration: generate each line's text as web/public/show/voice/<id>.mp3
// (the list is in docs/show-script.md). Lines without a recording use the browser's voice.

export const SHOW_SCRIPT = [
  // ---------- Intro ----------
  { dataset: 'sst', seek: 0.42, speed: 1, play: true, focus: ['pad'], fly: { lat: 20, lon: -40, zoom: 1, seconds: 2 }, wait: false },
  { say: 'intro-1', text: 'Welcome to the Earth Information Jukebox. Everything you are about to hear is real NASA data about our planet, turned into sound.' },
  { say: 'intro-2', text: 'We will learn the sounds one at a time. Then the planet is yours to explore, with or without sight.' },

  // ---------- Ocean temperature ----------
  { say: 'ocean-1', text: 'First, the ocean. This slow chord is the average temperature of the sea surface facing you. Warmer water makes it higher and brighter.' },
  // Checked (Aug 2007): South Atlantic toward the Southern Ocean averages 17.9 °C (chord
  // root 2, filter 1,125 Hz); the tropical Pacific 24.2 °C (root 5, 2,419 Hz).
  // Paused on that date: playing on, it reaches southern summer within a minute.
  { seek: 0.42, play: false, fly: { lat: -30, lon: 0, zoom: 2, seconds: 3 } },
  { say: 'ocean-2', text: 'Down here, toward the cold Southern Ocean in its winter, the chord sinks and darkens.' },
  { fly: { lat: 0, lon: -150, zoom: 2, seconds: 4 } },
  { say: 'ocean-3', text: 'Over the warm tropical Pacific, it rises and opens up.' },
  { focus: ['melody'], play: true, fly: { lat: 10, lon: -150, zoom: 1, seconds: 2 }, wait: false },
  { say: 'ocean-4', text: 'Now the melody. Four notes play from left to right, one for each slice of the globe in front of you. A higher note means warmer water in that slice.' },
  { focus: null, pause: 3 },

  // ---------- Lightning ----------
  // Checked: paused at 35%, activity over Africa is 0.84 (drums play) and over the open
  // Pacific 0.09, below the 0.12 where the drums stop.
  { dataset: 'lightning', seek: 0.35, play: false, focus: ['drums'], fly: { lat: 0, lon: 20, zoom: 1.3, seconds: 3 }, wait: false },
  { say: 'storm-1', text: 'Next, lightning, seen by a camera on the International Space Station. Every drum hit is a burst of new lightning on the side of Earth facing you.' },
  { say: 'storm-2', text: 'The busier the storms, the busier the drums. Storms farther north sound higher, and storms on your left play in your left ear.' },
  { fly: { lat: 0, lon: -150, zoom: 1.3, seconds: 4 } },
  { say: 'storm-3', text: 'Over the open Pacific, lightning is rare, and the drums fall quiet.' },
  { focus: null, play: true, fly: { lat: 5, lon: -60, zoom: 1, seconds: 4 }, wait: false },
  { say: 'storm-4', text: 'Underneath, a low rumble swells as the whole planet grows stormier.' },
  { pause: 2 },

  // ---------- Aerosols ----------
  // Checked (Aug 14, 2024; ~1 = typical amount): dust 1.97 off the Sahara; smoke 2.21 over
  // southern Africa; salt 1.61 (the strongest type) over the south Indian Ocean; sulfate
  // 1.63 (the strongest type) over East Asia.
  { dataset: 'aerosols', seek: 0.3, play: false, focus: ['dust'], fly: { lat: 18, lon: -20, zoom: 1.4, seconds: 3 }, wait: false },
  { say: 'air-1', text: 'Finally, the air itself. Tiny particles called aerosols drift around the world. This low hum is desert dust, blowing off the Sahara and across the Atlantic.' },
  { focus: ['smoke'], fly: { lat: -12, lon: 20, zoom: 1.4, seconds: 3 } },
  { say: 'air-2', text: 'This crackle is smoke. In August, fires burn across southern and central Africa.' },
  { focus: ['salt'], fly: { lat: -30, lon: 70, zoom: 1.4, seconds: 3 } },
  { say: 'air-3', text: 'This airy shimmer is sea salt, whipped up by winds over the ocean.' },
  { focus: ['sulfate'], fly: { lat: 30, lon: 110, zoom: 1.4, seconds: 3 } },
  { say: 'air-4', text: 'And these bells are sulfates, mostly from burning fuel and from volcanoes.' },
  { focus: null, play: true, fly: { lat: 15, lon: 0, zoom: 1, seconds: 3 }, wait: false },
  { say: 'air-5', text: 'Together, they tell you what is in the air. Each sound grows louder the more of its particle you can see, and moves left or right with it.' },

  // ---------- Hand-off ----------
  { say: 'outro-1', text: 'That is the jukebox. Drag the globe or use the arrow keys to explore. Point at any spot to hear it, and hold Shift to hear its value read aloud.' },
  { say: 'outro-2', text: 'The planet is yours.' },
];
