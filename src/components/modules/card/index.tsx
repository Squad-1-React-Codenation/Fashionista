import React from "react";

import { ProductType } from "../../../services/products/types";
import centsToCash from "../../../lib/format/centsToCash";

type PropsType = {
  product: ProductType;
  onClick: () => void;
};
export const Card = ({ product, onClick }: PropsType) => {
  return (
    <div
      className="card"
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
    >
      <img
        src={product.image ? product.image : "img/image-not-found.png"}
        alt=""
      />
      {product.onSale && (
        <div className="card__discount-badge">
          <span>{product.discountPercentage}%</span>
        </div>
      )}
      <div className="card__name"> {product.name} </div>
      {product.onSale ? (
        <div className="card__price">
          <div className="card__actual-price--sale">
            {centsToCash(product.regularPrice)}
          </div>
          <div className="card__regular-price--sale">
            {centsToCash(product.actualPrice)}
          </div>
        </div>
      ) : (
        <div className="card__regular-price">
          {centsToCash(product.regularPrice)}
        </div>
      )}
    </div>
  );
};
