English | [简体中文](README.zh-CN.md)

# Tipscale（不倒天平） — Daily Game #24

A one-tap physics balancing game. Blocks rain into your queue; you tap anywhere above the beam to drop the next one exactly there. Every block adds torque — the beam tilts in real time. Tip past 16° and outer blocks start sliding toward the edge; tip past 30° and the beam snaps. One run = one balance that always ends. How long can you keep it level?

**Play:** https://xiangjianan.github.io/daily-games/tipscale-20261002/

## How to play

- **Tap / click** a horizontal position — the head block of the queue falls from the sky onto that spot on the beam.
- Each block shows its **weight** (and width). Heavy wide blocks earn more but twist the beam harder.
- **Alternating left/right placements** build a COMBO multiplier (up to ×8 shown as ×(1+0.25·combo) on score).
- **★ Gold blocks** are worth ×5 points — but weigh 1.9× more. Greed is a torque decision.
- After ~15s, **wind gusts** arrive (yellow warning arrow ~1s before impact) and push the beam.
- Game over when any block slides off the end, or the beam holds past 33° for 0.6s and snaps.

## Why it hooks (design intent)

- **Visible, honest physics:** the tilt gauge and the leaning beam give continuous, readable danger — every death is attributable to your last placement, which makes "one more run" irresistible.
- **Risk-reward dials in one verb:** where you drop is simultaneously where you score, where you combo, and where you gamble (gold blocks, far-edge placements).
- **Slides before death:** past 16° blocks creep outward with friction and can slide *back* if you recover the tilt — near-losses create the strongest relief/restart loop.
- **Short core loop:** a round is 30–120 seconds, restart is one tap, best score persists in localStorage.

## Tech

Single-file HTML5 + Canvas, vanilla JS, zero dependencies, works offline. WebAudio-synthesized SFX (no audio files). Mouse and touch supported.
