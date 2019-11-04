import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { mainButtonActions, getTodo } from "../actions/actionTypes";
import Main from "../../module/Main/Main";

export interface MainAction {
    pushDoListButton: () => Action<void>;
    pushDoneListButton: () => Action<void>;
    slideToggleButton: () => Action<void>;
    pushPlusButton: () => Action<void>;
    pushCloseButton: () => Action<void>;
    getTodo: () => Promise<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.main
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action<void>>) => {
    return {
        pushDoListButton: () => dispatch(mainButtonActions.pushDoListButton()),
        pushDoneListButton: () => dispatch(mainButtonActions.pushDoneListButton()),
        slideToggleButton: () => dispatch(mainButtonActions.slideToggleButton()),
        pushPlusButton: () => dispatch(mainButtonActions.pushPlusButton()),
        pushCloseButton: () => dispatch(mainButtonActions.pushCloseButton()),
        getTodo: () => dispatch(getTodo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);