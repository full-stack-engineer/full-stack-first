import React, { FC } from "react";
import "./LoginButton.scss"

interface LoginButtonInterface {
    buttonText: string;
    type: "button" | "submit" | "reset";
    name: string;
    value: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LoginButton: FC<LoginButtonInterface> = props => {
    return (
        <button
            className="LoginButton"
            type={props.type}
            name={props.name}
            value={props.value}
            onClick={props.onClick}
        >
            {props.buttonText}
        </button>
    )
}

export default LoginButton;