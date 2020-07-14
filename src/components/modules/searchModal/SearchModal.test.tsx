import React from "react";
import { SearchModal } from ".";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import store from "../../../store";

import { fetchSearchingSucceed } from "../../../store/products/actions";
import { mockedProducts } from "../../../services/products/__mocks__";
import { parseProduct } from "../../../services/products";
import { MemoryRouter } from "react-router-dom";

const productsMock = mockedProducts.map(parseProduct);

jest.useFakeTimers();

describe("The <SearchModal/> Component", () => {
  const modalRoot = document.createElement("div");
  modalRoot.id = "modal-root";
  document.body.appendChild(modalRoot);

  const mockedProps = { isOpen: false, close: jest.fn() };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapper = ({ children }: any) => (
    <Provider store={store}>
      <MemoryRouter>
        {children}
        <div id="modal-root" />
      </MemoryRouter>
    </Provider>
  );

  afterEach(() => {
    global.fetch = jest.fn();
    jest.resetAllMocks();
  });

  it("Should call the timeout when the input change", () => {
    render(<SearchModal {...mockedProps} />, { wrapper });

    expect(setTimeout).toBeCalledTimes(1);

    act(() => {
      fireEvent.change(screen.getByTitle("Pesquisar produto"), {
        target: { value: "Regata" },
      });
    });

    expect(setTimeout).toBeCalledTimes(2);
  });

  it("Should fetch after the input changed and timeout as been fired", () => {
    render(<SearchModal {...mockedProps} />, { wrapper });

    expect(setTimeout).toBeCalledTimes(1);

    act(() => {
      fireEvent.change(screen.getByTitle("Pesquisar produto"), {
        target: { value: "Regata" },
      });
    });

    expect(global.fetch).not.toBeCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(global.fetch).toBeCalledTimes(1);
  });

  it("Should call close when the button is clicked", () => {
    const closeMock = jest.fn();

    render(<SearchModal {...mockedProps} close={closeMock} />, { wrapper });

    expect(closeMock).not.toBeCalled();

    fireEvent.click(screen.getByRole("button", { name: "Voltar" }));

    expect(closeMock).toBeCalledTimes(1);
  });

  it("Should render a disclamer when theres no results", () => {
    render(<SearchModal {...mockedProps} />, { wrapper });

    store.dispatch(fetchSearchingSucceed([]));

    expect(screen.getByText("noItem")).toBeInTheDocument();
  });

  it("Should render a product list when theres results on store", () => {
    render(<SearchModal {...mockedProps} />, { wrapper });

    act(() => {
      store.dispatch(fetchSearchingSucceed(productsMock.slice(0, 2)));
    });

    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
