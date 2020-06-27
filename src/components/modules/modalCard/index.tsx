/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import { ProductType } from "../../../services/products/types";
import { Button } from "../../base/buttons";

type ModalCardPropsType = {
  product: ProductType;
  isBag: boolean;
  onProductClick: () => void;
  onRemoveProduct: (productId: string) => void;
};

export const ModalCard = (props: ModalCardPropsType) => {
  return (
    <div
      className={`modal__card ${!props.isBag ? "modal__card--is-search" : ""}`}
      onClick={props.onProductClick}
      role="button"
      tabIndex={0}
    >
      <div className="modal__card-product">
        <div className="modal__product-image">
          <img src={props.product.image} alt="" />
          {props.isBag && (
            <Button onClick={() => props.onRemoveProduct(props.product.style)}>
              Remover
            </Button>
          )}
        </div>
        <div className="modal__product-info">
          <span className="modal__product-name">{props.product.name}</span>
          {props.isBag && (
            <span className="modal__product-size">
              {`Tam.: ${props.product.sizes[0].size}`}
            </span>
          )}
        </div>
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
