import React, { FC, useState, useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import ListButton from "../../components/Button/ListButton";
import List from "../List/List";
import PlusButton from "../../components/Button/PlusButton";
import Profile from "../../components/Profile/Profile";
import Total from "../../components/Total/Total";
import Toggle from "../../components/Toggle/Toggle";
import Todo from "../../components/Todo/Todo";
import { MainState } from "../../redux/states/mainState";
import { MainAction } from "../../redux/container/mainContainer";
import store from "../../redux/store";
import "./Main.scss";

type MainProps = MainState & MainAction;

const Main: FC<MainProps> = (props: MainProps) => {
    const [plusButton, setPlusButton] = useState(false);
    const [toggleButton, setToggleButton] = useState(true);
    const [listButton, setListButton] = useState(false);
    store.subscribe(() => {
        store.getState().main.puls
            ? setPlusButton(true)
            : setPlusButton(false)
        store.getState().main.toggle
            ? setToggleButton(true)
            : setToggleButton(false)
        store.getState().main.doList || store.getState().main.doneList
            ? setListButton(true)
            : setListButton(false)
    })

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
                        <ListButton
                            addClassName={
                                toggleButton
                                    ? ""
                                    : "ListButton--done"
                            }
                            onClick={toggleButton
                                ? props.pushDoListButton
                                : props.pushDoneListButton
                            }
                        />
                    </div>
                    <div className="Main__totalMargin">
                        <Total
                            title={toggleButton ? "本日" : "これまで"}
                            todos={props.data.length}
                        />
                    </div>
                    <div className="Main__toggleMargin">
                        <Toggle onChange={props.slideToggleButton} />
                    </div>
                    <div className="Main__todoMargin">
                        <Todo todos={props.data} />
                    </div>
                    <div className="Main__plusButtonCenter">
                        <PlusButton onClick={props.pushPlusButton} />
                    </div>
                </div>
            </div>
            {plusButton && <AddTodo />}
            {listButton && <List todos={props.data} />}
        </React.Fragment>
    )
}

export default Main;