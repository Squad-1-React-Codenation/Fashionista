import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { productAPI } from "../../services/productAPI";
import { ProductType } from "../../services/types";

import { Card } from "../../components/modules/card";
import { SearchInput } from "../../components/modules/searchInput";
import { ModalCard } from "../../components/modules/modalCard";

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
      <SearchInput onSearchChange={() => {}} />
      {products.length && <ModalCard product={products[0]} onProductClick={() => {}}></ModalCard>}
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
