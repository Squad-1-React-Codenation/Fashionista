import React from "react";
import { Link } from "react-router-dom";

type PropType = {
  height: number;
  width: number;
};

export const Logo = ({ height, width }: PropType) => {
  return (
    <Link to="/">
      <img src="/img/logo.png" alt="Undefined" height={height} width={width} />
    </Link>
  );
};
