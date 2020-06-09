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

export const initLang = (): void => {
  i18n.use(initReactI18next).init({
    resources,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lng: (window as any).__Locale,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18n;
