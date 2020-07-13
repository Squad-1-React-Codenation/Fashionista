import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { SearchInput } from "../searchInput";

describe("The component Search Input", () => {
  const mockedProps = {
    value: "",
    onSearchChange: jest.fn(),
  };

  it("Should render Search component", () => {
    const { getByTitle } = render(<SearchInput {...mockedProps} />);
    const node = getByTitle("Pesquisar produto");
    expect(node.value).toBe("");
  });

  describe("When input changes", () => {
    it("Shoud change the value", () => {
      const onSearchChangeMock = jest.fn();
      const { getByTitle } = render(
        <SearchInput onSearchChange={onSearchChangeMock} value={"Vestido"} />
      );
      const node = getByTitle("Pesquisar produto");
      fireEvent.change(node);
      expect(node.value).toBe("Vestido");
    });
  });
});
