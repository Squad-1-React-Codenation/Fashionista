import React, { useState } from "react";
import { Logo } from "../../base/logo";
import { Button } from "../../base/buttons";
import { ShoppingCartICon, SearchIcon } from "../../base/icons";
import Modal from "../../base/modal";

const Header = () => {
  const [modal, setModal] = useState({ open: false, search: false });

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
            <span className="header__cart--qtde">1</span>
          </Button>
        </div>
        <Modal
          title={modal.search ? "Pesquise seu ditador" : "Carrinho do Ditador"}
          isOpen={modal.open}
          close={() => setModal({ ...modal, open: false })}
        >
          {modal.search ? (
            <div className="modal__search">
              <input
                className="modal__search-input"
                type="text"
                placeholder="Buscar por produto..."
                value="O que é Golden Shower"
              />
            </div>
          ) : (
            <div>
              <div>
                <img src="https://placekitten.com/50/50" alt="" />
                <h2>Cloroquina</h2>
              </div>
              <br />
              <div>
                <img src="https://placekitten.com/50/50" alt="" />
                <h2>AK-47 pro cidadão de bem</h2>
                <caption>A Paula patrocina essa ideia!</caption>
              </div>
              <div>
                <img src="https://placekitten.com/50/50" alt="" />
                <h2>Kit gay</h2>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </header>
  );
};

export default Header;
