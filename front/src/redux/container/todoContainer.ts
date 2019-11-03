import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { putTodo } from "../actions/actionTypes";
import Todo from "../../components/Todo/Todo";

export interface TodoAction {
    putTodo: (id: number, content: string, progress: number) => Promise<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.main
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action<number | void>>) => {
    return {
        putTodo: (id: number, content: string, progress: number) => dispatch(putTodo(id, content, progress))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);