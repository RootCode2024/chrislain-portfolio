import { createI18n } from 'vue-i18n';

// Messages pour différentes langues
const messages = {
  en: {
    home: 'Home',
    about: 'About',
    resume: 'Resume',
    contact: "Contact",
    homeDetail: "This is an HomePage page",
    works: "Works",
    create: "Building",
    amazingWebExperiences: "modern web experiences",
    moreEngaging: "more engaging",
    withPowerfulCode: "with powerful code.",
    introDescription: "Chris C0d3 Full, web solutions expert in Laravel, Vue.js, and Tailwind CSS. Your partner for innovative, optimized websites.",
    viewProjects: "See my projects",
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    resume: 'Mon CV',
    contact: 'Contact',
    homeDetail: "Cette page est la page d'accueil",
    works: "Réalisations",
    create: "Créer",
    amazingWebExperiences: "des expériences web modernes",
    moreEngaging: "plus captivantes",
    withPowerfulCode: "avec un code puissant.",
    introDescription: "Chris C0d3 Full, créateur de solutions web sécurisées et performantes en Laravel, Vue.js et Tailwind CSS. Votre partenaire pour des sites modernes, innovants et optimisés.",
    viewProjects: "Voir mes projets",
  },
};


// Initialisation de Vue I18n
const i18n = createI18n({
  legacy: false,   // Utilisation de la nouvelle API de Vue I18n
  locale: 'en',    // Langue par défaut
  messages,        // Messages pour les langues
});

export default i18n;
