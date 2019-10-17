import React, { FC, useState, useEffect } from "react";
import LoginContainer from "./redux/container/loginContainer";
import MainContainer from "./redux/container/mainContainer";
import SelectContainer from "./redux/container/selectContainer";
import store from "./redux/store";

export interface AppInterface {
  loginStatus?: boolean
}

const App: FC<AppInterface> = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [select, setSelect] = useState(false);

  store.subscribe(() => {
    if (store.getState().login.loginStatus === true) {
      setLoginStatus(true);
    }
    if (store.getState().select.createAccount === true || store.getState().select.login === true) {
      setSelect(true);
    } else {
      setSelect(false)
    }
  });

  useEffect(() => {
    if (localStorage.accessToken !== undefined) {
      setLoginStatus(true);
    }
  }, [])

  return (
    <div>
      {loginStatus ?
        <MainContainer /> :
        <React.Fragment>
          {select ?
            <LoginContainer /> :
            <SelectContainer />}
        </React.Fragment>
      }
    </div>
  )
}

export default App;