import React, { FC } from "react";
import "./ReturnButton.scss";

interface ReturnButton {
    onClick: any;
}

const ReturnButton: FC<ReturnButton> = props => {
    return (
        <button
            className="ReturnButton"
            onClick={props.onClick}
        >
            <span className="ReturnButton__icon" />
        </button>
    )
}

export default ReturnButton;