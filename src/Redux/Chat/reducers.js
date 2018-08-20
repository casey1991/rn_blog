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
const setRooms = (state, action) => {
  return Immutable.setIn(state, ["rooms"], action.payload);
};
const setSelectedRoom = (state, action) => {
  return Immutable.setIn(state, ["selectedRoom"], action.payload);
};
const setMessages = (state, action) => {
  return Immutable.setIn(state, ["messages"], action.payload);
};
export default handleActions(
  {
    [Types.RESET]: reset,
    [Types.SET_ROOMS]: setRooms,
    [Types.SET_SELECTED_ROOM]: setSelectedRoom,
    [Types.SET_MESSAGES]: setMessages
  },
  defaultState
);
