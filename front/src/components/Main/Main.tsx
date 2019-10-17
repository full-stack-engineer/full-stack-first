import React, { FC, useState, useEffect } from "react";
import Profile from "../Profile/Profile";
import Total from "../Total/Total";
import Toggle from "../Toggle/Toggle";
import Todo from "../Todo/Todo";
import PlusButton from "../Button/PlusButton";
import AddTask from "../Task/AddTask";
import DoListButton from "../Button/DoListButton";
import DoneListButton from "../Button/DoneListButton";
import { TodoState } from "../../redux/states/mainState";
import { TodoAction } from "../../redux/container/mainContainer";
import "./Main.scss";

type MainProps = TodoState & TodoAction;

const Main: FC<MainProps> = (props: MainProps) => {
    const [plusButton, setPlusButton] = useState(false);
    const plusButtonFlg = () => {
        setPlusButton(!plusButton);
    }

    const [toggleButton, setToggleButton] = useState(true);
    const toggleButtonFlg = (flg: boolean) => {
        setToggleButton(flg);
    }

    useEffect(() => {
        props.getTodo();
    }, [localStorage.accessToken]);
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
                    <div className="Main__totalMargin">
                        <Total
                            title={toggleButton ? "本日" : "これまで"}
                            todos={props.data.length}
                        />
                    </div>
                    <Toggle toggleButtonFlg={toggleButtonFlg} />
                    <div className="Main__todoMargin">
                        <Todo todos={props.data} />
                    </div>
                    <div className="Main__plusButtonCenter">
                        <PlusButton plusButtonFlg={plusButtonFlg} />
                    </div>
                </div>
            </div>
            {plusButton &&
                <AddTask plusButtonFlg={plusButtonFlg} />
            }
        </React.Fragment>
    )
}

export default Main;