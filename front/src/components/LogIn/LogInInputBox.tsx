import React, { FC } from "react";
import "./LogInInputBox.scss";

interface LogInInputBoxInterface {
    placeholder: string;
    type: "text" | "email" | "password";
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LogInInputBox: FC<LogInInputBoxInterface> = props => {
    return (
        <input
            className="LogInInputBox"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
        />
    )
}

export default LogInInputBox;