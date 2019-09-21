import React from "react";
import "./Todo.scss";

interface TodoInterface {
    text: string;
    todoBarStyle: any;
}

const Todo: React.FC<TodoInterface> = props => {
    return (
        <div className="Todo">
            <ul className="Todo__list">
                <li className="Todo__item">
                    <div className="Todo__inner">
                        <div className="Todo__bgBar">
                            <span
                                className="Todo__bar"
                                style={props.todoBarStyle}
                            />
                        </div>
                        <p className="Todo__text">{props.text}</p>
                    </div>
                </li>
                <li className="Todo__item">
                    <div className="Todo__inner">
                        <div className="Todo__bgBar">
                            <span
                                className="Todo__bar"
                                style={props.todoBarStyle}
                            />
                        </div>
                        <p className="Todo__text">{props.text}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Todo;