/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import { Button, SquareSharpButton } from "../../base/buttons";
import { MinusIcon, PlusIcon } from "../../base/icons";
import centsToCash from "../../../lib/format/centsToCash";
import { ProductCartType } from "../../../store/cart/types";
import { ProductType } from "../../../services/products/types";
import { useTranslation } from "react-i18next";

type ModalCardPropsType = {
  product: ProductType;
  size?: string;
  quantity?: number;
  isBag: boolean;
  onProductClick?: () => void;
  onRemoveProduct?: (product: ProductCartType) => void;
  onIncreaseQuantity?: (product: ProductCartType) => void;
  onDecreaseQuantity?: (product: ProductCartType) => void;
};

export const ModalCard = (props: ModalCardPropsType) => {
  const { t } = useTranslation();

  return (
    <div className="modal__card">
      <div
        className={`modal__card-content ${
          !props.isBag ? "modal__card--is-search" : ""
        }`}
        onClick={props.onProductClick}
        role="button"
        tabIndex={0}
      >
        <img
          className="modal__product-image"
          src={props.product.image}
          alt=""
        />
        <div className="modal__product-info">
          <span className="modal__product-name">{props.product.name}</span>
          {props.isBag && (
            <>
              <span className="modal__product-size">
                {`Tam.: ${props.size}`}
              </span>
              <div className="modal__quantity-controls">
                <SquareSharpButton onClick={props.onDecreaseQuantity}>
                  <MinusIcon />
                </SquareSharpButton>
                <span>{props.quantity}</span>
                <SquareSharpButton onClick={props.onIncreaseQuantity}>
                  <PlusIcon />
                </SquareSharpButton>
              </div>
            </>
          )}
        </div>

        <div className="modal__card-payment">
          <span className="modal__card-price">
            {props.product.onSale
              ? centsToCash(props.product.actualPrice)
              : centsToCash(props.product.regularPrice)}
          </span>
          <span className="modal__card-installments">
            {props.product.installments.quantity}x{" "}
            {centsToCash(props.product.installments.price)}
          </span>
        </div>
      </div>
      {props.isBag && (
        <div className="modal__card-remove">
          <Button onClick={() => props.onRemoveProduct}>
            {t("removeItem")}
          </Button>
        </div>
      )}
    </div>
  );
};
