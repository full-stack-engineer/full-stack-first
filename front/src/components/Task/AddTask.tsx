import React from "react";
import Profile from "../Profile/Profile";
import TextArea from "../TextArea/TextArea";
import AddTaskButton from "../Button/AddTaskButton";
import "./AddTask.scss";

import image from "../../assets/girl.jpg";

interface AddTask {
    plusButtonFlg: any
}

const AddTask: React.FC<AddTask> = props => {
    return (
        <div className="AddTask">
            <Profile
                src={image}
                alt="プロフィール画像"
                name="Three4C"
            />
            <TextArea
                placeholder="タスクを追加してみよう！"
            />
            <AddTaskButton plusButtonFlg={props.plusButtonFlg} />
        </div>
    )
}

export default AddTask;