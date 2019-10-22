import React, { FC } from "react";
import "./AddTodoButton.scss";

interface AddTodoButton {
    onClick?: any
    postTextAreaValue: any;
}

const AddTodoButton: FC<AddTodoButton> = props => {
    return (
        <button
            className="AddTodoButton"
            onClick={() => {
                props.onClick()
                props.postTextAreaValue()
            }}
        >
            追加する
        </button>
    )
}

export default AddTodoButton;