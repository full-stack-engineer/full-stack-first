import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { loginActions, postLoginInfo, postSignUp } from "../actions/actionTypes";
import Login from "../../module/Login/Login";

export interface LoginAction {
    inputName: (inputValue: string) => Action<string>;
    inputEmail: (inputValue: string) => Action<string>;
    inputPassword: (inputValue: string) => Action<string>;
    inputPasswordConfirmed: (inputValue: string) => Action<string>;
    pushLoginButton: () => Action<void>;
    postSignUp: (name: string, email: string, password: string, passwordConfirmed: string) => Promise<void>;
    postLoginInfo: (email: string, password: string) => Promise<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.login
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action<any>>) => {
    return {
        inputName: (inputValue: string) => dispatch(loginActions.inputName(inputValue)),
        inputEmail: (inputValue: string) => dispatch(loginActions.inputEmail(inputValue)),
        inputPassword: (inputValue: string) => dispatch(loginActions.inputPassword(inputValue)),
        inputPasswordConfirmed: (inputValue: string) => dispatch(loginActions.inputPasswordConfirmd(inputValue)),
        pushLoginButton: () => dispatch(loginActions.pushLoginButton()),
        postSignUp: (name: string, email: string, password: string, passwordConfirmed: string) => dispatch(postSignUp(name, email, password, passwordConfirmed)),
        postLoginInfo: (email: string, password: string) => dispatch(postLoginInfo(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);