import {
  ProductType,
  ProductSizeResponseType,
} from "../../services/products/types";

export enum ProductAction {
  FETCH_LISTING_BEGUN = "FETCH_LISTING_BEGUN",
  FETCH_LISTING_FAILED = "FETCH_LISTING_FAILED",
  FETCH_LISTING_SUCCEEDED = "FETCH_LISTING_SUCCEEDED",

  FETCH_SEARCHING_BEGUN = "FETCH_SEARCHING_BEGUN",
  FETCH_SEARCHING_FAILED = "FETCH_SEARCHING_FAILED",
  FETCH_SEARCHING_SUCCEEDED = "FETCH_SEARCHING_SUCCEEDED",

  FETCH_PRODUCT_BEGUN = "FETCH_PRODUCT_BEGUN",
  FETCH_PRODUCT_FAILED = "FETCH_PRODUCT_FAIL",
  FETCH_PRODUCT_SUCCEEDED = "FETCH_PRODUCT_SUCCEEDED",
}

export interface FetchListingBegunAction {
  type: ProductAction.FETCH_LISTING_BEGUN;
}

export interface FetchListingFailedAction {
  type: ProductAction.FETCH_LISTING_FAILED;
}

export interface FetchListingSucceededAction {
  type: ProductAction.FETCH_LISTING_SUCCEEDED;
  products: ProductType[];
}

export interface FetchSearchingBegunAction {
  type: ProductAction.FETCH_SEARCHING_BEGUN;
}

export interface FetchSearchingFailedAction {
  type: ProductAction.FETCH_SEARCHING_FAILED;
}

export interface FetchSearchingSucceededAction {
  type: ProductAction.FETCH_SEARCHING_SUCCEEDED;
  products: ProductType[];
}

export interface FetchProductBegunAction {
  type: ProductAction.FETCH_PRODUCT_BEGUN;
}

export interface FetchProductFailedAction {
  type: ProductAction.FETCH_PRODUCT_FAILED;
}

export interface FetchProductSucceededAction {
  type: ProductAction.FETCH_PRODUCT_SUCCEEDED;
  product: ProductType;
  additionalColors: ProductType[];
}

export type ProductStateType = {
  listing: {
    loading: boolean;
    error: boolean | null;
    products: ProductType[];
  };
  currentProduct: {
    loading: boolean;
    error: boolean | null;
    product: ProductType | null;
    additionalColors: ProductType[];
  };
  searchingProduct: {
    loading: boolean;
    error: boolean | null;
    products: ProductType[];
  };
};

export type ProductSearchType = {
  details: ProductType;
  quantity: number;
  size: ProductSizeResponseType;
};

export type ProductActionsTypes =
  | FetchProductBegunAction
  | FetchProductFailedAction
  | FetchProductSucceededAction
  | FetchListingBegunAction
  | FetchListingFailedAction
  | FetchListingSucceededAction
  | FetchSearchingBegunAction
  | FetchSearchingFailedAction
  | FetchSearchingSucceededAction;
