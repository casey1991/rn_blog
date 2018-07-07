import { createAction } from "redux-actions";
const PREFIX = "AUTH_";
export const Types = {
  SET_USER: PREFIX + "SET_USER",
  SET_TOKEN: PREFIX + "SET_TOKEN",
  SET_TOKEN_EXPIRE: PREFIX + "SET_TOKEN_EXPIRE",
  LOGIN: PREFIX + "LOGIN",
  LOGOUT: PREFIX + "LOGOUT",
  GET_CURRENT_USER: PREFIX + "GET_CURRENT_USER",
  RESET: PREFIX + "RESET"
};
// normal actions
const setUser = createAction(Types.SET_USER);
const setToken = createAction(Types.SET_TOKEN);
const setTokenExpire = createAction(Types.SET_TOKEN_EXPIRE);
const reset = createAction(Types.RESET);
// saga actions
const login = createAction(Types.LOGIN);
const logout = createAction(Types.LOGOUT);
const getCurrentUser = createAction(Types.GET_CURRENT_USER);

export const Actions = {
  setUser,
  setToken,
  setTokenExpire,
  login,
  reset,
  logout,
  getCurrentUser
};
