/* =========================================================
   二十四节气 · 页脚年份
   原生 JavaScript，无任何框架依赖
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 页脚年份 ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
