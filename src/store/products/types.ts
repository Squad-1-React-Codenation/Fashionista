import { ThunkAction } from "redux-thunk";
import { ProductType } from "./../../services/types.d";
import { productAPI } from "../../services/productAPI";

export enum ProductAction {
  FETCH_BEGIN = "FETCH_BEGIN",
  SET_PRODUCTS = "SET_PRODUCTS",
}

export interface FetchBeginAction {
  type: ProductAction.FETCH_BEGIN;
}

export interface SetProductsAction {
  type: ProductAction.SET_PRODUCTS;
  products: ProductType[];
}

export type AsyncProductThunkAction = ThunkAction<
  Promise<void>,
  ProductStateType,
  { productAPI: typeof productAPI },
  ProductActionsTypes
>;

export type ProductStateType = {
  loading: boolean;
  listing: ProductType[];
};

export type ProductActionsTypes = FetchBeginAction | SetProductsAction;
