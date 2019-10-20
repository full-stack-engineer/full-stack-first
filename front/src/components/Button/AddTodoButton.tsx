import React, { FC } from "react";
import "./AddTodoButton.scss";

interface AddTodoButton {
    plusButtonFlg: any;
    postTextAreaValue: any;
}

const AddTodoButton: FC<AddTodoButton> = props => {
    return (
        <button
            className="AddTodoButton"
            onClick={() => {
                props.plusButtonFlg()
                props.postTextAreaValue()
            }}
        >
            追加する
        </button>
    )
}

export default AddTodoButton;