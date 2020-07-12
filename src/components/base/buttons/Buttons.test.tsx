import React from "react";
import { render, screen } from "@testing-library/react";

import { Button, SquareSharpButton, LargeButton, SizeInfoButton } from ".";

describe("The component <Button />", () => {
  const mockButton = {
    children: "component",
    disabled: true,
    color: "red",
    modifier: "large",
    sizes: "M",
  };
  it("Should render Button component with children", () => {
    render(<Button {...mockButton}>Click Me</Button>);
    expect(screen.findByText("component")).toBeTruthy();
  });
});

describe("The component <SquareSharpButton />", () => {
  it("Should render SquareSharpButton component", () => {
    render(<SquareSharpButton />);
    expect(screen.getByTestId("squareSharpButton")).toBeTruthy();
  });
});

describe("The component <SizeInfoButton />", () => {
  it("Should render SizeInfoButton component", () => {
    render(<SizeInfoButton />);
    expect(screen.getByTestId("sizeInfoButton")).toBeTruthy();
  });
});

describe("The component <LargeButton />", () => {
  it("Should render LargeButton component", () => {
    render(<LargeButton />);
    expect(screen.getByTestId("largeButton")).toBeTruthy();
  });
});
