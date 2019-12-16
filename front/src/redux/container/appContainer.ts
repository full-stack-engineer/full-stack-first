import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { postLogIn } from "../actions/actionTypes";
import App from "../../App";

export interface UserAction {
  postLogIn: (email: string, password: string) => Promise<void>;
}

const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.user
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, Action<string | void>>
) => {
  return {
    postLogIn: (email: string, password: string) =>
      dispatch(postLogIn(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
