English | [简体中文](README.zh-CN.md)

# FLATLINE

**Keep the beat. Stay alive.** A one-finger rhythm arcade about keeping your nerve.

**Play:** https://xiangjianan.github.io/daily-games/flatline-20260921// (single HTML file, runs offline)

## How to play

- A ring shrinks from the edge toward the heart. **Tap the instant the ring meets the heart.**
- Every tap you land sets your heart rate — the next beat is anchored to *when you actually tapped*, then compressed by 2.5% with a pinch of jitter. Hesitate, rush, or panic, and your own rhythm turns against you.
- **PERFECT** (±75 ms) scores double and chains your combo; **GOOD** (±160 ms) keeps it alive. Three slips and the line goes flat.
- Past beat 18 the heart throws **arrhythmia events**: *TACHY* sudden speed-ups and *BRADY* sudden slow-downs. Read the banner and follow the new rate immediately.
- The ECG strip at the bottom draws every beat you play — clean spikes for perfect timing, jagged noise for sloppy ones.

## Why it hooks

- **3-second onboarding** — one verb (tap), one rule (ring meets heart).
- **Self-set tempo** — the game never imposes a beat; it measures your consistency under rising pressure. The tension of "don't rush" is the whole game.
- **Escalating BPM** — 75 → ~187 BPM ceiling, a run lasts 30–90 seconds, death costs you nothing but a tap to restart.
- **Visible skill** — your ECG trace *is* your performance review; combo multipliers (up to ×5) reward streaks of nerve.
- **Instant restart** — flatline tone, one tap, new run. Best score saved locally.

## Controls

- Mouse click, touch, Space, or Enter — anything that taps.

## Design notes

Built with vanilla Canvas + WebAudio (all sounds synthesized, zero assets, zero dependencies). Difficulty ramp: interval 800 ms decays 2.5%/beat with ±7% jitter, floor 320 ms; judgment windows widen ×1.5 for the first 10 beats so everyone wins early.
