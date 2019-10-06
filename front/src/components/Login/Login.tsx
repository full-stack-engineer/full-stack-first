import image from "../../assets/twitter.svg";
import React, { FC, useState } from "react";
import LoginInputBox from "./LoginInputBox"
import LoginButton from "./LoginButton";
import LoginSNS from "./LoginSNS";
import ReturnButton from "../Button/ReturnButton";
import { LoginState } from "../../redux/states/loginState";
import { LoginAction } from "../../redux/container/loginContainer";
import icon from "../../assets/icon.svg"
import "./Login.scss";

type LoginProps = LoginState & LoginAction;

interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T;
}

const Login: FC<LoginProps> = (props: LoginProps) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    return (
        <div className="Login">
            <div className="Login__inner">
                {isSignUp || isLogIn
                    ? <div className="Login__form">
                        <ReturnButton
                            returnButtonFlg={() => {
                                if (isSignUp) {
                                    setIsSignUp(false);

                                } else {
                                    setIsLogIn(false);
                                }
                            }}
                        />
                        {isSignUp &&
                            <LoginInputBox
                                placeholder="名前"
                                type="text"
                                name="text"
                                onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputName(e.target.value)}
                            />
                        }
                        <LoginInputBox
                            placeholder="メールアドレス"
                            type="email"
                            name="emailText"
                            onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputEmail(e.target.value)}
                        />
                        <LoginInputBox
                            placeholder="パスワード"
                            type="password"
                            name="passwordText"
                            onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputPassword(e.target.value)}
                        />
                        {isSignUp &&
                            <LoginInputBox
                                placeholder="パスワード再入力"
                                type="password"
                                name="passwordConfirmdText"
                                onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputPasswordConfirmed(e.target.value)}
                            />}
                        <LoginButton
                            type="submit"
                            name="buttonText"
                            value={isSignUp ? "アカウント作成" : "ログイン"}
                            buttonText={isSignUp ? "アカウント作成" : "ログイン"}
                            // 関数で発火させないと無限ループ
                            onClick={() => {
                                if (isSignUp) {
                                    props.postSignUp(String(props.name), props.email, props.password, String(props.passwordConfirmd));
                                } else {
                                    props.postLoginInfo(props.email, props.password);
                                }
                                props.pushLoginButton();
                            }}
                        />
                    </div>
                    : <div className="Login__select">
                        <p className="Login__text">「いま」やらないと<br />いけないことを<br />整理しよう</p>
                        <img
                            className="Login__icon"
                            src={icon}
                            alt="dogressのアイコン" />
                        <LoginButton
                            type="submit"
                            name="buttonText"
                            value="アカウントを作成"
                            buttonText="アカウント作成"
                            onClick={() => setIsSignUp(true)}
                        />
                        <LoginButton
                            type="submit"
                            name="buttonText"
                            value="ログイン"
                            buttonText="ログイン"
                            onClick={() => setIsLogIn(true)}
                        />
                        <LoginSNS
                            src={image}
                            alt="Twitterロゴ"
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Login;