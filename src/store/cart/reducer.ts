import { CartStateType, CartActionTypes, CartAction } from "./types";

const initialState: CartStateType = {
  count: 0,
  listing: [],
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartStateType => {
  switch (action.type) {
    case CartAction.ADD_TO_CART: {
      const { listing } = state;
      listing.push(action.product);
      return { listing, count: listing.length };
    }
    case CartAction.REMOVE_FROM_CART: {
      const listing = state.listing.filter(
        (product) => product.style !== action.id
      );
      return { listing, count: listing.length };
    }
    case CartAction.CLEAR_CART: {
      return { listing: [], count: 0 };
    }
    default:
      return state;
  }
};

export default cartReducer;
