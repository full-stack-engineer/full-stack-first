import React, { FC } from "react";
import "./AddTodoButton.scss";

interface AddTodoButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AddTodoButton: FC<AddTodoButton> = props => {
    return (
        <button
            className="AddTodoButton"
            onClick={props.onClick}
        >
            追加する
        </button>
    )
}

export default AddTodoButton;