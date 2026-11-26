/* =========================================================
   二十四节气 · 滚动入场动画
   原生 JavaScript，无任何框架依赖
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 滚动入场动画 ---------- */
  /* 只给「初始在视口外」的元素设置隐藏，视口内的内容直接显示，
     这样即使脚本或观察器没来得及执行，也不会出现空白。 */
  var revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealItems.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.classList.add('reveal-armed');
        io.observe(el);
      }
    });
  }
})();
