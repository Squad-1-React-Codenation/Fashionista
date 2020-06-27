import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ProductType } from "../../services/products/types";
import { StoreState } from "../../store";

import { Card } from "../../components/modules/card";
import { getListing } from "../../store/products/actions";
import { Loader } from "../../components/modules/loader";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector(
    (state: StoreState) => state.products.listing
  );

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getListing());
  }, [dispatch]);

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
        {products.map((product: ProductType) => (
          <>
            {loading || !products.length ? (
              <Loader />
            ) : (
              <Card key={product.codeColor} {...product} />
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
