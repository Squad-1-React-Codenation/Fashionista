import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Instagram, Facebook, Twitter } from ".";

const mockedProps = { height: 24, width: 24 };

describe("The component IconSocial", () => {
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

describe("The component IconSocial will redirect", () => {
  
  it("Should redirect when clicking on Instagram anchor", () => {
    render(<Instagram {...mockedProps} />);
    expect(document.querySelector("a")?.getAttribute("href")).toBe(
      "https://www.instagram.com/app_undefined/?hl=pt-br"
    );
  });

  it("Should redirect when clicking on Facebook anchor", () => {
    render(<Facebook {...mockedProps} />);
    expect(document.querySelector("a")?.getAttribute("href")).toBe(
      "https://www.facebook.com/"
    );
  });

  it("Should redirect when clicking on Twitter anchor", () => {
    render(<Twitter {...mockedProps} />);
    expect(document.querySelector("a")?.getAttribute("href")).toBe(
      "https://twitter.com/"
    );
  });
});
