# CHARGE RUSH ⚡

**English** | [简体中文](README.zh-CN.md)

> Daily game addiction #4 · 2026-09-12 · Researched, designed, developed, and published autonomously by the Hermes Agent
> **Play online: https://xiangjianan.github.io/daily-games/charge-rush-20260912//**

Single-file HTML5 + Canvas + vanilla JS. Zero dependencies, zero build, no internet required — open in a browser and play (supports mouse / touch / spacebar).

## 🎮 How to Play

Your core has positive and negative poles:

- **Hold = positive ⊕, release = negative ⊖** (the whole world's color flips with you)
- Charges fly in endlessly from the right
- **Same pole** → absorb for score, combo snowballs (each = 100 × current combo, bonus every 10-combo)
- **Opposite pole** → instant death on contact
- **Missed** (flies past untouched) → combo resets — **you must catch every single one correctly**
- Absorbing fills the "overload bar"; when full, triggers **6 seconds of ×2 overload** (gold frenzy)

The rule in one sentence: this isn't a bullet-hell dodger — it's about turning "flip timing" into rhythm.

## 🧠 Addiction-Mechanic Design Intent (Today's Research → Borrowings)

| Research Subject | Hook Borrowed | This Game's Original Combination |
|---|---|---|
| [Hopera (HN 2026-09-11, rhythm music game)](https://news.ycombinator.com/item?id=49660111) | Rhythm flow: the operation itself is the music | Same-pole streaks = phrases, flip points = beats; absorb pitch climbs the chromatic scale with your combo (classic dopamine ladder) |
| Polarity mechanics in the Ikaruga / Color Switch lineage | Anticipation tension of single-key state matching | "The same charge switches between score/death based on your polarity," and using "hold/release" instead of click-toggling makes flipping feel more like charging |
| Flappy Bird | Death = 0.5s restart, runs of 30–120s | 0.9s death slow-mo + tap anywhere to restart; restart cost < 1 second |
| Watermelon Game / Sheep-a-Sheep | Instant feedback + brag-worthy growth numbers | Combo king, ×2 overload golden moment, death screen "Absorbed N · Survived N s" for friendly rivalry |

**Originality statement**: polarity-matching "state" gameplay has precedents, but the core loop of "hold/release = charge-style dual states + every trajectory must be caught + a miss breaks the combo + ×2 overload" is this game's original combination, not a reskin of an existing game.

## 🕹️ Controls

- **Mouse**: hold left button = positive, release = negative
- **Mobile**: hold the screen / release
- **Keyboard**: spacebar, same as above
- After death, tap anywhere to restart in 0.5 seconds

## 📈 Difficulty Curve (Numeric Design)

- Charge speed: `v(t) = min(380, 190 + 8·t^0.85)` → early flight time 1.9s (ample reading), 0.93s after 60s
- Spawn interval: `max(0.38, 1.05 − 0.012t)` seconds; first 5 charges fixed at 1.15s with alternating polarity (an 8-second tutorial)
- Waves: one every 9–13s; same-pole bursts before 30s → mixed colors 30–60s → alternating bursts + **flash charges** (mid-flight pole flip, telegraphed by a 0.55s white ring) after 60s
- Expected: a guaranteed win in the first 30 seconds builds confidence; 70–120s enters the shaky-hand death zone; a single run lasts 30 seconds to 2 minutes

## 🔍 Self-Check Log

- `node --check` JS syntax passed; `python3 -m http.server` + curl 200
- Headless Playwright (local chromium): the built-in `?autotest` perfect bot plays automatically, verifying playability, zero JS errors, and the death-auto-restart loop
- High score / combo king stored in localStorage

---
*Autonomously completed daily by the Hermes Agent cron: research → ideation → development → publishing, one game a day.*
