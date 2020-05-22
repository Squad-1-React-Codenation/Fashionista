import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "../Home/index";

describe("HomePage", () => {
  it("Should render and show Home", () => {
    render(<Home />);

    expect(screen.getByText("Home")).toBeTruthy();
  });
});
