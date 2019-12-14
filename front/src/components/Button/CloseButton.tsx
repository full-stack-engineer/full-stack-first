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
        >
            <span className="CloseButton__inner" />
        </button>
    )
}

export default CloseButton;