/**
 * ============================================================================
 * FLEXARION — FAQ : accordéons accessibles
 * ============================================================================
 * Base HTML : éléments natifs <details>/<summary>.
 *  → Fonctionne sans JavaScript, au clavier, avec les lecteurs d'écran, et
 *    les réponses sont présentes dans le HTML initial (indexables).
 *  → La recherche du navigateur (Ctrl+F) ouvre automatiquement les réponses.
 * Ce script ajoute uniquement une animation de hauteur fluide avec GSAP
 * (désactivée si prefers-reduced-motion: reduce) et l'ouverture via ancre.
 * ============================================================================
 */
(function () {
  'use strict';

  var items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var canAnimate = function () { return !!window.gsap && !reduceMotion.matches; };

  items.forEach(function (item) {
    var summary = item.querySelector('summary');
    var panel = item.querySelector('.faq-item__a');
    if (!summary || !panel) return;
    var animating = false;

    summary.addEventListener('click', function (e) {
      if (!canAnimate()) return; // comportement natif
      e.preventDefault();
      if (animating) return;
      animating = true;
      var gsap = window.gsap;

      if (item.open) {
        // Fermeture : on anime puis on retire l'attribut open.
        gsap.fromTo(panel, { height: panel.offsetHeight }, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'expo.inOut',
          onComplete: function () {
            item.open = false;
            gsap.set(panel, { clearProps: 'height,opacity' });
            animating = false;
          },
        });
      } else {
        // Ouverture : on pose open puis on anime de 0 à la hauteur réelle.
        item.open = true;
        var target = panel.scrollHeight;
        gsap.fromTo(panel, { height: 0, opacity: 0 }, {
          height: target,
          opacity: 1,
          duration: 0.65,
          ease: 'expo.out',
          onComplete: function () {
            gsap.set(panel, { clearProps: 'height,opacity' });
            animating = false;
          },
        });
        var inner = panel.firstElementChild;
        if (inner) gsap.fromTo(inner, { y: 16 }, { y: 0, duration: 0.8, ease: 'expo.out' });
      }
    });
  });

  // Ouverture directe via une ancre (ex. faq.html#faq-localisation).
  function openFromHash() {
    if (!location.hash) return;
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target && target.classList.contains('faq-item')) {
      target.open = true;
      var summary = target.querySelector('summary');
      if (summary) summary.focus({ preventScroll: true });
    }
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();
