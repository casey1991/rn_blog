import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./Auth/reducers";
import user from "./User/reducers";

export const reducers = combineReducers({
  auth,
  form,
  user
});
