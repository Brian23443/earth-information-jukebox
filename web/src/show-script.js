// The guided show's script (steps: see show.js). Every claim here matches how the sound is
// actually made (sound.js, features.js) and what the data shows at that place and date.
//
// To record the narration: generate each line's text as web/public/show/voice/<id>.mp3
// (the list is in docs/show-script.md). Lines without a recording use the browser's voice.

export const SHOW_SCRIPT = [
  // The timeline keeps playing and the planet keeps drifting (globe.held) throughout; where a
  // line depends on the date, the show slows playback and starts it at a checked moment.
  // Pauses are moments to just listen.

  // ---------- Intro ----------
  // Seeks happen only on a dataset change (the transition covers them); within a scene
  // the timeline just plays, or glides to a checked moment (reach).
  { dataset: 'sst', seek: 0.16, speed: 0.5, play: true, focus: ['pad'], fly: { lat: 20, lon: -40, zoom: 1, seconds: 2 }, wait: false },
  { say: 'intro-1', text: 'Welcome to the Earth Information Jukebox. Everything you are about to hear is real NASA data about our planet, turned into sound.' },
  { say: 'intro-2', text: 'We will learn the sounds one at a time. Then the planet is yours to explore, with or without sight.' },

  // ---------- Ocean temperature ----------
  { say: 'ocean-1', text: 'First, the ocean. This slow chord is the average temperature of the sea surface facing you. Warmer water makes it higher and brighter.' },
  { pause: 1.5 },

  // The temperature tone, pole to pole along the Pacific (160° W): its pitch is the sea
  // temperature at the centre of the view (averaged 15° either side), so it climbs from
  // near freezing at the North Pole to the warm equator and falls again toward Antarctica.
  { focus: ['probe'], probe: true, fly: { lat: 75, lon: -160, zoom: 1.5, seconds: 4 } },
  { say: 'sweep-1', text: 'Listen to this single tone. Its pitch is the temperature of the sea in front of you: the warmer the water, the higher the note.' },
  { say: 'sweep-2', text: "Let's start at the North Pole, and work our way down to the equator." },
  { fly: { lat: 0, lon: -160, zoom: 1.5, seconds: 9 } },
  { pause: 1.5 },
  { say: 'sweep-3', text: 'And now, on to the South Pole.' },
  { fly: { lat: -70, lon: -160, zoom: 1.5, seconds: 9 } },
  { pause: 2 },
  { probe: false },
  // (Still half speed: at 1x the ocean data runs past its last day here and loops back.)
  { focus: ['melody'], fly: { lat: 10, lon: -150, zoom: 1, seconds: 2 }, wait: false },
  { say: 'ocean-4', text: 'Now the melody. Four notes play from left to right, one for each slice of the globe in front of you. A higher note means warmer water in that slice.' },
  { pause: 2.5 },
  { focus: null, pause: 3 },

  // ---------- Lightning ----------
  // Checked: over Africa activity is ~1 or more around 30-35% (busy drums); over the open
  // Pacific it dips to 0.11-0.16 only around 35-37% (the drums stop below 0.12), so the
  // timeline glides there during the flight and plays at quarter speed through the line.
  { dataset: 'lightning', seek: 0.19, speed: 0.5, play: true, focus: ['drums'], fly: { lat: 0, lon: 20, zoom: 1.3, seconds: 3 }, wait: false },
  { say: 'storm-1', text: 'Next, lightning, seen by a camera on the International Space Station. Every drum hit is a burst of new lightning on the side of Earth facing you.' },
  { say: 'storm-2', text: 'The busier the storms, the busier the drums. Storms farther north sound higher, and storms on your left play in your left ear.' },
  { pause: 2 },
  { fly: { lat: 0, lon: -150, zoom: 1.3, seconds: 4 }, reach: 0.35, then: 0.25 },
  { say: 'storm-3', text: 'Over the open Pacific, lightning is rare, and the drums fall quiet.' },
  { pause: 1 },
  { focus: null, speed: 1, fly: { lat: 5, lon: -60, zoom: 1, seconds: 4 }, wait: false },
  { say: 'storm-4', text: 'Underneath, a low rumble swells as the whole planet grows stormier.' },
  { pause: 3 },

  // ---------- Aerosols ----------
  // Checked (Aug 14, 2024; ~1 = typical amount): dust 1.97 off the Sahara; smoke 2.21 over
  // southern Africa; salt 1.61 (the strongest type) over the south Indian Ocean; sulfate
  // 1.63 (the strongest type) over East Asia. Half speed from there.
  { dataset: 'aerosols', seek: 0.3, speed: 0.5, play: true, focus: ['dust'], fly: { lat: 18, lon: -20, zoom: 1.4, seconds: 3 }, wait: false },
  { say: 'air-1', text: 'Finally, the air itself. Tiny particles called aerosols drift around the world. This low hum is desert dust, blowing off the Sahara and across the Atlantic.' },
  { pause: 1.5 },
  { focus: ['smoke'], fly: { lat: -12, lon: 20, zoom: 1.4, seconds: 3 } },
  { say: 'air-2', text: 'This crackle is smoke. In August, fires burn across southern and central Africa.' },
  { pause: 1.5 },
  { focus: ['salt'], fly: { lat: -30, lon: 70, zoom: 1.4, seconds: 3 } },
  { say: 'air-3', text: 'This airy shimmer is sea salt, whipped up by winds over the ocean.' },
  { pause: 1.5 },
  { focus: ['sulfate'], fly: { lat: 30, lon: 110, zoom: 1.4, seconds: 3 } },
  { say: 'air-4', text: 'And these bells are sulfates, mostly from burning fuel and from volcanoes.' },
  { pause: 1.5 },
  { focus: null, speed: 1, fly: { lat: 15, lon: 0, zoom: 1, seconds: 3 }, wait: false },
  { say: 'air-5', text: 'Together, they tell you what is in the air. Each sound grows louder the more of its particle you can see, and moves left or right with it.' },
  { pause: 2.5 },

  // ---------- Hand-off ----------
  { say: 'outro-1', text: 'That is the jukebox. Drag the globe or use the arrow keys to explore. Point at any spot to hear it, and hold Shift to hear its value read aloud.' },
  { say: 'outro-2', text: 'The planet is yours.' },
];
