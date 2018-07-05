import { handleActions } from "redux-actions";
import { actions } from "./actions";
export const defaultState = {
  user: null,
  token: null
};
export default handleActions(
  {
    [actions.setUser]: (state, action) => {}
  },
  defaultState
);
