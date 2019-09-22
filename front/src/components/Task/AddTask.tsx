import React from "react";
import Profile from "../Profile/Profile";
import TextArea from "../TextArea/TextArea";
import "./AddTask.scss";

import image from "../../assets/girl.jpg";

const AddTask: React.FC = () => {
    return (
        <div className="AddTask">
            <Profile
                src={image}
                alt="プロフィール画像"
                name="Three4C"
            />
            <TextArea />
        </div>
    )
}

export default AddTask;