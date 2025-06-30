// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import enTranslations from './locales/en/translation.json'
import arTranslations from './locales/ar/translation.json'

const resources = {
    en: {
        translation: enTranslations,
    },
    ar: {
        translation: arTranslations,
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        resources,
        lng: "ar",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        // resources,
        // lng: 'ar',
        // fallbackLng: 'ar',
        // detection: {
        //     order: [
        //         'htmlTag',
        //         'localStorage',
        //         'sessionStorage',
        //         'navigator',
        //         'path',
        //         'subdomain'
        //     ],
        //     caches: ['localStorage'],
        // },
        // backend: {
        //     loadPath: 'src/locales/{{lng}}/translation.json',
        // },
        // interpolation: {
        //     escapeValue: false,
        // },
    });
export default i18n;
