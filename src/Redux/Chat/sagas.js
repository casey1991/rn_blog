import { takeEvery, call, put } from "redux-saga/effects";
import { Types, Actions } from "./actions";
import { handleResponse } from "../utils";

const createRoom = function*() {};
const createMessage = function*() {};
const getRooms = function*() {};

export const chatSaga = function*() {
  yield takeEvery(Types.CREATE_ROOM, createRoom);
  yield takeEvery(Types.CREATE_MESSAGE, createMessage);
  yield takeEvery(Types.GET_ROOMS, getRooms);
};
