import React from "react";

type ButtonPropsType =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any
  | {
      children?: React.ReactChild | React.ReactChild[];
      disabled?: boolean;
      color?: "red";
      modifier: string;
      sizes: string;
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

export const QtdInfoButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--qtd button--qtdinfo" />;
};

export const QtdInfoButtonSamll = (props: ButtonPropsType) => {
  return (
    <Button
      {...props}
      modifier="button--qtd button--qtdinfo button--qtd-small"
    />
  );
};

export const DiscountInfoButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--discount button--discountinfo" />;
};

export const LargeDiscountInfoButton = (props: ButtonPropsType) => {
  return (
    <Button
      {...props}
      modifier="button--discount-large button--discountinfo-large"
    />
  );
};

export const SizeInfoButton = (props: ButtonPropsType) => {
  return (
    <label className={`container-sizes container-sizes--${props.modifier}`}>
      <input type="radio" name="radio-size" value={props.value} />
      <span className={`checkmark checkmark--${props.modifier}`}>
        {props.sizes}
      </span>
    </label>
  );
};

export const LargeButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--large" />;
};

export const OutlineButton = (props: ButtonPropsType) => {
  return <Button {...props} modifier="button--large button--outline" />;
};

export const ButtonIcon = () => <i></i>;
