import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Total from "../Total/Total";
import Toggle from "../Toggle/Toggle";
import Todo from "../Todo/Todo";
import AddTaskButton from "../Button/AddTaskButton";
import AddTask from "../Task/AddTask";
import mockResponce from "../../mock-response.json";
import "./Main.scss";

import image from "../../assets/girl.jpg";

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Main">
                    <div className="Main__bg" />
                    <div className="Main__inner">
                        <Profile
                            src={image}
                            alt="プロフィール画像"
                            name="Three4C"
                        />
                        <Total
                            title="本日"
                            todos={34}
                        />
                        <Toggle />
                        <Todo todos={mockResponce} />
                        <AddTaskButton />
                    </div>
                </div>
                <AddTask />
            </React.Fragment>
        )
    }
}