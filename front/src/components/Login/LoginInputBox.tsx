import React from "react";
import "./LoginInputBox.scss";

interface LoginInputBoxInterface {
    placeholder: string;
    type?: string;
    name?: string;
    updateLoginValue: any;
}

const LoginInputBox: React.FC<LoginInputBoxInterface> = props => {
    return (
        <input
            className="LoginInputBox"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={(e) => props.updateLoginValue(e.target.name, e.target.value)}
        />
    )
}

export default LoginInputBox;