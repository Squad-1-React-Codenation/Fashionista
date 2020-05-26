import React from "react";
import { Helmet } from 'react-helmet';

import { Button, OutlineButton } from "../../components/base/buttons";

const Home = () => {
  const info = {
    lang: 'pt-BR',
    title: 'Undefined - Quem define seu estilo é você',
    description: 'Quem define seu estilo é você, e é por isso que proporcionamos uma ampla variedade de produtos para você se vestir como quiser',
    author: 'Equipe undefined',
    keywords: ['loja de roupas','estilo único','moda atual']
  }

  return (
    <div>
      <Helmet>
        <html lang={info.lang}/>
        <title>{info.title}</title>
        <meta name="description" content={info.description}/>
        <meta name="author" content={info.author}/>
        <meta name="keywords" content={info.keywords.join(',')}/>
      </Helmet>
      <h1>Home</h1>
      <Button>Adicionar à Sacola</Button>
      <OutlineButton>Remover da Sacola</OutlineButton>
    </div>
  );
};

export default Home;
