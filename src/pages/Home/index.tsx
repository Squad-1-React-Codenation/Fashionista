import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ProductType } from "../../services/products/types";
import { StoreState } from "../../store";

import { Card } from "../../components/modules/card";
import { getListing } from "../../store/products/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector(
    (state: StoreState) => state.products.listing
  );

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getListing());
  }, [dispatch]);

  if (loading || !products.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <html lang={t("lang")} />
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="author" content={t("author")} />
        <meta name="keywords" content={t("keywords")} />
      </Helmet>
      <SearchInput onSearchChange={() => {}} />
      Produtos - {products.length} items encontrados
      <div className="card__list">
        {products.map((product: ProductType) => (
          <>
            <Card key={product.codeColor} {...product}></Card>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
