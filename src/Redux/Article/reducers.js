import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import { Types } from "./actions";
export const defaultState = Immutable({
  user: null,
  token: null,
  tokenExpireIn: null
});
const reset = () => {
  return defaultState;
};
export default handleActions(
  {
    [Types.RESET]: reset
  },
  defaultState
);
