# REEL RAGE 爆线钓手

English | [简体中文](README.zh-CN.md)

A one-button line-tension arcade game. You are hooked into fish after fish: **hold to reel in, release to dump tension**. Push your luck against random rage runs — reel at the wrong moment and the line *snaps*.

▶ **Play:** https://xiangjianan.github.io/daily-games/reel-rage-20260913// (or open `index.html` directly — zero dependencies, works offline)

## How to play

- **Hold** (mouse / touch / Space) — reel in: the fish gets closer (catch progress up) but line tension climbs.
- **Release** — give line: tension drops fast, but the fish slowly steals progress back.
- **Watch for the "!"** — every fish telegraphs a rage run ~0.4s before it blasts off. If you are *not* holding when the rage starts, it's a **Perfect Read**: the run hurts 60% less and you gain bonus progress.
- **Tired window** — right after every rage the fish is exhausted for ~1.3s: reeling yields **double** progress. This is your window to punish.
- Tension hits 100 → the line snaps → run over. Going totally slack for too long lets the hook slip (combo resets).
- Land a fish and the next one hooks in under a second. Every fish is stronger: harder pulls, more frequent rages, shorter tells. Golden fish (★) are worth 5×.

## Why it's addictive (design intent)

1. **Analog muscle tension** (à la Stardew Valley's fishing bar, Tiny Fishing): not a discrete timing tap but a continuous tug-of-war — holding literally strains your own hand, which mirrors the on-screen tension meter.
2. **Rhythm-from-randomness** (inspired by [Hopera](https://news.ycombinator.com/item?id=49660111)'s "operation is the beat"): rage runs are random but always telegraphed, so dice rolls become readable sheet music — "see the flash, release, punish the tired window."
3. **Chain momentum + instant restart** (Flappy Bird / 合成大西瓜 school): sub-second re-bait between fish, combo multiplier snowball (×1, ×1.25, ×1.5…), golden-fish jackpots, and a <1s restart after every snap. Runs last 1–5 minutes and always end in one dramatic *snap*.

Numbers are tuned so a first-time player lands 1–2 fish inside 30 seconds, a careful player reaches fish #8–15, and perfect play hits the rage-frequency wall around fish #17–22.

## Tech

Single `index.html`, HTML5 Canvas, vanilla JS (~480 lines), WebAudio-synthesized sound (no audio files), localStorage best records, works on desktop & mobile, no build step, no network needed.

## Run

Open `index.html` in any browser, or serve the folder statically. Debug bot: append `?autotest` (an AI plays, telemetry appears in the tab title).
