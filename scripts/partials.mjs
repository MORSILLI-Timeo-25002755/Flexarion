/**
 * Shared HTML partials for Flexarion static build (FR & EN).
 */

const SITE_URL = 'https://flexarion.timeoms.fr';
const EMAIL_PUBLIC = 'contact@flexarion.timeoms.fr';

const BRAND_SVG = `<svg class="brand__mark" viewBox="0 0 64 64" width="32" height="32" aria-hidden="true">
          <path fill="#F4F2ED" d="M14 12h38l-6 9H14z"/>
          <path fill="#F4F2ED" d="M14 28h26l-6 9H14z"/>
          <path fill="#F4F2ED" d="M14 12h9v40h-9z"/>
          <path fill="#FF5A1F" d="M42 43h9v9h-9z"/>
        </svg>`;

const ARROW_SVG = `<svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;

const SOCIAL_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 3v11.5a4.5 4.5 0 1 1-3.5-4.38"/><path d="M14 6.5c1.5 2 3.5 3 6 3"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7.5 7.5a12 12 0 0 1 9 0l1.5 8a10 10 0 0 1-4.5 1.5l-1-1.5m-1 0-1 1.5A10 10 0 0 1 6 15.5l1.5-8Z"/><circle cx="9.5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20"/></svg>`,
};

const LABELS = {
  fr: {
    skip: 'Aller au contenu principal',
    homeAria: "Flexarion — Retour à l'accueil",
    mainNavAria: 'Navigation principale',
    mobileNavAria: 'Navigation mobile',
    menuOpen: 'Ouvrir le menu',
    cta: 'Parler d’un projet',
    studioTagline: 'Studio indépendant · Aix-en-Provence',
    footerDesc: 'Studio indépendant de développement et création de jeux vidéo basé à Aix-en-Provence, Provence-Alpes-Côte d’Azur, France.',
    soon: 'Bientôt',
    soonAria: 'bientôt disponible',
    socialAria: 'Réseaux sociaux de Flexarion',
    navTitle: 'Navigation',
    infoTitle: 'Informations',
    locTitle: 'Localisation &amp; Contact',
    pressKit: 'Press Kit',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    sitemap: 'Plan du site (XML)',
    rss: 'Flux RSS (Devlog)',
    copyright: 'Flexarion — Studio indépendant de jeux vidéo à Aix-en-Provence. Tous droits réservés.',
    top: 'Haut de page',
    langSwitchAria: 'Choix de la langue',
    nav: [
      { id: 'home', path: 'index.html', label: 'Accueil' },
      { id: 'studio', path: 'studio.html', label: 'Le studio' },
      { id: 'games', path: 'games.html', label: 'Nos jeux' },
      { id: 'devlog', path: 'devlog.html', label: 'Devlog' },
      { id: 'faq', path: 'faq.html', label: 'FAQ' },
      { id: 'contact', path: 'contact.html', label: 'Contact' },
    ],
    mobileExtra: [
      { id: 'credits', path: 'credits.html', label: 'Crédits' },
      { id: 'press', path: 'press.html', label: 'Press Kit' },
    ],
  },
  en: {
    skip: 'Skip to main content',
    homeAria: 'Flexarion — Back to home',
    mainNavAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    menuOpen: 'Open menu',
    cta: 'Start a conversation',
    studioTagline: 'Independent studio · Aix-en-Provence',
    footerDesc: 'Independent game development studio based in Aix-en-Provence, Provence-Alpes-Côte d’Azur, France.',
    soon: 'Soon',
    soonAria: 'coming soon',
    socialAria: 'Flexarion social channels',
    navTitle: 'Navigation',
    infoTitle: 'Information',
    locTitle: 'Location &amp; Contact',
    pressKit: 'Press Kit',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
    sitemap: 'XML Sitemap',
    rss: 'RSS Feed (Devlog)',
    copyright: 'Flexarion — Independent game studio in Aix-en-Provence. All rights reserved.',
    top: 'Back to top',
    langSwitchAria: 'Language selector',
    nav: [
      { id: 'home', path: 'index.html', label: 'Home' },
      { id: 'studio', path: 'studio.html', label: 'Studio' },
      { id: 'games', path: 'games.html', label: 'Games' },
      { id: 'devlog', path: 'devlog.html', label: 'Devlog' },
      { id: 'faq', path: 'faq.html', label: 'FAQ' },
      { id: 'contact', path: 'contact.html', label: 'Contact' },
    ],
    mobileExtra: [
      { id: 'credits', path: 'credits.html', label: 'Credits' },
      { id: 'press', path: 'press.html', label: 'Press Kit' },
    ],
  },
};

