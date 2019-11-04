import { reducerWithInitialState } from "typescript-fsa-reducers";
import { selectActions } from "../actions/actionTypes";

export interface SelectState {
    createAccount: boolean;
    login: boolean;
}

const initialState: SelectState = {
    createAccount: false,
    login: false
}

export const selectReducer = reducerWithInitialState(initialState)
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