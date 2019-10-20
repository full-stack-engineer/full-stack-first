import React, { FC, useState, useEffect } from "react";
import AddTodo from "../../components/Todo/AddTodo";
import DoListButton from "../../components/Button/DoListButton";
import DoneListButton from "../../components/Button/DoneListButton";
import List from "../List/List";
import PlusButton from "../../components/Button/PlusButton";
import Profile from "../../components/Profile/Profile";
import Total from "../../components/Total/Total";
import Toggle from "../../components/Toggle/Toggle";
import Todo from "../../components/Todo/Todo";
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
    const toggleButtonFlg = () => {
        setToggleButton(!toggleButton);
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
                        {toggleButton
                            ? <DoListButton />
                            : <DoneListButton />
                        }
                    </div>
                    <div className="Main__totalMargin">
                        <Total
                            title={toggleButton ? "本日" : "これまで"}
                            todos={props.data.length}
                        />
                    </div>
                    <div className="Main__toggleMargin">
                        <Toggle toggleButtonFlg={toggleButtonFlg} />
                    </div>
                    <div className="Main__todoMargin">
                        <Todo todos={props.data} />
                    </div>
                    <div className="Main__plusButtonCenter">
                        <PlusButton plusButtonFlg={plusButtonFlg} />
                    </div>
                </div>
            </div>
            {plusButton && <AddTodo plusButtonFlg={plusButtonFlg} />}
            <List todos={props.data} />
        </React.Fragment>
    )
}

export default Main;