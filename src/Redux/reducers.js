import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./Auth/reducers";
import user from "./User/reducers";
import article from "./Article/reducers";
import chat from "./Chat/reducers";

export const reducers = combineReducers({
  auth,
  form,
  user,
  article,
  chat
});
