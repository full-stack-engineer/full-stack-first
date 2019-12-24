import React, { FC, useState, useEffect } from "react";
import { map, dateShaping } from "../../lib/lib";
import "./List.scss";

interface ListInterface {
  todos: ListResponseData[];
  toggle: boolean;
}

export interface ListResponseData {
  id: number;
  content: string;
  user_id: number;
  progress: number;
  created_at: string;
  updated_at: string;
}

const List: FC<ListInterface> = props => {
  const [doList, setDoList] = useState(false);
  useEffect(() => {
    props.toggle ? setDoList(true) : setDoList(false);
  }, [props.toggle]);

  return (
    <ul className="List__list">
      {props.toggle === true
        ? props.todos.filter(item => item.progress !== 100).length === 0 && (
            <li className="List__item">
              <p className="List__text List__text--center">
                進行中のタスクはありません
              </p>
            </li>
          )
        : props.todos.filter(item => item.progress === 100).length === 0 && (
            <li className="List__item">
              <p className="List__text List__text--center">
                完了したのタスクはありません
              </p>
            </li>
          )}
      {props.todos
        .filter(item =>
          doList ? item.progress !== 100 : item.progress === 100
        )
        .sort((a, b) => (a.progress < b.progress ? 1 : -1))
        .map((item, i) => (
          <li className="List__item" key={i}>
            {doList ? (
              <div className="List__circle">
                <span
                  className="List__circleProgress List__circleProgress--right"
                  style={
                    item.progress <= 50
                      ? {
                          transform: `rotate(${map(
                            item.progress,
                            0,
                            100,
                            0,
                            360
                          )}deg)`
                        }
                      : { background: "#4665ff" }
                  }
                />
                <span
                  className="List__circleProgress List__circleProgress--left"
                  style={
                    item.progress > 50
                      ? {
                          transform: `rotate(${map(
                            item.progress,
                            0,
                            100,
                            0,
                            360
                          ) - 180}deg)`
                        }
                      : {}
                  }
                />
                <span className="List__circleInner" />
              </div>
            ) : (
              <div className="List__success">
                <span className="List__successDay">
                  {dateShaping(item.updated_at, "day")}
                </span>
                <span className="List__successTime">
                  {dateShaping(item.updated_at, "time")}
                </span>
              </div>
            )}
            <p className="List__text">{item.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default List;
