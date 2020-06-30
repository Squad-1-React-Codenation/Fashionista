import { CartActionTypes, CartAction, ProductCartType } from "./types";

export const addToCart = (product: ProductCartType): CartActionTypes => ({
  type: CartAction.ADD_TO_CART,
  product,
});

export const removeFromCart = (id: string): CartActionTypes => ({
  type: CartAction.REMOVE_FROM_CART,
  id,
});

export const clearCart = (): CartActionTypes => ({
  type: CartAction.CLEAR_CART,
});
