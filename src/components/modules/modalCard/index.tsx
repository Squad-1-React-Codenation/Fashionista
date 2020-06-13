import React from "react";
import { ProductType } from "../../../services/types";

type ModalCardPropsType = {
  product: ProductType;
  onProductClick: () => void;
};

export const ModalCard = (props: ModalCardPropsType) => {
  return (
    <div className="modal__card" onClick={props.onProductClick}>
      <div className="modal__card-product">
        <img src={props.product.image} alt="" />
        <span className="modal__product-name">{props.product.name}</span>
      </div>
      <div className="modal__card-payment">
        <span className="modal__card-price">
          {props.product.on_sale
            ? props.product.actual_price
            : props.product.regular_price}
        </span>
        <span className="modal__card-installments">
          {props.product.installments}
        </span>
      </div>
    </div>
  );
};
