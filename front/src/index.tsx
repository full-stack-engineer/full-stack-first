import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store"
import AppContainer from "./redux/container/appContainer";
import "./scss/reset.scss";
import "./scss/base.scss";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root") as HTMLElement
);

serviceWorker.register();