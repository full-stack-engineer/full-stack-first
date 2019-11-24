import React, { FC, useState, useEffect } from "react";
import store from "../../redux/store";
import { map, dateShaping } from "../../lib/lib";
import "./List.scss";

interface ListInterface {
    todos: ListResponseData[];
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
        store.getState().main.doList
            ? setDoList(true)
            : setDoList(false)
    }, [])
    return (
        <ul className="List__list">
            {props.todos
                .filter(item => (
                    doList
                        ? item.progress !== 100
                        : item.progress === 100
                ))
                .map((item, i) => (
                    <li className="List__item" key={i}>
                        {doList
                            ? <div className="List__circle">
                                <span
                                    className="List__circleProgress List__circleProgress--right"
                                    style={
                                        item.progress <= 50
                                            ? { transform: `rotate(${map(item.progress, 0, 100, 0, 360)}deg)` }
                                            : { background: "#4665ff" }
                                    }
                                />
                                <span
                                    className="List__circleProgress List__circleProgress--left"
                                    style={
                                        item.progress > 50
                                            ? { transform: `rotate(${map(item.progress, 0, 100, 0, 360) - 180}deg)` }
                                            : {}
                                    }
                                />
                                <span className="List__circleInner" />
                            </div>
                            : <div className="List__success">
                                <span className="List__successDay">{dateShaping(item.updated_at, "day")}</span>
                                <span className="List__successTime">{dateShaping(item.updated_at, "time")}</span>
                            </div>
                        }
                        <p className="List__text">{item.content}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default List;
