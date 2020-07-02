import {
  ProductType,
  ProductSizeResponseType,
} from "../../services/products/types";

export enum CartAction {
  ADD_TO_CART = "ADD_TO_CART",
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export interface AddToCartAction {
  type: CartAction.ADD_TO_CART;
  product: ProductCartType;
}

export interface IncreaseQuantityAction {
  type: CartAction.INCREASE_QUANTITY;
  product: ProductCartType;
}

export interface DecreaseQuantityAction {
  type: CartAction.DECREASE_QUANTITY;
  product: ProductCartType;
}

export interface RemoveFromCartAction {
  type: CartAction.REMOVE_FROM_CART;
  product: ProductCartType;
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
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | RemoveFromCartAction
  | ClearCartAction;
