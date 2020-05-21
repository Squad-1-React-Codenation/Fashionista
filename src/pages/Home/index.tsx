import React from "react";

import { Button, OutlineButton } from "../../components/base/buttons";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button>Adicionar à Sacola</Button>
      <OutlineButton>Remover da Sacola</OutlineButton>
    </div>
  );
};

export default Home;
