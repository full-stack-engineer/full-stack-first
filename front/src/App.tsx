import React, { FC, useState, useEffect } from "react";
import Loading from "./module/Loading/Loading";
import LogInContainer from "./redux/container/logInContainer";
import MainContainer from "./redux/container/mainContainer";
import SelectContainer from "./redux/container/selectContainer";
import { UserState } from "./redux/states/userState";
import { UserAction } from "./redux/container/appContainer";
import { decrypt } from "./lib/lib";
import store from "./redux/store";

type AppProps = UserState & UserAction;

const App: FC<AppProps> = (props: AppProps) => {
  const [loading, setLoading] = useState(true);
  const setLoadingTime = (timeout: number): void => {
    setTimeout(() => {
      setLoading(false);
    }, timeout);
  }

  store.subscribe(() => {
    store.getState().user.loading === true || store.getState().main.loading === true
      ? setLoading(true)
      : setLoadingTime(1000);
  });

  useEffect(() => {
    (localStorage.email && localStorage.password !== undefined)
      ? props.postLogIn(decrypt(String(localStorage.getItem("email"))), decrypt(String(localStorage.getItem("password"))))
      : setLoadingTime(1000);
  }, []);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {props.logInStatus
        ? <MainContainer />
        : <React.Fragment>
          {props.createAccount || props.logIn
            ? <LogInContainer />
            : <SelectContainer />}
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default App;