import React from "react";
import { render, screen } from "@testing-library/react";

import {
  ShoppingCartIcon,
  SearchIcon,
  BackArrowIcon,
  MinusIcon,
  PlusIcon,
} from ".";

describe("The component Icon", () => {
  it("Should render ShoppingCartIcon component", async () => {
    render(<ShoppingCartIcon />);
    expect(screen.getByTitle("Carrinho")).toBeInTheDocument();
  });

  it("Should render SearchIcon component", async () => {
    render(<SearchIcon />);
    expect(screen.getByTitle("Pesquisar")).toBeInTheDocument();
  });

  it("Should render BackArrowIcon component", async () => {
    render(<BackArrowIcon />);
    expect(screen.getByTitle("Voltar")).toBeInTheDocument();
  });

  it("Should render MinusIcon component", async () => {
    render(<MinusIcon />);
    expect(screen.getByTitle("Diminuir")).toBeInTheDocument();
  });

  it("Should render PlusIcon component", async () => {
    render(<PlusIcon />);
    expect(screen.getByTitle("Aumentar")).toBeInTheDocument();
  });
});
