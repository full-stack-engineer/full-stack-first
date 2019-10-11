import React, { FC, useState, useEffect } from "react";
import Welcome from "./components/Welcome/Welcome";
import LoginContainer from "./redux/container/loginContainer";
import MainContainer from "./redux/container/mainContainer";
import store from "./redux/store";

export interface AppInterface {
  loginStatus?: boolean
}

const App: FC<AppInterface> = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  store.subscribe(() => {
    if (store.getState().login.loginStatus === true) {
      setLoginStatus(true);
    }
  });

  useEffect(() => {
    if (localStorage.accessToken !== undefined) {
      setLoginStatus(true);
    }
  }, [])

  return (
    <div>
      <Welcome />
      {loginStatus
        ? <MainContainer />
        : <LoginContainer />
      }
    </div>
  )
}

export default App;