import React, { useEffect, useState } from "react";

import {
  Button,
  OutlineButton,
  LargeButton,
  SquareSharpButton,
  QtdInfoButton,
  QtdInfoButtonSamll,
  DiscountInfoButton,
  LargeDiscountInfoButton,
} from "../../components/base/buttons";

import {
  ShoppingCartICon,
  PlusIcon,
  SearchIcon,
  BackArrowIcon,
  MinusIcon,
} from "../../components/base/icons";

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
      <Button>
        <ShoppingCartICon />
      </Button>
      <Button>
        <PlusIcon />
      </Button>
      <Button>
        <MinusIcon />
      </Button>
      <Button>
        <SearchIcon />
      </Button>
      <Button>
        <BackArrowIcon />
      </Button>
      &nbsp;&nbsp;&nbsp;
      <QtdInfoButton>+99</QtdInfoButton>&nbsp;&nbsp;&nbsp;
      <QtdInfoButtonSamll>9</QtdInfoButtonSamll>&nbsp;&nbsp;&nbsp;
      <DiscountInfoButton>99%</DiscountInfoButton>&nbsp;&nbsp;&nbsp;
      <LargeDiscountInfoButton>99%</LargeDiscountInfoButton>&nbsp;&nbsp;&nbsp;
      <SquareSharpButton>
        <MinusIcon />
      </SquareSharpButton>
      &nbsp;&nbsp;&nbsp;
      <SquareSharpButton>
        <PlusIcon />
      </SquareSharpButton>
      <br />
      <br />
      <LargeButton>Large Button</LargeButton> <br />
      <br />
      <OutlineButton>Remover da Sacola</OutlineButton>
      <br />
      <br />
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
