import React, { FC } from "react";
import TextArea from "../../components/TextArea/TextArea";
import AddTodoButton from "../../components/Button/AddTodoButton";
import store from "../../redux/store";
import { mainButtonActions, todoActions } from "../../redux/actions/actionTypes";
import { MainState } from "../../redux/states/mainState";
import { AddTodoAction } from "../../redux/container/addTodoContainer";
import "./AddTodo.scss";

type AddTodoProps = MainState & AddTodoAction;

const AddTodo: FC<AddTodoProps> = (props: AddTodoProps) => {
    return (
        <div className="AddTodo__inner">
            <TextArea
                placeholder="タスクを追加してみよう！"
                onChange={e => props.inputTextarea(e.target.value.replace(/\n/g, " "))}
            />
            <AddTodoButton
                onClick={() => {
                    props.postTodo(props.textarea, 0);
                    store.dispatch(todoActions.addDoProgress());
                    store.dispatch(mainButtonActions.pushCloseButton());
                }}
            />
        </div>
    )
}

export default AddTodo;