import React from "react";
import { useTranslation } from "react-i18next";
import centsToCash from "../../../lib/format/centsToCash";

type ModalFooterPropsType = {
  value: number;
};

export const ModalFooter = (props: ModalFooterPropsType) => {
  const { t } = useTranslation();
  return (
    <footer className="modal__footer">
      <span className="modal__footer-text">{t("subtotal")} -</span>
      <span className="modal__footer-text">{centsToCash(props.value)}</span>
    </footer>
  );
};
