import React, { useEffect, useState } from "react";

import { Button, OutlineButton } from "../../components/base/buttons";
import { productAPI } from "../../services/productAPI";
import { ProductType } from "../../services/types";

import { Card } from "../../components/modules/card";

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
      <div className="product-list">
        {products.map((product: ProductType) => (
          <Card key={product.name} {...product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
