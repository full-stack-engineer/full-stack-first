import React, { FC, useState } from "react";
import store from "../../redux/store";
import "./Todo.scss";

interface TodoInterface {
    todos: TodoResponseData[];
}

export interface TodoResponseData {
    id: number;
    content: string;
    user_id: number;
    progress: number;
    created_at: string;
    updated_at: string;
}

const dateShaping = (value: string, select: string): string => {
    const processingDate = value.split("T");
    let date = "";
    switch (true) {
        case select === "day":
            date = processingDate[0].replace(/-/g, ".");
            break;
        case select === "time":
            date = processingDate[1].substr(0, 5);
            break;
    }
    return date;
}

const Todo: FC<TodoInterface> = props => {
    const [doList, setDoList] = useState(false);
    store.subscribe(() => {
        store.getState().main.toggle
            ? setDoList(true)
            : setDoList(false)
    });
    return (
        <div className="Todo">
            <ul className="Todo__list">
                {props.todos
                    .filter(item => (
                        doList
                            ? item.progress !== 100
                            : item.progress === 100
                    ))
                    .map((item, i) => (
                        <li className="Todo__item" key={i}>
                            {props.todos.length === 0
                                ? <div className="Todo__box">
                                    <div className="Todo__boxInner">
                                        <p className="Todo__text">「+」ボタンから<br />タスクを追加してみよう！</p>
                                    </div>
                                </div>
                                : <div className="Todo__box">
                                    <div className="Todo__boxInner">
                                        {doList
                                            ? <div className="Todo__bgBar">
                                                <span
                                                    className="Todo__bar"
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                            : <div className="Todo__success">
                                                <span className="Todo__successDay">{dateShaping(item.updated_at, "day")}</span>
                                                <span className="Todo__successTime">{dateShaping(item.updated_at, "time")}</span>
                                            </div>
                                        }
                                        <p className="Todo__text">{item.content}</p>
                                    </div>
                                </div>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;