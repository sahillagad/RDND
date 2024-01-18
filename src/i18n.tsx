// src/i18n.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import translationEnglish from "./Translation/English/translation.json";
import translationHindi from "./Translation/Hindi/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  hi: {
    translation: translationHindi,
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language in case a translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18next;
