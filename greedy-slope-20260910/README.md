# GREEDY SLOPE

**English** | [简体中文](README.zh-CN.md)

> A one-finger push-your-luck slope: the ball rolls automatically through golden betting gates where multipliers climb like crazy; tap = cash out; get greedy past a hidden bust point = instant explosion.

🎮 **Play online**: https://xiangjianan.github.io/daily-games/greedy-slope-20260910//

Single-file HTML5 (Canvas + vanilla JS + WebAudio synthesized sound effects), zero build, zero dependencies, no network requests. Double-click `index.html` to play; supports mouse / touch / spacebar.

## How to Play

1. The ball rolls down the slope automatically — **no input required**
2. Rolling into a **golden betting gate** triggers bullet time; the score multiplier climbs automatically from ×1.0, rising faster the longer you wait, heartbeat racing
3. **Tap (mouse / touch / spacebar) = cash out**: locks in the current multiplier for points, and the ball ejects from the gate to keep rolling
4. Every gate hides a **bust point** (×1.6 ~ ×12.5 random): if the multiplier climbs past it → instant explosion, run over
5. **The first 2 gates have a shield**: on a bust you only bank half — no death. It lets you feel the rush once first, then makes your hands itch
6. Score = Σ(cashed-out multiplier × 100); the results panel shows "busted at ×N.N" — see who died greedier

## Controls

| Platform | Controls |
| --- | --- |
| Mobile | Tap anywhere on screen |
| Desktop | Mouse click / spacebar / ↑ / Enter |

## Addiction-Mechanic Design Intent (Psychological Hooks Borrowed)

- **Push-your-luck** — modeled on HN's recent hit Per Diem (a Balatro-style daily dice game, [hn.algolia item 49471634](https://news.ycombinator.com/item?id=49471634)) and the globally viral crash genre (Aviator/JetX): rewards keep climbing + you can "quit while ahead" anytime + the bust point is unknown. The dopamine doesn't come from winning — it comes from the cliff edge of "just a little longer"
- **3-second onboarding, zero learning cost** — inspired by Bisecto's ([hn.algolia item 49374879](https://news.ycombinator.com/item?id=49374879)) minimalism: the downhill section is fully automatic, the player's only decision is "when to stop," and the rules fit in one sentence
- **Short core loop + instant restart** — runs last 30~120 seconds; death explosion → results → tap to restart in <0.5 seconds, borrowing Flappy Bird's "one more run" addiction loop
- **Pity-style pseudo-randomness** — when two consecutive gates have bust points <×2.0, a forced reroll suppresses "bad luck rage"; death is always "I was too greedy," never "the game screwed me," following Sheep-a-Sheep's probability-feel tuning
- **Cause-of-death rivalry / shareability** — the results screen hands you a brag-worthy number like "busted at ×8.3": best multiplier and high score stored in localStorage, naturally generating "how greedy dare you go" challenges in social contexts
- **Instant-feedback juice** — bouncing multiplier digits, heartbeat ticking that accelerates with the multiplier, coin fountain + arpeggio on cash-out, screen shake + white flash + bass drop on explosion, all synthesized in real time with WebAudio, no audio files

## Numeric Design

- Multiplier curve: `m(T) = 1 + 0.55T + 0.075T²` (T = seconds inside the gate, later gates climb +3%/gate) → ×2.4 in about 2s, ×5.6 in about 5s, ×14.5 in about 10s
- Bust-point distribution: 55% fall in ×1.6–3.8, 30% in ×3.8–8.0, 15% in ×8.0–12.5 → cashing out at ×2.4 survives ~76%, ×4.4 survives ~41%; expected value peaks at ×2.4–3.3, so "one more second" always looks worth it
- Shields on the first 2 gates guarantee beginners a "win" within the first 30 seconds

## Run Locally

Just double-click `index.html`, or:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
