import axios from "axios";
import actionCreatorFactory, { Action } from "typescript-fsa";
import store from "../store";
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from "redux";
import { AppState } from "../store";


const actionCreator = actionCreatorFactory();

export const loginActions = {
    inputEmail: actionCreator<string>("INPUT_EMAIL"),
    inputPassword: actionCreator<string>("INPUT_PASSWORD"),
    inputPasswordConfirmd: actionCreator<string>("INPUT_PASSWORD_CONFIRMD"),
    pushLoginButton: actionCreator<void>("LOGIN_BUTTON"),
    loadAllLoginInfo: actionCreator.async<{}, {}, {}>("LOAD_ALL_LOGIN_INFO")
};

export const postLoginInfo = (email: string, password: string): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(loginActions.loadAllLoginInfo.started({ params: {} }));
        const LOGIN_ENDPOINT = "http://localhost:3000/api/v1/auth/sign_in";
        await axios.post(LOGIN_ENDPOINT, {
            email: email,
            password: password
        })
            .then(results => {
                dispatch(loginActions.loadAllLoginInfo.done({ params: {}, result: results.headers }));
            })
            .catch(error => {
                dispatch(loginActions.loadAllLoginInfo.failed({ params: {}, error: error }));
            });
    }
}

export const todoActions = {
    loadAllTodo: actionCreator.async<{}, {}, {}>("LOAD_ALL_TODO")
}

export const getTodo = (): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(todoActions.loadAllTodo.started({ params: {} }));
        const TODO_ENDPOINT = "http://localhost:3000/api/v1/parent_tasks";
        console.log(store.getState().login.authentication['access-token']);
        await axios.get(TODO_ENDPOINT,
            {
                headers: {
                    'uid': store.getState().login.authentication.uid,
                    'access-token': store.getState().login.authentication['access-token'],
                    'client': store.getState().login.authentication.client
                }
            })
            .then(results => {
                dispatch(todoActions.loadAllTodo.done({ params: {}, result: results.data.data }));
            })
            .catch(error => {
                dispatch(todoActions.loadAllTodo.failed({ params: {}, error: error }));
            });
    }
}