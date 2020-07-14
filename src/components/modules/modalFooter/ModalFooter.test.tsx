import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ModalFooter } from ".";

describe("The component ModalFooter", () => {
  const mockedProps = {
    value: 123,
  };

  it("Should render ModalFooter component with the value", () => {
    const ModalFooterComponet = render(<ModalFooter {...mockedProps} />);

    expect(ModalFooterComponet.getAllByText("R$ 1,23")).toBeTruthy();
  });
});