function hrefFor(meta, relToRoot) {
  if (meta.prefix === '/') return '/' + relToRoot;
  if (meta.lang === 'en') {
    if (relToRoot.startsWith('en/')) {
      return (meta.inSubdir ? '../' : '') + relToRoot.slice(3);
    }
    return (meta.inSubdir ? '../../' : '../') + relToRoot;
  }
  return (meta.prefix || '') + relToRoot;
}

function navHref(meta, itemPath) {
  if (meta.prefix === '/') return '/' + itemPath;
  if (meta.lang === 'en') return (meta.inSubdir ? '../' : '') + itemPath;
  return (meta.prefix || '') + itemPath;
}

export function renderSocialList(lang, withIcons = true) {
  const t = LABELS[lang];
  const nets = [
    ['instagram', 'Instagram'],
    ['tiktok', 'TikTok'],
    ['youtube', 'YouTube'],
    ['discord', 'Discord'],
    ['x', 'X'],
  ];
  return nets
    .map(([key, name]) => {
      const icon = withIcons ? `${SOCIAL_ICONS[key]}\n              <span class="sr-only">${name}</span>` : `${name} `;
      return `<a class="social-link" data-social="${key}" aria-label="${name} — ${t.soonAria}">${icon}<span class="social-link__soon">${t.soon}</span></a>`;
    })
    .join('\n            ');
}

export function renderLangSwitch(meta) {
  const isFr = meta.lang === 'fr';
  const frUrl = meta.frPath ? hrefFor(meta, meta.frPath) : hrefFor(meta, 'index.html');
  const enUrl = meta.enPath ? hrefFor(meta, meta.enPath) : hrefFor(meta, 'en/index.html');
  const targetUrl = isFr ? enUrl : frUrl;
  const targetLang = isFr ? 'en' : 'fr';
  const label = isFr ? 'Passer le site en anglais (English)' : 'Switch site to French (Français)';
  const arrowPath = isFr
    ? 'M3 8h10M9.5 4.5 13 8l-3.5 3.5'
    : 'M13 8H3M6.5 4.5 3 8l3.5 3.5';

  return `<a href="${targetUrl}" class="lang-switch ${isFr ? 'lang-switch--to-en' : 'lang-switch--to-fr'}" hreflang="${targetLang}" aria-label="${label}" title="${label}">
          <span class="${isFr ? 'lang-switch__current' : 'lang-switch__target'}" aria-hidden="true">FR</span>
          <svg class="lang-switch__arrow" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="${arrowPath}"/></svg>
          <span class="${isFr ? 'lang-switch__target' : 'lang-switch__current'}" aria-hidden="true">EN</span>
        </a>`;
}

export function renderHeader(meta) {
  const t = LABELS[meta.lang];
  const homeUrl = navHref(meta, 'index.html');
  const contactUrl = navHref(meta, 'contact.html');
  const navItems = t.nav
    .map((item) => {
      const current = meta.nav === item.id ? ' aria-current="page"' : '';
      return `          <li><a href="${navHref(meta, item.path)}" class="nav-link"${current}>${item.label}</a></li>`;
    })
    .join('\n');

  return `<a href="#main-content" class="skip-link">${t.skip}</a>

  <!-- Rideau de transition entre pages -->
  <div class="page-curtain" aria-hidden="true">
    <span class="page-curtain__label">FLEXARION</span>
  </div>

  <!-- En-tête & Navigation principale -->
  <header class="site-header" data-header>
    <div class="container-flx header-inner">
      <a href="${homeUrl}" class="brand" aria-label="${t.homeAria}">
        ${BRAND_SVG}
        <span>FLEXARION</span>
      </a>

      <nav class="main-nav" aria-label="${t.mainNavAria}">
        <ul class="main-nav__list">
${navItems}
        </ul>
      </nav>

      <div class="flex items-center gap-3">
        ${renderLangSwitch(meta)}
        <a href="${contactUrl}" class="btn btn--small header-cta" data-magnetic>
          <span>${t.cta}</span>
          ${ARROW_SVG}
        </a>
        <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="${t.menuOpen}">
          <span class="menu-toggle__bar" aria-hidden="true"></span>
          <span class="menu-toggle__bar" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </header>`;
}

