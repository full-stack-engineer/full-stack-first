import React, { FC } from "react";
import "./AddTaskButton.scss";

interface AddTaskButton {
    plusButtonFlg: any;
    postTextAreaValue: any;
}

const AddTaskButton: FC<AddTaskButton> = props => {
    return (
        <div className="AddTaskButton">
            <button
                className="AddTaskButton__plus"
                onClick={() => {
                    props.plusButtonFlg()
                    props.postTextAreaValue()
                }}
            >
                追加する
                </button>
        </div>
    )
}

export default AddTaskButton;