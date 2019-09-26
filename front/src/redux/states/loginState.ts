import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { loginActions } from '../actions/actionTypes';

export interface LoginState {
    email: string;
}

const initialState: LoginState = {
    email: '',
};

export const loginReducer = reducerWithInitialState(initialState)
    .case(loginActions.inputEmail, (state, email) => {
        console.log("imputEmail");
        return {
            ...state,
            email
        }
    })
    .case(loginActions.inputPassword, (state, password) => {
        console.log("inputPassword");
        return {
            ...state,
            password
        }
    })