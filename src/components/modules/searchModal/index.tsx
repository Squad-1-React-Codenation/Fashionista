import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../../store";
import { getSearchProduct } from "../../../store/products/actions";

import { Modal } from "../../base/modal";
import { SearchInput } from "../../modules/searchInput";
import { ModalCard } from "../../modules/modalCard";

type PropsType = {
  isOpen: boolean;
  close: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let searchTimer: any;

export const SearchModal = ({ isOpen, close }: PropsType) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { products } = useSelector(
    (state: StoreState) => state.products.searchingProduct
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    clearTimeout(searchTimer);
    if (searchValue) {
      searchTimer = setTimeout(() => {
        dispatch(getSearchProduct(searchValue));
      }, 1000);
    }
    return () => clearTimeout(searchTimer);
  }, [searchValue, dispatch]);

  return (
    <Modal title={t("searchTitle")} isOpen={isOpen} close={close}>
      <SearchInput
        value={searchValue}
        onSearchChange={({ target: { value } }) => setSearchValue(value)}
      />
      <div className="modal__search-list">
        {products.length ? (
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
