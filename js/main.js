/* =========================================================
   二十四节气 · 交互脚本
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

  /* ---------- 关于页：节气小测验 ---------- */
  var quiz = document.getElementById('quiz');

  if (quiz) {
    var questions = quiz.querySelectorAll('.quiz-q');
    var resultEl = document.getElementById('quizResult');
    var correctCount = 0;
    var answeredCount = 0;

    var updateResult = function () {
      if (resultEl) {
        resultEl.innerHTML = '答对 <strong>' + correctCount + '</strong> / ' + questions.length + ' 题';
      }
    };

    questions.forEach(function (q) {
      var options = q.querySelectorAll('.option');

      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (q.dataset.answered === 'true') { return; }
          q.dataset.answered = 'true';
          answeredCount++;

          if (opt.dataset.correct === 'true') {
            opt.classList.add('right');
            correctCount++;
          } else {
            opt.classList.add('wrong');
            options.forEach(function (o) {
              if (o.dataset.correct === 'true') { o.classList.add('right'); }
            });
          }

          var explain = q.querySelector('.explain');
          if (explain) { explain.classList.add('show'); }

          updateResult();

          if (answeredCount === questions.length && resultEl) {
            var tipText;
            if (correctCount === questions.length) {
              tipText = '太厉害了，你就是行走的节气小百科！';
            } else if (correctCount >= 3) {
              tipText = '不错嘛，再去翻翻前面的内容就更稳了。';
            } else {
              tipText = '没关系，好知识值得再看一遍～';
            }
            resultEl.innerHTML += '<br><span class="quiz-tip">' + tipText + '</span>';
          }
        });
      });
    });

    var resetBtn = document.getElementById('quizReset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        questions.forEach(function (q) {
          q.dataset.answered = 'false';
          q.querySelectorAll('.option').forEach(function (o) {
            o.classList.remove('right', 'wrong');
          });
          var explain = q.querySelector('.explain');
          if (explain) { explain.classList.remove('show'); }
        });

        correctCount = 0;
        answeredCount = 0;
        updateResult();
      });
    }

    updateResult();
  }

  /* ---------- 页脚年份 ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
