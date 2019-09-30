import image from "../../assets/twitter.svg";
import React, { FC } from "react";
import LoginInputBox from "./LoginInputBox"
import LoginButton from "./LoginButton";
import LoginSNS from "./LoginSNS";
import store from "../../redux/store";
import { LoginState } from "../../redux/states/loginState";
import { LoginAction } from "../../redux/container/loginContainer";
import "./Login.scss";

type LoginProps = LoginState & LoginAction;

interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T;
}


const Login: FC<LoginProps> = (props: LoginProps) => {
    return (
        <div className="Login">
            <div className="Login__inner">
                <div className="Login__form">
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
                    <LoginInputBox
                        placeholder="パスワード再入力"
                        type="password"
                        name="passwordConfirmdText"
                        onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputPasswordConfirmd(e.target.value)}
                    />
                    <LoginButton
                        type="submit"
                        name="buttonText"
                        value={"ログイン"}
                        buttonText={"ログイン"}
                        // 関数で発火させないと無限ループ
                        onClick={() => { props.postLoginInfo(store.getState().login.email, store.getState().login.password) }}
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

export default Login;