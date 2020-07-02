/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import { Button, SquareSharpButton } from "../../base/buttons";
import { MinusIcon, PlusIcon } from "../../base/icons"
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
    <div className="modal__card">
    <div
      className={`modal__card-content ${!props.isBag ? "modal__card--is-search" : ""}`}
      onClick={props.onProductClick}
      role="button"
      tabIndex={0}
    >
      <img 
        className="modal__product-image" 
        src={props.product.details.image} 
        alt="" 
      />
      <div className="modal__product-info">
        <span className="modal__product-name">
          {props.product.details.name}
        </span>
        {props.isBag && (
          <>
          <span className="modal__product-size">
            {`Tam.: ${props.product.size.size}`}
          </span>
          <div className="modal__quantity-controls">
            <SquareSharpButton>
              <MinusIcon />
            </SquareSharpButton>
            <span>
              {props.product.quantity}
            </span>
            <SquareSharpButton>
              <PlusIcon />
            </SquareSharpButton>
          </div>
          </>
        )}
      </div>

      <div className="modal__card-payment">
        <span className="modal__card-price">
          {props.product.details.onSale
            ? centsToCash(props.product.details.actualPrice)
            : centsToCash(props.product.details.regularPrice)}
        </span>
        <span className="modal__card-installments">
          {props.product.details.installments.quantity}x {" "}
          {centsToCash(props.product.details.installments.price)}
        </span>
      </div>
    </div>
    {props.isBag && (
      <div className="modal__card-remove">
        <Button
          onClick={() => props.onRemoveProduct(props.product.size.sku)}
        >
          Remover item
        </Button>
      </div>
    )}
    </div>
  );
};
