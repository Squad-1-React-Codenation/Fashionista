import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productAPI } from "../services/productAPI";

import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({ products: productReducer, cart: cartReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ productAPI })))
);

export type StoreState = ReturnType<typeof rootReducer>;

export default store;
