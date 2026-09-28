English | [简体中文](README.zh-CN.md)

# RIPPOSTE

Swipe to deflect. Your only weapon is a sword arc drawn around your core — catch incoming bullets and send them back, boosted, at the enemies who fired them.

## How to play

- Enemies (purple orbs) drift around the edges and shoot slow bullets at your glowing core. Red darters charge straight at you.
- **Swipe** anywhere (mouse drag or touch swipe) to draw a sword arc. The arc only lives within ~150px of your core — the dashed ring.
- Any enemy bullet caught inside the arc is **reflected** at the nearest enemy, flying 1.7× faster. Your slash also damages enemies it touches directly (shooters take 2 hits, darters die in 1).
- One hit on the core ends the run. Tap to restart instantly.
- Kills within 2 seconds of each other chain into a combo, up to ×5.

## Why it's hard to put down

Design intent, mapped to the hooks studied from hit casual games:

- **The swipe is the whole game** (Fruit Ninja lineage): one gesture, zero buttons, learnable in 3 seconds — but here your slash is a shield first and a weapon second.
- **Double-payoff deflection** (bullet-hell parry games): blocking an attack *feels* like a win, and watching your enemy die to their own bullet makes it a jackpot. The 1.7× speed boost and aim assist sell the fantasy.
- **Short core loop, instant restart** (Flappy Bird lineage): runs last 30–90 seconds; death to a fresh run takes under one second. The only barrier to "one more" is lifting your finger.
- **Chain scoring** (endless arcade tradition): the 2-second combo window rewards aggressive, early deflections instead of timid last-moment blocks.
- **Rising pressure with readable tells**: spawn rate, bullet speed and darter frequency ramp over two minutes, but every shot is telegraphed — a charging ring on shooters, an aim line on darters. Deaths feel earned, never cheap.

## Tech

Single-file HTML5 Canvas + vanilla JS, no dependencies, no network. Synthesized sound via WebAudio (no audio files). Best score stored in localStorage. Works with mouse and touch.

## Play

https://xiangjianan.github.io/daily-games/riposte-20260917//
