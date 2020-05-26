import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  'pt-BR': {
    translation: {
      "lang": "pt-BR",
      "title": "Undefined - Quem define seu estilo é apenas você",
      "description": "Quem define seu estilo é apenas você, é por isso que proporcionamos uma ampla variedade de produtos para você se vestir como quiser",
      "author": "Equipe undefined",
      "keywords": "loja de roupas,estilo único,moda atual",
      "addToBag": "Adicionar à sacola",
      "removeFromBag": "Remover da sacola"
    }
  },
  en: {
    translation: {
      "lang": "en",
      "title": "Undefined - Who defines your style is just you",
      "description": "Who defines your style is just you, so we provide a wide variety of products for you to dress as you want",
      "author": "undefined team",
      "keywords": "clothing store,unique style,current fashion",
      "addToBag": "Add to bag",
      "removeFromBag": "Remove from bag"
    }
  },
  es: {
    translation: {
      "lang": "es",
      "title": "Undefined - Quien define tu estilo eres solo tú",
      "description": "Quien define tu estilo eres solo tú, es por eso que ofrecemos una amplia variedad de productos para que usted se vista de la manera que desee",
      "author": "Equipo undefined",
      "keywords": "tienda de ropa,estilo único,moda actual",
      "addToBag": "Agregar a la bolsa",
      "removeFromBag": "Sacar de la bolsa"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt-BR",
    // lng: "es",
    // lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    } 
  });

  export default i18n;