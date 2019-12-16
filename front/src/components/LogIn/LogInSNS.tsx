import React, { FC } from "react";
import "./LogInSNS.scss";

interface LogInSNSInterface {
  src: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LogInInputBox: FC<LogInSNSInterface> = props => {
  return (
    <button className="LogInSNS" onClick={props.onClick}>
      <img src={props.src} alt={props.alt} />
    </button>
  );
};

export default LogInInputBox;
