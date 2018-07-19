import { takeEvery, call, put } from "redux-saga/effects";
import { Types, Actions } from "./actions";
import ArticleService from "../../Services/APIServices/ArticleService";
import { handleResponse } from "../utils";

export const create = function*(action) {
  const response = yield call(ArticleService.create, action.payload);
  function* onSuccess(data) {}
  function* onFailed(data) {}
  yield handleResponse(response)(onSuccess, onFailed);
};
export const articleSaga = function*() {
  yield takeEvery(Types.CREATE, create);
};
