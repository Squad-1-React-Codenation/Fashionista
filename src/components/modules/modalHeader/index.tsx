import React from "react";
import { Button } from "../../base/buttons";
import { BackArrowIcon } from "../../base/icons";

type ModalHeaderPropsType = {
  title: string;
  onBackButtonClick: () => void;
};

export const ModalHeader = (props: ModalHeaderPropsType) => {
  return (
    <header className="modal__header">
      <Button onClick={props.onBackButtonClick}>
        <BackArrowIcon />
      </Button>

      <span className="modal__title">{props.title}</span>
    </header>
  );
};
