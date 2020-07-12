import { ProductStateType, ProductActionsTypes, ProductAction } from "./types";

export const initialState: ProductStateType = {
  listing: {
    loading: false,
    error: null,
    products: [],
  },
  currentProduct: {
    loading: false,
    error: null,
    product: null,
    additionalColors: [],
  },
  searchingProduct: {
    loading: false,
    error: null,
    products: [],
  },
};

export const productReducer = (
  state = initialState,
  action: ProductActionsTypes
): ProductStateType => {
  switch (action.type) {
    case ProductAction.FETCH_LISTING_BEGUN: {
      return {
        ...state,
        listing: {
          loading: true,
          error: null,
          products: [],
        },
      };
    }
    case ProductAction.FETCH_LISTING_FAILED: {
      return {
        ...state,
        listing: {
          loading: false,
          error: true,
          products: [],
        },
      };
    }
    case ProductAction.FETCH_LISTING_SUCCEEDED: {
      return {
        ...state,
        listing: {
          loading: false,
          error: false,
          products: action.products,
        },
      };
    }
    case ProductAction.FETCH_SEARCHING_BEGUN: {
      return {
        ...state,
        searchingProduct: {
          loading: true,
          error: null,
          products: [],
        },
      };
    }
    case ProductAction.FETCH_SEARCHING_FAILED: {
      return {
        ...state,
        searchingProduct: {
          loading: false,
          error: true,
          products: [],
        },
      };
    }
    case ProductAction.FETCH_SEARCHING_SUCCEEDED: {
      return {
        ...state,
        searchingProduct: {
          loading: false,
          error: false,
          products: action.products,
        },
      };
    }
    case ProductAction.FETCH_PRODUCT_BEGUN: {
      return {
        ...state,
        currentProduct: {
          loading: true,
          error: null,
          product: null,
          additionalColors: [],
        },
      };
    }
    case ProductAction.FETCH_PRODUCT_FAILED: {
      return {
        ...state,
        currentProduct: {
          loading: false,
          error: true,
          product: null,
          additionalColors: [],
        },
      };
    }
    case ProductAction.FETCH_PRODUCT_SUCCEEDED: {
      return {
        ...state,
        currentProduct: {
          loading: false,
          error: false,
          product: action.product,
          additionalColors: action.additionalColors,
        },
      };
    }
    default:
      return state;
  }
};

export default productReducer;
