import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store";
import { loginActions, postLoginInfo } from "../actions/actionTypes";
import Login from "../../components/Login/Login";

export interface LoginAction {
    inputEmail: (inputValue: string) => Action<string>;
    inputPassword: (inputValue: string) => Action<string>;
    inputPasswordConfirmd: (inputValue: string) => Action<string>;
    pushLoginButton: () => Action<void>;
    // postLoginInfo: (email: string, password: string) => Action<any>
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.login
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string | void>>) => {
    return {
        inputEmail: (inputValue: string) => dispatch(loginActions.inputEmail(inputValue)),
        inputPassword: (inputValue: string) => dispatch(loginActions.inputPassword(inputValue)),
        inputPasswordConfirmd: (inputValue: string) => dispatch(loginActions.inputPasswordConfirmd(inputValue)),
        pushLoginButton: () => dispatch(loginActions.pushLoginButton()),
        // postLoginInfo: (email: string, password: string) => dispatch(postLoginInfo(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);