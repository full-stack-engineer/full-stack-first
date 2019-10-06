import React, { FC } from "react";
import "./DoneListButton.scss";

const DoneListButton: FC = props => {
    return (
        <button
            className="DoneListButton"
            onClick={() => console.log("DoneListButton")}
        />
    )
}

export default DoneListButton;