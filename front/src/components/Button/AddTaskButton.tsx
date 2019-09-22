import React from "react";
import "./AddTaskButton.scss";

const AddTaskButton: React.FC = () => {
    return (
        <div className="AddTaskButton">
            <a className="AddTaskButton__link" href="#dummy">
                <button className="AddTaskButton__plus">
                    <span className="AddTaskButton__icon" />
                </button>
            </a>
        </div>
    )
}

export default AddTaskButton;