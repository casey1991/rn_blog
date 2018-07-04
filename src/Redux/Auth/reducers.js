import { handleActions } from "redux-actions";
import { actions } from "./actions";
export const defaultState = {};
export default handleActions(
  {
    [actions.setUser]: (state, action) => {}
  },
  defaultState
);
