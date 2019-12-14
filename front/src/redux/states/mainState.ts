import { reducerWithInitialState } from "typescript-fsa-reducers";
import { todoActions, mainButtonActions } from "../actions/actionTypes";

export interface MainState {
  textarea: string;
  loading: boolean;
  error: object;
  data: {
    content: string;
    created_at: string;
    id: number;
    progress: number;
    updated_at: string;
    user_id: number;
  }[];
  doList: boolean;
  doneList: boolean;
  toggle: boolean;
  puls: boolean;
  doProgress: number;
  doneProgress: number;
  updateDataFlag: boolean;
}

const initialState: MainState = {
  textarea: "",
  loading: false,
  error: {},
  data: [
    {
      content: "",
      created_at: "",
      id: 0,
      progress: 0,
      updated_at: "",
      user_id: 0
    }
  ],
  doList: false,
  doneList: false,
  toggle: true,
  puls: false,
  doProgress: 0,
  doneProgress: 0,
  updateDataFlag: false
};

export const mainReducer = reducerWithInitialState(initialState)
  .case(todoActions.inputTextarea, (state, textarea) => {
    return {
      ...state,
      textarea
    };
  })
  .case(todoActions.getTodo.started, state => {
    return {
      ...state,
      loading: true,
      error: {}
    };
  })
  .case(todoActions.getTodo.done, (state, payload: any) => {
    return {
      ...state,
      data: payload.result,
      loading: false,
      error: {}
    };
  })
  .case(todoActions.getTodo.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error
    };
  })
  .case(todoActions.postTodo.started, state => {
    return {
      ...state
    };
  })
  .case(todoActions.postTodo.done, state => {
    return {
      ...state,
      updateDataFlag: !state.updateDataFlag
    };
  })
  .case(todoActions.postTodo.failed, state => {
    return {
      ...state
    };
  })
  .case(todoActions.putTodo.started, state => {
    return {
      ...state
    };
  })
  .case(todoActions.putTodo.done, state => {
    return {
      ...state,
      updateDataFlag: !state.updateDataFlag
    };
  })
  .case(todoActions.putTodo.failed, state => {
    return {
      ...state
    };
  })
  .case(todoActions.deleteTodo.started, state => {
    return {
      ...state
    };
  })
  .case(todoActions.deleteTodo.done, state => {
    return {
      ...state,
      updateDataFlag: !state.updateDataFlag
    };
  })
  .case(todoActions.deleteTodo.failed, state => {
    return {
      ...state
    };
  })
  .case(mainButtonActions.pushDoListButton, state => {
    return {
      ...state,
      doList: true
    };
  })
  .case(mainButtonActions.pushDoneListButton, state => {
    return {
      ...state,
      doneList: true
    };
  })
  .case(mainButtonActions.slideToggleButton, state => {
    return {
      ...state,
      toggle: !state.toggle
    };
  })
  .case(mainButtonActions.pushPlusButton, state => {
    return {
      ...state,
      puls: true
    };
  })
  .case(mainButtonActions.pushCloseButton, state => {
    return {
      ...state,
      doList: false,
      doneList: false,
      puls: false
    };
  })
  .case(todoActions.addDoProgress, state => {
    return {
      ...state,
      doProgress: state.doProgress + 1
    };
  })
  .case(todoActions.addDoneProgress, state => {
    return {
      ...state,
      doneProgress: state.doneProgress + 1
    };
  });
