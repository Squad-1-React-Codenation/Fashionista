import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import ProductsAPI from "../services/products";
import productReducer from "./products/reducer";

const rootReducer = combineReducers({ products: productReducer });

const thunkExtraArguments = { productsAPI: new ProductsAPI() };
export type ThunkExtraArguments = typeof thunkExtraArguments;

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(thunkExtraArguments))
  )
);

export type StoreState = ReturnType<typeof rootReducer>;

export default store;
