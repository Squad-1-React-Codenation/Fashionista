import React, { useEffect, useState } from "react";
import { Modal } from "../../base/modal";
import { SearchInput } from "../../modules/searchInput";
import { ModalCard } from "../../modules/modalCard";
import { useTranslation } from "react-i18next";

import { productAPI } from "../../../services/productAPI";
import { ProductType } from "../../../services/types";

type PropsType = {
  isOpen: boolean;
  close: () => void;
};

export const SearchModal = ({ isOpen, close }: PropsType) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    productAPI().then((products) => setProducts(products));
  }, []);

  return (
    <Modal
      title={t("searchTitle")}
      isOpen={isOpen}
      close={close}
    >
      <SearchInput onSearchChange={() => {}}/>
      <div className="modal__search-list">
        {products.length ? (
          products.map((product: ProductType) => (
            <ModalCard
              key={product.name}
              product={product}
              onProductClick={() => false}
              isBag={false}
            ></ModalCard>
          ))
        ) : (
          <div className="modal__empty-list">
            Opss! Nenhum item foi encontrado :/
          </div>
        )}
      </div>
    </Modal>
  )
}

