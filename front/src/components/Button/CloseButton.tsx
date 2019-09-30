import React, { FC } from "react";
import "./CloseButton.scss";

interface CloseButton {
    plusButtonFlg: any;
}

const CloseButton: FC<CloseButton> = props => {
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