import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import {
  Button,
  SquareSharpButton,
  LargeButton,
  SizeInfoButton,
} from "../buttons";

describe("The component <Button />", () => {
  const mockButton = {
    children: "component",
    disabled: true,
    color: "red",
    modifier: "large",
    sizes: "M",
  };
  it("Should render Button component with children", async () => {
    render(<Button {...mockButton}>Click Me</Button>);
    expect(await screen.findByText("component")).toBeTruthy();
  });
});

describe("The component <SquareSharpButton />", () => {
  it("Should render SquareSharpButton component", async () => {
    render(<SquareSharpButton />);
    expect(await screen.findByTestId("squareSharpButton")).toBeTruthy();
  });
});

describe("The component <SizeInfoButton />", () => {
  it("Should render SizeInfoButton component", async () => {
    render(<SizeInfoButton />);
    expect(await screen.findByTestId("sizeInfoButton")).toBeTruthy();
  });
});

describe("The component <LargeButton />", () => {
  it("Should render LargeButton component", async () => {
    render(<LargeButton />);
    expect(await screen.findByTestId("largeButton")).toBeTruthy();
  });
});
