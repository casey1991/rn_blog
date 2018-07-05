import { all } from "redux-saga/effects";
import { authSaga } from "./Auth/sagas";
export const rootSaga = function* rootSaga() {
  yield all([authSaga()]);
};
