import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer, LoginState } from "./states/loginState";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export type AppState = {
    login: LoginState
};

const logger = createLogger({
    diff: true,
    collapsed: true,
})

const store = createStore(
    combineReducers<AppState>({
        login: loginReducer,
    }),
    {},
    applyMiddleware(thunk, logger)
)

export default store;