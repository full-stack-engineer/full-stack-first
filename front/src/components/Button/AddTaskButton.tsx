import React, { FC } from "react";
import "./AddTaskButton.scss";

interface AddTaskButton {
    plusButtonFlg: any;
    postTextAreaValue: any;
}

const AddTaskButton: FC<AddTaskButton> = props => {
    return (
        <button
            className="AddTaskButton"
            onClick={() => {
                props.plusButtonFlg()
                props.postTextAreaValue()
            }}
        >
            追加する
        </button>
    )
}

export default AddTaskButton;