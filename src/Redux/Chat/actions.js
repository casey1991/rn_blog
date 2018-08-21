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
  SET_SELECTED_ROOM: PREFIX + "SET_SELECTED_ROOM"
};
// normal actions
const reset = createAction(Types.RESET);
const setRooms = createAction(Types.SET_ROOMS);
const setSelectedRoom = createAction(Types.SET_SELECTED_ROOM);
const setMessages = createAction(Types.SET_MESSAGES);
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
  sendMessage,
  reset,
  setRooms,
  setSelectedRoom,
  setMessages
};
