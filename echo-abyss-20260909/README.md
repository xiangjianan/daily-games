# 🐋 Echo Abyss

**English** | [简体中文](README.zh-CN.md)

> In a pitch-black ocean trench, you are a tiny glowing fish. **Tap = sonar pulse = swim up + light up your surroundings.**
> "Seeing the world" is the reward itself — but every look changes your trajectory.

🔗 **Play online**: https://xiangjianan.github.io/daily-games/echo-abyss-20260909// (GitHub Pages, opens directly in mobile/desktop browsers)

## 🎮 How to Play

- Tap the screen (or press space): emits a sonar pulse — **simultaneously** bounces you upward and ripples out a gradient wave of light, illuminating the rock walls it sweeps across
- Darkness is the norm: without tapping you see nothing — **even you merge into the abyss**, with only the sonar afterglow briefly revealing your position
- Collect pearls to build combos: chain pickups within 2.5 seconds and the pitch climbs step by step, the multiplier rising with it (up to ×8)
- About a 3% chance to spawn a **green pearl**: eaten, it becomes a little tail following behind you, blocking one death when you hit a wall or touch a jellyfish — one green pearl saves you once; the moment you're saved it knocks the jellyfish back, pulls you to the center of the channel, and grants brief invincibility flicker
- Dodge the rock walls and jellyfish (which start appearing after 25 seconds); collision is instant death
- The 🔇 in the top-right mutes the sound; the death panel has a one-tap "copy stats" button for bragging

## 🧠 Addiction-Mechanic Design Intent (Today's Research → Distilled)

Hit signals referenced today:

- [Putt.day — Show HN daily mini golf (320 points)](https://putt.day/): short runs + daily ritual hook
- [Break 5 — daily 5-minute word game](https://break5.co.uk/): ultra-short runs × near-zero restart cost
- [Bisecto — minimalist slice-judgment game](https://bisecto.com/): spatial satisfaction of instant right/wrong feedback
- [Bloomberg: Mobile Games Designed to Be Addictive Get More Kid-Friendly](https://www.bloomberg.com/graphics/2026-kid-friendly-mobile-games-addiction/): addiction design trending toward low barriers and lightweight play
- Classic anchors: Flappy Bird (single key × instant death/instant restart), Sheep-a-Sheep (pity pseudo-randomness × exponential ramp)

The four psychological hooks this game landed on:

| Hook | Implementation |
| --- | --- |
| **Single input · restart <1 second** | Only one verb throughout: "tap"; death slow-motion 0.4s, then any tap restarts immediately |
| **Information as reward (original core)** | Sonar illumination and upward thrust share one button: to see the road you must pulse, and every pulse changes your trajectory — the player is always making both a "look" and a "move" decision at once |
| **Combo ladder** | 2.5s combo window × pentatonic pitch climb × multiplier growth (×2→×8); a missed pearl breaks it, fueling the "one more try" urge |
| **Pity pseudo-randomness** | Trench-center wandering limits drift and suppresses consecutive large same-direction steps; pearls never spawn inside walls; jellyfish spawn positions always leave dodge room |

Difficulty curve: speed ramps smoothly at `150 + 12√t`; trench width 56% → 30% (bottoming out around 104 seconds); jellyfish appear at 25s, double at 75s. The first 30 seconds feature a wide trench, slow speed, and abundant pearls to guarantee beginners "win once."

## 🕹️ Controls

| Platform | Controls |
| --- | --- |
| Mobile | Tap anywhere on screen (except the mute button in the top-right) |
| Desktop | Mouse click / space / ↑ / enter |

## 🛠️ Tech

- Single-file `index.html` (~630 lines): HTML5 Canvas + vanilla JS, zero build, zero dependencies, no internet required
- All sound effects synthesized in real time with WebAudio (sonar echo via a delay-feedback bus, no audio files at all)
- `?autotest` parameter includes a built-in smoke-test bot (verifies state machine/collision/pickup/restart in headless environments)
- Mouse and touch supported; portrait logical resolution 480×800 with adaptive scaling

---

*Daily addictive mini-game series #1 · 2026-09-09 · Researched, designed, developed, and published autonomously by the Hermes Agent*
