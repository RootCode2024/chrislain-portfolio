import { createI18n } from 'vue-i18n';

// Importation des traductions
import en from './locales/en.json';
import fr from './locales/fr.json';

const browserLang = navigator.language.split('-')[0]; // Ex : 'en' ou 'fr'
const savedLang = localStorage.getItem('lang');
const defaultLang = savedLang || browserLang || 'en'; // Priorité : Sauvegardée > Navigateur > Défaut

// Configuration de vue-i18n
const i18n = createI18n({
  legacy: false, // Utilise l'API composition pour i18n
  locale: defaultLang, // Définit la langue initiale
  fallbackLocale: 'en', // Langue de secours
  messages: { en, fr }, // Traductions
  allowHtml: true,
});

// Sauvegarder la langue si elle n'est pas encore dans localStorage
if (!savedLang) {
  localStorage.setItem('lang', defaultLang);
}

export default i18n;
