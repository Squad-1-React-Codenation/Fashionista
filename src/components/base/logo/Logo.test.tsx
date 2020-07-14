import React from "react";
import { render, screen } from "@testing-library/react";

import { Logo } from ".";
import { MemoryRouter } from "react-router-dom";

describe("The component Logo", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AllTheProviders = ({ children }: any) => {
    return <MemoryRouter>{children}</MemoryRouter>;
  };

  const mockedProps = { height: 40, width: 120 };

  it("Should render Logo component passing height and width", () => {
    render(<Logo {...mockedProps} />, {
      wrapper: AllTheProviders,
    });

    expect(screen.getByRole("img")).toHaveAttribute("width", "120");
    expect(screen.getByRole("img")).toHaveAttribute("height", "40");
  });
});
