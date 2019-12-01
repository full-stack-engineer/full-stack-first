import { reducerWithInitialState } from "typescript-fsa-reducers";
import { todoActions, mainButtonActions } from "../actions/actionTypes";

export interface MainState {
    textarea: string;
    loading: boolean;
    error: object;
    data: any
    doList: boolean;
    doneList: boolean;
    toggle: boolean;
    puls: boolean;
    doProgress: number;
    doneProgress: number;
}

const initialState: MainState = {
    textarea: "",
    loading: false,
    error: {},
    data: [],
    doList: false,
    doneList: false,
    toggle: true,
    puls: false,
    doProgress: 0,
    doneProgress: 0,
};

export const mainReducer = reducerWithInitialState(initialState)
    .case(todoActions.inputTextarea, (state, textarea) => {
        return {
            ...state,
            textarea
        }
    })
    .case(todoActions.getTodo.started, state => {
        return {
            ...state,
            loading: true,
            error: {}
        }
    })
    .case(todoActions.getTodo.done, (state, payload) => {

        return {
            ...state,
            data: payload.result,
            loading: false,
            error: {}
        }
    })
    .case(todoActions.getTodo.failed, (state, payload) => {
        return {
            ...state,
            loading: false,
            error: payload.error
        }
    })
    .case(todoActions.postTodo.started, state => {
        return {
            ...state,
            loading: true
        }
    })
    .case(todoActions.postTodo.done, state => {

        return {
            ...state,
            loading: false
        }
    })
    .case(todoActions.postTodo.failed, state => {
        return {
            ...state,
            loading: false
        }
    })
    .case(todoActions.deleteTodo.started, state => {
        return {
            ...state,
            loading: true
        }
    })
    .case(todoActions.deleteTodo.done, state => {
        return {
            ...state,
            loading: false
        }
    })
    .case(todoActions.deleteTodo.failed, state => {
        return {
            ...state,
            loading: false
        }
    })
    .case(mainButtonActions.pushDoListButton, state => {
        return {
            ...state,
            doList: true
        }
    })
    .case(mainButtonActions.pushDoneListButton, state => {
        return {
            ...state,
            doneList: true
        }
    })
    .case(mainButtonActions.slideToggleButton, state => {
        return {
            ...state,
            toggle: !state.toggle
        }
    })
    .case(mainButtonActions.pushPlusButton, state => {
        return {
            ...state,
            puls: true
        }
    })
    .case(mainButtonActions.pushCloseButton, state => {
        return {
            ...state,
            doList: false,
            doneList: false,
            puls: false
        }
    })
    .case(todoActions.addDoProgress, state => {
        return {
            ...state,
            doProgress: state.doProgress + 1
        }
    })
    .case(todoActions.addDoneProgress, state => {
        return {
            ...state,
            doneProgress: state.doneProgress + 1
        }
    })
