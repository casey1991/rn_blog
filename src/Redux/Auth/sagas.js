import { takeEvery, call } from "redux-saga/effects";
import { actions } from "./actions";
import authService from "../../Services/APIServices/AuthSerivce";

export const login = function*(action) {
  yield call(authService.login, action.payload);
};

export const authSaga = function*() {
  yield takeEvery(actions.login, login);
};
