import React, { FC, useState } from "react";
import Profile from "../Profile/Profile";
import TextArea from "../TextArea/TextArea";
import AddTaskButton from "../Button/AddTaskButton";
import CloseButton from "../Button/CloseButton";
import "./AddTask.scss";

interface AddTask {
    plusButtonFlg: any
}

const AddTask: FC<AddTask> = props => {
    const [textArea, setTextArea] = useState("");
    const textAreaValue = (value: string) => {
        setTextArea(value);
    }

    // axiosでタスクをpostするところ
    const postTextAreaValue = () => {
        console.log("送信した内容: ", textArea);
    }

    return (
        <div className="AddTask">
            <div className="AddTask__topArea">
                <Profile
                    src="https://66.media.tumblr.com/624be961c064f228f52ceb3d17c00998/tumblr_p9iby2ty8P1vc1y9yo1_1280.jpg"
                    alt="プロフィール画像"
                    name="よだっちょ"
                />
                <CloseButton plusButtonFlg={props.plusButtonFlg} />
            </div>
            <TextArea
                placeholder="タスクを追加してみよう！"
                textAreaValue={textAreaValue}
            />
            <AddTaskButton
                plusButtonFlg={props.plusButtonFlg}
                postTextAreaValue={postTextAreaValue}
            />
        </div>
    )
}

export default AddTask;