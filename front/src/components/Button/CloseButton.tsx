import React, { FC } from "react";
import "./CloseButton.scss";

interface CloseButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CloseButton: FC<CloseButton> = props => {
    return (
        <button
            className="CloseButton"
            onClick={props.onClick}
        />
    )
}

export default CloseButton;