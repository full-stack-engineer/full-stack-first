import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { userActions, postLogIn, postSignUp } from "../actions/actionTypes";
import LogIn from "../../module/LogIn/LogIn";

export interface UserAction {
    inputName: (inputValue: string) => Action<string>;
    inputEmail: (inputValue: string) => Action<string>;
    inputPassword: (inputValue: string) => Action<string>;
    inputPasswordConfirmed: (inputValue: string) => Action<string>;
    pushLogInButton: () => Action<void>;
    postSignUp: (name: string, email: string, password: string, passwordConfirmed: string) => Promise<void>;
    postLogIn: (email: string, password: string) => Promise<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.user
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action<string | void>>) => {
    return {
        inputName: (inputValue: string) => dispatch(userActions.inputName(inputValue)),
        inputEmail: (inputValue: string) => dispatch(userActions.inputEmail(inputValue)),
        inputPassword: (inputValue: string) => dispatch(userActions.inputPassword(inputValue)),
        inputPasswordConfirmed: (inputValue: string) => dispatch(userActions.inputPasswordConfirmd(inputValue)),
        pushLogInButton: () => dispatch(userActions.pushLogInButton()),
        postSignUp: (name: string, email: string, password: string, passwordConfirmed: string) => dispatch(postSignUp(name, email, password, passwordConfirmed)),
        postLogIn: (email: string, password: string) => dispatch(postLogIn(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);