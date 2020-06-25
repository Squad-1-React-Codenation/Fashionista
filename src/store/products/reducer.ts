import { ProductStateType, ProductActionsTypes, ProductAction } from "./types";

const initialState: ProductStateType = {
  loading: false,
  listing: [],
};

const productReducer = (
  state = initialState,
  action: ProductActionsTypes
): ProductStateType => {
  switch (action.type) {
    case ProductAction.FETCH_BEGIN: {
      return { ...state, loading: true };
    }
    case ProductAction.SET_PRODUCTS: {
      return { ...state, listing: action.products, loading: false };
    }
    default:
      return state;
  }
};

export default productReducer;
