import { createStore, combineReducers, applyMiddleware } from "redux";
import { UserState, loginReducer } from "./states/userState";
import { mainReducer, MainState } from "./states/mainState";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export type AppState = {
    user: UserState,
    main: MainState,
};

const logger = createLogger({
    diff: true,
    collapsed: true,
})

const store = createStore(
    combineReducers<AppState>({
        user: loginReducer,
        main: mainReducer,
    }),
    {},
    applyMiddleware(thunk, logger)
)

export default store;