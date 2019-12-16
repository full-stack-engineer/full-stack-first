import React, { FC, useState, useEffect, useRef } from "react";
import CloseButton from "../Button/CloseButton";
import { TodoState } from "../../redux/states/todoState";
import { TodoAction } from "../../redux/container/todoContainer";
import { dateShaping, scrollJudge } from "../../lib/lib";
import store from "../../redux/store";
import "./Todo.scss";

interface TodoInterface {
  todos: TodoResponseData[];
  toggle: boolean;
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
const downSetInterval = (event: any, itemProgress: number) => {
  let count = 0;
  delayTimerId = setTimeout(() => {
    if (store.getState().todo.scrollState === false) {
      const todoBar = event.querySelector(".Todo__bar");
      progressTimerId = setInterval(() => {
        if (todoBar && itemProgress + count < 100) {
          todoBar.style.cssText = `width:${itemProgress + count++ + 1}%`;
          progressCounter = itemProgress + count;
        }
      }, 32);
    }
  }, 200);
};

const upClearInterval = (
  setIntervalId: NodeJS.Timeout,
  setTimeoutId: NodeJS.Timeout
) => {
  clearInterval(setIntervalId);
  clearInterval(setTimeoutId);
};

type TodoProps = TodoInterface & TodoState & TodoAction;

const Todo: FC<TodoProps> = (props: TodoProps) => {
  const [doList, setDoList] = useState(false);
  const todoListRef = useRef(null);

  useEffect(() => {
    props.toggle ? setDoList(true) : setDoList(false);
    todoListRef.current.scrollLeft = 0;
  }, [props.toggle]);

  return (
    <div className="Todo">
      <ul className="Todo__list" ref={todoListRef} onScroll={scrollJudge}>
        {props.toggle === true
          ? props.todos.filter(item => item.progress !== 100).length === 0 && (
              <div className="Todo__box">
                <div className="Todo__boxInner">
                  <p className="Todo__text">
                    「+」ボタンからタスクを追加してみましょう
                  </p>
                </div>
              </div>
            )
          : props.todos.filter(item => item.progress === 100).length === 0 && (
              <div className="Todo__box">
                <div className="Todo__boxInner">
                  <p className="Todo__text">
                    タスクを完了できるように頑張りましょう
                  </p>
                </div>
              </div>
            )}
        {props.todos
          .filter(item =>
            doList ? item.progress !== 100 : item.progress === 100
          )
          .sort((a, b) => (a.progress < b.progress ? 1 : -1))
          .map((item, i) => (
            <li className="Todo__item fadeIn" key={i}>
              <CloseButton onClick={() => props.deleteTodo(item.id)} />
              <div
                className="Todo__box"
                onMouseDown={e =>
                  !props.scrollState &&
                  downSetInterval(e.currentTarget, item.progress)
                }
                onMouseUp={() => {
                  props.putTodo(item.id, item.content, progressCounter);
                  upClearInterval(progressTimerId, delayTimerId);
                }}
                onTouchStart={e =>
                  !props.scrollState &&
                  downSetInterval(e.currentTarget, item.progress)
                }
                onTouchEnd={() => {
                  props.putTodo(item.id, item.content, progressCounter);
                  upClearInterval(progressTimerId, delayTimerId);
                }}
              >
                <div className="Todo__boxInner">
                  {doList ? (
                    <div className="Todo__bgBar">
                      <span
                        className="Todo__bar"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  ) : (
                    <div className="Todo__success">
                      <span className="Todo__successDay">
                        {dateShaping(item.updated_at, "day")}
                      </span>
                      <span className="Todo__successTime">
                        {dateShaping(item.updated_at, "time")}
                      </span>
                    </div>
                  )}
                  <p className="Todo__text">{item.content}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
