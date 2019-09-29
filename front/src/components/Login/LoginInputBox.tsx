import React from "react";
import "./LoginInputBox.scss";

interface LoginInputBoxInterface {
    placeholder: string;
    type: string;
    name: string;
    onChange: any;
}

const LoginInputBox: React.FC<LoginInputBoxInterface> = props => {
    return (
        <input
            className="LoginInputBox"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
        />
    )
}

export default LoginInputBox;