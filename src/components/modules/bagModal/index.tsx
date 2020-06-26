import React from "react";
import { Modal } from "../../base/modal";
import { ModalCard } from "../../modules/modalCard";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ProductType } from "../../../services/types";
import { StoreState } from "../../../store";
import { removeFromCart } from "../../../store/cart/actions";

type PropsType = {
  isOpen: boolean;
  close: () => void;
};

export const BagModal = ({ isOpen, close }: PropsType) => {
  const dispatch = useDispatch();
  const { count, listing } = useSelector(
    (state: StoreState) => state.cart
  );

  const removeProduct = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const { t } = useTranslation();

  return (
    <Modal title={t("bagTitle", { count })} isOpen={isOpen} close={close}>
      <div className="modal__search-list">
        {listing.length ? (
          listing.map((product: ProductType) => (
            <ModalCard
              key={product.name}
              product={product}
              onProductClick={() => false}
              onRemoveProduct={removeProduct}
              isBag
            />
          ))
        ) : (
          <div className="modal__empty-list">Opss! Aqui não tem nada :/</div>
        )}
      </div>
    </Modal>
  );
};
