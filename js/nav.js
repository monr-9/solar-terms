/* =========================================================
   二十四节气 · 移动端导航
   原生 JavaScript，无任何框架依赖
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 移动端导航 ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '收起导航' : '展开导航');
      toggle.textContent = open ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '展开导航');
        toggle.textContent = '☰';
      });
    });
  }
})();
