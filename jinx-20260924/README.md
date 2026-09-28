English | [简体中文](README.zh-CN.md)

# JINX

**Two worlds, one button.** A single tap makes both runners jump at the same time — the amber one in the world above, the cyan one in the world below. Clear the spikes in both worlds, but never jump where crystals hang.

Play: **https://xiangjianan.github.io/daily-games/jinx-20260924//** — double-tap `index.html` also works, zero dependencies, fully offline.

## How to play

- Tap anywhere (or press Space) to jump. **Both** runners jump — you only have one button for two lives.
- Jump over the spikes. Spikes appear in either world on their own schedule.
- **Never jump under the hanging crystals.** Sometimes the safe move is to do nothing — and doing nothing while the other world begs you to jump is the whole game.
- Grab gems for bonus points. When both worlds spike at the same moment, one well-timed tap clears both for a **SYNC +25** bonus.
- One touch on a spike or a crystal ends the run. Instant restart.

## Why it's hard to put down (design notes)

- **Split attention under one input**: the two worlds run independent hazard schedules, so your brain constantly reconciles "top needs a jump now, bottom must stay grounded." The tension of shared control is the core loop — borrowed from the psychology of multitask-style games, not from any single game's mechanics.
- **The forbidden action as a hazard**: most runners punish you for failing to act. JINX also punishes you for acting — crystals invert the tap's meaning for a few seconds, forcing restraint under pressure.
- **SYNC moments**: occasional aligned spikes turn a panicked double-obstacle into a satisfying one-tap payoff, rewarding players who read both worlds instead of spamming.
- **3-second onboarding, 30-second runs**: one verb, instant restart, and a difficulty curve that stays gentle for the first half minute before the schedule tightens and the world speeds up (260 → 400+ px/s).
- Chasing your `localStorage` best score is built in — the run you just lost is always one tap away.

## Tech

Single-file HTML5 + Canvas + vanilla JS (~320 lines). WebAudio-synthesized sound effects, no assets, no build step, works with mouse / touch / keyboard.
