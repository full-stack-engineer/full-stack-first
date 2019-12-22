import React, { FC } from "react";
import "./AddTodoButton.scss";

interface AddTodoButton {
  disable: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AddTodoButton: FC<AddTodoButton> = props => {
  return (
    <button
      className="AddTodoButton"
      onClick={props.onClick}
      disabled={props.disable}
    >
      追加する
    </button>
  );
};

export default AddTodoButton;
