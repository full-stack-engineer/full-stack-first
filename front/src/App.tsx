import React, { Component } from "react";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

export default class App extends Component {
  constructor(props: {}) {
    super(props);
    this.getLoginResult = this.getLoginResult.bind(this);
    this.state = {
      id: 0,
      accessToken: "",
      client: "",
      uid: "",
    }
  }

  getLoginResult(results: any) {
    this.setState({
      id: results.data.data.id,
      accessToken: results.headers['access-token'],
      client: results.headers.client,
      uid: results.headers.uid
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Login getLoginResult={this.getLoginResult} />
        <Main />
      </div>
    )
  }
}