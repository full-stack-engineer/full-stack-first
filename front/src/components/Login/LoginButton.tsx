import React, { FC } from "react";
import "./LogInButton.scss"

interface LogInButtonInterface {
    buttonText: string;
    type: "button" | "submit" | "reset";
    name: string;
    value: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LogInButton: FC<LogInButtonInterface> = props => {
    return (
        <button
            className="LogInButton"
            type={props.type}
            name={props.name}
            value={props.value}
            onClick={props.onClick}
        >
            {props.buttonText}
        </button>
    )
}

export default LogInButton;