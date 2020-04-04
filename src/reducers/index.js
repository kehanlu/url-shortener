import { combineReducers } from "redux";
import auth from "./auth";
import url from "./url";
import alert from "./alert";

export default combineReducers({
  auth,
  url,
  alert
});
