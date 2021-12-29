import { combineReducers } from "redux";
import state from "./state";
import get from "./get";
import post from "./post";

export default combineReducers({
  state,
  get,
  post
});
