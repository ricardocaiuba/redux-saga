import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules/rootReducer";
import { ICardState } from "./modules/cart/types";

export interface IState {
  cart: ICardState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
