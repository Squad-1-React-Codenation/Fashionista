import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SearchInput } from "../searchInput";

describe("The component Search Input", () => {
  const mockedProps = {
    value: "",
    onSearchChange: jest.fn(),
  };

  it("Should render Search component", () => {
    render(<SearchInput {...mockedProps} />);
    expect(screen.getByTitle("Pesquisar produto")).toHaveValue("");
  });

  describe("When input changes", () => {
    it("Shoud change the value", () => {
      const onSearchChangeMock = jest.fn();
      render(
        <SearchInput onSearchChange={onSearchChangeMock} value="Vestido" />
      );
      fireEvent.change(screen.getByTitle("Pesquisar produto"), {
        target: { value: "Vestido" },
      });
      expect(screen.getByTitle("Pesquisar produto")).toHaveValue("Vestido");
    });
  });
});
