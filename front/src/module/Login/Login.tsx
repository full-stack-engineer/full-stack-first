import React, { FC, useState, useEffect } from "react";
import LoginInputBox from "../../components/Login/LoginInputBox"
import LoginButton from "../../components/Login/LoginButton";
import ReturnButton from "../../components/Button/ReturnButton";
import { LoginState } from "../../redux/states/loginState";
import { LoginAction } from "../../redux/container/loginContainer";
import store from "../../redux/store";
import { selectActions } from "../../redux/actions/actionTypes"
import "./Login.scss";

type LoginProps = LoginState & LoginAction;

interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T;
}

const Login: FC<LoginProps> = (props: LoginProps) => {
    const [createAccount, setCreateAccount] = useState(false);

    useEffect(() => {
        if (store.getState().select.createAccount === true) {
            setCreateAccount(true);
        }
    }, [])

    return (
        <div className="Login">
            <div className="Login__inner">
                <div className="Login__form">
                    <ReturnButton
                        onClick={() => store.dispatch(selectActions.backToTopButton())}
                    />
                    {createAccount &&
                        <div className="Login__loginInputBoxMargin">
                            <LoginInputBox
                                placeholder="名前"
                                type="text"
                                name="text"
                                onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputName(e.target.value)}
                            />
                        </div>
                    }
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
                    {createAccount &&
                        <LoginInputBox
                            placeholder="パスワード再入力"
                            type="password"
                            name="passwordConfirmdText"
                            onChange={(e: HTMLElementEvent<HTMLInputElement>) => props.inputPasswordConfirmed(e.target.value)}
                        />
                    }
                    <div className="Login__loginButtonMargin">
                        <LoginButton
                            type="submit"
                            name="buttonText"
                            value={createAccount ? "アカウント作成" : "ログイン"}
                            buttonText={createAccount ? "アカウント作成" : "ログイン"}
                            // 関数で発火させないと無限ループ
                            onClick={() => {
                                if (createAccount) {
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