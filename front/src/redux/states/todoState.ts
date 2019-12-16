import { reducerWithInitialState } from "typescript-fsa-reducers";
import { todoActions } from "../actions/actionTypes";

export interface TodoState {
  scrollState: boolean;
  deleteFlag: boolean;
}

const initialState: TodoState = {
  scrollState: false,
  deleteFlag: false
};

export const todoReducer = reducerWithInitialState(initialState)
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
