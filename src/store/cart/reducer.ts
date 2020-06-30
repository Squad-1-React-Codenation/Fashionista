import { CartStateType, CartActionTypes, CartAction } from "./types";

const initialState: CartStateType = {
  count: 0,
  products: [],
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartStateType => {
  switch (action.type) {
    case CartAction.ADD_TO_CART: {
      const { products, count } = state;

      const index = products.findIndex((product) => {
        return (
          product.details.style === action.product.details.style &&
          product.size.size === action.product.size.size
        );
      });

      if (index >= 0) products[index].quantity = products[index].quantity + 1;
      else {
        products.push(action.product);
      }

      return { products, count: count + 1 };
    }
    case CartAction.REMOVE_FROM_CART: {
      const products = state.products.filter(
        (product) => product.size.sku !== action.id
      );
      return { products, count: products.length };
    }
    case CartAction.CLEAR_CART: {
      return { products: [], count: 0 };
    }
    default:
      return state;
  }
};

export default cartReducer;
