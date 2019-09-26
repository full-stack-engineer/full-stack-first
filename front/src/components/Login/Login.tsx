import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LoginSNS from "./LoginSNS";
import "./Login.scss";
import axios from 'axios';

import LoginContainer from "../../redux/container/loginContainer"

import image from "../../assets/twitter.svg";

interface LoginInterface {
    emailText: string;
    passwordText: string;
    passwordConfirmedText: string;
    buttonText: string;
    getLoginResult?: any;
}

export default class Login extends Component<any, LoginInterface> {
    constructor(props: LoginInterface) {
        super(props);
        this.signInFunction = this.signInFunction.bind(this);
        this.state = {
            emailText: "ebiebi@example.com",
            passwordText: "unchidane",
            passwordConfirmedText: "",
            buttonText: "ログイン"
        }
    }

    signInFunction = async () => {
        let LOGIN_ENDPOINT = "http://localhost:3000/api/v1/auth/sign_in";

        await axios.post(LOGIN_ENDPOINT, {
            email: this.state.emailText,
            password: this.state.passwordText
        })
            .then((results) => {
                this.props.getLoginResult(results)
            })
            .catch(function (error) {
                console.log('ERROR!! occurred in Backend.');
            });
    }

    render() {
        return (
            <div className="Login">
                <div className="Login__inner">
                    <div className="Login__form">
                        <LoginContainer
                            placeholder="メールアドレス"
                            type="email"
                            name="emailText"
                        />
                        <LoginContainer
                            placeholder="パスワード"
                            type="password"
                            name="passwordText"
                        />
                        <LoginContainer
                            placeholder="パスワード再入力"
                            type="password"
                            name="passwordConfirmdText"
                        />
                        <LoginButton
                            type="submit"
                            name="buttonText"
                            value={this.state.buttonText}
                            buttonText={this.state.buttonText}
                            signInFunction={this.signInFunction}
                        />
                        <LoginSNS
                            src={image}
                            alt="Twitterロゴ"
                        />
                    </div>
                </div>
            </div>
        )
    }
}