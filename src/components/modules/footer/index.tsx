import React from "react";
import { Link } from "react-router-dom";

import { Instagram } from "../../base/iconsocial";
import { Facebook } from "../../base/iconsocial";
import { Twiter } from "../../base/iconsocial";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__rights">
        <div className="footer__primary">
          <div className="footer--infos">
            <h3>{t("about")}</h3>
            <ul className="item--footer">
              <li>
                <Link to="/" className="item__footer-link">
                  {t("brand")}
                </Link>
              </li>
              <li>
                <Link to="/" className="item__footer-link">
                  {t("press")}
                </Link>
              </li>
              <li>
                <Link to="/" className="item__footer-link">
                  {t("guidshop")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer--infos">
            <h3>{t("help")}</h3>
            <ul className="item--footer">
              <li>
                <Link to="/" className="item__footer-link">
                  {t("contactsus")}
                </Link>
              </li>
              <li>
                <Link to="/" className="item__footer-link">
                  {t("shipping")}
                </Link>
              </li>
              <li>
                <Link to="/" className="item__footer-link">
                  {t("returns")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer--infos">
            <h3>{t("info")}</h3>
            <div className="item--footer">
              <li>
                <Link to="/" className="item__footer-link">
                  {t("login")}
                </Link>
              </li>
              <li>
                <Link to="/" className="item__footer-link">
                  {t("orders")}
                </Link>
              </li>
              <li>
                <Link to="/" className="item__footer-link">
                  {t("loyalty")}
                </Link>
              </li>
            </div>
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
        <div className="center-this">
          <div className="text-footer">{t("rights")}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
