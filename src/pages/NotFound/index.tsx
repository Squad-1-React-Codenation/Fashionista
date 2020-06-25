import React from "react";
import { useTranslation } from "react-i18next";
import pageNotFound from "../../assets/page-not-found.png";
import { LargeButton } from "../../components/base/buttons";
import { useHistory } from "react-router-dom";

export const NotFound = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const buttonHandler = () => history.push("/");

  return (
    <div className="container not-found">
      <img src={pageNotFound} alt="" />
      <h1>Opss!</h1>
      <h3 className="not-found__text">{t("notFoundPage")}</h3>
      <LargeButton onClick={buttonHandler}>
        {t("notFoundButtonMessage")}
      </LargeButton>
    </div>
  );
};

export default NotFound;
