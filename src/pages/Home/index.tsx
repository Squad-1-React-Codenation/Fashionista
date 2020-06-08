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
      Produtos - 22 itens
      <div className="product-list">
        {products.map((product: ProductType) => (
          <Card key={product.name} {...product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
