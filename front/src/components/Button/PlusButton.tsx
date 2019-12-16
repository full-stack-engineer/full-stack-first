import React, { FC } from "react";
import "./PlusButton.scss";

interface PlusButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PlusButton: FC<PlusButton> = props => {
  return <button className="PlusButton" onClick={props.onClick} />;
};

export default PlusButton;
