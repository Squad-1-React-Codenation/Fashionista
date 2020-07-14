import {
  CartStateType,
  CartActionTypes,
  CartAction,
  ProductCartType,
} from "./types";

const initialState: CartStateType = {
  count: 0,
  value: 0,
  products: [],
};

const findProduct = (
  searchedProduct: ProductCartType,
  products: ProductCartType[]
): ProductCartType | undefined =>
  products.find(
    (product) =>
      product.details.codeColor === searchedProduct.details.codeColor &&
      product.size.size === searchedProduct.size.size
  );

export const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartStateType => {
  switch (action.type) {
    case CartAction.ADD_TO_CART: {
      const { products, count, value } = { ...state };

      const product = findProduct(action.product, products);

      product
        ? (product.quantity = product.quantity + 1)
        : products.push(action.product);

      return {
        products,
        count: count + 1,
        value: value + action.product.details.actualPrice,
      };
    }
    case CartAction.INCREASE_QUANTITY: {
      const { products, count, value } = { ...state };

      const product = findProduct(action.product, products);
      if (!product) {
        return { ...state };
      }

      product.quantity = product.quantity + 1;

      return {
        products,
        count: count + 1,
        value: value + action.product.details.actualPrice,
      };
    }
    case CartAction.DECREASE_QUANTITY: {
      const { products, count, value } = { ...state };

      const product = findProduct(action.product, products);
      if (!product) {
        return state;
      }

      const newQuantity = product.quantity - 1;

      newQuantity > 0
        ? (product.quantity = newQuantity)
        : products.splice(products.indexOf(product), 1);

      return {
        products,
        count: count - 1,
        value: value - product.details.actualPrice,
      };
    }
    case CartAction.REMOVE_FROM_CART: {
      const { products, count, value } = { ...state };

      const product = findProduct(action.product, state.products);
      if (!product) {
        return state;
      }

      products.splice(products.indexOf(product), 1);

      return {
        products,
        count: count - product.quantity,
        value: value - product.quantity * product.details.actualPrice,
      };
    }
    case CartAction.CLEAR_CART: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default cartReducer;
