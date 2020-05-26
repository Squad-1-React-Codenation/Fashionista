import React from "react";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Button, OutlineButton } from "../../components/base/buttons";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <html lang={t('lang')}/>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')}/>
        <meta name="author" content={t('author')}/>
        <meta name="keywords" content={t('keywords')}/>
      </Helmet>
      <h1>Home</h1>
      <button onClick={() => i18n.changeLanguage('pt-BR')}>
        Português
      </button>
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
      <button onClick={() => i18n.changeLanguage('es')}>
        Español
      </button>
      <Button>{t('addToBag')}</Button>
      <OutlineButton>{t('removeFromBag')}</OutlineButton>
    </div>
  );
};

export default Home;
