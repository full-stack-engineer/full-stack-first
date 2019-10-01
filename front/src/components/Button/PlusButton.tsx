import React, { FC } from "react";
import "./PlusButton.scss";

interface PlusButton {
    plusButtonFlg: any
}

const PlusButton: FC<PlusButton> = props => {
    return (
        <div className="PlusButton">
            <button
                className="PlusButton__plus"
                onClick={props.plusButtonFlg}
            >
                <span className="PlusButton__icon" />
            </button>
        </div>
    )
}

export default PlusButton;