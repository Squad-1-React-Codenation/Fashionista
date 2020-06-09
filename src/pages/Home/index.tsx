import React, { useEffect, useState } from "react";
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
      Produtos - {products.length} items encontrados
      <div className="card__list">
        {products.map((product: ProductType) => (
          <Card key={product.name} {...product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
