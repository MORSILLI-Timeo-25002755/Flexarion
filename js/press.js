/**
 * ============================================================================
 * FLEXARION — Press Kit : copie rapide (couleurs, fiches studio)
 * ============================================================================
 */
(function () {
  'use strict';

  var buttons = document.querySelectorAll('[data-copy], [data-copy-target]');
  if (!buttons.length) return;

  var isEn = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  var live = document.querySelector('[data-copy-live]');

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        ta.remove();
      }
    });
  }

  buttons.forEach(function (btn) {
    var defaultLabel = btn.textContent.trim();
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (!text) {
        var target = document.getElementById(btn.getAttribute('data-copy-target'));
        text = target ? target.textContent.trim() : '';
      }
      if (!text) return;

      copyText(text).then(function () {
        btn.classList.add('is-copied');
        btn.textContent = isEn ? 'Copied' : 'Copié';
        if (live) live.textContent = (isEn ? 'Copied to clipboard: ' : 'Copié dans le presse-papiers : ') + text.slice(0, 60);
        setTimeout(function () {
          btn.classList.remove('is-copied');
          btn.textContent = defaultLabel;
        }, 1800);
      }).catch(function () {
        if (live) live.textContent = isEn ? 'Unable to copy automatically.' : 'Copie automatique impossible.';
      });
    });
  });
})();
