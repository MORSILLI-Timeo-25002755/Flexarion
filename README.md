# Flexarion — Site officiel

Site web multipage statique et bilingue (FR / EN) de **Flexarion**, studio indépendant de développement et création de jeux vidéo basé à **Aix-en-Provence** (Provence-Alpes-Côte d’Azur, France).

URL canonique : `https://flexarion.timeoms.fr/`

---

## Stack technique

- **HTML5 sémantique** généré statiquement depuis `src/pages/` + partials partagés (`scripts/partials.mjs`)
- **Tailwind CSS v3 compilé et purgé** (`css/tailwind.min.css`, sans runtime CDN)
- **CSS3 modulaire** (`css/style.css`, `css/responsive.css`)
- **JavaScript Vanilla** modulaire (`js/config.js`, `js/main.js`, `js/animations.js`, `js/filters.js`, `js/faq.js`, `js/contact.js`, `js/press.js`)
- **GSAP 3.12.5 + ScrollTrigger** via CDN (avec intégrité SRI et respect de `prefers-reduced-motion`)
- **Bilingue FR / EN** (`*.html` + `games/*.html` et `en/*.html` + `en/games/*.html`, balises `hreflang` automatiques)
- **Jeux présentés** : *Les Veilleurs de Brume*, *Neon Calanques*, *Lisière*
- **Devlog & Flux RSS** (`devlog.html`, `en/devlog.html`, `feed.xml`)
- **Press Kit** (`press.html`, `en/press.html`, archive `assets/flexarion-presskit.zip`)

---

## Build & Vérification

Les sources modifiables des pages se trouvent dans `src/pages/` et les composants communs (en-tête, menu mobile, pied de page) dans `scripts/partials.mjs`.

```bash
# Recompiler Tailwind CSS + toutes les pages HTML + sitemap.xml + feed.xml + presskit.zip
npm run build

# Vérifier uniquement les sorties HTML (liens locaux, balises img, domaines)
npm run check
```

Les fichiers générés à la racine, dans `games/` et dans `en/` sont commités afin que **GitHub Pages** déploie directement le dépôt sans étape de build obligatoire côté serveur.

---

## Checklist restante

1. **Formulaire de contact** : renseigner `form.endpoint` dans `js/config.js` (Formspree, Web3Forms, Basin, fonction serverless…) pour activer l’envoi direct. Tant que `endpoint` est vide, un bandeau informe le visiteur et prépare un e-mail vers `contact@flexarion.timeoms.fr`.
2. **Réseaux sociaux** : renseigner les URLs officielles dans `js/config.js` et dans le tableau `"sameAs"` du JSON-LD (`src/pages/fr/index.html`, `src/pages/fr/studio.html`).
3. **Mentions légales** : compléter le statut juridique et le numéro d’immatriculation dans `src/pages/fr/legal.html` et `src/pages/en/legal.html` dès l’immatriculation du studio (l’hébergeur GitHub Pages est déjà renseigné).
