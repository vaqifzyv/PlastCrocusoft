import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationEn from "../public/locales/en/translation.json";
import translationAz from "../public/locales/az/translation.json";
import translationRu from "../public/locales/ru/translation.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "az",
    resources: {
      en: {
        translation: translationEn,
      },
      az: {
        translation: translationAz,
      },
      ru: {
        translation: translationRu,
      },
    },
  });
