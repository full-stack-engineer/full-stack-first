import { reducerWithInitialState } from "typescript-fsa-reducers";
import { selectActions, userActions } from "../actions/actionTypes";
import { encrypt } from "../../lib/lib";

export interface UserState {
  createAccount: boolean;
  logIn: boolean;
  name: string;
  email: string;
  password: string;
  passwordConfirmd: string;
  loading: boolean;
  logInStatus: boolean;
  error: ErrorConstructor;
  results: {
    data: {
      token: {
        access_token: string;
        refresh_token: string;
      };
      user: {
        name: string;
      };
    };
  };
}

const initialUserState: UserState = {
  createAccount: false,
  logIn: false,
  name: "",
  email: "",
  password: "",
  passwordConfirmd: "",
  loading: false,
  logInStatus: false,
  error: null,
  results: {
    data: {
      token: {
        access_token: "",
        refresh_token: ""
      },
      user: {
        name: ""
      }
    }
  }
};

export const logInReducer = reducerWithInitialState(initialUserState)
  .case(selectActions.selectCreateAccountButton, state => {
    return {
      ...state,
      createAccount: true
    };
  })
  .case(selectActions.selectLogInButton, state => {
    return {
      ...state,
      logIn: true
    };
  })
  .case(selectActions.backToTopButton, state => {
    return {
      ...state,
      createAccount: false,
      logIn: false
    };
  })
  .case(userActions.inputName, (state, name) => {
    return {
      ...state,
      name
    };
  })
  .case(userActions.inputEmail, (state, email) => {
    return {
      ...state,
      email
    };
  })
  .case(userActions.inputPassword, (state, password) => {
    return {
      ...state,
      password
    };
  })
  .case(userActions.inputPasswordConfirmd, (state, passwordConfirmd) => {
    return {
      ...state,
      passwordConfirmd
    };
  })
  .case(userActions.pushLogInButton, state => {
    localStorage.email = encrypt(state.email);
    localStorage.password = encrypt(state.password);
    return {
      ...state
    };
  })
  .case(userActions.loadAllUserInfo.started, state => {
    return {
      ...state,
      loading: true,
      logInStatus: false,
      error: null
    };
  })
  .case(userActions.loadAllUserInfo.done, (state, payload: any) => {
    return {
      ...state,
      results: payload.result,
      loading: false,
      logInStatus: true,
      error: null
    };
  })
  .case(userActions.loadAllUserInfo.failed, (state, payload: any) => {
    return {
      ...state,
      loading: false,
      logInStatus: false,
      error: payload.error
    };
  });
