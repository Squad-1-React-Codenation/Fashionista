import React from "react";
import { Logo } from "../../base/logo";
import { Button } from "../../base/buttons";
import { ShoppingCartICon, SearchIcon } from "../../base/icons";

const Header = () => {
  const buttonHandler = () => alert("Botão não implementado");
  const cartHandler = () => alert("Carrinho não implementado");

  return (
    <header className="header">
      <div className="header__container">
        <Logo height={40} width={120} />
        <div className="header__icons">
          <Button onClick={buttonHandler}>
            <SearchIcon />
          </Button>
          <Button onClick={cartHandler}>
            <ShoppingCartICon />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
