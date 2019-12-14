import React, { FC, useState, useEffect } from "react";
import Loading from "./module/Loading/Loading";
import LogInContainer from "./redux/container/logInContainer";
import MainContainer from "./redux/container/mainContainer";
import WelcomeContainer from "./redux/container/welcomeContainer";
import { UserState } from "./redux/states/userState";
import { UserAction } from "./redux/container/appContainer";
import { useTransition, animated } from "react-spring";
import { decrypt } from "./lib/lib";
import store from "./redux/store";

type AppProps = UserState & UserAction;

const App: FC<AppProps> = (props: AppProps) => {
  const [loading, setLoading] = useState(true);
  const setLoadingTime = (timeout: number): void => {
    setTimeout(() => {
      setLoading(false);
    }, timeout);
  };

  const transitionWelcome = useTransition(
    props.createAccount || props.logIn,
    null,
    {
      from: { position: "absolute", left: "-100%", width: "100%" },
      enter: { position: "absolute", left: "0%", width: "100%" },
      leave: { position: "absolute", left: "-100%", width: "100%" }
    }
  );

  const transitionLogIn = useTransition(
    props.createAccount || props.logIn,
    null,
    {
      from: { position: "absolute", left: "100%", zIndex: 2, width: "100%" },
      enter: { position: "absolute", left: "0%", zIndex: 2, width: "100%" },
      leave: { position: "absolute", left: "100%", zIndex: 2, width: "100%" }
    }
  );

  store.subscribe(() => {
    store.getState().user.loading === true
      ? setLoading(true)
      : setLoadingTime(1000);
  });

  useEffect(() => {
    localStorage.email && localStorage.password !== undefined
      ? props.postLogIn(
          decrypt(String(localStorage.getItem("email"))),
          decrypt(String(localStorage.getItem("password")))
        )
      : setLoadingTime(1000);
  }, []);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {props.logInStatus ? (
        <MainContainer />
      ) : (
        <React.Fragment>
          {transitionWelcome.map(
            ({ item, key, props }) =>
              !item && (
                <animated.div key={key} style={props}>
                  <WelcomeContainer />
                </animated.div>
              )
          )}
          {transitionLogIn.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <LogInContainer />
                </animated.div>
              )
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
