'use strict';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Theme — runs before paint to avoid flash ───────────── */
(function initTheme() {
  var saved = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;

  /* Theme toggle */
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    function updateThemeIcon() {
      var isDark = html.getAttribute('data-theme') === 'dark';
      themeBtn.textContent = isDark ? '○' : '●';
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    updateThemeIcon();
    themeBtn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      updateThemeIcon();
    });
  }

  /* ── Scroll nav shadow ──────────────────────────────── */
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.style.borderBottomColor = window.scrollY > 4
        ? 'var(--border-hi)'
        : 'var(--border)';
    }, { passive: true });
  }

  /* ── Gallery filter ─────────────────────────────────── */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.gallery-card');

  if (filterBtns.length && cards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter;

        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        cards.forEach(function (card) {
          var tags = (card.dataset.tags || '').split(' ');
          var show = filter === 'all' || tags.indexOf(filter) !== -1;
          card.classList.toggle('card-hidden', !show);
        });
      });
    });
  }

  /* ── Card tilt on hover ─────────────────────────────── */
  cards.forEach(function (card) {
    var rafId = null;

    card.addEventListener('mousemove', function (e) {
      if (rafId) return;
      rafId = requestAnimationFrame(function () {
        rafId = null;
        var rect = card.getBoundingClientRect();
        var dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        var dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        card.style.transform = 'perspective(600px) rotateX(' + (-dy * 3) + 'deg) rotateY(' + (dx * 3) + 'deg)';
      });
    });

    card.addEventListener('mouseleave', function () {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      card.style.transform = '';
    });
  });
});
