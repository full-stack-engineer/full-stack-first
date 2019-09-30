import { reducerWithInitialState } from "typescript-fsa-reducers";
import { loginActions } from "../actions/actionTypes";

export interface LoginState {
    email: string;
    password: string;
    passwordConfirmd: string;
    loading: boolean;
    loginStatus: boolean;
    authentication: {
        uid?: string;
        client?: string;
        accessToken?: string;
    }
}

const initialState: LoginState = {
    email: "",
    password: "",
    passwordConfirmd: "",
    loading: false,
    loginStatus: false,
    authentication: {
        uid: "",
        client: "",
        accessToken: ""
    }
};

export const loginReducer = reducerWithInitialState(initialState)
    .case(loginActions.inputEmail, (state, email) => {
        return {
            ...state,
            email,
        }
    })
    .case(loginActions.inputPassword, (state, password) => {
        return {
            ...state,
            password
        }
    })
    .case(loginActions.inputPasswordConfirmd, (state, passwordConfirmd) => {
        return {
            ...state,
            passwordConfirmd
        }
    })
    .case(loginActions.pushLoginButton, (state) => {
        return {
            ...state,
        }
    })
    .case(loginActions.loadAllLoginInfo.started, (state, payload) => {
        return {
            ...state,
            loading: true,
            loginStatus: false,
            error: null,
            authentication: {}
        }
    })
    .case(loginActions.loadAllLoginInfo.done, (state, payload) => {
        return {
            ...state,
            loading: false,
            error: null,
            loginStatus: true,
            authentication: payload.result
        }
    })
    .case(loginActions.loadAllLoginInfo.failed, (state, payload) => {
        return {
            ...state,
            loading: false,
            loginStatus: false,
            error: payload.error,
            authentication: {}
        }
    })
