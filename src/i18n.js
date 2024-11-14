import { createI18n } from 'vue-i18n';

// Messages pour différentes langues
const messages = {
  en: {
    home: 'Home',
    about: 'About',
    resume: 'Resume',
    contact: "Contact",
    homeDetail: "This is an HomePage page"
    
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    resume: 'Mon CV',
    contact: 'Contact',
    homeDetail: "Cette page est la page d'accueil"
  },
};

// Initialisation de Vue I18n
const i18n = createI18n({
  legacy: false,   // Utilisation de la nouvelle API de Vue I18n
  locale: 'en',    // Langue par défaut
  messages,        // Messages pour les langues
});

export default i18n;
