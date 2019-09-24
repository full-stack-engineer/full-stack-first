import React from "react";
import "./DoListButton.scss";

const DoListButton: React.FC = props => {
    return (
        <button
            className="DoListButton"
            onClick={() => console.log("DoListButton")}
        >
            <span className="DoListButton__icon" />
        </button>
    )
}

export default DoListButton;