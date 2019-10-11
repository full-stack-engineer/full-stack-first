import React, { FC } from "react";
import LoginInputBox from "./LoginInputBox"
import LoginButton from "./LoginButton";
import ReturnButton from "../Button/ReturnButton";
import { LoginState } from "../../redux/states/loginState";
import { LoginAction } from "../../redux/container/loginContainer";
import "./Login.scss";

type LoginProps = LoginState & LoginAction;

interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T;
}

const Login: FC<LoginProps> = (props: LoginProps) => {
    const isSignUp = false;
    return (
        <div className="Login">
            <div className="Login__inner">
                <div className="Login__form">
                    <ReturnButton
                        returnButtonFlg={() => console.log("fugafuga")}
                    />
                    <div className="Login__loginInputBoxMargin">
                        <LoginInputBox
                            placeholder="名前"
                            type="text"
                            name="text"
                            onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputName(e.target.value)}
                        />
                    </div>
                    <div className="Login__loginInputBoxMargin">
                        <LoginInputBox
                            placeholder="メールアドレス"
                            type="email"
                            name="emailText"
                            onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputEmail(e.target.value)}
                        />
                    </div>
                    <div className="Login__loginInputBoxMargin">
                        <LoginInputBox
                            placeholder="パスワード"
                            type="password"
                            name="passwordText"
                            onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputPassword(e.target.value)}
                        />
                    </div>
                    <LoginInputBox
                        placeholder="パスワード再入力"
                        type="password"
                        name="passwordConfirmdText"
                        onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputPasswordConfirmed(e.target.value)}
                    />
                    <div className="Login__loginButtonMargin">
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
                </div>
            </div>
        </div>
    )
}

export default Login;