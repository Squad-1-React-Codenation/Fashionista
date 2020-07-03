import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import ProductsAPI from "../services/products";
import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import { ProductActionsTypes } from "./products/types";
import { CartActionTypes } from "./cart/types";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

function getPreloadedState(): StoreState {
  const rawState = localStorage.getItem("redux");
  return rawState ? JSON.parse(rawState) : {};
}

const thunkExtraArguments = { productsAPI: new ProductsAPI() };
export type ThunkExtraArguments = typeof thunkExtraArguments;

export type AsyncThunkAction = ThunkAction<
  Promise<void>,
  StoreState,
  ThunkExtraArguments,
  ActionStoreTypes
>;

export type SyncThunkAction = ThunkAction<
  void,
  StoreState,
  ThunkExtraArguments,
  ActionStoreTypes
>;

const store = createStore(
  rootReducer,
  getPreloadedState(),
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(thunkExtraArguments))
  )
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let debounceTimer: any;
store.subscribe(() => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(
    () => localStorage.setItem("redux", JSON.stringify(store.getState())),
    window.location.hostname === "localhost" ? 100 : 1000
  );
});

export type ActionStoreTypes = ProductActionsTypes | CartActionTypes;

export type StoreState = ReturnType<typeof rootReducer>;

export default store;
