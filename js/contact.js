/**
 * ============================================================================
 * FLEXARION — Formulaire de contact (contact.html)
 * ============================================================================
 * - Validation front-end accessible : messages d'erreur reliés aux champs
 *   (aria-describedby), aria-invalid, récapitulatif focalisé, focus sur le
 *   premier champ en erreur.
 * - Envoi RÉEL uniquement si un service est configuré (config.js → form.endpoint).
 * - Sans service configuré : AUCUNE simulation. L'utilisateur est informé que
 *   le message n'a pas été envoyé et peut l'ouvrir dans son logiciel de
 *   messagerie (lien mailto pré-rempli).
 * - Anti-spam : champ piège (honeypot) invisible.
 * ============================================================================
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var CONFIG = window.FLEXARION_CONFIG || {};
  var endpoint = (CONFIG.form && CONFIG.form.endpoint) || '';
  var email = (CONFIG.contact && CONFIG.contact.email) || '';
  var status = form.querySelector('[data-form-status]');
  var submitBtn = form.querySelector('[type="submit"]');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // La validation est prise en charge par ce script (messages en français).
  form.setAttribute('novalidate', '');

  var rules = {
    name: function (v) {
      if (!v) return 'Veuillez indiquer votre nom.';
      if (v.length < 2) return 'Votre nom doit comporter au moins 2 caractères.';
      return '';
    },
    email: function (v) {
      if (!v) return 'Veuillez indiquer votre adresse e-mail.';
      if (!EMAIL_RE.test(v)) return 'Le format de l’adresse e-mail est invalide (exemple : nom@domaine.fr).';
      return '';
    },
    subject: function (v) {
      if (!v) return 'Veuillez choisir le sujet de votre message.';
      return '';
    },
    message: function (v) {
      if (!v) return 'Veuillez écrire votre message.';
      if (v.length < 20) return 'Votre message doit comporter au moins 20 caractères (actuellement ' + v.length + ').';
      if (v.length > 5000) return 'Votre message ne doit pas dépasser 5 000 caractères.';
      return '';
    },
  };

  function fieldError(field, message) {
    var errorEl = document.getElementById(field.id + '-error');
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (errorEl) errorEl.textContent = message;
  }

  function validateField(field) {
    var rule = rules[field.name];
    if (!rule) return '';
    var msg = rule(field.value.trim());
    fieldError(field, msg);
    return msg;
  }

  // Validation à la sortie du champ, puis en direct une fois l'erreur affichée.
  Object.keys(rules).forEach(function (name) {
    var field = form.elements[name];
    if (!field) return;
    field.addEventListener('blur', function () { if (field.value.trim() !== '') validateField(field); });
    field.addEventListener('input', function () {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });

  function showStatus(type, html) {
    status.className = 'form-status form-status--' + type;
    status.innerHTML = html;
    status.hidden = false;
    status.focus();
  }

  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function mailtoHref(data) {
    var subject = '[Site Flexarion] ' + data.subject;
    var body = data.message + '\n\n— ' + data.name + ' (' + data.email + ')';
    return 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Honeypot rempli = robot : on ignore silencieusement.
    var trap = form.elements['website'];
    if (trap && trap.value) return;

    var errors = [];
    Object.keys(rules).forEach(function (name) {
      var field = form.elements[name];
      if (!field) return;
      var msg = validateField(field);
      if (msg) errors.push({ field: field, msg: msg });
    });

    if (errors.length) {
      var list = errors.map(function (er) {
        return '<li><a href="#' + er.field.id + '">' + escapeHTML(er.msg) + '</a></li>';
      }).join('');
      showStatus('error', '<p><strong>Le formulaire contient ' + errors.length + ' erreur' + (errors.length > 1 ? 's' : '') + ' :</strong></p><ul>' + list + '</ul>');
      errors[0].field.focus();
      return;
    }

    var data = {
      name: form.elements['name'].value.trim(),
      email: form.elements['email'].value.trim(),
      subject: form.elements['subject'].options[form.elements['subject'].selectedIndex].text,
      message: form.elements['message'].value.trim(),
    };

    // --- Aucun service d'envoi configuré : pas de simulation -------------
    if (!endpoint) {
      showStatus('info',
        '<p><strong>Votre message n’a pas été envoyé.</strong> L’envoi en ligne n’est pas encore activé sur ce site.</p>' +
        '<p class="mt-2">Vous pouvez le transmettre directement depuis votre messagerie : ' +
        '<a href="' + mailtoHref(data) + '">ouvrir mon logiciel de messagerie avec ce message pré-rempli</a>' +
        (email ? ' ou écrire à <a href="mailto:' + escapeHTML(email) + '">' + escapeHTML(email) + '</a>.' : '.') + '</p>'
      );
      return;
    }

    // --- Envoi réel vers le service configuré ----------------------------
    submitBtn.disabled = true;
    submitBtn.setAttribute('aria-busy', 'true');
    var label = submitBtn.querySelector('[data-label]');
    var initialLabel = label ? label.textContent : '';
    if (label) label.textContent = 'Envoi en cours…';

    fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        Object.keys(rules).forEach(function (n) { if (form.elements[n]) form.elements[n].removeAttribute('aria-invalid'); });
        showStatus('success', '<p><strong>Merci, votre message a bien été envoyé.</strong> L’équipe Flexarion vous répondra dès que possible.</p>');
      })
      .catch(function () {
        showStatus('error',
          '<p><strong>L’envoi a échoué.</strong> Votre message n’a pas pu être transmis. Réessayez dans quelques instants ou ' +
          '<a href="' + mailtoHref(data) + '">envoyez-le depuis votre messagerie</a>.</p>'
        );
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-busy');
        if (label) label.textContent = initialLabel;
      });
  });
})();
