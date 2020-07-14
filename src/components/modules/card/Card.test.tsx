import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Card } from "../card";

describe("The component Card", () => {
  const mockedProps = {
    product: {
      name: "MOCKED VESTIDO TRANSPASSE BOW",
      style: "20002605",
      codeColor: "20002605_613",
      colorSlug: "tapecaria",
      color: "TAPEÇARIA",
      onSale: false,
      regularPrice: 19990,
      actualPrice: 15990,
      discountPercentage: 20,
      installments: {
        quantity: 3,
        price: 6663,
      },
      image:
        "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
      sizes: [],
    },

    onClick: jest.fn(),
  };

  it("Should render Card component without sale ", () => {
    const { getByText } = render(<Card {...mockedProps} />);

    expect(screen.getByRole("img")).toBeTruthy();
    expect(getByText("MOCKED VESTIDO TRANSPASSE BOW"));
    expect(getByText("R$ 199,90"));
  });

  it("Should render Card component on sale ", () => {
    const mockedProps = {
      product: {
        name: "MOCKED VESTIDO TRANSPASSE BOW",
        style: "20002605",
        codeColor: "20002605_613",
        colorSlug: "tapecaria",
        color: "TAPEÇARIA",
        onSale: true,
        regularPrice: 19990,
        actualPrice: 15990,
        discountPercentage: 20,
        installments: {
          quantity: 3,
          price: 6663,
        },
        image:
          "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
        sizes: [],
      },

      onClick: jest.fn(),
    };
    const { getByText } = render(<Card {...mockedProps} />);

    expect(screen.getByRole("img")).toBeTruthy();
    expect(getByText("MOCKED VESTIDO TRANSPASSE BOW"));
    expect(getByText("R$ 159,90"));
    expect(getByText("R$ 199,90"));
  });

  describe("When the card is clicked", () => {
    it("Should call the onClick props", () => {
      const clickMock = jest.fn();
      const { getByRole } = render(
        <Card {...mockedProps} onClick={clickMock} />
      );

      expect(clickMock).not.toBeCalled();
      fireEvent.click(getByRole("button"));
      expect(clickMock).toBeCalledTimes(1);
    });
  });

  describe("When enter is pressed", () => {
    it("Should call the onClick props", () => {
      const clickMock = jest.fn();
      const { getByRole } = render(
        <Card {...mockedProps} onClick={clickMock} />
      );

      expect(clickMock).not.toBeCalled();
      fireEvent.keyDown(getByRole("button"), { key: "Enter", code: "Enter" });
      expect(clickMock).toBeCalledTimes(1);
    });
  });
});
