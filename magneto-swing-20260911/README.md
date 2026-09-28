# MAGNETO

**English** | [简体中文](README.zh-CN.md)

**Single-key magnetic swing**: hold to latch onto a magnetic anchor and start swinging, release to fling yourself forward. The tether burns out, the ground is spikes, and the farther you swing, the higher you score.

▶ **Play online**: https://xiangjianan.github.io/daily-games/magneto-swing-20260911// (double-click index.html to play too — zero dependencies)

![play](shots/play.png)

## How to Play

- **Hold (mouse / touch / spacebar)**: fires a magnetic tether to the nearest, front-biased anchor; once latched you orbit the anchor in a circle while the tether continuously "magnepumps" you forward
- **Release**: throws you along the tangent — letting go on the upswing in the lower-right quadrant hurls you far toward the upper right
- **The tether wears out**: latched longer than ~2.3 seconds starts a tick-tock warning; it snaps at 3.5 seconds; low anchors auto-shorten the tether to prevent scraping the floor
- **Red anchors are repulsors**: they can't be latched and push you away when close — sometimes a free boost, sometimes a slap into the saw blade
- **Gold dust**: auto-collected magnetically when near; consecutive pickups build a combo for bonus points
- **Milestones**: a toast every 25m; saw blades appear after 60m as difficulty ramps with distance

After death, one key restarts instantly (hold any key 0.9 seconds to prevent accidental taps); your best record is stored locally.

## Addiction-Mechanic Design Intent

| Hook | Implementation |
| --- | --- |
| 3-second onboarding | Only one key: hold = latch, release = fly. The spawn anchor is reusable, letting players find their rhythm safely |
| Short core loop | One "latch → half orbit → fling" takes about 1 second; a run lasts 30 seconds to 2 minutes |
| Instant feedback | Blue burst particles + rising tone on latch, whoosh on fling, ding on gold dust, combo popups, noise burst on snap |
| Fail-and-restart | Death screen half-overlay for 0.9 seconds → any key restarts at full health, total < 1.5 seconds |
| Score rivalry | Distance × gold dust dual-dimension records persisted in localStorage, compared in large type on the death screen |
| Visible growth | Milestone toasts, combo counter, sparser anchors and saw blades the farther you go — difficulty you can feel |
| Seeded randomness | The world is randomly generated but distance-constrained: no hazards in the first 15m, gaps widen smoothly with distance |

The gameplay core (single-key timed tangential release + reusable anchors + tether wear) is an original combination, distinct from Stick Hero,Rotate Jump, and other one-key games.

## Controls

| Platform | Controls |
| --- | --- |
| Mobile | Hold / release the touchscreen |
| Desktop | Hold / release the left mouse button, or spacebar |

## Tech

- Single-file `index.html` (~590 lines), vanilla Canvas + WebAudio synthesized sound effects (no audio files, no external dependencies, no build)
- Adaptive portrait/landscape, devicePixelRatio high-res rendering
- Self-test: built-in `?autotest` AI bot plays automatically (latch-fling phase control), reaching 20m+ with zero deaths in 120 seconds; `?shot=play|dead|menu` outputs promo screenshots
