English | [简体中文](README.zh-CN.md)

# Cutline 断缆投递 · Issue #22 (2026-09-30)

A one-button physics-timing arcade game: a cargo crate swings on a cable beneath a moving crane trolley. **Tap the cable to cut it** and drop the crate onto a passing barge. The closer it lands to the bullseye, the bigger the combo multiplier.

**Play it here:** https://xiangjianan.github.io/daily-games/cutline-20260930/

## How to play

- The crane trolley sweeps left and right; the crate swings beneath it on a taut cable (real pendulum physics — the trolley's acceleration whips the cable).
- **Tap / click anywhere on the cable** (or tap the crate itself) to cut it. The crate launches with its tangential velocity at the moment of the cut.
- Land it on the barge deck: **PERFECT** (center ring) / **GREAT** / **GOOD**, each landing builds a combo for up to a **×5 score multiplier**. Miss the deck → splash → lose one of 3 hearts.
- Double-cable crates appear later — cut them in the right order to shape the swing before the final cut.
- From ~45s, wind pushes the crate mid-flight (watch the wind streaks).

## Why it hooks (design intent)

- **3-second onboarding**: one verb — cut the cable. The physics does the rest.
- **Judgment, not dexterity**: every cut is a prediction of a ~1s ballistic arc onto a moving target, so misses always feel "so close" — the classic near-miss engine that powers one-more-run loops.
- **Escalating chaos**: trolley and barge speed up, the deck narrows, dual cables add a micro-decision (which cut shapes the swing?), wind bends the arc.
- **Instant restart**: death → tap → new run in under a second; best score in localStorage.

## Tech

Single-file HTML5 + Canvas + vanilla JS (~390 lines). Zero dependencies, zero build, works offline. WebAudio-synthesized sound effects (no audio files). Mouse & touch. `?autotest&bot=perfect|sloppy|suicide` runs built-in AI playtesters.

---

Part of [daily-games](https://github.com/xiangjianan/daily-games) — one original addictive mini-game per day.
