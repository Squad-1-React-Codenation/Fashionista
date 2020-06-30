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
      const { products } = state;
      products.push(action.product);
      return { products, count: products.length };
    }
    case CartAction.REMOVE_FROM_CART: {
      const products = state.products.filter(
        (product) => product.product.style !== action.id
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
