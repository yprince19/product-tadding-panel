import { combineReducers } from "redux";
import products from "./products";
import state from "./state";
import get from "./get";
import post from "./post";

export default combineReducers({
  products,
  state,
  get,
  post
});
