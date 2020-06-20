import React from "react";
import { Link } from "react-router-dom";

import { Instagram } from "../../base/iconsocial";
import { Facebook } from "../../base/iconsocial";
import { Twiter } from "../../base/iconsocial";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__primary">
        <div className="footer--infos">
          <h3>Sobre</h3>
          <ul className="item--footer">
            <li>
              <Link to="/">A Marca</Link>
            </li>
            <li>
              <Link to="/">Imprensa</Link>
            </li>
            <li>
              <Link to="/">Guid Shop</Link>
            </li>
          </ul>
        </div>
        <div className="footer--infos">
          <h3>Ajuda</h3>
          <ul className="item--footer">
            <li>
              <Link to="/">Atendimento</Link>
            </li>
            <li>
              <Link to="/">Frete</Link>
            </li>
            <li>
              <Link to="/">Devolução</Link>
            </li>
          </ul>
        </div>
        <div className="footer--infos">
          <h3>Conta</h3>
          <ul className="item--footer">
            <li>
              <Link to="/">Minha Conta</Link>
            </li>
            <li>
              <Link to="/">Pedidos</Link>
            </li>
            <li>
              <Link to="/">Meus créditos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social-icon container-footer">
        <div>
          <Instagram height={24} width={24} />
        </div>
        <div>
          <Facebook height={24} width={24} />
        </div>
        <div>
          <Twiter height={24} width={24} />
        </div>
      </div>
      <div>
        <Link to="/" className="text-footer">
          ©2009-2020 Todos os direitos reservados Undefined Group
        </Link>
      </div>
    </div>
  );
};

export default Footer;
