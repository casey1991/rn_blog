import { takeEvery } from "redux-saga/effects";
import { actions } from "./actions";

export const login = function*() {};

export const authSaga = function*() {
  yield takeEvery(actions.login, login);
};
