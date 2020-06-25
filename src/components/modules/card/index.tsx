import React from "react";
import { ProductType } from "../../../services/types";

export const Card = (product: ProductType) => {
  return (
    <div className="card">
      <img src={product.image ? product.image : 'img/image-not-found.png' } alt=""></img>
      {product.on_sale && (
        <div className="card__discount-badge">
          <span>{product.discount_percentage}</span>
        </div>
      )}
      <div className="card__name"> {product.name} </div>
      {product.on_sale ? (
        <div className="card__price">
          <div className="card__actual-price--sale">
            {product.regular_price}
          </div>
          <div className="card__regular-price--sale">
            {product.actual_price}
          </div>
        </div>
      ) : (
        <div className="card__regular-price">{product.regular_price}</div>
      )}
    </div>
  );
};
