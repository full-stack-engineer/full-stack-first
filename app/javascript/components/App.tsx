import React, { Component } from "react";
import Login from "./Login/Login";
import Main from "./Main/Main"

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