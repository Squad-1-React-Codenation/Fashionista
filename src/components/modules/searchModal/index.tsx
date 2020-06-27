import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Modal } from "../../base/modal";
import { SearchInput } from "../../modules/searchInput";
import { ModalCard } from "../../modules/modalCard";

import { ProductType } from "../../../services/products/types";

type PropsType = {
  isOpen: boolean;
  close: () => void;
};

export const SearchModal = ({ isOpen, close }: PropsType) => {
  const [products] = useState<ProductType[]>([]);

  const { t } = useTranslation();

  return (
    <Modal title={t("searchTitle")} isOpen={isOpen} close={close}>
      <SearchInput onSearchChange={() => false} />
      <div className="modal__search-list">
        {products.length ? (
          products.map((product: ProductType) => (
            <ModalCard
              key={product.name}
              product={product}
              onProductClick={() => false}
              isBag={false}
              onRemoveProduct={() => false}
            ></ModalCard>
          ))
        ) : (
          <div className="modal__empty-list">
            Opss! Nenhum item foi encontrado :/
          </div>
        )}
      </div>
    </Modal>
  );
};
