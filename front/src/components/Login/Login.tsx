import React, { Component } from "react";
import LoginInputBox from "./LoginInputBox";
import LoginButton from "./LoginButton";
import LoginSNS from "./LoginSNS";
import "./Login.scss";

import image from "../../assets/twitter.svg";

interface LoginInterface {
    buttonText: string;
}

export default class Login extends Component<{}, LoginInterface> {
    constructor(props: LoginInterface) {
        super(props);

        this.state = {
            buttonText: "ログイン"
        }
    }

    render() {
        return (
            <div className="Login">
                <div className="Login__inner">
                    <form className="Login__form" action="">
                        <LoginInputBox
                            placeholder="メールアドレス"
                            type="email"
                            name="email"
                        />
                        <LoginInputBox
                            placeholder="パスワード"
                            type="password"
                            name="password"
                        />
                        <LoginInputBox
                            placeholder="パスワード再入力"
                            type="password"
                            name="password"
                        />
                        <LoginButton
                            href="#dummy"
                            type="submit"
                            name={this.state.buttonText}
                            value={this.state.buttonText}
                            buttonText={this.state.buttonText} />
                        <LoginSNS
                            href="#dummy"
                            src={image}
                            alt="Twitterロゴ"
                        />
                    </form>
                </div>
            </div>
        )
    }
}