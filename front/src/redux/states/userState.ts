import { reducerWithInitialState } from "typescript-fsa-reducers";
import { selectActions, userActions } from "../actions/actionTypes";
import { encrypt } from "../../lib/lib";

export interface UserState {
    createAccount: boolean;
    login: boolean;
    name: string;
    email: string;
    password: string;
    passwordConfirmd: string;
    loading: boolean;
    loginStatus: boolean;
    results: {
        data: {
            token: {
                access_token: string;
                refresh_token: string;
            };
            user: {
                name: string;
            };
        }
    }
}

const initialUserState: UserState = {
    createAccount: false,
    login: false,
    name: "",
    email: "",
    password: "",
    passwordConfirmd: "",
    loading: false,
    loginStatus: false,
    results: {
        data: {
            token: {
                access_token: "",
                refresh_token: ""
            },
            user: {
                name: ""
            }
        }
    }
};

export const loginReducer = reducerWithInitialState(initialUserState)
    .case(selectActions.selectCreateAccountButton, state => {
        return {
            ...state,
            createAccount: true
        }
    })
    .case(selectActions.selectLoginButton, state => {
        return {
            ...state,
            login: true
        }
    })
    .case(selectActions.backToTopButton, state => {
        return {
            ...state,
            createAccount: false,
            login: false
        }
    })
    .case(userActions.inputName, (state, name) => {
        return {
            ...state,
            name
        }
    })
    .case(userActions.inputEmail, (state, email) => {
        return {
            ...state,
            email
        }
    })
    .case(userActions.inputPassword, (state, password) => {
        return {
            ...state,
            password
        }
    })
    .case(userActions.inputPasswordConfirmd, (state, passwordConfirmd) => {
        return {
            ...state,
            passwordConfirmd
        }
    })
    .case(userActions.pushLoginButton, state => {
        localStorage.email = encrypt(state.email)
        localStorage.password = encrypt(state.password)
        return {
            ...state
        }
    })
    .case(userActions.loadAllUserInfo.started, state => {
        return {
            ...state,
            loading: true,
            loginStatus: false,
            error: null
        }
    })
    .case(userActions.loadAllUserInfo.done, (state, payload: any) => {
        return {
            ...state,
            results: payload.result,
            loading: false,
            loginStatus: true,
            error: null,
        }
    })
    .case(userActions.loadAllUserInfo.failed, (state, payload) => {
        return {
            ...state,
            loading: false,
            loginStatus: false,
            error: payload.error
        }
    })
