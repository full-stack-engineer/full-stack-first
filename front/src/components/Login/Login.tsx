import React, { Component } from "react";
import LoginInputBox from "./LoginInputBox";
import LoginButton from "./LoginButton";
import LoginSNS from "./LoginSNS";
import "./Login.scss";
import axios from 'axios';


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

    signInFunction = () => {
        let LOGIN_ENDPOINT = "http://localhost:3000/api/v1/auth/sign_in";

        axios.post(LOGIN_ENDPOINT, {
            email: "ebiebi@example.com",
            password: "unchidane"
        })
            .then((results) => {
                console.log(results);
            })
            .catch(function (error) {
                console.log('ERROR!! occurred in Backend.');
            });
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
                            buttonText={this.state.buttonText}
                            onClick={this.signInFunction}
                        />
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