import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import { Countries } from "../countries";

afterEach(cleanup);

describe("The component Countries", () => {
  describe("When the Brazil button is clicked", () => {
    it("Should change language to portuguese-brazil", () => {
      const changeLanguageMock = jest.fn();
      render(<Countries />);
      expect(changeLanguageMock).not.toBeCalled();

      fireEvent.click(screen.getByTestId("brazil"));
    });
  });
  describe("When the Spanish button is clicked", () => {
    it("Should change language to spanish", () => {
      const changeLanguageMock = jest.fn();
      render(<Countries />);
      expect(changeLanguageMock).not.toBeCalled();

      fireEvent.click(screen.getByTestId("spanish"));
    });
  });
  describe("When the English button is clicked", () => {
    it("Should change language to english", () => {
      const changeLanguageMock = jest.fn();
      render(<Countries />);
      expect(changeLanguageMock).not.toBeCalled();

      fireEvent.click(screen.getByTestId("english"));
    });
  });
});
