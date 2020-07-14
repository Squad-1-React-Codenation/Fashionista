import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { Modal } from "../modal";

afterEach(cleanup);

describe("The component Modal", () => {
  const modalRoot = document.createElement("div");
  modalRoot.id = "modal-root";
  document.body.appendChild(modalRoot);

  const mockedProps = {
    isOpen: true,
    title: "Modal title",
    children: [],
    close: jest.fn(),
  };

  it("Should render Modal component with the title", async () => {
    const title = "Shiny Modal";

    const { getByText } = render(<Modal {...mockedProps} title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });

  describe("When the button is clicked", () => {
    it("Should call the close props", () => {
      const closeMock = jest.fn();

      const { getByRole } = render(
        <Modal {...mockedProps} close={closeMock} />
      );

      expect(closeMock).not.toBeCalled();

      fireEvent.click(getByRole("button"));

      expect(closeMock).toBeCalledTimes(1);
    });
  });

  describe("When props isOpen is true", () => {
    it("Should have body overflow hidden", () => {
      render(<Modal {...mockedProps} isOpen={true} />);

      expect(document.body.style.overflow).toBe("hidden");
    });
  });

  describe("When props isOpen is false", () => {
    it("Should have body overflow inherit", () => {
      render(<Modal {...mockedProps} isOpen={false} />);

      expect(document.body.style.overflow).toBe("inherit");
    });
  });
});
