import React from "react";
import { render, screen } from "@testing-library/react";

import { Logo } from "../logo";

describe("The component Logo", () => {
  const mockLogo = { height: 40, width: 120};

  it("Should render Logo component passing height and width", async () => {
    render(<Logo height={mockLogo.height} width={mockLogo.width} />);
    expect(await screen.findByTestId("logo")).toBeTruthy();
  });
});