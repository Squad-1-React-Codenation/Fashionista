import React from "react";
import { Modal } from "../../base/modal";
import { ModalCard } from "../../modules/modalCard";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../../store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../../store/cart/actions";
import { ProductCartType } from "../../../store/cart/types";

type PropsType = {
  isOpen: boolean;
  close: () => void;
};

export const BagModal = ({ isOpen, close }: PropsType) => {
  const dispatch = useDispatch();
  const { count, products } = useSelector((state: StoreState) => state.cart);

  const removeProduct = (product: ProductCartType) => {
    dispatch(removeFromCart(product));
  };

  const increaseProductQuantity = (product: ProductCartType) => {
    dispatch(increaseQuantity(product));
  };

  const decreaseProductQuantity = (product: ProductCartType) => {
    dispatch(decreaseQuantity(product));
  };

  const { t } = useTranslation();

  return (
    <Modal title={t("bagTitle", { count })} isOpen={isOpen} close={close}>
      <div className="modal__search-list">
        {products.length ? (
          products.map((product: ProductCartType) => (
            <ModalCard
              key={product.details.codeColor}
              product={product.details}
              quantity={product.quantity}
              size={product.size.size}
              onRemoveProduct={() => removeProduct(product)}
              onIncreaseQuantity={() => increaseProductQuantity(product)}
              onDecreaseQuantity={() => decreaseProductQuantity(product)}
              isBag
            />
          ))
        ) : (
          <div className="modal__empty-list">{t("nothingHere")}</div>
        )}
      </div>
    </Modal>
  );
};
