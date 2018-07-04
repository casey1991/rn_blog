import { createAction } from "redux-actions";
const PREFIX = "AUTH_";
export const actions = {
  setUser: PREFIX + "SET_USER",
  login: PREFIX + "LOGIN"
};
// normal actions
export const setUser = createAction(actions.setUser);
// saga actions
export const login = createAction(actions.login);
