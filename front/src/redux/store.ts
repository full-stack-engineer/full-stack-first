import { createStore, combineReducers, applyMiddleware } from "redux";
import { UserState, logInReducer } from "./states/userState";
import { MainState, mainReducer } from "./states/mainState";
import { TodoState, todoReducer } from "./states/todoState";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export type AppState = {
  user: UserState;
  main: MainState;
  todo: TodoState;
};

const logger = createLogger({
  diff: true,
  collapsed: true
});

const store = createStore(
  combineReducers<AppState>({
    user: logInReducer,
    main: mainReducer,
    todo: todoReducer
  }),
  {},
  applyMiddleware(thunk, logger)
);

export default store;
