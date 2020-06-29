import {
  ProductAction,
  ProductActionsTypes,
  AsyncProductThunkAction,
} from "./types";
import { ProductType } from "../../services/products/types";

export const fetchListingBegun = (): ProductActionsTypes => ({
  type: ProductAction.FETCH_LISTING_BEGUN,
});

export const fetchListingFailed = (): ProductActionsTypes => ({
  type: ProductAction.FETCH_LISTING_FAILED,
});

export const fetchListingSucceed = (
  products: ProductType[]
): ProductActionsTypes => ({
  type: ProductAction.FETCH_LISTING_SUCCEEDED,
  products,
});

export const getListing = (): AsyncProductThunkAction => async (
  dispatch,
  _,
  { productsAPI }
): Promise<void> => {
  dispatch(fetchListingBegun());

  try {
    const products = await productsAPI.getCatalog();
    dispatch(fetchListingSucceed(products));
  } catch (error) {
    dispatch(fetchListingFailed());
  }
};

export const fetchProductBegun = (): ProductActionsTypes => ({
  type: ProductAction.FETCH_PRODUCT_BEGUN,
});

export const fetchProductFailed = (): ProductActionsTypes => ({
  type: ProductAction.FETCH_PRODUCT_FAILED,
});

export const fetchProductSucceeced = (
  product: ProductType,
  additionalColors: ProductType[]
): ProductActionsTypes => ({
  type: ProductAction.FETCH_PRODUCT_SUCCEEDED,
  product,
  additionalColors,
});

export const getProduct = (id: string): AsyncProductThunkAction => async (
  dispatch,
  _,
  { productsAPI }
): Promise<void> => {
  dispatch(fetchProductBegun());
  try {
    const { product, additionalColors } = await productsAPI.getProduct(id);
    if (!product) {
      throw new Error("NOT FOUND");
    }
    dispatch(fetchProductSucceeced(product, additionalColors || []));
  } catch {
    dispatch(fetchProductFailed());
  }
};
