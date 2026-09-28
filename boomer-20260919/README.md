English | [简体中文](README.zh-CN.md)

# 🪃 BOOMER

Flick to throw a boomerang, carve through floating fruit on its arc, and **catch it on the way back** — because a lost boomerang costs a life. One-finger arcade, instant restart, zero install.

**Play now:** https://xiangjianan.github.io/daily-games/boomer-20260919//

## How to play

- **Flick** anywhere on screen: press, drag, release. The drag vector becomes the throw — direction sets the arc, speed sets the range.
- The boomerang always curves back toward your hand. **Catch it** to throw again.
- Cut **fruit** (+10, up to ×5 for chained cuts in one flight).
- Watch your power: a soft flick loops back safely, but a **full-power throw flies off the screen** — and that's a lost boomerang (−1 life).
- From ~25s in, **bombs** join the fruit. Touch one and it costs a life.
- 3 lives. Drop all three and it's over — tap to retry in under a second.

## Why it's hard to put down

Borrowed hooks from the arcade classics (Fruit Ninja's slice-joy, Flappy Bird's instant retry, Peggle's "wait for it" return):

1. **3-second onboarding** — one verb (flick). No tutorial needed.
2. **A natural risk/reward dial** — the higher the fruit, the harder you must throw, and the closer you skate to losing the boomerang entirely. Every throw is a small gamble.
3. **The return is a free dopamine loop** — the flight has a built-in "will it come back?" beat, and every catch triggers a satisfying snap + chime before you fling again.
4. **Short loop, zero friction** — a run lasts 30–90 seconds; death-to-retry is a single tap with no menus.
5. **Juice everywhere** — synth sound effects (WebAudio, no files), particles, hit-stop on multi-cuts, screen shake, floating score pops.
6. **Guaranteed fairness** — fruit always spawns within reach of a mid-power throw; no unwinnable boards.

## Tech

Single `index.html` — Canvas + vanilla JS, no build step, no dependencies, works offline. Mouse and touch both supported. Best score persists in `localStorage`.

Add `?autotest` for a self-playing bot (add `&suicide` for a bot that only makes full-power throws, to test the death loop).

## License

MIT
