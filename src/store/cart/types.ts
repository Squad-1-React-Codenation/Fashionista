import {
  ProductType,
  ProductSizeResponseType,
} from "../../services/products/types";

export enum CartAction {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export interface AddToCartAction {
  type: CartAction.ADD_TO_CART;
  product: ProductCartType;
}

export interface RemoveFromCartAction {
  type: CartAction.REMOVE_FROM_CART;
  id: string;
}

export interface ClearCartAction {
  type: CartAction.CLEAR_CART;
}

export type ProductCartType = {
  details: ProductType;
  quantity: number;
  size: ProductSizeResponseType;
};

export type CartStateType = {
  count: number;
  products: ProductCartType[];
};

export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCartAction;
