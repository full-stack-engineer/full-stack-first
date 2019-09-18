import * as React from "react";
import * as ReactDOM from "react-dom";
import "../scss/reset.scss";
import "../scss/base.scss"
import App from "../components/App"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
})