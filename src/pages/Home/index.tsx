import React, { useEffect, useState } from "react";

import { Button, OutlineButton } from "../../components/base/buttons";
import { productAPI } from "../../services/productAPI";
import { ProductType } from "../../services/types";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    productAPI().then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Button>Adicionar à Sacola</Button>
      <OutlineButton>Remover da Sacola</OutlineButton>
      Produtos
      <ul>
        {products.map((product) => (
          <li key={product.name}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
