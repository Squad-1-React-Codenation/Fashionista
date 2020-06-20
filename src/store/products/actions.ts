import {
  ProductAction,
  ProductActionsTypes,
  AsyncProductThunkAction,
} from "./types";
import { ProductType } from "../../services/types";

export const fetchBegin = (): ProductActionsTypes => ({
  type: ProductAction.FETCH_BEGIN,
});

export const setProducts = (products: ProductType[]): ProductActionsTypes => ({
  type: ProductAction.SET_PRODUCTS,
  products,
});

export const getProducts = (): AsyncProductThunkAction => async (
  dispatch,
  _,
  { productAPI }
): Promise<void> => {
  dispatch(fetchBegin());

  const products = await productAPI("");
  dispatch(setProducts(products));
};
