import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { productAPI } from "../../services/productAPI";
import { ProductType } from "../../services/types";

import { Card } from "../../components/modules/card";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    productAPI().then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <Helmet>
        <html lang={t("lang")} />
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="author" content={t("author")} />
        <meta name="keywords" content={t("keywords")} />
      </Helmet>
      Produtos - 22 itens
      <div className="product-list">
        {products.map((product: ProductType, index) => (
          <Card key={index} {...product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
