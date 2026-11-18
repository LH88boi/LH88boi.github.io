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
  --r: 110px;                            /* 只保留一个圆：镜片/镂空/裁切同半径 */
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
.eye{ position: relative; z-index: 1; color: #1a1a1a; }
.wood{ display: none; } /* 不再用裁切叠字，避免圆边出现白边 */
.sub{ margin-top: 1.2rem; font-size: 1rem; color: #9aa0a6; letter-spacing: .05em; z-index: 2; }

/* 普通区域：跟随鼠标的圆形反色镜 */
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

/* 移到「目」附近：换成不透明的黑圆+白木，彻底盖掉边缘反色白线 */
.badge{
  position: fixed; z-index: 10;
  left: var(--mx); top: var(--my);
  width: calc(var(--r) * 2); height: calc(var(--r) * 2);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #000;
  color: #e6e6e6;
  display: flex; align-items: center; justify-content: center;
  font-size: clamp(4rem, 13vw, 9rem);
  font-weight: 800; line-height: 1.15; letter-spacing: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity .15s;
}
.stage.badge-on .lens{ opacity: 0 !important; }
.stage.badge-on .badge{ opacity: 1; }
.stage.badge-on .eye{ opacity: 0; }
@media (hover: none){ .lens, .badge{ display: none; } }
</style>

<div class="stage" id="stage">
  <div class="line">地下头<span class="slot" id="slot"><span class="wood">木</span><span class="eye" id="eye">目</span></span></div>
  <div class="sub">一处安静的角落，记录所见与所想。</div>
  <div class="lens" id="lens"></div>
  <div class="badge" id="badge">木</div>
</div>
