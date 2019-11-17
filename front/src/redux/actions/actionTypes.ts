import axios from "axios";
import actionCreatorFactory, { Action } from "typescript-fsa";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { AppState } from "../store";
import store from "../store";

const actionCreator = actionCreatorFactory();

// アカウント作成 or ログインを選択するアクション
export const selectActions = {
    selectCreateAccountButton: actionCreator<void>("SELECT_CREATE_ACCOUNT_BUTTON"),
    selectLogInButton: actionCreator<void>("SELECT_LOGIN_BUTTON"),
    backToTopButton: actionCreator<void>("BACK_TO_TOP_BUTTON")
}

// アカウント作成に使用するRedux Thunkアクション
export const postSignUp = (name: string, email: string, password: string, passwordConfirmed: string): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(userActions.loadAllUserInfo.started({ params: {} }));
        const REGISTER_ENDPOINT = "https://dogress-api.herokuapp.com/api/v1/register";
        await axios.post(REGISTER_ENDPOINT, {
            user: {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmed
            }
        })
            .then(results => {
                dispatch(userActions.loadAllUserInfo.done({ params: {}, result: results }));
            })
            .catch(error => {
                dispatch(userActions.loadAllUserInfo.failed({ params: {}, error: error }));
            });
    }
}

// ログインに使用するアクション
export const userActions = {
    inputName: actionCreator<string>("INPUT_NAME"),
    inputEmail: actionCreator<string>("INPUT_EMAIL"),
    inputPassword: actionCreator<string>("INPUT_PASSWORD"),
    inputPasswordConfirmd: actionCreator<string>("INPUT_PASSWORD_CONFIRMD"),
    pushLogInButton: actionCreator<void>("LOGIN_BUTTON"),
    loadAllUserInfo: actionCreator.async<{}, {}, {}>("LOAD_ALL_USER_INFO")
};

// ログインに使用するRedux Thunkアクション
export const postLogIn = (email: string, password: string): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(userActions.loadAllUserInfo.started({ params: {} }));
        const LOGIN_ENDPOINT = "https://dogress-api.herokuapp.com/api/v1/login";
        await axios.post(LOGIN_ENDPOINT, {
            email: email,
            password: password
        })
            .then(results => {
                dispatch(userActions.loadAllUserInfo.done({ params: {}, result: results }));
            })
            .catch(error => {
                dispatch(userActions.loadAllUserInfo.failed({ params: {}, error: error }));
            });
    }
}

// Main.tsxで使用するボタンアクション
export const mainButtonActions = {
    pushDoListButton: actionCreator<void>("DO_LIST_BUTTON"),
    pushDoneListButton: actionCreator<void>("DONE_LIST_BUTTON"),
    slideToggleButton: actionCreator<void>("TOOGLE_BUTTON"),
    pushPlusButton: actionCreator<void>("ADD_PLUS_BUTTON"),
    pushCloseButton: actionCreator<void>("CLOSE_BUTTON"),
}

// Todo取得に使用するアクション
export const todoActions = {
    inputTextarea: actionCreator<string>("INPUT_TEXTAREA"),
    loadAllTodo: actionCreator.async<{}, {}, {}>("LOAD_ALL_TODO"),
    putTodo: actionCreator.async<{}, {}, {}>("PUT_UPDATE_TODO"),
    addDoProgress: actionCreator<void>("ADD_DO_PROGRESS"),
    addDoneProgress: actionCreator<void>("ADD_DONE_PROGRESS"),
    pushProgressCounter: actionCreator<void>("PUSH_PROGRESS_COUNTER"),
    clearProgressCounter: actionCreator<void>("CLEAR_PROGRESS_COUNTER")
}

// Todo取得に使用するRedux Thunkアクション
export const getTodo = (): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(todoActions.loadAllTodo.started({ params: {} }));
        const TODO_ENDPOINT = "https://dogress-api.herokuapp.com/api/v1/parent_tasks";
        await axios.get(TODO_ENDPOINT, {
            headers: {
                "Authorization": `Bearer ${store.getState().user.results.data.token.access_token}`
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
        const TODO_ENDPOINT = "https://dogress-api.herokuapp.com/api/v1/parent_tasks";
        const data = {
            "content": content,
            "progress": progress
        }
        const headers = {
            "Authorization": `Bearer ${store.getState().user.results.data.token.access_token}`
        }
        await axios.post(TODO_ENDPOINT, data, { headers: headers })
            .then(results => {
                dispatch(todoActions.loadAllTodo.done({ params: {}, result: results.data.data }));
            })
            .catch(error => {
                dispatch(todoActions.loadAllTodo.failed({ params: {}, error: error }))
            })
    }
}

// TodoのProgressをUpdate
export const putTodo = (id: number, content: string, progress: number): ThunkAction<Promise<void>, AppState, undefined, Action<AppState>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(todoActions.putTodo.started({ params: {} }));
        const TODO_ENDPOINT = `https://dogress-api.herokuapp.com/api/v1/parent_tasks/${id}`;
        const data = {
            "content": content,
            "progress": progress
        }
        const headers = {
            "Authorization": `Bearer ${store.getState().user.results.data.token.access_token}`
        }
        await axios.put(TODO_ENDPOINT, data, { headers: headers })
            .then(results => {
                dispatch(todoActions.putTodo.done({ params: {}, result: results.data.data }));
            })
            .catch(error => {
                dispatch(todoActions.putTodo.failed({ params: {}, error: error }))
            })
    }
}