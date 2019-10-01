import React, { FC, useState, useEffect } from "react";
import Main from "./components/Main/Main";
import LoginContainer from "./redux/container/loginContainer";
import { TodoState } from "./redux/states/todoState";
import store from "./redux/store";
import { TodoAction } from "./redux/container/todoContainer";

export interface AppInterface {
  loginStatus?: boolean
}

type AppProps = AppInterface & TodoState & TodoAction;

let count = 0;

const App: FC<AppProps> = (props: AppProps) => {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().login.loginStatus === true) {
        setLoginStatus(true);
        if (count !== 1) {
          count++;
          props.getTodo();
        }
      }
    })
  })
  return (
    <div>
      {loginStatus
        ? <Main />
        : <LoginContainer />
      }
    </div>
  )
}

export default App;