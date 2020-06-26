import { ProductType } from "../../services/products/types";

export enum CartAction {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
};

export interface AddToCartAction {
  type: CartAction.ADD_TO_CART;
  product: ProductType;
};

export interface RemoveFromCartAction {
  type: CartAction.REMOVE_FROM_CART;
  id: string;
};

export interface ClearCartAction {
  type: CartAction.CLEAR_CART;
};

export type CartStateType = {
  count: number;
  listing: ProductType[];
};

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | ClearCartAction;