import React from "react";

type ButtonPropsType =
  | any
  | {
      children?: React.ReactChild | React.ReactChild[];
      disabled?: boolean;
      color?: "red";
      modifier: string;
    };

export const Button = (props: ButtonPropsType) => {
  return (
    <button disabled={props.disabled} className={`button ${props.modifier}`}>
      {props.children}
    </button>
  );
};

export const OutlineButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--outline" />;
};

export const ButtonIcon = () => <i></i>;
