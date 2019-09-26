import { createStore, combineReducers } from 'redux';
import { loginReducer, LoginState } from './states/loginState'

export type AppState = {
    login: LoginState
};

const store = createStore(
    combineReducers<AppState>({
        login: loginReducer
    })
)

export default store;