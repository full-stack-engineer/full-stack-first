import React, { FC, useState } from "react";
import { MainState } from "../../redux/states/mainState";
import { TodoAction } from "../../redux/container/todoContainer";
import { dateShaping } from "../../lib/lib";
import store from "../../redux/store";
import "./Todo.scss";

interface TodoInterface {
    todos: TodoResponseData[];
}

export interface TodoResponseData {
    content: string;
    created_at: string;
    id: number;
    progress: number;
    updated_at: string;
    user_id: number;
}

// eventだけでなく、event.currentTargetで渡してあげないと参照する値が変化する
let timerId: NodeJS.Timeout;
let progressCounter = 0;
let count = 0;
let setId = 0;
const downSetInterval = (event: any, itemProgress: number, itemId: number) => {
    const processing = (time: number) => {
        timerId = setInterval(() => {
            if (itemProgress + count <= 100) {
                event.getElementsByTagName("span")[0].style.cssText = `width:${itemProgress + count++}%`;
                progressCounter = itemProgress + count - 1;
            }
        }, time);
    }
    switch (true) {
        case count === 0:
            processing(34);
            setId = itemId;
            break;
        case count !== 0:
            if (setId === itemId) {
                processing(34);
            } else {
                count = 0;
                setId = itemId;
                processing(34);
            }
            break;
        default:
            break;
    }
}

const upClearInterval = (timerId: NodeJS.Timeout) => {
    clearInterval(timerId);
}

type TodoProps = TodoInterface & MainState & TodoAction;

const Todo: FC<TodoProps> = (props: TodoProps) => {
    const [doList, setDoList] = useState(false);
    store.subscribe(() => {
        store.getState().main.toggle
            ? setDoList(true)
            : setDoList(false)
    });
    return (
        <div className="Todo">
            <ul className="Todo__list">
                {props.todos.length === 0 &&
                    <div className="Todo__box">
                        <div className="Todo__boxInner">
                            <p className="Todo__text">「+」ボタンから<br />タスクを追加してみよう！</p>
                        </div>
                    </div>
                }
                {props.todos
                    .filter(item => (
                        doList
                            ? item.progress !== 100
                            : item.progress === 100
                    ))
                    .map((item, i) => (
                        <li className="Todo__item" key={i}>
                            <div
                                className="Todo__box"
                                onMouseDown={e => downSetInterval(e.currentTarget, item.progress, item.id)}
                                onMouseUp={() => {
                                    props.putTodo(item.id, item.content, progressCounter);
                                    upClearInterval(timerId);
                                }}
                                onTouchStart={e => downSetInterval(e.currentTarget, item.progress, item.id)}
                                onTouchEnd={() => {
                                    props.putTodo(item.id, item.content, progressCounter);
                                    upClearInterval(timerId);
                                }}
                            >
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
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;