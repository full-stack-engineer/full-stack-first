import { reducerWithInitialState } from "typescript-fsa-reducers";
import { todoActions } from "../actions/actionTypes";

export interface TodoState {
    loading: boolean;
    todos: {};
}

const initialState: TodoState = {
    loading: false,
    todos: {},
};

export const todoReducer = reducerWithInitialState(initialState)
    .case(todoActions.loadAllTodo.started, (state, payload) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    })
    .case(todoActions.loadAllTodo.done, (state, payload) => {
        return {
            ...state,
            loading: false,
            todos: payload.result,
            error: null
        }
    })
    .case(todoActions.loadAllTodo.failed, (state, payload) => {
        return {
            ...state,
            loading: false,
            error: payload.error
        }
    })
