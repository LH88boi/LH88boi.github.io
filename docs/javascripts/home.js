/* 首页彩蛋：跟随鼠标的圆形反色镜 + 「目」下藏「木」+ 点木跳 about */
(function () {
  function init() {
    var stage = document.getElementById('stage');
    if (!stage || stage.dataset.bound) return;
    stage.dataset.bound = '1';
    var lens = document.getElementById('lens');
    var slot = document.getElementById('slot');
    var badgeOn = false;

    function setBadge(on) {
      if (badgeOn === on) return;
      badgeOn = on;
      stage.classList.toggle('badge-on', on);
      lens.style.opacity = on ? '0' : '1';
    }

    stage.addEventListener('mousemove', function (e) {
      stage.style.setProperty('--mx', e.clientX + 'px');
      stage.style.setProperty('--my', e.clientY + 'px');
      var r = slot.getBoundingClientRect();
      var pad = 28;
      var near = e.clientX >= r.left - pad && e.clientX <= r.right + pad &&
                 e.clientY >= r.top - pad && e.clientY <= r.bottom + pad;
      setBadge(near);
    });
    stage.addEventListener('mouseenter', function () {
      if (!badgeOn) lens.style.opacity = '1';
    });
    stage.addEventListener('mouseleave', function () {
      setBadge(false);
      lens.style.opacity = '0';
    });
    slot.addEventListener('click', function () { location.href = '/about/'; });
  }

  // Material 支持无刷新导航：每次页面切换后重新初始化
  if (window.document$) { document$.subscribe(init); }
  if (document.readyState !== 'loading') { init(); }
  else { document.addEventListener('DOMContentLoaded', init); }
})();
