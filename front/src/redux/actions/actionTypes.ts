import axios from "axios";
import actionCreatorFactory, { Action } from "typescript-fsa";
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

export const postLoginInfo = (email: string, password: string): ThunkAction<Promise<void>, AppState, undefined, Action<any>> => {
    return async (dispatch: Dispatch<Action<any>>) => {
        dispatch(loginActions.loadAllLoginInfo.started({ params: {} }));
        console.log("login request posted");
        const LOGIN_ENDPOINT = "http://localhost:3000/api/v1/auth/sign_in";
        await axios.post(LOGIN_ENDPOINT, {
            email: email,
            password: password
        })
            .then(results => {
                console.log(results);
                dispatch(loginActions.loadAllLoginInfo.done({ params: {}, result: results }));
            })
            .catch(error => {
                console.log(error);
                dispatch(loginActions.loadAllLoginInfo.failed({ params: {}, error: error }));
            });
    }
}