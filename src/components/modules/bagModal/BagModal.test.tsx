import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { BagModal } from "../bagModal";
import { initialState as products } from "../../../store/products/reducer";
import * as Actions from "../../../store/cart/actions";
import i18n from "../../../i18n";

import {
  mockedProduct,
  mockedProductSize,
} from "../../../services/products/__mocks__";
import { StoreState } from "../../../store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const implementMockedStore = (mockedStore: StoreState) => {
  (useSelector as jest.Mock).mockImplementation((callback) => {
    return callback(mockedStore);
  });
};

const renderComponent = () => {
  const mockedProps = {
    isOpen: true,
    close: jest.fn(),
  };
  return render(
    <BrowserRouter>
      <BagModal {...mockedProps} />
    </BrowserRouter>
  );
};

describe("The component BagModal", () => {
  const modalRoot = document.createElement("div");
  modalRoot.id = "modal-root";
  document.body.appendChild(modalRoot);

  const mockedStore: StoreState = {
    products,
    cart: {
      count: 1,
      products: [
        {
          details: mockedProduct,
          quantity: 1,
          size: mockedProductSize,
        },
      ],
      value: 199.9,
    },
  };

  afterEach(() => {
    (useSelector as jest.Mock).mockClear();
  });

  it("Should render the product list when it isn't empty", async () => {
    implementMockedStore(mockedStore);

    const { getByTestId } = renderComponent();

    expect(getByTestId("bagList")).toBeTruthy();
  });

  it("Should render the label nothingHere when when the product list is empty", async () => {
    implementMockedStore({
      ...mockedStore,
      cart: {
        count: 0,
        products: [],
        value: 0,
      },
    });

    const { getByTestId } = renderComponent();
    expect(getByTestId("bagEmptyList")).toBeTruthy();
  });

  it("Should dispatch an action to remove item from cart when remove button is clicked", () => {
    implementMockedStore(mockedStore);
    jest.spyOn(Actions, "removeFromCart");

    const { getByText } = renderComponent();

    fireEvent.click(getByText(("removeItem")));

    expect(Actions.removeFromCart).toHaveBeenCalledTimes(1);
    expect(Actions.removeFromCart).toHaveBeenCalledWith(
      mockedStore.cart.products[0]
    );
  });

  it("Should dispatch an action to increase the quantity of the product in the cart when plus button is clicked", () => {
    implementMockedStore(mockedStore);
    jest.spyOn(Actions, "increaseQuantity");

    const { getByTitle } = renderComponent();

    fireEvent.click(getByTitle("Aumentar"));

    expect(Actions.increaseQuantity).toHaveBeenCalledTimes(1);
    expect(Actions.increaseQuantity).toHaveBeenCalledWith(
      mockedStore.cart.products[0]
    );
  });

  it("Should dispatch an action to decrease the quantity of the product in the cart when minus button is clicked", () => {
    implementMockedStore(mockedStore);
    jest.spyOn(Actions, "decreaseQuantity");

    const { getByTitle } = renderComponent();

    fireEvent.click(getByTitle("Diminuir"));

    expect(Actions.decreaseQuantity).toHaveBeenCalledTimes(1);
    expect(Actions.decreaseQuantity).toHaveBeenCalledWith(
      mockedStore.cart.products[0]
    );
  });
});
