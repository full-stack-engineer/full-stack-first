import React from "react";
import "./Hello.scss"

interface HelloInterface {
    text: string;
}

const Hello: React.FC<HelloInterface> = props => {
    return (
        <p>{props.text}</p>
    )
}

export default Hello;
