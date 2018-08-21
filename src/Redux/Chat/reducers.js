import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import { Types } from "./actions";
import * as _ from "lodash";
export const defaultPaginate = Immutable({
  offset: 0,
  limit: 10,
  isLoading: false
});
export const defaultState = Immutable({
  rooms: [],
  selectedRoom: null,
  messages: [],
  paginate: defaultPaginate
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
const cleanMessags = state => {
  return Immutable.merge(state, {
    messages: [],
    paginate: defaultPaginate
  });
};
const setMessage = (state, action) => {
  return Immutable.updateIn(
    state,
    ["messages"],
    old => {
      return _.concat([action.payload], old);
    },
    { deep: true }
  );
};
const setOffset = (state, action) => {
  return Immutable.setIn(state, ["paginate", "offset"], action.payload);
};
const setLimit = (state, action) => {
  return Immutable.setIn(state, ["paginate", "limit"], action.payload);
};
const setLoading = (state, action) => {
  return Immutable.setIn(state, ["paginate", "isLoading"], action.payload);
};
export default handleActions(
  {
    [Types.RESET]: reset,
    [Types.SET_ROOMS]: setRooms,
    [Types.SET_SELECTED_ROOM]: setSelectedRoom,
    [Types.SET_MESSAGES]: setMessages,
    [Types.SET_MESSAGE]: setMessage,
    [Types.CLEAN_MESSAGES]: cleanMessags,
    [Types.SET_LIMIT]: setLimit,
    [Types.SET_OFFSET]: setOffset,
    [Types.SET_LOADING]: setLoading
  },
  defaultState
);
