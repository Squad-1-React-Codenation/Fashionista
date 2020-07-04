import React from "react";
import { useTranslation } from "react-i18next";

type SearchPropsType = {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const SearchInput = (props: SearchPropsType) => {
  const { t } = useTranslation();

  return (
    <div className="modal__search">
      <input
        onChange={props.onSearchChange}
        className="modal__search-input"
        type="text"
        placeholder={t("searchProduct")}
        value={props.value}
      />
    </div>
  );
};
