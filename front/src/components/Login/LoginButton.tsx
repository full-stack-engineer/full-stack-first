import React from "react";
import "./LoginButton.scss"

interface LoginButtonInterface {
    href: string;
    buttonText: string;
    type?: "button" | "submit" | "reset";
    name?: string;
    value?: string;
}

const LoginButton: React.FC<LoginButtonInterface> = props => {
    return (
        <div className="LoginButton">
            <a className="LoginButton__link" href={props.href}>
                <button
                    className="LoginButton__button"
                    type={props.type}
                    name={props.name}
                    value={props.value}
                >
                    {props.buttonText}
                </button>
            </a>
        </div>
    )
}

export default LoginButton;