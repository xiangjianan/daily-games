English | [简体中文](README.zh-CN.md)

# SIFTER

*Shatter the red. Tractor the blue. One finger, two verbs.*

A single-file HTML5 arcade game about split-second action discrimination. Everything on screen falls — red shards must be **tapped** out of the air, blue orbs must be **held** and pulled in with a tractor beam. Wrong verb on the wrong target wastes the moment you don't have.

▶ **Play:** https://xiangjianan.github.io/daily-games/sifter-20260918// (or open `index.html` directly — no build, no deps, works offline)

## How to play

- **Tap** (quick press, <160 ms) anywhere near a falling **red shard** to shatter it.
- **Hold** to open a tractor beam; **blue orbs** inside the beam are pulled to your finger and absorbed. You can drag the beam around while holding.
- A **gold orb** is worth triple — it arrives rarely, and only when you're already busy.
- If a red shard reaches the bottom line, the core shatters. One life. Tap to retry in under a second.
- If a blue orb slips past the line, you don't die — you lose your combo. That hurts differently.

Every successful action bumps the combo multiplier (up to ×8); a lost orb resets it. Score = base points × combo.

## Why it's built this way (the hook design)

- **3-second onboarding** — two verbs, shown as two words on the title screen. No tutorial.
- **Commitment tension** — the moment your finger goes down you've started *a* verb, but you can't take it back after 160 ms. Holding to catch a blue orb means you can't tap a red that spawns mid-hold. Every catch is a small gamble on what falls next.
- **Asymmetric failure** — red kills you, blue only breaks your combo. The two mistakes feel completely different, which keeps the failure mix from going stale.
- **Sub-minute runs, instant restart** — death to new run is one tap, well under a second.
- **Difficulty curve** — fall speed ramps 85→215 px/s and the spawn gap tightens 1.15 s→0.58 s over about a minute, so the first 30 seconds are a victory lap and the minute mark is where runs go to die.
- **Synthesized audio** — every sound is WebAudio oscillators and a noise buffer. No audio files, still works fully offline.

## Controls

- Mouse or touch. Hold and drag works with both. Portrait layout, scales to any screen.

## Tech

Single `index.html` + `game.js`, vanilla JS, Canvas 2D, WebAudio. `node --check` clean; headless-Chromium autotested (zero console errors, death/restart loop verified).

---

*Part of a daily series of original one-button-ish arcade experiments. Issue #10, 2026-09-18.*
