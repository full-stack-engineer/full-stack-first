import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Total from "../Total/Total";
import "./Main.scss";

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Main__bg" />
                <div className="Main__inner">
                    <Profile
                        src="../../../../assets/girl.jpg"
                        alt="プロフィール画像"
                        name="Three4C"
                    />
                    <Total title="本日" todos={34} />
                </div>
            </div>
        )
    }
}