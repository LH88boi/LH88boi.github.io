---
title: 光影
---

<style>
/* 光影页：隐藏站点框架，整屏沉浸 */
.md-header, .md-tabs, .md-sidebar, .md-footer, .md-top { display: none !important; }
html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; }
.md-main, .md-main__inner {
  display: block !important; width: 100% !important; max-width: none !important;
  height: 100vh !important; margin: 0 !important; padding: 0 !important;
}
.md-content, .md-content__inner { width: 100% !important; max-width: none !important; height: 100vh !important; }
.md-content__inner { padding: 0 !important; }

.light-app {
  --paper: #FCFAF8;
  --surface-1: #FFFFFF;
  --surface-2: #F8F2EB;
  --surface-3: #EFE7DE;
  --ink: #1F1B18;
  --ink-2: #5C534B;
  --ink-3: #8A7F75;
  --accent: #E8590C;
  --radius: 20px;
  --radius-sm: 12px;
  --border: rgba(138, 127, 117, .18);
  --shadow-1: 0 2px 10px rgba(80, 64, 48, .08), 0 1px 2px rgba(80, 64, 48, .06);
  --shadow-2: 0 12px 30px rgba(80, 64, 48, .13), 0 4px 10px rgba(80, 64, 48, .08);
  --ease: cubic-bezier(.2, .9, .25, 1.2);
  position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--paper); color: var(--ink);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  isolation: isolate;
}
.light-app .hidden { display: none !important; }
.mono { font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }

