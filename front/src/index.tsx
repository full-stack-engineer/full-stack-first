import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store"
import AppContainer from "./redux/container/todoContainer"
import "./scss/reset.scss";
import "./scss/base.scss";

ReactDOM.render(
    <Provider store={Store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root") as HTMLElement
);