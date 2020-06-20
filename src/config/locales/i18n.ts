import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es, ptBR } from ".";

const resources = {
  "pt-BR": { translation: ptBR },
  en: { translation: en },
  es: { translation: es },
};

export const getLang = (): string => {
  const userLangs = navigator.languages.map((lang) => {
    return lang.toLowerCase().substring(0, 2);
  });

  let bestLanguage = "";
  userLangs.some((usrLang) => {
    Object.keys(resources).some((supLang) => {
      const supLangCode = supLang.substring(0, 2);
      if (supLangCode === usrLang) {
        bestLanguage = supLang;
      }
      return bestLanguage;
    });
    return bestLanguage;
  });

  return bestLanguage || "en";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLang(),
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
