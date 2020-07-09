import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Instagram, Facebook, Twitter } from ".";

describe("The component IconSocial", () => {
  const mockedProps = { height: 24, width: 24 };

  it("Should render Instagram component passing height and width", () => {
    render(<Instagram {...mockedProps} />);
    expect(screen.getByAltText("Instagram")).toBeInTheDocument();
  });

  it("Should render Facebook component passing height and width", () => {
    render(<Facebook {...mockedProps} />);
    expect(screen.getByAltText("Facebook")).toBeInTheDocument();
  });

  it("Should render Twitter component passing height and width", () => {
    render(<Twitter {...mockedProps} />);
    expect(screen.getByAltText("Twitter")).toBeInTheDocument();
  });
});
