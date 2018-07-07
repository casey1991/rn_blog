import { takeEvery, call, put } from "redux-saga/effects";
import { Types, Actions } from "./actions";
import authService from "../../Services/APIServices/AuthSerivce";
import { handleResponse } from "../utils";

export const login = function*(action) {
  const response = yield call(authService.login, action.payload);
  function* onSuccess(data) {
    const token = data.accessToken;
    const expiresIn = data.expiresIn;
    yield put(Actions.setToken(token));
    yield put(Actions.setTokenExpire(expiresIn));
    yield put(Actions.getCurrentUser());
  }
  function* onFailed(data) {
    console.log(data);
  }
  yield handleResponse(response)(onSuccess, onFailed);
};
export const getCurrentUser = function*() {
  const response = yield call(authService.getCurrentUser);
  function* onSuccess(data) {
    yield put(Actions.setUser(data));
  }
  function* onFailed(data) {}
  yield handleResponse(response)(onSuccess, onFailed);
};
export const logout = function*() {
  // now juse reset state
  yield put(Actions.reset());
};
export const authSaga = function*() {
  yield takeEvery(Types.LOGIN, login);
  yield takeEvery(Types.GET_CURRENT_USER, getCurrentUser);
  yield takeEvery(Types.LOGOUT, logout);
};
