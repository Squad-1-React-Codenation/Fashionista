import React from "react";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Button, OutlineButton } from "../../components/base/buttons";

const Home = () => {
  const { t, i18n } = useTranslation();

  const translation = (language: string) => {
    i18n.changeLanguage(language)
  }

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

      <button onClick={() => translation('pt-BR')}>Português</button>
      <button onClick={() => translation('en')}>English</button>
      <button onClick={() => translation('es')}>Español</button>

      <Button>{t('addToBag')}</Button>
      <OutlineButton>{t('removeFromBag')}</OutlineButton>
    </div>
  );
};

export default Home;
