import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./Auth/reducers";

export const reducers = combineReducers({
  auth,
  form
});
