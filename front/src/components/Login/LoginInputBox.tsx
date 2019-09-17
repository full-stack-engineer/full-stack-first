import React from "react";
import "./LoginInputBox.scss";

interface LoginInputBoxInterface {
    placeholder: string;
    type?: string;
    name?: string;
    value?: string;
}

const LoginInputBox: React.FC<LoginInputBoxInterface> = props => {
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