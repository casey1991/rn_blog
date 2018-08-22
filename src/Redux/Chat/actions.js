import { createAction } from "redux-actions";
const PREFIX = "CHAT_";
export const Types = {
  CREATE_ROOM: PREFIX + "CREATE_ROOM",
  CREATE_MESSAGE: PREFIX + "CREATE_MESSAGE",
  GET_ROOMS: PREFIX + "GET_ROOMS",
  GET_MESSAGES: PREFIX + "GET_MESSAGES",
  SEND_MESSAGE: PREFIX + "SEND_MESSAGE",
  RESET: PREFIX + "RESET",
  SET_ROOMS: PREFIX + "SET_ROOMS",
  SET_MESSAGES: PREFIX + "SET_MESSAGES",
  SET_LIMIT: PREFIX + "SET_LIMIT",
  SET_OFFSET: PREFIX + "SET_OFFSET",
  SET_LOADING: PREFIX + "SET_LOADING",
  SET_CAN_LOAD_MORE: PREFIX + "SET_CAN_LOAD_MORE",
  CLEAN_MESSAGES: PREFIX + "CLEAN_ROOM", // clean messages & paginate when leave room
  SET_MESSAGE: PREFIX + "SET_MESSAGE",
  SET_SELECTED_ROOM: PREFIX + "SET_SELECTED_ROOM"
};
// normal actions
const reset = createAction(Types.RESET);
const setRooms = createAction(Types.SET_ROOMS);
const setSelectedRoom = createAction(Types.SET_SELECTED_ROOM);
const setMessages = createAction(Types.SET_MESSAGES);
const setMessage = createAction(Types.SET_MESSAGE);
const cleanMessages = createAction(Types.CLEAN_MESSAGES);
const setOffset = createAction(Types.SET_OFFSET);
const setLimit = createAction(Types.SET_LIMIT);
const setLoading = createAction(Types.SET_LOADING);
const setCanLoadMore = createAction(Types.SET_CAN_LOAD_MORE);
// saga actions
const createRoom = createAction(Types.CREATE_ROOM);
const createMessage = createAction(Types.CREATE_MESSAGE);
const getRooms = createAction(Types.GET_ROOMS);
const getMessages = createAction(Types.GET_MESSAGES);
const sendMessage = createAction(Types.SEND_MESSAGE);
export const Actions = {
  createRoom,
  createMessage,
  getRooms,
  getMessages,
  cleanMessages,
  sendMessage,
  reset,
  setRooms,
  setSelectedRoom,
  setMessages,
  setLimit,
  setOffset,
  setLoading,
  setMessage,
  setCanLoadMore
};
