import { createAction } from "redux-actions";
const PREFIX = "CHAT_";
export const Types = {
  CREATE_ROOM: PREFIX + "CREATE_ROOM",
  CREATE_MESSAGE: PREFIX + "CREATE_MESSAGE",
  GET_ROOMS: PREFIX + "GET_ROOMS",
  RESET: PREFIX + "RESET"
};
// normal actions
const reset = createAction(Types.RESET);
const getRooms = createAction(Types.GET_ROOMS);
// saga actions
const createRoom = createAction(Types.CREATE_ROOM);
const createMessage = createAction(Types.CREATE_MESSAGE);
export const Actions = {
  reset,
  createRoom,
  createMessage,
  getRooms
};
