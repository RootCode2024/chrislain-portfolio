import { createI18n } from 'vue-i18n';

// Importation des traductions
import en from './locales/en.json';
import fr from './locales/fr.json';

// Configuration de vue-i18n
const i18n = createI18n({
  legacy: false, // Utilise l'API composition pour i18n
  locale: 'en', // Langue par défaut
  fallbackLocale: 'fr', // Langue de secours
  messages: { en, fr }, // Traductions
});

export default i18n;
