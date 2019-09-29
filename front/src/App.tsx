import React, { Component } from "react";
import Main from "./components/Main/Main";
import LoginContainer from "./redux/container/loginContainer";
import Store from "./redux/store";

interface AppInterface {
  id?: number;
  accessToken?: string;
  client?: string;
  uid?: string;
}

Store.subscribe(() =>
  console.log(Store.getState())
)

export default class App extends Component<{}, AppInterface> {
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
      accessToken: results.headers["access-token"],
      client: results.headers.client,
      uid: results.headers.uid
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.accessToken
          ? <Main />
          : <LoginContainer />
        }
      </div>
    )
  }
}