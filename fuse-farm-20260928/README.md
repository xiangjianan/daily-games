English | [简体中文](README.zh-CN.md)

# Fuse Farm 🍉💣

A one-tap chain-reaction arcade game about defending a watermelon patch. Tap a bomb-gourd to light its fuse — any bomb caught in the blast detonates too, doubling the score multiplier with every link in the chain.

**Play:** https://xiangjianan.github.io/daily-games/fuse-farm-20260928//

## How to play

- Bugs crawl in from the top and beeline for your three watermelons. A melon takes 3 bites to destroy; lose all 3 melons and the farm falls.
- **Tap any bomb-gourd** to arm it. After a short blinking fuse (0.55s) it explodes with a 95px blast radius.
- Bugs caught in the blast are squished. **Other bombs caught in the blast chain-detonate**, and each chain link doubles the point multiplier (×2, ×4, ×8…).
- Bombs are a limited stock (max 3 on the field) and regrow slowly — the real skill is **patience**: wait for bugs to cluster around a bomb before pulling the trigger, but don't wait so long that a melon gets eaten. Rescuing a melon mid-bite is the most heroic move in the game.

## Why it's addictive (design notes)

- **3-second onboarding:** one verb (tap), one visible resource (bombs), one visible threat (bugs). No tutorial needed.
- **The greed loop:** every second you wait, bugs cluster tighter and the potential chain grows — but the risk of losing a melon grows too. The game weaponizes "just one more second".
- **Chain-reaction jackpot:** multi-link chains trigger slow-motion, screen shake and a burst of particles. The brain candy of watching a ×8 chain pop is the whole hook, borrowed from the combo-juice of hits like Block Blast!.
- **Failure invites a retry:** a run ends in under a minute, death → restart is a single tap with zero friction, and your best score lives in localStorage. Same psychological loop that made games like Sheep a Sheep blow up.
- **Escalation with randomness:** bug speed and spawn rate ramp over time, while random wandering paths mean no two clusters form the same way — you can't solve it, only read it.

## Controls

- Tap / click a bomb-gourd. That's it. Works with mouse and touch.

## Tech

- Single-file HTML5 Canvas, zero dependencies, zero build step, works offline. Sound effects are synthesized live with WebAudio (no audio files).

## License

MIT
