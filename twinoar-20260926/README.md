English | [简体中文](README.zh-CN.md)

# TWINOAR 🛶

Two oars, one river. A one-minute canoe arcade game — hold the **left half** of the screen to stroke the left oar, the **right half** for the right oar. That's the whole controls. Surviving is the hard part.

**▶ Play: https://xiangjianan.github.io/daily-games/twinoar-20260926//**

## How to play

- **Hold left half** → left oar paddles → the canoe turns **right**
- **Hold right half** → right oar paddles → the canoe turns **left**
- **Hold both** → straight line + a **BOOST** of current speed. Distance = points, so boosting is the only way onto the leaderboard… and the fastest way onto a rock.
- Dodge the rocks, thread the narrowing river, survive the whirlpools that bend your heading, and chain coins for combo multipliers (×5 max).
- One touch of granite ends the run. Tap to launch again in under a second.

On desktop: **left mouse button** = left oar, **right mouse button** = right oar (or A/D keys).

## Why it's hard to put down

- **3-second learn**: two holds, the boat does the rest. The asymmetry (left oar turns *right*) is the entire skill curve.
- **Risk dial in one verb**: boosting is just "hold both" — greed is a single thumb decision, always available, always punishing.
- **Escalating river**: current ramps 130→330 px/s, the safe corridor narrows 190→110 px, whirlpools join after 25 s. The first 30 s are a gift; minute two is a knife fight.
- **Combo bait**: coins sit in the corridor centre — exactly where you want to be, so the greedy line and the safe line are the same line, until the rocks disagree.
- **Sub-second restart**: wreck → tap → paddle. No menus, no loading, no mercy.

## Tech

Single `index.html`, Canvas 2D, vanilla JS, zero dependencies, works offline. Sounds are synthesized with WebAudio (no audio files). Best score persists in `localStorage`.

## Design notes

The control scheme borrows the *feel* of real canoeing — paddle on one side, the bow swings the other way — and turns it into a two-thumb coordination game. Every mechanic feeds the same tension: speed is score, steering is survival, and the same two thumbs must do both.
