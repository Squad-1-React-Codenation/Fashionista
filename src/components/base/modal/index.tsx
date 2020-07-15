/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { BackArrowIcon } from "../icons";

type PropsType = {
  isOpen: boolean;
  title: string;
  close: () => void;
  children: React.ReactChild | React.ReactChild[];
};

export const Modal = ({ title, children, isOpen, close }: PropsType) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "";
      document.body.style.maxHeight = "100%";
      return;
    }
    document.body.style.maxHeight = "";
    document.body.style.overflow = "hidden";
  }, [isOpen]);

  return ReactDOM.createPortal(
    <>
      <div
        onClick={close}
        className={`modal__overlay ${isOpen ? "modal__overlay--is-on" : ""}`}
      />
      <div className={`modal ${isOpen ? "modal--is-on" : ""}`}>
        <div className="modal__header">
          <button
            className="button button--outline"
            title="Voltar"
            onClick={close}
          >
            <BackArrowIcon />
          </button>
          <h2 className="modal__title">{title}</h2>
        </div>
        {children}
      </div>
    </>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("modal-root")!
  );
};
