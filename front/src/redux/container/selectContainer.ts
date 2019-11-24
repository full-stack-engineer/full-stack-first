import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { Dispatch } from "redux";
import { selectActions } from "../actions/actionTypes";
import Welcome from "../../module/Welcome/Welcome";

export interface SelectAction {
    selectCreateAccountButton: () => Action<void>;
    selectLogInButton: () => Action<void>;
    backToTopButton: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.user
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<void>>) => {
    return {
        selectCreateAccountButton: () => dispatch(selectActions.selectCreateAccountButton()),
        selectLogInButton: () => dispatch(selectActions.selectLogInButton()),
        backToTopButton: () => dispatch(selectActions.backToTopButton())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);