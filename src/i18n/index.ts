import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from './locales/translations.json';

// Transform unified translations to i18next format
const transformTranslations = (data: any) => {
  const result: any = {};
  const languages = ['en', 'fr', 'es', 'de', 'rw'];
  
  languages.forEach(lang => {
    result[lang] = { translation: {} };
  });
  
  const processObject = (obj: any, path: string[] = []) => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        if (languages.some(lang => value[lang] !== undefined)) {
          // This is a translation object
          languages.forEach(lang => {
            if (value[lang] !== undefined) {
              const targetPath = [...path, key];
              let current = result[lang].translation;
              for (let i = 0; i < targetPath.length - 1; i++) {
                if (!current[targetPath[i]]) current[targetPath[i]] = {};
                current = current[targetPath[i]];
              }
              current[targetPath[targetPath.length - 1]] = value[lang];
            }
          });
        } else {
          // This is a nested object
          processObject(value, [...path, key]);
        }
      }
    });
  };
  
  processObject(data);
  return result;
};

const resources = transformTranslations(translations);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;