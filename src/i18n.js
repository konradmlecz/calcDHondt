import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {resources} from "./data/text.constans"
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: ["pl","en"],
        interpolation: {
            escapeValue: false
        }
    });
export default i18n;