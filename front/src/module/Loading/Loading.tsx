import React, { FC } from "react";
import icon from "../../assets/icon.svg";
import "./Loading.scss";

const Loading: FC = props => {
    return (
        <div className="Loading">
            <img
                className="Loading__icon Loading__icon--animation"
                src={icon}
                alt="dogressのアイコン" />
        </div>
    )
}

export default Loading;
