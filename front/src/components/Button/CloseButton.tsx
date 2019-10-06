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
        />
    )
}

export default CloseButton;