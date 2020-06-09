import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es, ptBR } from "./config/locales";

const resources = {
  "pt-BR": {
    translation: ptBR,
  },
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next);

export const initLang = (lang: string): void => {
  i18n.init({
    resources,
    lng: lang,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18n;
