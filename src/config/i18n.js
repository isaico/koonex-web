import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;
