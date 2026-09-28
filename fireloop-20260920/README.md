English | [简体中文](README.zh-CN.md)

# FIRELOOP

Draw closed loops of light around fireflies. Never trap a wasp.

A single-file HTML5 arcade game about the greedy pull of a bigger circle. Press and drag to draw a glowing loop; when it closes, every firefly inside is caught at once. Catch two or more in a single loop and your combo chain doubles the payout. But wasps patrol the meadow hunting the same swarms — close a loop around one and it stings. Three stings and the night is over.

**Play:** open `index.html` in any browser, or click the Pages link on the right. Works with mouse or touch.

## How to play

- **Press and drag** to draw a loop. Return near your starting knot to close it (a hint ring appears when you're in range).
- Every firefly **fully inside** the loop when it closes is caught simultaneously — `n` fireflies pay `n × 10 × n` points, and any multi-catch doubles the whole capture while the combo chain lasts.
- **Ink is your loop budget** (the bar at the bottom). Every pixel you draw costs ink; it refills in about two seconds while you plan your next circle. Bigger circles cost more — greed is metered.
- **Wasps** drift toward the densest firefly clusters and speed up over time. A wasp inside your closing loop means a sting: −1 life, combo reset. You get brief invulnerability afterward.
- Three stings end the run. Tap to restart in under a second.

## Why it's built this way (the hooks)

- **3-second onboarding** — one verb (draw a loop), one rule (fireflies good, wasps bad).
- **The greed dial** — the optimal loop is always slightly bigger than the safe one. Ink meters that temptation instead of a timer, so the pressure is self-inflicted.
- **Simultaneous capture** — the payoff scales quadratically with swarm size (`n²`), which makes "one more firefly" irresistible even at real risk.
- **Shared prey** — wasps hunt the same clusters you do, so hesitating hands the swarm over to them. Waiting is also a decision.
- **Sub-second retry** — death to restart costs one tap; the field re-randomizes instantly.
- Runs 100% locally: no network, no accounts, no build step. Best score persists in `localStorage`.

## Tech notes

- One file (`index.html`, ~400 lines): Canvas 2D, vanilla JS, Web Audio–synthesized sound (no audio assets).
- Verified headlessly with Playwright: capture/sting/death-restart paths, 40s soak with zero console errors, 60 fps.

## License

MIT