/* ---------- 开始页：窗边木桌场景 ---------- */
.intro { position: absolute; inset: 0; z-index: 1; overflow: hidden; background: #dcc3a4; }
.scene-wall {
  position: absolute; inset: 0 0 74% 0;
  background:
    radial-gradient(50% 120% at 18% 0%, rgba(255, 248, 230, .9), transparent 70%),
    linear-gradient(180deg, #f1e7d8, #e6d8c3);
}
.scene-window {
  position: absolute; left: clamp(18px, 5vw, 74px); top: clamp(10px, 2.5vh, 26px);
  width: clamp(240px, 34vw, 470px); height: clamp(150px, 27vh, 260px);
  border: 10px solid #fbf6ed; border-radius: 12px; overflow: hidden;
  box-shadow: 0 12px 28px rgba(90, 70, 48, .16), inset 0 0 0 1px rgba(120, 96, 70, .18);
}
.scene-window::after {
  content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: 8px;
  transform: translateX(-50%); background: #fbf6ed; z-index: 4;
}
.sky {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #bcd8e8 0%, #dcebf0 55%, #f6ead2 100%);
}
.sun {
  position: absolute; right: 18%; top: 16%; width: 74px; height: 74px; border-radius: 50%;
  background: radial-gradient(circle, #fff9e2 0%, #ffedb0 45%, rgba(255, 226, 150, 0) 72%);
  box-shadow: 0 0 60px 26px rgba(255, 234, 175, .55);
}
.hill {
  position: absolute; left: -5%; right: -5%; bottom: -12%; height: 46%;
  background: linear-gradient(180deg, #9db59a, #7d9a80);
  border-radius: 50% 50% 0 0 / 60% 60% 0 0;
}
.beam {
  position: absolute; right: -30%; top: -60%; width: 120%; height: 220%;
  background: linear-gradient(105deg, rgba(255, 248, 214, .55), rgba(255, 248, 214, 0) 62%);
  transform: rotate(18deg); pointer-events: none; z-index: 3;
}
.rain { position: absolute; inset: 0; display: none; z-index: 2; opacity: .55;
  background-image: repeating-linear-gradient(104deg, transparent 0 9px, rgba(255,255,255,.75) 9px 10px, transparent 10px 18px);
  background-size: 120px 120px; animation: rainfall .7s linear infinite;
}
.intro.rainy .sky { background: linear-gradient(180deg, #8899a8, #b6c1c6 60%, #d8d9d3); }
.intro.rainy .sun { opacity: 0; }
.intro.rainy .beam { opacity: .18; }
.intro.rainy .rain { display: block; }
@keyframes rainfall { from { background-position: 0 0; } to { background-position: -60px 120px; } }
.curtain {
  position: absolute; top: -8px; bottom: -8px; width: 34%; z-index: 5;
  background: linear-gradient(90deg, #f6ead6, #e2cdae 60%, #cbb08d);
  box-shadow: 0 6px 16px rgba(90, 70, 48, .18);
  transform-origin: top center; pointer-events: none;
}
.curtain::after {
  content: ""; position: absolute; inset: 0; opacity: .5;
  background: repeating-linear-gradient(90deg, transparent 0 16px, rgba(255,255,255,.35) 16px 22px);
}
.curtain.left { left: -6%; border-radius: 0 0 60% 12%; animation: swayL 5.5s ease-in-out infinite alternate; }
.curtain.right { right: -6%; border-radius: 0 0 12% 60%; animation: swayR 6.4s ease-in-out infinite alternate; }
@keyframes swayL { from { transform: rotate(-1.5deg) skewX(0deg); } to { transform: rotate(3deg) skewX(2deg); } }
@keyframes swayR { from { transform: rotate(1.5deg) skewX(0deg); } to { transform: rotate(-3deg) skewX(-2deg); } }

.scene-desk {
  position: absolute; inset: 26% 0 0 0;
  background:
    radial-gradient(70% 60% at 32% 0%, rgba(255, 246, 222, .42), transparent 72%),
    repeating-linear-gradient(91deg, rgba(112, 76, 44, .06) 0 2px, transparent 2px 26px),
    linear-gradient(178deg, #c9a27b, #b98c62 60%, #a87a52);
  box-shadow: inset 0 16px 34px rgba(80, 54, 30, .2);
}
.scene-desk::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(130% 100% at 50% 45%, transparent 55%, rgba(70, 46, 26, .22) 100%);
}
.weather-toggle {
  position: absolute; left: clamp(18px, 5vw, 74px); top: clamp(10px, 2.5vh, 26px);
  transform: translateY(calc(clamp(150px, 27vh, 260px) + 20px));
  z-index: 16; border: 1px solid rgba(255,255,255,.5); border-radius: 999px;
  background: rgba(255, 250, 240, .82); color: #6d5540; cursor: pointer;
  font-size: 11px; letter-spacing: .1em; padding: 6px 12px; font-family: inherit;
}
.desk-label {
  position: absolute; right: clamp(18px, 4vw, 54px); top: 8%; z-index: 16;
  text-align: right; color: #5a4231;
}
.desk-label h1 {
  margin: 0; font-size: clamp(2rem, 5vw, 3.6rem); font-weight: 600; letter-spacing: .18em;
  font-family: Georgia, "Songti SC", "STSong", serif; text-indent: .18em;
  text-shadow: 0 2px 0 rgba(255,255,255,.4);
}
.desk-label p { margin: 8px 0 0; font-size: 12px; letter-spacing: .14em; color: #745b46; }

.intro-deck { position: absolute; inset: 20% 0 0; z-index: 10; }
.intro-card {
  position: absolute; left: var(--l); top: var(--t);
  transform: rotate(var(--rot)); transition: transform .18s var(--ease), box-shadow .18s ease;
  border: 1px solid rgba(120, 92, 66, .22); border-top-color: rgba(255, 255, 255, .9);
  border-radius: 14px; background: var(--surface-1); box-shadow: 0 8px 18px rgba(70, 48, 28, .22);
  overflow: hidden; cursor: default; z-index: var(--z);
}
.intro-card:hover { transform: rotate(var(--rot)) translateY(-8px) scale(1.02); box-shadow: 0 18px 34px rgba(70, 48, 28, .3); z-index: 40 !important; }
.ic-portrait { width: clamp(82px, 9.6vw, 130px); height: clamp(122px, 14.2vw, 192px); }
.ic-landscape { width: clamp(112px, 13vw, 182px); height: clamp(84px, 9.8vw, 136px); }
.ic-note {
  width: clamp(120px, 14vw, 186px); height: clamp(84px, 9.8vw, 136px);
  background: #f7edcf; padding: 12px 14px; display: flex; flex-direction: column; justify-content: space-between;
}
.ic-note .q { font-size: 11px; line-height: 1.6; color: #6b553f; }
.ic-note .meta { font-size: 9px; color: #9a8268; letter-spacing: .08em; }
.pc-cover { position: absolute; inset: 0; background-size: cover; background-position: center; }
.pc-cover::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(31, 27, 24, .6) 100%);
}
.pc-title {
  position: absolute; left: 10px; right: 10px; bottom: 10px; z-index: 2;
  font-size: clamp(10px, 1.05vw, 13px); font-weight: 600; line-height: 1.35; color: inherit;
}
.pc-title small { display: block; font-size: 8px; opacity: .78; margin-top: 3px; font-weight: 400; letter-spacing: .04em; }
.tape {
  position: absolute; z-index: 39; width: 54px; height: 18px; top: -8px; left: 40%;
  background: rgba(238, 220, 178, .72); border: 1px solid rgba(160, 130, 90, .2);
  transform: rotate(-6deg); box-shadow: 0 2px 4px rgba(70, 48, 28, .12);
}
.cover-a { background: linear-gradient(145deg, #E8D9C5, #C9B49B 60%, #A98E72); }
.cover-b { background: linear-gradient(160deg, #D9E3DC, #A8BDB2 65%, #7E9A8D); }
.cover-c { background: linear-gradient(135deg, #F1D9C9, #E3B79C 60%, #C98F6C); }
.cover-d { background: linear-gradient(150deg, #6E645C, #36302B); color: #F8F2EB; }
.cover-e { background: linear-gradient(160deg, #BFD3D8, #7EA3AE 60%, #4E7785); }
.cover-f { background: linear-gradient(150deg, #D7C7B0, #A98F6F 60%, #6F5942); }
.cover-g { background: linear-gradient(140deg, #C9C2D8, #8E82A8 60%, #5E5478); }
.cover-h { background: linear-gradient(165deg, #E6C9A8, #C79C6E 60%, #8E6A43); }

/* 铅笔入口 */
.pencil {
  position: absolute; right: clamp(18px, 4vw, 52px); bottom: clamp(18px, 5vh, 56px); z-index: 60;
  width: 62px; height: 62px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.7); background: rgba(255, 250, 240, .88);
  box-shadow: 0 8px 20px rgba(60, 40, 24, .28); cursor: pointer; display: grid; place-items: center;
  transition: transform .18s var(--ease), box-shadow .18s ease, background .18s ease;
}
.pencil:hover { transform: translateY(-5px) rotate(-8deg); box-shadow: 0 14px 26px rgba(60, 40, 24, .35); background: #fff; }
.pencil:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.pencil svg { width: 34px; height: 34px; overflow: visible; }
.pencil-label {
  position: absolute; right: 0; bottom: 70px; white-space: nowrap;
  font-size: 11px; letter-spacing: .16em; color: #5a4231;
  opacity: 0; transform: translateY(4px); transition: .18s ease; pointer-events: none;
}
.pencil:hover .pencil-label, .pencil:focus-visible .pencil-label { opacity: 1; transform: none; }

/* ---------- 正式页 ---------- */
.studio { position: absolute; inset: 0; z-index: 2; display: flex; flex-direction: column; }
.studio-head {
  flex: none; display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
  padding: 18px clamp(20px, 4vw, 54px) 12px;
}
.studio-head h2 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: .14em; font-family: Georgia, "Songti SC", serif; }
.tabs { display: flex; gap: 6px; flex-wrap: wrap; }
.tab {
  border: 1px solid transparent; background: transparent; color: var(--ink-2);
  padding: 7px 14px; border-radius: 999px; cursor: pointer; font-size: 13px; letter-spacing: .1em;
  font-family: inherit; transition: .15s ease;
}
.tab:hover { background: var(--surface-2); color: var(--ink); }
.tab[aria-selected="true"] { background: var(--accent); color: #fff; box-shadow: 0 3px 12px rgba(232, 89, 12, .28); }
.tab:focus-visible, .tool:focus-visible, .card:focus-visible, .close:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.tools { margin-left: auto; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.search {
  border: 1px solid var(--border); background: rgba(255, 255, 255, .72); color: var(--ink);
  border-radius: 999px; padding: 8px 14px; font-size: 13px; width: 150px; font-family: inherit;
}
.search:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
.tool {
  border: 1px solid var(--border); background: rgba(255, 255, 255, .72); color: var(--ink-2);
  border-radius: 999px; padding: 8px 14px; font-size: 12px; cursor: pointer; font-family: inherit;
  text-decoration: none; display: inline-flex; align-items: center; transition: .15s ease;
}
.tool:hover { background: #fff; color: var(--ink); box-shadow: var(--shadow-1); }
.tool.primary { background: var(--accent); color: #fff; border-color: var(--accent); }
.tool.primary:hover { background: #d64d06; color: #fff; }

.desk-wrap {
  position: relative; flex: 1; margin: 0 clamp(16px, 3vw, 44px) clamp(16px, 3vw, 36px);
  border-radius: 24px; overflow: auto;
  background:
    radial-gradient(70% 50% at 50% 0%, rgba(255, 255, 255, .8), transparent 72%),
    rgba(248, 242, 235, .35);
  border: 1px solid rgba(138, 127, 117, .12);
}
.desk-wrap.grid-on::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(rgba(138, 127, 117, .10) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(138, 127, 117, .10) 1px, transparent 1px);
  background-size: 48px 48px;
}
.desk { position: relative; width: 100%; min-height: 100%; }
.card {
  position: absolute; left: 0; top: 0; cursor: grab; user-select: none;
  transform: translate(var(--x), var(--y)) rotate(var(--rot, 0deg));
  transition: transform .2s var(--ease), box-shadow .18s ease; z-index: var(--z, 1);
}
.card:active { cursor: grabbing; }
.card.dragging { transition: none; z-index: 30 !important;
  transform: translate(var(--x), var(--y)) rotate(calc(var(--rot, 0deg) + 1.5deg)) scale(1.03);
  box-shadow: var(--shadow-2); }
.card.filtered { display: none !important; }
.card .face { width: 100%; height: 100%; }
.card .pin {
  position: absolute; right: 8px; top: 8px; z-index: 6; width: 26px; height: 26px; border-radius: 50%;
  border: 1px solid var(--border); background: rgba(255, 255, 255, .82); color: var(--ink-3); cursor: pointer;
  display: grid; place-items: center; font-size: 13px; line-height: 1; padding: 0;
  opacity: 0; transition: opacity .15s ease, color .15s ease, background .15s ease;
}
.card:hover .pin, .card:focus-within .pin, .card.pinned .pin { opacity: 1; }
.card.pinned .pin { color: var(--accent); background: #fff; box-shadow: 0 2px 8px rgba(232, 89, 12, .22); }
.card.pinned { --z: 12 !important; }
.card .tag {
  position: absolute; left: 12px; top: 12px; z-index: 4; font-size: 9px; letter-spacing: .14em;
  text-transform: uppercase; padding: 4px 8px; border-radius: 999px; background: rgba(255, 255, 255, .82);
  border: 1px solid var(--border); color: var(--ink-2);
}
.empty {
  position: absolute; left: 50%; top: 46%; transform: translate(-50%, -50%);
  padding: 34px 42px; border-radius: var(--radius); border: 1px dashed var(--border);
  background: rgba(255, 255, 255, .6); color: var(--ink-2); text-align: center; font-size: 14px; line-height: 1.8;
}
.empty a { color: var(--accent); }

/* 详情弹层 */
.modal-back {
  position: fixed; inset: 0; z-index: 50; display: grid; place-items: center;
  background: rgba(31, 27, 24, .28); backdrop-filter: blur(2px); animation: fade .2s ease both;
}
.modal {
  position: relative; width: min(560px, 92vw); max-height: 84vh; overflow: auto;
  border-radius: 24px; border: 1px solid rgba(255, 255, 255, .8); background: var(--surface-1);
  box-shadow: 0 28px 70px rgba(31, 27, 24, .22); padding: 30px 34px 32px; animation: rise .26s var(--ease) both;
}
.modal h3 { margin: 0 0 6px; font-size: 24px; font-weight: 600; }
.modal .subline { color: var(--ink-3); font-size: 12px; letter-spacing: .1em; margin-bottom: 20px; }
.modal p { color: var(--ink-2); font-size: 14px; line-height: 1.9; margin: 0 0 14px; }
.modal .quote { border-left: 3px solid var(--accent); padding-left: 14px; color: var(--ink-2); }
.close {
  position: absolute; right: 16px; top: 16px; width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid var(--border); background: var(--surface-2); color: var(--ink-2); cursor: pointer; font-size: 17px;
}
@keyframes fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes rise { from { opacity: 0; transform: translateY(12px) scale(.98) } to { opacity: 1; transform: none } }

/* toast */
.toast {
  position: fixed; left: 50%; bottom: 28px; z-index: 80; transform: translate(-50%, 12px); opacity: 0; pointer-events: none;
  display: flex; align-items: center; gap: 10px; padding: 11px 18px; border-radius: 999px;
  background: rgba(31, 27, 24, .82); color: #F8F2EB; border: 1px solid rgba(255, 255, 255, .22);
  box-shadow: 0 10px 30px rgba(31, 27, 24, .22); font-size: 13px; letter-spacing: .04em;
  transition: opacity .16s ease, transform .16s var(--ease);
}
.toast.show { opacity: 1; transform: translate(-50%, 0); }
.toast .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 4px rgba(232, 89, 12, .18); }

@media (max-width: 760px) {
  .intro-deck { inset: 24% 0 0; }
  .desk-label h1 { font-size: 2rem; }
  .studio-head { gap: 10px; padding: 14px 16px 10px; }
  .search { width: 120px; }
  .tools { margin-left: 0; width: 100%; }
  .modal { padding: 26px 22px; }
}
@media (prefers-reduced-motion: reduce) {
  .light-app *, .light-app *::before, .light-app *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
</style>

<div class="light-app" id="lightApp">

  <!-- 开始页：窗边木桌，散落满桌的碎片 -->
  <section class="intro" id="intro">
    <div class="scene-wall">
      <div class="scene-window">
        <div class="sky"></div><div class="hill"></div><div class="sun"></div><div class="beam"></div>
        <div class="rain"></div>
        <div class="curtain left"></div><div class="curtain right"></div>
      </div>
    </div>
    <div class="scene-desk"></div>
    <button class="weather-toggle mono" id="weatherBtn" aria-label="切换晴雨">☀ 晴天 · 点我换天气</button>
    <div class="desk-label">
      <h1>光影</h1>
      <p class="mono">阅读 · 电影 · 旅途 · 游戏</p>
    </div>
    <div class="intro-deck" id="introDeck"></div>
    <button class="pencil" id="enterBtn" aria-label="进入光影">
      <span class="pencil-label mono">翻开桌面</span>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M11 37 L9 43 L15 41 L39 17 L31 9 Z" fill="#F8F2EB" stroke="#1F1B18" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M31 9 L36 4 L44 12 L39 17 Z" fill="#E8590C" stroke="#1F1B18" stroke-width="1.4" stroke-linejoin="round"/>
        <path d="M9 43 L15 41" stroke="#1F1B18" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M27 13 L35 21" stroke="#8A7F75" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
    </button>
  </section>

  <!-- 正式页 -->
  <section class="studio hidden" id="studio">
    <header class="studio-head">
      <h2>光影</h2>
      <div class="tabs" role="tablist" aria-label="模块">
        <button class="tab" role="tab" aria-selected="true" data-kind="all">全部</button>
        <button class="tab" role="tab" aria-selected="false" data-kind="book">阅读</button>
        <button class="tab" role="tab" aria-selected="false" data-kind="movie">电影</button>
        <button class="tab" role="tab" aria-selected="false" data-kind="photo">旅途</button>
        <button class="tab" role="tab" aria-selected="false" data-kind="game">游戏</button>
      </div>
      <div class="tools">
        <input class="search" id="search" type="search" placeholder="找点什么…" aria-label="搜索">
        <button class="tool" id="tidyBtn">整理桌面</button>
        <button class="tool" id="resetBtn">恢复默认</button>
        <a class="tool" href="/calendar/">日历</a>
        <a class="tool primary" href="/light-admin/">＋ 上传内容</a>
        <a class="tool" href="/">回主页</a>
        <button class="tool" id="backBtn">收起</button>
      </div>
    </header>
    <div class="desk-wrap" id="deskWrap"><div class="desk" id="desk"></div></div>
  </section>

  <div class="toast" id="toast" role="status" aria-live="polite"><span class="dot"></span><span id="toastText"></span></div>
</div>

<script>
(function () {
  var app = document.getElementById('lightApp');
  if (!app || app.dataset.bound) return;
  app.dataset.bound = '1';

  var FALLBACK = { items: [
    { id:'b1', kind:'book', tag:'阅读', title:'置身事内', sub:'兰小欢 · 72%', date:'2026-11-20', cover:'cover-a', desc:'地方财政与政府行为的入门书。', quote:'理解现实，先要理解账本。', pin:false, x:40, y:36, rot:-2 },
    { id:'m1', kind:'movie', tag:'电影', title:'完美的日子', sub:'2023 · 8.7', date:'2026-11-20', cover:'cover-d', desc:'一个把日常过得很认真的人。', quote:'下一次还会有下一次的相遇。', pin:true, x:618, y:44, rot:2 },
    { id:'p1', kind:'photo', tag:'旅途', title:'海边的风', sub:'青岛 · 2025', date:'2026-11-19', cover:'cover-e', desc:'傍晚的栈桥，风很大。', quote:'那天的海是灰蓝色的。', pin:false, x:96, y:326, rot:1.5 },
    { id:'g1', kind:'game', tag:'游戏', title:'塞尔达传说', sub:'王国之泪 · 60h', date:'2026-11-17', cover:'cover-b', desc:'爬到最高处滑翔的时候。', quote:'去玩吧，海拉鲁很大。', pin:true, x:240, y:570, rot:-1.5 }
  ] };

  var desk = document.getElementById('desk');
  var wrap = document.getElementById('deskWrap');
  var introDeck = document.getElementById('introDeck');
  var toast = document.getElementById('toast');
  var toastText = document.getElementById('toastText');
  var STORE = 'light-desk-v1';
  var DATA = [], byId = {};

  var toastTimer;
  function say(text) {
    toastText.textContent = text; toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
  }); }
  function coverAttr(cover) {
    if (!cover) return 'cover-a';
    if (cover.indexOf('img:') === 0) return '';
    return /^cover-[a-h]$/.test(cover) ? cover : 'cover-a';
  }
  function coverStyle(cover) {
    return cover && cover.indexOf('img:') === 0
      ? 'background-image:url("' + esc(cover.slice(4)) + '")' : '';
  }

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE) || '{}');
      if (s && s.items) Object.keys(s.items).forEach(function (k) {
        if (!byId[k]) return;
        var v = s.items[k];
        if (typeof v.x === 'number') byId[k].x = v.x;
        if (typeof v.y === 'number') byId[k].y = v.y;
        if (typeof v.rot === 'number') byId[k].rot = v.rot;
        if (typeof v.pin === 'boolean') byId[k].pin = v.pin;
      });
    } catch (e) {}
  }
  function save() {
    var items = {};
    DATA.forEach(function (d) { items[d.id] = { x:d.x, y:d.y, rot:d.rot, pin:d.pin }; });
    try { localStorage.setItem(STORE, JSON.stringify({ v:1, items:items })); } catch (e) {}
  }

  function sizeOf(d) {
    if (d.kind === 'photo') return [208, 156];
    return [150, 222];
  }
  function faceHTML(d, cls) {
    var cover = coverAttr(d.cover);
    return '<div class="face paper-card ' + cls + ' ' + cover + '" style="position:relative;left:auto;top:auto;transform:none;' + coverStyle(d.cover) + '">' +
      '<div class="pc-cover" style="' + coverStyle(d.cover) + '"></div>' +
      '<div class="tag mono">' + esc(d.tag || d.kind) + '</div>' +
      '<div class="pc-title">' + esc(d.title) + '<small>' + esc(d.sub || d.date || '') + '</small></div></div>';
  }

  /* 开始页：满桌散落的卡片 */
  var INTRO_POS = [
    [2,4,-7,3],[15,-2,6,4],[29,9,-4,2],[42,2,8,5],[55,12,-6,3],[68,1,4,4],[80,14,-3,2],[91,3,7,5],
    [6,38,5,6],[20,31,-8,7],[34,45,3,8],[48,33,-5,9],[62,47,6,10],[76,35,-4,11],[89,50,5,12],
    [13,64,-3,13],[38,67,7,14],[64,64,-6,15],[84,68,4,16]
  ];
  function renderIntro() {
    var html = '';
    DATA.slice(0, INTRO_POS.length).forEach(function (d, i) {
      var p = INTRO_POS[i];
      var portrait = d.kind !== 'photo';
      var kls = portrait ? 'ic-portrait' : 'ic-landscape';
      var inner;
      if (i === 5 || i === 13) {
        inner = '<div class="ic-note"><div class="q">' + esc(d.quote || d.desc || '') + '</div><div class="meta mono">' +
          esc(d.date || '') + ' · ' + esc(d.title) + '</div></div>';
      } else {
        inner = '<div class="pc-cover ' + coverAttr(d.cover) + '" style="' + coverStyle(d.cover) + '"></div>' +
          '<div class="pc-title">' + esc(d.title) + '<small>' + esc(d.sub || '') + '</small></div>';
      }
      html += '<div class="intro-card ' + kls + '" style="--l:' + p[0] + '%;--t:' + p[1] + '%;--rot:' + p[2] + 'deg;--z:' + p[3] + '">' +
        (i === 3 || i === 11 ? '<div class="tape"></div>' : '') + inner + '</div>';
    });
    introDeck.innerHTML = html;
  }

  function cardHTML(d) {
    var w = sizeOf(d)[0], h = sizeOf(d)[1];
    var cls = d.kind === 'photo' ? 'pc-photo' : (d.kind === 'game' ? 'pc-movie' : (d.kind === 'book' ? 'pc-book' : 'pc-movie'));
    return '<div class="card' + (d.pin ? ' pinned' : '') + '" data-id="' + esc(d.id) + '" data-kind="' + esc(d.kind) + '" tabindex="0" role="button" ' +
      'aria-label="' + esc(d.title) + '，查看详情" style="width:' + w + 'px;height:' + h + 'px;--x:' + d.x + 'px;--y:' + d.y + 'px;--rot:' + d.rot + 'deg">' +
      faceHTML(d, cls) + '<button class="pin" title="钉住 / 取消钉住" aria-label="钉住">' + (d.pin ? '★' : '☆') + '</button></div>';
  }
  function paint() {
    desk.innerHTML = DATA.map(cardHTML).join('');
    applyFilter();
  }
  function position(d) {
    var el = desk.querySelector('[data-id="' + d.id + '"]');
    if (el) { el.style.setProperty('--x', d.x + 'px'); el.style.setProperty('--y', d.y + 'px'); el.style.setProperty('--rot', d.rot + 'deg'); }
  }

  var current = 'all', query = '';
  function applyFilter(scrollToCards) {
    var shown = 0, q = query.trim().toLowerCase();
    var minY = Infinity;
    DATA.forEach(function (d) {
      var el = desk.querySelector('[data-id="' + d.id + '"]');
      if (!el) return;
      var okKind = current === 'all' || d.kind === current;
      var okQuery = !q || (d.title + ' ' + d.sub + ' ' + d.desc).toLowerCase().indexOf(q) >= 0;
      var ok = okKind && okQuery;
      el.classList.toggle('filtered', !ok);
      if (ok) { shown++; if (d.y < minY) minY = d.y; }
    });
    if (scrollToCards && shown && isFinite(minY)) {
      wrap.scrollTo({ top: Math.max(0, minY - 40), behavior: 'smooth' });
    }
    var old = desk.querySelector('.empty');
    if (old) old.remove();
    if (!shown) {
      var e = document.createElement('div');
      e.className = 'empty';
      e.innerHTML = '这里还没有内容。<br>换个筛选，或者 <a href="/light-admin/">上传一条</a> 试试。';
      desk.appendChild(e);
    }
  }

  function openModal(d) {
    var back = document.createElement('div');
    back.className = 'modal-back';
    back.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle">' +
      '<button class="close" aria-label="关闭">×</button><h3 id="mTitle">' + esc(d.title) + '</h3>' +
      '<div class="subline mono">' + esc(d.tag || d.kind) + ' · ' + esc(d.sub || '') + ' · ' + esc(d.date || '') + '</div>' +
      '<p>' + esc(d.desc || '') + '</p><p class="quote">' + esc(d.quote || '') + '</p></div>';
    document.body.appendChild(back);
    var close = back.querySelector('.close');
    close.focus();
    function shut() {
      back.remove();
      var el = desk.querySelector('[data-id="' + d.id + '"]');
      if (el) el.focus();
      document.removeEventListener('keydown', key);
    }
    function key(e) {
      if (e.key === 'Escape') { shut(); return; }
      if (e.key === 'Tab') {
        var f = back.querySelectorAll('button');
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    }
    back.addEventListener('click', function (e) { if (e.target === back || e.target === close) shut(); });
    document.addEventListener('keydown', key);
  }

  /* 拖拽：只改 transform，移动端长按也可触发 */
  var drag = null;
  desk.addEventListener('pointerdown', function (e) {
    var card = e.target.closest('.card');
    if (!card || e.target.closest('.pin')) return;
    var d = byId[card.dataset.id];
    drag = { el:card, d:d, sx:e.clientX, sy:e.clientY, ox:d.x, oy:d.y, moved:false, id:e.pointerId };
    card.setPointerCapture(e.pointerId);
  });
  desk.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (!drag.moved && Math.abs(dx) + Math.abs(dy) < 5) return;
    if (!drag.moved) { drag.moved = true; drag.el.classList.add('dragging'); }
    drag.d.x = Math.max(0, Math.round(drag.ox + dx));
    drag.d.y = Math.max(0, Math.round(drag.oy + dy));
    position(drag.d);
  });
  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    var d = drag.d, el = drag.el, moved = drag.moved;
    el.classList.remove('dragging'); drag = null;
    if (moved) { save(); say('位置已记下'); } else openModal(d);
  }
  desk.addEventListener('pointerup', endDrag);
  desk.addEventListener('pointercancel', endDrag);

  desk.addEventListener('click', function (e) {
    var pin = e.target.closest('.pin');
    if (!pin) return;
    e.stopPropagation();
    var d = byId[pin.closest('.card').dataset.id];
    d.pin = !d.pin;
    pin.closest('.card').classList.toggle('pinned', d.pin);
    pin.textContent = d.pin ? '★' : '☆';
    save(); say(d.pin ? '已钉在桌上' : '已取消钉住');
  });
  desk.addEventListener('keydown', function (e) {
    var card = e.target.closest('.card');
    if (!card) return;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(byId[card.dataset.id]); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      var d = byId[card.dataset.id];
      d.x = Math.max(0, d.x + (e.key === 'ArrowLeft' ? -12 : 12));
      position(d); save();
    }
  });

  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      current = tab.dataset.kind;
      document.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', String(t === tab)); });
      applyFilter(true);
    });
  });
  document.getElementById('search').addEventListener('input', function (e) { query = e.target.value; applyFilter(); });
  document.getElementById('tidyBtn').addEventListener('click', function () {
    var count = { book:0, movie:0, photo:0, game:0 };
    var colW = { book:174, movie:174, photo:232, game:174 };
    var rowH = { book:246, movie:246, photo:180, game:246 };
    DATA.forEach(function (d) {
      var k = d.kind in count ? d.kind : 'book';
      d.x = 40 + count[k] * colW[k];
      d.y = k === 'photo' ? 600 + Math.floor(count[k] / 5) * rowH[k] : 36 + Math.floor(count[k] / 6) * rowH[k];
      d.rot = 0; count[k]++; position(d);
    });
    wrap.classList.add('grid-on'); save(); say('桌面已整理');
    setTimeout(function () { wrap.classList.remove('grid-on'); }, 900);
  });
  document.getElementById('resetBtn').addEventListener('click', function () {
    try { localStorage.removeItem(STORE); } catch (e) {}
    fetch('/assets/data/light.json?ts=' + Date.now()).then(function (r) { return r.json(); }).then(function (j) {
      var fresh = {}; (j.items || FALLBACK.items).forEach(function (x) { fresh[x.id] = x; });
      DATA.forEach(function (d) { if (fresh[d.id]) { d.x = fresh[d.id].x; d.y = fresh[d.id].y; d.rot = fresh[d.id].rot; position(d); } });
      say('已恢复默认布局');
    }).catch(function () { say('恢复失败，请稍后再试'); });
  });
  document.getElementById('enterBtn').addEventListener('click', function () {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('studio').classList.remove('hidden');
    say('欢迎回来，桌面还在原处');
  });
  document.getElementById('backBtn').addEventListener('click', function () {
    document.getElementById('studio').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
  });
  document.getElementById('weatherBtn').addEventListener('click', function () {
    var on = intro.classList.toggle('rainy');
    this.textContent = on ? '☂ 雨天 · 点我换天气' : '☀ 晴天 · 点我换天气';
  });

  function boot(j) {
    DATA = (j && j.items) || FALLBACK.items;
    byId = {}; DATA.forEach(function (d) { byId[d.id] = d; });
    load(); renderIntro(); paint();
    // 从日历跳转：?item=id 直接打开对应详情
    var id = new URLSearchParams(location.search).get('item');
    if (id && byId[id]) {
      document.getElementById('intro').classList.add('hidden');
      document.getElementById('studio').classList.remove('hidden');
      current = 'all'; applyFilter();
      setTimeout(function () { openModal(byId[id]); }, 60);
    }
  }

  fetch('/assets/data/light.json?ts=' + Date.now())
    .then(function (r) { if (!r.ok) throw new Error('bad'); return r.json(); })
    .then(boot)
    .catch(function () { boot(FALLBACK); });
})();
</script>
