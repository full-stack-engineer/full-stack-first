import React, { FC, useState, useEffect, useRef } from "react";
import CloseButton from "../Button/CloseButton";
import { TodoState } from "../../redux/states/todoState";
import { TodoAction } from "../../redux/container/todoContainer";
import { dateShaping } from "../../lib/lib";
import { todoActions } from "../../redux/actions/actionTypes";
import { scrollJudge } from "../../lib/lib";
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
let progressTimerId: NodeJS.Timeout;
let delayTimerId: NodeJS.Timeout;
let progressCounter = 0;
let count = 0;
let setId = 0;
const downSetInterval = (
    event: any,
    itemProgress: number,
    itemId: number
) => {
    const processing = (time: number) => {
        delayTimerId = setTimeout(() => {
            if (store.getState().todo.scrollState === false) {
                const todoBar = event.querySelector(".Todo__bar");
                progressTimerId = setInterval(() => {
                    if (todoBar && itemProgress + count < 100) {
                        store.dispatch(todoActions.pushProgressCounter());
                        todoBar.style.cssText = `width:${itemProgress + count}%`;
                        progressCounter = itemProgress + count;
                    }
                }, time);
            }
        }, 200)
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
                store.dispatch(todoActions.clearProgressCounter());
                setId = itemId;
                processing(34);
            }
            break;
        default:
            break;
    }
}

const upClearInterval = (setIntervalId: NodeJS.Timeout, setTimeoutId: NodeJS.Timeout) => {
    clearInterval(setIntervalId);
    clearInterval(setTimeoutId)
}

type TodoProps = TodoInterface & TodoState & TodoAction;

const Todo: FC<TodoProps> = (props: TodoProps) => {
    const [doList, setDoList] = useState(false);
    const todoListRef = useRef(null);

    useEffect(() => {
        todoListRef.current.scrollLeft = 0;
    }, [doList])

    store.subscribe(() => {
        store.getState().main.toggle
            ? setDoList(true)
            : setDoList(false)
        count = store.getState().todo.progressCounter
    });

    return (
        <div className="Todo">
            <ul className="Todo__list"
                ref={todoListRef}
                onScroll={scrollJudge}
            >
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
                            <CloseButton onClick={() => {
                                props.deleteTodo(item.id);
                                setTimeout(() => {
                                    props.getTodo();
                                }, 1000)
                            }} />
                            <div
                                className="Todo__box"
                                onMouseDown={e =>
                                    !props.scrollState && downSetInterval(
                                        e.currentTarget,
                                        item.progress,
                                        item.id
                                    )
                                }
                                onMouseUp={() => {
                                    props.putTodo(
                                        item.id,
                                        item.content,
                                        progressCounter
                                    );
                                    upClearInterval(progressTimerId, delayTimerId);
                                }}
                                onTouchStart={e =>
                                    !props.scrollState && downSetInterval(
                                        e.currentTarget,
                                        item.progress,
                                        item.id
                                    )
                                }
                                onTouchEnd={() => {
                                    props.putTodo(
                                        item.id,
                                        item.content,
                                        progressCounter
                                    );
                                    upClearInterval(progressTimerId, delayTimerId);
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