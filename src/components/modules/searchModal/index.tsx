import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../../store";
import { getSearchProduct } from "../../../store/products/actions";

import { Modal } from "../../base/modal";
import { SearchInput } from "../../modules/searchInput";
import { ModalCard } from "../../modules/modalCard";
import { Link } from "react-router-dom";

type PropsType = {
  isOpen: boolean;
  close: () => void;
};

export const SearchModal = ({ isOpen, close }: PropsType) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { products } = useSelector(
    (state: StoreState) => state.products.searchingProduct
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.length > 3) {
      dispatch(getSearchProduct(searchValue));
    }
  }, [searchValue, dispatch]);

  return (
    <Modal title={t("searchTitle")} isOpen={isOpen} close={close}>
      <SearchInput
        value={searchValue}
        onSearchChange={({ target: { value } }) => setSearchValue(value)}
      />
      <div className="modal__search-list">
        {products.length && searchValue.length ? (
          products.map((product) => {
            return (
              <Link
                key={product.codeColor}
                to={`/produto/${product.codeColor}`}
                className="modal__card-link"
              >
                <ModalCard
                  key={product.codeColor}
                  product={product}
                  onProductClick={() => false}
                  isBag={false}
                />
              </Link>
            );
          })
        ) : (
          <div className="modal__empty-list">{t("noItem")}</div>
        )}
      </div>
    </Modal>
  );
};
