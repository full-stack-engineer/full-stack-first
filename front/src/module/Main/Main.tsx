import React, { FC, useState, useEffect } from "react";
import AddTodoContainer from "../../redux/container/addTodoContainer";
import List from "../List/List";
import PlusButton from "../../components/Button/PlusButton";
import Profile from "../../components/Profile/Profile";
import Total from "../../components/Total/Total";
import TodoContainer from "../../redux/container/todoContainer";
import Toggle from "../../components/Toggle/Toggle";
import TransformButton from "../../components/Button/TransformButton";
import { getTodoCount } from "../../lib/lib";
import { MainState } from "../../redux/states/mainState";
import { MainAction } from "../../redux/container/mainContainer";
import { useTransition, animated } from "react-spring";
import store from "../../redux/store";
import "./Main.scss";

type MainProps = MainState & MainAction;

const Main: FC<MainProps> = (props: MainProps) => {
    const { data } = props
    const transitionList = useTransition(props.doList || props.doneList, null, {
        from: { left: '100%' },
        enter: { left: '0%' },
        leave: { left: '100%' }
    });
    const transitionAddTodo = useTransition(props.puls, null, {
        from: { bottom: '100%' },
        enter: { bottom: '0%' },
        leave: { bottom: "100%" }
    })

    useEffect(() => {
        getTodoCount(props.getTodo)
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
                        <TransformButton
                            onClick={
                                props.toggle
                                    ? props.pushDoListButton
                                    : props.pushDoneListButton
                            }
                            listFlag={
                                (props.doList || props.doneList || props.puls)
                                    ? true
                                    : false
                            }
                        />
                    </div>
                    <div className="Main__totalMargin">
                        <Total
                            title={props.toggle ? "Do" : "Done"}
                            todos={props.toggle ? props.doProgress : props.doneProgress}
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
            {transitionAddTodo.map(({ item, key, props }) => (
                item && (
                    <animated.div
                        className="AddTodo"
                        key={key}
                        style={props}
                    >
                        <AddTodoContainer />
                    </animated.div>
                )
            ))}
            {transitionList.map(({ item, key, props }) => (
                item && (
                    <animated.div
                        className="List"
                        key={key}
                        style={props}
                    >
                        <List todos={data} />
                    </animated.div>
                )
            ))}
        </React.Fragment>
    )
}

export default Main;