import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ProductType } from "../../services/types";
import { StoreState } from "../../store";

import { Card } from "../../components/modules/card";
import { getProducts } from "../../store/products/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, listing } = useSelector(
    (state: StoreState) => state.products
  );

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading || !listing.length) {
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
      <div className="card__list">
        {listing.map((product: ProductType) => (
          <Card key={product.code_color} {...product}></Card>
        ))}
      </div>
    </>
  );
};

export default Home;
