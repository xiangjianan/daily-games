English | [简体中文](README.zh-CN.md)

# GRAZER

A one-touch reflex game about greed: fly your ship through a bullet storm and score by **grazing** — skimming the edge of bullets without touching them. Touch one and you die.

**Play:** https://xiangjianan.github.io/daily-games/grazer-20260923// (single HTML file, works offline, mouse or touch)

## How to play

- **Drag** anywhere on the screen — your ship follows your finger 1:1.
- Bullets pour in from every edge in three flavors: **aimed shots**, **ring bursts**, and **walls with a gap**.
- Every bullet that passes through your dashed **graze ring** (without hitting your hull) scores points. The dashed ring flashes white on "hot" bullets — that's your danger-for-reward moment.
- Chain grazes within 1.6s to build a **combo multiplier** (up to ×8).
- Every 30 grazes triggers **OVERDRIVE**: 4 seconds with a larger graze ring and double points. Getting greedier literally makes you better at being greedy.
- One touch = death. Tap to restart in under a second. Chase your best score.

## Why it's built this way (the addiction design)

- **Near-miss thrill as the score engine.** Classic bullet hells reward you for *avoiding* bullets; GRAZER pays you for the *almost* — the dopamine of a near-miss, monetized into points. The white flash on a bullet entering your ring is a micro-jackpot signal.
- **Risk dial is continuous.** You choose every second how close to fly: safe route (survive, low score) or tight shave (combo multiplier). No menus, no modes — greed is the only knob.
- **3-second onboarding, 30-second runs.** One verb (drag), one rule (don't touch). The first 30 seconds spawn slow, sparse bullets so a first-time player survives — then pressure ramps to full at 75 seconds.
- **Sub-second restart loop.** Death screen shows your score, grazes, and best; one tap and you're flying again. Re-entry cost is lower than the urge to try "one more".

## Tech

Single `index.html` (~230 lines): Canvas 2D, vanilla JS, WebAudio-synthesized sound effects (no audio files), `localStorage` high score. No build, no dependencies, no network. Bots included: `?autotest=graze` (survival bot) and `?autotest=suicide` (must-die bot) for smoke-testing.

---
Built as day #15 of a daily "one addictive game" challenge.
