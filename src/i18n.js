import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import fr from './locales/fr.json'

const locales = { en, fr }

const i18n = createI18n({
  legacy: false,
  locale: (localStorage.lang || navigator.language.split('-')[0] || 'fr'),
  fallbackLocale: 'fr',
  messages: locales,
  allowHtml: true,
})

export default i18n;

