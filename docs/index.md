---
title: 地下头目
---

<style>
/* 首页极简：隐藏顶栏、侧边栏、页脚，占满整屏并真正居中 */
.md-header, .md-tabs, .md-sidebar, .md-footer, .md-top { display: none !important; }
html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; }
.md-main, .md-main__inner {
  display: block !important;
  width: 100% !important;
  max-width: none !important;
  height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
}
.md-content, .md-content__inner {
  width: 100% !important;
  max-width: none !important;
  height: 100vh !important;
}
.md-content__inner {
  padding: 0 !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.stage{
  --mx: -9999px; --my: -9999px;          /* 鼠标视口坐标 */
  --r: 110px;                            /* 反色镜半径 */
  --mask-r: 118px;                       /* 目字镂空半径略大，避开反色镜边缘白线 */
  position: relative;
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  background: #fff;
  isolation: isolate;
  overflow: hidden;
}
.line{
  position: relative; z-index: 2;
  font-size: clamp(4rem, 13vw, 9rem);
  font-weight: 800; letter-spacing: .08em;
  line-height: 1.15; white-space: nowrap;
  color: #1a1a1a;
  user-select: none;
}
.slot{ position: relative; display: inline-block; cursor: pointer; }
/* 目字在稍大的圆内隐去，避免笔画正好落在反色镜边缘产生白线 */
.eye{ position: relative; z-index: 1; color: #1a1a1a; }
/* 只有靠近「目」时才镂空整行文字，避开反色镜边缘白线；其它地方保留原样反色 */
.stage.near-slot .line{
  -webkit-mask-image: radial-gradient(circle var(--mask-r) at var(--lx, -9999px) var(--ly, -9999px), transparent 99%, #000 100%);
  mask-image: radial-gradient(circle var(--mask-r) at var(--lx, -9999px) var(--ly, -9999px), transparent 99%, #000 100%);
}
.stage.near-slot .eye{
  -webkit-mask-image: radial-gradient(circle var(--mask-r) at var(--ex, -9999px) var(--ey, -9999px), transparent 99%, #000 100%);
  mask-image: radial-gradient(circle var(--mask-r) at var(--ex, -9999px) var(--ey, -9999px), transparent 99%, #000 100%);
}
/* 木放在被镂空的整行文字之外，只在反色镜圆内裁切显示 */
.wood{
  position: absolute; z-index: 3;
  left: var(--wx, -9999px); top: var(--wy, -9999px);
  width: var(--ww, 0); height: var(--wh, 0);
  font-size: clamp(4rem, 13vw, 9rem);
  font-weight: 800; line-height: 1.15; letter-spacing: .08em;
  white-space: nowrap; color: #1a1a1a; pointer-events: none;
  -webkit-clip-path: circle(var(--r) at var(--ex, -9999px) var(--ey, -9999px));
  clip-path: circle(var(--r) at var(--ex, -9999px) var(--ey, -9999px));
}
.sub{ margin-top: 1.2rem; font-size: 1rem; color: #9aa0a6; letter-spacing: .05em; z-index: 2; }

/* 唯一的圆形反色镜：跟随鼠标，白底变黑、字反白 */
.lens{
  position: fixed; z-index: 9;
  left: var(--mx); top: var(--my);
  width: calc(var(--r) * 2); height: calc(var(--r) * 2);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  opacity: 0;
  transition: opacity .15s;
}
@media (hover: none){ .lens{ display: none; } }
</style>

<div class="stage" id="stage">
  <div class="line">地下头<span class="slot" id="slot"><span class="eye" id="eye">目</span></span></div>
  <span class="wood" id="wood">木</span>
  <div class="sub">一处安静的角落，记录所见与所想。</div>
  <div class="lens" id="lens"></div>
</div>
