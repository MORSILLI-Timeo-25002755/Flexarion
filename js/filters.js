/**
 * ============================================================================
 * FLEXARION — Filtres de la galerie de jeux (games.html & en/games.html)
 * ============================================================================
 */
(function () {
  'use strict';

  var group = document.querySelector('[data-filter-group]');
  var grid = document.querySelector('[data-filter-grid]');
  if (!group || !grid) return;

  var isEn = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  var buttons = Array.prototype.slice.call(group.querySelectorAll('[data-filter]'));
  var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-status]'));
  var live = document.querySelector('[data-filter-live]');
  var empty = document.querySelector('[data-filter-empty]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var busy = false;

  group.hidden = false;

  var LABELS = isEn
    ? { all: 'all statuses', dev: 'in development', soon: 'coming soon', available: 'available' }
    : { all: 'tous statuts confondus', dev: 'en développement', soon: 'à venir', available: 'disponible(s)' };

  buttons.forEach(function (btn) {
    var f = btn.getAttribute('data-filter');
    var n = f === 'all' ? cards.length : cards.filter(function (c) { return c.getAttribute('data-status') === f; }).length;
    var counter = btn.querySelector('.filter-btn__count');
    if (counter) counter.textContent = String(n).padStart(2, '0');
  });

  function matches(card, filter) {
    return filter === 'all' || card.getAttribute('data-status') === filter;
  }

  function announce(filter, count) {
    if (!live) return;
    if (isEn) {
      var nounEn = count === 1 ? 'project shown' : 'projects shown';
      live.textContent = count + ' ' + nounEn + ' — ' + LABELS[filter] + '.';
    } else {
      var nounFr = count > 1 ? 'projets affichés' : 'projet affiché';
      live.textContent = count + ' ' + nounFr + ' — ' + LABELS[filter] + '.';
    }
  }

  function apply(filter) {
    if (busy) return;
    var toShow = cards.filter(function (c) { return matches(c, filter); });
    var toHide = cards.filter(function (c) { return !matches(c, filter) && !c.hidden; });
    var gsap = window.gsap;
    var animate = gsap && !reduceMotion.matches;

    var finish = function () {
      cards.forEach(function (c) { c.hidden = !matches(c, filter); });
      if (empty) empty.hidden = toShow.length !== 0;
      announce(filter, toShow.length);
      if (animate && toShow.length) {
        gsap.fromTo(toShow, { opacity: 0, y: 30, scale: 0.98 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: 'expo.out',
          onComplete: function () { busy = false; if (window.ScrollTrigger) window.ScrollTrigger.refresh(); },
        });
      } else {
        busy = false;
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      }
      if (animate && empty && !empty.hidden) gsap.fromTo(empty, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
    };

    busy = true;
    if (animate && toHide.length) {
      gsap.to(toHide, { opacity: 0, y: -20, scale: 0.98, duration: 0.3, stagger: 0.04, ease: 'power2.in', onComplete: finish });
    } else {
      finish();
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.getAttribute('aria-pressed') === 'true' || busy) return;
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      apply(btn.getAttribute('data-filter'));
    });
  });
})();
