import React, { FC, useState, useEffect } from "react";
import ListButton from "../../components/Button/ListButton";
import List from "../List/List";
import PlusButton from "../../components/Button/PlusButton";
import Profile from "../../components/Profile/Profile";
import Total from "../../components/Total/Total";
import Toggle from "../../components/Toggle/Toggle";
import { MainState } from "../../redux/states/mainState";
import { MainAction } from "../../redux/container/mainContainer";
import AddTodoContainer from "../../redux/container/addTodoContainer";
import TodoContainer from "../../redux/container/todoContainer";
import { getTodoCount } from "../../lib/lib";
import store from "../../redux/store";
import "./Main.scss";

type MainProps = MainState & MainAction;

const Main: FC<MainProps> = (props: MainProps) => {
    const [doProgress, setDoProgress] = useState(0);
    const [doneProgress, setDoneProgress] = useState(0);
    useEffect(() => {
        getTodoCount(props.getTodo, setDoProgress, setDoneProgress)
    }, []);

    return (
        <React.Fragment>
            <div className="Main">
                <div className="Main__bg" />
                <div className="Main__inner">
                    <div className="Main__topArea">
                        <Profile
                            src="https://66.media.tumblr.com/624be961c064f228f52ceb3d17c00998/tumblr_p9iby2ty8P1vc1y9yo1_1280.jpg"
                            alt="プロフィール画像"
                            name={store.getState().user.results.data.user.name}
                        />
                        <ListButton
                            addClassName={
                                props.toggle
                                    ? ""
                                    : "ListButton--done"
                            }
                            onClick={props.toggle
                                ? props.pushDoListButton
                                : props.pushDoneListButton
                            }
                        />
                    </div>
                    <div className="Main__totalMargin">
                        <Total
                            title={props.toggle ? "Do" : "Done"}
                            todos={props.toggle ? doProgress : doneProgress}
                        />
                    </div>
                    <div className="Main__toggleMargin">
                        <Toggle onChange={props.slideToggleButton} />
                    </div>
                    <div className="Main__todoMargin">
                        <TodoContainer todos={props.data} />
                    </div>
                    <div className="Main__plusButtonCenter">
                        <PlusButton onClick={props.pushPlusButton} />
                    </div>
                </div>
            </div>
            {props.puls && <AddTodoContainer />}
            {(props.doList || props.doneList) && <List todos={props.data} />}
        </React.Fragment>
    )
}

export default Main;