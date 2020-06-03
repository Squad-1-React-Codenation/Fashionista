import React from "react";
import { ProductType } from "../../../services/types";

export const Card = (product: ProductType) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name}></img>
      <div className="product-name"> {product.name} </div>
      {product.on_sale ? (
        <div className="product-price">
          <div className="product-actual-price--sale">
            {product.regular_price}
          </div>
          <div className="product-regular-price--sale">
            {product.actual_price}
          </div>
        </div>
      ) : (
        <div className="product-regular-price">{product.regular_price}</div>
      )}
    </div>
  );
};
