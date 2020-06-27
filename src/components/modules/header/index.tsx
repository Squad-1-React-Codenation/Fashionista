import React, { useState } from "react";
import { Logo } from "../../base/logo";
import { Button } from "../../base/buttons";
import { ShoppingCartICon, SearchIcon } from "../../base/icons";
import { SearchModal } from "../../modules/searchModal";
import { BagModal } from "../../modules/bagModal";
import { useSelector } from "react-redux";
import { StoreState } from "../../../store";

const Header = () => {
  const [modal, setModal] = useState({ open: false, search: false });

  const { count } = useSelector((state: StoreState) => state.cart);

  return (
    <header className="header">
      <div className="header__container">
        <Logo height={40} width={120} />
        <div className="header__icons">
          <Button onClick={() => setModal({ search: true, open: true })}>
            <SearchIcon />
          </Button>
          <Button onClick={() => setModal({ search: false, open: true })}>
            <ShoppingCartICon />
            {count ? <span className="header__cart--qtde">{count}</span> : null}
          </Button>
        </div>
        <SearchModal
          isOpen={modal.search && modal.open}
          close={() => setModal({ ...modal, open: false })}
        />
        <BagModal
          isOpen={!modal.search && modal.open}
          close={() => setModal({ ...modal, open: false })}
        />
      </div>
    </header>
  );
};

export default Header;
