import React from "react";
import "./DoneListButton.scss";

const DoneListButton: React.FC = props => {
    return (
        <button
            className="DoneListButton"
            onClick={() => console.log("DoneListButton")}
        >
            <span className="DoneListButton__icon" />
        </button>
    )
}

export default DoneListButton;