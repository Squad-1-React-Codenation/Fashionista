import React from "react";
import { render, screen } from "@testing-library/react";

import {
  ShoppingCartIcon,
  SearchIcon,
  BackArrowIcon,
  MinusIcon,
  PlusIcon
} from "../icons";

describe("The component Icon", () => {
  it("Should render ShoppingCartIcon component", async () => {
    render(<ShoppingCartIcon />);
    expect(await screen.findByTestId("shoppingCartIcon")).toBeTruthy();
  });

  it("Should render SearchIcon component", async () => {
    render(<SearchIcon />);
    expect(await screen.findByTestId("searchIcon")).toBeTruthy();
  });

  it("Should render BackArrowIcon component", async () => {
    render(<BackArrowIcon />);
    expect(await screen.findByTestId("backArrowIcon")).toBeTruthy();
  });

  it("Should render MinusIcon component", async () => {
    render(<MinusIcon />);
    expect(await screen.findByTestId("minusIcon")).toBeTruthy();
  });

  it("Should render PlusIcon component", async () => {
    render(<PlusIcon />);
    expect(await screen.findByTestId("plusIcon")).toBeTruthy();
  });
});
