import { reducerWithInitialState } from "typescript-fsa-reducers";
import { todoActions } from "../actions/actionTypes";

export interface TodoState {
  progressCounter: number;
  scrollState: boolean;
  deleteFlag: boolean;
}

const initialState: TodoState = {
  progressCounter: 0,
  scrollState: false,
  deleteFlag: false
};

export const todoReducer = reducerWithInitialState(initialState)
  .case(todoActions.pushProgressCounter, state => {
    return {
      ...state,
      progressCounter: state.progressCounter + 1
    };
  })
  .case(todoActions.clearProgressCounter, state => {
    return {
      ...state,
      progressCounter: 0
    };
  })
  .case(todoActions.scrollStart, state => {
    return {
      ...state,
      scrollState: true
    };
  })
  .case(todoActions.scrollEnd, state => {
    return {
      ...state,
      scrollState: false
    };
  });
