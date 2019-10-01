import React, { FC } from "react";
import "./LoginInputBox.scss";

interface LoginInputBoxInterface {
    placeholder: string;
    type: string;
    name: string;
    onChange: any;
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