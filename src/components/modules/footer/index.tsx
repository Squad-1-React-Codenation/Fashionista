import React from "react";
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
              <a>A Marca</a>
            </li>
            <li>
              <a>Imprensa</a>
            </li>
            <li>
              <a>Guid Shop</a>
            </li>
          </ul>
        </div>
        <div className="footer--infos">
          <h3>Ajuda</h3>
          <ul className="item--footer">
            <li>
              <a>Atendimento</a>
            </li>
            <li>
              <a>Frete</a>
            </li>
            <li>
              <a>Devolução</a>
            </li>
          </ul>
        </div>
        <div className="footer--infos">
          <h3>Conta</h3>
          <ul className="item--footer">
            <li>
              <a>Minha Conta</a>
            </li>
            <li>
              <a>Pedidos</a>
            </li>
            <li>
              <a>Meus créditos</a>
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
      <div className="">
        <a className="text-footer">
          ©2009-2020 Todos os direitos reservados Undefined Group
        </a>
      </div>
    </div>
  );
};

export default Footer;
