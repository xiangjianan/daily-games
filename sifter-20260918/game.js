/* SIFTER — tap the red, hold the blue. Issue #10 daily game. */
'use strict';

const W = 480, H = 800;
const KILL_Y = 716;            // bottom line where shards die / orbs escape
const TAP_MS = 160;            // release before this = tap (shatter red)
const TAP_R = 88;              // tap shatter radius
const BEAM_R = 138;            // tractor beam radius while holding
const EAT_R = 30;              // absorb distance to the beam point
const PULL = 430;              // beam pull speed px/s
const COMBO_MAX = 8;

const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');

/* ---------- canvas scaling (fit window, keep 480x800 aspect, DPR aware) ---------- */
let view = { x: 0, y: 0, s: 1 };
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const ww = window.innerWidth, wh = window.innerHeight;
  const s = Math.min(ww / W, wh / H);
  cv.width = Math.round(W * s * dpr);
  cv.height = Math.round(H * s * dpr);
  cv.style.width = Math.round(W * s) + 'px';
  cv.style.height = Math.round(H * s) + 'px';
  view.s = s * dpr;
  ctx.setTransform(view.s, 0, 0, view.s, 0, 0);
}
window.addEventListener('resize', resize);
resize();

/* ---------- game state ---------- */
const G = {
  mode: 'menu',            // menu | play | over
  t: 0,                    // seconds since run start
  score: 0,
  best: +(localStorage.getItem('sifter_best') || 0),
  combo: 1,
  obj: [],                 // falling objects
  parts: [],               // particles
  pops: [],                // floating score texts
  shake: 0,                // screen shake px
  flash: 0,                // white/red flash alpha
  spawnT: 0,
  // input
  touching: false,
  touchX: 0, touchY: 0,
  downAt: 0,               // performance.now of press
  held: false,             // became a hold (long press)
  deadBy: '',
};

function reset() {
  G.t = 0; G.score = 0; G.combo = 1; G.obj = []; G.parts = []; G.pops = [];
  G.shake = 0; G.flash = 0; G.spawnT = 0.4;
  G.touching = false; G.held = false; G.deadBy = '';
}

/* ---------- difficulty ---------- */
function fallSpeed() { return Math.min(215, 85 + 4.2 * G.t); }
function spawnGap() { return Math.max(0.58, 1.15 - 0.014 * G.t); }

function spawn() {
  const r = Math.random();
  const kind = r < 0.52 ? 'red' : (r < 0.95 ? 'blue' : 'gold');
  G.obj.push({
    kind,
    x: 34 + Math.random() * (W - 68),
    y: -36,
    vx: (Math.random() * 2 - 1) * 26,
    rot: Math.random() * Math.PI,
    vr: (Math.random() * 2 - 1) * 2.2,
    r: kind === 'red' ? 17 : 15,
    being: false,           // caught by beam
  });
}

/* ---------- loop ---------- */
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;
  if (G.mode === 'play') update(dt);
  draw(dt);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function update(dt) {
  G.t += dt;
  if (G.touching && !G.held && performance.now() - G.downAt >= TAP_MS) G.held = true;
  // spawn
  G.spawnT -= dt;
  if (G.spawnT <= 0) { spawn(); G.spawnT = spawnGap(); }
  updateObjects(dt);
  updateFx(dt);
}

function updateObjects(dt) {
  const v = fallSpeed();
  for (let i = G.obj.length - 1; i >= 0; i--) {
    const o = G.obj[i];
    o.rot += o.vr * dt;
    // tractor beam pulls blues toward touch point
    if (G.touching && G.held && (o.kind === 'blue' || o.kind === 'gold')) {
      const dx = G.touchX - o.x, dy = G.touchY - o.y;
      const d = Math.hypot(dx, dy);
      o.being = d < BEAM_R;
      if (o.being) {
        const s = (PULL / Math.max(40, d)) * dt * 60;
        o.x += dx * Math.min(1, s);
        o.y += dy * Math.min(1, s);
        if (d < EAT_R) { eatOrb(o, i); continue; }
      }
    } else { o.being = false; }
    o.x += o.vx * dt;
    o.y += v * dt;
    if (o.x < o.r || o.x > W - o.r) o.vx *= -1;
    if (o.y >= KILL_Y) {
      if (o.kind === 'red') { die('SHATTERED THE CORE'); return; }
      // blue/gold escaped: break combo, no death
      G.obj.splice(i, 1);
      breakCombo();
      continue;
    }
  }
}

