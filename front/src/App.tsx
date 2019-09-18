import React, { Component } from "react";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Main />
      </div>
    )
  }
}