import React from "react";

import { ProductType } from "../../../services/products/types";

export const Card = (product: ProductType) => {
  return (
    <div className="card">
      <img
        src={product.image ? product.image : "img/image-not-found.png"}
        alt=""
      ></img>
      {product.onSale && (
        <div className="card__discount-badge">
          <span>{product.discountPercentage}%</span>
        </div>
      )}
      <div className="card__name"> {product.name} </div>
      {product.onSale ? (
        <div className="card__price">
          <div className="card__actual-price--sale">
            R$ {product.regularPrice}
          </div>
          <div className="card__regular-price--sale">
            R$ {product.actualPrice}
          </div>
        </div>
      ) : (
        <div className="card__regular-price">R$ {product.regularPrice}</div>
      )}
    </div>
  );
};
