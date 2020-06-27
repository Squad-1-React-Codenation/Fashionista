import React from "react";

type PropType = {
  height: number;
  width: number;
};

export const Logo = ({ height, width }: PropType) => {
  return (
    <img src="img/logo.png" alt="Undefined" height={height} width={width} />
  );
};
