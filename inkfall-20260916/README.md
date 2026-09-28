English | [简体中文](README.zh-CN.md)

# INKFALL

Draw fading ink ramps with your finger to route falling gems into a sliding golden basket — and lead the bombs **away** from it. One life, one line at a time.

**Play: https://xiangjianan.github.io/daily-games/inkfall-20260916//**

## How to play

- **Drag anywhere** on the board to draw an ink ramp. It glows, then fades away after ~3.6 seconds.
- **Gems (cyan)** are worth +10 points. Get one into the basket and your run continues. A gem that hits the floor ends the run.
- **Bombs (red)** must be defused: steer them to crash on the floor (+5 if they land near the basket). A bomb that touches the basket detonates and ends the run.
- Chaining catches within 2.5 seconds builds a **combo** worth up to x5.
- Ink is your only resource: every stroke drains the meter, which refills after a short delay. Longer ramps cost more.
- The basket is magnetic — gems that land near it get gently pulled in, so near-misses still count. The older the run, the less help you get.

## Why it's hard to put down

- **3-second onboarding**: drag to draw. That's the whole tutorial.
- **Runs last 30–90 seconds**: spawn rate, basket speed and bomb frequency all ramp up over time.
- **Creative agency**: unlike reflex games, you author the physics — every run is a little Rube Goldberg machine of your own drawing (the hook behind drawing-physics hits like *Happy Glass* and *Brain Dots*, here compressed into an endless arcade loop).
- **One symmetric rule, opposite goals**: gems must reach the basket, bombs must miss it. The same drawing skill, applied in mirror image, keeps your brain switching modes.
- **Ink tension**: you always want one more ramp than you have ink for.
- **Instant restart**: death to a fresh run costs a single tap.

## Controls

- Mouse: click-drag to draw.
- Touch: finger-drag to draw.
- Tap to start / restart. Best score and best combo are saved locally.

## Tech

Single-file HTML5 + Canvas + vanilla JS, zero dependencies, zero build step, works offline. Sound is synthesized with WebAudio (no audio files). Drop `index.html` in a browser and play.
