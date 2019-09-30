import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { getTodo } from "../actions/actionTypes";
import App from "../../App";

export interface TodoAction {
    getTodo: () => Promise<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.todo
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action<any>>) => {
    return {
        getTodo: () => dispatch(getTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);