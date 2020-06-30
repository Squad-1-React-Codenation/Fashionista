/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import { Button } from "../../base/buttons";
import centsToCash from "../../../lib/format/centsToCash";
import { ProductCartType } from "../../../store/cart/types";

type ModalCardPropsType = {
  product: ProductCartType;
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
          <img src={props.product.product.image} alt="" />
          {props.isBag && (
            <Button
              onClick={() => props.onRemoveProduct(props.product.product.style)}
            >
              Remover
            </Button>
          )}
        </div>
        <div className="modal__product-info">
          <span className="modal__product-name">
            {props.product.product.name}
          </span>
          {props.isBag && (
            <span className="modal__product-size">
              {`Tam.: ${props.product.size.size}`}
            </span>
          )}
        </div>
      </div>
      <div className="modal__card-payment">
        <span className="modal__card-price">
          {props.product.product.onSale
            ? centsToCash(props.product.product.actualPrice)
            : centsToCash(props.product.product.regularPrice)}
        </span>
        <span className="modal__card-installments">
          {props.product.product.installments.quantity}x R${" "}
          {centsToCash(props.product.product.installments.price)}
        </span>
      </div>
    </div>
  );
};
