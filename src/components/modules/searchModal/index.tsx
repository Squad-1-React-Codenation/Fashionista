import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Modal } from "../../base/modal";
import { SearchInput } from "../../modules/searchInput";
import { ModalCard } from "../../modules/modalCard";

import { ProductCartType } from "../../../store/cart/types";

type PropsType = {
  isOpen: boolean;
  close: () => void;
};

export const SearchModal = ({ isOpen, close }: PropsType) => {
  const [products] = useState<ProductCartType[]>([]);

  const { t } = useTranslation();

  return (
    <Modal title={t("searchTitle")} isOpen={isOpen} close={close}>
      <SearchInput onSearchChange={() => false} />
      <div className="modal__search-list">
        {products.length ? (
          products.map((product: ProductCartType) => (
            <ModalCard
              key={product.details.style}
              product={product}
              onProductClick={() => false}
              isBag={false}
              onRemoveProduct={() => false}
              onIncreaseQuantity={() => false}
              onDecreaseQuantity={() => false}
            ></ModalCard>
          ))
        ) : (
          <div className="modal__empty-list">{t("noneItemHere")}</div>
        )}
      </div>
    </Modal>
  );
};
