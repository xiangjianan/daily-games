English | [简体中文](README.zh-CN.md)

# Paint Rush 涂色冲刺 · Issue #21

**Paint Rush** — your finger is a paint roller. Swipe across the wall and claim it before the clock runs out.

## How to play

- **Drag anywhere** to paint. Your brush follows your finger 1:1 and tiles turn teal as you cover them.
- Each round lasts **40 seconds**. When time's up you must have covered at least the **goal percentage** of the wall: **55% on level 1, +7% per level** (capped at 94%).
- 🖤 **The rival brush** (level 2+) wanders the wall and repaints your teal tiles black — it steals coverage in real time, so finishing areas matters more than touching them.
- 🟥 **Red zones** (level 3+) look tempting but cost you **-6 seconds** if you paint over them.
- 🟨 **Gold tiles** grant **+1.2 seconds** — free time for careful eyes.
- Fail the goal? One tap restarts the same level instantly (<1s). Clear it and you advance automatically.

## Addictive-design intent

- **3-second onboarding**: drag = paint. There is no tutorial because there is nothing to learn.
- **Visible progress engine**: the coverage bar creeps in real time toward a marked goal line — the "so close" gap at the buzzer is the whole hook (à la *Block Blast!* combo juice, via HN's coverage of addiction design in 2024-25 casual hits).
- **Loss aversion vs. greed**: the rival brush eats your work while you optimize your route — every second of hesitation has a price, every bold stroke has a payoff.
- **Instant restart**: sub-second retry keeps the "one more run" loop unbroken; best level persists in `localStorage`.

## Controls

- Mouse: hold and drag. Touch: hold and drag. Nothing else.

## Tech

Single-file HTML5 Canvas + vanilla JS, zero dependencies, zero build, WebAudio-synthesized sound (no audio files). Works offline.
