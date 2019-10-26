import React, { FC } from "react";
import "./LoginInputBox.scss";

interface LoginInputBoxInterface {
    placeholder: string;
    type: "text" | "email" | "password";
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInputBox: FC<LoginInputBoxInterface> = props => {
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