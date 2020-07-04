import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { ProductType } from "../../services/products/types";
import { StoreState } from "../../store";

import { Card } from "../../components/modules/card";
import { getListing } from "../../store/products/actions";
import { LoaderCard } from "../../components/modules/loader";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, products } = useSelector(
    (state: StoreState) => state.products.listing
  );

  const { t } = useTranslation();

  useEffect(() => {
    !products.length && dispatch(getListing());
  }, [dispatch, products.length]);

  const loaders = () => {
    const loaders = [];
    for (let i = 0; i < 22; i++) {
      loaders.push(<LoaderCard />);
    }
    return loaders;
  };

  return (
    <>
      <Helmet>
        <html lang={t("lang")} />
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="author" content={t("author")} />
        <meta name="keywords" content={t("keywords")} />
      </Helmet>

      {(loading || !products.length) && loaders()}

      <div className="card__list">
        {products.map((product: ProductType) => (
          <>
            <Card
              key={product.codeColor}
              product={product}
              onClick={() => history.push(`/produto/${product.codeColor}`)}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
