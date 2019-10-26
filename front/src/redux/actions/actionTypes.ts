import axios from "axios";
import actionCreatorFactory, { Action } from "typescript-fsa";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { AppState } from "../store";

const actionCreator = actionCreatorFactory();

// アカウント作成 or ログインを選択するアクション
export const selectActions = {
    selectCreateAccountButton: actionCreator<void>("SELECT_CREATE_ACCOUNT_BUTTON"),
    selectLoginButton: actionCreator<void>("SELECT_LOGIN_BUTTON"),
    backToTopButton: actionCreator<void>("BACK_TO_TOP_BUTTON")
}

// アカウント作成に使用するRedux Thunkアクション
export const postSignUp = (name: string, email: string, password: string, passwordConfirmed: string): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(loginActions.loadAllLoginInfo.started({ params: {} }));
        const REGISTER_ENDPOINT = "http://localhost:3000/api/v1/register";
        await axios.post(REGISTER_ENDPOINT, {
            user: {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmed
            }
        })
            .then(results => {
                console.log(results)
                dispatch(loginActions.loadAllLoginInfo.done({ params: {}, result: results }));
                if (localStorage.accessToken === undefined) {
                    localStorage.accessToken = results.data.data.access_token;
                }
                if (localStorage.refreshToken === undefined) {
                    localStorage.refreshToken = results.data.data.refresh_token;
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(loginActions.loadAllLoginInfo.failed({ params: {}, error: error }));
            });
    }
}

// ログインに使用するアクション
export const loginActions = {
    inputName: actionCreator<string>("INPUT_NAME"),
    inputEmail: actionCreator<string>("INPUT_EMAIL"),
    inputPassword: actionCreator<string>("INPUT_PASSWORD"),
    inputPasswordConfirmd: actionCreator<string>("INPUT_PASSWORD_CONFIRMD"),
    pushLoginButton: actionCreator<void>("LOGIN_BUTTON"),
    loadAllLoginInfo: actionCreator.async<{}, {}, {}>("LOAD_ALL_LOGIN_INFO")
};

// ログインに使用するRedux Thunkアクション
export const postLogIn = (email: string, password: string): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(loginActions.loadAllLoginInfo.started({ params: {} }));
        const LOGIN_ENDPOINT = "http://localhost:3000/api/v1/login";
        await axios.post(LOGIN_ENDPOINT, {
            email: email,
            password: password
        })
            .then(results => {
                dispatch(loginActions.loadAllLoginInfo.done({ params: {}, result: results }));
                if (localStorage.accessToken === undefined) {
                    localStorage.accessToken = results.data.token.access_token;
                }
                if (localStorage.refreshToken === undefined) {
                    localStorage.refreshToken = results.data.token.refresh_token;
                }
            })
            .catch(error => {
                dispatch(loginActions.loadAllLoginInfo.failed({ params: {}, error: error }));
            });
    }
}

// Main.tsxで使用するボタンアクション
export const mainButtonActions = {
    pushDoListButton: actionCreator<void>("DO_LIST_BUTTON"),
    pushDoneListButton: actionCreator<void>("DONE_LIST_BUTTON"),
    slideToggleButton: actionCreator<void>("TOOGLE_BUTTON"),
    pushPlusButton: actionCreator<void>("ADD_PLUS_BUTTON"),
    pushCloseButton: actionCreator<void>("CLOSE_BUTTON")
}

// Todo取得に使用するアクション
export const todoActions = {
    inputTextarea: actionCreator<string>("INPUT_TEXTAREA"),
    loadAllTodo: actionCreator.async<{}, {}, {}>("LOAD_ALL_TODO"),
}

// Todo取得に使用するRedux Thunkアクション
export const getTodo = (): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(todoActions.loadAllTodo.started({ params: {} }));
        const TODO_ENDPOINT = "http://localhost:3000/api/v1/parent_tasks";
        await axios.get(TODO_ENDPOINT, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
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

// Todoを追加する
export const postTodo = (content: string, progress: number): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(todoActions.loadAllTodo.started({ params: {} }));
        const TODO_ENDPOINT = "http://localhost:3000/api/v1/parent_tasks";
        await axios.post(TODO_ENDPOINT, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(results => {
                dispatch(todoActions.loadAllTodo.done({ params: {}, result: results }));
            })
            .catch(error => {
                dispatch(todoActions.loadAllTodo.failed({ params: {}, error: error }))
            })
    }
}