export function renderMobileMenu(meta) {
  const t = LABELS[meta.lang];
  const items = [...t.nav.slice(0, 5), ...t.mobileExtra, t.nav[5]];
  const list = items
    .map((item, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      const current = meta.nav === item.id ? ' aria-current="page"' : '';
      return `        <li><a href="${navHref(meta, item.path)}" class="mobile-menu__link" data-menu-item${current}><span class="mono">${num}</span><span>${item.label}</span></a></li>`;
    })
    .join('\n');

  return `<!-- Menu mobile plein écran -->
  <div id="mobile-menu" class="mobile-menu" hidden>
    <div class="mobile-menu__bg" aria-hidden="true"></div>
    <nav aria-label="${t.mobileNavAria}">
      <ul class="mobile-menu__list">
${list}
      </ul>
    </nav>
    <div class="mobile-menu__footer">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="mono text-muted">${t.studioTagline}</p>
          <a href="mailto:${EMAIL_PUBLIC}" class="contact-email mt-2" data-email-link data-email-text>${EMAIL_PUBLIC}</a>
        </div>
        ${renderLangSwitch(meta)}
      </div>
      <div class="social-list">
        ${renderSocialList(meta.lang, false)}
      </div>
    </div>
  </div>`;
}

export function renderFooter(meta) {
  const t = LABELS[meta.lang];
  const homeUrl = navHref(meta, 'index.html');
  const allNav = [...t.nav.slice(0, 5), { id: 'credits', path: 'credits.html', label: meta.lang === 'en' ? 'Credits' : 'Crédits' }, t.nav[5]];
  const navLinks = allNav
    .map((item) => {
      const current = meta.nav === item.id ? ' aria-current="page"' : '';
      return `            <li><a href="${navHref(meta, item.path)}"${current}>${item.label}</a></li>`;
    })
    .join('\n');

  const pressCurrent = meta.nav === 'press' ? ' aria-current="page"' : '';
  const legalCurrent = meta.nav === 'legal' ? ' aria-current="page"' : '';
  const privacyCurrent = meta.nav === 'privacy' ? ' aria-current="page"' : '';

  if (meta.minimalFooter) {
    return `<footer class="site-footer">
    <div class="container-flx">
      <div class="footer-bottom">
        <p>© <span data-year>2026</span> ${t.copyright}</p>
        <a href="${meta.prefix === '/' ? '/index.html' : '#top'}" class="back-to-top">${meta.prefix === '/' ? 'Retour à l’accueil →' : `${t.top} ↑`}</a>
      </div>
    </div>
  </footer>`;
  }

  return `<footer class="site-footer">
    <div class="container-flx">
      <div class="footer-grid">
        <div>
          <a href="${homeUrl}" class="brand" aria-label="Flexarion">
            ${BRAND_SVG}
            <span>FLEXARION</span>
          </a>
          <p class="mt-4 text-muted max-w-xs">
            ${t.footerDesc}
          </p>
          <div class="social-list mt-6" aria-label="${t.socialAria}">
            ${renderSocialList(meta.lang, true)}
          </div>
        </div>

        <div>
          <h2 class="footer-title">${t.navTitle}</h2>
          <ul class="footer-links">
${navLinks}
          </ul>
        </div>

        <div>
          <h2 class="footer-title">${t.infoTitle}</h2>
          <ul class="footer-links">
            <li><a href="${navHref(meta, 'press.html')}"${pressCurrent}>${t.pressKit}</a></li>
            <li><a href="${navHref(meta, 'legal.html')}"${legalCurrent}>${t.legal}</a></li>
            <li><a href="${navHref(meta, 'privacy.html')}"${privacyCurrent}>${t.privacy}</a></li>
            <li><a href="${hrefFor(meta, 'feed.xml')}">${t.rss}</a></li>
            <li><a href="${hrefFor(meta, 'sitemap.xml')}">${t.sitemap}</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer-title">${t.locTitle}</h2>
          <address class="footer-address">
            <p>Aix-en-Provence</p>
            <p>Provence-Alpes-Côte d’Azur, France</p>
            <p class="mt-3">
              <a href="mailto:${EMAIL_PUBLIC}" class="underline decoration-ember underline-offset-4 hover:text-ember" data-email-link data-email-text>${EMAIL_PUBLIC}</a>
            </p>
          </address>
        </div>
      </div>

      <span class="footer-wordmark" aria-hidden="true">FLEXARION</span>

      <div class="footer-bottom">
        <p>© <span data-year>2026</span> ${t.copyright}</p>
        <a href="#top" class="back-to-top">
          <span>${t.top}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </a>
      </div>
    </div>
  </footer>`;
}

