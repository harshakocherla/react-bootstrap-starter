// import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reducer from "./reducers";
import promiseMiddleware from "redux-promise-middleware";
import rootSaga from "./sagas";

import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
// const sagaMiddleware = createSagaMiddleware();

const initialState = {};
export const history = createBrowserHistory();
const store = createStore(
  reducer(history),
  initialState,
  applyMiddleware(promiseMiddleware(), routerMiddleware(history))
);

// sagaMiddleware.run(rootSaga);

export default store;
