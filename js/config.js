/**
 * ============================================================================
 * FLEXARION — Configuration centrale du site
 * ============================================================================
 * Toutes les informations modifiables du studio sont regroupées ici.
 *
 * ⚠️ IMPORTANT POUR LE SEO
 * Ce fichier alimente l'interface (liens sociaux, e-mail, rôles…) au moment de
 * l'affichage. Les moteurs de recherche lisent en priorité le HTML statique :
 * lorsqu'une information devient officielle, mettez-la AUSSI à jour dans les
 * pages HTML (texte, JSON-LD « sameAs », etc.). La procédure complète
 * (rechercher / remplacer) est décrite dans README.md.
 *
 * Convention : une chaîne vide "" = information pas encore connue.
 * L'interface affiche alors un état « bientôt disponible » au lieu d'un faux lien.
 * ============================================================================
 */
window.FLEXARION_CONFIG = Object.freeze({
  /* Domaine officiel (sans barre oblique finale). À remplacer partout :
     rechercher « https://www.flexarion.example » dans le projet. */
  siteUrl: 'https://www.flexarion.example',

  studio: {
    name: 'Flexarion',
    activity: 'Studio indépendant de développement et de création de jeux vidéo',
    city: 'Aix-en-Provence',
    department: 'Bouches-du-Rhône',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    countryCode: 'FR',
  },

  contact: {
    /* Adresse e-mail publique du studio — PLACEHOLDER à remplacer. */
    email: 'contact@flexarion.example',
  },

  /* Formulaire de contact.
     Le site est statique : sans service d'envoi, AUCUN message n'est transmis.
     Renseignez ici l'URL d'un service de formulaire (ex. Formspree, Basin,
     Getform, une fonction serverless, un script PHP…) qui accepte un POST
     multipart/form-data et répond en JSON (code HTTP 2xx en cas de succès).
     Laisser vide = l'envoi en ligne est désactivé et l'utilisateur est invité
     à écrire directement par e-mail (aucune simulation d'envoi). */
  form: {
    endpoint: '',
  },

  /* Réseaux sociaux officiels — renseigner l'URL complète quand le compte existe.
     Penser à ajouter la même URL dans le tableau JSON-LD "sameAs" des pages. */
  social: {
    instagram: { label: 'Instagram', url: '' },
    tiktok: { label: 'TikTok', url: '' },
    youtube: { label: 'YouTube', url: '' },
    discord: { label: 'Discord', url: '' },
    x: { label: 'X (anciennement Twitter)', url: '' },
  },

  /* Équipe — les rôles et biographies vides restent affichés comme
     placeholders dans le HTML. Renseignez-les ici ET dans credits.html. */
  team: {
    timeo: { name: 'Timéo Morsilli', role: '', bio: '' },
    hugo: { name: 'Hugo Banti', role: '', bio: '' },
    enrique: { name: 'Enrique Ruiz', role: '', bio: '' },
  },

  /* Jeux — aucun projet officiel annoncé pour l'instant.
     Les cartes de games.html sont des EMPLACEMENTS RÉSERVÉS clairement signalés.
     status : "dev" (en développement) | "soon" (à venir) | "available" (disponible)
     detailUrl : chemin de la fiche détaillée (ex. "games/nom-du-jeu.html"),
                 à créer à partir de games/modele-fiche-jeu.html. */
  games: [
    { id: 'projet-01', name: '', status: 'dev', genre: '', platforms: [], detailUrl: '' },
    { id: 'projet-02', name: '', status: 'soon', genre: '', platforms: [], detailUrl: '' },
    { id: 'projet-03', name: '', status: 'soon', genre: '', platforms: [], detailUrl: '' },
  ],
});
