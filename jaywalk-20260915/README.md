English | [简体中文](README.zh-CN.md)

# JAYWALK

*Judge the gap. Beat the rush.* — a one-thumb traffic-gap arcade.

**▶ Play: https://xiangjianan.github.io/daily-games/jaywalk-20260915//**

## How to play

- Pedestrians queue at the bottom curb, rush hour rages across four lanes.
- **Tap the left / middle / right third of the screen** to send the next pedestrian dashing up that column.
- A walker takes ~2.5s to clear all four lanes — read the gaps, including the headlight glow at the curb that telegraphs cars about to enter.
- Chain crossings within 1.6s to stack a combo multiplier (up to ×5). Let the window lapse and it resets.
- Grazing a car pays a **+5 CLOSE!** bonus. Greed is a strategy — send more people at once, chase near-misses, cash combo streaks.
- One hit ends the run. Restart costs a single tap.

Trucks join after 25s. Density and speed keep climbing. How many can you get across?

## Addiction design notes

| Hook | Where it comes from | How JAYWALK uses it |
|---|---|---|
| 3-second onboarding | Frogger (1981), Crossy Road | One verb: tap a third of the screen. Nothing to learn, everything to master. |
| Read-the-gap tension | Frogger's lane gaps | Telegraphed spawns make every dispatch a fair, readable bet — deaths feel earned, so "one more" feels deserved. |
| Greed vs. safety | Traffic controller games | Score scales with *concurrent* walkers and near-misses. The safe play and the scoring play are different plays. |
| Combo snowball | Crossy Road's hop streaks | 1.6s chaining window rewards committing to bursts, with a visible timer bar for "can I squeeze one more?" |
| Sub-1s restart | Flappy Bird | Death → tap → new run. No menus between you and revenge. |

Single-file HTML5 + Canvas + WebAudio synth SFX. No build, no dependencies, no network. Mouse and touch both work.

## Run locally

Open `index.html` in any browser, or:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Highest score and best combo persist in `localStorage`.
