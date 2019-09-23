import React from "react";
import "./AddTaskButton.scss";

interface AddTaskButton {
    plusButtonFlg: any;
}

const AddTaskButton: React.FC<AddTaskButton> = props => {
    return (
        <div className="AddTaskButton">
            <button
                className="AddTaskButton__plus"
                onClick={props.plusButtonFlg}
            >
                追加する
                </button>
        </div>
    )
}

export default AddTaskButton;