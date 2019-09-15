import React, { Component } from "react";
import Hello from "./Hello/Hello"

export default class App extends Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <Hello text="hogehogehoge" />
        )
    }
}