English | [简体中文](README.zh-CN.md)

# LIGHTKEEP

You are the lighthouse. Drag to sweep your beam across a night sea, hold the light on passing ships until their lantern fills, and never let the beam rest on the kraken.

## How to play
- **Drag** anywhere (mouse or touch) — the beam turns toward your finger, but it has a maximum swing speed, so sweeping across the sea takes real time.
- **Ships** drift from the left toward the reef on the right. Hold the beam on a ship for ~1.1s to fill its lantern. A lit ship sails home safely (+100 × combo).
- **Combo**: fill lanterns within 6 seconds of each other to stack a multiplier up to ×5.
- **Unlit ships** that reach the reef wreck, costing one heart.
- **The kraken** rises after ~20s. Its anger ring fills while your beam is on it — at full ring it strikes and takes a heart. A brief sweep only startles it; resting on it is what kills you.
- 3 hearts, then the sea goes dark. Tap to relight.

## Design notes (the hooks)
- **One verb, two edges**: the same beam that saves ships angers the kraken — every second of light is a small bet, and the risk dial is built into the only control you have.
- **Sub-second restart**: death puts you back on the water in under a second; the only thing between runs is your own best score (localStorage).
- **Readable near-misses**: lantern bars and the kraken's anger ring are always on screen, so losses feel like your sweep was late, never like the game hid the ball.
- **Escalation without new rules**: ships get faster and more frequent, kraken rise more often — depth comes from pressure on the same 3-second-to-learn loop.

## Tech
Single `index.html` — Canvas + vanilla JS, no build, no dependencies, works offline. WebAudio-synthesized sound, touch + mouse.

## Play
https://xiangjianan.github.io/daily-games/lightkeep-20260927//
