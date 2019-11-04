import React, { FC, useState, useEffect } from "react";
import Loading from "./module/Loading/Loading";
import LoginContainer from "./redux/container/loginContainer";
import MainContainer from "./redux/container/mainContainer";
import SelectContainer from "./redux/container/selectContainer";
import store from "./redux/store";

const App: FC = () => {
  const [loading, setLoading] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [select, setSelect] = useState(false);

  const setLoadingTime = (timeout: number): void => {
    setTimeout(() => {
      setLoading(false);
    }, timeout);
  }

  store.subscribe(() => {
    if (store.getState().login.loginStatus) {
      setLoginStatus(true);
    }
    store.getState().login.loading || store.getState().main.loading
      ? setLoading(true)
      : setLoadingTime(1000);
    store.getState().select.createAccount || store.getState().select.login
      ? setSelect(true)
      : setSelect(false);
  });

  useEffect(() => {
    if (localStorage.accessToken !== undefined) {
      setLoginStatus(true);
    } else {
      setLoadingTime(1000);
    }
  }, [])

  return (
    <React.Fragment>
      {loading && <Loading />}
      {loginStatus ? <MainContainer /> :
        <React.Fragment>
          {select ? <LoginContainer /> : <SelectContainer />}
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default App;