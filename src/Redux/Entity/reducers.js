import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import { Types } from "./actions";
export const defaultState = Immutable({});
const reset = () => {
  return defaultState;
};
const addEntities = (state, action) => {
  return Immutable.merge(state, action.payload);
};
export default handleActions(
  {
    [Types.RESET]: reset,
    [Types.ADD_ENTITIES]: addEntities
  },
  defaultState
);
