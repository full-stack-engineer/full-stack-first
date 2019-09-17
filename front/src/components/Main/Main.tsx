import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Total from "../Total/Total";
import Toggle from "../Toggle/Toggle";
import "./Main.scss";

import image from "../../assets/girl.jpg";

export default class Main extends Component {
    render() {
        return (
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
                </div>
            </div>
        )
    }
}