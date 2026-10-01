English | [简体中文](README.zh-CN.md)

# Orbita — Gravity-Hop Space Station (星轨跳站)

A one-tap arcade game about slingshotting a tiny spaceship from orbit to orbit. Built as a single-file HTML5 demo — no build step, no dependencies, works offline.

**Play:** https://xiangjianan.github.io/daily-games/orbit-hop-20261001/

## How to Play

- Your ship automatically orbits the current planet at constant speed.
- **Tap / click / press Space** to release: the ship flies off along the tangent line (the dashed yellow preview shows exactly where you'll fly).
- Fly into the next planet's capture ring to be caught into a new orbit. Every capture scores **10 × combo**.
- Chain captures within 2.5 seconds to build your combo up to **×5**.
- Crash into a planet's body, fly off-screen, or linger on one planet too long (it goes **critical and collapses** after 4 seconds — the ring flashes amber then red as a warning) and your run ends.
- One run. One life. Instant restart.

## Difficulty Ramp

- Capture rings shrink (110 → 70 px) as time passes.
- Planet spacing grows (300 → 560 px), so tangent windows get rarer.
- After 40s: red **spike planets** with tighter rings. After 55s: some planets carry **debris belts** orbiting outside the capture ring.

## Addiction Design Notes

- **3-second onboarding**: one verb (tap), one visible affordance (the tangent line does the aiming math for you).
- **The core tension**: waiting for the perfect tangent alignment vs. the 4-second orbital collapse timer. Hesitation is lethal; panic releases are sloppy. Every death feels like *your* timing.
- **Near-miss engine**: watching your dotted trajectory miss a capture ring by pixels is an instant "one more run" trigger.
- **Combo escalator**: fast chained hops multiply score ×5, rewarding risky quick play over safe camping (which the collapse timer forbids anyway).
- **Zero-friction restart**: death → 350ms input guard → tap → new run, all under one second.

## Controls

- Tap / click anywhere, or press Space / ArrowUp.
- Works with mouse and multi-touch; layout is mobile-portrait friendly.

## Tech

Single `index.html` (~290 lines): Canvas 2D, vanilla JS, WebAudio-synthesized sound effects (no audio files), `localStorage` best score. Includes a `?autotest` bot mode used for headless verification.
