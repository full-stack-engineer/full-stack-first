import React, { FC, useState } from "react";
import Profile from "../../components/Profile/Profile";
import TextArea from "../../components/TextArea/TextArea";
import AddTodoButton from "../../components/Button/AddTodoButton";
import CloseButton from "../../components/Button/CloseButton";
import store from "../../redux/store";
import { mainButtonActions } from "../../redux/actions/actionTypes";
import { MainState } from "../../redux/states/mainState";
import { AddTodoAction } from "../../redux/container/addTodoContainer";
import "./AddTodo.scss";

type AddTodoProps = MainState & AddTodoAction;

const AddTodo: FC<AddTodoProps> = (props: AddTodoProps) => {
    const [textArea, setTextArea] = useState("");
    const textAreaValue = (value: string) => {
        setTextArea(value);
    }

    // axiosでタスクをpostするところ
    const postTextAreaValue = () => {
        console.log("送信した内容: ", textArea);
    }

    return (
        <div className="AddTodo">
            <div className="AddTodo__topAreaMargin">
                <Profile
                    src="https://66.media.tumblr.com/624be961c064f228f52ceb3d17c00998/tumblr_p9iby2ty8P1vc1y9yo1_1280.jpg"
                    alt="プロフィール画像"
                    name="よだっちょ"
                />
                <CloseButton onClick={() => { store.dispatch(mainButtonActions.pushCloseButton()) }} />
            </div>
            <div className="AddTodo__textareaMargin">
                <TextArea
                    placeholder="タスクを追加してみよう！"
                    onChange={e => props.inputTextarea(e.target.value.replace(/\n/g, " "))}
                />
            </div>
            <div className="AddTodo__AddTodoButtonCenter">
                <AddTodoButton
                    onClick={() => {
                        props.postTodo(props.textarea, 0);
                        store.dispatch(mainButtonActions.pushCloseButton());
                    }}
                    postTextAreaValue={postTextAreaValue}
                />
            </div>
        </div>
    )
}

export default AddTodo;