English | [简体中文](README.zh-CN.md)

# PLATTER PANIC

A one-thumb-per-plate arcade juggler. Four plates spin on four poles; every plate is always losing speed. Hold a column to whip its plate back up to full spin — and keep all four alive as long as you can.

**Play now:** https://xiangjianan.github.io/daily-games/platter-panic-20260925//

## How to play

- **Touch:** press and hold anywhere in a column (the screen is split into 4 vertical zones). Hold two zones with two fingers to rescue two plates at once — that's the intended way to play on mobile.
- **Mouse:** hold the left button inside a zone; you can only nurse one plate at a time, so triage ruthlessly.
- A plate that hits 0% spin falls and shatters — you have 3 lives, and a replacement plate arrives 2.5s later.
- **FEVER:** keep ALL four plates above 70% spin simultaneously and score doubles while it lasts.
- **STORM:** every ~20s a storm doubles the decay rate for 4 seconds. Prioritize.

## Why it's hard to put down

The design borrows the compulsion loop of classic "overload" games:

- **3-second onboarding** — one verb (hold), readable instantly.
- **Triage pressure** — plates decay at different rates, forcing a constant "who do I save first?" decision. That attention-allocation loop is the same hook that made plate-spinning variety acts and games like *Overcooked* stressful in a fun way.
- **Visible fragility** — plates wobble and redden near stalling, and an audio tick warns you, so every near-death is felt, not just seen.
- **FEVER as greed bait** — you can always play it safe, but the ×2 multiplier dares you to nurse all four plates to the brink instead.
- **Instant retry** — death restarts the run in one tap, and your best score sits on the menu taunting you.

Difficulty ramps smoothly: decay starts gentle (first plate won't stall for ~15s) and accelerates over time, with storms adding spikes of chaos.

## Tech

Single-file HTML5 + Canvas + vanilla JS, zero dependencies, no network required. WebAudio-synthesized sound. Works offline — just open `index.html`.
