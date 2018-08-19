import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import { Types } from "./actions";
export const defaultState = Immutable({
  rooms: []
});
const reset = () => {
  return defaultState;
};
const addEntities = (state, action) => {};
export default handleActions(
  {
    [Types.RESET]: reset,
    [Types.ADD_ENTITIES]: addEntities
  },
  defaultState
);
