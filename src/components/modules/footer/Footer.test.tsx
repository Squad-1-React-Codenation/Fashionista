import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Footer from "./index";

describe("The component Footer", () => {
  it("Should render Footer component", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByTestId("Footer")).toBeInTheDocument();
  });
});
