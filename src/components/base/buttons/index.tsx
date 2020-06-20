import React from "react";

type ButtonPropsType =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any
  | {
      children?: React.ReactChild | React.ReactChild[];
      disabled?: boolean;
      color?: "red";
      modifier: string;
    };

export const Button = (props: ButtonPropsType) => {
  return (
    <button {...props} className={`button ${props.modifier}`}>
      {props.children}
    </button>
  );
};

export const SquareSharpButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--squareSharp" />;
};

export const LargeButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--large" />;
};

export const OutlineButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--large button--outline" />;
};

export const ButtonIcon = () => <i></i>;
