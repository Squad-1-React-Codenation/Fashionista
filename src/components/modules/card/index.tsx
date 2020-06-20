import React from "react";
import { ProductType } from "../../../services/types";
import imageNotFound from "../../../assets/image-not-found.png";
import { DiscountInfoButton } from "../../base/buttons";

export const Card = (product: ProductType) => {
  return (
    <div className="card">
      <img src={product.image ? product.image : imageNotFound} alt=""></img>
      {product.on_sale ? (
        <div className="card__discount-button">
          <DiscountInfoButton>
            {product.discount_percentage}
          </DiscountInfoButton>
        </div>       
      )
      : (<span></span>)}
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
