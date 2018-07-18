import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { authMiddleware } from "./Middlewares/auth.middleware";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(authMiddleware, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
