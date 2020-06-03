import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "../Home/index";

jest.mock("../../services/productAPI");

describe("HomePage", () => {
  it("Should render and show Home", async () => {
    render(<Home />);

    expect(screen.getByText("Home")).toBeTruthy();
  });

  it("Should render the products", async () => {
    render(<Home />);

    expect(
      await screen.findByText("MOCKED VESTIDO TRANSPASSE BOW")
    ).toBeTruthy();
  });
});
