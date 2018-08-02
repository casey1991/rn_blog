import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import { Types } from "./actions";
export const defaultState = Immutable({
  rooms: [],
  selectedRoom: null,
  messages: []
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
