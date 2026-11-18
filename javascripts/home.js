/* 首页彩蛋：跟随鼠标的圆形反色镜 + 「目」下藏「木」+ 点木跳 about */
(function () {
  function init() {
    var stage = document.getElementById('stage');
    if (!stage || stage.dataset.bound) return;
    stage.dataset.bound = '1';
    var lens = document.getElementById('lens');
    var eye = document.getElementById('eye');
    var slot = document.getElementById('slot');

    stage.addEventListener('mousemove', function (e) {
      stage.style.setProperty('--mx', e.clientX + 'px');
      stage.style.setProperty('--my', e.clientY + 'px');
      var r = slot.getBoundingClientRect();
      slot.style.setProperty('--ex', (e.clientX - r.left) + 'px');
      slot.style.setProperty('--ey', (e.clientY - r.top) + 'px');
    });
    stage.addEventListener('mouseenter', function () { lens.style.opacity = '1'; });
    stage.addEventListener('mouseleave', function () {
      lens.style.opacity = '0';
      slot.style.setProperty('--ex', '-9999px');
      slot.style.setProperty('--ey', '-9999px');
    });
    slot.addEventListener('click', function () { location.href = '/about/'; });
  }

  // Material 支持无刷新导航：每次页面切换后重新初始化
  if (window.document$) { document$.subscribe(init); }
  if (document.readyState !== 'loading') { init(); }
  else { document.addEventListener('DOMContentLoaded', init); }
})();
