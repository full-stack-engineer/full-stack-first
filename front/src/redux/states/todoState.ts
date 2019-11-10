import { reducerWithInitialState } from "typescript-fsa-reducers";
import { todoActions } from "../actions/actionTypes";

export interface TodoState {
    progressCounter: number;
}

const initialState: TodoState = {
    progressCounter: 0
}

export const todoReducer = reducerWithInitialState(initialState)
    .case(todoActions.putTodo.started, state => {
        return {
            ...state
        }
    })
    .case(todoActions.putTodo.done, state => {
        return {
            ...state
        }
    })
    .case(todoActions.putTodo.failed, state => {
        return {
            ...state
        }
    })
    .case(todoActions.pushProgressCounter, state => {
        return {
            ...state,
            progressCounter: state.progressCounter + 1
        }
    })
    .case(todoActions.clearProgressCounter, state => {
        return {
            ...state,
            progressCounter: 0
        }
    })