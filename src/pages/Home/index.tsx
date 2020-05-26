import React from "react";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Button, OutlineButton } from "../../components/base/buttons";

const Home = () => {
  const { t } = useTranslation();

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
      <Button>{t('addToBag')}</Button>
      <OutlineButton>{t('removeFromBag')}</OutlineButton>
    </div>
  );
};

export default Home;
