/* 首页彩蛋：跟随鼠标的圆形反色镜 + 「目」下藏「木」+ 点木跳 about */
(function () {
  function init() {
    var stage = document.getElementById('stage');
    if (!stage || stage.dataset.bound) return;
    stage.dataset.bound = '1';
    var lens = document.getElementById('lens');
    var slot = document.getElementById('slot');

    // mx/my：反色镜；ex/ey + wx/wy/ww/wh：圆内木字
    stage.addEventListener('mousemove', function (e) {
      var sr = slot.getBoundingClientRect();
      var st = stage.getBoundingClientRect();

      stage.style.setProperty('--mx', e.clientX + 'px');
      stage.style.setProperty('--my', e.clientY + 'px');
      stage.style.setProperty('--wx', (sr.left - st.left) + 'px');
      stage.style.setProperty('--wy', (sr.top - st.top) + 'px');
      stage.style.setProperty('--ww', sr.width + 'px');
      stage.style.setProperty('--wh', sr.height + 'px');
      stage.style.setProperty('--ex', (e.clientX - sr.left) + 'px');
      stage.style.setProperty('--ey', (e.clientY - sr.top) + 'px');
      var pad = 60;
      var near = e.clientX >= sr.left - pad && e.clientX <= sr.right + pad &&
                 e.clientY >= sr.top - pad && e.clientY <= sr.bottom + pad;
      stage.classList.toggle('near-slot', near);
    });
    stage.addEventListener('mouseenter', function () { lens.style.opacity = '1'; });
    stage.addEventListener('mouseleave', function () {
      lens.style.opacity = '0';
      stage.classList.remove('near-slot');
      stage.style.setProperty('--ex', '-9999px');
      stage.style.setProperty('--ey', '-9999px');
    });
    slot.addEventListener('click', function () { location.href = '/about/'; });
  }

  // Material 支持无刷新导航：每次页面切换后重新初始化
  if (window.document$) { document$.subscribe(init); }
  if (document.readyState !== 'loading') { init(); }
  else { document.addEventListener('DOMContentLoaded', init); }
})();
