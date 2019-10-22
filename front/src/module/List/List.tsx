import React, { FC } from "react";
import CloseButton from "../../components/Button/CloseButton";
import store from "../../redux/store";
import { mainButtonActions } from "../../redux/actions/actionTypes";
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

const map = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number => {

    let result = 0;
    result = value <= fromMin
        ? toMin
        : value >= fromMax
            ? toMax
            : (() => {
                let ratio: number = (toMax - toMin) / (fromMax - fromMin);
                return (value - fromMin) * ratio + toMin;
            })();

    return result;
};

const List: FC<ListInterface> = props => {
    return (
        <div className="List">
            <div className="List__topArea">
                <CloseButton onClick={() => { store.dispatch(mainButtonActions.pushCloseButton()) }} />
            </div>
            <ul className="List__list">
                {
                    props.todos.map((item, i) => (
                        <li className="List__item" key={i}>
                            <div className="List__circle">
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
                            <p className="List__text">{item.content}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List;
