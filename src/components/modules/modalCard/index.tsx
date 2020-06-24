/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import { ProductType } from "../../../services/products/types";

type ModalCardPropsType = {
  product: ProductType;
  onProductClick: () => void;
};

export const ModalCard = (props: ModalCardPropsType) => {
  return (
    <div
      className="modal__card"
      onClick={props.onProductClick}
      role="button"
      tabIndex={0}
    >
      <div className="modal__card-product">
        <img src={props.product.image} alt="" />
        <span className="modal__product-name">{props.product.name}</span>
      </div>
      <div className="modal__card-payment">
        <span className="modal__card-price">
          {props.product.onSale
            ? props.product.actualPrice
            : props.product.regularPrice}
        </span>
        <span className="modal__card-installments">
          {props.product.installments}
        </span>
      </div>
    </div>
  );
};
