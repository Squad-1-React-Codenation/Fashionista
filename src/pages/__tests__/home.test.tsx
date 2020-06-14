import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "../Home/index";
import "../../i18n";

jest.mock("../../services/productAPI");

describe("HomePage", () => {
  it("Should render the products", async () => {
    render(<Home />);

    expect(
      await screen.findByText("MOCKED VESTIDO TRANSPASSE BOW")
    ).toBeTruthy();
  });
});
