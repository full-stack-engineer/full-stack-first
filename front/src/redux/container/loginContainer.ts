import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { loginActions } from '../actions/actionTypes';
import LoginInputBox from '../../components/Login/LoginInputBox';

export interface LoginAction {
    inputEmail: (inputValue: string) => Action<string>;
    inputPassword: (inputValue: string) => Action<string>
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
    return {
        inputEmail: (inputValue: string) => dispatch(loginActions.inputEmail(inputValue)),
        inputPassword: (inputValue: string) => dispatch(loginActions.inputPassword(inputValue))
    }
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.login
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginInputBox);