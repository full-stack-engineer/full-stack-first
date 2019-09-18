import React from "react";
import "./Todo.scss";

interface TodoInterface {
    text: string;
}

const Todo: React.FC<TodoInterface> = props => {
    return (
        <div className="Todo">
            <p className="Todo__text">{props.text}</p>
        </div>
    )
}

export default Todo;