import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import { Types, Actions } from "./actions";
import { Actions as EntityActions } from "../Entity/actions";
import { handleResponse } from "../utils";
import chatService from "../../Services/APIServices/ChatServices";
import { Schemas, Selector } from "../../Services";

const createRoom = function*() {};
const createMessage = function*() {};
const getRooms = function*() {
  const response = yield call(chatService.getRooms);
  function* onSuccess(data) {
    const { result, entities } = Selector.normalize(data, [Schemas.Room]);
    yield put(Actions.setRooms(result));
    yield put(EntityActions.addEntities(entities));
  }
  function* onFailed(data) {}
  yield handleResponse(response)(onSuccess, onFailed);
};
const getMessages = function*(action) {
  yield put(Actions.setLoading(true));
  const response = yield call(chatService.getMessages, action.payload);
  function* onSuccess(data) {
    const { docs, limit, offset } = data;
    const { result, entities } = Selector.normalize(docs, [Schemas.Message]);
    yield put(Actions.setMessages(result));
    yield put(EntityActions.addEntities(entities));
    yield put(Actions.setLimit(limit));
    yield put(Actions.setOffset(offset));
    yield put(Actions.setLoading(false));
  }
  function* onFailed(data) {
    yield put(Actions.setLoading(false));
  }
  yield handleResponse(response)(onSuccess, onFailed);
};
const sendMessage = function*(action) {
  const response = yield call(chatService.sendMessage, action.payload);
  function* onSuccess(data) {
    const { result, entities } = Selector.normalize(data, Schemas.Message);
    yield put(Actions.setMessage(result));
    yield put(EntityActions.addEntities(entities));
  }
  function* onFailed(data) {}
  yield handleResponse(response)(onSuccess, onFailed);
};
export const chatSaga = function*() {
  yield takeEvery(Types.CREATE_ROOM, createRoom);
  yield takeEvery(Types.CREATE_MESSAGE, createMessage);
  yield takeEvery(Types.GET_ROOMS, getRooms);
  yield takeLatest(Types.GET_MESSAGES, getMessages);
  yield takeEvery(Types.SEND_MESSAGE, sendMessage);
};
