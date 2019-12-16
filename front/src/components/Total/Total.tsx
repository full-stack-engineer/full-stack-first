import React, { FC } from "react";
import "./Total.scss";

interface Total {
  title: string;
  todos: number;
}

const Total: FC<Total> = props => {
  return (
    <div className="Total">
      <div className="Total__inner">
        <h2 className="Total__title">{props.title}</h2>
        <div className="Total__todo">
          <p className="Total__number">{props.todos}</p>
          <p className="Total__text">Todos</p>
        </div>
      </div>
    </div>
  );
};

export default Total;
