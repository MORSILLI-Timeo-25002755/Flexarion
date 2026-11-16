/**
 * ============================================================================
 * FLEXARION — Filtres de la galerie de jeux (games.html)
 * ============================================================================
 * - Boutons à bascule accessibles (aria-pressed) dans un groupe étiqueté.
 * - Toutes les cartes sont présentes dans le HTML (indexables) ; le filtre ne
 *   fait que les masquer/afficher (attribut hidden).
 * - Annonce du nombre de résultats dans une zone aria-live.
 * - Transitions GSAP (fondu + léger déplacement), coupées en mouvement réduit.
 * - Sans JavaScript, la barre de filtres est masquée et tout est affiché.
 * ============================================================================
 */
(function () {
  'use strict';

  var group = document.querySelector('[data-filter-group]');
  var grid = document.querySelector('[data-filter-grid]');
  if (!group || !grid) return;

  var buttons = Array.prototype.slice.call(group.querySelectorAll('[data-filter]'));
  var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-status]'));
  var live = document.querySelector('[data-filter-live]');
  var empty = document.querySelector('[data-filter-empty]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var busy = false;

  group.hidden = false; // la barre n'est utile qu'avec JS

  var LABELS = {
    all: 'tous statuts confondus',
    dev: 'en développement',
    soon: 'à venir',
    available: 'disponible(s)',
  };

  // Compteurs par statut affichés dans les boutons.
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
    var noun = count > 1 ? 'projets affichés' : 'projet affiché';
    live.textContent = count + ' ' + noun + ' — ' + LABELS[filter] + '.';
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
