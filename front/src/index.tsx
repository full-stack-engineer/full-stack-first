import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./scss/base.scss";
import "./scss/reset.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
})