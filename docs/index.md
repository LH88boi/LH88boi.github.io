---
title: 地下头目
---

<style>
/* 首页极简：隐藏顶栏、侧边栏、页脚，占满整屏 */
.md-header, .md-tabs, .md-sidebar, .md-footer, .md-top { display: none !important; }
.md-main, .md-main__inner { height: 100vh !important; margin: 0 !important; }
.md-content, .md-content__inner { height: 100vh !important; }
.md-content__inner { padding: 0 !important; display: flex; align-items: center; justify-content: center; }

.stage{
  --mx: -9999px; --my: -9999px;          /* 鼠标视口坐标 */
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
.slot{ position: relative; display: inline-block; cursor: pointer; --ex: -9999px; --ey: -9999px; }
/* 平时显示：目（撑开尺寸）；鼠标小圆内把目隐去，好让上层的木露出来 */
.eye{
  position: relative; z-index: 1; color: #1a1a1a;
  -webkit-mask-image: radial-gradient(circle 95px at var(--ex, -9999px) var(--ey, -9999px), transparent 99%, #000 100%);
  mask-image: radial-gradient(circle 95px at var(--ex, -9999px) var(--ey, -9999px), transparent 99%, #000 100%);
}
/* 木叠在目之上，仅在鼠标小圆内裁切显示：圆内是木，圆外是目 */
.wood{
  position: absolute; inset: 0; z-index: 2;
  color: #1a1a1a;
  -webkit-clip-path: circle(95px at var(--ex, -9999px) var(--ey, -9999px));
  clip-path: circle(95px at var(--ex, -9999px) var(--ey, -9999px));
}
.sub{ margin-top: 1.2rem; font-size: 1rem; color: #9aa0a6; letter-spacing: .05em; z-index: 2; }
/* 跟随鼠标的圆形反色镜：白色 difference = 反色 */
.lens{
  position: fixed; z-index: 9;
  left: var(--mx); top: var(--my);
  width: 220px; height: 220px;
  margin: -110px 0 0 -110px;
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
  <div class="line">地下头<span class="slot" id="slot"><span class="wood">木</span><span class="eye" id="eye">目</span></span></div>
  <div class="sub">一处安静的角落，记录所见与所想。</div>
  <div class="lens" id="lens"></div>
</div>
