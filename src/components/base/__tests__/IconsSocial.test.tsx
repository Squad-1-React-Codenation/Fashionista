import React from "react";
import { render, screen } from "@testing-library/react";

import {
  Instagram,
  Facebook,
  Twitter
} from "../iconSocial";

describe("The component IconSocial", () => {
  const mockIcon = { height: 24, width: 24};

  it("Should render Instagram component passing height and width", async () => {
    render(<Instagram height={mockIcon.height} width={mockIcon.width} />);
    expect(await screen.findByTestId("instagram")).toBeTruthy();
  });

  it("Should render Facebook component passing height and width", async () => {
    render(<Facebook height={mockIcon.height} width={mockIcon.width} />);
    expect(await screen.findByTestId("facebook")).toBeTruthy();
  });

  it("Should render Twitter component passing height and width", async () => {
    render(<Twitter height={mockIcon.height} width={mockIcon.width} />);
    expect(await screen.findByTestId("twitter")).toBeTruthy();
  });
});