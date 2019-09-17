import React from "react";
import "./Total.scss";

interface Total {
    title: string;
    todos: number;
}

const Total: React.FC<Total> = props => {
    return (
        <div className="Total">
            <div className="Total__inner">
                <h1 className="Total__title">{`${props.title}のDone`}</h1>
                <div className="Total__todo">
                    <p className="Total__number">{props.todos}</p>
                    <p className="Total__text">Tasks</p>
                </div>
            </div>
        </div>
    )
}

export default Total;