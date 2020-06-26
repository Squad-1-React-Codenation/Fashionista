import {
  ProductAction,
  ProductActionsTypes,
  AsyncProductThunkAction,
} from "./types";
import { ProductType } from "../../services/products/types";

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
  { productsAPI }
): Promise<void> => {
  dispatch(fetchBegin());

  const products = await productsAPI.getCatalog();
  dispatch(setProducts(products));
};
