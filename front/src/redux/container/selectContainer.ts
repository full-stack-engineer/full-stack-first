import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { AppState } from "../store";
import { Dispatch } from "redux";
import { selectActions } from "../actions/actionTypes";
import Welcome from "../../components/Welcome/Welcome";

export interface SelectAction {
    selectCreateAccountButton: () => Action<void>;
    selectLoginButton: () => Action<void>;
    backToTopButton: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.select
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<void>>) => {
    return {
        selectCreateAccountButton: () => dispatch(selectActions.selectCreateAccountButton()),
        selectLoginButton: () => dispatch(selectActions.selectLoginButton()),
        backToTopButton: () => dispatch(selectActions.backToTopButton())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);