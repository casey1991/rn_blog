import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import { Types } from "./actions";
export const defaultState = Immutable({
  user: null,
  token: null,
  tokenExpireIn: null
});
const setUser = (state, action) => {
  return state.set("user", action.payload);
};
const setToken = (state, action) => {
  return state.set("token", action.payload);
};
const setTokenExpire = (state, action) => {
  return state.set("tokenExpireIn", action.payload);
};
export default handleActions(
  {
    [Types.SET_USER]: setUser,
    [Types.SET_TOKEN]: setToken,
    [Types.SET_TOKEN_EXPIRE]: setTokenExpire
  },
  defaultState
);
