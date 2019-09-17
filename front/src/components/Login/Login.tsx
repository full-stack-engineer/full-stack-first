import React, { Component } from "react";
import "./Login.scss";
import LoginButton from "./LoginButton";
import LoginInputBox from "./LoginInputBox";
import LoginSNS from "./LoginSNS";

interface ILoginInterface {
    buttonText: string;
}

export default class Login extends Component<{}, ILoginInterface> {
    constructor(props: ILoginInterface) {
        super(props);

        this.state = {
            buttonText: "ログイン"
        }
    }

    public render() {
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
                            src="../../images/twitter.svg"
                            alt="Twitterロゴ"
                        />
                    </form>
                </div>
            </div>
        )
    }
}