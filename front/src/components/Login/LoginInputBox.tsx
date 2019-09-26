import React from "react";
import { LoginState } from "../../redux/states/loginState";
import { LoginAction } from "../../redux/container/loginContainer";
import "./LoginInputBox.scss";

interface LoginInputBoxInterface {
    placeholder?: string;
    type?: string;
    name?: string;
    updateLoginValue?: any;
}

type LoginProps = LoginInputBoxInterface & LoginState & LoginAction;

const LoginInputBox: React.FC<LoginProps> = (props: LoginProps) => {
    return (
        <input
            className="LoginInputBox"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={(e) => props.inputEmail(e.target.type)}
        />
    )
}

export default LoginInputBox;