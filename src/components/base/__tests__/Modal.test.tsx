import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import { Modal } from "../modal";

afterEach(cleanup);

describe("The component Modal", () => {
  const rootElement = document.getElementById("root");

  const mockModal = {
    isOpen: true,
    title: 'Modal title',
    children: 'content'
  };


  it("Should render Modal component", async () => {
    const mockCloseModal = jest.fn();
    

    const {baseElement} = render(
      <Modal 
        isOpen={mockModal.isOpen}
        title={mockModal.title}
        close={mockCloseModal}
      >
        {mockModal.children}
      </Modal>,
      {container: document.body}
    );

    expect(baseElement).toMatchSnapshot()

    // expect(await screen.findByTestId("modal")).toBeTruthy();
  });
});