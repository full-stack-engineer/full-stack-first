import React from "react";
import "./LoginButton.scss"

interface LoginButtonInterface {
    href: string;
    buttonText: string;
    type?: "button" | "submit" | "reset";
    name?: string;
    value?: string;
    onClick?: any;
}

const LoginButton: React.FC<LoginButtonInterface> = props => {
    return (
        <div className="LoginButton">
            <button
                className="LoginButton__button"
                type={props.type}
                name={props.name}
                value={props.value}
                onClick={props.onClick}
            >
                {props.buttonText}
            </button>
        </div>
    )
}

export default LoginButton;