function eatOrb(o, i) {
  G.obj.splice(i, 1);
  const base = o.kind === 'gold' ? 45 : 15;
  addScore(base, o.x, o.y, o.kind === 'gold' ? '#ffd76a' : '#5ac8ff');
  G.combo = Math.min(COMBO_MAX, G.combo + 1);
  sfx(o.kind === 'gold' ? 'gold' : 'eat');
  burst(o.x, o.y, o.kind === 'gold' ? 22 : 12, o.kind === 'gold' ? '#ffd76a' : '#5ac8ff', -1);
}

function doTap(x, y) {
  let hit = -1;
  for (let i = 0; i < G.obj.length; i++) {
    const o = G.obj[i];
    if (o.kind !== 'red') continue;
    if (Math.hypot(o.x - x, o.y - y) < TAP_R + o.r) { hit = i; break; }
  }
  if (hit >= 0) {
    const o = G.obj[hit];
    G.obj.splice(hit, 1);
    addScore(10, o.x, o.y, '#ff5d6c');
    G.combo = Math.min(COMBO_MAX, G.combo + 1);
    burst(o.x, o.y, 16, '#ff5d6c', 1);
    sfx('pop');
  } else {
    ring(x, y);           // whiff feedback, no penalty
    sfx('whiff');
  }
}

function breakCombo() {
  if (G.combo > 1) { G.pops.push({ x: W / 2, y: KILL_Y - 60, txt: 'COMBO LOST', c: '#8892b0', t: 0, vy: -40 }); }
  G.combo = 1;
  G.flash = Math.max(G.flash, 0.25);
  sfx('thud');
}

function addScore(base, x, y, c) {
  const pts = base * G.combo;
  G.score += pts;
  G.pops.push({ x, y, txt: '+' + pts, c, t: 0, vy: -70 });
}

function die(why) {
  G.mode = 'over';
  G.overAt = performance.now();
  G.deadBy = why;
  G.touching = false; G.held = false;
  G.shake = 14;
  G.flash = 0.8;
  sfx('die');
  if (G.score > G.best) { G.best = G.score; localStorage.setItem('sifter_best', G.best); }
}

/* ---------- fx ---------- */
function burst(x, y, n, c, dir) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 60 + Math.random() * 220;
    G.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp + dir * 60,
      life: 0.5 + Math.random() * 0.3, t: 0, c, s: 2 + Math.random() * 3 });
  }
}
function ring(x, y) { G.parts.push({ x, y, vx: 0, vy: 0, life: 0.22, t: 0, c: '#8892b0', s: 0, ring: true }); }

function updateFx(dt) {
  G.shake = Math.max(0, G.shake - 60 * dt);
  G.flash = Math.max(0, G.flash - 2.2 * dt);
  for (let i = G.parts.length - 1; i >= 0; i--) {
    const p = G.parts[i];
    p.t += dt;
    if (p.t >= p.life) { G.parts.splice(i, 1); continue; }
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.vy += 300 * dt;
  }
  for (let i = G.pops.length - 1; i >= 0; i--) {
    const q = G.pops[i];
    q.t += dt; q.y += q.vy * dt;
    if (q.t > 0.8) G.pops.splice(i, 1);
  }
}

/* ---------- draw ---------- */
function draw() {
  ctx.save();
  if (G.shake > 0) {
    ctx.translate((Math.random() * 2 - 1) * G.shake, (Math.random() * 2 - 1) * G.shake);
  }
  ctx.fillStyle = '#0b0e1a';
  ctx.fillRect(-20, -20, W + 40, H + 40);

  if (G.mode === 'menu') { drawMenu(); ctx.restore(); return; }

  // bottom kill line
  ctx.strokeStyle = 'rgba(255,93,108,0.5)';
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 8]);
  ctx.beginPath(); ctx.moveTo(0, KILL_Y); ctx.lineTo(W, KILL_Y); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(255,93,108,0.06)';
  ctx.fillRect(0, KILL_Y, W, H - KILL_Y);

  // tractor beam
  if (G.mode === 'play' && G.touching && G.held) {
    const g = ctx.createRadialGradient(G.touchX, G.touchY, 6, G.touchX, G.touchY, BEAM_R);
    g.addColorStop(0, 'rgba(90,200,255,0.28)');
    g.addColorStop(1, 'rgba(90,200,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(G.touchX, G.touchY, BEAM_R, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(90,200,255,0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(G.touchX, G.touchY, BEAM_R, 0, Math.PI * 2); ctx.stroke();
  }

  // objects
  for (const o of G.obj) drawObj(o);

  // particles
  for (const p of G.parts) {
    const a = 1 - p.t / p.life;
    ctx.globalAlpha = a;
    if (p.ring) {
      ctx.strokeStyle = p.c; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(p.x, p.y, 10 + 40 * (p.t / p.life), 0, Math.PI * 2); ctx.stroke();
    } else {
      ctx.fillStyle = p.c;
      ctx.fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
    }
  }
  ctx.globalAlpha = 1;

  // floating texts
  ctx.textAlign = 'center';
  for (const q of G.pops) {
    ctx.globalAlpha = 1 - q.t / 0.8;
    ctx.font = 'bold 20px system-ui,sans-serif';
    ctx.fillStyle = q.c;
    ctx.fillText(q.txt, q.x, q.y);
  }
  ctx.globalAlpha = 1;

  drawHud();
  if (G.mode === 'over') drawOver();

  if (G.flash > 0) {
    ctx.fillStyle = 'rgba(255,255,255,' + Math.min(0.55, G.flash * 0.55) + ')';
    ctx.fillRect(0, 0, W, H);
  }
  ctx.restore();
}

