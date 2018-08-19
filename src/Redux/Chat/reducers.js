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
const setRooms = (state, action) => {};
export default handleActions(
  {
    [Types.RESET]: reset,
    [Types.SET_ROOMS]: setRooms
  },
  defaultState
);
