import React, { FC } from "react";
import "./ReturnButton.scss";

interface ReturnButton {
    returnButtonFlg: any;
}

const ReturnButton: FC<ReturnButton> = props => {
    return (
        <button
            className="ReturnButton"
            onClick={props.returnButtonFlg}
        >
            <span className="ReturnButton__icon" />
        </button>
    )
}

export default ReturnButton;