/* =========================================================
   二十四节气 · 节气总览：四季筛选
   原生 JavaScript，无任何框架依赖
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 节气总览：四季筛选 ---------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var seasonBlocks = document.querySelectorAll('.season-block');

  if (filterBtns.length && seasonBlocks.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');

        filterBtns.forEach(function (b) {
          var isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        seasonBlocks.forEach(function (block) {
          var show = filter === 'all' || block.getAttribute('data-season') === filter;
          block.hidden = !show;
        });
      });
    });
  }
})();
