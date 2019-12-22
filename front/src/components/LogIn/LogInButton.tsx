import React, { FC } from "react";
import "./LogInButton.scss";

interface LogInButtonInterface {
  buttonText: string;
  type: "button" | "submit" | "reset";
  name: string;
  value: string;
  disabled?: boolean;
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
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
};

export default LogInButton;
