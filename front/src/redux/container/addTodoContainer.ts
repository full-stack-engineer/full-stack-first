import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import {
  todoActions,
  mainButtonActions,
  postTodo
} from "../actions/actionTypes";
import AddTodo from "../../module/AddTodo/AddTodo";

export interface AddTodoAction {
  inputTextarea: (inputValue: string) => Action<string>;
  postTodo: (content: string, progress: number) => Promise<void>;
  pushCloseButton: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.main
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, Action<string | void>>
) => {
  return {
    inputTextarea: (inputValue: string) =>
      dispatch(todoActions.inputTextarea(inputValue)),
    postTodo: (content: string, progress: number) =>
      dispatch(postTodo(content, progress)),
    pushCloseButton: () => dispatch(mainButtonActions.pushCloseButton())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
