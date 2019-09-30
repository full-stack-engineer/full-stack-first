import React, { FC, useState } from "react";
import Profile from "../Profile/Profile";
import Total from "../Total/Total";
import Toggle from "../Toggle/Toggle";
import Todo from "../Todo/Todo";
import PlusButton from "../Button/PlusButton";
import AddTask from "../Task/AddTask";
import DoListButton from "../Button/DoListButton";
import DoneListButton from "../Button/DoneListButton";
import mockResponce from "../../mock-response.json";
import "./Main.scss";

const Main: FC = () => {
    const [plusButton, setPlusButton] = useState(false);
    const plusButtonFlg = () => {
        setPlusButton(!plusButton);
    }

    const [toggleButton, setToggleButton] = useState(true);
    const toggleButtonFlg = (flg: boolean) => {
        setToggleButton(flg);
    }

    return (
        <React.Fragment>
            <div className="Main">
                <div className="Main__bg" />
                <div className="Main__inner">
                    <div className="Main__topArea">
                        <Profile
                            src="https://66.media.tumblr.com/624be961c064f228f52ceb3d17c00998/tumblr_p9iby2ty8P1vc1y9yo1_1280.jpg"
                            alt="プロフィール画像"
                            name="よだっちょ"
                        />
                        {toggleButton ?
                            <DoListButton /> :
                            <DoneListButton />
                        }
                    </div>
                    <Total
                        title={toggleButton ? "本日" : "これまで"}
                        todos={mockResponce.data.length}
                    />
                    <Toggle toggleButtonFlg={toggleButtonFlg} />
                    <Todo todos={mockResponce} />
                    <PlusButton plusButtonFlg={plusButtonFlg} />
                </div>
            </div>
            {plusButton && <AddTask plusButtonFlg={plusButtonFlg} />}
        </React.Fragment>
    )
}

export default Main;