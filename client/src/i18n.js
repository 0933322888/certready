import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';

const resources = {
  en: { translation: en },
  // fr: { translation: fr },
  // ru: { translation: ru },
};

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('certready_lang') : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('certready_lang', lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
