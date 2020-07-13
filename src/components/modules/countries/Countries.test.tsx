import React from "react";
import i18n from "../../../i18n";
import { screen, render, fireEvent } from "@testing-library/react";

jest.mock("../../../i18n");

import { Countries } from "../countries";

describe("The component Countries", () => {
  beforeEach(() => {
    i18n.changeLanguage = jest.fn();
  });
  describe("When the Spanish button is clicked", () => {
    it("Should call change language with 'es'", () => {
      render(<Countries />);
      expect(i18n.changeLanguage).not.toBeCalled();

      fireEvent.click(screen.getByRole("button", { name: "Mexico" }));

      expect(i18n.changeLanguage).toBeCalledWith("es");
      expect(i18n.changeLanguage).toBeCalledTimes(1);
    });
  });

  describe("When the Spanish button is clicked", () => {
    it("Should call change language with 'pt-BR'", () => {
      render(<Countries />);
      expect(i18n.changeLanguage).not.toBeCalled();

      fireEvent.click(screen.getByRole("button", { name: "Brasil" }));

      expect(i18n.changeLanguage).toBeCalledWith("pt-BR");
      expect(i18n.changeLanguage).toBeCalledTimes(1);
    });
  });

  describe("When the Spanish button is clicked", () => {
    it("Should call change language with 'en'", () => {
      render(<Countries />);
      expect(i18n.changeLanguage).not.toBeCalled();

      fireEvent.click(
        screen.getByRole("button", { name: "Unites States of America" })
      );

      expect(i18n.changeLanguage).toBeCalledWith("en");
      expect(i18n.changeLanguage).toBeCalledTimes(1);
    });
  });
});
