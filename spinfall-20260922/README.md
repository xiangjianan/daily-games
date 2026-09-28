English | [简体中文](README.zh-CN.md)

# SPINFALL

Tap to rotate the entire dungeon 90° clockwise. Gravity never changes — use it as your steering wheel.

![gameplay](https://img.shields.io/badge/HTML5-Canvas-e34f26) ![size](https://img.shields.io/badge/size-~20KB-green)

**[▶ Play in browser](https://xiangjianan.github.io/daily-games/spinfall-20260922//)** — no install, no build, works offline. Double-click `index.html` if you cloned the repo.

## How to play

- **Tap / click / Space** — the whole dungeon spins 90° clockwise. The orb spins with it; gravity keeps pulling toward the bottom of the screen.
- Fall through shafts, roll along ledges, and thread the orb into the **green hatch** to clear the level.
- **Cyan gems** are worth +10. **Red spikes** end the run instantly.
- Clearing a level fast pays a time bonus. Levels are procedurally carved and get meaner forever. One life, one run — the score is the run.

## Why it hooks (design notes)

- **One verb.** The entire control scheme is a single tap with a single predictable effect — learnable in three seconds, per the hyper-casual formula.
- **Indirect control.** You never steer the orb; you reshape its world. Every rotation has an immediate, visible consequence, which reads as "I'm in charge" even though gravity does the driving.
- **Solvability by construction.** Every level is carved as an axis-aligned snake of vertical shafts and horizontal rolls — a route always exists, so every death feels like your timing, never the map's fault.
- **Sub-second retry.** Death to a new attempt takes one tap. The run is 30–120 seconds, the failure is cheap, the "one more" is automatic.
- **Visible growth.** Level counter, running score, time bonus, and a persistent best score in `localStorage`.

## Tech

Single `index.html` (~340 lines): vanilla JS, Canvas 2D, WebAudio-synthesized sound effects, zero dependencies, zero network. Mouse and multi-touch ready. `?autotest` runs a self-test bot with engine-level unit checks.

## License

MIT
