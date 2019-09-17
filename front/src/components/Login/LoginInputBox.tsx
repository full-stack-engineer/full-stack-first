import React from "react";
import "./LoginInputBox.scss";

interface ILoginInputBoxInterface {
    placeholder: string;
    type?: string;
    name?: string;
    value?: string;
}

const LoginInputBox: React.FC<ILoginInputBoxInterface> = props => {
    return (
        <input
            className="LoginInputBox"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            value={props.value}
        />
    )
}

export default LoginInputBox;