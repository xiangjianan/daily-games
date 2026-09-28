English | [简体中文](README.zh-CN.md)

# PUFF 🎈

*Hold to inflate & rise. Release to deflate & sink. One button controls your size AND your altitude.*

**[▶ Play in browser](https://xiangjianan.github.io/daily-games/puff-drift-20260914//)** — single HTML file, zero dependencies, works with mouse, touch, or Space bar.

## How to play

- **Hold** (mouse / touch / Space): your balloon inflates — it grows **and** floats upward.
- **Release**: it leaks air — it shrinks **and** sinks downward.
- Thread the gaps between pillars. Touch a pink spike or a pillar and you pop.
- **◆ Small cyan gems** can only be collected while **small** (deflate for them).
- **⬢ Big gold gems** can only be collected while **big** (inflate for them).
- Chain matched gems within 3.5s to build a **combo multiplier** (up to ×3).
- Score = distance + gems. Spikes start appearing the further you drift, gaps get tighter, and the world scrolls faster.

## Why it's hard to put down (design notes)

PUFF borrows three psychological hooks from proven hyper-casual hits while keeping the mechanic original:

1. **The Flappy Bird reset loop** ([the game that owned 2014](https://en.wikipedia.org/wiki/Flappy_Bird)) — death costs nothing: one tap and you're flying again in under half a second. Your brain treats "one more try" as free.
2. **Inverted eat-or-be-eaten** — instead of the *Fish eats fish* size ladder where growing is always good, size here is a **survival dial**: every point of size is lift and gem access you buy with gap clearance. Greed has a physical shape.
3. **One-button, two-axis coupling** — a nod to the [one-button game design discussions on HN](https://hn.algolia.com/api/v1/search?query=%22one%20button%22%20game). Pressing is not "jump": it is a single lever that moves you on two axes at once (bigger + higher). Mastery means *breathing* with the level instead of dodging it.

Plus the staples: 3-second time-to-fun, 30–90 second runs, synthesized sound feedback for every action, squash-and-stretch juice, screen shake, and a persistent local best score to chase.

## Tech

- One `index.html`, vanilla JS + Canvas, WebAudio-synthesized SFX (no audio files), localStorage high score.
- No build step, no network needed, ~60fps on a Raspberry Pi Chromium.

## Run locally

Open `index.html` in any browser, or:

```bash
python3 -m http.server 8080   # then visit http://localhost:8080
```

---

© 2026 xiangjianan · part of the *daily addictive mini-game* series (#6)
