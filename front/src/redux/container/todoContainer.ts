import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { putTodo, todoActions } from "../actions/actionTypes";
import Todo from "../../components/Todo/Todo";

export interface TodoAction {
    putTodo: (id: number, content: string, progress: number) => Promise<void>;
    pushProgressCounter: () => Action<void>;
    clearProgressCounter: () => Action<void>;
    scrollStart: () => Action<void>;
    scrollEnd: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.todo
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action<number | void>>) => {
    return {
        putTodo: (id: number, content: string, progress: number) => dispatch(putTodo(id, content, progress)),
        pushProgressCounter: () => dispatch(todoActions.pushProgressCounter()),
        clearProgressCounter: () => dispatch(todoActions.clearProgressCounter()),
        scrollStart: () => dispatch(todoActions.scrollStart()),
        scrollEnd: () => dispatch(todoActions.scrollEnd())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);