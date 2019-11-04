import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer, LoginState } from "./states/loginState";
import { mainReducer, MainState } from "./states/mainState";
import { selectReducer, SelectState } from "./states/selectState";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export type AppState = {
    login: LoginState,
    main: MainState,
    select: SelectState
};

const logger = createLogger({
    diff: true,
    collapsed: true,
})

const store = createStore(
    combineReducers<AppState>({
        login: loginReducer,
        main: mainReducer,
        select: selectReducer
    }),
    {},
    applyMiddleware(thunk, logger)
)

export default store;