function drawObj(o) {
  ctx.save();
  ctx.translate(o.x, o.y);
  ctx.rotate(o.rot);
  if (o.kind === 'red') {
    ctx.fillStyle = '#ff5d6c';
    ctx.beginPath();
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2;
      ctx.lineTo(Math.cos(a) * o.r * 1.25, Math.sin(a) * o.r * 1.25);
      ctx.lineTo(Math.cos(a + 0.4) * o.r * 0.5, Math.sin(a + 0.4) * o.r * 0.5);
    }
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillRect(-3, -3, 6, 6);
  } else {
    const gold = o.kind === 'gold';
    ctx.shadowColor = gold ? '#ffd76a' : '#5ac8ff';
    ctx.shadowBlur = o.being ? 26 : 12;
    ctx.fillStyle = gold ? '#ffd76a' : '#5ac8ff';
    ctx.beginPath(); ctx.arc(0, 0, o.r, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(11,14,26,0.9)';
    ctx.beginPath(); ctx.arc(0, 0, o.r * 0.45, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}

function drawHud() {
  ctx.textAlign = 'left';
  ctx.font = 'bold 30px system-ui,sans-serif';
  ctx.fillStyle = '#e6edf3';
  ctx.fillText(String(G.score), 20, 44);
  ctx.font = '14px system-ui,sans-serif';
  ctx.fillStyle = '#8892b0';
  ctx.fillText('BEST ' + G.best, 20, 66);
  // combo meter
  if (G.combo > 1 || G.mode === 'play') {
    ctx.textAlign = 'right';
    ctx.font = 'bold ' + (18 + G.combo * 2) + 'px system-ui,sans-serif';
    ctx.fillStyle = G.combo >= COMBO_MAX ? '#ffd76a' : '#5ac8ff';
    ctx.fillText('×' + G.combo, W - 20, 44);
    const frac = (G.combo - 1) / (COMBO_MAX - 1);
    ctx.fillStyle = 'rgba(90,200,255,0.35)';
    ctx.fillRect(W - 20 - 90 * frac, 52, 90 * frac, 4);
  }
  // hint while first seconds
  if (G.mode === 'play' && G.t < 5) {
    ctx.textAlign = 'center';
    ctx.font = '16px system-ui,sans-serif';
    ctx.fillStyle = 'rgba(230,237,243,' + Math.max(0, 1 - G.t / 5) + ')';
    ctx.fillText('TAP red shards · HOLD to tractor blue orbs', W / 2, H / 2 - 40);
  }
}

function drawMenu() {
  drawObj({ kind: 'red', x: 150, y: 300, r: 17, rot: 0.5, being: false });
  drawObj({ kind: 'blue', x: 330, y: 300, r: 15, rot: 0, being: false });
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ff5d6c';
  ctx.font = 'bold 22px system-ui,sans-serif';
  ctx.fillText('TAP', 150, 350);
  ctx.fillStyle = '#5ac8ff';
  ctx.fillText('HOLD', 330, 350);
  ctx.fillStyle = '#e6edf3';
  ctx.font = 'bold 58px system-ui,sans-serif';
  ctx.fillText('SIFTER', W / 2, 170);
  ctx.font = '17px system-ui,sans-serif';
  ctx.fillStyle = '#8892b0';
  ctx.fillText('shatter the red, tractor the blue', W / 2, 205);
  ctx.fillText('red reaching the line = game over', W / 2, 232);
  const pulse = 0.55 + 0.45 * Math.sin(performance.now() / 300);
  ctx.fillStyle = 'rgba(230,237,243,' + pulse.toFixed(2) + ')';
  ctx.font = 'bold 22px system-ui,sans-serif';
  ctx.fillText('TAP TO START', W / 2, 520);
  ctx.font = '15px system-ui,sans-serif';
  ctx.fillStyle = '#8892b0';
  ctx.fillText('BEST ' + G.best, W / 2, 556);
}

function drawOver() {
  ctx.fillStyle = 'rgba(11,14,26,0.72)';
  ctx.fillRect(0, 0, W, H);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ff5d6c';
  ctx.font = 'bold 40px system-ui,sans-serif';
  ctx.fillText('CORE LOST', W / 2, 300);
  ctx.fillStyle = '#8892b0';
  ctx.font = '15px system-ui,sans-serif';
  ctx.fillText(G.deadBy, W / 2, 330);
  ctx.fillStyle = '#e6edf3';
  ctx.font = 'bold 56px system-ui,sans-serif';
  ctx.fillText(String(G.score), W / 2, 410);
  ctx.fillStyle = G.score >= G.best && G.score > 0 ? '#ffd76a' : '#8892b0';
  ctx.font = 'bold 20px system-ui,sans-serif';
  ctx.fillText(G.score >= G.best && G.score > 0 ? 'NEW BEST!' : 'BEST ' + G.best, W / 2, 444);
  const pulse = 0.55 + 0.45 * Math.sin(performance.now() / 250);
  ctx.fillStyle = 'rgba(230,237,243,' + pulse.toFixed(2) + ')';
  ctx.font = 'bold 22px system-ui,sans-serif';
  ctx.fillText('TAP TO RETRY', W / 2, 540);
}

/* ---------- audio (WebAudio, all synthesized) ---------- */
let AC = null;
function ac() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; } }
  if (AC && AC.state === 'suspended') AC.resume();
  return AC;
}
function tone(type, f0, f1, dur, vol, delay) {
  const a = ac(); if (!a) return;
  const t0 = a.currentTime + (delay || 0);
  const o = a.createOscillator(), g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f0, t0);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(a.destination);
  o.start(t0); o.stop(t0 + dur + 0.02);
}
function noiseBurst(dur, vol) {
  const a = ac(); if (!a) return;
  const n = Math.floor(a.sampleRate * dur);
  const buf = a.createBuffer(1, n, a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const src = a.createBufferSource(); src.buffer = buf;
  const g = a.createGain(); g.gain.value = vol;
  const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900;
  src.connect(f).connect(g).connect(a.destination);
  src.start();
}
function sfx(kind) {
  switch (kind) {
    case 'pop': tone('square', 320, 90, 0.09, 0.16); break;
    case 'eat': tone('sine', 340, 760, 0.13, 0.18); tone('sine', 510, 1140, 0.13, 0.07, 0.02); break;
    case 'gold': tone('sine', 523, 523, 0.09, 0.14); tone('sine', 659, 659, 0.09, 0.14, 0.07); tone('sine', 1046, 1046, 0.14, 0.14, 0.14); break;
    case 'whiff': tone('triangle', 200, 150, 0.05, 0.05); break;
    case 'thud': tone('sine', 130, 60, 0.18, 0.2); break;
    case 'die': noiseBurst(0.4, 0.3); tone('sawtooth', 220, 40, 0.5, 0.22); break;
  }
}

/* ---------- input ---------- */
function toGame(e) {
  const r = cv.getBoundingClientRect();
  const p = e.touches ? e.touches[0] : e;
  return { x: (p.clientX - r.left) / (r.width / W), y: (p.clientY - r.top) / (r.height / H) };
}
function press(e) { e.preventDefault(); const p = toGame(e);
  if (G.mode === 'menu') { startRun(); return; }
  if (G.mode === 'over') {
    if (performance.now() - (G.overAt || 0) > 350) startRun();
    return;
  }
  G.touching = true; G.touchX = p.x; G.touchY = p.y;
  G.downAt = performance.now(); G.held = false;
}
function release(e) { e.preventDefault();
  if (G.mode !== 'play' || !G.touching) { G.touching = false; G.held = false; return; }
  const heldMs = performance.now() - G.downAt;
  if (!G.held && heldMs < TAP_MS) doTap(G.touchX, G.touchY);
  G.touching = false; G.held = false;
}
function move(e) {
  if (!G.touching) return;
  const p = toGame(e);
  G.touchX = p.x; G.touchY = p.y;
}
cv.addEventListener('mousedown', press);
cv.addEventListener('mousemove', move);
cv.addEventListener('mouseup', release);
cv.addEventListener('mouseleave', release);
cv.addEventListener('touchstart', press, { passive: false });
cv.addEventListener('touchmove', move, { passive: false });
cv.addEventListener('touchend', release, { passive: false });
cv.addEventListener('touchcancel', release, { passive: false });

function startRun() { reset(); G.mode = 'play'; }
window.SIFTER = G;   // debug handle

