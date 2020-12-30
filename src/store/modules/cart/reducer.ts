import { Reducer } from "redux";
import { ICardState } from "./types";

const INITIAL_STATE: ICardState = {
  items: [],
};

const cart: Reducer<ICardState> = () => {
  return INITIAL_STATE;
};

export default cart;
