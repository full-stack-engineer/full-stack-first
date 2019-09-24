import React from "react";
import "./CloseButton.scss";

interface CloseButton {
    plusButtonFlg: any;
}

const CloseButton: React.FC<CloseButton> = props => {
    return (
        <button
            className="CloseButton"
            onClick={props.plusButtonFlg}
        >
            <span className="CloseButton__icon" />
        </button>
    )
}

export default CloseButton;