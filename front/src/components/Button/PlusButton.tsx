import React, { FC } from "react";
import "./PlusButton.scss";

interface PlusButton {
    plusButtonFlg: any
}

const PlusButton: FC<PlusButton> = props => {
    return (
        <button
            className="PlusButton"
            onClick={props.plusButtonFlg}
        />
    )
}

export default PlusButton;