export function renderHeadCommon(meta) {
  const p = meta.prefix === '/' ? '/' : (meta.prefix !== undefined ? meta.prefix : (meta.lang === 'en' ? '../' : ''));
  const canonicalUrl = meta.canonical ? `${SITE_URL}/${meta.canonical === 'index.html' ? '' : meta.canonical}` : '';
  const frHref = meta.frPath ? `${SITE_URL}/${meta.frPath === 'index.html' ? '' : meta.frPath}` : '';
  const enHref = meta.enPath ? `${SITE_URL}/${meta.enPath}` : '';

  const hreflangTags = frHref && enHref
    ? `\n  <link rel="alternate" hreflang="fr" href="${frHref}">\n  <link rel="alternate" hreflang="en" href="${enHref}">\n  <link rel="alternate" hreflang="x-default" href="${frHref}">`
    : '';

  const canonicalTag = canonicalUrl ? `\n  <link rel="canonical" href="${canonicalUrl}">` : '';
  const ogUrlTag = canonicalUrl ? `\n  <meta property="og:url" content="${canonicalUrl}">` : '';

  const socialMeta = meta.noindex
    ? ''
    : `${ogUrlTag}
  <meta property="og:site_name" content="Flexarion">
  <meta property="og:title" content="${meta.ogTitle || meta.title}">
  <meta property="og:description" content="${meta.ogDescription || meta.description}">
  <meta property="og:type" content="${meta.ogType || 'website'}">
  <meta property="og:image" content="${SITE_URL}/assets/images/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${meta.ogImageAlt || 'Flexarion — Studio de jeux vidéo indépendant à Aix-en-Provence, France.'}">
  <meta property="og:locale" content="${meta.lang === 'en' ? 'en_US' : 'fr_FR'}">

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${meta.ogTitle || meta.title}">
  <meta name="twitter:description" content="${meta.twitterDescription || meta.description}">
  <meta name="twitter:image" content="${SITE_URL}/assets/images/og-image.jpg">
  <meta name="twitter:image:alt" content="${meta.ogImageAlt || 'Flexarion — Independent game studio in Aix-en-Provence.'}">`;

  const preloadHero = meta.preloadHero
    ? `\n  <!-- Préchargement du visuel LCP (hero) -->\n  <link rel="preload" as="image" href="${p}assets/images/hero.webp" imagesrcset="${p}assets/images/hero-960.webp 960w, ${p}assets/images/hero.webp 1920w" imagesizes="100vw" fetchpriority="high">`
    : '';

  const extraScripts = (meta.scripts || [])
    .map((s) => `\n  <script src="${p}${s}" defer></script>`)
    .join('');

  const jsonLd = meta.jsonLd
    ? `\n  <!-- Données structurées Schema.org (JSON-LD) -->\n  <script type="application/ld+json">\n${meta.jsonLd}\n  </script>`
    : '';

  return `<!DOCTYPE html>
<html lang="${meta.lang}" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    (function(){var r=document.documentElement;r.classList.remove('no-js');r.classList.add('js');try{if(sessionStorage.getItem('flx-pt')){sessionStorage.removeItem('flx-pt');r.classList.add('pt-enter');}}catch(e){}window.__flxFailsafe=setTimeout(function(){r.classList.add('anim-fallback');},2500);})();
  </script>

  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}">
  <meta name="robots" content="${meta.noindex ? 'noindex, nofollow' : 'index, follow'}">
  <meta name="theme-color" content="#090909">${canonicalTag}${hreflangTags}
${socialMeta}

  <!-- Icônes & Manifest -->
  <link rel="icon" href="${p}favicon.ico" sizes="32x32">
  <link rel="icon" href="${p}assets/icons/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${p}assets/icons/apple-touch-icon.png">
  <link rel="manifest" href="${p}site.webmanifest">
  <link rel="alternate" type="application/rss+xml" title="Flexarion Devlog (RSS)" href="${SITE_URL}/feed.xml">

  <!-- Polices Google Fonts (font-display: swap) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap">${preloadHero}

  <!-- Styles compilés (sans runtime Tailwind CDN) -->
  <link rel="stylesheet" href="${p}css/tailwind.min.css">
  <link rel="stylesheet" href="${p}css/style.css">
  <link rel="stylesheet" href="${p}css/responsive.css">${jsonLd}

  <!-- Scripts différés (GSAP + ScrollTrigger via CDN + modules Flexarion) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
  <script src="${p}js/config.js" defer></script>
  <script src="${p}js/main.js" defer></script>
  <script src="${p}js/animations.js" defer></script>${extraScripts}
</head>`;
}
