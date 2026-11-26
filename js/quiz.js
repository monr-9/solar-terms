/* =========================================================
   二十四节气 · 关于页：节气小测验
   原生 JavaScript，无任何框架依赖
   ========================================================= */
(function () {
  'use strict';

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
})();
